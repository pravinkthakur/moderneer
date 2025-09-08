const colors = {
  primary: "#3B82F6", // Bright Blue
  accent: "#22D3EE",  // Mint / Bright Cyan
  text: "#2C2C2C",    // Graphite Grey
  muted: "#4B5563",   // Neutral 600
  bg: "#FFFFFF",      // White
  surface: "#F9FAFB", // Light surface
  border: "#E5E7EB"   // Neutral 200
};

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        accent: colors.accent,
        text: colors.text,
        muted: colors.muted,
        surface: colors.surface,
        border: colors.border
      },
      borderRadius: { xl: "1.25rem", "2xl": "1.5rem" },
      boxShadow: {
        smx: "0 1px 2px rgba(0,0,0,.05)",
        mdx: "0 8px 24px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
};
