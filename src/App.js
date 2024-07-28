import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home";
import Men from "../src/components/Men";
// import Navbar from "./components/Navbar";
import 'react-multi-carousel/lib/styles.css';
import Filter from "./components/Filter";
import Productdetails from "./components/Productdetails";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
<>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/men" element={<Men/>} />
        <Route exact path="/filter" element={<Filter/>} />
        <Route exact path="/product" element={<Productdetails/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
