import React from "react";

const AddNewBook = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto my-20">
        <div className="p-4 overflow-hidden bg-white shadow-md rounded-md">
          <div className="w-full bg-gray-300">
            <h4 className="mb-8 text-xl border-b p-2 font-bold text-center">
              Add New Book
            </h4>
          </div>
          <form className="">
            <div className="flex flex-col my-3">
              <label>Book Title </label>
              <input
                required
                className="p-2 border "
                placeholder="Title..."
                type="text"
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Author Name</label>
              <input
                required
                className="p-2 border "
                type="text"
                placeholder="Author..."
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Genre</label>
              <input
                required
                className="p-2 border "
                type="text"
                placeholder="Genre..."
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Publication Date</label>
              <input
                required
                className="p-2 border bg-gray-200"
                type="date"
                placeholder="Date..."
                // value={new Date().toDateString()}
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="flex flex-col">
                <label>Price</label>
                <input
                  required
                  className="p-2 border"
                  type="number"
                  name="price"
                />
              </div>

              <div className="flex flex-col">
                <label>Rating</label>
                <input
                  required
                  className="p-2 border"
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-500 text-white p-3 mt-2 rounded-md"
              id="submit"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
