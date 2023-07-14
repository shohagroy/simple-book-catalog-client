import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddNewBook from "../pages/AddNewBook";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import MyWishlist from "../pages/MyWishList";
import MyCollection from "../pages/MyCollection";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-new",
        element: <AddNewBook />,
      },
      {
        path: "/wish-list",
        element: <MyWishlist />,
      },
      {
        path: "/my-collection",
        element: <MyCollection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
