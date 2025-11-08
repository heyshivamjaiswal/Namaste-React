import { useState } from "react";
import restaurantList from "../utils/mockData";
import { ResCard, type resData } from "./ResCard";



export function Body(){
    const [listOfRestaurant, setListOfRestaurant] = useState<resData[]>(restaurantList)
    return (
        <div className="body">
            <div className="filter">
                <button
                onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
              (res) => Number(res.data.avgRating) > 4
            );
            setListOfRestaurant(filteredList);
          }}
                className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div  className="res-conatiner">
                {listOfRestaurant.map((restaurant) => (
                <ResCard key={restaurant.data.name} resData={restaurant} />
                ))}

            </div>
        </div>
    )
}