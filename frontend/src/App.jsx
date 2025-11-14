import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MyProfile from "./pages/MyProfile";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Category from "./pages/Category";
import ScrollToTop from "./components/common/ScrollToTop";
import MyJobs from "./pages/MyPostedJobs";
import MyApplications from "./pages/MyApplications";
import AllJobs from "./pages/AllJobs";
import PostJob from "./pages/PostJob";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.profile);
    return (
        <div className="w-full min-h-screen flex flex-col items-center font-inter overflow-x-hidden overflow-y-auto">
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/my-posted-jobs" element={<MyPostedJobs />} />
                <Route path="/my-applications" element={<MyApplications />} />
                <Route path="/dashboard/my-profile" element={<MyProfile />} />
                <Route path="/job" element={<AllJobs />} />
                <Route path ="/post-job" element={<PostJob />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
