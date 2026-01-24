import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Sample research articles - you'll add your real research here
const researchItems = [
  {
    title: "Freelance Defender Apps: An Open-Source Framework to Counter Systemic Exploitation in Malaysia's Digital Gig Economy for Architects and Developers",
    description:
      "Freelance Defender Apps is an open-source, cloud-native framework I developed to address systemic exploitation in Malaysia's digital gig economy, with a focus on freelance architects and developers. It rebalances power dynamics by integrating technical-ethical tools for fair contracting, automated compliance, and transparent project governance",
    date: "2024-01-15",
    category: "Architect freelancer rights",
    readTime: "5 min read",
  },
  {
    title: "Streamlining Hybrid Workflows for Malaysian AEC Building Approvals",
    description:
      "This research addresses inefficiencies in Malaysia's building approval process where mandatory dual online and hardcopy submissions cause delays, increase costs, and disrupt project timelines. I propose a practical framework to streamline these hybrid workflows, integrating clearer guidelines and process improvements to create a faster, more predictable approval system for architects, engineers, and contractors.",
    date: "2024-01-10",
    category: "AEC Process Optimization",
    readTime: "8 min read",
  },
  // Add more research items here
];

export default function ResearchPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Research
          </h2>
          <p className="mt-4 text-zinc-400">
            Explorations, experiments, and insights from my technical research and learning journey.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Research Grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {researchItems.map((item) => (
              <Card key={item.title}>
                <article className="relative w-full h-full p-6">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      {item.category}
                    </span>
                    <div className="text-xs text-zinc-500">
                      <time dateTime={item.date}>
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                        }).format(new Date(item.date))}
                      </time>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">{item.readTime}</span>
                    <span className="text-sm text-zinc-300 hover:text-zinc-100">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </article>
              </Card>
            ))}
          </div>

          {/* Research Categories */}
          <div className="w-full h-px bg-zinc-800" />

          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">
              Research Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">
                    Technical Experiments
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Hands-on experiments with new technologies, frameworks, and tools
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">
                    Case Studies
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Deep dives into real-world problems and solutions
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">
                    Learning Notes
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Insights and key takeaways from continuous learning
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
