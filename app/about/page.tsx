import Hero from "@/components/Hero";
import SlidingText from "@/components/SlidingText";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="bg-[url('../public/images/about-bg.svg')] bg-cover">
      <Nav />
      <main className="relative z-10 flex min-h-screen flex-col items-center overflow-hidden text-white">
        <img
          src="/images/four-point.png"
          className="mt-24"
          style={{ height: "50px" }}
        />
        <h1 className="mt-6 font-pp-mondwest text-5xl">About</h1>
        <p className="mt-4 max-w-2xl text-balance text-center text-xl">
          Hackathons @ Berkeley, Berkeley SkyDeck, and UC Berkeley are joining forces again
          to give you an unparalleled hacking experience.
        </p>
        <div className="w-95 mt-6 grid max-w-5xl gap-6 px-8 md:w-full md:grid-cols-3">
          <div className="rounded-lg bg-black/30 p-6">
            <img
              src="/images/berkeley.png"
              style={{ height: "150px" }}
              className="mx-auto"
            />
            <h4 className="mt-4 text-lg font-bold text-electric-blue">
              UC Berkeley
            </h4>
            <p className="mt-2">
              is the world’s #1 public university, with a rich history of
              groundbreaking discoveries.
            </p>
          </div>
          <div className="rounded-lg bg-black/30 p-6">
            <img
              src="/images/hab.png"
              className="mx-auto p-8"
              style={{ height: "150px" }}
            />
            <h4 className="mt-4 text-lg font-bold text-electric-blue">
              Hackathons @ Berkeley
            </h4>
            <p className="mt-2">
              is the non-profit, student-run organization that runs Cal Hacks, the world's largest collegiate
              hackathon. Hackathons @ Berkeley brings
              together innovative minds to push the boundaries of what is
              possible.
            </p>
          </div>
          <div className="rounded-lg bg-black/30 p-6">
            <img
              src="/images/berkeley-skydeck-logo.png"
              className="mx-auto p-8"
              style={{
                height: "150px",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
            <h4 className="mt-4 text-lg font-bold text-electric-blue">
              Berkeley SkyDeck
            </h4>
            <p className="mt-2">
              is UC Berkeley's premier startup accelerator
              with a mission to empower and cultivate the next generation of
              entrepreneurs.
            </p>
          </div>
        </div>
        {/* <h2 className="mt-24 font-pp-mondwest text-5xl">Key Advisors</h2> */}
        {/* <div className="w-95 mb-64 mt-8 grid max-w-5xl gap-6 md:w-full md:grid-cols-3">
          <div>
            <img
              src="/images/oski.jpeg"
              className="mx-auto rounded-full object-cover"
              style={{ height: "175px", width: "175px" }}
            />
            <h4 className="mt-4 text-center text-lg font-bold">
              Oski The Bear
            </h4>
            <p className="mt-2  text-center">
              Beary important person @ Cal Hacks.
            </p>
          </div>
          <div>
            <img
              src="/images/oski.jpeg"
              className="mx-auto rounded-full object-cover"
              style={{ height: "175px", width: "175px" }}
            />
            <h4 className="mt-4 text-center text-lg font-bold">
              Oski The Bear
            </h4>
            <p className="mt-2  text-center">
              Beary important person @ Cal Hacks.
            </p>
          </div>
          <div>
            <img
              src="/images/oski.jpeg"
              className="mx-auto rounded-full object-cover"
              style={{ height: "175px", width: "175px" }}
            />
            <h4 className="mt-4 text-center text-lg font-bold">
              Oski The Bear
            </h4>
            <p className="mt-2  text-center">
              Beary important person @ Cal Hacks.
            </p>
          </div>
        </div> */}
      </main>
      <div className="margin-auto fixed bottom-[-50vh] left-1/2 z-0 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
      <style>
        {`html {
          background: #000
        }`}
      </style>
    </main>
  );
}
