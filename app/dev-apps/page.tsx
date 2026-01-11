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
    repoUrl: "https://github.com/me-yeatz/Brutalist-Note",
    downloadUrl: "https://github.com/me-yeatz/Brutalist-Note/archive/refs/heads/main.zip",
    image: "/Apps Preview/brutalist-note.png",
  },
  {
    title: "Chronicle",
    description: "A minimalist personal planning, journaling, and productivity application with AI-powered insights to track your goals and patterns.",
    url: "https://chronicle-ochre.vercel.app/",
    repoUrl: "https://github.com/me-yeatz/Chronicle",
    downloadUrl: "https://github.com/me-yeatz/Chronicle/archive/refs/heads/main.zip",
    image: "/Apps Preview/chronicle.png",
  },
  {
    title: "Gridblock",
    description: "A unique layout and grid-based design tool for visualizing complex spatial arrangements and architectural compositions.",
    url: "https://gridblock-drab.vercel.app/",
    repoUrl: "https://github.com/me-yeatz/Gridblock",
    downloadUrl: "https://github.com/me-yeatz/Gridblock/archive/refs/heads/main.zip",
    image: "/Apps Preview/gridblock.png",
  },
  {
    title: "Kanbaneo",
    description: "Modern, streamlined Kanban board for project management. Organize tasks, track progress, and improve team productivity with visual workflows.",
    url: "https://kanbaneo.vercel.app/",
    repoUrl: "https://github.com/me-yeatz/Kanbaneo",
    downloadUrl: "https://github.com/me-yeatz/Kanbaneo/archive/refs/heads/main.zip",
    image: "/Apps Preview/kanbaneo.png",
  },
  {
    title: "Healing Journal",
    description: "A supportive digital space for personal growth and emotional recovery. Track your journey, reflections, and progress with mindful journaling.",
    url: "https://healing-journal-theta.vercel.app/",
    repoUrl: "https://github.com/me-yeatz/Healing-Journal",
    downloadUrl: "https://github.com/me-yeatz/Healing-Journal/archive/refs/heads/main.zip",
    image: "/Apps Preview/healing-journal.png",
  },
  {
    title: "Monolith Ledge",
    description: "Project planning and organization application. Manage your architectural projects, tasks, and documentation in one powerful platform.",
    url: "https://monolith-ledge.vercel.app",
    repoUrl: "https://github.com/me-yeatz/Monolith-Ledge",
    downloadUrl: "https://github.com/me-yeatz/Monolith-Ledge/archive/refs/heads/main.zip",
    image: "/Apps Preview/monolith-ledge.png",
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
              <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-5 h-5" />
              <span className="text-sm font-medium">HTML5</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS3" className="w-5 h-5" />
              <span className="text-sm font-medium">CSS3</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-5 h-5" />
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-5 h-5" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/electron/47848F" alt="Electron" className="w-5 h-5" />
              <span className="text-sm font-medium">Electron</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-5 h-5" />
              <span className="text-sm font-medium">Figma</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
              <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" className="w-5 h-5" />
              <span className="text-sm font-medium">Vite</span>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Philosophy Section */}
        <div className="max-w-6xl mx-auto space-y-4">
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
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-zinc-100">My Applications</h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <Card key={app.title}>
                <article className="relative w-full h-full flex flex-col overflow-hidden">
                  <div className="aspect-video w-full relative overflow-hidden group">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3">
                      {app.description}
                    </p>

                    <div className="flex flex-col gap-3">
                      <Link
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold transition-all bg-zinc-100 text-zinc-900 rounded-md hover:bg-zinc-300 w-full"
                      >
                        <span>Open Live App</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>

                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={app.downloadUrl}
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold transition-all border border-zinc-700 text-zinc-300 rounded-md hover:bg-zinc-800 hover:text-zinc-100"
                        >
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12l-4-4h2.5V3h3v5H12L8 12zM2 13v1h12v-1H2z" />
                          </svg>
                          <span>Download</span>
                        </Link>

                        <Link
                          href={app.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold transition-all border border-zinc-700 text-zinc-300 rounded-md hover:bg-zinc-800 hover:text-zinc-100"
                        >
                          <span>Repository</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
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
