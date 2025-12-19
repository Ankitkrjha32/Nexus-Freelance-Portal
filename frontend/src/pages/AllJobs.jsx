import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllJobs } from "../services/operations/jobAPI";
import ApplicationModal from "../components/common/ApplicationModal";
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaBuilding, FaSearch, FaFilter, FaInfoCircle } from "react-icons/fa";
import "../App.css";

const AllJobs = () => {
    const dispatch = useDispatch();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCity, setSelectedCity] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                setShowSkeleton(false);
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            setShowSkeleton(true);
        }
    }, [loading]);
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

    // if (loading) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center mt-14 w-full">
    //             <div className="text-center">
    //                 <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
    //                 <p className="mt-4 text-gray-600 text-lg">Loading jobs...</p>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mt-14 w-[90%]">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Explore <span className="text-blue-600">Freelancing Oppurtunities</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover your next freelancing oppurtinity from {jobs.length} available positions
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
                {showSkeleton ? (
                    <div className="grid grid-cols-3 grid-rows-2 gap-6">
                        <div className="skeleton-box  h-[450px] rounded-xl"></div>
                        <div className="skeleton-box  h-[450px] rounded-xl"></div>
                        <div className="skeleton-box  h-[450px] rounded-xl"></div>
                        <div className="skeleton-box  h-[450px] rounded-xl"></div>
                        <div className="skeleton-box  h-[450px] rounded-xl"></div>
                        <div className="skeleton-box  h-[450px] rounded-xl"></div>
                    </div>
                ) : filteredJobs.length === 0 ? (
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
                                className="bg-white rounded-xl flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group gap-3  items-center justify-between"
                            >
                                <div className="flex flex-col p-3 gap-5 items-center w-full">
                                    {/* Status and price */}
                                    <div className="flex justify-between w-full">
                                        <div
                                            className={`rounded-full text-white font-semi text-sm px-2 py-1 ${
                                                !job.expired ? "bg-[#0fff50]" : "bg-[#f01b0f]"
                                            }`}
                                        >
                                            {job.expired ? "Closed" : "Active"}
                                        </div>
                                        <p className="font-bold text-xl text-black">{formatSalary(job)}</p>
                                    </div>
                                    {/* title */}
                                    <h1 className="text-blue-900 text-2xl font-bold text-center mt-3">{job.title}</h1>
                                    {/* category */}
                                    <p className="bg-cyan-600 text-white font-medium text-sm py-2 px-4 w-fit rounded-full">
                                        {job.category}
                                    </p>
                                    {/* location  and posted on*/}
                                    <div className="w-full flex gap-2 items-start">
                                        <div className="flex flex-col w-[50%]">
                                            <div className="flex items-center gap-3">
                                                <FaMapMarkerAlt />
                                                <p>{job.city}</p>
                                            </div>
                                            <p className="break-words">{job.location}</p>
                                        </div>
                                        <div className="flex flex-col w-[50%] items-center">
                                            <div className="flex items-center gap-3">
                                                <FaCalendarAlt />
                                                <p className="font-semibold">Posted On</p>
                                            </div>
                                            <p>{formatDate(job.jobPostedOn)}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* view description adn apply now button */}
                                <div className="w-full flex flex-col gap-10 p-3">
                                    {/* Description */}
                                    <p className="max-w-full break-words">{job.description}</p>
                                    <div className="flex w-full gap-2">
                                        <button className="w-[50%] rounded-md text-black bg-white hover:bg-gray-300 shadow-md">
                                            <a
                                                href={job.jobDocument?.url ?? undefined}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full h-full"
                                            >
                                                View Description
                                            </a>
                                        </button>
                                        <button
                                            className={`text-white p-3 w-[50%] rounded-md ${
                                                job.expired ? "bg-red-500 cursor-not-allowed" : "bg-[#4169e1] hover:bg-[#3660e0] "
                                            }`}
                                            onClick={() => handleApplyNow(job)}
                                            disabled={job.expired}
                                        >
                                            {job.expired ? "Job Closed" : "Apply Now"}
                                        </button>
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
