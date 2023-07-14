import BookLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to={"/"}>My Collection</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/add-new"}>Add New Book</Link>
          </li>
        </ul>

        <div>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
