import React, { useEffect, useState } from "react";
import { RestaurantShimmer } from "./RestaurantShimmer";
import useRestaurantData from "../../Hooks/useRestaurantData";
import Categories from "./Catergories";

const RestaurantPage = () => {
  // const [isOpen, setisOpen] = useState(true)
  const [openIndex, setopenIndex] = useState(0);
  const { restaurantInfo, restaurantDeatils } = useRestaurantData();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  if (restaurantInfo.length === 0) {
    return (
      <div className=" bg-gray-100 min-h-screen flex items-center justify-center py-6">
        <RestaurantShimmer />
      </div>
    );
  }
  const {
    name,
    avgRating,
    locality,
    city,
    costForTwo,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
    aggregatedDiscountInfo,
  } = restaurantDeatils;

  return (
    <>
      <div className=" bg-gray-100 min-h-screen flex items-center justify-center py-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          <div className="restaurant-image">
            <img
              className="w-full h-64 object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
              alt={name}
            />
          </div>
          <div className="restaurant-details p-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
            <p className="text-gray-700 mb-1">
              {locality}, {city}
            </p>
            <p className="text-gray-600 mb-2">
              Cuisines: {cuisines ? cuisines.join(", ") : ""}
            </p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 font-semibold text-lg">
                Rating: {avgRating}
              </span>
              <span className="text-gray-500 ml-2">({totalRatingsString})</span>
            </div>
            <div className="text-gray-600 mb-4">
              <span className="font-medium">
                Cost for Two: ₹{costForTwo / 100}
              </span>
            </div>
            {aggregatedDiscountInfo && aggregatedDiscountInfo.visible && (
              <div className="discount-info bg-green-50 text-green-800 p-4 rounded-lg mb-4">
                <h2 className="font-semibold">
                  {aggregatedDiscountInfo.header}
                </h2>
                <ul className="list-disc pl-5 mt-2 text-green-700">
                  {aggregatedDiscountInfo.shortDescriptionList.map(
                    (desc, index) => (
                      <li key={index}>{desc.meta}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto pb-6">
          {restaurantInfo.map((singlecategory, index) => (
            <Categories
              key={singlecategory.card.card.title}
              setisOpen={() => setopenIndex(openIndex === index ? null : index)}
              isOpen={index === openIndex}
              restaurantInfo={singlecategory}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default RestaurantPage;
