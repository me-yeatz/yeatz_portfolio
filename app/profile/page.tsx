import React from "react";
import { Navigation } from "../components/nav";

export default function ProfilePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Profile
          </h2>
          <p className="mt-4 text-zinc-400">
            Welcome to my profile. Learn more about who I am and what I do.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* About Me Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">About Me</h3>
            <p className="text-zinc-400 leading-relaxed">
              Hi, I'm <span className="text-zinc-100 font-semibold">me.yeatz</span>.
              [Add your personal introduction here - who you are, what you do, your background]
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-zinc-300">Frontend Development</p>
              </div>
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-zinc-300">Backend Development</p>
              </div>
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-zinc-300">Architecture Design</p>
              </div>
              {/* Add more skills as needed */}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-zinc-800 pl-4">
                <h4 className="text-lg font-semibold text-zinc-100">[Job Title / Role]</h4>
                <p className="text-sm text-zinc-500">[Company / Organization] • [Date Range]</p>
                <p className="mt-2 text-zinc-400">
                  [Brief description of your role and achievements]
                </p>
              </div>
              {/* Add more experience entries */}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Education</h3>
            <div className="border-l-2 border-zinc-800 pl-4">
              <h4 className="text-lg font-semibold text-zinc-100">[Degree / Certification]</h4>
              <p className="text-sm text-zinc-500">[Institution] • [Year]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
