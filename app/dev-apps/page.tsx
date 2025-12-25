import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Sample apps data - you'll add your real apps here
const apps = [
  {
    title: "App Name 1",
    description: "Brief description of your app and what it does",
    url: "https://your-app-1.vercel.app",
    logo: "/M_Logo_Img03.png", // Use image path instead of emoji
  },
  {
    title: "App Name 2",
    description: "Brief description of your app and what it does",
    url: "https://your-app-2.vercel.app",
    logo: "/M_Logo_Img03.png",
  },
  // Add more apps here
];

export default function DevAppsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Dev Apps
          </h2>
          <p className="mt-4 text-zinc-400">
            Explore my web applications and download them directly to use.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">My Philosophy</h3>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <p className="text-zinc-400 leading-relaxed">
              [Add your philosophy about creating apps here - your approach, principles,
              what drives you to build applications, and what makes your apps unique]
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              I believe in creating apps that are [user-friendly / powerful / innovative / accessible]...
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Apps Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-100 mb-8">My Applications</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <Card key={app.title}>
                <Link href={app.url} target="_blank" rel="noopener noreferrer">
                  <article className="relative w-full h-full p-6 hover:bg-zinc-900/50 transition-colors">
                    <div className="w-16 h-16 mb-4 relative">
                      <Image
                        src={app.logo}
                        alt={app.title}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{app.description}</p>
                    <div className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100">
                      <span>Open App</span>
                      <span aria-hidden="true">&rarr;</span>
                    </div>
                  </article>
                </Link>
              </Card>
            ))}
          </div>

          {/* Instructions for users */}
          <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h4 className="text-lg font-semibold text-zinc-100 mb-2">
              How to Install Web Apps
            </h4>
            <p className="text-zinc-400 mb-4">
              Click on any app above to open it. You can install these web apps directly
              to your device for easy access:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>On mobile: Tap the share button and select "Add to Home Screen"</li>
              <li>On desktop: Click the install icon in the address bar</li>
              <li>Or simply bookmark the link for quick access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
