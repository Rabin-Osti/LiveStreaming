import React from "react";
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="wrapper header">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="logo" />
        </Link>
        <ProfileIcon />
      </div>
      <hr />
    </div>
  );
};

export default Header;
