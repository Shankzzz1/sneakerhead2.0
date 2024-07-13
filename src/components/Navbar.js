import React from "react";
import "../styling/Navbar.css";
import Logo from "../Images/shoe.png";
import Menu from "../Images/menu-bar.png";
import cart from  "../Images/cart.png";
import liked from  "../Images/heart.png";
import search from  "../Images/search.png";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <ul>
          <li>
            <img src={Logo} className="logo" />
          </li>
          <div className="hideinmob">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Featured</li>
          <li>Custom</li>
          </div>
          <li>
            <img src={Menu} className="menu" />
          </li>
          <li>
            <img src={cart} className="cart" />
          </li>
          <li>
            <img src={liked} className="liked" />
          </li>
          <li>
            <img src={search} className="search" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
