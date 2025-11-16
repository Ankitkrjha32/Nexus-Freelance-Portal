import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyForJob } from "../../services/operations/jobAPI";
import { FaTimes, FaFileUpload, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { use } from "react";

const ApplicationModal = ({ isOpen, onClose, job }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);
    const [formData, setFormData] = useState({
        name: user.firstName + " " + user.lastName,
        email: user.email,
        phone: user.phone,
        address: "",
        coverLetter: "",
        resume: null,
    });
    const [resumePreview, setResumePreview] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                resume: file,
            }));
            setResumePreview(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData for file upload
        const applicationData = new FormData();
        applicationData.append("name", formData.name);
        applicationData.append("email", formData.email);
        applicationData.append("phone", formData.phone);
        applicationData.append("address", formData.address);
        applicationData.append("coverLetter", formData.coverLetter);
        applicationData.append("jobId", job._id);
        applicationData.append("resume", formData.resume);

        const result = await dispatch(applyForJob(applicationData));

        if (result) {
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                coverLetter: "",
                resume: null,
            });
            setResumePreview("");
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-200 bg-opacity-10 flex items-center justify-center  p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-[#2D68C4] to-[#87CEEB] text-white p-6 rounded-t-2xl">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Apply for Position</h2>
                            <p className="text-blue-100">{job.title}</p>
                        </div>
                        <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-2 transition">
                            <FaTimes className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <FaUser className="inline mr-2 text-blue-600" />
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <FaEnvelope className="inline mr-2 text-blue-600" />
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <FaPhone className="inline mr-2 text-blue-600" />
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="1234567890"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
                            Address *
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Enter your address"
                        />
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Cover Letter *</label>
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                            placeholder="Tell us why you're a great fit for this position..."
                        />
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <FaFileUpload className="inline mr-2 text-blue-600" />
                            Upload Resume (PDF) *
                        </label>
                        <div className="relative">
                            <input type="file" accept=".pdf" onChange={handleFileChange} required className="hidden" id="resume-upload" />
                            <label
                                htmlFor="resume-upload"
                                className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                            >
                                <div className="text-center">
                                    <FaFileUpload className="text-3xl text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600">{resumePreview || "Click to upload PDF resume"}</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2D68C4] to-[#87CEEB] text-white font-semibold rounded-lg hover:from-[#2a52be] hover:to-[#4B9CD3] transition shadow-lg"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationModal;
