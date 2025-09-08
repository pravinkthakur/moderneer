import { Section, Card, Grid } from "@mod/ui";
import { SEO } from "../components/SEO";

export default function Offerings() {
  return (
    <>
      <SEO title="Offerings | Moderneer" description="Maturity Model, Bootcamp, Advisory." path="/offerings" />
      <Section title="Offerings" tone="muted">
        <Grid cols={3}>
          <Card
            title="Maturity Model"
            subtitle="Baseline today. Path beyond Agile."
            actions={<a className="text-primary" href="/offerings/maturity-model">View →</a>}
          />
          <Card
            title="Bootcamp"
            subtitle="Embed automation and measurement."
            actions={<a className="text-primary" href="/offerings/bootcamp">View →</a>}
          />
          <Card
            title="Advisory"
            subtitle="Coaching and playbooks at scale."
            actions={<a className="text-primary" href="/offerings/advisory">View →</a>}
          />
        </Grid>
      </Section>
    </>
  );
}
