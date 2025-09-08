import { useState } from "react";

export function Tabs({
  items
}: {
  items: { id: string; label: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState(items[0]?.id);
  return (
    <div>
      <div className="flex gap-2 border-b border-border">
        {items.map((t) => (
          <button
            key={t.id}
            className={`px-3 py-2 text-sm rounded-t-lg ${
              active === t.id ? "bg-white border border-b-white" : "text-muted hover:text-text"
            }`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b-2xl border border-border">
        {items.find((x) => x.id === active)?.content}
      </div>
    </div>
  );
}
