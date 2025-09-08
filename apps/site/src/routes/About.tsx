import { Section, Card } from "@mod/ui";
import { SEO } from "../components/SEO";
import AboutMDX from "/content/pages/about.mdx";

export default function About() {
  return (
    <>
      <SEO title="About | Moderneer" path="/about" />
      <Section title="About Moderneer" tone="muted">
        <Card>
          <article className="prose max-w-3xl mx-auto">
            <AboutMDX />
          </article>
        </Card>
      </Section>
    </>
  );
}
