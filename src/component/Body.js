import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";

const Body = () => {
    // State Variable - Super Powerful Variable (React Hooks)


    // NOORMAL JS Variable
  let listOfRestaurants = [
    // NOORMAL JS Variable
    {
      info: {
        id: "257428",
        name: "Raajbagh Restaurant ",
        costForTwo: "₹150 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Indian",
          "Chinese",
          "Fast Food",
          "Beverages",
        ],
        avgRating: 3.6,
      },
    },
    {
      info: {
        id: "658210",
        name: "KFC",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.2,
      },
    },
  ];
  return (
    <div className="body">
      {/* <div className="SearchBar">Search</div> */}
      <div>
        <button
          className="btn"
          onClick={() => {
            console.log(`Clicked`);

            // Filter Logic

            listOfRestaurants = listOfRestaurants.filter(
                (f) => f.info.avgRating < 4
            );
            console.log(listOfRestaurants);
            // Data is filtered but UI is not updated  
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="RestaurantCont">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
