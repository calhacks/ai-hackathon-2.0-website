"use client";

import Image from "next/image";

const sponsorList = [
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
  {
    image: "/images/adobe.svg",
    link: "https://www.adobe.com/",
    alt: "Adobe sponsor",
  },
];

export default function SponsorsPartners() {
  return (
    <div className="flex w-screen px-4 pb-16 pt-4 md:px-0 lg:h-screen lg:pb-0">
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
        <div className="grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-4">
          {sponsorList.map((logo, index) => {
            return (
              <a
                key={index}
                href={logo.link}
                rel="noopener noreferrer"
                target="_blank m-auto"
                className="relative h-20 w-40 md:h-24 md:w-48 lg:h-20 lg:w-40 xl:h-28 xl:w-56"
              >
                <Image fill src={logo.image} alt={logo.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
