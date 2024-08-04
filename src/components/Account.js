import React, { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Message from "./Message";

function Account() {
  const [activeSection, setActiveSection] = useState("Profile"); // set default active section to "Profile"

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navbar />
      <div className="Men">
        <div className="MenMain">
          <div className="Men-Navbar">
            <ul className="Men-Nav-ul cursor-pointer">
              <li onClick={() => handleSectionClick("Profile")}>Profile</li>
              <li onClick={() => handleSectionClick("Inbox")}>Inbox</li>
              <li onClick={() => handleSectionClick("Orders")}>Orders</li>
              <li onClick={() => handleSectionClick("Favourites")}>
                Favourites
              </li>
            </ul>
          </div>
        </div>
        <div className="Men-Content">
          {activeSection === "Profile" && <Profile />}
          {activeSection === "Inbox" &&   <Message/>}
          {activeSection === "Orders" && <div>Orders Content</div>}
          {activeSection === "Favourites" && <div>Favourites Content</div>}
        </div>
      </div>
    </>
  );
}

export default Account;
