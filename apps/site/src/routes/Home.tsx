import { SEO } from "../components/SEO";
import { Analytics } from "../components/Analytics";
import { Section, Card, Grid, Button, Badge } from "@mod/ui";
import { copy } from "@mod/config/content";
import { Diagram } from "../components/Diagram";

export default function Home() {
  return (
    <>
      <SEO />
      <Analytics />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {copy.hero.title}
              </h1>
              <p className="mt-4 text-lg text-muted">{copy.hero.sub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => document.getElementById("overview")?.scrollIntoView()}>
                  {copy.hero.primaryCta.label}
                </Button>
                <a href={copy.hero.secondaryCta.href}>
                  <Button size="lg" variant="secondary">
                    {copy.hero.secondaryCta.label}
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex gap-2">
                <Badge>Future of Engineering</Badge>
                <Badge>Outcome-first</Badge>
              </div>
            </div>
            <div className="relative">
              <Card title="Outcomes → Levers → Metrics" subtitle="Simple, measurable flow">
                <Diagram />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section id="overview" title={copy.overview.title} tone="muted">
        <Grid cols={3}>
          {copy.overview.points.map((p) => (
            <Card key={p.k} title={p.k} subtitle={p.v} />
          ))}
        </Grid>
      </Section>

      {/* Future */}
      <Section title={copy.future.title}>
        <ul className="mx-auto max-w-3xl list-disc list-inside text-muted space-y-2">
          {copy.future.list.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <a href={copy.future.cta.href}>
            <Button>{copy.future.cta.label}</Button>
          </a>
        </div>
      </Section>

      {/* Principles */}
      <Section title={copy.principles.title} tone="muted">
        <Grid cols={3}>
          {copy.principles.items.map((p) => (
            <Card key={p} title={p} />
          ))}
        </Grid>
      </Section>

      {/* Offerings */}
      <Section title={copy.offerings.title}>
        <Grid cols={3}>
          {copy.offerings.items.map((o) => (
            <Card
              key={o.title}
              title={o.title}
              subtitle={o.text}
              actions={
                <a
                  className="text-primary"
                  href={`/offerings/${o.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Learn →
                </a>
              }
            />
          ))}
        </Grid>
        <div className="mt-6 text-center">
          <a href={copy.offerings.cta.href}>
            <Button variant="secondary">{copy.offerings.cta.label}</Button>
          </a>
        </div>
      </Section>

      {/* Insights teaser */}
      <Section title="Insights" tone="muted">
        <Grid cols={3}>
          {/* Filled by Insights page; here show links */}
          <Card
            title="Outcome Engineering 101"
            actions={<a className="text-primary" href="/insights/outcome-engineering-101">Read →</a>}
          />
          <Card
            title="Beyond Agile"
            actions={<a className="text-primary" href="/insights/beyond-agile">Read →</a>}
          />
          <Card
            title="High-Leverage Metrics"
            actions={<a className="text-primary" href="/insights/high-leverage-metrics">Read →</a>}
          />
        </Grid>
      </Section>

      {/* Contact CTA */}
      <Section title={copy.contact.title}>
        <div className="text-center">
          <a href={copy.contact.cta.href}>
            <Button size="lg">{copy.contact.cta.label}</Button>
          </a>
        </div>
      </Section>
    </>
  );
}
