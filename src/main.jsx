import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/layout";
import ErrorPage from "./pages/error";
import ShopPage from "./pages/shop";
import PersonalGrowthPage from "./pages/personalgrowth";
import EntrepreneurshipPage from "./pages/entrepreneurship";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "personalgrowth",
        element: <PersonalGrowthPage />,
      },
      {
        path: "entrepreneurship",
        element: <EntrepreneurshipPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
