import React from "react";
import Navbar from "./Navbar";
import shoe from "../Images/Airforce.jpeg";

import '../styling/Filter.css'
function Filter() {
  return (
    <>
      <Navbar />
      <div className="Filter-Panel-Main">
        <div className="Filter-Sidemenu">
          <div className="FilterBy-Categories">
            <ul>
              <li>Lifestyle</li>
              <li>Jordan</li>
              <li>Running</li>
              <li>Basketball</li>
              <li>American Football</li>
              <li>Football</li>
              <li>Training & Gym</li>
              <li>Skateboarding</li>
              <li>Golf</li>
              <li>Tennis</li>
              <li>Athletics</li>
              <li>Walking</li>
            </ul>
          </div>
          <div className="FilterBy-Brands">
            <ul>
                <li>Gender</li>
                <li>Shop By Price</li>
                <li>Shop By Price</li>
                <li>Shop By Price</li>
            </ul>
          </div>
        </div>
        {/* <div className="Filter-Content">
            <img src={shoe}/>
        </div> */}
      </div>
    </>
  );
}

export default Filter;
