import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      { path: "/all-toys", element: <AllToys></AllToys> },

      {
        path: "/details/subCategory/:id",
        element: <SingleToyDetails></SingleToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/subCategory/${params.id}`),
      },
    ],
  },
]);

export default router;
