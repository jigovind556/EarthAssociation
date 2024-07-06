import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Blogs from "./pages/blog/Blogs.jsx";
import BlogPost from "./pages/blog/BlogPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "blogs/:blogId",
        element: <BlogPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
