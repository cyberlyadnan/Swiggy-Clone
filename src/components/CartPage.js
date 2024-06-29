import React, { useEffect, useState } from "react";
import Dish from "./Dish";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Utils/cartSlice";
import emptycart from "../../images/emptycart.png";

const CartPage = () => {
  const CartItems = useSelector((store) => store.cart.items);
  console.log(CartItems)
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const taxPercentage = 10;
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
    setCalculatedPrice(0);
    setTotalPrice(0);
    setTaxPrice(0);
  };

  useEffect(() => {
    let price = 0;
    CartItems.forEach((item) => {
      if (item?.card?.info?.price) {
        price += item?.card?.info?.price / 100;
      } else {
        price += item?.card?.info?.defaultPrice / 100;
      }
    });
    const tax = (taxPercentage / 100) * price;
    setCalculatedPrice(price);
    setTaxPrice(tax);
    setTotalPrice(price+tax);
  }, [CartItems, taxPercentage]);

  return (
    <section className="py-8 antialiased dark:bg-gray-900 md:py-12 px-20 mx-auto">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Food Cart
          </h2>
          <button
            onClick={clearCartItems}
            className="bg-slate-800 text-white px-4 py-2 mx-5 rounded-lg hover:bg-slate-600"
          >
            Clear Cart
          </button>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 space-y-6">
            {CartItems.length === 0 ? (
              <>
                <h1 className="text-white text-4xl px-4 mx-auto text-bold">
                  Cart Is Empty
                  <br />
                  Add Items To Cart
                </h1>
                <img src={emptycart} className="w-6/12 mx-auto" />
              </>
            ) : (
              CartItems.map((dishInfo, index) => (
                <Dish key={index} dishInfo={dishInfo} showRemove={true} index={index}/>
              ))
            )}
          </div>

          {/* Order summary */}
          <div className="lg:w-1/3 space-y-6">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹ {calculatedPrice}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Discount
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -₹00.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      TAX %
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {taxPercentage}%
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹ {taxPrice}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    ₹{totalPrice}.00
                  </dd>
                </dl>
              </div>

              <button
                href="#"
                className="flex w-full items-center justify-center bg-blue-800 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <Link
                  to="/"
                  title=""
                  className="inline-flex text-yellow-500 items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Ordering
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
