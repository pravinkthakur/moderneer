import { Section, Card, Input, TextArea, Button } from "@mod/ui";
import { SEO } from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO title="Contact | Moderneer" path="/contact" />
      <Section title="Contact Moderneer" tone="muted">
        <Card>
          <form className="grid gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input id="name" label="Name" required />
            <Input id="email" type="email" label="Email" required />
            <Input id="company" label="Company" />
            <TextArea id="message" label="Message" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" required /> I consent to be contacted.
            </label>
            <Button type="submit">Send</Button>
          </form>
        </Card>
      </Section>
    </>
  );
}
