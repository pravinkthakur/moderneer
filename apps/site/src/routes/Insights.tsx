import { Section, Card, Grid } from "@mod/ui";
import { SEO } from "../components/SEO";
import { useMDXIndex } from "../hooks/useMDXIndex";

export default function Insights() {
  const posts = useMDXIndex().slice(0, 100);
  return (
    <>
      <SEO title="Insights | Moderneer" description="Short, practical notes on Outcome Engineering." path="/insights" />
      <Section title="Insights" tone="muted">
        <Grid cols={3}>
          {posts.map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              subtitle={p.excerpt}
              actions={<a className="text-primary" href={p.path}>Read →</a>}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}
