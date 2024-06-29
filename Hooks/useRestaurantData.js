import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { RestaurantAPI } from '../Utils/constants';

const useRestaurantData = () => {
    const [restaurantInfo, setrestaurantInfo] = useState([]);
    const [restaurantDeatils, setrestaurantDeatils] = useState([]);
    const { resid } = useParams();


    const GetData = async () => {
        console.log("Get data is running befor fetch")
        const data = await fetch(RestaurantAPI + resid)
        console.log("Get data is running")
        
        dataJson = await data.json()
        console.log(dataJson)
        setrestaurantDeatils(dataJson.data.cards[2].card.card.info)
        // setrestaurantInfo(dataJson.data)
        setrestaurantInfo(dataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((category) => category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    }

    useEffect(() => {
        GetData()
        // window.scrollTo(0, 0)
    }, [])

    return {restaurantInfo, restaurantDeatils};
}

export default useRestaurantData;