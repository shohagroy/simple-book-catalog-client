import { Link } from "react-router-dom";

const MyWishlist = () => {
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
            My Wishlist
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
                <div className="text-2xl font-semibold text-center p-3">
                  <p> Loading...</p>
                </div>
                <div className="text-2xl font-semibold text-center p-3">
                  {/* <p>{error?.data?.message}</p> */}
                </div>
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
                      <th className="p-3 border">Unit</th>
                      <th className="p-3 border ">Price</th>
                      <th className="p-3 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={"_id"} className="border border-opacity-20 ">
                      <th className="p-3 border-r">
                        <div className="w-full h-full flex justify-center items-center">
                          <p>{"i + 1"}</p>
                        </div>
                      </th>

                      <td className="p-3 border-r">
                        <div className="w-full h-full flex justify-center items-center">
                          <img
                            className="w-14 h-14 rounded-full"
                            src={"images"}
                            alt={"title"}
                          />
                        </div>
                      </td>
                      <td className="p-3 border-r">
                        <div className="w-full h-full capitalize">
                          <Link to={`/${"productId"}`}>
                            <p className="text-xl font-semibold hover:text-red-600">
                              {"title"}
                            </p>
                          </Link>
                        </div>
                      </td>
                      <td className="p-3 border-r ">
                        <div className="w-full h-full flex justify-center items-center">
                          <p className="text-xl font-semibold hover:text-red-600 uppercase">
                            {"unit"}
                          </p>
                        </div>
                      </td>

                      <td className="p-3 border-r ">
                        <div className="w-full h-full flex justify-center items-center">
                          {/* <div className="flex items-center content-center my-auto  py-0 rounded-md border border-gray-100 font-semibold">
                          <div className="m-0">
                            <button
                              disabled={count < 2 ? true : false}
                              onClick={() => setCount(count - 1)}
                              className=" px-3 py-1 my-0 mx-auto text-lg "
                            >
                              −
                            </button>
                          </div>
                          <div className="m-0">
                            <p className=" px-3 py-1 my-0 mx-auto ">
                              {count}
                            </p>
                          </div>
                          <div className="m-0">
                            <button
                              onClick={() => setCount(count + 1)}
                              className=" px-3 py-1 my-0 mx-auto text-lg "
                            >
                              +
                            </button>
                          </div>
                        </div> */}
                          <p className="text-xl font-semibold hover:text-red-600">
                            ${"price"}
                          </p>
                        </div>
                      </td>

                      <td className="p-3 border-r ">
                        <div className="text-gray-500 space-x-2 flex justify-center items-center">
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-2xl font-semibold text-center p-3">
                  <p>No Wish List Product Found!</p>
                </div>
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

export default MyWishlist;
