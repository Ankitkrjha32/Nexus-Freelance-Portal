import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";

import { IoIosArrowUp, IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

const MyApplications = () => {
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, () => setIsOpen(false));
    const handleSelect = (option) => {
        setStatusFilter(option);
        setIsOpen(false);
    };

    const appliedJobs = [
        {
            title: "Full Stack Developer Needed",
            company: "TechStart Inc.",
            appliedDate: "Jan 15, 2024",
            status: "Pending",
        },
        {
            title: "UI/UX Designer for Mobile App",
            company: "Creative Studio",
            appliedDate: "Jan 12, 2024",
            status: "Selected",
        },
        {
            title: "Content Writer - Tech Blog",
            company: "Digital Media Co.",
            appliedDate: "Jan 10, 2024",
            status: "Rejected",
        },
        {
            title: "Frontend Developer - React",
            company: "Innovate Labs",
            appliedDate: "Jan 8, 2024",
            status: "Pending",
        },
        {
            title: "Backend Engineer (Node.js)",
            company: "NextGen Solutions",
            appliedDate: "Jan 5, 2024",
            status: "Selected",
        },
    ];

    const options = ["All Status", "Selected", "Pending", "Rejected"];

    // Filter jobs based on search and status
    const filteredJobs = appliedJobs.filter((job) => {
        const matchesStatus = statusFilter === "All Status" || job.status === statusFilter;
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#f9fafc] flex flex-col items-center py-10 px-6 mt-10 w-full">
            {/* Header */}
            <h1 className="text-3xl font-bold text-[#0b1957] mb-8 w-full max-w-4xl">My Applications</h1>

            {/* Search + Filter */}
            <div className="flex w-full max-w-4xl items-center gap-4 mb-6 relative">
                <div className="relative w-full">
                    <IoSearch className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search applications..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* <select
                    className="border border-gray-300 rounded-lg py-2 px-4 cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select> */}
                <div className="w-[40%] relative">
                    <div className="w-full border border-gray-200 p-2 relative text-center rounded-lg" onClick={() => setIsOpen(!isOpen)}>
                        {statusFilter}
                        {isOpen ? (
                            <IoIosArrowUp className="absolute top-4 right-7" />
                        ) : (
                            <IoIosArrowDown className="absolute top-4 right-7" />
                        )}
                    </div>
                    {isOpen && (
                        <div className="flex flex-col items-center w-full absolute top-14 rounded-lg p-2 border border-gray-400 z-10">
                            {options.map((option) => (
                                <div
                                    key={option}
                                    className={`p-1 w-full rounded-lg flex items-center justify-center relative ${
                                        statusFilter === option ? "bg-[#89cff0]" : "bg-white"
                                    }`}
                                    onClick={() => handleSelect(option)}
                                >
                                    {statusFilter === option && (
                                        <span className="absolute left-7">
                                            <IoIosCheckmark fontSize={30} />
                                        </span>
                                    )}
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Job Cards */}
            <div className="flex flex-col w-full max-w-4xl gap-5">
                {filteredJobs.map((job, index) => (
                    <div
                        key={index}
                        className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.04] transition-all duration-300"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold text-[#0b1957] mb-3">{job.title}</h2>
                                <div className="flex gap-3 items-center">
                                    <FaBuilding />
                                    <h3>{job.company}</h3>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <FaCalendarAlt />
                                    <h3>{job.appliedDate}</h3>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-7">
                                <span
                                    className={`text-sm px-3 py-1 rounded-full ${
                                        job.status === "Pending"
                                            ? "bg-[#5c5cff] text-white"
                                            : job.status === "Selected"
                                            ? "bg-green-100 text-green-500"
                                            : "bg-red-300 text-red-500"
                                    }`}
                                >
                                    {job.status}
                                </span>
                                <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#0b1957] hover:bg-gray-100 transition">
                                    <FaEye /> View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredJobs.length === 0 && <p className="text-gray-500 text-center mt-10">No jobs found.</p>}
            </div>
        </div>
    );
};

export default MyApplications;
