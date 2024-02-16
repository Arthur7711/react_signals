import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

const Utility = lazy(() => import("../pages/Utility"));
const MacWarning = lazy(() => import("../pages/macWarning/MacWarning"));
const Inventory = lazy(() => import("../pages/Inventory"));
const Statistics = lazy(() => import("../pages/Statistics"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Utility />,
      },
      {
        path: "/mac-warning",
        element: <MacWarning />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);
