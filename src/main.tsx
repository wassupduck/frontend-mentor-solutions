import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./global.module.css";
import "./utils.module.css";

import BlogPreviewCardChallangePage from "./challenges/blog-preview-card/Page";
import NewsHomePagePage from "./challenges/news-homepage/Page";
import InteractiveCommentsSectionPage from "./challenges/interactive-comments-section/Page";

const router = createHashRouter([
  {
    path: "/",
    element: <h1>Frontend Mentor Solutions</h1>,
  },
  {
    path: "/blog-preview-card",
    element: <BlogPreviewCardChallangePage />,
  },
  {
    path: "/news-homepage",
    element: <NewsHomePagePage />,
  },
  {
    path: "/interactive-comments-section",
    element: <InteractiveCommentsSectionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
