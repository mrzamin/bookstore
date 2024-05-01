import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/layout";
import ErrorPage from "./pages/error";
import ShopPage from "./pages/Shop/shop.jsx";
import PersonalGrowthPage from "./pages/personalgrowth";
import EntrepreneurshipPage from "./pages/entrepreneurship";
import HomePage from "./pages/Home/home.jsx";
import BookDetail from "./components/Books/BookDetail/BookDetail";
import Checkout from "./components/Checkout/Checkout";
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
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/personalgrowth",
        element: <PersonalGrowthPage />,
      },
      {
        path: "/entrepreneurship",
        element: <EntrepreneurshipPage />,
      },
      {
        path: "/shop/:slug",
        element: <BookDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
