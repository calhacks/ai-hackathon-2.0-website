"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute right-[120px] top-[80px] text-6xl text-white">
        <div className="pointer-events-none	flex flex-row space-x-8">
          <Image
            src="/images/hab-logo.svg"
            alt="Hackathons @ Berkeley Logo"
            width={100}
            height={50}
          />
          <Image
            src="/images/berkeley-skydeck-logo.svg"
            alt="Hackathons @ Berkeley Logo"
            width={100}
            height={50}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-screen-xl flex-col place-content-between justify-between px-24 py-36">
        <div className="relative flex flex-col justify-between">
          <h1 className="font-pp-neue-bit text-8xl font-bold leading-[3.5rem] text-white">
            <span className="block">UC Berkeley</span>
            <span className="block">AI Hackathon</span>
          </h1>
          <p className="font-whyte-inktrap	mt-6 inline-block text-3xl font-semibold tracking-wider text-electric-blue [text-shadow:_0px_0px_3px_rgb(152_249_255)]">
            June 22-23, 2024
          </p>
          <motion.div
            className="absolute -left-8 -top-12"
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
          </motion.div>
        </div>
        <form className="ml-auto w-full text-7xl text-white md:w-1/2">
          <p className="whitespace-nowrap text-right text-xl text-white">
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
          <div className="mt-2 flex justify-end text-lg font-normal text-gray-200">
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
      <div className="margin-auto fixed bottom-[-30vh] left-1/2 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
    </div>
  );
};

export default Hero;
