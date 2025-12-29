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

const meteors = [
  { top: "5%", left: "10%", delay: "0s", duration: "4s" },
  { top: "15%", left: "70%", delay: "1.5s", duration: "5s" },
  { top: "25%", left: "30%", delay: "3s", duration: "4.5s" },
  { top: "10%", left: "85%", delay: "2s", duration: "5.5s" },
  { top: "35%", left: "50%", delay: "4s", duration: "4s" },
  { top: "8%", left: "45%", delay: "0.5s", duration: "5s" },
  { top: "20%", left: "20%", delay: "2.5s", duration: "4.5s" },
  { top: "12%", left: "60%", delay: "3.5s", duration: "5s" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm duration-500 hover:text-zinc-300 ${
                item.name === "Home" ? "text-zinc-100 font-semibold" : "text-zinc-500"
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

      {/* Shooting Stars / Meteors */}
      {meteors.map((meteor, index) => (
        <span
          key={index}
          className="meteor animate-meteor pointer-events-none"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        me.yeatz
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Senior Technical Architect × Self-Taught Developer
          <br />
          Bridging traditional architecture with modern digital innovation
        </h2>
      </div>
    </div>
  );

}
