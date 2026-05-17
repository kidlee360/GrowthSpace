'use client';
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <nav className="bg-white text-black p-3 flex justify-between ">
            <div className="flex items-center gap-[36px]">
                <Image src="/growth.svg" alt="Growth" width={40} height={40} loading="eager" />
                <p className="font-semibold text-[26px]">Growth<span className="text-[#C68313]">Space</span></p>
            </div>
            <div className="flex w-[440px] justify-between items-center">
                <a href="#" className="text-[#C68313] hover:text-gray-300 text-[18px] font-medium">Home</a>
                <a href="#" className=" hover:text-gray-300 text-[18px] font-medium">Services</a>
                <a href="#" className=" hover:text-gray-300 text-[18px] font-medium">About</a>
                <a href="#" className=" hover:text-gray-300 text-[18px] font-medium">Contact</a>
            </div>
            <button className="bg-[#C68313] hover:bg-[#a56a0f] text-[18px] font-medium py-2 px-4 rounded-md">
                Register
            </button>
        </nav>
    )
    //<button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
    //                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      //                  </svg>
       //             </button>
}
