import React from "react";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-screen-xl px-24 py-36">
        <div className="flex flex-col justify-between">
          <h1 className="text-6xl font-bold	leading-none text-white">
            <span className="block">UC Berkeley</span>
            <span className="block">AI Hackathon</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-electric-blue">
            June 22-23, 2024
          </p>
        </div>
        <div></div>
      </div>
      <div className="margin-auto fixed bottom-[-30vh] left-1/2 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
    </div>
  );
};

export default Hero;
