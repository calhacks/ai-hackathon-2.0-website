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
        <div className="grid grid-cols-4 gap-10">
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
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
