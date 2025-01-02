import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/about" className="links">
            About Us
          </Link>
          <Link to="/contact" className="links">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
