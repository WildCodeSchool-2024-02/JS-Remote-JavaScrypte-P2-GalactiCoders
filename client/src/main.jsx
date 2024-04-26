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
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`
      ),
  },
  {
    path: "/category/Nebula",
    element: <CategoryPage categoryTitle="Nebula" />,
    loader: () => fetch("https://images-api.nasa.gov/search?keywords=nebula"),
  },
  {
    path: "/category/Hubble",
    element: <CategoryPage categoryTitle="Hubble" />,
    loader: () =>
      fetch("https://images-api.nasa.gov/search?keywords=hubble%20space"),
  },
  {
    path: "/category/Supernova",
    element: <CategoryPage categoryTitle="Supernova" />,
    loader: () =>
      fetch("https://images-api.nasa.gov/search?keywords=supernova"),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
