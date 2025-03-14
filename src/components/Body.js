import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    console.log(json);

    const restaurantsList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantsList);
    setFilteredRestaurants(restaurantsList);
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

  if (!onlineStatus) {
    return (
      <div>
        <h1>You are Offline !! Please check your internet connection</h1>
      </div>
    );
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="border ml-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              console.log(searchText);

              // const filteredRestaurants = resObj.filter((restaurant) => {
              //   return restaurant.info.name
              //     .toLowerCase()
              //     .includes(searchText.toLowerCase());
              // });

              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  console.log(
                    searchText.toLowerCase(),
                    restaurant?.info?.name?.toLowerCase()
                  );

                  return restaurant?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              console.log("Filter button clicked");
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.avgRating > 4.5;
                }
              );
              console.log(filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Filter Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant?.info.id}
              key={restaurant?.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
