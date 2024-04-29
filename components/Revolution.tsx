"use client";

import React from "react";
import Image from "next/image";

const Revolution = () => {
  return (
    <div className="relative flex min-h-screen min-w-full flex-col items-center overflow-hidden">
      <Image
        src="/images/four-point.png"
        className="mt-24"
        height={75}
        width={75}
        alt="Four Point"
      />
      <h1 className="mt-6 font-pp-mondwest text-4xl text-white">
        Be Part of the Revolution.
      </h1>
      <p className="mt-2 max-w-2xl text-center text-lg font-extralight text-white">
        Explore the potential of large language models and other open source
        API’s, <br />
        all while <b>making a lasting impact</b> in the world of artificial
        intelligence.
      </p>
      <div className="my-10 grid max-w-[78vw] grid-cols-1 gap-x-4 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="rounded-lg p-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(76, 4, 110, 0.383), rgba(27, 6, 152, 0.29))",
          }}
        >
          <h3 className="mb-1 text-xl font-semibold text-[#77DAFF]">
            GPT-4 and Plugins Access
          </h3>
          <p className="leading-snug text-white">
            For 36 hours, you’ll have privileged access to the invite-only
            OpenAI API, plugins, and some of the best LLM hacking tools on the
            planet.
          </p>
        </div>
        <div
          className="rounded-lg p-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(76, 4, 110, 0.383), rgba(27, 6, 152, 0.29))",
          }}
        >
          <h3 className="mb-1 text-xl font-semibold text-[#77DAFF]">
            Four Teams. $50,000 Each.
          </h3>
          <p className="leading-snug text-white">
            Quit your internship. Teams selected by a panel of expert VCs have
            the opportunity to take $50,000 from the Berkeley SkyDeck fund and
            work full time on their project for the rest of the summer.
          </p>
        </div>
        <div
          className="rounded-lg p-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(76, 4, 110, 0.383), rgba(27, 6, 152, 0.29))",
          }}
        >
          <h3 className="mb-1 text-xl font-semibold text-[#77DAFF]">
            Exclusive Recruiting Opportunities
          </h3>
          <p className="leading-snug text-white">
            Meet and network with other AI/LLM developers, industry experts, and
            potential investors. Build lasting connections and get your foot in
            the door.
          </p>
        </div>
        <div
          className="rounded-lg p-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(76, 4, 110, 0.383), rgba(27, 6, 152, 0.29))",
          }}
        >
          <h3 className="mb-1 text-xl font-semibold text-[#77DAFF]">
            Learn From the Best
          </h3>
          <p className="leading-snug text-white">
            Attend workshops and hear from key components of the AI community.
            This is your chance to learn from the best and take your skills to
            the next level.
          </p>
        </div>
        <div
          className="rounded-lg p-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(76, 4, 110, 0.383), rgba(27, 6, 152, 0.29))",
          }}
        >
          <h3 className="mb-1 text-xl font-semibold text-[#77DAFF]">
            Free Food, Free Swag, Free Credits
          </h3>
          <p className="leading-snug text-white">
            We’ll take care of your meals and drinks. Meanwhile, stock up on
            free swag from our sponsors, including Azure and OpenAI platform
            credits for everyone!
          </p>
        </div>
        <div
          className="rounded-lg p-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(76, 4, 110, 0.383), rgba(27, 6, 152, 0.29))",
          }}
        >
          <h3 className="mb-1 text-xl font-semibold text-[#77DAFF]">
            $250,000+ in Prizes
          </h3>
          <p className="leading-snug text-white">
            Win cash, iPads, $4,000 in OpenAi platform credits, and so much
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revolution;
