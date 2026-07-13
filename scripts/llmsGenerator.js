import { glob } from "glob";
import { parse } from "node-html-parser";
import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_PATH = path.join(__dirname, "../src/config/config.json");

const DEFAULT_EXCLUDES = ["node_modules", "_astro", "404", "404.html", "**/*.xml", "**/*.txt"];

function getConfig() {
  if (!fs.existsSync(CONFIG_PATH)) throw new Error("config.json not found");
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  if (!config.llms) throw new Error("llms configuration not found in config.json");
  return config;
}

async function discoverHtmlFiles(clientDir, excludePatterns, includePatterns) {
  const relativeClientDir = path.relative(process.cwd(), clientDir).replace(/\\/g, "/");

  const patterns = includePatterns?.length > 0
    ? includePatterns.map((p) => `${relativeClientDir}/${p.replace(/^\/+/, "")}/**/*.html`)
    : [`${relativeClientDir}/**/*.html`];

  const ignores = (excludePatterns || []).map((p) => `${relativeClientDir}/${p.replace(/^\/+/, "")}`);

  const ignore = [...DEFAULT_EXCLUDES.map((p) => `${relativeClientDir}/${p}`), ...ignores];

  let files = await glob(patterns, { ignore });
  files = files.filter((f) => fs.statSync(f).isFile() && f.endsWith(".html"));
  return files.sort();
}

function fileToUrlPath(filePath, clientDir) {
  const relativePath = path.relative(path.resolve(clientDir), path.resolve(filePath));
  let urlPath = relativePath.replace(/\\/g, "/");
  urlPath = urlPath.replace(/\.html$/, "");
  if (urlPath.endsWith("/index") || urlPath === "index") {
    urlPath = urlPath.replace(/\/index$/, "").replace(/^index$/, "");
  }
  return "/" + urlPath;
}

function getTitle(root) {
  return root.querySelector("h1")?.text?.trim()
    || root.querySelector("h2")?.text?.trim()
    || root.querySelector("title")?.text?.trim()
    || "";
}

function getContentElement(root) {
  return root.querySelector("main") || root.querySelector("body");
}

async function processHtml(html) {
  const root = parse(html);
  const title = getTitle(root);

  const metaDescription = root.querySelector('meta[name="description"]');
  const description = metaDescription?.getAttribute("content") || "";

  const contentElement = getContentElement(root);
  let content = "";

  if (contentElement) {
    contentElement.querySelectorAll("script, style, noscript, iframe, svg").forEach((el) => el.remove());

    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
    });

    turndownService.addRule("removeChrome", {
      filter: ["nav", "footer", "header", "aside"],
      replacement: () => "",
    });

    content = turndownService.turndown(contentElement.innerHTML);
  }

  return { title, description, content };
}

async function processHtmlFile(filePath) {
  const html = fs.readFileSync(filePath, "utf8");
  return processHtml(html);
}

function generateMarkdownFile(page, siteUrl, siteName) {
  const url = `${siteUrl}${page.urlPath}`.replace(/(?<=.)\/$/, "");

  let md = "---\n";
  md += `title: "${page.title.replace(/"/g, '\\"')}"\n`;
  md += `url: "${url}"\n`;
  md += `source: "${siteName}"\n`;
  if (page.description) {
    md += `description: "${page.description.replace(/"/g, '\\"')}"\n`;
  }
  md += "---\n\n";
  md += page.content;

  return md;
}

