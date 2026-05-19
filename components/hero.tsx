import Image from "next/image";


export default function Hero() {
    return(
        <section className="relative bg-[#F7F7F7] flex flex-col md:flex-row gap-10 md:gap-20 justify-between md:px-25 h-full w-full">
            <div className="md:h-[716px] md:w-[613px] flex flex-col gap-[120px] pt-[130px] z-5">
                <div className="gap-2 flex flex-col items-start self-start">
                    <div className="rounded-[8px] bg-[#C68313]/20 w-[173px] h-[37px] flex items-center justify-center">
                        <p className="text-[#C68313] text-[20px] font-medium px-3">High Growth</p>
                        <Image src='/growth-icon.svg' alt="Growth Icon" width={24} height={24} />
                    </div>
                    <p className="text-[50px] font-light">
                        We <span className="text-[#C68313]">simplify</span> growth <br />
                        <span className="font-semibold text-[80px]">in <span className="text-[#C68313]">growth</span>space.</span>
                    </p>
                    <p className="text-[20px]">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
                    </p>
                    <div className="flex flex-row gap-4">
                        <button className="rounded-[8px] px-3 py-2 bg-[#C68313] hover:bg-[#A86F0F] font-semibold">Register</button>
                        <button className="border-[#C68313] border rounded-[8px] px-3 py-2 text-[#C68313] hover:bg-[#A86F0F] font-semibold">Services</button>
                    </div>
                </div>
                <div className="w-[395px] h-[136px] self-start">
                    <div className="flex flex-row"><p className="text-[#C68313] font-semibold">Our partners </p><div className="w-[112px] border-b border-[#C68313] h-[1px] m-2 self-end"></div></div>
                    <div className="flex flex-row gap-4">
                        <Image src="/dribble.png" alt="dribble" width={112} height={36} className="self-center h-auto w-auto"/>
                        <Image src="/yahoo.png" alt="yahoo" width={112} height={112} className="h-auto w-auto"/>
                        <Image src="/google.png" alt="google" width={112} height={112} className="h-auto w-auto"/>
                    </div>
                </div>
            </div>
            <Image src="/elipse.png" alt="Elipse" width={650} height={650} loading="eager" className="h-auto w-auto md:absolute md:right-0 md:bottom-0"/>
            <Image src="/space-1.png" alt="space cadet" width={613} height={613} loading="eager" className="h-auto w-auto md:absolute md:right-0 md:bottom-10 z-5"/>
        </section>
    )
}