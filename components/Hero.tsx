"use client";

import React, { SyntheticEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logos from "./Logos";
import SlidingText from "./SlidingText";
import { IconsList } from "@/app/IconsList";
import { CircleCheck } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const API_BASE_URL = "https://api.calhacks.io";
    const response = await fetch(`${API_BASE_URL}/static/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        list: "ch",
      }),
    });

    setEmail("");
    if (response.status === 204) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }

    setIsLoading(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute right-[120px] top-[80px] hidden text-6xl text-white md:block">
        <Logos />
      </div>
      <div className="md:items-between relative z-10 mx-auto flex min-h-[100vh] max-w-screen-xl flex-col items-center px-8 pb-12 pt-36 sm:px-16 md:place-content-between md:items-start md:justify-between md:px-20 md:py-40">
        <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
          <div className="max-w-md">
            <h1 className="flex flex-col font-pp-neue-bit text-5xl font-bold text-white sm:text-7xl md:text-8xl">
              <span>UC Berkeley</span>
              {/* <span title="AI Hackathon" className="-mt-2 sm:-mt-5">
                AI Hackathon
              </span> */}
              <div className="relative h-[40px] sm:h-[50px] md:h-[70px]">
                <Image
                  src="/images/ai-hackathon-text.svg"
                  alt="AI Hackathon"
                  fill={true}
                  className="pointer-events-none -mt-4 hidden md:block"
                />
                <Image
                  src="/images/ai-hackathon-text.svg"
                  alt="AI Hackathon"
                  fill={true}
                  className="pointer-events-none -mt-3 block md:hidden"
                />
              </div>
              <motion.span
                className="absolute -top-12 left-0 md:-left-8"
                initial={{ opacity: 0, scale: 0.3, transform: "rotate(90deg)" }}
                animate={{ opacity: 1, scale: 1, transform: "rotate(0deg)" }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  className="pointer-events-none animate-wiggle"
                  src="/images/star.svg"
                  alt="Star"
                  width={50}
                  height={50}
                />
              </motion.span>
            </h1>
          </div>
          <p className="inline-block w-full font-whyte-inktrap text-lg font-normal tracking-wider text-electric-blue [text-shadow:_0px_0px_1.5px_rgb(152_249_255)] sm:[text-shadow:_0px_0px_3px_rgb(152_249_255)] md:text-2xl">
            June 22-23, 2024
          </p>
          <Logos className="mx-auto mt-8 block flex flex-row md:hidden" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-32 w-full w-full max-w-md font-whyte-inktrap text-white md:ml-auto md:mt-[18.5rem]"
        >
          <p className="text-center text-center text-lg text-white sm:whitespace-nowrap md:text-right md:text-right md:text-xl">
            Be the first to know when applications launch.
          </p>
          <div className="mt-4 flex flex-row space-x-4">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:ring-none block w-full rounded-none border border-2 border-[#72DDE7] bg-background/50 bg-background/50 p-2.5 font-open-sans text-sm font-medium text-gray-900 text-white placeholder-gray-200 shadow-lg shadow-[#1072789e] drop-shadow-input focus:border-[#72DDE7] focus:ring-transparent"
              placeholder="john@gmail.com"
              required
            />
            <button
              disabled={isLoading}
              className="text-md flex cursor-pointer items-center items-center space-x-2 whitespace-nowrap bg-white px-2 py-1 font-whyte-inktrap text-background transition-all duration-300 ease-in-out hover:bg-[#BAE8ED] disabled:cursor-not-allowed sm:px-4 sm:py-1.5 sm:text-lg"
            >
              {isLoading && (
                <IconsList.spinner className="h-4 w-4 animate-spin sm:h-5 sm:w-5" />
              )}
              <span className="mt-1.5 sm:mt-2">Notify Me</span>
            </button>
          </div>
          {isSuccess && (
            <div className="flex h-full flex-row items-center space-x-1 text-sm text-electric-blue">
              <CircleCheck className="h-3 w-3" />
              <span className="mt-1">Successfully subscribed</span>
            </div>
          )}
          <div className="mt-2 flex justify-center text-base font-normal text-gray-200 md:justify-end md:text-lg">
            <span className="text-gray-100">Questions? Email</span>
            <a
              href="mailto:team@calhacks.io"
              className={`
              relative ml-1
              inline-block bg-gradient-to-r from-electric-blue to-heliotrope bg-clip-text text-transparent
              after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-heliotrope after:transition after:duration-300 after:content-[''] after:hover:scale-x-100
              `}
            >
              team@calhacks.io
            </a>
          </div>
        </form>
      </div>
      <div className="-mt-52 flex flex-col sm:-mt-64 md:hidden">
        <SlidingText />
      </div>
      <div className="z-1 margin-auto fixed bottom-[-50vh] left-1/2 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
    </div>
  );
};

export default Hero;
