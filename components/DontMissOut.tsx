"use client";

export default function DontMissOut() {
  return (
    <div className=" px-10 py-28 md:px-0">
      <p className="mb-6 text-center font-pp-mondwest text-3xl text-white sm:text-4xl xl:text-5xl">
        Don&apos;t Miss Out.
      </p>
      <p className="mb-1 text-center text-base text-white sm:text-xl xl:text-2xl">
        Saturday, June 22 at 9am PT - Sunday, June 23 at 6pm PT
      </p>
      <p className="mb-8 text-center text-base text-white sm:text-xl xl:text-2xl">
        UC Berkeley, MLK Student Union Building
      </p>
      <div className="mx-auto text-center">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://apply.hackberkeley.org"
        >
          <button className="mx-auto h-[38.4px] w-[110.4px] bg-white text-base text-opacity-0 hover:bg-[#e6e6e6] sm:h-[48px] sm:w-[138px] sm:text-xl xl:h-[60px] xl:w-[172.5px] xl:text-2xl">
            Apply
          </button>
        </a>
      </div>
    </div>
  );
}
