"use client";

import Image from "next/image";

const sponsorList = [
  {
    image: "/images/sponsors/hackdavis.png",
    link: "https://hackdavis.io/",
    alt: "Hack Davis partner",
  },
  {
    image: "/images/sponsors/hackuci.jpeg",
    link: "https://hackuci.com/",
    alt: "Hack UCI partner",
  },
  {
    image: "/images/sponsors/lahacks.jpeg",
    link: "https://lahacks.com/",
    alt: "LAHacks partner",
  },
  {
    image: "/images/sponsors/mhacks.jpg",
    link: "https://www.mhacks.org/",
    alt: "MHacks partner",
  },
  {
    image: "/images/sponsors/mitcenterforentrepreneurship.png",
    link: "https://entrepreneurship.mit.edu/",
    alt: "The Martin Trust Center for MIT Entrepreneurship partner",
  },
  {
    image: "/images/sponsors/mithack.png",
    link: "https://hackmit.org/",
    alt: "Hack MIT partner",
  },
  {
    image: "/images/sponsors/pinnacle.png",
    link: "https://pinnacle.us.org/",
    alt: "Pinnacle partner",
  },
  {
    image: "/images/sponsors/sfsu.png",
    link: "https://sfhacks.io/",
    alt: "SF Hacks partner",
  },
  {
    image: "/images/sponsors/treehacks.png",
    link: "https://www.treehacks.com/",
    alt: "TreeHacks partner",
  },
  {
    image: "/images/sponsors/vthacks.svg",
    link: "https://vthacks.com/",
    alt: "VTHacks partner",
  },
  {
    image: "/images/sponsors/pennapps.png",
    link: "https://pennapps.com/",
    alt: "PennApps partner",
  },
  {
    image: "/images/sponsors/ucsd.jpeg",
    link: "https://innovation.ucsd.edu/",
    alt: "UCSD Office of Innovation and Commercialization partner",
  },
];

export default function SponsorsPartners() {
  return (
    <div className="flex w-screen px-4 pb-16 pt-4 md:px-0 lg:pb-0">
      <div className="m-auto">
        <p className="mb-2 text-center font-pp-mondwest text-3xl text-white sm:text-4xl xl:text-5xl">
          Sponsors & Partners
        </p>
        <p className="text-center text-base text-white sm:text-xl xl:text-2xl">
          A round of applause for our sponsors, who make all of this possible.
        </p>
        <div className="my-16 flex flex-row justify-center gap-4">
          <a
            href="https://hackberkeley.org"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[80px] w-[160px] p-0 sm:h-[100px] sm:w-[200px] xl:h-[125px] xl:w-[250px]"
          >
            <Image
              src="/images/hab-logo.svg"
              alt="Hackathons @ Berkeley Logo"
              fill
            />
          </a>
          <a
            href="https://skydeck.berkeley.edu/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 h-[56px] w-[160px] p-0 sm:h-[70px] sm:w-[200px] xl:h-[87.5px] xl:w-[250px]"
          >
            <Image
              src="/images/berkeley-skydeck-logo.png"
              alt="Berkeley Skydeck Logo"
              fill
            />
          </a>
        </div>
        <div className="my-16 flex flex-row justify-center gap-4">
          <a
            href="https://www.intel.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[80px] w-[160px] p-0 sm:h-[100px] sm:w-[200px] xl:h-[125px] xl:w-[250px]"
          >
            <Image src="/images/sponsors/intel.svg" alt="Intel Logo" fill />
          </a>
          <a
            href="https://www.aicventures.org/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-2 h-[85px] w-[160px] p-0 sm:h-[100px] sm:w-[200px] xl:h-[120px] xl:w-[250px]"
          >
            <Image
              src="/images/sponsors/aic.png"
              alt="AIC Ventures Logo"
              fill
            />
          </a>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-4">
          {sponsorList.map((logo, index) => {
            return (
              <a
                key={index}
                href={logo.link}
                rel="noopener noreferrer"
                target="_blank m-auto"
                className="relative flex h-full w-[10rem] items-center justify-center text-center"
              >
                <Image
                  src={logo.image}
                  width={100}
                  height={100}
                  alt={logo.alt}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
