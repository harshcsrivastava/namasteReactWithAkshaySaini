import { LOGO_URL } from "../utils/constant";
const styleCard = {
  backgroundColor: "pink",
  color: "red",
};

const size = {
  width: "124px",
  height: "auto",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating } = resData?.info;

  return (
    <div className="rest-card" style={styleCard}>
      <img src={LOGO_URL} style={size} />
      <h2>{name}</h2>
      <div>{costForTwo}</div>
      <div>{avgRating}</div>
      <div>{cuisines.join(", ")}</div>
    </div>
  );
};

export default RestaurantCard;
