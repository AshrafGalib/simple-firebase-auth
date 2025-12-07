import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import User from "../Pages/User/User";

export const router = createBrowserRouter([
  {
    path: "/",
  Component: Root,
    children: [
        {index:true,Component:Home},
        {path:'Login',Component:Login},
        {path: 'user',Component: User}
    ]
  },
]);