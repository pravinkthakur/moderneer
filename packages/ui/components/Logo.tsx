import type { HTMLAttributes } from "react";

/**
 * Render the Moderneer logo as an SVG. Uses CSS variables for colours.
 * size prop controls both width and height (square).
 */
export function Logo({
  size = 28,
  className = "",
  ...props
}: { size?: number } & HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background square */}
      <rect width="64" height="64" rx="12" fill="var(--color-primary)" />
      {/* Stylised M / arrow */}
      <path
        d="M14 44L32 16L50 44"
        stroke="var(--color-accent)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}