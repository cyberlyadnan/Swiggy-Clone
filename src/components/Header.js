import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../images/logo.png";
import user from "../../images/user.png";
// import useStatus from "../../Hooks/useStatus";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import appStore from "../../Utils/appStore";
import OnlineStatusIndicator from "./OnlineStatusIndicator";
import {SearchContext} from "../../Utils/SearchContext";

const Heading = () => {
  const [searchtext, setsearchtext] = useState("");
  const {
    filteredrestrolist,
    setfilteredrestrolist,
  } = useContext(SearchContext);

  

  // subscribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items)
  

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              MCommerce
            </span>
          </Link>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-center">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0 items-center">
              <li>
                <SearchBar
                  searchtext={searchtext}
                  setsearchtext={setsearchtext}
                  restrolist={filteredrestrolist}
                  setfilteredrestrolist={setfilteredrestrolist}
                />
              </li>
             
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/restaurant"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Restaurants
                </Link>
              </li> */}
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-green-200">
                <Link to="/cart" role="button" className="relative flex">
                  <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src={user}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-2"
                  />
                </Link>
              </li>
              <li><OnlineStatusIndicator /></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
