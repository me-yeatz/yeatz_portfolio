import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Instagram, MapPin } from "lucide-react";

// Sample architecture projects - you'll add your real projects here
const projects = [
  {
    title: "Project Name 1",
    description: "Description of the architecture design or system",
    category: "Design Render",
    image: "/placeholder-architecture.jpg", // Add your image path
    details: "Tech stack, design patterns, or key features",
  },
  {
    title: "Project Name 2",
    description: "Description of the architecture design or system",
    category: "Complete Project",
    image: "/placeholder-architecture.jpg",
    details: "Tech stack, design patterns, or key features",
  },
  // Add more projects here
];

export default function ArchitecturePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Architecture
          </h2>
          <p className="mt-4 text-zinc-400">
            Explore my system designs, architecture diagrams, and completed technical projects.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Categories */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Design Renders Section */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Design Renders</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.category === "Design Render")
                .map((project) => (
                  <Card key={project.title}>
                    <article className="relative w-full h-full p-6">
                      {/* Image placeholder - replace with actual images */}
                      <div className="w-full h-48 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-zinc-600">Design Render Image</span>
                      </div>
                      <h4 className="text-xl font-bold text-zinc-100 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-zinc-400 mb-3">{project.description}</p>
                      <p className="text-sm text-zinc-500">{project.details}</p>
                    </article>
                  </Card>
                ))}
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          {/* Complete Projects Section */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Complete Projects</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.category === "Complete Project")
                .map((project) => (
                  <Card key={project.title}>
                    <article className="relative w-full h-full p-6">
                      {/* Image placeholder - replace with actual images */}
                      <div className="w-full h-48 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-zinc-600">Project Image</span>
                      </div>
                      <h4 className="text-xl font-bold text-zinc-100 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-zinc-400 mb-3">{project.description}</p>
                      <p className="text-sm text-zinc-500">{project.details}</p>
                    </article>
                  </Card>
                ))}
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          {/* Other Architecture Work Section */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">
              System Architecture & Diagrams
            </h3>
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <div className="p-6">
                  <p className="text-zinc-400">
                    Add your system architecture diagrams, technical documentation, and
                    infrastructure designs here. These can include:
                  </p>
                  <ul className="mt-4 space-y-2 text-zinc-400 list-disc list-inside">
                    <li>System architecture diagrams</li>
                    <li>Database schemas</li>
                    <li>API designs and documentation</li>
                    <li>Infrastructure and deployment diagrams</li>
                    <li>Microservices architecture</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Collaborations Teams */}
        <div className="max-w-6xl mx-auto mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-zinc-100 text-center">Collaboration Teams</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex flex-col items-center group max-w-xs text-center">
              <div className="w-40 h-40 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:bg-zinc-700 mb-4">
                <img
                  src="/collaboration team/AMsquare Interior.jpg"
                  alt="AMsquare Interior"
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <h4 className="text-zinc-100 font-bold text-lg leading-tight">
                AMSQUARE INTERIORS SDN. BHD.
              </h4>
              <span className="text-zinc-500 text-xs mb-2">(1347956-X)</span>
              <div className="flex items-start gap-2 text-zinc-400 text-sm mb-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  A1-03-13A, Arcoris Business Suite, Jalan Kiara<br />
                  50480 Mont Kiara, Kuala Lumpur.
                </p>
              </div>
              <a
                href="https://www.instagram.com/amsquare_interiors/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors duration-200 text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>@amsquare_interiors</span>
              </a>
            </div>
            <div className="flex flex-col items-center group max-w-xs text-center">
              <div className="w-40 h-40 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:bg-zinc-700 mb-4">
                <img
                  src="/collaboration team/Khaja Studio.png"
                  alt="Khaja Studio"
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <h4 className="text-zinc-100 font-bold text-lg leading-tight">
                KHAJA STUDIO
              </h4>
              <span className="text-sm text-zinc-400 mb-2">(003162092-M)</span>
              <div className="flex items-start gap-2 text-zinc-400 text-sm mb-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  No.2, Jalan Merah Pelangi Satu, U9/19a,<br />
                  Kelab Golf Monterez, 40150 Shah Alam.
                </p>
              </div>
              <a
                href="https://www.instagram.com/khajastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors duration-200 text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>@khajastudio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
