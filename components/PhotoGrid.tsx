import { Typography } from "@mui/material";

export default function PhotoGrid() {
  return (
    <div className="relative z-10 flex flex-col items-center px-8 pb-12 pt-36">
      <Typography style={{
        fontFamily: 'var(--font-pp-neue-bit), sans-serif', color: 'white', fontSize: '50px', marginBottom: '-30px', textAlign: 'center',
      }}>{"Join over 1000+ hackers in building"}</Typography>
      <h1 className="flex flex-col font-pp-neue-bit text-electric-blue text-[50px] mt-0 mb-10">
        the next generation of responsible AI.
      </h1>
      <div className="w-full max-w-4xl aspect-square relative">
      <div className="absolute -left-[300px] top-[300px] size-28">
          <img
            className="w-40 h-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="absolute -z-10 right-0 top-0 translate-x-1/2 translate-y-1/2 rotate-12 size-28">
          <img
            className="w-40 h-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-32 -translate-y-1/2">
          <img
            className="w-40 h-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="grid grid-rows-11 grid-cols-11 gap-3 z-10 h-full">
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
      </div>
    </div>
  );
}