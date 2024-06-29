import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";
import { Filter } from "./Filter";
import { ShimmerCard } from "./ShimmerCard";
import useDataHome from "../../Hooks/useDataHome";
import isOpenHOC from "./isOpenHOC";
import MyCarousel from "./MyCarousel";
import {SearchContext} from "../../Utils/SearchContext";
import { RestaurantShimmer } from "./RestaurantShimmer";

const Body = () => {



  const EnhancedFoodCard = isOpenHOC(FoodCard);

  const [myCarousel, setMyCarousel] = useState([]);

  const {setrestrolist, setfilteredrestrolist,restrolist,filteredrestrolist} = useContext(SearchContext)
  useDataHome(setrestrolist, setfilteredrestrolist, setMyCarousel);


  if (!restrolist) {
    return (
      <div className="flex flex-wrap justify-center bg-white rounded-lg mb-16 mt-10 mx-auto w-9/12">
      {console.log("huihhi")}

        {[...Array(12)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
  
      </div>
    );
  }

  return (
    <>
      <div className="body-container ">

      <div className="flex flex-wrap justify-center bg-white rounded-lg mb-16 mt-4">
  {myCarousel.length > 0 && (
    <>
      {myCarousel.map((data,index) => {
        
        return (
          // <Link to={`details/${collectionId}`} key={data.id}>
          //   <MyCarousel {...data} />
          // </Link>
            <MyCarousel key={index} {...data} />
          
        );
      })}
    </>
  )}
</div>


        <Filter
          setrestrolist={setfilteredrestrolist}
          restaurants={restrolist}
        />
        <h1 className="text-4xl font-bold text-gray-800 py-4 px-40 bg-gradient-to-r text-black">
          Top Restaurant
        </h1>
        <div className="flex flex-wrap px-20 justify-center gap-4">
          {filteredrestrolist.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="w-full h-full">
                {restaurant.info.isOpen ? (
                  <EnhancedFoodCard {...restaurant.info} />
                ) : (
                  <FoodCard {...restaurant.info} />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
