import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "content/insights");
const mdx = readdirSync(dir).filter((f) => f.endsWith(".mdx"));

let ok = true;
for (const f of mdx) {
  const src = readFileSync(join(dir, f), "utf8");
  if (!src.includes("title:") || !src.includes("date:") || !src.includes("excerpt:")) {
    console.error(`Content lint: missing frontmatter fields in ${f}`);
    ok = false;
  }
}
if (!ok) process.exit(1);
console.log("Content lint passed");
