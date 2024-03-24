import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogosProps {
  className?: string;
}

const Logos: FC<LogosProps> = ({ className }) => {
  return (
    <div
      className={cn("pointer-events-none flex flex-row space-x-8", className)}
    >
      <a
        href="https://hackberkeley.org"
        rel="noopener noreferrer"
        target="_blank"
        className="pointer-events-auto m-0 -mt-1.5 p-0"
      >
        <Image
          src="/images/hab-logo.svg"
          alt="Hackathons @ Berkeley Logo"
          width={100}
          height={50}
        />
      </a>
      <a
        href="https://skydeck.berkeley.edu/"
        rel="noopener noreferrer"
        target="_blank"
        className="pointer-events-auto m-0 p-0"
      >
        <Image
          src="/images/berkeley-skydeck-logo.png"
          alt="Hackathons @ Berkeley Logo"
          width={100}
          height={50}
        />
      </a>
    </div>
  );
};

export default Logos;
