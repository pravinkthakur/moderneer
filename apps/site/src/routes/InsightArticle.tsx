import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Section, Card } from "@mod/ui";
import { SEO } from "../components/SEO";

const modules = import.meta.glob("/content/insights/*.mdx");

export default function InsightArticle() {
  const { slug } = useParams();
  const key = `/content/insights/${slug}.mdx`;
  const Importer = modules[key] as unknown as () => Promise<{ default: React.FC }>;

  if (!Importer) {
    return (
      <Section title="Not found" tone="muted">
        <Card subtitle="Article does not exist." />
      </Section>
    );
  }

  const Lazy = React.lazy(Importer);

  return (
    <>
      <SEO title={`${slug} | Insights`} path={`/insights/${slug}`} />
      <Suspense
        fallback={
          <Section tone="muted">
            <Card subtitle="Loading..." />
          </Section>
        }
      >
        <Section tone="muted">
          <article className="prose max-w-3xl mx-auto">
            <Lazy />
          </article>
        </Section>
      </Suspense>
    </>
  );
}
