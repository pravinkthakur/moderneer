import { PropsWithChildren } from "react";

export function Modal({
  open,
  title,
  onClose,
  children
}: PropsWithChildren<{ open: boolean; title?: string; onClose: () => void }>) {
  if (!open) return null;
  return (
    <div aria-modal className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}
