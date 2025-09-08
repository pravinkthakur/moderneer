import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    // Placeholder analytics hook. Swap for your provider.
    const t = setTimeout(() => {
      console.debug("[analytics] pageview", window.location.pathname);
    }, 0);
    return () => clearTimeout(t);
  }, []);
  return null;
}
