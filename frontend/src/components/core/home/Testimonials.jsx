import React, { useEffect, useState } from "react";
import { testimonials } from "../../../data/home/testimonials";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, []);
    const visibleTestimonials = [
        testimonials[index],
        testimonials[(index + 1) % testimonials.length],
        testimonials[(index + 2) % testimonials.length],
    ];
    return (
        <div className="relative w-full flex flex-col mt-16 items-center bg-blue-5">
            <h1 className="font-bold text-3xl font-sans text-indigo-800 mt-16">What Our Users Say</h1>
            <p className="text-gray-700 mt-5">Hear from students, professors, and alumni who've found success on NexWork</p>
            <div className="w-[90%] grid grid-cols-3 gap-10 mt-10 mb-10">
                {visibleTestimonials.map((testimony, index) => (
                    <div
                        className="rounded-lg p-4 flex flex-col bg-white ring-1 ring-gray-300 gap-y-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        key={index}
                    >
                        <div className="flex flex-row gap-4">
                            <div className="rounded-full overflow-hidden w-16">
                                <img src={testimony.pfp} className="w-fit" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-bold text-black">{testimony.name}</h3>
                                <p className="">{testimony.job}</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            {[...Array(5)].map((_, key) => (
                                <FaStar key={key} className={key < testimony.rating ? "text-blue-400" : "text-gray-300"} />
                            ))}
                        </div>
                        <p className="w-[90%] font-inter text-gray-700">{testimony.testimonial}</p>
                    </div>
                ))}
            </div>
            <div className=" flex gap-5 mb-20">
                <div className="rounded-full bg-blue-100 p-3 text-white hover:bg-blue-50" onClick={prevSlide}>
                    <FaArrowLeft fontSize={20} />
                </div>
                <div className="rounded-full bg-blue-100 p-3 text-white hover:bg-blue-50" onClick={nextSlide}>
                    <FaArrowRight fontSize={20} />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
