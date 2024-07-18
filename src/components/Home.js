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
import memban2 from "../Images/memberBan2.jpeg";
import memban3 from "../Images/memberBan3.jpeg";
import memban4 from "../Images/memberBan4.jpeg";
import memban5 from "../Images/memberBan6.jpeg";
import shoe from "../Images/Airforce.jpeg";
import shoe2 from "../Images/shoe2.jpeg";
import shoe3 from "../Images/shoe3.jpeg";
import shoe4 from "../Images/shoe4.jpeg";
function Home() {
  const sliderImageUrl = [
    {
      url: memban2,
      text1: "Member Product",
      Maintext: "Your Exclusive Access",
      btntext: "Shop"
    },
    {
      url: memban2,
      text1: "Member Product",
      Maintext: "Your Exclusive Access",
      btntext: "Shop"
    },
    {
      url: memban3,
      text1: "Member Product",
      Maintext: "Your Exclusive Access",
      btntext: "Shop"
    },
    {
      url: memban4,
      text1: "Member Product",
      Maintext: "Your Exclusive Access",
      btntext: "Shop"
    },
    {
      url: memban5,
      text1: "Member Product",
      Maintext: "Your Exclusive Access",
      btntext: "Shop"
    }
  ];

  const sliderImageUrl1 = [
    {
      url: shoe
    },
    {
      url: shoe2
    },
    {
      url: shoe3
    },
    {
      url: shoe4
    },
    {
      url: shoe
    }
  ];
  
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
        <Card data={sliderImageUrl1} />
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
        <Card2 data={sliderImageUrl}/>
      </div>

      <div className="Offer">JOIN SNEAKERHEAD AND GET 15% OFF</div>

      <Footer/>
    </>
  );
}
export default Home;
