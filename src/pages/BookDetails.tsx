import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteSingleBookMutation,
  useGetSingleBooksQuery,
} from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";
import { useAppSelector } from "../redux/hooks/hooks";
import { useAddToWishListMutation } from "../redux/features/wishlist/wishListApi";
import { useAddtoCollectionsMutation } from "../redux/features/collections/collectionsApi";
import { toast } from "react-hot-toast";
import swal from "sweetalert";

const BookDetails = () => {
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.user);

  const { data, isError, error } = useGetSingleBooksQuery(id);
  const book: IBook = data?.data || {};
  const {
    addedBy,
    author,
    collections,
    genre,
    price,
    publicationDate,
    rating,
    title,
    wishlist,
    _id,
    image,
  } = book;

  const [addToWishList, { isSuccess }] = useAddToWishListMutation();

  const wishListHandelar = () => {
    addToWishList({ data, email: user.email })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Wish list Added successfully");
    }
  }, [isSuccess]);

  const [addtoCollection, { isSuccess: collectionSussess }] =
    useAddtoCollectionsMutation();

  const collectionListHandelar = () => {
    addtoCollection({
      id: _id,
      data: { user: user.email, status: "reading" },
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (collectionSussess) {
      toast.success("Collection list Added successfully");
    }
  }, [collectionSussess]);

  const [
    deleteSingleBook,
    {
      isLoading: deleteIsLoading,
      isError: deleteIsError,
      isSuccess: deleteSuccess,
      error: deleteerror,
    },
  ] = useDeleteSingleBookMutation();

  const bookDeleteHandelar = () => {
    swal({
      title: "Are you sure?",
      text: `Delete This "${title}" book`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteSingleBook(book)
          .then(() => {
            "success";
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("Your Book is safe!");
      }
    });
  };

  useEffect(() => {
    if (deleteIsLoading) {
      swal("Loading...", {
        icon: "info",
      });
    }
  }, [deleteIsLoading]);

  const navigate = useNavigate();

  useEffect(() => {
    if (deleteSuccess && !deleteIsLoading) {
      navigate("/");
      swal("Poof! Your Book has been deleted!", {
        icon: "success",
      });
    }
  }, [deleteIsLoading, deleteSuccess]);

  useEffect(() => {
    if (deleteIsError && !deleteIsLoading) {
      swal(deleteError?.data?.message, {
        icon: "deleteError",
      });
    }
  }, [isError, deleteIsLoading, error]);

  return (
    <div>
      <main className="py-12 2xl:px-6">
        <div className="max-w-[1440px] mx-auto p-4">
          <div className="flex justify-center">
            <div className="">
              <img className="" src={image} alt="book" />
            </div>

            <div className="">
              <div className="m-3">
                <h2 className="capitalize text-3xl font-bold">{title}</h2>
                <p className="font-semibold capitalize">author: {author}</p>
                <p className="font-semibold capitalize">genre: {genre}</p>

                <p className="font-bold capitalize text-2xl ">price: {price}</p>

                <div className="flex">
                  <p>Reating: </p>
                  {[...Array(rating)].map((el, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                </div>

                <div className="capitalize">
                  <p>publication Date: {publicationDate}</p>
                </div>

                <div className="flex mt-2 items-center">
                  <button
                    disabled={wishlist?.includes(user?.email)}
                    onClick={wishListHandelar}
                    className="bg-green-500 text-white text-sm px-2 py-1 mx-2 rounded-md font-bold "
                  >
                    Add to Wishlist
                  </button>

                  <button
                    disabled={collections?.some(
                      (collection) => collection.user === user.email
                    )}
                    onClick={collectionListHandelar}
                    className="bg-blue-500 text-sm text-white px-2 py-1 rounded-md font-bold "
                  >
                    Add to Collection
                  </button>
                </div>

                <div className="flex items-center my-4">
                  {user.email === addedBy && (
                    <div className="text-gray-500 space-x-2  flex">
                      <Link
                        to={`/add-new?id=${_id!}`}
                        className="flex items-center mx-2"
                      >
                        <button className="">
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
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            ></path>
                          </svg>
                        </button>

                        <p>Edit</p>
                      </Link>

                      <div
                        className="flex cursor-pointer hover:text-red-600"
                        onClick={bookDeleteHandelar}
                      >
                        <button className={""}>
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
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetails;
