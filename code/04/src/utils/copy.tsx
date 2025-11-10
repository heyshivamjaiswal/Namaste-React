// import React, { useEffect, useState } from "react";
// import { ResCard } from "./ResCard";
// import Shimmar from "./Shimmar";

// export function Body() {
//   const [allRestaurants, setAllRestaurants] = useState<any[]>([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);

//   const [searchText , setSearchText] = useState<string>("")

//   const textChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
//     setSearchText(e.target.value)
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6324622&lng=77.0478631&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();

//     const restaurants =
//       json?.data?.cards
//         ?.map(
//           (card: any) =>
//             card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         )
//         ?.filter(Boolean)
//         ?.flat() || [];

//     console.log("Fetched restaurants:", restaurants);
//     setAllRestaurants(restaurants);
//     setFilteredRestaurants(restaurants);
//   };

//   const handleTopRated = () => {
//     const filtered = allRestaurants.filter(
//       (res: any) => Number(res?.info?.avgRating) > 4
//     );
//     setFilteredRestaurants(filtered);
//   };


//   return allRestaurants.length == 0 ? <Shimmar/> : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input 
//           type="text"
//           className="search-box"
//           value={searchText}
//           onChange={textChange}
//           />
//           <button
//           onClick={()=>{
//             console.log(searchText) 

//            const filterRes = allRestaurants.filter((res:any)=> res?.info?.cuisines.some(
//       (cuisine: string) => cuisine.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
//     ))
//            setFilteredRestaurants(filterRes);
//           }}
//           >Search</button>
//         </div>
//         <button onClick={handleTopRated} className="filter-btn">
//           Top Rated Restaurants
//         </button>
//       </div>
 
//       <div className="res-container">
//         {filteredRestaurants.length > 0  &&
//           filteredRestaurants.map((restaurant: any, index) => {
//           if (!restaurant?.info) return null;
//             return (
//               <ResCard key={restaurant.info.id} resData={restaurant} />
//             );
//           })}
//       </div>
//     </div>
//   );
// }
