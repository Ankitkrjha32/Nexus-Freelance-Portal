// import React from "react";
// import { categoriesData } from "../../../data/home/categoriesData";
// import { Link } from "react-router-dom";

// const Categories = () => {
//     return (
//         <div className="flex flex-col w-full items-center mt-16">
//             <h1 className="font-bold text-3xl font-sans text-indigo-800">Browse By Category</h1>
//             <p className="text-gray-700 mt-5">Explore opportunities across various fields and find projects that match your skills.</p>
//             <div className="grid grid-cols-3 gap-3 w-[90%] mt-10">
//                 {categoriesData.map((category, index) => (
//                     <Link
//                         className="rounded-lg flex flex-row items-center gap-5 p-4 transition-all duration-300 group hover:scale-103 hover:shadow-xl hover:shadow-blue-400"
//                         style={{ backgroundColor: category.color }}
//                         key={index}
//                         to={`/category/${encodeURIComponent(category.name)}`}
//                     >
//                         <div className="rounded-lg p-4 bg-cyan-600 w-fit">
//                             <img src={category.icon} className="w-8 invert" />
//                         </div>
//                         <div className="">
//                             <h2 className="text-xl text-white group-hover:text-cyan-200">{category.name}</h2>
//                             <p className="text-sm text-white">Explore Opportunities</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Categories;

import React from "react";
import { categoriesData } from "../../../data/home/categoriesData";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="flex flex-col w-full items-center mt-16 px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold text-3xl md:text-4xl font-sans text-indigo-800 text-center">Browse By Category</h1>
            <p className="text-gray-700 mt-5 text-center max-w-2xl">
                Explore opportunities across various fields and find projects that match your skills.
            </p>
            {/* The main responsiveness is in this grid definition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mt-10">
                {categoriesData.map((category, index) => (
                    <Link
                        className="rounded-lg flex flex-row items-center gap-5 p-4 transition-all duration-300 group hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-400"
                        style={{ backgroundColor: category.color }}
                        key={index}
                        to={`/category/${encodeURIComponent(category.name)}`}
                    >
                        <div className="rounded-lg p-3 sm:p-4 bg-cyan-600 w-fit shrink-0">
                            {/* Assuming category.icon is a valid path or component */}
                            <img src={category.icon} className="w-6 sm:w-8 invert" alt={`${category.name} icon`} />
                        </div>
                        <div className="">
                            <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-200">{category.name}</h2>
                            <p className="text-xs sm:text-sm text-white">Explore Opportunities</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
