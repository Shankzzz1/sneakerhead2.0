import React, { useState } from "react";
import "../styling/Navbar.css";
import Logo from "../Images/shoe.png";
import Menu from "../Images/menu-bar.png";
import cart from "../Images/cart.png";
import liked from "../Images/heart.png";
import search from "../Images/search.png";
import SideMenu from "./Sidemenu.js"; // Import the new component

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <img src={Logo} className="logo" alt="Logo" />
        </li>
        <div className="hideinmob">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Featured</li>
          <li>Custom</li>
        </div>
        <li>
          <img src={Menu} className="menu" onClick={toggleSidebar} alt="Menu" />
        </li>
        <li>
          <img src={cart} className="cart" alt="Cart" />
        </li>
        <li>
          <img src={liked} className="liked" alt="Liked" />
        </li>
        <li>
          <img src={search} className="search" alt="Search" />
        </li>
      </ul>
      {isSidebarOpen && <SideMenu />}
    </div>
  );
}

export default Navbar;
