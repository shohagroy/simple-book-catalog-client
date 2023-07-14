import React from "react";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div>
      <main className="py-12 2xl:px-6">
        <div className="max-w-[1440px] mx-auto p-4">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
              <button className="filter-btn active-filter">All</button>
              <button className="filter-btn">Featured</button>
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
