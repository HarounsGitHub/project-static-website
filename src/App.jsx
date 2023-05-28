import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Categories from "./pages/categories/Categories";
import Category from "./pages/category/Category";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyCategories from "./pages/myCategories/MyCategories";
import Orders from "./pages/orders/Orders";
import Register from "./pages/register/Register";

import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="App">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/category/:id",
          element: <Category />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/mycategories",
          element: <MyCategories />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
