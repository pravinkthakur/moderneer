import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2">
          <Logo size={28} />
          <span className="text-lg font-semibold text-text">Moderneer</span>
        </div>
        <p className="mt-3 text-sm text-muted">Modern engineering. Measurable outcomes.</p>
        <p className="mt-8 text-xs text-muted">© {new Date().getFullYear()} Moderneer.</p>
      </div>
    </footer>
  );
}
