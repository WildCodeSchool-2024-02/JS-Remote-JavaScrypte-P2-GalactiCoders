import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/details/DetailsPage";
import ImgOfTheDayPage from "./pages/details/ImgOfTheDayPage";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
