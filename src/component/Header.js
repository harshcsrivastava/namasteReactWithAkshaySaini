import { MODEL } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={MODEL} className="model"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shops</li>
          <li>Cuisine</li>
        </ul>
      </div>
    </div>
  );
};

// Before import we need to Export the Header Compoonent.

export default Header;
