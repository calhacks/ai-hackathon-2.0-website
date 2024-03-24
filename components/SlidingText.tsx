import React from "react";
import Marquee from "react-fast-marquee";

const SlidingText = () => {
  return (
    <>
      <Marquee loop={0} speed={200} direction="left" className="m-0 h-full p-0">
        <span className="marquee-text z-0 select-none font-open-sans opacity-50">
          HACK. DESIGN. CREATE. LAUGH. BUILD. INNOVATE. LEARN. IMAGINE. HACK.
          DESIGN. CREATE.
        </span>
      </Marquee>
      <Marquee
        loop={0}
        speed={200}
        direction="right"
        className="-mt-14 h-full p-0"
      >
        <span className="marquee-text z-0 select-none font-open-sans opacity-50">
          HACK. DESIGN. CREATE. LAUGH. BUILD. INNOVATE. LEARN. IMAGINE. HACK.
          DESIGN. CREATE.
        </span>
      </Marquee>
    </>
  );
};

export default SlidingText;
