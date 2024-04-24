import Hero from "@/components/Hero";
import SlidingText from "@/components/SlidingText";

const cardBackground = { backgroundImage: 'linear-gradient(90deg, rgba(76, 4, 110, 0.2508) 0.25%, rgba(27, 6, 152, 0.1914) 93.27%)' }

export default function Home() {
  return (
    <>
      <main className="z-1 relative min-h-screen overflow-hidden flex flex-col items-center text-white" style={{ zIndex: 999 }}>
        <img src="/images/four-point.png" className="mt-24" style={{ height: '50px' }} />
        <h1 className="text-5xl mt-6 font-pp-mondwest">
          About
        </h1>
        <p className="max-w-2xl text-xl text-center text-balance mt-4">
          Cal Hacks, Berkeley SkyDeck, and UC Berkeley are joining forces again to give you an unparalleled hacking experience.  
        </p>
        <div className="grid md:grid-cols-3 w-95 md:w-full max-w-5xl gap-6 mt-6 px-8">
          <div style={cardBackground} className="p-6 rounded-lg">
            <img src="/images/berkeley.png" style={{ height: '150px' }} className="mx-auto" />
            <h4 className="mt-4 text-lg font-bold text-electric-blue">
              UC Berkeley
            </h4>
            <p className="mt-2">
              is the world’s #1 public university, with a rich history of groundbreaking discoveries, knowledge, and innovation.
            </p>
          </div>
          <div style={cardBackground} className="p-6 rounded-lg">
            <img src="/images/hab.png" className="p-8 mx-auto" style={{ height: '150px' }} />
            <h4 className="mt-4 text-lg font-bold text-electric-blue">
              Hackathons @ Berkeley
            </h4>
            <p className="mt-2">
              is the non-profit organization that runs the largest collegiate hackathon in the world. Every year, Hackathons @ Berkeley brings together innovative minds to push the boundaries of what is possible.
            </p>
          </div>
          <div style={cardBackground} className="p-6 rounded-lg">
            <img src="/images/berkeley-skydeck-logo.png" className="p-8 mx-auto" style={{ height: '150px', objectFit: 'contain', objectPosition: 'center' }} />
            <h4 className="mt-4 text-lg font-bold text-electric-blue">
              Berkeley SkyDeck
            </h4>
            <p className="mt-2">
              is the premier startup accelerator affiliated with UC Berkeley, with a mission to empower and cultivate the next generation of entrepreneurs.
            </p>
          </div>
        </div>
        <h2 className="text-5xl mt-24 font-pp-mondwest">
          Key Advisors
        </h2>
        <div className="grid md:grid-cols-3 w-95 md:w-full max-w-5xl gap-6 mt-8 mb-64">
          <div>
            <img src="/images/oski.jpeg" className="rounded-full object-cover mx-auto" style={{ height: '175px', width: '175px' }} />
            <h4 className="mt-4 text-lg font-bold text-center">
              Oski The Bear
            </h4>
            <p className="mt-2  text-center">
              Beary important person @ Cal Hacks.
            </p>
          </div>
          <div>
            <img src="/images/oski.jpeg" className="rounded-full object-cover mx-auto" style={{ height: '175px', width: '175px' }} />
            <h4 className="mt-4 text-lg font-bold text-center">
              Oski The Bear
            </h4>
            <p className="mt-2  text-center">
              Beary important person @ Cal Hacks.
            </p>
          </div>
          <div>
            <img src="/images/oski.jpeg" className="rounded-full object-cover mx-auto" style={{ height: '175px', width: '175px' }} />
            <h4 className="mt-4 text-lg font-bold text-center">
              Oski The Bear
            </h4>
            <p className="mt-2  text-center">
              Beary important person @ Cal Hacks.
            </p>
          </div>
        </div>
        
      </main>
      <div className="z-0 margin-auto fixed bottom-[-50vh] left-1/2 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
      <style>
        {`html {
          background: #000
        }`}
        </style>
    </>
  );
}
