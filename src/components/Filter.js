
export const Filter = ({ setrestrolist, restaurants }) => {
    const filterOnrating = () => {
        setrestrolist(restaurants.filter(restaurant => restaurant.info.avgRating > 4))
    }
    // const filterforVeg = () =>{
    //     setrestrolist(restaurants.filter(restaurant => restaurant.info.avgRating > 4))
    // }

    return (
        <div className="flex justify-center items-center py-2 mb-3">
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">Filter</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">Sort By</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">Fast Delivery</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">New on Swiggy</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]" onClick={filterOnrating}>
                <div className="font-semibold">Ratings 4.0+</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">Pure Veg</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">Offers</div>
            </button>
            <button className="px-3 py-1 mx-2 hover:bg-[#29a349] dark:bg-gray-800 text-white rounded-[15px]">
                <div className="font-semibold">Rs. 300-Rs. 600</div>
            </button>
        </div>
    );
}
