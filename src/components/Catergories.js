import React from "react";
import Dish from "./Dish";

const Categories = ({ restaurantInfo, isOpen, setisOpen }) => {
  return (
    <div className="bg-white">
      <div
        className="flex justify-between items-center py-2 cursor-pointer px-6 border-b-2"
        onClick={setisOpen}
      >
        <h2 className="text-xl font-semibold">
          {restaurantInfo.card.card.title} (
          {restaurantInfo.card.card.itemCards.length})
        </h2>
        <div
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </div>
      </div>
      {isOpen && (
        <div className="py-2 cursor-pointer px-6 border-b-2 rounded-lg">
          {restaurantInfo.card.card.itemCards.map((dishInfo,index) => (
            <Dish
              key={dishInfo.card.info.id}
              dishInfo={dishInfo}
              showRemove={false}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
