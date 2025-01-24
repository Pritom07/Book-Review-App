import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Listedbooks from "./Components/Listedbooks/Listedbooks";
import PagestoRead from "./Components/PagestoRead/PagestoRead";
import Bookdetails from "./Components/Bookdetails/Bookdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/books.json"),
        element: <Home></Home>,
      },
      {
        path: "/Eachbook/:bookIdx",
        loader: () => fetch("/books.json"),
        element: <Bookdetails></Bookdetails>,
      },
      {
        path: "/listedbooks",
        element: <Listedbooks></Listedbooks>,
      },
      {
        path: "/pagestoread",
        element: <PagestoRead></PagestoRead>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router} />
  </StrictMode>
);
