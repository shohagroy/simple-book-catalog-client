import React, { useState, useEffect } from "react";
import {
  useGetSingleBooksQuery,
  useUpdateBookInfoMutation,
} from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { genres } from "../db/Genres";
import { IApiReponse } from "../types/apiResponse";

const UpdateBookInfo = () => {
  const [bookInfo, setBookInfo] = useState<Partial<IBook>>({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const navigate = useNavigate();

  const { data }: { data: IApiReponse<IBook> | undefined } =
    (useGetSingleBooksQuery(id as string) ?? {}) as {
      data: IApiReponse<IBook> | undefined;
    };

  const [updateBookInfo, { isLoading, isError, isSuccess, error }] =
    useUpdateBookInfoMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateBookInfo(bookInfo as IBook)
      .then(() => {
        navigate(`/:id`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isError && !isLoading) {
      if ("data" in error!) {
        toast.error("Something went Wrong");
      }
    }
  }, [isError, isLoading, error]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      toast.success("Book Updated Successfully");
    }
  }, [isSuccess, isLoading]);

  useEffect(() => {
    if (data?.success) {
      setBookInfo(data.data!);
    }
  }, [data]);

  return (
    <div>
      <div className="max-w-[1000px] mx-auto my-20">
        <div className="p-4 overflow-hidden bg-white shadow-md rounded-md">
          <div className="w-full bg-gray-300">
            <h4 className="mb-8 text-xl border-b p-2 font-bold text-center">
              Update Book Info
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
                  setBookInfo({
                    ...bookInfo,
                    title: e.target.value,
                    author: bookInfo?.author || "",
                  })
                }
                value={bookInfo?.title}
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
                value={bookInfo?.author}
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Genre</label>
              <select
                name=""
                id=""
                className="p-2 border capitalize"
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, genre: e.target.value })
                }
              >
                <option className="hidden" value="">
                  Selete Genre
                </option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                ))}
              </select>
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
                value={bookInfo?.image}
              />
            </div>

            <div className="flex flex-col my-3">
              <label>Publication Date</label>
              <input
                required
                readOnly
                className="p-2 border bg-gray-200"
                type="date"
                placeholder="Date..."
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, publicationDate: e.target.value })
                }
                value={bookInfo?.publicationDate}
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
                    setBookInfo({ ...bookInfo, price: Number(e.target.value) })
                  }
                  value={bookInfo?.price}
                />
              </div>

              <div className="flex flex-col">
                <label>Rating</label>
                <input
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, rating: Number(e.target.value) })
                  }
                  value={bookInfo?.rating}
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
              {isLoading ? "Loading..." : " Update Book Info"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookInfo;
