import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home";
import Men from "../src/components/Men";
// import Navbar from "./components/Navbar";
import 'react-multi-carousel/lib/styles.css';
import Filter from "./components/Filter";

function App() {
  return (
<>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/men" element={<Men/>} />
        <Route exact path="/filter" element={<Filter/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
