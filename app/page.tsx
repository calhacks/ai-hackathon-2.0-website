import Hero from "@/components/Hero";
import SlidingText from "@/components/SlidingText";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Hero />
      <div className="absolute top-[14rem] flex hidden flex-col md:block">
        <SlidingText />
      </div>
    </main>
  );
}
