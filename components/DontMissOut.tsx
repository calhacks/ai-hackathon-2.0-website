"use client";

import Image from "next/image";

export default function DontMissOut() {
  return (
    <div className="bg-black py-28">
      <p className="mb-6 text-center font-pp-mondwest text-4xl text-white">
        Don&apos;t Miss Out.
      </p>
      <Image
        src="/images/date.svg"
        alt="9am June 22 (Saturday) - 6pm June 23 (Sunday)"
        width={475}
        height={200}
        className="mx-auto mb-1"
      />
      <p className="mb-16 text-center text-xl text-white">
        UC Berkeley, MLK Student Union Building
      </p>
      <button className="mx-auto block h-[48px] w-[138px] bg-white text-xl text-opacity-0 hover:bg-[#e6e6e6]">
        Register
      </button>
    </div>
  );
}
