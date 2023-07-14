import React from "react";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div>
      <main className="py-12 2xl:px-6">
        <div className="max-w-[1440px] mx-auto p-4">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">All Book List</h4>

            <div className="flex justify-center items-center">
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
                    className="pl-10 w-full p-2 rounded-md bg-transparent border border-gray-500"
                  />
                </div>
              </form>

              <div className="flex items-center space-x-4">
                <div>
                  <select
                    name=""
                    id=""
                    className="w-full p-2 rounded-md bg-transparent border border-gray-500 mx-2"
                  >
                    <option value="" className="hidden">
                      Filterd By Genre
                    </option>
                  </select>
                </div>

                <div>
                  <select
                    name=""
                    id=""
                    className="w-full p-2 rounded-md bg-transparent border border-gray-500 "
                  >
                    <option value="" className="hidden">
                      Filterd By Publication Year
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
            {[...Array(12)].map((el, i) => (
              <BookCard key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
