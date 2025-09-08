import type { PropsWithChildren } from "react";
export function Grid({ children, cols = 3 }: PropsWithChildren<{ cols?: 2 | 3 | 4 }>) {
  const cls = cols === 4 ? "md:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return <div className={`grid gap-6 ${cls}`}>{children}</div>;
}
