import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import Compare from "./pages/Compare";
import AdminPanel from "./pages/AdminPanel";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

import { getAnnexTables, getPhones } from "./services/phoneRequests";
import { CompareProvider } from "./contexts/CompareContext";
import EditForm from "./pages/EditForm";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getPhones,
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
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/admin/add",
        element: <Add />,
        loader: getAnnexTables,
      },
      {
        path: "/admin/edit",
        element: <Edit />,
        loader: getPhones,
      },
      {
        path: "/admin/edit/:id",
        element: <EditForm />,
        loader: getAnnexTables,
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
