// import React, { useEffect, useState } from "react";
// import { testimonials } from "../../../data/home/testimonials";
// import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../../App.css";
// import { Autoplay, Pagination } from "swiper/modules";

// const Testimonials = () => {
//     const nextSlide = () => {
//         setIndex((prev) => (prev + 1) % testimonials.length);
//     };
//     const prevSlide = () => {
//         setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//     };
//     return (
//         <div className="relative w-full flex flex-col mt-16 items-center bg-blue-5">
//             <h1 className="font-bold text-3xl font-sans text-indigo-800 mt-16">What Our Users Say</h1>
//             <p className="text-gray-700 mt-5">Hear from students, professors, and alumni who've found success on NexWork</p>
//             <Swiper
//                 slidesPerView={3}
//                 spaceBetween={25}
//                 loop={true}
//                 autoHeight={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[Pagination, Autoplay]}
//                 pagination={{ clickable: true }}
//                 className="w-[90%] gap-10 mt-10 mb-10"
//             >
//                 {testimonials.map((testimony, index) => (
//                     <SwiperSlide
//                         className="rounded-lg p-4 flex flex-col bg-white ring-1 ring-gray-300 gap-y-6 transition-all duration-500 ease-out hover:scale-106 hover:shadow-lg"
//                         key={index}
//                     >
//                         <div className="flex flex-row gap-4">
//                             <div className="rounded-full overflow-hidden w-16">
//                                 <img src={testimony.pfp} className="w-fit" />
//                             </div>
//                             <div className="flex flex-col justify-center">
//                                 <h3 className="font-bold text-black">{testimony.name}</h3>
//                                 <p className="">{testimony.job}</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-row">
//                             {[...Array(5)].map((_, key) => (
//                                 <FaStar key={key} className={key < testimony.rating ? "text-blue-400" : "text-gray-300"} />
//                             ))}
//                         </div>
//                         <p className="w-[90%] font-inter text-gray-700">{testimony.testimonial}</p>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//         </div>
//     );
// };

// export default Testimonials;
import React from "react";
import { testimonials } from "../../../data/home/testimonials";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../App.css";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
    return (
        <div className="relative w-full flex flex-col mt-20 items-center px-4">
            <h1 className="font-bold text-2xl sm:text-3xl font-sans text-indigo-800">What Our Users Say</h1>

            <p className="text-gray-700 mt-4 text-center max-w-[600px]">
                Hear from students, professors, and alumni who've found success on NexWork
            </p>

            {/* Fixed-height wrapper to keep cards stable */}
            <div className="w-[90%] mt-10 mb-20">
                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 25 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="pb-32"
                    // this pushes pagination DOWN, outside the cards
                >
                    {testimonials.map((testimony, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div
                                className="rounded-lg p-6 flex flex-col bg-white ring-1 ring-gray-300 gap-y-6 
                                transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg 
                                h-full"
                            >
                                {/* Profile */}
                                <div className="flex flex-row items-center gap-4">
                                    <div className="rounded-full overflow-hidden w-16 h-16 flex-shrink-0">
                                        <img src={testimony.pfp} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-bold text-black">{testimony.name}</h3>
                                        <p className="text-gray-600">{testimony.job}</p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex flex-row">
                                    {[...Array(5)].map((_, key) => (
                                        <FaStar key={key} className={key < testimony.rating ? "text-blue-400" : "text-gray-300"} />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="font-inter text-gray-700 leading-relaxed">{testimony.testimonial}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
