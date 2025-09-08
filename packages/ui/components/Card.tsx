import type { PropsWithChildren, ReactNode } from "react";

export function Card({
  title,
  subtitle,
  actions,
  children
}: PropsWithChildren<{ title?: string; subtitle?: string; actions?: ReactNode }>) {
  return (
    <section className="bg-white dark:bg-surface rounded-2xl shadow-md p-6">
      {(title || actions) && (
        <header className="mb-4 flex items-start justify-between gap-4">
          <div>
            {title && <h3 className="text-xl font-semibold text-text">{title}</h3>}
            {subtitle && <p className="text-sm text-muted mt-1">{subtitle}</p>}
          </div>
          {actions}
        </header>
      )}
      {children}
    </section>
  );
}
