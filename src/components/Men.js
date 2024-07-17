import React from "react";
import Navbar from "./Navbar";
import "../styling/Men.css";
import Card from "./Card";
import Ban1 from "../Images/Men-Ban1.jpeg";
import Ban11 from "../Images/MOB-Men-Ban1.jpeg";

function Men() {
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
          <img src={Ban1} />
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
      </div>
    </>
  );
}

export default Men;
