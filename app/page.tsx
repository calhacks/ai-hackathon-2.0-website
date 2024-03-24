import Hero from "@/components/Hero";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Hero />
      <div className="absolute top-[14rem] flex flex-col">
        <Marquee
          loop={0}
          speed={200}
          direction="left"
          className="m-0 h-full p-0"
        >
          <span className="marquee-text font-open-sans z-0 select-none">
            HACK. DESIGN. CREATE. LAUGH. BUILD. INNOVATE. LEARN. IMAGINE. HACK.
            DESIGN. CREATE.
          </span>
        </Marquee>
        <Marquee
          loop={0}
          speed={200}
          direction="right"
          className="m-0 h-full p-0"
        >
          <span className="marquee-text font-open-sans z-0 select-none">
            HACK. DESIGN. CREATE. LAUGH. BUILD. INNOVATE. LEARN. IMAGINE. HACK.
            DESIGN. CREATE.
          </span>
        </Marquee>
      </div>
    </main>
  );
}
