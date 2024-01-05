import newLogo from "../../logo.jpg";
import heart from "../../icons8-heart-24.png";
import user from "../../icons8-user-50.png";
import cart from "../../icons8-cart-30.png";
import { useState } from "react";

const Header = () => {
  const [currentVal, updateVal] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={newLogo} className="logo-img" />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li
            onClick={() => {
              let val;
              currentVal == "Login" ? updateVal("Logout") : updateVal("Login");
            }}
          >
            {currentVal}
          </li>
        </ul>
      </div>
      <div className="side-buttons">
        <ul>
          <li>
            <img src={heart} />{" "}
          </li>
          <li>
            <img src={cart} />
          </li>
          <li>
            <img src={user} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
