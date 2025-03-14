import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  useEffect(() => {
    console.log("Use Effect Called");
  }, []);
  return (
    <div className="flex justify-between p-4 m-4 bg-gray-200">
      <div className="w-20">
        <div className="logo">
          <img src={LOGO_URL}></img>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <ul className="flex gap-4">
          <li>Online Status : {onlineStatus ? "💚" : "💔"}</li>
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
          <li>
            <Link to="/grocery">Grocery</Link>
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
