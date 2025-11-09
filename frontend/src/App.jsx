import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.profile);
    return (
        <div className="w-full min-h-screen flex flex-col items-center font-inter overflow-x-hidden overflow-y-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
