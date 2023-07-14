import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useState } from "react";
import { toast, ToastOptions } from "react-hot-toast";
import { createUser } from "../redux/features/user/userSlice";

const SignUp = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const { isError, isLoading, errorMessage, user } = useAppSelector(
    (state) => state.user
  );

  const dispatch = useAppDispatch();

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (info.password === info.confirmPassword) {
      dispatch(createUser({ email: info.email, password: info.password }));
    } else {
      (
        toast as { error: (message: string, options?: ToastOptions) => void }
      ).error("Password did not match");
    }
  };

  useEffect(() => {
    if (isError && !isLoading) {
      (
        toast as { error: (message: string, options?: ToastOptions) => void }
      ).error(errorMessage!);
    }
  }, [isError, isLoading, errorMessage]);

  useEffect(() => {
    if (user?.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading, navigate]);

  return (
    <main>
      <div className="h-[90vh] w-full flex border-b-2 bg-gray-100">
        <div className="flex justify-center items-center w-full">
          <div className=" w-full lg:w-1/2 lg:p-6 p-2">
            <div className="">
              <div className="flex  text-gray-900">
                <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding shadow-lg">
                  <div className="space-y-2">
                    <div>
                      <h1 className="text-xl font-medium text-center md:text-2xl font-roboto">
                        Welcome to BookShop!
                      </h1>
                    </div>
                    <div>
                      <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>Already have and Account?</span>
                        <Link to="/login">
                          <button className="font-semibold text-blue-500">
                            Login
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <form
                      onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        handleCreateUser(e)
                      }
                      className="text-base font-nunito"
                    >
                      <div className="space-y-4">
                        <div className="relative flex items-center">
                          <svg
                            className="absolute w-5 h-5 ml-3 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <input
                            className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border"
                            type="email"
                            onChange={(e) =>
                              setInfo({ ...info, email: e.target.value })
                            }
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="relative flex items-center">
                          <svg
                            className="absolute w-5 h-5 ml-3 text-gray-400 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          <input
                            className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md  border focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="password"
                            onChange={(e) =>
                              setInfo({ ...info, password: e.target.value })
                            }
                            placeholder="Password"
                            required
                          />
                        </div>

                        <div className="relative flex items-center">
                          <svg
                            className="absolute w-5 h-5 ml-3 text-gray-400 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          <input
                            className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md  border focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="password"
                            onChange={(e) =>
                              setInfo({
                                ...info,
                                confirmPassword: e.target.value,
                              })
                            }
                            placeholder="Confirm Password"
                            required
                          />
                        </div>

                        <div className="flex items-start space-x-2 md:items-center">
                          <input
                            className="focus:outline-none"
                            type="checkbox"
                            name="terms"
                            id="serviceTerms"
                          />
                          <label
                            className="-mt-1 text-sm sm:mt-0"
                            htmlFor="serviceTerms"
                          >
                            <span>Remember Me</span>
                          </label>
                        </div>

                        <div>
                          <button
                            disabled={false}
                            className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                          >
                            {isLoading ? "Loading..." : "Sign Up"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
