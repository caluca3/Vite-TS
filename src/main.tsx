import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Usuarios from "./pages/usuarios";
import Posts, { loader as loaderPosts } from "./pages/posts";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "usuarios", element: <Usuarios /> },
      { path: "posts", element: <Posts />, loader: loaderPosts },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
