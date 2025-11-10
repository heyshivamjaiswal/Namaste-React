
import type { RestaurantInfo } from "../utils/constants";

export type resCarcInfo = {
   resData : RestaurantInfo
};

export function ResCard({ resData }: resCarcInfo) {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={`${name} logo`}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>400 FOR TWO</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
}
