import React from "react";
import Marquee from "react-fast-marquee";

const SlidingText = () => {
  return (
    <>
      {/* Fix issue with spawning more elements: https://github.com/justin-chu/react-fast-marquee/issues/66#issuecomment-1575052529 */}
      <div className="w-screen">
        <Marquee
          loop={0}
          speed={100}
          direction="left"
          className="m-0 h-full p-0"
        >
          <span className="marquee-text z-0 select-none font-open-sans opacity-40">
            HACK. DESIGN. CREATE. LAUGH. BUILD. INNOVATE. LEARN. IMAGINE. HACK.
            DESIGN. CREATE.
          </span>
        </Marquee>
        <Marquee
          loop={0}
          speed={100}
          direction="right"
          className="-mt-14 h-full p-0"
        >
          <span className="marquee-text z-0 select-none font-open-sans opacity-40">
            HACK. DESIGN. CREATE. LAUGH. BUILD. INNOVATE. LEARN. IMAGINE. HACK.
            DESIGN. CREATE.
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default SlidingText;
