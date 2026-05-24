'use client';

import Image from "next/image";
import { useRef, useState } from "react";

export default function ReviewSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            // scrollWidth minus clientWidth equals the maximum scrollable distance
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            if (maxScroll > 0) {
                const index = Math.round((scrollLeft / maxScroll) * 3); // Multiply by (total items - 1)
                setActiveIndex(index);
            }
        }
    };

    const scrollTo = (index: number) => {
        if (scrollRef.current) {
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({
                left: (maxScroll / 3) * index,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full flex flex-col items-center py-20 lg:py-28 bg-[#F7F7F7] overflow-hidden">
            <div className="inline-flex rounded-md bg-[#C68313]/20 px-4 py-2">
              <span className="text-sm font-medium uppercase tracking-wide text-[#C68313]">
                Our Reach
              </span>
            </div>
            <h2 className='md:text-[70px] text-[37px] font-semibold text-center'>
                What <span className="text-[#C68313]">people</span> say about us.
            </h2>
            <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying print, graphic 
            </p>
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex w-full overflow-x-auto gap-6 px-6 py-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                <div className="rounded-[14px] border-2 border-[#C68313] p-8 shrink-0 w-[300px] md:w-[400px] snap-center items-center flex flex-col text-center">
                    <Image
                        src="/apostrophe.svg"
                        alt="Apostrophe"
                        width={64}
                        height={64}
                        className="object-contain pb-4 self-start w-auto h-auto"
                    />
                    <p className="opacity-70">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying print, graphic 
                    </p>
                    <h3 className="text-[20px] font-medium mt-4 text-[#C68313]">
                        Angela White
                    </h3>
                    <p className="opacity-60">
                        CEO- Market Movers
                    </p>
                </div>
                <div className="rounded-[14px] border-2 border-[#C68313] p-8 shrink-0 w-[300px] md:w-[400px] snap-center items-center flex flex-col text-center">
                    <Image
                        src="/apostrophe.svg"
                        alt="Apostrophe"
                        width={64}
                        height={64}
                        className="object-contain pb-4 self-start"
                    />
                    <p className="opacity-70">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying print, graphic 
                    </p>
                    <h3 className="text-[20px] font-medium mt-4 text-[#C68313]">
                        Angela White
                    </h3>
                    <p className="opacity-60">
                        CEO- Market Movers
                    </p>
                </div>
                <div className="rounded-[14px] border-2 border-[#C68313] p-8 shrink-0 w-[300px] md:w-[400px] snap-center items-center flex flex-col text-center">
                    <Image
                        src="/apostrophe.svg"
                        alt="Apostrophe"
                        width={64}
                        height={64}
                        className="object-contain pb-4 self-start"
                    />
                    <p className="opacity-70">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying print, graphic 
                    </p>
                    <h3 className="text-[20px] font-medium mt-4 text-[#C68313]">
                        Angela White
                    </h3>
                    <p className="opacity-60">
                        CEO- Market Movers
                    </p>
                </div>
                <div className="rounded-[14px] border-2 border-[#C68313] p-8 shrink-0 w-[300px] md:w-[400px] snap-center items-center flex flex-col text-center">
                    <Image
                        src="/apostrophe.svg"
                        alt="Apostrophe"
                        width={64}
                        height={64}
                        className="object-contain pb-4 self-start"
                    />
                    <p className="opacity-70">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying print, graphic 
                    </p>
                    <h3 className="text-[20px] font-medium mt-4 text-[#C68313]">
                        Angela White
                    </h3>
                    <p className="opacity-60">
                        CEO- Market Movers
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-3 mt-4">
                {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            activeIndex === index ? "bg-[#C68313]" : "bg-black/20"
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}