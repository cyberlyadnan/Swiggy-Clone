import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Shimmer, { ShimmerCard } from "./src/components/ShimmerCard";
// import SnacksPage from "./src/components/SnacksPage";
import { SearchProvider } from "./Utils/constants";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import {SearchProvider}  from "./Utils/SearchContext";

// const Body = lazy(()=>import("./src/components/Body"))
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const RestaurantPage = lazy(() => import("./src/components/RestaurantPage"));
const SnacksPage = lazy(() => import("./src/components/SnacksPage"));
const CartPage = lazy(() => import("./src/components/CartPage"));
const SearchPage = lazy(() => import("./src/components/SearchPage"));

const Main = () => {
  // useScrollRestoration()


  return (
    <>
      <Provider store={appStore}>
          <SearchProvider>
            <Header />
            <Outlet />
            <Footer />
          </SearchProvider>
      </Provider>
    </>
  );
};

const RouterList = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resid",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <RestaurantPage />
          </Suspense>
        ),
      },
      {
        path: "details/:resid",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <SnacksPage />
          </Suspense>
        ),
      },
      {
        path: "cart/",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "Search/:query",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={RouterList} />);
