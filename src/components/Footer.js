import React from "react";
import "../styling/footer.css";
import instagram from "../Images/instagram.png"
import whats from "../Images/whatsapp.png"
import linked from "../Images/linkedin (1).png"
import git from "../Images/github.png"

function Footer() {
  return (
    <>
    <footer>
      <div className="ParentFooter">

        <div className="SocialMedia">
          <img className="social" src={instagram} alt="insta"/>
          <img className="social" src={whats} alt="insta"/>
          <img className="social" src={linked} alt="insta"/>
          <img className="social" src={git} alt="insta"/>
        </div>
        <div className="Cat1">
          <ul>
            <li>
              <h3 className="footheading">Categories</h3>
            </li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
        </div>
        <div className="Cat2">
          <ul>
            <li>
              <h3 className="footheading">Categories</h3>
            </li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
        </div>
        <div className="Cat3">
          <ul>
            <li>
              <h3 className="footheading">Categories</h3>
            </li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
        </div>
        <div className="copyright">
          &copy; 2024 SNEAKERHEAD, All Rights Reserved  
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
