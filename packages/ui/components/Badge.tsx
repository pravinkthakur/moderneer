import type { PropsWithChildren } from "react";
export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
