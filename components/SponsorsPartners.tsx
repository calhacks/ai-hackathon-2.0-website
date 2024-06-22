"use client";

import Image from "next/image";

const partneringSchools = [
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
    <div className="mx-auto flex max-w-screen-lg px-8 pb-16 pt-4 sm:px-4 md:px-0 lg:pb-0">
      <div className="m-auto">
        <p className="mb-2 text-center font-pp-mondwest text-3xl text-white sm:text-4xl xl:text-5xl">
          Sponsors & Partners
        </p>
        <p className="text-center text-base text-white sm:text-xl xl:text-2xl">
          A round of applause for our sponsors, who make all of this possible.
        </p>
        <div className="mt-16 flex flex-row justify-center gap-4">
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
        {/* <div className="mb-8 mt-16 flex flex-row flex-wrap items-center justify-center gap-12 sm:my-16 md:gap-4">
          <a
            href="https://www.intel.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 h-[56px] w-[160px] p-0 sm:h-[70px] sm:w-[200px] xl:h-[87.5px] xl:w-[250px]"
          >
            <Image
              src="/images/sponsors/intel.png"
              alt="Intel Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.openai.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 h-[56px] w-[160px] p-0 sm:h-[70px] sm:w-[200px] xl:h-[87.5px] xl:w-[250px]"
          >
            <Image
              src="/images/sponsors/openai.svg"
              alt="OpenAI Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://mistral.ai/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 h-[56px] w-[160px] p-0 sm:h-[70px] sm:w-[200px] xl:h-[70px] xl:w-[250px]"
          >
            <Image
              src="/images/sponsors/mistral.svg"
              alt="Mistral Logo"
              fill
              objectFit="contain"
            />
          </a>
        </div> */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 lg:grid-cols-3 lg:gap-10">
          <a
            href="https://www.intel.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/intel.png"
              alt="Intel Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.openai.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/openai.svg"
              alt="OpenAI Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://mistral.ai/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/mistral.svg"
              alt="Mistral Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.you.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/you.png"
              alt="You.com Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://berkeleyfrontier.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/berkeley-frontier-fund.jpg"
              alt="Berkeley Frontier Fund Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.aicventures.org/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-2 h-[150px] w-full p-0"
          >
            <Image
              src="/images/sponsors/aic.png"
              alt="AIC Ventures Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.reachcapital.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full"
          >
            <Image
              src="/images/sponsors/reach-capital.svg"
              alt="Reach Capital Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://lsvp.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full"
          >
            <Image
              src="/images/sponsors/lightspeed.svg"
              alt="Lightspeed Venture Partners Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.mayfield.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[150px] w-full"
          >
            <Image
              src="/images/sponsors/mayfield.svg"
              alt="Mayfield Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://aws.amazon.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[80px] w-full p-12"
          >
            <Image
              src="/images/sponsors/aws.svg"
              alt="AWS Logo"
              fill
              objectFit="contain"
            />
          </a>{" "}
          <a
            href="https://www.hume.ai/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-8 h-[150px] w-full"
          >
            <Image
              src="/images/sponsors/hume.svg"
              alt="Hume Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://groq.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-1.5 h-[50px] w-full min-[1030px]:col-span-1 min-[1030px]:h-[75px]"
          >
            <Image
              src="/images/sponsors/groq.svg"
              alt="Groq Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.lmnt.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-8 mb-4 h-[150px] w-full"
          >
            <Image
              src="/images/sponsors/lmnt.svg"
              alt="LMNT Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.mindsdb.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 m-0 -mt-8 mb-4 h-[150px] w-full"
          >
            <Image
              src="/images/sponsors/mindsdb.png"
              alt="MindsDB Logo"
              fill
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.singlestore.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="relative z-50 col-span-full m-0 -mt-8 mb-4 h-[150px] h-[70px] w-full min-[1030px]:col-span-1 min-[1030px]:h-[100px]"
          >
            <Image
              src="/images/sponsors/singlestore.svg"
              alt="SingleStore Logo"
              fill
              objectFit="contain"
            />
          </a>
        </div>
        <div className="mt-[2.5rem] grid grid-cols-2 justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-4">
          {partneringSchools.map((logo, index) => {
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
