import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/hooks";
import { IBook } from "../types/globalTypes";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  useDeleteUserBookCollectionMutation,
  useGetUserBookCollectionsQuery,
  useUpdateUserBookCollectionMutation,
} from "../redux/features/collections/collectionsApi";

const MyCollection = () => {
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading, isError, error } = useGetUserBookCollectionsQuery(
    user.email
  );

  const [deleteUserBookCollection, { isSuccess }] =
    useDeleteUserBookCollectionMutation();

  const myCollectionDeleteHandelar = (data: IBook) => {
    const deleteData = {
      id: data._id,
      email: user.email,
    };
    deleteUserBookCollection(deleteData)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("collection remove successfully");
    }
  }, [isSuccess]);

  const [updateUserBookCollection, { isSuccess: updateSuccess }] =
    useUpdateUserBookCollectionMutation();

  const bookCollectionStatusUpdateHandelar = (data: string) => {
    const updatedData: { id: string; email: string; value: string } = {
      id: data.id,
      email: user.email,
      value: data.value,
    };

    console.log(updatedData);
    updateUserBookCollection(updatedData)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Collection Status Update successfully");
    }
  }, [updateSuccess]);

  return (
    <main>
      <section className="mt-12 lg:mt-0">
        <div
          className=" shadow-md  lg:h-[300px] flex justify-center items-center"
          style={{
            backgroundImage: `url(https://hamart-shop.vercel.app/_next/static/media/cta-bg-1.3e8b3216.jpg)`,
            height: "100%",
            backgroundSize: "cover",
          }}
        >
          <p className="p-12 text-2xl lg:text-4xl text-center font-bold ">
            My Collections
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#F0F2EE] mt-10">
            <Link to={"/"}>
              <p className="p-5">Continue Shopping</p>
            </Link>
          </div>

          <div className="my-6 p-3 lg:p-0 text-xs lg:text-normal">
            <div className="mx-auto ">
              <div className="overflow-x-auto">
                {isLoading && (
                  <div className="text-2xl font-semibold text-center p-3">
                    <p> Loading...</p>
                  </div>
                )}

                {isError && (
                  <div className="text-2xl font-semibold text-center p-3">
                    <p>{error?.data?.message}</p>
                  </div>
                )}

                {data?.data?.length > 0 ? (
                  <table className="min-w-full ">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                    </colgroup>
                    <thead className="border">
                      <tr className="text-center">
                        <th className="p-3 border">SL</th>
                        <th className="p-3 border">Image</th>
                        <th className="p-3 border">Title</th>
                        <th className="p-3 border">Author</th>
                        <th className="p-3 border ">Status</th>
                        <th className="p-3 border">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.map((book, i) => (
                        <tr
                          key={"book?._id"}
                          className="border border-opacity-20 "
                        >
                          <th className="p-3 border-r">
                            <div className="w-full h-full flex justify-center items-center">
                              <p>{i + 1}</p>
                            </div>
                          </th>

                          <td className="p-3 border-r">
                            <div className="w-full h-full flex justify-center items-center">
                              <img
                                className="w-14 h-14 rounded-full"
                                src={book.image}
                                alt={book.title}
                              />
                            </div>
                          </td>
                          <td className="p-3 border-r">
                            <div className="w-full h-full capitalize">
                              <Link to={`/${book._id}`}>
                                <p className="text-xl font-semibold hover:text-red-600">
                                  {book.title}
                                </p>
                              </Link>
                            </div>
                          </td>
                          <td className="p-3 border-r ">
                            <div className="w-full h-full flex justify-start items-center">
                              <p className="text-xl font-semibold hover:text-red-600 capitalize">
                                {book.author}
                              </p>
                            </div>
                          </td>

                          <td className="p-3 border-r ">
                            <div className="w-full h-full flex justify-center items-center">
                              <select
                                onChange={(e) =>
                                  bookCollectionStatusUpdateHandelar(
                                    JSON.parse(e.target.value)
                                  )
                                }
                                className="w-full p-2 rounded-md bg-transparent border"
                              >
                                <option
                                  selected={book.collections.some(
                                    (collection) =>
                                      collection.status === "reading"
                                  )}
                                  value={JSON.stringify({
                                    id: book._id,
                                    value: "reading",
                                  })}
                                >
                                  Reading
                                </option>
                                <option
                                  selected={book.collections.some(
                                    (collection) =>
                                      collection.status === "reading-50"
                                  )}
                                  value={JSON.stringify({
                                    id: book._id,
                                    value: "reading-50",
                                  })}
                                >
                                  Reading 50%
                                </option>
                                <option
                                  selected={book.collections.some(
                                    (collection) =>
                                      collection.status === "finish"
                                  )}
                                  value={JSON.stringify({
                                    id: book._id,
                                    value: "finish",
                                  })}
                                >
                                  Finish
                                </option>
                              </select>
                            </div>
                          </td>

                          <td className="p-3 border-r ">
                            <div className="text-gray-500 space-x-2 flex justify-center items-center">
                              <button
                                onClick={() => myCollectionDeleteHandelar(book)}
                                className="hover:text-red-600"
                              >
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-2xl font-semibold text-center p-3">
                    <p>No Collection Book Found!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="my-4 p-3 lg:p-0">
            <Link to={"/"}>
              <button className=" p-4 bg-violet-500 text-white font-semibold">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyCollection;
