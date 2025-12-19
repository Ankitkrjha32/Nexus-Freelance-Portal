const StepCards = ({ steps, bgColor, borderColor }) => (
    <div
        className="mt-16 grid grid-cols-1 sm:grid-cols-1 
   md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center lg:w-11/12 md:w-full"
    >
        {steps.map((step, index) => (
            <div
                key={index}
                className={`
          relative rounded-lg p-5 flex flex-col items-center justify-start
          text-black border-2 ${borderColor}
          h-[320px] w-[240px] 
          transition-all duration-300 hover:scale-105
        `}
            >
                <h3 className="font-inter font-bold text-xl text-center mt-2">{step.title}</h3>

                <p className="font-inter text-base font-medium text-center mt-3 px-2">{step.description}</p>

                <span className="absolute left-3 top-2 bg-white text-black rounded-full px-2 font-extrabold ring-2">{index + 1}</span>

                {/* Background blur effect */}
                <div className={`absolute inset-0 ${bgColor} opacity-40 blur-md rounded-lg -z-10`}></div>
            </div>
        ))}
    </div>
);

export default StepCards;
