import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllJobs } from "../services/operations/jobAPI";
import ApplicationModal from "../components/common/ApplicationModal";
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaBuilding, FaSearch, FaFilter } from "react-icons/fa";

const AllJobs = () => {
    const dispatch = useDispatch();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCity, setSelectedCity] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            const result = await dispatch(getAllJobs());

            console.log("result from dispatch getAllJobs is ", result);
            setJobs(result);

            setLoading(false);
        };
        fetchJobs();
    }, [dispatch]);

    console.log("jobs is ", jobs);

    // Get unique categories and cities
    const categories = ["All", ...new Set(jobs.map((job) => job.category))];
    const cities = ["All", ...new Set(jobs.map((job) => job.city))];

    // Filter jobs based on search and filters
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
        const matchesCity = selectedCity === "All" || job.city === selectedCity;
        return matchesSearch && matchesCategory && matchesCity;
    });

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    // Format salary
    const formatSalary = (job) => {
        if (job.fixedSalary && job.fixedSalary > 0) {
            return `₹${job.fixedSalary.toLocaleString()}/month`;
        } else if (job.salaryFrom && job.salaryTo) {
            return `₹${job.salaryFrom.toLocaleString()} - ₹${job.salaryTo.toLocaleString()}/month`;
        }
        return "Not specified";
    };

    // Handle Apply Now
    const handleApplyNow = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-lg">Loading jobs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mt-14 w-[90%]">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Explore <span className="text-blue-600">Job Opportunities</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover your next career move from {jobs.length} available positions
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search Bar */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none cursor-pointer"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* City Filter */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <select
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none cursor-pointer"
                                >
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-blue-600">{filteredJobs.length}</span> of{" "}
                            <span className="font-semibold">{jobs.length}</span> jobs
                        </p>
                    </div>
                </div>

                {/* Jobs Grid */}
                {filteredJobs.length === 0 ? (
                    <div className="text-center py-16">
                        <FaBriefcase className="text-6xl text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">No jobs found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map((job) => (
                            <div
                                key={job._id}
                                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                            >
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-[#2D68C4] to-[#87CEEB] p-6 text-white">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                                            <FaBriefcase className="text-2xl" />
                                        </div>
                                        <span className="bg-white/90 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                                            {job.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{job.title}</h3>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{job.description}</p>

                                    <div className="space-y-3">
                                        {/* Location */}
                                        <div className="flex items-start gap-3">
                                            <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                                            <div className="text-sm">
                                                <p className="font-semibold text-gray-700">
                                                    {job.city}, {job.country}
                                                </p>
                                                <p className="text-gray-500 text-xs">{job.location}</p>
                                            </div>
                                        </div>

                                        {/* Salary */}
                                        <div className="flex items-center gap-3">
                                            <FaMoneyBillWave className="text-green-600 flex-shrink-0" />
                                            <div className="text-sm">
                                                <p className="font-semibold text-gray-700">{formatSalary(job)}</p>
                                            </div>
                                        </div>
                                        {/* /// job document */}
                                        <div className="flex items-center gap-3">
                                            <FaMoneyBillWave className="text-pink-600 flex-shrink-0" />
                                            <div className="text-sm">
                                                <p className="font-semibold text-gray-700">
                                                    <a
                                                        href={job.jobDocument?.url ?? undefined}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-pink-600 hover:underline"
                                                    >
                                                        View Job Description
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Posted Date */}
                                        <div className="flex items-center gap-3">
                                            <FaCalendarAlt className="text-purple-600 flex-shrink-0" />
                                            <div className="text-sm">
                                                <p className="text-gray-600">Posted on {formatDate(job.jobPostedOn)}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                                    job.expired ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                                                }`}
                                            >
                                                {job.expired ? "Closed" : "Active"}
                                            </span>
                                            <button
                                                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-2 ${
                                                    job.expired
                                                        ? "bg-gray-400 cursor-not-allowed"
                                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                                }`}
                                                onClick={() => handleApplyNow(job)}
                                                disabled={job.expired}
                                            >
                                                {job.expired ? "Job Closed" : "Apply Now"}
                                                {!job.expired && (
                                                    <svg
                                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Application Modal */}
            {selectedJob && <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} job={selectedJob} />}
        </div>
    );
};

export default AllJobs;
