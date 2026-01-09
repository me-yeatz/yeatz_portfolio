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
        {/* Tech Stack Header */}
        <div className="max-w-6xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center lg:text-left">
            Dev Apps
          </h2>
          <p className="mt-4 text-zinc-400 text-center lg:text-left">
            Explore my web applications and download them directly to use.
          </p>

          {/* Tech Stack Badges */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.0001 2C6.47742 2 2 6.47742 2 12.0001C2 17.5228 6.47742 22 12.0001 22C17.5228 22 22 17.5228 22 12.0001C22 6.47742 17.5228 2 12.0001 2ZM12.0001 20C7.58178 20 4 16.4182 4 12.0001C4 7.58178 7.58178 4 12.0001 4C16.4182 4 20 7.58178 20 12.0001C20 16.4182 16.4182 20 12.0001 20ZM12 6L15 10H13V14H11V10H9L12 6Z"/>
              </svg>
              <span className="text-sm font-medium">HTML5</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">CSS3</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">Electron</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">Figma</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v10h-2z"/>
              </svg>
              <span className="text-sm font-medium">Vite</span>
            </div>
          </div>
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
