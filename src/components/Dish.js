import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../Utils/cartSlice";

const Dish = ({ dishInfo, showRemove, index }) => {
  const { name, description, imageId, price, defaultPrice } = dishInfo.card.info;

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(addItem(dishInfo)); // Dispatch addItem action with dishInfo as payload
  };

  const handleClickRemove = () => {
    dispatch(removeItem(index)); // Dispatch removeItem action with index as payload
  };

  return (
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          <div className="rounded-lg border-2 hover:shadow-lg cursor-pointer border-gray-100 hover:bg-gray-800 bg-white p-4 shadow-sm dark:border-gray-700 md:p-4 shadow-md hover:shadow-xl dark:bg-gray-900">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <div className="shrink-0 md:order-1">
                <img
                  className="h-20 w-20 dark:hidden"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                  alt={name}
                />
                <img
                  className="hidden h-24 w-24 dark:block rounded-lg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                  alt={name}
                />
              </div>

              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  {/* <button
                    type="button"
                    onClick={handleClickRemove}
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value="0"
                    readOnly
                  /> */}
                  {showRemove ? (
                  <button
                    type="button"
                    onClick={handleClickRemove}
                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    <svg
                      className="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleClickAdd}
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>)}
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    ₹{price ? price / 100 : defaultPrice / 100}
                  </p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-1 md:order-2 md:max-w-md">
                <p className="text-white font-bold text-xl">{name}</p>
                <p className="text-base font-xs text-gray-900 hover:text-yellow-400 dark:text-white">
                  {description}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
