import { useEffect } from "react";
import { HomeAPI, updateAPI } from "../Utils/constants";

const useDataHome = (setrestrolist, setfilteredrestrolist, setMyCarousel) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(HomeAPI);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status ${response.status}`);
                }

                const jsonData = await response.json();
                let card = jsonData?.data?.cards[4]?.card?.card;
                let restaurants = card?.gridElements?.infoWithStyle?.restaurants;
                // console.log(restaurants)
                let carouselData = jsonData.data.cards[0].card.card.imageGridCards.info
                setMyCarousel(carouselData)
                setrestrolist(restaurants);
                setfilteredrestrolist(restaurants);
            } catch (error) {
                console.log("Error Fetching Data: ", error);
            }
        };

        fetchData();
    }, []); // Ensure dependencies are set correctly
};

export default useDataHome;
