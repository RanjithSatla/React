import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurantsList =
      // json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
      //   (restaurant) => {
      //     return restaurant;
      //   }
      // );
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(restaurantsList);
  };

  if (listOfRestaurants.length === 0) {
    return (
      <div className="shimmer-container">
        {Array.from({ length: 12 }).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }
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
