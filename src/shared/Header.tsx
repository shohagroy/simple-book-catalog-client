import { NavLink } from "react-router-dom";
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
        <img
          src={
            "https://www.bookweb.org/sites/default/files/BookshopLogoTeaserJanuary2019.png"
          }
          width="150px"
          className="object-contain"
        />

        <ul className="flex items-center space-x-6">
          <li className=" cursor-pointer">
            <NavLink to={"/"}>Book Store</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to={"/wish-list"}>Wishlist</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to={"/my-collection"}>My Collection</NavLink>
          </li>
          {user?.email && (
            <li className="cursor-pointer">
              <NavLink to={"/add-new"}>Add New Book</NavLink>
            </li>
          )}
        </ul>

        <div>
          {!user.email ? (
            <NavLink to={"/login"}>
              <button>Login</button>
            </NavLink>
          ) : (
            <button onClick={handelUserLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
