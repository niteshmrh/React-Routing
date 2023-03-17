import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/details">Details</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About Us</Link>
    </div>
  );
}

export default Header;
