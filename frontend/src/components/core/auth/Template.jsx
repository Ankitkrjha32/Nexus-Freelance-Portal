// import React from "react";
// import frame from "../../../assets/frame.png";
// import SignUpForm from "./SignupForm";
// import LoginForm from "./LoginForm";
// const Template = (props) => {
//     const desc1 = "Build skills for today, tomorrows, and beyond.";
//     const desc2 = "Turn your college skills into real-world experience.";
//     return (
//         <div className="text-black flex flex-row justify-between items-center mt-12 mb-5 w-fit bg-white/30 rounded-4xl p-5 backdrop-blur-md shadow-lg">
//             <div className=" w-full flex flex-col justify-center items-center">
//                 <h1 className="text-2xl font-bold text-black">{props.title}</h1>
//                 <p className="text-lg text-black mt-3">{desc1}</p>
//                 <p className="font-edu-sa text-lg text-white mb-7">{desc2}</p>
//                 {props.type === "SignUp" ? <SignUpForm /> : <LoginForm />}
//             </div>
//         </div>
//     );
// };

// export default Template;

import React from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, type }) => {
    const desc1 = "Build skills for today, tomorrow, and beyond.";
    const desc2 = "Turn your college skills into real-world experience.";

    return (
        <div
            className="
        flex flex-col md:flex-row items-center justify-center
        bg-white/30 backdrop-blur-md shadow-lg
        rounded-3xl p-8 md:p-12 mx-auto mt-12 mb-8
        w-full max-w-3xl
      "
        >
            <div className="flex flex-col items-center text-center w-full">
                <h1 className="text-3xl md:text-4xl font-extrabold text-black">{title}</h1>

                <p className="text-lg text-black mt-3 max-w-md">{desc1}</p>

                <p className="font-edu-sa text-lg text-gray-700 mb-7 max-w-md">{desc2}</p>

                {type === "SignUp" ? <SignUpForm /> : <LoginForm />}
            </div>
        </div>
    );
};

export default Template;
