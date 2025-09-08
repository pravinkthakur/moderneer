type Frontmatter = { title: string; date?: string; excerpt?: string; slug: string };

const modules = import.meta.glob<{ frontmatter: Frontmatter; default: unknown }>(
  "/content/insights/*.mdx",
  { eager: true },
);

export function useMDXIndex() {
  const items = Object.entries(modules).map(([path, mod]) => {
    const fm = (mod as any).frontmatter as Frontmatter;
    return {
      ...fm,
      path: `/insights/${fm.slug}`,
      file: path
    };
  });
  items.sort((a, b) => (a.date ?? "").localeCompare(b.date ?? "")).reverse();
  return items;
}
