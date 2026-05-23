import Image from "next/image";


export default function Services() {
    return(
        <section className="flex flex-col md:flex-row items-center">
            <div className="relative hidden md:block">
                <Image src="/elipse.png" alt="elipse" width={613} height={613} loading="eager" className="h-auto w-auto absolute top-0 -left-6"/>
                <Image src="/space-2.png" alt="astronaut-2" width={550} height={550} loading="eager" className="h-auto w-auto md:h-[703px] md:w-[600px]"/>
            </div>
            <div className="flex flex-col text-center md:text-left md:w-[535px] px-2 md:px-0 items-center md:items-left pt-10 md:pt-0">
                <div className="rounded-[4px] bg-[#C68313]/20 w-[140px] h-[30px] md:w-[173px] md:h-[37px] flex items-center justify-center">
                    <p className="text-[#C68313] text-[14px] md:text-[18px] font-medium px-3">OUR SERVICES</p>
                </div>
                <p className="text-[30px] md:text-[44px] font-light">We extend our <span className="text-[#C68313]">services</span>
                    <br />
                    <span className="font-bold text-[40px] md:text-[59px]">to the <span className="text-[#C68313]">wide</span> variety.</span>
                </p>
                <p className="text-[15px] mb-4 md:mb-0 md:text-[20px]">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
                <div className="grid grid-cols-2 gap-2 mt-3 items-center justify-center">
                    <div className="rounded-[12px] border-[#C68313] border-2 gap-2 flex flex-row items-center justify-center w-[190px] h-[110px] md:w-[254px] md:h-[154px]">
                        <Image src="/idea-icon.svg" alt="idea" width={91} height={91} className="w-[51px] h-[51px] md:h-auto md:w-auto"/>
                        <p className="font-bold text-[20px] md:text-[23px]">Idea <br /><span className="text-[#C68313]">Creation</span></p>
                    </div>
                    <div className="rounded-[12px] border-[#C68313] border-2 gap-2 flex flex-row items-center justify-center w-[190px] h-[110px] md:w-[254px] md:h-[154px]">
                        <Image src="/analytics-icon.svg" alt="analysis" width={91} height={91} className="w-[51px] h-[51px] md:h-auto md:w-auto"/>
                        <p className="font-bold text-[20px] md:text-[23px]">Market <br /><span className="text-[#C68313]">Analysis</span></p>
                    </div>
                    <div className="rounded-[12px] border-[#C68313] border-2 gap-2 flex flex-row items-center justify-center w-[190px] h-[110px] md:w-[254px] md:h-[154px]">
                        <Image src="/audience-icon.svg" alt="audience" width={91} height={91} className="w-[51px] h-[51px] md:h-auto md:w-auto"/>
                        <p className="font-bold text-[20px] md:text-[23px]">Audience <br /><span className="text-[#C68313]">Identity</span></p>
                    </div>
                    <div className="rounded-[12px] border-[#C68313] border-2 gap-2 flex flex-row items-center justify-center w-[190px] h-[110px] md:w-[254px] md:h-[154px]">
                        <Image src="/fingerprint-icon.svg" alt="identity" width={91} height={91} className="w-[51px] h-[51px] md:h-auto md:w-auto"/>
                        <p className="font-bold text-[20px] md:text-[23px]">Brand <br /><span className="text-[#C68313]">Identity</span></p>
                    </div>
                </div>
            </div>
            <div className="relative md:hidden pt-5">
                <Image src="/elipse.png" alt="elipse" width={356} height={356} loading="eager" className="h-auto w-auto absolute -left-25"/>
                <Image src="/space-2.png" alt="astronaut-2" width={713} height={713} loading="eager" className="h-auto w-auto relative z-5"/>
            </div>
        </section>
    )
}    