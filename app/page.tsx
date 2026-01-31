import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Dev Apps", href: "/dev-apps" },
  { name: "Architecture", href: "/architecture" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in whitespace-nowrap overflow-x-auto no-scrollbar max-w-[100vw] px-4">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm duration-500 hover:text-zinc-300 ${item.name === "Home" ? "text-zinc-100 font-semibold" : "text-zinc-500"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Aurora Effect */}
      <div className="aurora-container pointer-events-none">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>
      <h1 className="py-3.5 px-1 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center">
        M.NOR HIDAYAT
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in px-4">
        <h2 className="text-sm text-zinc-500 ">
          Senior Technical Architect × Software Developer × Researcher
          <br />
          Transforming architectural vision into precision through technology
        </h2>
        <div className="mt-4 flex justify-center">
          <a href="https://orcid.org/0009-0004-2211-2406" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
              <mask id="mask0_105_2" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <path d="M0 0H16V16H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_105_2)">
                <path d="M12.0521 0H3.94889C2.21778 0 0.948889 1.26889 0.948889 2.90667V13.0944C0.948889 14.7322 2.21778 16 3.94889 16H12.0522C13.7822 16 15.0511 14.7311 15.0511 13.0944V2.90667C15.0511 1.26889 13.7822 0 12.0511 0H12.0521Z" fill="#009DE0" />
                <path d="M4.22222 13.2311H2.31556V4.76889H4.22222V13.2311Z" fill="white" />
                <path d="M13.7778 13.2311H11.8711V4.76889H13.7778V13.2311Z" fill="white" />
                <path d="M11.0667 10.0444C10.2222 9.33333 9.15556 8.88889 7.99999 8.88889C5.79999 8.88889 4.08889 10.5556 4.08889 12.6667C4.08889 14.7778 5.79999 16 7.99999 16C10.1999 16 11.9111 14.7778 11.9111 12.6667C11.9111 11.7778 11.5556 11.0667 10.9778 10.4444C11.3778 10.0444 11.6889 10.0444 11.0667 10.0444ZM6.22222 12.6667C6.22222 11.5556 7.02222 10.6667 7.99999 10.6667C8.97777 10.6667 9.77777 11.5556 9.77777 12.6667C9.77777 13.7778 8.97777 14.2222 7.99999 14.2222C7.02222 14.2222 6.22222 13.7778 6.22222 12.6667Z" fill="white" />
              </g>
            </svg>
            <span>ORCID: 0009-0004-2211-2406</span>
          </a>
        </div>
        <div className="mt-8 max-w-2xl mx-auto px-4">
          <p className="text-sm text-zinc-400 italic text-center leading-relaxed">
            Years of exploitation taught me invisibility in tech has a cost. I now build open-source solutions that respect creator integrity, protect privacy, and honor craftsmanship in every line.
          </p>
        </div>
      </div>
    </div>
  );

}
