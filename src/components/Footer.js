import React from "react";
import "../styling/footer.css";
import instagram from "../Images/instagram.png"
import Facebook from "../Images/facebook.png"
import linked from "../Images/linkedin.png"
import git from "../Images/github.png"

function Footer() {
  return (
    <>
    <footer>
      <div className="ParentFooter">
      <div className="copyright">
          &copy; 2024 SNEAKERHEAD, All Rights Reserved  
        </div>
       <div className="container-1">
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
        </div> 

        <div className="conatainer-2">
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
        <div className="Cat4">
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
        </div>
      
        <div className="SocialMedia">
          <img className="social" src={instagram} alt="insta"/>
          <img className="social" src={Facebook} alt="insta"/>
          <img className="social" src={linked} alt="insta"/>
          <img className="social" src={git} alt="insta"/>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
