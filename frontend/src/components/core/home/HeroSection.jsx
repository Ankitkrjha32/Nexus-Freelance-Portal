import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";

const HeroSection = () => {
    return (
        <div className="">
            <div className="">
                {/* hero section left */}
                <div className="">
                    <div className="">
                        <h1 className="">FIND TALENT YOU CAN TRUST WITHIN YOUR OWN NETWORK</h1>
                    </div>
                    <div className="">
                        <p className="">
                            Connect with talented students, professors, and alumni from your university for freelance projects and
                            internships.
                        </p>
                    </div>
                    <div className="">
                        <div className="">
                            <CiSearch fontSize={10} />
                            <input placeholder="Search for jobs, skills or categories..." className="" />
                        </div>
                        <div className="">
                            <CiSearch fontSize={10} />
                            <p className="">Search</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <FiBriefcase fontSize={10} />
                            <p>Post a job</p>
                        </div>
                        <p className="">Looking for hire? Post your project...</p>
                    </div>
                </div>

                {/* hero section right */}
                <div className="">
                    <div className="">
                        <div className="">
                            <FiBriefcase fontSize={10} />
                        </div>
                        <h3 className="">Connect. Collaborate. Create</h3>
                        <p className="">Your University Network is your greatest asset</p>
                        <div className="">
                            <div className="">
                                <p className="">500+</p>
                                <p className="">Active jobs</p>
                            </div>
                            <div className="">
                                <p className="">1000+</p>
                                <p className="">Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
