import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/details/DetailsPage";
import ImgOfTheDayPage from "./pages/details/ImgOfTheDayPage";
import CategoryPage from "./pages/categorypage/CategoryPage";
import SearchPage from "./pages/searchpage/SearchPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search/",
    element: <SearchPage />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
  },
  {
    path: "/details/imageoftheday",
    element: <ImgOfTheDayPage />,
    loader: () =>
      fetch(`${import.meta.env.VITE_API_IMGDAY_URL}${import.meta.env.VITE_API_KEY}`),
  },
  {
    path: "/category/Nebula",
    element: <CategoryPage categoryTitle="Nebula" />,
    loader: () => fetch(`${import.meta.env.VITE_API_NEBULA_URL}`),
  },
  {
    path: "/category/Hubble",
    element: <CategoryPage categoryTitle="Hubble" />,
    loader: () =>
      fetch(`${import.meta.env.VITE_API_HUBBLE_URL}`),
  },
  {
    path: "/category/Supernova",
    element: <CategoryPage categoryTitle="Supernova" />,
    loader: () =>
      fetch(`${import.meta.env.VITE_API_SUPERNOVA_URL}`),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
