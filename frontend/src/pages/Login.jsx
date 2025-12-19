import React from "react";
import Template from "../components/core/Auth/Template";
import image from "../assets/login.webp";

const Login = () => {
    const title = "Welcome Back";
    return (
        <div className="w-full flex justify-center items-center bg-[url('/assets/login-bg.jpg')] bg-no-repeat bg-cover bg-center min-h-screen">
            <Template title={title} type={"login"} image={image} />
        </div>
    );
};

export default Login;
