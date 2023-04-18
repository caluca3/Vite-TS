import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerPost } from "./routes/routes";
import { Login } from "./pages/auth/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [routerPost],
  },

  {
    path: "/auth",
    children: [{ path: "login", element: <Login /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
