// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { FiBriefcase } from "react-icons/fi";

// const HeroSection = () => {
//     return (
//         <div className="h-screen w-screen py-4 px-10 flex justify-center items-center bg-cover bg-center bg-[url('/assets/home/hero-bg.jpg')] text-white">
//             <div className="w-[90%] flex flex-row justify-evenly items-center">
//                 {/* hero section left */}
//                 <div className="flex flex-col w-[55%] gap-7">
//                     <div className="w-[85%] ">
//                         <h1 className="font-inter font-extrabold text-5xl leading-tight">
//                             FIND TALENT YOU CAN TRUST, WITHIN YOUR OWN NETWORK
//                         </h1>
//                     </div>
//                     <div className="w-[75%]">
//                         <p className="font-inter font-medium text-lg">
//                             Connect with talented students, professors, and alumni from your university for freelance projects and
//                             internships.
//                         </p>
//                     </div>
//                     <div className="w-[90%] flex flex-row gap-x-3">
//                         <div className="w-[75%] relative">
//                             <div className="absolute text-black top-2 left-5">
//                                 <CiSearch fontSize={20} />
//                             </div>
//                             <input
//                                 placeholder="Search for jobs, skills or categories..."
//                                 className="bg-white rounded-lg px-12 py-2 text-left text-gray-500 w-full"
//                             />
//                         </div>
//                         <div className="w-[25%] relative">
//                             <div className="text-white absolute top-2 left-7">
//                                 <CiSearch fontSize={20} />
//                             </div>
//                             <p className="rounded-lg w-full bg-cyan-500 py-2 px-14 hover:bg-blue-600">Search</p>
//                         </div>
//                     </div>
//                     <div className="w-[75%] flex flex-row gap-4 items-center">
//                         <div className="rounded-lg bg-blue-400 text-richblack-800 py-2 pl-16 relative w-[35%] hover:bg-blue-500">
//                             <div className="text-richblack-900 absolute left-[30px]">
//                                 <FiBriefcase fontSize={20} />
//                             </div>
//                             <p className="">Post a job</p>
//                         </div>
//                         <p className="">Looking for hire? Post your project...</p>
//                     </div>
//                 </div>

//                 {/* hero section right */}
//                 <div className="w-[45%] bg-cyan-500 flex items-center justify-center rounded-lg">
//                     <div className="flex flex-col gap-4 items-center mt-20 mb-20">
//                         <div className="rounded-full flex text-center p-5 bg-cyan-400 w-fit">
//                             <FiBriefcase fontSize={50} />
//                         </div>
//                         <h3 className="text-3xl font-inter font-bold">Connect. Collaborate. Create</h3>
//                         <p className="font-normal text-lg">Your University Network is your greatest asset</p>
//                         <div className="flex w-fit flex-row gap-5">
//                             <div className="rounded-lg flex flex-col p-3 bg-cyan-400">
//                                 <p className="text-3xl font-bold font-inter">500+</p>
//                                 <p className="">Active jobs</p>
//                             </div>
//                             <div className="rounded-lg flex flex-col p-3 bg-cyan-400">
//                                 <p className="text-3xl font-bold font-inter">1000+</p>
//                                 <p className="">Students</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";

const HeroSection = () => {
    return (
        <div className="h-screen w-full py-4 px-4 md:px-10 flex justify-center items-center bg-cover bg-center bg-[url('/assets/home/hero-bg.jpg')] text-white">
            <div className="w-full md:w-[90%] flex flex-col md:flex-row justify-evenly items-center">
                {/* LEFT */}
                <div className="flex flex-col w-full md:w-[55%] gap-7">
                    <div className="w-full md:w-[85%]">
                        <h1 className="font-inter font-extrabold text-5xl md:text-4xl sm:text-2xl  leading-tight">
                            FIND TALENT YOU CAN TRUST, WITHIN YOUR OWN NETWORK
                        </h1>
                    </div>

                    <div className="w-full md:w-[75%]">
                        <p className="font-inter font-medium text-base sm:text-lg">
                            Connect with talented students, professors, and alumni from your university for freelance projects and
                            internships.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="w-full md:w-[90%] flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:w-[50%] relative">
                            <div className="flex items-center bg-white rounded-lg px-4 py-2">
                                <CiSearch className="text-black mr-3" fontSize={20} />
                                <input
                                    className="flex-1 outline-none text-gray-500"
                                    placeholder="Search for jobs, skills or categories..."
                                />
                            </div>
                        </div>

                        <div className="w-full sm:w-[50%] relative">
                            <div className="text-white absolute top-2 left-7">
                                <CiSearch fontSize={20} />
                            </div>
                            <p className="rounded-lg w-full text-center bg-cyan-500 py-2 px-6 hover:bg-blue-600 cursor-pointer">Search</p>
                        </div>
                    </div>

                    {/* Post Job */}
                    <div className="w-full md:w-[50%] flex flex-col sm:flex-row gap-4 items-center">
                        <div className="rounded-lg bg-blue-400 flex items-center gap-3 px-6 py-2 hover:bg-blue-500">
                            <FiBriefcase fontSize={20} className="text-richblack-900" />
                            <p className="text-black text-sm">Post a job</p>
                        </div>

                        <p className="text-center sm:text-left">Looking for hire? Post your project...</p>
                    </div>
                </div>

                {/* RIGHT (HIDDEN IN SMALL SCREENS) */}
                <div className="hidden md:flex w-[45%] bg-cyan-500 items-center justify-center rounded-lg mt-10 md:mt-0">
                    <div className="flex flex-col gap-4 items-center mt-20 mb-20">
                        <div className="rounded-full flex text-center p-5 bg-cyan-400 w-fit">
                            <FiBriefcase fontSize={50} />
                        </div>
                        <h3 className="lg:text-3xl md:text-2xl md:text-center font-inter font-bold">Connect. Collaborate. Create</h3>
                        <p className="font-normal text-lg text-center">Your University Network is your greatest asset</p>

                        <div className="flex w-fit flex-row gap-5">
                            <div className="rounded-lg flex flex-col p-3 bg-cyan-400">
                                <p className="text-3xl font-bold font-inter">500+</p>
                                <p>Active jobs</p>
                            </div>
                            <div className="rounded-lg flex flex-col p-3 bg-cyan-400">
                                <p className="text-3xl font-bold font-inter">1000+</p>
                                <p>Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
