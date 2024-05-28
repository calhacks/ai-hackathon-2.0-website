"use client";

import React from "react";
import Image from "next/image";

const cards = [
  {
    heading: "$100K Investment",
    description:
      "Teams selected by a panel of expert VCs have the opportunity to take some of the $100K investment from the Berkeley SkyDeck Fund and work full time on their project for the rest of the summer.",
  },
  {
    heading: "Exclusive Recruiting Opportunities",
    description:
      "Meet and network with other AI/LLM developers, industry experts, and potential investors. Build lasting connections and get your foot in the door.",
  },
  {
    heading: "Learn From the Best",
    description:
      "Attend workshops and hear from the AI community. This is your chance to learn from the best and take your skills to the next level.",
  },
  {
    heading: "Free Food, Free Swag, Free Credits",
    description:
      "We’ll take care of your meals and drinks. Meanwhile, stock up on free swag from our sponsors.",
  },
];

const Revolution = () => {
  return (
    <div className="relative flex min-h-[70vh] min-w-full flex-col items-center overflow-hidden bg-black bg-opacity-70 pb-20">
      <Image
        src="/images/four-point.svg"
        className="mt-24"
        height={75}
        width={75}
        alt="Four Point"
      />
      <h1 className="mt-6 font-pp-mondwest text-3xl text-white md:text-4xl">
        Be Part of the Revolution.
      </h1>
      <p className="text-md mt-2 w-[70vw] max-w-[600px] text-center font-extralight text-white md:text-lg">
        Explore the potential of large language models and other open source
        API’s, all while <b>making a lasting impact</b> in the world of
        artificial intelligence.
      </p>
      <div className="my-10 grid max-w-[78vw] grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-h-[100px] rounded-lg bg-black/[.37] p-6"
          >
            <h3 className="mb-1 text-lg font-semibold text-[#77DAFF] md:text-xl">
              {card.heading}
            </h3>
            <p className="text-md font-normal leading-snug text-white">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revolution;
