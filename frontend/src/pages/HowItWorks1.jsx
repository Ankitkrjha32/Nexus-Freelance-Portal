import React, { useState } from "react";
import CTAButton from "../components/common/Button";
import { FaArrowRight } from "react-icons/fa";
import { postJobSteps, applyJobSteps } from "../data/HowItWorks";
import StepCards from "../components/core/HowItWorks/StepCards";

const HowItWorks1 = () => {
    const [state, setState] = useState("Posting");

    return (
        <div className="flex flex-col w-full items-center">
            {/* <--------------------Hero Section-----------------------> */}
            <div className="flex w-full flex-col md:flex-row justify-evenly gap-7">
                <div className="flex w-full h-[400px] md:h-[500px] bg-cover bg-center bg-[url('/assets/hero-bg2.jpg')] flex-col justify-center items-start px-5 md:px-10 gap-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">How Nexwork Works?</h1>

                    <h2 className="text-lg md:text-2xl text-white max-w-[600px]">
                        Whether you're here to post or apply, NexWork connects talent within your university community.
                    </h2>

                    <CTAButton active={true} linkto="/signup">
                        <div className="flex flex-row items-center gap-3 w-[150px] justify-center">
                            <span>Join Now</span>
                            <FaArrowRight />
                        </div>
                    </CTAButton>
                </div>
            </div>

            {/* <--------------------Toggle Button----------------------> */}
            <div className="bg-blue-300 rounded-2xl flex flex-wrap items-center p-1 mt-10 text-white w-fit">
                {[
                    { label: "Posting a Job", value: "Posting" },
                    { label: "Applying for a Job", value: "Applying" },
                ].map((tab) => (
                    <button
                        key={tab.value}
                        type="button"
                        onClick={() => setState(tab.value)}
                        className={`py-2 px-6 rounded-2xl transition ${state === tab.value ? "bg-blue-400" : "bg-blue-300"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* <--------------------Steps for posting and applying to a job------------> */}
            {state === "Posting" && <StepCards steps={postJobSteps} bgColor="bg-blue-200" borderColor="border-gray-500" />}

            {state === "Applying" && <StepCards steps={applyJobSteps} bgColor="bg-blue-400" borderColor="border-pure-greys-600" />}

            {/* <--------------------CTA Buttons------------------------> */}
            <div className="flex flex-row gap-4 text-white mt-14 mb-10">
                <CTAButton active={true} linkto={"/"}>
                    Post a Job
                </CTAButton>
                <CTAButton active={false} linkto={"/"}>
                    Browse Jobs
                </CTAButton>
            </div>
        </div>
    );
};

export default HowItWorks1;
