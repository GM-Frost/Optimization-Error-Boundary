import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./Header";
import Fallback from "./Fallback";
import { ErrorBoundary } from "react-error-boundary";

const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: (
          <>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <Contact />
            </ErrorBoundary>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
