import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";
import Logo from "../Images/shoe.png";
import Menu from "../Images/menu-bar.png";
import cart from "../Images/cart.png";
import liked from "../Images/heart.png";
import search from "../Images/search.png";
import acc from "../Images/acc.png";
import SideMenu from "./Sidemenu";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>
        </li>
        <div className="hideinmob">
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
          <Link to="/women">
          Women
          </Link>
          </li>
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
        <li>
          <Link to="/account">
            <img src={acc} className="acc" alt="acc" />
          </Link>
        </li>
      </ul>
      {isSidebarOpen && <SideMenu />}
    </div>
  );
}

export default Navbar;
