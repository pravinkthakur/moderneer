import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar, Footer } from "@mod/ui";

export default function App() {
  return (
    <HelmetProvider>
      <div className="bg-white text-text">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