function generateLlmsTxtContent(pages, siteUrl, siteName, siteDescription) {
  let content = `# ${siteName}\n\n`;

  if (siteDescription) {
    content += `> ${siteDescription}\n\n`;
  }

  content += "This content is from the SANE project (Society for AV Norms & Engineering). ";
  content += `License: CC BY-SA 4.0. Website: ${siteUrl}\n\n`;

  const grouped = {};
  pages.forEach((page) => {
    const parts = page.urlPath.split("/").filter(Boolean);
    const group = parts.length === 0 ? "Home" : parts[0];
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push(page);
  });

  const sortedGroups = Object.keys(grouped).sort((a, b) => {
    if (a === "Home") return -1;
    if (b === "Home") return 1;
    return a.localeCompare(b);
  });

  sortedGroups.forEach((group) => {
    const groupName = group.charAt(0).toUpperCase() + group.slice(1);
    content += `## ${groupName}\n\n`;

    grouped[group].forEach((page) => {
      const linkUrl = `${siteUrl}${page.urlPath}`.replace(/(?<=.)\/$/, "");
      const linkText = page.title || page.urlPath;

      if (page.description) {
        content += `- [${linkText}](${linkUrl}): ${page.description}\n`;
      } else {
        content += `- [${linkText}](${linkUrl})\n`;
      }
    });

    content += "\n";
  });

  return content;
}

function generateLlmsFullTxtContent(pages, siteUrl, siteName) {
  let content = `# ${siteName}\n\n`;
  content += `URL: ${siteUrl}\n\n`;
  content += "This content is from the SANE project (Society for AV Norms & Engineering). ";
  content += `License: CC BY-SA 4.0. Website: ${siteUrl}\n\n`;

  pages.forEach((page, index) => {
    const url = `${siteUrl}${page.urlPath}`.replace(/(?<=.)\/$/, "");
    content += `## ${page.title}\n\n`;
    content += `URL: ${url}\n\n`;

    if (page.description) {
      content += `${page.description}\n\n`;
    }

    content += page.content;

    if (index < pages.length - 1) {
      content += "\n\n---\n\n";
    }
  });

  return content;
}

async function generateLlmsFiles() {
  const config = getConfig();
  const llms = config.llms;
  const distFolder = path.join(__dirname, "../dist");

  if (!fs.existsSync(distFolder)) {
    console.error("Error: dist/ folder does not exist. Run 'pnpm build' first.");
    process.exit(1);
  }

  const siteUrl = config.site.base_url.replace(/\/$/, "");
  const siteName = config.site.title;
  const siteDescription = config.metadata?.meta_description || "";

  console.log("Discovering pre-rendered HTML files...");
  const htmlFiles = await discoverHtmlFiles(distFolder, llms.exclude, llms.include);
  console.log(`Found ${htmlFiles.length} pre-rendered HTML files`);

  const pages = [];
  const seenPaths = new Set();

  for (const file of htmlFiles) {
    try {
      const urlPath = fileToUrlPath(file, distFolder);
      if (seenPaths.has(urlPath)) continue;
      seenPaths.add(urlPath);

      const pageData = await processHtmlFile(file);
      if (!pageData.title) {
        console.log(`Skipping ${urlPath}: no title found`);
        continue;
      }

      pages.push({ urlPath, filePath: file, ...pageData });
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  }

  pages.sort((a, b) => {
    if (a.urlPath === "/") return -1;
    if (b.urlPath === "/") return 1;
    return a.urlPath.localeCompare(b.urlPath);
  });

  console.log(`Total pages processed: ${pages.length}\n`);

  if (llms.generate_llms_txt) {
    console.log("Generating llms.txt...");
    const content = generateLlmsTxtContent(pages, siteUrl, siteName, siteDescription);
    fs.writeFileSync(path.join(distFolder, "llms.txt"), content, "utf8");
    console.log("  llms.txt\n");
  }

  if (llms.generate_llms_full_txt) {
    console.log("Generating llms-full.txt...");
    const content = generateLlmsFullTxtContent(pages, siteUrl, siteName);
    fs.writeFileSync(path.join(distFolder, "llms-full.txt"), content, "utf8");
    console.log("  llms-full.txt\n");
  }

  console.log("LLMS generation complete.\n");
  console.log("Summary:");
  console.log(`  Pages processed : ${pages.length}`);
  if (llms.generate_llms_txt) console.log("  llms.txt        : llms.txt");
  if (llms.generate_llms_full_txt) console.log("  llms-full.txt   : llms-full.txt");
}

generateLlmsFiles().catch((error) => {
  console.error("Error:", error.message);
  process.exit(1);
});
