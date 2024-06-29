import React from 'react';

const FoodCard = (props) => {
    const { name, cloudinaryImageId, locality, cuisines, costForTwo, areaName, avgRating, sla, aggregatedDiscountInfoV3 } = props;
    const displayCuisines = cuisines.slice(0, 3).join(", ");
    
    return (
        <div className="m-2 p-2 w-72 bg-slate-50 shadow-md rounded-lg hover:bg-slate-200 border-1">
            <div className="card-media">
                <img
                    className="w-full h-44 object-cover rounded-lg"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt={name}
                />
                
            </div>
            <div className="p-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{displayCuisines}</p>
                <p className="text-sm text-gray-600"><b>Address:</b> {areaName}, {locality}</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center p-1 dark:bg-gray-800 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-sm text-yellow-400 ">{avgRating} &#x2605;</p>
                    </div>
                    <p className="text-sm">{sla.slaString}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
