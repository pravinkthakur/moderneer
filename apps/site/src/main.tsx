import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import App from "./App";
import Home from "./routes/Home";
import Offerings from "./routes/Offerings";
import OfferingDetail from "./routes/OfferingDetail";
import Insights from "./routes/Insights";
import InsightArticle from "./routes/InsightArticle";
import About from "./routes/About";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "offerings", element: <Offerings /> },
      { path: "offerings/:slug", element: <OfferingDetail /> },
      { path: "insights", element: <Insights /> },
      { path: "insights/:slug", element: <InsightArticle /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
