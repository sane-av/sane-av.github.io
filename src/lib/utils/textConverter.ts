import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content: string) => {
  return slug(content);
};

// markdownify
export const markdownify = (content: string, div?: boolean) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};

// humanize
export const humanize = (content: string) => {
  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/[-\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// titleify
export const titleify = (content: string) => {
  const humanized = humanize(content);
  return humanized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// plainify
export const plainify = (content: string) => {
  const parseMarkdown: any = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

const entityList: Record<string, string> = {
  "&nbsp;": " ",
  "&lt;": "<",
  "&gt;": ">",
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities: string) => {
  return htmlWithEntities.replace(
    new RegExp(Object.keys(entityList).join("|"), "g"),
    (entity: string): string => entityList[entity] ?? entity,
  );
};
