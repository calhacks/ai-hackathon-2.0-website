import React from "react";
import Marquee from "react-fast-marquee";
import BottomMarqueeText from "../public/images/bottom-marquee-text.svg";
import TopMarqueeText from "../public/images/top-marquee-text.svg";
import Image from "next/image";

const SlidingText = () => {
  return (
    <>
      {/* Fix issue with spawning more elements: https://github.com/justin-chu/react-fast-marquee/issues/66#issuecomment-1575052529 */}
      <div className="z-2 relative w-screen">
        <Marquee
          loop={0}
          speed={200}
          direction="left"
          className="m-0 h-full p-0"
        >
          <Image src={TopMarqueeText} alt="" />
        </Marquee>
        <Marquee
          loop={0}
          speed={200}
          direction="right"
          className="h-full p-0"
          style={{ marginTop: "-4em" }}
        >
          <Image src={BottomMarqueeText} alt="" />
        </Marquee>
      </div>
    </>
  );
};

export default SlidingText;
