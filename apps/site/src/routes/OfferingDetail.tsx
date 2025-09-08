import { useParams } from "react-router-dom";
import { Section, Card } from "@mod/ui";
import { SEO } from "../components/SEO";

const COPY: Record<string, { title: string; body: string }> = {
  "maturity-model": {
    title: "Maturity Model",
    body:
      "Self-serve baseline across Outcomes, Flow, Quality, Architecture, Platform, Data, and Assistive AI. Receive level definitions and a 90-day plan with high-leverage moves."
  },
  bootcamp: {
    title: "Bootcamp",
    body:
      "Hands-on enablement that instils automation, measurement, and outcome-first delivery. Practical sessions, templates, and drills."
  },
  advisory: {
    title: "Advisory",
    body:
      "Coaching and playbooks to embed Outcome Engineering across people, process, and platform. Governance and metrics that scale."
  }
};

export default function OfferingDetail() {
  const { slug } = useParams();
  const data = slug && COPY[slug];
  const title = data?.title ?? "Offering";
  return (
    <>
      <SEO title={`${title} | Moderneer`} description={data?.body ?? ""} path={`/offerings/${slug}`} />
      <Section title={title} tone="muted">
        <Card subtitle={data?.body ?? "Coming soon."} />
      </Section>
    </>
  );
}
