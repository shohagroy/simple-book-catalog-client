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
                      <th className="p-3 border">Status</th>
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
                        <div className="w-full h-full flex justify-center items-center">
                          <button className="text-red-600">
                            {/* <BiTrash size={30} /> */}
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
