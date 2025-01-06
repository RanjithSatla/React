import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div className="body">
      {/* <div className="search"></div> */}
      {/* <button>Search</button> */}
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Filter button clicked");
            const filteredRestaurants = resObj.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });
            console.log(filteredRestaurants);
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard resData={restaurant} key={restaurant?.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
