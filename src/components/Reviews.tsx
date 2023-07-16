import React, { useState, useEffect } from "react";
import {
  useAddNewReviewMutation,
  useGetBookReviewsQuery,
} from "../redux/features/review/reviewApi";
import { useAppSelector } from "../redux/hooks/hooks";
import { toast } from "react-hot-toast";

export interface IReview {
  review: string;
  date: string;
  bookId: string;
  reviewBy: string | null;
}

const Reviews = ({ id, title }: { id: string; title: string }) => {
  const [reviewText, setReviewText] = useState("");

  const { user } = useAppSelector((state) => state.user);

  const [addNewReview, { isLoading, isSuccess }] = useAddNewReviewMutation();

  const { data } = useGetBookReviewsQuery(id);

  const userReview: IReview = {
    review: reviewText,
    date: new Date().toISOString(),
    bookId: id,
    reviewBy: user?.email,
  };

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addNewReview(userReview)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book Review Create Successfully");
      setReviewText("");
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="">
        <h2 className="lg:text-2xl text-xl font-bold">
          {data?.data?.length} Review For "{title}"
        </h2>

        <div className=" ml-3">
          <div>
            {data?.data?.map((review, i) => (
              <p className=" font-semibold my-2 capitalize">
                {i + 1}. {review?.review} -
                <i className="text-normal text-gray-500 text-sm">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </i>
              </p>
            ))}
          </div>

          <form onSubmit={handleReviewSubmit}>
            <div className="my-4">
              <p>Your review *</p>
              <input
                value={reviewText}
                required
                onChange={(e) => setReviewText(e.target.value)}
                className="w-[50%] h-[80px] p-1 lg:p-3 lg:py-4 border border-black rounded-md"
              />
            </div>

            <div>
              <button className="lg:py-2 lg:px-8 py-2 px-4 text-white  font-bold rounded-md bg-violet-500">
                {isLoading ? "Loading..." : "Review"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
