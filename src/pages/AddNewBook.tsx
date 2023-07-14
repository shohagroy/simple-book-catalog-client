import React from "react";

const AddNewBook = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto my-10">
        <div className="p-4 overflow-hidden bg-white shadow-md rounded-md">
          <h4 className="mb-8 text-xl border-b p-2 font-bold text-center">
            Add New Book
          </h4>
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
                type="text"
                placeholder="Date..."
                readOnly
                value={new Date().toDateString()}
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="input-Bookprice"
                  name="price"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="input-Bookrating"
                  name="rating"
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="input-Bookfeatured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
              />
              <label htmlFor="featured" className="ml-2 text-sm">
                {" "}
                This is a featured book{" "}
              </label>
            </div>

            <button type="submit" className="submit" id="submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
