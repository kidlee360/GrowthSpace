// app/components/InfoSection.tsx

import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:justify-between lg:px-12">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          {/* Tag */}
          <div className="mb-6 inline-flex rounded-md bg-[#C68313]/20 px-4 py-2">
            <span className="text-sm font-medium uppercase tracking-wide text-[#C68313]">
              Our Reach
            </span>
          </div>

          {/* Heading */}
          <h2 className="leading-[0.95] tracking-tight text-black">
            <span className="block text-5xl font-light md:text-5xl">
              We are{" "}
              <span className="text-[#C68313]">present</span>
            </span>

            <span className="mt-3 block text-6xl font-semibold md:text-[65px]">
              all over the
            </span>

            <span className="mt-3 block text-9xl font-bold text-[#C68313] md:text-[170px]">
              world.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#555555] text-justify md:text-left">
            GrowthSpace is a global leader in digital marketing and business development, helping companies thrive across all continents. We connect brands with their audiences worldwide, delivering impactful results and fostering innovation.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">
          
          {/* Background Circle */}
          <Image
            src="/elipse.png"
            alt="Background Circle"
            width={500}
            height={500}
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:-top-20 md:-right-21 md:translate-x-0 md:translate-y-0"
            priority
          />

          {/* Astronaut */}
          <div className="relative z-10">
            <Image
              src="/astronaut-3.png"
              alt="Astronaut"
              width={644}
              height={644}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}