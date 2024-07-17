import React, { useState } from "react";
import "../styling/sidemenu.css";
import Logo from "../Images/shoe.png";
import close from "../Images/close.png";
import { Link } from "react-router-dom";

function Sidemenu() {
  const [isOpen, setIsOpen] = useState(true); // State to manage menu open/close

  const handleClose = () => {
    setIsOpen(false); // Set isOpen to false when close button is clicked
  };

  return (
    <>
      {isOpen && (
        <div className="MainSideMenu">
          <div>
            <img
              src={close}
              className="Sidemenu-close"
              onClick={handleClose}
              alt="Close"
            />
          </div>
          <div className="MainSideMenu-content">
            <div className="SideMenu1">
             <Link to="/men">Men</Link> </div>
            <div className="SideMenu2">Women</div>
            <div className="SideMenu3">Kids</div>
            <div className="SideMenu4">Featured</div>
            <div className="SideMenu5">Custom</div>
            <div className="SideMenu6">SNEAKERHEAD</div>
          </div>
          <div className="BrandLogo">
            <img src={Logo} className="Sidemenu-logo" alt="Logo" />
            <div className="BrandName">SNEAKERHEAD &trade;</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidemenu;
