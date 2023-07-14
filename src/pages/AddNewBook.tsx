import React, { useState } from "react";

const bookInitialData = {
  title: "",
  author: "",
  genre: "",
  publicationDate: "",
  image: "",
  price: "",
  rating: "",
  addedBy: "",
};

const AddNewBook = () => {
  const [bookInfo, setBookInfo] = useState(bookInitialData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("button click");
    console.log(bookInfo);
  };

  return (
    <div>
      <div className="max-w-[1000px] mx-auto my-20">
        <div className="p-4 overflow-hidden bg-white shadow-md rounded-md">
          <div className="w-full bg-gray-300">
            <h4 className="mb-8 text-xl border-b p-2 font-bold text-center">
              Add New Book
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-3">
              <label>Book Title </label>
              <input
                required
                className="p-2 border "
                placeholder="Title..."
                type="text"
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, title: e.target.value })
                }
                value={bookInfo.title}
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Author Name</label>
              <input
                required
                className="p-2 border "
                type="text"
                placeholder="Author..."
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, author: e.target.value })
                }
                value={bookInfo.author}
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Genre</label>
              <input
                required
                className="p-2 border "
                type="text"
                placeholder="Genre..."
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, genre: e.target.value })
                }
                value={bookInfo.genre}
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Image URL</label>
              <input
                className="p-2 border "
                type="text"
                placeholder="Image Url..."
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, image: e.target.value })
                }
                value={bookInfo.image}
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Publication Date</label>
              <input
                required
                className="p-2 border bg-gray-200"
                type="date"
                placeholder="Date..."
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, publicationDate: e.target.value })
                }
                value={bookInfo.publicationDate}
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
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, price: e.target.value })
                  }
                  value={bookInfo.price}
                />
              </div>

              <div className="flex flex-col">
                <label>Rating</label>
                <input
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, rating: e.target.value })
                  }
                  value={bookInfo.rating}
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
