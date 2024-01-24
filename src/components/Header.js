// import heart from "../../icons8-heart-24.png";
// import user from "../../icons8-user-50.png";
// import cart from "../../icons8-cart-30.png";

// import logo from "../images/logo.jpg";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [currentVal, updateVal] = useState("Login");
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartitems");

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        {/* <img src={logo} className="w-32 px-3" /> */}
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-3">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3 font-bold text-xl">
            <Link to="/cart"> Cart ({cartItems?.length} items)</Link>
          </li>
          <button
            className="p-2 m-3 bg-black text-white rounded-lg"
            onClick={() => {
              let val;
              currentVal == "Login" ? updateVal("Logout") : updateVal("Login");
            }}
          >
            {currentVal}
          </button>
          <li className="px-3">{loggedInUser}</li>
        </ul>
      </div>
      {/* <div className="flex">
        <ul className="flex items-center">
          <li className="px-2">
            <img src={heart} className="w-8" />
          </li>
          <li className="px-2">
            <img src={cart} className="w-8" />
          </li>
          <li className="px-2">
            <img src={user} className="w-8" />
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
