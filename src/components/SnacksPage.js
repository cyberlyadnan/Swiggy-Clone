import React, { useEffect, useState } from "react";
import { SnackAPI } from "../../Utils/constants";
import { useParams } from "react-router-dom";
import { ShimmerCard } from "./ShimmerCard";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const SnacksPage = () => {
  const [snaksData, setsnaksData] = useState(null);
  const [allRestaurants, setallRestaurants] = useState([]);
  const { resid } = useParams();
  console.log("Restaurant Id"+resid)

  const GetData = async () => {
    try {
      const data = await fetch(
        `${SnackAPI}${resid}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      // console.log(`${SnackAPI}${resid}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset"
      const jsonData = await data.json();
      setsnaksData(jsonData);
      console.log(jsonData)

      const restaurants = jsonData.data.cards.filter(
        (restro) =>
          restro.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      console.log(restaurants)
      setallRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetData();
  }, [resid]);

  if (!snaksData) {
    <ShimmerCard />;
  }

  const { title, imageId, count, description } =
    snaksData?.data?.cards[0]?.card?.card || {};

  return (
    <>
      <div className="container mx-auto p-4 flex justify-center">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5">
          <img
            className="w-full h-64 object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
            alt={title}
          />
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700 text-base mb-4">{description}</p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Number of Items:</span> {count}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {allRestaurants.map((restaurant) => (
          <div
            key={restaurant.card.card.info.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <Link
              to={"/restaurant/" + restaurant.card.card.info.id}
              className="block h-full"
            >
              <FoodCard {...restaurant.card.card.info} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SnacksPage;
