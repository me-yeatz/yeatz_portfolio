import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

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
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
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
      </div>
    </div>
  );
}
