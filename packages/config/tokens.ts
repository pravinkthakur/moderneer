export const tokens = {
  colors: {
    // Core palette using the provided Moderneer colours.
    primary: "#3B82F6", // Bright Blue
    accent: "#22D3EE",  // Mint / Bright Cyan
    text: "#2C2C2C",    // Graphite Grey for primary text
    muted: "#4B5563",   // Neutral 600 for secondary text
    bg: "#FFFFFF",      // White backgrounds
    surface: "#F9FAFB", // Light surface backgrounds
    border: "#E5E7EB"   // Neutral 200 border colour
  },
  radius: { sm: "8px", md: "16px", lg: "24px" },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,.05)",
    md: "0 8px 24px rgba(0,0,0,.08)"
  },
  spacing: [0, 4, 8, 12, 16, 24, 32, 48],
  typography: {
    fontSans: `"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"`
  }
} as const;
