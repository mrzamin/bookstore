import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import BookDetailPage from "./pages/BookDetailPage/BookDetailPage.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import MindsetPage from "./pages/categoryPages/MindsetPage.jsx";
import GoalSettingPage from "./pages/categoryPages/GoalSettingandHabitsPage.jsx";
import MotivationPage from "./pages/categoryPages/MotivationPage.jsx";
import EntrepreneurshipPage from "./pages/categoryPages/EntrepreneurshipPage.jsx";
import LeadershipPage from "./pages/categoryPages/LeadershipPage.jsx";
import CommunicationPage from "./pages/categoryPages/CommunicationPage.jsx";
import DailyCommunicationPage from "./pages/categoryPages/DailyCommunicationPage.jsx";
import PublicSpeakingPage from "./pages/categoryPages/PublicSpeakingPage.jsx";
import MoneyPage from "./pages/categoryPages/MoneyPage.jsx";
import FinancialFreedomPage from "./pages/categoryPages/FinancialFreedomPage.jsx";
import InvestingPage from "./pages/categoryPages/InvestingPage.jsx";

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
        path: "shopbysubject",
        element: <ShopPage />,
      },
      {
        path: "shop/:slug",
        element: <BookDetailPage />,
      },
      {
        path: "shop/:topic/:slug",
        element: <BookDetailPage />,
      },
      {
        path: "shopbysubject/:slug",
        element: <BookDetailPage />,
      },
      {
        path: "shop/mindsetbooks",
        element: <MindsetPage />,
      },

      {
        path: "shop/goalandhabitbooks",
        element: <GoalSettingPage />,
      },
      {
        path: "shop/motivationbooks",
        element: <MotivationPage />,
      },
      {
        path: "shop/entrepreneurshipbooks",
        element: <EntrepreneurshipPage />,
      },
      {
        path: "shop/leadershipbooks",
        element: <LeadershipPage />,
      },
      {
        path: "shop/communicationbooks",
        element: <CommunicationPage />,
      },
      {
        path: "shop/dailycommunicationbooks",
        element: <DailyCommunicationPage />,
      },
      {
        path: "shop/publicspeakingbooks",
        element: <PublicSpeakingPage />,
      },
      { path: "shop/moneybooks", element: <MoneyPage /> },

      {
        path: "shop/investingbooks",
        element: <InvestingPage />,
      },
      {
        path: "shop/financialfreedombooks",
        element: <FinancialFreedomPage />,
      },

      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
