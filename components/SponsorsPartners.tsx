"use client";

import Image from "next/image";

const sponsorList = [
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
  { image: "/images/adobe.svg", link: "https://www.adobe.com/" },
];

export default function SponsorsPartners() {
  return (
    <div className="flex h-screen w-screen bg-black">
      <div className="m-auto">
        <p className="mb-2 text-center font-pp-mondwest text-4xl text-white">
          Sponsors & Partners
        </p>
        <p className="text-center text-xl text-white">
          A round of applause for our sponsors, who make all of this possible.
        </p>
        <div className="my-16 flex flex-row justify-center gap-4">
          <a
            href="https://hackberkeley.org"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[100px] w-[200px] p-0"
          >
            <Image
              src="/images/hab-logo.svg"
              alt="Hackathons @ Berkeley Logo"
              fill={true}
            />
          </a>
          <a
            href="https://skydeck.berkeley.edu/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 h-[70px] w-[200px] p-0"
          >
            <Image
              src="/images/berkeley-skydeck-logo.png"
              alt="Berkeley Skydeck Logo"
              fill={true}
            />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10 2xl:grid-cols-4">
          {sponsorList.map((logo, index) => {
            return (
              <a
                key={index}
                href={logo.link}
                rel="noopener noreferrer"
                target="_blank m-auto"
                className="border border-white p-2"
              >
                <Image
                  width={220}
                  height={100}
                  src={logo.image}
                  alt="Hackathons @ Berkeley Logo"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
