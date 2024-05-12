"use client";

import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="flex items-center px-2 py-5 text-xl text-white"
            >
              <span className="font-pp-mondwest">UCB AI Hackathon</span>
            </Link>
          </div>
          {/* Standard nav bar for non-mobile */}
          <div className="hidden items-center space-x-6 text-balance text-center md:flex">
            <Link
              href="/about"
              className="px-3 py-5 text-white hover:underline"
            >
              About
            </Link>
            <Link href="/" className="px-3 py-5 text-white hover:underline">
              Volunteer
            </Link>
            <Link
              href="/contact"
              className="px-3 py-5 text-white hover:underline"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="border-1 border border-white px-3 py-0.5 text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Register
            </Link>
          </div>

          {/* Collapsible nav menu for mobile screens */}
          <div className="flex flex-col md:hidden">
            <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div
              className={`${isOpen ? "flex" : "hidden"} absolute right-[33px] top-[50px] z-20 h-[265px] w-[150px] flex-col items-center rounded-md bg-white text-center md:hidden`}
            >
              <Link
                href="/about"
                className="px-3 py-5 text-black hover:underline"
              >
                About
              </Link>
              <Link href="/" className="px-3 py-5 text-black hover:underline">
                Volunteer
              </Link>
              <Link
                href="/contact"
                className="px-3 py-5 text-black hover:underline"
              >
                Contact
              </Link>
              <Link href="/" className="px-3 py-5 text-black hover:underline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
