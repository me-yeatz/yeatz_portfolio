import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Your Vercel deployed apps
const apps = [
  {
    title: "Brutalist Notes",
    description: "Note-taking and documentation system designed for technical professionals. Capture, organize, and retrieve your architectural notes with ease.",
    url: "https://brutalist-note.vercel.app",
    logo: "https://brutalist-note.vercel.app/logo.png",
  },
  {
    title: "Chronicle",
    description: "A minimalist personal planning, journaling, and productivity application with AI-powered insights to track your goals and patterns.",
    url: "https://chronicle-yeatz.vercel.app",
    logo: "https://chronicle-yeatz.vercel.app/logo.png",
  },
  {
    title: "Monolith Ledge",
    description: "Project planning and organization application. Manage your architectural projects, tasks, and documentation in one powerful platform.",
    url: "https://monolith-ledge.vercel.app",
    logo: "https://monolith-ledge.vercel.app/logo.png",
  },
];

export default function DevAppsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32">
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
          <Card>
            <div className="p-6">
              <p className="text-zinc-400 leading-relaxed">
                As a self-taught developer with 10+ years in architecture, I create applications that solve real-world
                problems I've encountered in my professional practice. Each app is born from a genuine need to improve
                workflows and boost productivity for technical professionals.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                I believe in <span className="text-zinc-100 font-semibold">"AI as teammates, not tools"</span> -
                building with soul, crediting all contributors, and creating applications that enhance human capability
                rather than replace it. My apps bridge the gap between traditional architecture and modern digital innovation.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed italic">
                Every line of code is crafted to make your work easier, your processes smoother, and your creativity unbound.
              </p>
            </div>
          </Card>
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
