import { readFileSync } from "node:fs";
import path from "node:path";

export type LegalDoc = {
  title: string;
  description: string;
  status?: "draft";
  updated?: string;
  body: string;
};

// Reads content/legal/<slug>.md. The front matter is a flat list of "key: value" lines.
export function getLegal(slug: string): LegalDoc {
  const raw = readFileSync(path.join(process.cwd(), "content", "legal", `${slug}.md`), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`content/legal/${slug}.md is missing front matter`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return {
    title: meta.title ?? slug,
    description: meta.description ?? "",
    status: meta.status === "draft" ? "draft" : undefined,
    updated: meta.updated,
    body: match[2].trim(),
  };
}
