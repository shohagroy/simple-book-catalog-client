import BookLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { signOut } from "firebase/auth";
import auth from "../configs/firebase";
import { setUser } from "../redux/features/user/userSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handelUserLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="mx-auto max-w-[1440px] px-4 flex items-center justify-between">
        <img src={BookLogo} width="150px" className="object-contain" />

        <ul className="flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">
            <Link to={"/"}>Book Store</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/wish-list"}>Wishlist</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/my-collection"}>My Collection</Link>
          </li>
          {user?.email && (
            <li className="cursor-pointer">
              <Link to={"/add-new"}>Add New Book</Link>
            </li>
          )}
        </ul>

        <div>
          {!user.email ? (
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          ) : (
            <button onClick={handelUserLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
