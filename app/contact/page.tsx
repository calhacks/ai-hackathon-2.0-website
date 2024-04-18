import Hero from "@/components/Hero";
import SlidingText from "@/components/SlidingText";

const cardBackground = { backgroundImage: 'linear-gradient(90deg, rgba(76, 4, 110, 0.2508) 0.25%, rgba(27, 6, 152, 0.1914) 93.27%)' }

export default function Home() {
  return (
    <>
      <main className="z-1 relative min-h-screen overflow-hidden flex flex-col items-center text-white" style={{ zIndex: 999 }}>
        <img src="/images/four-point.png" className="mt-24" style={{ height: '100px' }} />
        <h1 className="text-5xl mt-6 font-pp-mondwest">
          Contact Us
        </h1>
        <p className="max-w-2xl text-xl text-center text-balance mt-4">
          Any questions? Let us know!
        </p>
        <div className="w-95 max-w-3xl text-center mt-12 px-8 text-lg">
          <div>
            <p className="mb-2">
              We are here to help. Please check out FAQ, and email us if your question is not answered. We’ll get back to you as soon as we can!
            </p><p className="mb-2"> 
              Please be advised we cannot offer travel reimbursements at this time. We apologize for the inconvenience
            </p><p className="text-bold text-electric-blue">
                     team@calhacks.io</p>
          </div>
        </div>
      </main>
      <div className="z-0 margin-auto fixed bottom-[-50vh] left-1/2 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
    </>
  );
}
