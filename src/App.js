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
import Passreset from "./components/Passreset";
import Newpass from "./components/Newpass";
import Account from "./components/Account";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Featured from "./components/Featured";

function App() {
  return (
<>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/men" element={<Men/>} />
        <Route exact path="/women" element={<Women/>} />
        <Route exact path="/kids" element={<Kids/>} />
        <Route exact path="/featured" element={<Featured/>} />
        <Route exact path="/filter" element={<Filter/>} />
        <Route exact path="/product" element={<Productdetails/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/reset" element={<Passreset/>} />
        <Route exact path="/newpassword" element={<Newpass/>} />
        <Route exact path="/account" element={<Account/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
