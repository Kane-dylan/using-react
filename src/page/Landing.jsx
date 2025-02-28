import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a16] px-6">
      <div className="flex flex-col-reverse md:flex-row bg-[#1c1938] rounded-lg overflow-hidden w-full max-w-4xl md:max-w-6xl">
        {/* Left Side */}
        <div className="p-16 flex flex-col justify-center text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-semibold">
            Get <span className="text-[#9b63c5]">insights</span> that help{" "}
            <br className="hidden md:block" />
            your business grow.
          </h1>
          <p className="opacity-70 mt-10 md:text-sm text-lg leading-relaxed">
            Discover the benefits of data analytics and make{" "}
            <br className="hidden md:block" />
            better decisions regarding revenue, customer{" "}
            <br className="hidden md:block" />
            experience, and overall efficiency.
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-16 space-y-5 md:space-y-0">
            <div className="text-center md:text-left">
              <span className="md:text-2xl text-3xl font-bold">10k+</span>
              <p className="opacity-70 text-xs">COMPANIES</p>
            </div>
            <div className="text-center md:text-left">
              <span className="md:text-2xl text-3xl font-bold">314</span>
              <p className="opacity-70 text-xs">TEMPLATES</p>
            </div>
            <div className="text-center md:text-left">
              <span className="md:text-2xl text-3xl font-bold">12M+</span>
              <p className="opacity-70 text-xs">QUERIES</p>
            </div>
          </div>
        </div>
        {/* Right Side - Image with Overlay */}ī{" "}
        <div className="flex flex-col md:w-1/2 relative">
          <div className="w-full h-64 md:h-full object-cover team-banner bg-cover flex-1 min-h-64"></div>
          <div className="absolute inset-0 bg-purple-600 mix-blend-multiply opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
