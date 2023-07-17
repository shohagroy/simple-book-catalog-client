import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook, IYear } from "../types/globalTypes";
import { genres } from "../db/Genres";
import { useGetAllBookYearsQuery } from "../redux/features/year/yearApi";
import { IApiReponse } from "../types/apiResponse";

const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  const query = `searchTerm=${search}&page=${page}${
    genre && `&genre=${genre}`
  }${publishedYear && `&publicationYear=${publishedYear}`}`;

  const {
    data,
    isLoading,
    isError,
  }: {
    data?: IApiReponse<IBook[]> | undefined;
    isLoading: boolean;
    isError: boolean;
  } = (useGetAllBooksQuery(query) ?? {}) as {
    data?: IApiReponse<IBook[]> | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  const {
    data: years,
  }: {
    data?: IApiReponse<IYear[]> | undefined;
  } = (useGetAllBookYearsQuery(undefined) ?? {}) as {
    data?: IApiReponse<IYear[]> | undefined;
  };

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
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search books..."
                    className="pl-10 w-full p-2 rounded-md bg-transparent border border-gray-500"
                  />
                </div>
              </form>

              <div className="flex items-center space-x-4">
                <div>
                  <select
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full p-2 rounded-md bg-transparent border border-gray-500 mx-2 capitalize"
                  >
                    <option value="" className="hidden">
                      Filterd By Genre
                    </option>
                    <option value="">All Genres</option>

                    {genres.map((genre) => (
                      <option value={genre.name}>{genre.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    name=""
                    id=""
                    className="w-full p-2 rounded-md bg-transparent border border-gray-500 "
                    onChange={(e) => setPublishedYear(e.target.value)}
                  >
                    <option value="" className="hidden">
                      Filterd By Publication Year
                    </option>
                    <option value="">All Years</option>
                    {years?.data &&
                      years.data.map((year) => (
                        <option key={year?._id} value={year?.year}>
                          {year?.year}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="h-[40vh] flex justify-center items-center">
              <p className="text-violet-500 text-2xl font-bold">Loading...</p>
            </div>
          ) : (
            <div>
              {isError ? (
                <div className="h-[40vh] flex justify-center items-center">
                  <p className="text-red-500 text-2xl font-bold">
                    Something Wrong!
                  </p>
                </div>
              ) : (
                <div>
                  {data?.data && data?.data.length ? (
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {data?.data?.map((book: IBook) => (
                        <BookCard key={book._id} data={book} />
                      ))}
                    </div>
                  ) : (
                    <div className="h-[40vh] flex justify-center items-center">
                      <h2 className="text-2xl font-bold text-red-500">
                        No Book Found!
                      </h2>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center items-center my-8">
            <div className="flex justify-center items-center ">
              <button
                disabled={page === 1}
                className="border px-3  py-1 rounded-sm hover:bg-violet-500 hover:text-white duration-150 "
                onClick={() => setPage(page - 1)}
              >
                Priv
              </button>
              <p className="mx-4 text-xl">{page}</p>
              <button
                disabled={
                  data?.meta && Math.ceil(data?.meta?.total / 9) === page
                }
                className="border px-3 py-1 rounded-sm hover:bg-violet-500 hover:text-white duration-150 "
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
