import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { LOGO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  console.log("a");
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    console.log("b1");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
    console.log("b");
  };

  // console.log(resInfo?.cards);
  console.log("c");

  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const menu =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
      (card) => card.card.info.name
    ) || [];

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ") + " - " + costForTwoMessage}</h2>
      <ul>
        {/* Loop through the menu and display each item */}
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
