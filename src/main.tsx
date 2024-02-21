import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./global.module.css";

import BlogPreviewCardChallangePage from "./challenges/blog-preview-card/Page";
import NewsHomePagePage from "./challenges/news-homepage/Page";

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/frontend-mentor-solutions/",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
