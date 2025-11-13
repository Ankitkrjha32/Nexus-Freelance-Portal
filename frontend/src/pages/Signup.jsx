import React from "react";
import Template from "../components/core/Auth/Template";
import image from "../assets/signup.webp";

const Signup = () => {
    const title = "Start your freelance journey with your campus community.";
    return (
        <div className="w-full  flex justify-between items-center">
            <Template title={title} type={"SignUp"} image={image} />
        </div>
    );
};

export default Signup;
