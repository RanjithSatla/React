import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");

  useEffect(() => {
    console.log("Use Effect Called");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={LOGO_URL}></img>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
