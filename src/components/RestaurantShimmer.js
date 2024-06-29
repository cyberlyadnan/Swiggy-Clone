import React from "react";
import { Shimmer } from "react-shimmer";

export const RestaurantShimmer = () => {
    return (
        <div className="bg-gray-100 w-7/12 flex items-center justify-center py-6">
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden w-full ">
                <div className="restaurant-image">
                    <Shimmer width="100%" height="180px" className="object-cover" />
                </div>
                <div className="restaurant-details p-6">
                    <Shimmer width="60%" height="32px" className="mb-2" />
                    <Shimmer width="40%" height="20px" className="mb-1" />
                    <Shimmer width="80%" height="20px" className="mb-2" />
                    <div className="flex items-center mb-2">
                        <Shimmer width="70px" height="24px" />
                        <Shimmer width="50px" height="20px" className="ml-2" />
                    </div>
                    <Shimmer width="40%" height="20px" className="mb-4" />
                    <div className="discount-info bg-green-50 text-green-800 p-4 rounded-lg mb-4">
                        <Shimmer width="50%" height="24px" />
                        <ul className="list-disc pl-5 mt-2 text-green-700">
                            <Shimmer width="90%" height="16px" className="mb-1" />
                            <Shimmer width="85%" height="16px" className="mb-1" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


