"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logos from "./Logos";

const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-xl flex-col place-content-between items-start justify-between px-20 py-40">
        <div className="relative flex flex-col items-start text-left">
          <div className="max-w-md">
            <h1 className="flex flex-col font-pp-mondwest text-4xl text-white sm:text-6xl md:text-7xl">
              <Image
                src="/images/four-point.svg"
                alt="Four Point"
                width={75}
                height={75}
                className="-mt-1 ml-[-60px]"
              />
              <span>UC Berkeley</span>
              <div className="relative h-[70px] md:h-[80px]">
                <Image
                  src="/images/ai-hackathon-text.svg"
                  alt="AI Hackathon"
                  fill={true}
                  className="pointer-events-none -ml-3 -mt-1 block md:-mt-2"
                />
              </div>
            </h1>
            <p className="mb-6 inline-block bg-gradient-to-r from-[#82F8FF] to-[#2F82FF] bg-clip-text text-2xl text-transparent">
              June 22-23, 2024 @ UC Berkeley
            </p>
            <p className="mb-6 text-white">
              Kick off the summer with an unparalleled experience, where the
              brightest minds from around the world come together to innovate,
              collaborate, and revolutionize the AI landscape.
            </p>
            <Link href="/">
              <button className="border border-transparent bg-white px-4 py-2 font-semibold text-black transition ease-in-out hover:-translate-y-1">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-[375px] top-[325px] hidden rotate-12 md:block">
        <Image
          src="/images/rounded-star.svg"
          alt="Star-2"
          className="z-1"
          width={250}
          height={250}
        />
      </div>
      <div className="absolute right-[50px] top-[-30px] hidden md:block">
        <Image
          src="/images/eight-point.svg"
          alt="Star-1"
          className="z-10"
          width={630}
          height={630}
        />
      </div>
      <div className="absolute right-[240px] top-[600px] hidden text-6xl text-white md:block">
        <Logos />
      </div>
    </div>
  );
};

export default Landing;
