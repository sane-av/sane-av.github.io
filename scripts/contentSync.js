import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const config = JSON.parse(readFileSync(path.join(root, "src", "config", "config.json"), "utf8"));
const repos = config.settings?.content_repos;

if (!repos) {
  console.log("No content repos configured, skipping sync.");
  process.exit(0);
}

for (const [type, entry] of Object.entries(repos)) {
  const url = typeof entry === "string" ? entry : entry.url;
  const targetDir = typeof entry === "string" ? path.join(root, "src", "content", type) : path.join(root, entry.target);

  const parentDir = path.dirname(targetDir);
  const isRepo = existsSync(path.join(targetDir, ".git"));

  console.log(`Syncing content: ${type}...`);

  if (isRepo) {
    execSync("git pull --rebase", { cwd: targetDir, stdio: "inherit" });
  } else {
    if (existsSync(targetDir)) {
      const backup = `${targetDir}_backup_${Date.now()}`;
      console.log(`Backing up existing ${type} to ${backup}`);
      execSync(`move "${targetDir}" "${backup}"`, { cwd: path.dirname(targetDir), stdio: "inherit", shell: true });
    } else {
      mkdirSync(parentDir, { recursive: true });
    }
    execSync(`git clone --depth 1 --single-branch "${url}" "${targetDir}"`, { cwd: parentDir, stdio: "inherit" });
  }

  console.log(`Synced ${type}`);
}

console.log("Content sync complete.");
