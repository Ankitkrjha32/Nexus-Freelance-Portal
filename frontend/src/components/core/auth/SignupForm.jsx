import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { signUp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("Student");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        branch: "cse",
        year: "",
        createPassword: "",
        confirmPassword: "",
    });
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log("formdata is ",formData);
        console.log(accountType);
        if (formData.createPassword !== formData.confirmPassword) {
            toast.error("Passwords Do Not Match");
            return;
        }
        const signupData = {
            ...formData,
            accountType,
        };

        console.log("signupData",signupData)

        // Setting signup data to state
        dispatch(setSignupData(signupData));
        
        // Call signup API
        dispatch(signUp(signupData, navigate));

        //reset
        // setFormData({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     phone: "",
        //     branch: "cse",
        //     year: "",
        //     createPassword: "",
        //     confirmPassword: "",
        // });
        // setAccountType("Student");
    }
    return (
        // <div></div>
        <form onSubmit={submitHandler} className=" w-full mb-7">
            <div className="bg-amber-300 rounded-2xl w-fit flex flex-row justify-between p-1 mb-7">
                <button
                    className={`py-2 px-6  rounded-2xl ${accountType === "Student" ? "bg-amber-400" : "bg-amber-300"}`}
                    onClick={() => setAccountType("Student")}
                    type="button"
                >
                    Student
                </button>
                <button
                    className={`py-2 px-6  rounded-2xl ${accountType === "Professor" ? "bg-amber-400" : "bg-amber-300"}`}
                    onClick={() => setAccountType("Professor")}
                    type="button"
                >
                    Professor
                </button>
                <button
                    className={`py-2 px-6  rounded-2xl ${accountType === "Admin" ? "bg-amber-400" : "bg-amber-300"}`}
                    onClick={() => setAccountType("Admin")}
                    type="button"
                >
                    Admin
                </button>
            </div>
            <div className="flex flex-row gap-3">
                <label className="flex flex-col gap-3 mb-3 w-[50%]">
                    <div className="flex flex-row gap-1">
                        <p>First Name</p>
                        <div className="text-red-500">*</div>
                    </div>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        id="firstName"
                        placeholder="Enter First Name"
                        onChange={changeHandler}
                        className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff]"
                    />
                </label>

                <label className="flex flex-col gap-3 mb-3 w-[50%]">
                    <div className="flex flex-row gap-1">
                        <p>Last Name</p>
                        <div className="text-red-500">*</div>
                    </div>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        id="lastName"
                        placeholder="Enter Last Name"
                        onChange={changeHandler}
                        className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff]"
                    />
                </label>
            </div>
            <label className="flex flex-col gap-3 mb-3">
                <div className="flex flex-row gap-1">
                    <p>Email Address</p>
                    <div className="text-red-500">*</div>
                </div>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    id="email"
                    placeholder="Enter Email ID"
                    onChange={changeHandler}
                    className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff]"
                />
            </label>

            <div className="flex flex-row gap-3">
                <label className="flex flex-col gap-3 mb-3 w-[50%]">
                    <div className="flex flex-row gap-1">
                        <p>Phone Number</p>
                        <div className="text-red-500">*</div>
                    </div>
                    <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        id="phone"
                        placeholder="Enter Phone Number"
                        onChange={changeHandler}
                        className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff]"
                    />
                </label>

                <label className="flex flex-col gap-3 mb-3 w-[50%]">
                    <div className="flex flex-row gap-1">
                        <p> Passout Year</p>
                        <div className="text-red-500">*</div>
                    </div>
                    <input
                        required
                        type="number"
                        name="year"
                        value={formData.year}
                        id="year"
                        placeholder="Enter Year (e.g., 2023)"
                        onChange={changeHandler}
                        className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff]"
                    />
                </label>
            </div>

            <label className="flex flex-col gap-3 mb-3">
                <div className="flex flex-row gap-1">
                    <p>Branch</p>
                    <div className="text-red-500">*</div>
                </div>
                <select
                    required
                    name="branch"
                    value={formData.branch}
                    id="branch"
                    onChange={changeHandler}
                    className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff]"
                >
                    <option value="cse">Computer Science Engineering (CSE)</option>
                    <option value="me">Mechanical Engineering (ME)</option>
                    <option value="ece">Electronics & Communication Engineering (ECE)</option>
                </select>
            </label>

            <div className="flex flex-row gap-3">
                <label className="flex flex-col gap-3 mb-3 w-[50%]">
                    <div className="flex flex-row gap-1">
                        <p>Create Password</p>
                        <div className="text-red-500">*</div>
                    </div>
                    <div className="relative flex flex-row items-center">
                        <input
                            required
                            type={showCreatePassword ? "text" : "password"}
                            name="createPassword"
                            value={formData.createPassword}
                            id="createPassword"
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff] w-full"
                        />
                        <span
                            onClick={() => setShowCreatePassword(!showCreatePassword)}
                            className="absolute transform translate-y-1/2 top-[10px] left-[220px]"
                        >
                            {showCreatePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </div>
                </label>

                <label className="flex flex-col gap-3 mb-3 w-[50%]">
                    <div className="flex flex-row gap-1">
                        <p>Confirm Password</p>
                        <div className="text-red-500">*</div>
                    </div>
                    <div className="relative flex flex-row items-center">
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            className="border-2 border-richblack-900 p-3 rounded-[7px] shadow-[0_1px_0_0_#ffffff] w-full"
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute transform translate-y-1/2 top-[10px] left-[220px]"
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </div>
                </label>
            </div>
            <button type="submit" className="w-full bg-green-500 rounded-[7px] p-3 text-black mt-5">
                Create Account
            </button>
        </form>
    );
};

export default SignUpForm;
