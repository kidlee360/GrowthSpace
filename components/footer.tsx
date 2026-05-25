// app/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
//import {
//  Facebook,
//  Instagram,
//  Linkedin,
//} from "lucide-react";

const services = [
  "SEO",
  "Content Marketing",
  "Email Marketing",
  "Brand Development",
  "Influencer Marketing",
];

const products = [
  "SEO Optimizer",
  "Content Reach Check",
  "Brand Identity Builder",
  "Email/Ads Marketing",
  "Connect with Influencers",
];

const legal = [
  "Contact",
  "Privacy Policy",
  "Terms & Conditions",
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F7F7F7] pt-16 overflow-hidden">
      
      {/* TOP BORDER */}
      <div className="mx-auto h-[1px] max-w-6xl bg-[#C68313]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-14 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Growth<span className="text-[#C68313]">Space</span>
          </h2>

          <p className="mt-2 text-sm text-[#6E6E6E]">
            Where growth begins...
          </p>

          {/* ADDRESS */}
          <div className="mt-10">
            <h4 className="mb-3 text-sm font-semibold text-black">
              Address:
            </h4>

            <p className="text-sm leading-6 text-[#555555]">
              4465 Benson Park Drive
              <br />
              Oklahoma, USA
            </p>
          </div>

          {/* CONTACT */}
          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-black">
              Contact Details:
            </h4>

            <p className="text-sm leading-6 text-[#555555]">
              405-415-9245
              <br />
              405-658-2022
              <br />
              growthspace@support.com
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-5 pt-11 md:pt-0 text-sm font-semibold text-[#C68313]">
            Services:
          </h3>

          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="#"
                  className="text-sm text-[#444444] transition hover:text-[#C68313]"
                >
                  • {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="mb-5 text-sm font-semibold text-[#C68313]">
            Products:
          </h3>

          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product}>
                <Link
                  href="#"
                  className="text-sm text-[#444444] transition hover:text-[#C68313]"
                >
                  • {product}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#C68313]">
              Legal:
            </h3>

            <ul className="space-y-4">
              {legal.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#444444] transition hover:text-[#C68313]"
                  >
                    • {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex items-center gap-3 absolute bottom-5 right-5 z-5">
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C68313] text-white transition hover:scale-105"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>

            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C68313] text-white transition hover:scale-105"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>

            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C68313] text-white transition hover:scale-105"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-60 md:bottom-auto md:top-3/6 left-0 w-screen aspect-square opacity-60 bg-radial  from-[#C68313] to-[#C68313]/0 rounded-full" />

      {/* BOTTOM BAR */}
      <div className="flex h-14 items-center justify-center bg-[#C68313] px-6">
        <p className="text-center text-xs text-white">
          © 2026, GrowthSpace.inc
        </p>
      </div>
    </footer>
  );
}