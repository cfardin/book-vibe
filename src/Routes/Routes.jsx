import { createBrowserRouter } from "react-router"; 
import HomePage from "../pages/homepage/HomePage";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/books/Books";

export const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        index : true,
        element : <HomePage></HomePage>
      },
      {
        path: '/books',
        element : <Books></Books>
      },

    ],
    errorElement : <div className="m-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-8xl font-bold">404</h2>
        <h3 className="text-5xl">Page not found</h3>
    </div>

  },
]);