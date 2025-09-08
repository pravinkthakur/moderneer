export function Diagram() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 600 200" className="w-full h-auto">
        <rect x="20" y="60" width="150" height="80" rx="16" fill="#ffffff" stroke="#E2E8F0" />
        <text x="95" y="110" textAnchor="middle" fontSize="16" fill="#0F172A">Outcomes</text>

        <rect x="225" y="60" width="150" height="80" rx="16" fill="#ffffff" stroke="#E2E8F0" />
        <text x="300" y="110" textAnchor="middle" fontSize="16" fill="#0F172A">Levers</text>

        <rect x="430" y="60" width="150" height="80" rx="16" fill="#ffffff" stroke="#E2E8F0" />
        <text x="505" y="110" textAnchor="middle" fontSize="16" fill="#0F172A">Metrics</text>

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#3B82F6" />
          </marker>
        </defs>

        <line x1="170" y1="100" x2="225" y2="100" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrow)" />
        <line x1="375" y1="100" x2="430" y2="100" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
}
