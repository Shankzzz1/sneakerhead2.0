// import React from "react";
import "../styling/filtermob.css";
import close from "../Images/cross.png";
import React, { useState } from "react";

function FilterMob() {

    const [isOpen, setIsOpen] = useState(true); // State to manage menu open/close

  const handleClose = () => {
    setIsOpen(false); // Set isOpen to false when close button is clicked
  };
  return (
    <>
    {isOpen && (
      <div className="FilterMOb-Main">
        <img src={close} className="Sidemenu-close-filter" onClick={handleClose} />
        <div className="cat1 mt-5" >
          <ul>
            <li>
              <h2 className='font-semibold text-xl'>Sort By</h2>
            </li>
            <li>
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Featured</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Newest</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Price : Low To High</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Price : High To Low</label>
              <br />
              
            </li>
          </ul>
            <br/>
          <ul>
            <li>
              <h2 className='font-semibold text-xl'>Gender</h2>
            </li>
            <li>
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Male</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Female</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Other</label>
            </li>
          </ul>
            <br/>

          <ul>
            <li>
              <h2 className='font-semibold text-xl'>Shop By Price</h2>
            </li>
            <li>
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Under &#8377; 2500</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> &#8377; 2500 - &#8377; 9000</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> &#8377; 9000 - &#8377; 15000</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> &#8377; 15000 +</label>
            </li>
          </ul>
            <br/>

          <ul>
            <li>
              <h2 className='font-semibold text-xl'>Sale And Offers</h2>
            </li>
            <li>
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Sale</label>
              <br />
            </li>
          </ul>
          <br/>

          <ul>
            <li>
              <h2 className='font-semibold text-xl'>Size</h2>
            </li>
            <li>
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> 2.5</label>
              <br />
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> 3</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> 3.5</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> 4</label>
            </li>
          </ul>
            <br/>

          <ul>
            <li>
              <h2 className='font-semibold text-xl'>Sports</h2>
            </li>
            <li>
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Lifestyle</label>
              <br />
              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Running</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> Training & Gym</label>
              <br />

              <input type="checkbox" id="cat-men" />
              <label htmlFor='cat-men' className="text-base"> BasketBall</label>
            </li>
          </ul>
            <br/>
        </div>
      </div>
      )}
    </>
  );
}

export default FilterMob;
