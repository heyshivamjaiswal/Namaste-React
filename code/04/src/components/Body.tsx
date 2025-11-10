import React, { useEffect, useState } from "react";
import { ResCard } from "./ResCard";
import type { Restaurant , RestaurantInfo , Welcome ,Data } from "../utils/constants";
import Shimmar from "./Shimmar";


export function Body() {

  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  

  const [searchText , setSearchText] = useState<string>("")

  const textChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchText(e.target.value)
  }

  useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async () => {
    try {
      const res = await fetch("URL");
      const json: { data: Data } = await res.json();

      // Find the card that actually has restaurant data
      const restaurantCard = json.data.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      // Extract the restaurants
      const restaurantList =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

      // Update state
      setAllRestaurants(restaurantList);
    }catch(err){
      console.log("error in fetching restarunat data" , err)
    }
  };


  return allRestaurants.length == 0 ? <Shimmar/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text"
          className="search-box"
          value={searchText}
          onChange={textChange}
          />
          <button
          onClick={()=>{46
          }}
          >Search</button>
        </div>
        {/* <button onClick={handleTopRated} className="filter-btn">
          Top Rated Restaurants
        </button> */}
      </div>
 
      <div className="res-container">
       {allRestaurants.map((restaurant)=>(
         <ResCard key={restaurant.info.id} resData={restaurant.info} />
       ))}

      </div>
    </div>
  );
}
