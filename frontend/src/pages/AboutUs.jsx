import React from "react";
import { FaArrowRight, FaUserGraduate, FaUserTie } from "react-icons/fa";
import CTAButton from "../components/common/Button";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center p-5 w-full min-h-screen bg-cover bg-[url('/assets/aboutUs-bg.jpg')] gap-x-10">
            {/* <--------------------Hero Section--------------------> */}
            <div className=" flex flex-row gap-20 items-center justify-between px-7 bg-red-400 w-full">
                <div className="w-[75%]">
                    <h1 className="text-5xl font-extrabold text-white">Avout NEXWORK</h1>
                    <h2 className="text-2xl text-white w-200">
                        Empowering University students to collaborate, learn and earn through freelancing within their campus community.
                    </h2>
                </div>
                <div className="w-[200px] h-[100px]">
                    <img src={""} alt="" />
                </div>
            </div>

            {/* <--------------------Cards Section--------------------> */}
            <div className="flex flex-row items-center gap-20 justify-center bg-blue-200 w-full">
                <div className="bg-white h-[400px] w-[300px] rounded-lg text-black text-center flex flex-col items-center p-3 gap-5">
                    <FaUserGraduate className="w-[50px] h-auto" />
                    <h2 className="font-inter font-bold text-2xl mt-4 text-center h-30 w-28">For Students</h2>
                    <p className="font-inter text-lg font-medium text-center">
                        Gain experience from real freelancing work through peers and faculty
                    </p>
                </div>
                <div className="">
                    <FaUserTie className="" />
                    <h2 className="">For Professors</h2>
                    <p className="">Get assistance on projects while mentoring talented students</p>
                </div>
            </div>

            {/* <---------------------CTA Button Section--------------> */}
            <div className="bg-yellow-50">
                <CTAButton active={true} linkto={"/signup"}>
                    <div className="gap-4 flex flex-row items-center w-[150px] justify-center">
                        <span>Start your Journey Today</span>
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>
        </div>
    );
};

export default AboutUs;
