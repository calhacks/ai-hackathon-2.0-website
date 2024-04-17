import Hero from "@/components/Hero";
import SlidingText from "@/components/SlidingText";

const cardBackground = { backgroundImage: 'linear-gradient(90deg, rgba(76, 4, 110, 0.2508) 0.25%, rgba(27, 6, 152, 0.1914) 93.27%)' }

export default function Home() {
  return (
    <>
      <main className="z-2 relative min-h-screen overflow-hidden bg-background flex flex-col items-center">
        <img src="/images/four-point.png" className="mt-24" style={{ height: '100px' }} />
        <h1 className="text-5xl mt-6 font-pp-mondwest">
          Contact Us
        </h1>
        <p className="max-w-2xl text-xl text-center text-balance mt-4">
          Any questions? Let us know!
        </p>
        <div className="grid md:grid-cols-2 w-95 max-w-6xl gap-6 mt-12 px-8 text-lg">
          <div>
            <p className="mb-2">
              We are here to help. Please check out FAQ, and fill out the form to send us an email if your question is not answered. We’ll get back to you as soon as we can!
            </p><p className="mb-2"> 
              Please be advised we cannot offer travel reimbursements at this time. We apologize for the inconvenience
            </p><p className="text-bold text-electric-blue">
                     team@calhacks.io</p>
          </div>
          <form>
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-electric-blue" type="text" placeholder="Email Address" />
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-electric-blue mt-4" type="text" placeholder="Full Name" />
            <textarea className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-electric-blue mt-4" rows={8} placeholder="Your message..." />
            <button className="bg-blue-900 mt-2 float-right px-8 hover:bg-violet text-white font-bold py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
