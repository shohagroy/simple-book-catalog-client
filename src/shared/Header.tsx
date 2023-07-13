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
            <Link to={"/"}>Wishlist</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/"}>My Collection</Link>
          </li>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="pl-10 w-full p-3 rounded-md bg-transparent border border-gray-500"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
