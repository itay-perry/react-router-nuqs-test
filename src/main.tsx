import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import App from "./App";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NuqsAdapter>
        <App />
      </NuqsAdapter>
    ),
    children: [
      { index: true, element: <Navigate to="/A?count=1" replace /> },
      { path: "A", element: <PageA /> },
      { path: "B", element: <PageB /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
