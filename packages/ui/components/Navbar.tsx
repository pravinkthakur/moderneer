import { siteMeta } from "@mod/config/siteMeta";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B1020]/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" aria-label="Moderneer Home" className="flex items-center gap-2 text-text">
            <Logo size={28} />
            <span className="text-lg font-semibold">Moderneer</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            {siteMeta.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-text">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button as={undefined as never} variant="ghost" className="hidden sm:inline-flex">
              Skip to content
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
