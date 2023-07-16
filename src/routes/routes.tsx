import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddNewBook from "../pages/AddNewBook";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import MyWishlist from "../pages/MyWishList";
import MyCollection from "../pages/MyCollection";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/BookDetails";

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
        path: "/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-new",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wish-list",
        element: (
          <PrivateRoute>
            <MyWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-collection",
        element: (
          <PrivateRoute>
            <MyCollection />
          </PrivateRoute>
        ),
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
