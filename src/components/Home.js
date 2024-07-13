import React from "react";
import Ban1 from "../Images/Ban1.jpeg";
import Ban11 from "../Images/MOBan1.jpeg";
import Ban12 from "../Images/Ban12.jpg";
import Banner2 from "../Images/banner2.jpg";
import Navbar from "./Navbar";
import "../styling/Home.css";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="Banner1">
        <img className="Ban1img" src={Ban1} alt="Banner 1" />
      </div>
      <div className="MOBanner1">
        <img className="MOBan1img" src={Ban11} alt="Mobile Banner 1" />
      </div>

      <div className="Section1">
        <div className="MainText1">Win On Air</div>
        <div className="SubText1">Meet The Next Generation Of Nike Air.</div>
        <div className="Btn1">
          <button className="Button1">Shop Now</button>
        </div>
      </div>

      <div className="Section2">
        <div className="Slider1-Heading">Shop Air</div>
        {/* Render your Card component here */}
        <Card />
      </div>

      <div className="Section4">
        <div className="Slider1-Heading">Powered By Puma</div>
      </div>

      <div className="Banner2">
        <img className="Ban2img" src={Banner2} alt="Banner2" />
      </div>

      <div className="MOBanner2">
        <img className="MOBan2img" src={Ban12} alt="Mobile Banner 2" />
      </div>

      <div className="Section3">
        <div className="MainText2">PLAY LOUD</div>
        <div className="SubText2">Break It Down</div>
        <div className="Btn2">
          <button className="Button1">SHOP NOW</button>
        </div>
      </div>

      <div className="Section5">
        <div className="Slider1-Heading">Member Benifits</div>
        <Card2 />
      </div>

      <div className="Offer">JOIN SNEAKERHEAD AND GET 15% OFF</div>

      <Footer/>
    </>
  );
}
export default Home;
