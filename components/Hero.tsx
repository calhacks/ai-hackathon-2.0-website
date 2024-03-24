"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logos from "./Logos";
import SlidingText from "./SlidingText";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute right-[120px] top-[80px] hidden text-6xl text-white md:block">
        <Logos />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-screen-xl flex-col px-24 pb-12 pt-36 md:place-content-between md:justify-between md:py-36">
        <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
          <div className="max-w-md">
            <h1 className="font-pp-neue-bit inline-flex flex-col text-8xl font-bold leading-[3.5rem] text-white">
              <span>UC Berkeley</span>
              <span>AI Hackathon</span>
              <motion.span
                className="absolute -top-12 left-0 md:-left-8"
                initial={{ opacity: 0, scale: 0.3, transform: "rotate(45deg)" }}
                animate={{ opacity: 1, scale: 1, transform: "rotate(0deg)" }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="animate-wiggle pointer-events-none"
                  src="/images/star.svg"
                  alt="Star"
                  width={50}
                  height={50}
                />
              </motion.span>
            </h1>
          </div>
          <p className="font-whyte-inktrap	mt-6 inline-block text-3xl font-semibold tracking-wider text-electric-blue [text-shadow:_0px_0px_3px_rgb(152_249_255)]">
            June 22-23, 2024
          </p>
          <Logos className="mx-auto mt-8 block flex flex-row md:hidden" />
        </div>
        <form className="ml-auto mt-32 w-full text-7xl text-white md:mt-0 md:w-1/2">
          <p className="whitespace-nowrap text-center text-xl text-white md:text-right">
            Be the first to know when applications launch.
          </p>
          <div className="mt-4 flex flex-row space-x-4">
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-none block w-full rounded-none border border-2 border-[#72DDE7] bg-transparent p-2.5 text-sm font-medium text-gray-900 text-white placeholder-white shadow-lg shadow-[#1072789e] drop-shadow-input focus:border-[#72DDE7] focus:ring-transparent"
              placeholder="john@gmail.com"
              required
            />
            <button className="font-whyte-inktrap cursor-pointer whitespace-nowrap bg-white px-4 pt-2 text-lg text-background transition-all duration-300 ease-in-out hover:bg-[#BAE8ED]">
              Notify Me
            </button>
          </div>
          <div className="mt-2 flex justify-center text-lg font-normal text-gray-200 md:justify-end">
            <span className="text-gray-100">Questions? Email</span>
            <a
              href="mailto:team@calhacks.io"
              className={`
              ml-1 bg-gradient-to-r from-electric-blue to-heliotrope bg-clip-text text-transparent after:absolute after:block
              after:h-[3px] after:w-[145px] after:origin-left after:scale-x-0 after:bg-heliotrope after:transition after:duration-300 after:content-[''] after:hover:scale-x-100
              `}
            >
              team@calhacks.io
            </a>
          </div>
        </form>
      </div>
      <div className="-mt-64 flex flex-col md:hidden">
        <SlidingText />
      </div>
      <div className="margin-auto fixed bottom-[-30vh] left-1/2 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
    </div>
  );
};

export default Hero;
