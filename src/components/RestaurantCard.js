import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="m-4 p-4 w-[225px] rounded bg-gray-100 hover:bg-gray-200">
      <div className="">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={MEDIA_ASSETS_URL + resData?.info.cloudinaryImageId}
        ></img>
      </div>
      <div className="">
        <h3 className="font-bold text-lg py-3">{name}</h3>
        <h4>{cuisines.slice(0, 2).join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{costForTwo} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
