'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <nav className="relative bg-white text-black p-3 flex justify-between items-center">
            {/* Mobile Backdrop Overlay */}
            {isExpanded && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden" 
                    onClick={toggleMenu}
                />
            )}

            {/* Mobile Side Slider (Drawer) */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden p-6 flex flex-col gap-8`}>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-[22px]">Growth<span className="text-[#C68313]">Space</span></p>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-6">
                    <a href="#" className="text-[#C68313] text-[18px] font-medium" onClick={toggleMenu}>Home</a>
                    <a href="#" className="text-black hover:text-[#C68313] text-[18px] font-medium" onClick={toggleMenu}>Services</a>
                    <a href="#" className="text-black hover:text-[#C68313] text-[18px] font-medium" onClick={toggleMenu}>About</a>
                    <a href="#" className="text-black hover:text-[#C68313] text-[18px] font-medium" onClick={toggleMenu}>Contact</a>
                </div>
            </div>

            <button onClick={toggleMenu} className="md:hidden hover:text-gray-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isExpanded ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
            <div className="gap-[11px] flex items-center md:gap-[36px]">
                <Image src="/growth.svg" alt="Growth" width={40} height={40} loading="eager" />
                <p className="font-semibold text-[26px]">Growth<span className="text-[#C68313]">Space</span></p>
            </div>
            <div className="hidden w-[440px] md:flex justify-between items-center">
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
    
}
