import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { recentStreams } from "./data/data";
import Analytics from "./components/Analytics";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const StreamTable = lazy(() => import("./components/StreamTable"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Analytics />,
      },
      {
        path: "/recent-streams",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <StreamTable data={recentStreams} />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
