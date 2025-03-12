import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
