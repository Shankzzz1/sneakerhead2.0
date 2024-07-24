import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styling/Filter.css";
import Card3 from "./Card3";
import shoe from "../Images/Airforce.jpeg";

function Filter(props) {
  const MenSportProducts = [
    {
      index: 1,
      image: shoe,
      Name: "Running Shoes",
      Category: "Running",
      Price: "$100",
    },
    {
      index: 2,
      image: shoe,
      Name: "Yoga Mat",
      Category: "Yoga",
      Price: "$50",
    },
    {
      index: 3,
      image: shoe,
      Name: "Yoga Mat",
      Category: "Yoga",
      Price: "$50",
    },
    {
      index: 4,
      image: shoe,
      Name: "Yoga Mat",
      Category: "Yoga",
      Price: "$50",
    },
    {
      index: 5,
      image: shoe,
      Name: "Training Shorts",
      Category: "Training",
      Price: "$30",
    },
    {
      index: 6,
      image: shoe,
      Name: "Tennis Racket",
      Category: "Tennis",
      Price: "$120",
    },
    {
      index: 7,
      image: shoe,
      Name: "Basketball",
      Category: "Basketball",
      Price: "$25",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleOption = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <Navbar />
          <div className="Mens-prod-Count">Men's Shoes(568)
            <button className="filter-btn">Filter</button>
          </div>
      <div className="Filter-Panel-Main">
        <div className="Filter-Sidemenu">
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
            <li>
              <div className="dropdown-Main">
                <div
                  className="dropdown-head-gender"
                  onClick={() => toggleOption("gender")}
                >
                  Gender
                </div>
                <div
                  className={`dropdown-options ${
                    openDropdown === "gender" ? "show" : ""
                  }`}
                >
                  <div className="dropdown-option-men">
                    <input type="checkbox" id="cat-men" />
                    <label htmlFor="cat-men"> Men</label>
                  </div>
                  <div className="dropdown-option-women">
                    <input type="checkbox" id="cat-women" />
                    <label htmlFor="cat-women"> Women</label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown-Main">
                <div
                  className="dropdown-head-price"
                  onClick={() => toggleOption("price")}
                >
                  Shop By Price
                </div>
                <div
                  className={`dropdown-options ${
                    openDropdown === "price" ? "show" : ""
                  }`}
                >
                  <div className="dropdown-option-price1">
                    <input type="checkbox" id="cat-price1" />
                    <label htmlFor="cat-price1"> Under &#8377; 2500 </label>
                  </div>
                  <div className="dropdown-option-price2">
                    <input type="checkbox" id="cat-price2" />
                    <label htmlFor="cat-price2">
                      {" "}
                      &#8377; 2500 - &#8377; 9000
                    </label>
                  </div>
                  <div className="dropdown-option-price3">
                    <input type="checkbox" id="cat-price3" />
                    <label htmlFor="cat-price3">
                      {" "}
                      &#8377; 9000 - &#8377; 15000
                    </label>
                  </div>
                  <div className="dropdown-option-price4">
                    <input type="checkbox" id="cat-price4" />
                    <label htmlFor="cat-price4"> &#8377; 15000 +</label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown-Main">
                <div
                  className="dropdown-head-size"
                  onClick={() => toggleOption("size")}
                >
                  Size
                </div>
                <div
                  className={`dropdown-options ${
                    openDropdown === "size" ? "show" : ""
                  }`}
                >
                  <div className="dropdown-option-size1">
                    <input type="checkbox" id="cat-size1" />
                    <label htmlFor="cat-size1"> 2.5 </label>
                  </div>
                  <div className="dropdown-option-size2">
                    <input type="checkbox" id="cat-size2" />
                    <label htmlFor="cat-size2"> 3</label>
                  </div>
                  <div className="dropdown-option-size3">
                    <input type="checkbox" id="cat-size3" />
                    <label htmlFor="cat-size3"> 3.5</label>
                  </div>
                  <div className="dropdown-option-size4">
                    <input type="checkbox" id="cat-size4" />
                    <label htmlFor="cat-size4"> 4</label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown-Main">
                <div
                  className="dropdown-head-sports"
                  onClick={() => toggleOption("sports")}
                >
                  Sports
                </div>
                <div
                  className={`dropdown-options ${
                    openDropdown === "sports" ? "show" : ""
                  }`}
                >
                  <div className="dropdown-option-sport1">
                    <input type="checkbox" id="cat-sport1" />
                    <label htmlFor="cat-sport1"> Lifestyle </label>
                  </div>
                  <div className="dropdown-option-sport2">
                    <input type="checkbox" id="cat-sport2" />
                    <label htmlFor="cat-sport2"> Running </label>
                  </div>
                  <div className="dropdown-option-sport3">
                    <input type="checkbox" id="cat-sport3" />
                    <label htmlFor="cat-sport3"> Training & Gym</label>
                  </div>
                  <div className="dropdown-option-sport4">
                    <input type="checkbox" id="cat-sport4" />
                    <label htmlFor="cat-sport4"> BasketBall</label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Filter-product">
        <Card3 data={MenSportProducts} />

        </div>
      </div>
    </>
  );
}

export default Filter;
