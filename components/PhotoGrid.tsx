import { Typography } from "@mui/material";

export default function PhotoGrid() {
  return (
    <div className="relative z-10 flex min-h-screen min-w-full flex-col items-center overflow-hidden px-8 pb-12 pt-24">
      <h1 className="-mb-5 font-pp-mondwest text-4xl text-white">
        Join 1000+ hackers in building
      </h1>
      <h1 className="mb-10 mt-6 font-pp-mondwest text-4xl text-electric-blue">
        the next generation of responsible AI.
      </h1>
      <div className="relative aspect-square w-full max-w-4xl">
        <div className="absolute -left-[100px] top-[300px] size-40 rotate-45">
          <img
            className="h-40 w-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="absolute right-0 top-0 -z-10 size-28 translate-x-1/2 translate-y-1/2 rotate-12">
          <img
            className="h-40 w-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        <div className="absolute bottom-0 right-0 -translate-y-1/2 translate-x-32">
          <img
            className="h-40 w-40"
            src={`/images/silver-star.svg`}
            alt="star"
          />
        </div>
        {/* Grid for desktop and larger devices */}
        <div className="z-10 hidden h-full grid-cols-11 grid-rows-11 gap-3 md:grid">
          <div className="col-span-3 col-start-1 row-span-2 row-start-1">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0569.png`}
              alt={`DSC_0569`}
            />
          </div>
          <div className="col-span-3 col-start-4 row-span-2 row-start-1">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0493.png`}
              alt={`DSC_0493`}
            />
          </div>
          <div className="col-span-3 col-start-7 row-span-3 row-start-1">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0444.png`}
              alt={`DSC_0444`}
            />
          </div>
          <div className="col-span-2 col-start-10 row-span-3 row-start-1">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0235.png`}
              alt={`DSC_0235`}
            />
          </div>
          <div className="col-span-2 col-start-1 row-span-3 row-start-3">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0655.png`}
              alt={`bear`}
            />
          </div>
          <div className="col-span-4 col-start-3 row-span-3 row-start-3">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0703.png`}
              alt={`talk`}
            />
          </div>
          <div className="col-span-5 col-start-7 row-span-4 row-start-4">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0683.png`}
              alt={`big one`}
            />
          </div>
          <div className="col-span-4 col-start-1 row-span-3 row-start-6">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0532.png`}
              alt={`cube`}
            />
          </div>
          <div className="col-span-2 col-start-5 row-span-4 row-start-6">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0274.png`}
              alt={`water`}
            />
          </div>
          <div className="col-span-2 col-start-7 row-span-4 row-start-8">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0342.png`}
              alt={`blue shirt`}
            />
          </div>
          <div className="col-span-3 col-start-9 row-span-4 row-start-8">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0419.png`}
              alt={`presentation`}
            />
          </div>
          <div className="col-span-4 col-start-1 row-span-3 row-start-9">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0119.png`}
              alt={`hack`}
            />
          </div>
          <div className="col-span-2 col-start-5 row-span-2 row-start-10">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0022.png`}
              alt={`future`}
            />
          </div>
        </div>
        {/* Smaller layout for mobile */}
        <div className="z-10 grid h-full grid-cols-6 grid-rows-8 gap-2 md:hidden">
          <div className="col-span-3 col-start-1 row-span-1 row-start-1">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0569.png`}
              alt={`DSC_0569`}
            />
          </div>
          <div className="col-span-3 col-start-4 row-span-1 row-start-1">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0493.png`}
              alt={`DSC_0493`}
            />
          </div>
          <div className="col-span-2 col-start-1 row-span-2 row-start-2">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0655.png`}
              alt={`bear`}
            />
          </div>
          <div className="col-span-4 col-start-3 row-span-2 row-start-2">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0703.png`}
              alt={`talk`}
            />
          </div>
          <div className="col-span-4 col-start-1 row-span-2 row-start-4">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0532.png`}
              alt={`cube`}
            />
          </div>
          <div className="col-span-2 col-start-5 row-span-3 row-start-4">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0274.png`}
              alt={`water`}
            />
          </div>

          <div className="col-span-4 col-start-1 row-span-3 row-start-6">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0119.png`}
              alt={`hack`}
            />
          </div>
          <div className="col-span-2 col-start-5 row-span-2 row-start-7">
            <img
              className="h-full w-full object-cover"
              src={`/images/image-grid/DSC_0022.png`}
              alt={`future`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
