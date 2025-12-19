import React from "react";
import Template from "../components/core/Auth/Template";
import image from "../assets/signup.webp";

const Signup = () => {
    const title = "Start your freelance journey with your campus community.";
    return (
        <div className="w-full  flex justify-center items-center mt-16 bg-[url('/assets/signup-bg.jpg')] bg-no-repeat bg-cover bg-center">
            <Template title={title} type={"SignUp"} image={image} />
        </div>
        // <div className="">

        // </div>
    );
};

export default Signup;
