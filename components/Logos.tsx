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
      <Image
        src="/images/hab-logo.svg"
        alt="Hackathons @ Berkeley Logo"
        width={100}
        height={50}
      />
      <Image
        src="/images/berkeley-skydeck-logo.svg"
        alt="Hackathons @ Berkeley Logo"
        width={100}
        height={50}
      />
    </div>
  );
};

export default Logos;
