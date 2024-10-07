import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import Compare from "./pages/Compare";
import getPhones from "./services/phoneRequests";
import { CompareProvider } from "./contexts/CompareContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Phones />,
        loader: getPhones,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CompareProvider>
      <RouterProvider router={router} />
    </CompareProvider>
  </React.StrictMode>
);
