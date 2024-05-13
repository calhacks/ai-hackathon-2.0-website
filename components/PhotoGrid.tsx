import { Typography } from "@mui/material";

export default function PhotoGrid() {
  return (
    <div className="relative z-10 flex flex-col items-center px-8 pb-12 pt-24 min-h-screen min-w-full overflow-hidden">
      <h1 className="font-pp-mondwest text-4xl text-white -mb-5">
        Join over 1000+ hackers in building
      </h1>
      <h1 className="mt-6 font-pp-mondwest text-4xl text-electric-blue mb-10">
        the next generation of responsible AI.
      </h1>
      <div className="w-full max-w-4xl aspect-square relative">
        <div className="absolute -left-[100px] top-[300px] size-40 rotate-45 sm:overflow-clip">
          <img
            className="w-40 h-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="absolute -z-10 right-0 top-0 translate-x-1/2 translate-y-1/2 rotate-12 size-28 overflow-clip">
          <img
            className="w-40 h-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-32 -translate-y-1/2 overflow-clip">
          <img
            className="w-40 h-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        {/* Grid for desktop and larger devices */}
        <div className="hidden md:grid grid-cols-11 grid-rows-11 gap-3 z-10 h-full">
          <div className="row-start-1 row-span-2 col-start-1 col-span-3"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0569.png`} alt={`DSC_0569`} /></div>
          <div className="row-start-1 row-span-2 col-start-4 col-span-3"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0493.png`} alt={`DSC_0493`} /></div>
          <div className="row-start-1 row-span-3 col-start-7 col-span-3"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0444.png`} alt={`DSC_0444`} /></div>
          <div className="row-start-1 row-span-3 col-start-10 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0235.png`} alt={`DSC_0235`} /></div>
          <div className="row-start-3 row-span-3 col-start-1 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0655.png`} alt={`bear`} /></div>
          <div className="row-start-3 row-span-3 col-start-3 col-span-4"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0703.png`} alt={`talk`} /></div>
          <div className="row-start-4 row-span-4 col-start-7 col-span-5"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0683.png`} alt={`big one`} /></div>
          <div className="row-start-6 row-span-3 col-start-1 col-span-4"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0532.png`} alt={`cube`} /></div>
          <div className="row-start-6 row-span-4 col-start-5 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0274.png`} alt={`water`} /></div>
          <div className="row-start-8 row-span-4 col-start-7 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0342.png`} alt={`blue shirt`} /></div>
          <div className="row-start-8 row-span-4 col-start-9 col-span-3"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0419.png`} alt={`presentation`} /></div>
          <div className="row-start-9 row-span-3 col-start-1 col-span-4"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0119.png`} alt={`hack`} /></div>
          <div className="row-start-10 row-span-2 col-start-5 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0022.png`} alt={`future`} /></div>
        </div>
        {/* Smaller layout for mobile */}
        <div className="grid md:hidden grid-cols-6 grid-rows-8 gap-2 z-10 h-full">
          <div className="row-start-1 row-span-1 col-start-1 col-span-3"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0569.png`} alt={`DSC_0569`} /></div>
          <div className="row-start-1 row-span-1 col-start-4 col-span-3"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0493.png`} alt={`DSC_0493`} /></div>
          <div className="row-start-2 row-span-2 col-start-1 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0655.png`} alt={`bear`} /></div>
          <div className="row-start-2 row-span-2 col-start-3 col-span-4"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0703.png`} alt={`talk`} /></div>
          <div className="row-start-4 row-span-2 col-start-1 col-span-4"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0532.png`} alt={`cube`} /></div>
          <div className="row-start-4 row-span-3 col-start-5 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0274.png`} alt={`water`} /></div>

          <div className="row-start-6 row-span-3 col-start-1 col-span-4"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0119.png`} alt={`hack`} /></div>
          <div className="row-start-7 row-span-2 col-start-5 col-span-2"><img className="w-full h-full object-cover" src={`/images/image-grid/DSC_0022.png`} alt={`future`} /></div>
        </div>
      </div>

    </div>
  );
}