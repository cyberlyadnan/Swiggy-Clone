import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { SearchContext } from "../../Utils/SearchContext";
import FoodCard from "./FoodCard";
import isOpenHOC from "./isOpenHOC"; // Assuming this is the correct HOC for open status
import searchresult from "../../images/searchresult.png"

const EnhancedFoodCard = isOpenHOC(FoodCard);

const SearchPage = () => {
  const { setfilteredrestrolist, restrolist, filteredrestrolist } =
    useContext(SearchContext);
  const { query } = useParams();

  useEffect(() => {
    const filtered = restrolist.filter((res) =>
      res.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setfilteredrestrolist(filtered);
  }, [query, restrolist, setfilteredrestrolist]);

  return (
    <div className="flex flex-wrap px-10 justify-center gap-4 py-4">
      {filteredrestrolist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 ">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img className="w-6/12 mx-auto" src={searchresult}/>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No Results Found
            </h2>
            <p className="text-gray-600 mb-4">
              Sorry, we couldn't find any results for your search. Please try
              again with different keywords.
            </p>
            <Link
              to="/"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Go To Home
            </Link>
          </div>
        </div>
      ) : (
        filteredrestrolist.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <div className="w-full h-full">
              <EnhancedFoodCard {...restaurant.info} />
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchPage;
