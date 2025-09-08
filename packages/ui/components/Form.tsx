import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Input({
  label,
  id,
  error,
  ...props
}: { label: string; id: string; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} className="grid gap-1 text-sm">
      <span>{label}</span>
      <input
        id={id}
        aria-invalid={!!error}
        className="h-11 rounded-xl border border-border px-3"
        {...props}
      />
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </label>
  );
}

export function TextArea({
  label,
  id,
  error,
  ...props
}: { label: string; id: string; error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label htmlFor={id} className="grid gap-1 text-sm">
      <span>{label}</span>
      <textarea
        id={id}
        aria-invalid={!!error}
        className="min-h-[120px] rounded-xl border border-border p-3"
        {...props}
      />
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </label>
  );
}
