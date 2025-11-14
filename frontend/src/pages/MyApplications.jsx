import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStudentApplications, deleteApplication } from "../services/operations/jobAPI";
import { IoSearch } from "react-icons/io5";
import { FaEye, FaTrash, FaFileDownload } from "react-icons/fa";
import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";
import { IoIosArrowUp, IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

const MyApplications = () => {
    const dispatch = useDispatch();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, () => setIsOpen(false));

    useEffect(() => {
        const fetchApplications = async () => {
            setLoading(true);
            const result = await dispatch(getStudentApplications());
            setApplications(result);
            setLoading(false);
        };
        fetchApplications();
    }, [dispatch]);

    const handleSelect = (option) => {
        setStatusFilter(option);
        setIsOpen(false);
    };

    const handleDelete = async (applicationId) => {
        if (window.confirm("Are you sure you want to delete this application?")) {
            const result = await dispatch(deleteApplication(applicationId));
            if (result) {
                setApplications(applications.filter(app => app._id !== applicationId));
            }
        }
    };

    const options = ["All Status", "Pending", "Accepted", "Rejected"];

    // Filter applications based on search and status
    const filteredApplications = applications.filter((app) => {
        const matchesStatus = statusFilter === "All Status" || app.status === statusFilter;
        const matchesSearch = app.jobId?.title?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 mt-14">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-lg">Loading applications...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f9fafc] flex flex-col items-center py-10 px-6 mt-14 w-full">
            {/* Header */}
            <div className="w-full max-w-6xl mb-8">
                <h1 className="text-4xl font-bold text-[#0b1957] mb-2">My Applications</h1>
                <p className="text-gray-600">Track and manage your job applications</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Total Applications</p>
                    <p className="text-2xl font-bold text-blue-600">{applications.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">
                        {applications.filter(app => app.status === "Pending").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Accepted</p>
                    <p className="text-2xl font-bold text-green-600">
                        {applications.filter(app => app.status === "Accepted").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Rejected</p>
                    <p className="text-2xl font-bold text-red-600">
                        {applications.filter(app => app.status === "Rejected").length}
                    </p>
                </div>
            </div>

            {/* Search + Filter */}
            <div className="flex w-full max-w-6xl items-center gap-4 mb-6 relative">
                <div className="relative w-full">
                    <IoSearch className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by job title..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="w-[40%] relative" ref={dropdownRef}>
                    <div 
                        className="w-full border border-gray-200 p-2 relative text-center rounded-lg cursor-pointer hover:bg-gray-50 transition" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {statusFilter}
                        {isOpen ? (
                            <IoIosArrowUp className="absolute top-4 right-7" />
                        ) : (
                            <IoIosArrowDown className="absolute top-4 right-7" />
                        )}
                    </div>
                    {isOpen && (
                        <div className="flex flex-col items-center w-full absolute top-14 rounded-lg p-2 border border-gray-400 z-10 bg-white shadow-lg">
                            {options.map((option) => (
                                <div
                                    key={option}
                                    className={`p-2 w-full rounded-lg flex items-center justify-center relative cursor-pointer hover:bg-gray-100 transition ${
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

            {/* Application Cards */}
            <div className="flex flex-col w-full max-w-6xl gap-5">
                {filteredApplications.map((application) => (
                    <div
                        key={application._id}
                        className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-[#0b1957] mb-3">
                                    {application.jobId?.title || "Job Title Not Available"}
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                    <div className="flex gap-3 items-center text-gray-600">
                                        <FaUser className="text-blue-600" />
                                        <span className="font-medium">Professor:</span>
                                        <span>{application.employerID?.user?.firstName} {application.employerID?.user?.lastName}</span>
                                    </div>
                                    
                                    <div className="flex gap-3 items-center text-gray-600">
                                        <FaBuilding className="text-blue-600" />
                                        <span className="font-medium">Category:</span>
                                        <span>{application.jobId?.category || "N/A"}</span>
                                    </div>
                                    
                                    <div className="flex gap-3 items-center text-gray-600">
                                        <FaMapMarkerAlt className="text-blue-600" />
                                        <span className="font-medium">Location:</span>
                                        <span>{application.jobId?.location || "N/A"}</span>
                                    </div>
                                    
                                    <div className="flex gap-3 items-center text-gray-600">
                                        <FaCalendarAlt className="text-blue-600" />
                                        <span className="font-medium">Applied:</span>
                                        <span>{new Date(application.__v || Date.now()).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                {/* Cover Letter Preview */}
                                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                                    <p className="text-sm font-medium text-gray-700 mb-1">Cover Letter:</p>
                                    <p className="text-sm text-gray-600 line-clamp-2">{application.coverLetter}</p>
                                </div>

                                {/* Contact Info */}
                                <div className="flex gap-4 text-sm text-gray-600">
                                    <span>📧 {application.email}</span>
                                    <span>📱 {application.phone}</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-4 ml-4">
                                <span
                                    className={`text-sm font-semibold px-4 py-2 rounded-full ${
                                        application.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : application.status === "Accepted"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {application.status}
                                </span>
                                
                                <div className="flex flex-col gap-2">
                                    <a
                                        href={application.resume?.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-blue-500 text-blue-600 rounded-lg px-4 py-2 text-sm hover:bg-blue-50 transition"
                                    >
                                        <FaFileDownload /> View Resume
                                    </a>
                                    
                                    <button 
                                        onClick={() => handleDelete(application._id)}
                                        className="flex items-center gap-2 border border-red-500 text-red-600 rounded-lg px-4 py-2 text-sm hover:bg-red-50 transition"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredApplications.length === 0 && (
                    <div className="text-center py-16">
                        <FaBuilding className="text-6xl text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">No applications found.</p>
                        <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search term.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyApplications;
