import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: Variant;
  size?: Size;
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const v =
    variant === "primary"
      ? "bg-primary text-white hover:brightness-95 focus:ring-primary"
      : variant === "secondary"
      ? "bg-white text-text border border-border hover:bg-surface focus:ring-primary"
      : "bg-transparent text-text hover:bg-surface focus:ring-primary";
  const s = size === "sm" ? "h-9 px-3 text-sm" : size === "lg" ? "h-12 px-6 text-lg" : "h-11 px-4";

  return (
    <button className={`${base} ${v} ${s} ${className}`} {...props}>
      {children}
    </button>
  );
}
