import React, { useEffect } from "react";
import { IBook } from "../types/globalTypes";
import { useAppSelector } from "../redux/hooks/hooks";
import { Link } from "react-router-dom";
import { useAddToWishListMutation } from "../redux/features/wishlist/wishListApi";
import { toast } from "react-hot-toast";
import { useAddtoCollectionsMutation } from "../redux/features/collections/collectionsApi";

interface BookCardProps {
  data: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ data }) => {
  const { user } = useAppSelector((state) => state.user);

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
      id: data._id,
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

  return (
    <div>
      <div className=" flex border border-violet-500 rounded-md">
        <Link to={`/${data._id!}`}>
          <img
            className="h-[250px] w-[170px] object-cover mr-4"
            src={
              data?.image
                ? data?.image
                : "https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
            }
            alt="book"
          />
        </Link>

        <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
          <div className="space-y-2 mt-2h-full">
            <h4 className="text-xl font-bold capitalize ">{data.title}</h4>
            <p className="capitalize">author: {data.author}</p>
            <p className="capitalize">genre: {data.genre}</p>

            <div className="flex">
              {[...Array(data.rating)].map((el, i) => (
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
            <div className="flex justify-between items-center">
              <p className="text-violet-500 text-xl font-bold ">
                BDT {data.price}
              </p>
              <Link to={`/${data._id!}`}>
                <button className="bg-violet-500 text-white px-2 py-1 rounded-md font-bold ">
                  See Details
                </button>
              </Link>
            </div>

            <div className="flex justify-between mt-2 items-center">
              <button
                disabled={data.wishlist.includes(user.email)}
                onClick={wishListHandelar}
                className="bg-green-500 text-white text-sm px-2 py-1 rounded-md font-bold "
              >
                Add to Wishlist
              </button>

              <button
                disabled={data.collections.some(
                  (collection) => collection.user === user.email
                )}
                onClick={collectionListHandelar}
                className="bg-blue-500 text-sm text-white px-2 py-1 rounded-md font-bold "
              >
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
