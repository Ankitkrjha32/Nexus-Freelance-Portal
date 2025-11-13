import React from "react";
import { works } from "../../../data/home/madeOnNexwork";

const MadeOnNexwork = () => {
    return (
        <div className="relative w-full flex flex-col  items-center ">
            <h1 className="font-bold text-3xl font-sans text-indigo-800 mt-16">Made On Nexwork</h1>
            <p className="text-gray-700 mt-5">Discover amazing projects created by talented students from our community</p>
            <div className="w-[90%] columns-3 gap-10 mt-10 mb-10">
                {works.map((item, index) => (
                    <div className="relative overflow-hidden rounded-xl group mt-7" key={index}>
                        <img
                            src={item.image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/80 via-cyan-600/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                            <p className="text-blue-100 text-lg">{item.creator}</p>
                            <p className="text-blue-100 text-lg">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MadeOnNexwork;
