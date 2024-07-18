import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styling/Men.css";
import Card from "./Card";
import Ban1 from "../Images/Men-Ban1.jpeg";
import Ban11 from "../Images/MOB-Men-Ban1.jpeg";
import MenSport1 from "../Images/Men-Sport-1.jpeg";
import MenSport2 from "../Images/Men-Sport-2.jpeg";
import MenSport3 from "../Images/Men-Sport-3.jpeg";
import MenSport4 from "../Images/Men-Sport-4.jpeg";
import MenSport5 from "../Images/Men-Sport-5.jpeg";
import shoe from "../Images/Airforce.jpeg";
import shoe2 from "../Images/shoe2.jpeg";
import shoe3 from "../Images/shoe3.jpeg";
import shoe4 from "../Images/shoe4.jpeg";
import Card2 from "./Card2";
import Footer from "./Footer";
import Popular from "./Popular";

function Men() {
  const MenSportSlider = [
    {
      url: MenSport1,
      text1: "",
      Maintext: "Running",
      btntext: "Shop",
    },
    {
      url: MenSport2,
      text1: "",
      Maintext: "Yoga",
      btntext: "Shop",
    },
    {
      url: MenSport3,
      text1: "",
      Maintext: "Training",
      btntext: "Shop",
    },
    {
      url: MenSport4,
      text1: "",
      Maintext: "Tennis",
      btntext: "Shop",
    },
    {
      url: MenSport5,
      text1: "",
      Maintext: "BasketBall",
      btntext: "Shop",
    },
  ];

  const sliderImageUrl1 = [
    {
      url: shoe,
    },
    {
      url: shoe2,
    },
    {
      url: shoe3,
    },
    {
      url: shoe4,
    },
    {
      url: shoe,
    },
  ];

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <>
      <Navbar />
      <div className="Men">
        <div className="MenMain">
          <div className="Men-Maintext1">Men</div>
          <div className="Men-Navbar">
            <ul className="Men-Nav-ul">
              <li>Shoes</li>
              <li>Clothing</li>
              <li>Gear</li>
            </ul>
          </div>
        </div>
        <div className="Men-Banner1">
          <img src={Ban1} alt="Ban1"/>
        </div>
        <div className="MOB-Men-Banner1">
          <img className="MOB-Men-Banner1-img" src={Ban11} alt="mobimg" />
        </div>
        <div className="Men-Section1">
          <div className="Men-MainText1">STEP INTO VICTORY</div>
          <div className="Men-Btn1">
            <button className="Men-Button1">Shop Now</button>
          </div>
        </div>

        <div className="Men-Section2">
          <div className="Slider1-Heading">Shop By Sport</div>
          <Card2 data={MenSportSlider} />
        </div>

        <div className="Men-Section5">
        <div className="Slider1-Heading">Popular Right Now</div>
        <Popular/>
        </div>

        <div className="Men-Section3">
          <div className="Slider1-Heading">Discover Icons</div>
          <Card data={sliderImageUrl1} />
        </div>
        <div className="Men-Section4">
          <ul className="Men-Shoes">
            <li><h3>Men's Shoes</h3></li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
          </ul>
          <ul className="Men-Shoes">
            <li><h3>Men's Clothing</h3></li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
          </ul>
          <ul className="Men-Shoes">
            <li><h3>Men's Gear</h3></li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
            <li>All Men's Shoes</li>
          </ul>
        </div>

        <div className="Mobile-Men-Section4">
          <div className="Mobile-Men-Section4-Submenu1">
            <h3 onClick={() => toggleSubmenu('clothing')}>Men's Clothing</h3>
            {openSubmenu === 'clothing' && (
              <ul>
                <li>Men's Clothing</li>
                <li>Men's Clothing</li>
                <li>Men's Clothing</li>
                <li>Men's Clothing</li>
                
              </ul>
            )}
          </div>

          <div className="Mobile-Men-Section4-Submenu2">
            <h3 onClick={() => toggleSubmenu('shoes')}>Men's Shoes</h3>
            {openSubmenu === 'shoes' && (
              <ul>
                <li>Men's Shoes</li>
                <li>Men's Shoes</li>
                <li>Men's Shoes</li>
                <li>Men's Shoes</li>
                
              </ul>
            )}
          </div>

          <div className="Mobile-Men-Section4-Submenu3">
            <h3 onClick={() => toggleSubmenu('gear')}>Men's Gear</h3>
            {openSubmenu === 'gear' && (
              <ul>
                <li>Men's Gear</li>
                <li>Men's Gear</li>
                <li>Men's Gear</li>
                <li>Men's Gear</li>
              </ul>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Men;
