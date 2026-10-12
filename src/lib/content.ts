import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentKind = "blog" | "poems" | "work";

export type ContentItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  draft?: boolean;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

function readDir(kind: ContentKind): ContentItem[] {
  const dir = path.join(contentRoot, kind);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: String(data.title ?? file),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        draft: Boolean(data.draft),
        body: content,
      };
    })
    .filter((item) => !item.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function listContent(kind: ContentKind): ContentItem[] {
  return readDir(kind);
}

export function getContent(kind: ContentKind, slug: string): ContentItem | null {
  return readDir(kind).find((item) => item.slug === slug) ?? null;
}

export function getSlugs(kind: ContentKind): string[] {
  return readDir(kind).map((item) => item.slug);
}
