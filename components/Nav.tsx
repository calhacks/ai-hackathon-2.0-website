"use client";

import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full bg-black">
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
              className="border-1 border border-white px-3 py-0.5 text-white transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
