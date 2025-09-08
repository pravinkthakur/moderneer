import type { PropsWithChildren } from "react";

export function Section({
  id,
  title,
  description,
  children,
  tone = "default"
}: PropsWithChildren<{ id?: string; title?: string; description?: string; tone?: "default" | "muted" }>) {
  return (
    <section id={id} className={tone === "muted" ? "py-16 md:py-24 bg-surface" : "py-16 md:py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="mx-auto mb-8 max-w-3xl text-center">
            {title && <h2 className="mt-2 text-3xl font-bold text-text">{title}</h2>}
            {description && <p className="mt-3 text-muted">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
