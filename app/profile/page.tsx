import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function ProfilePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            M. Nor Hidayat
          </h2>
          <p className="mt-4 text-xl text-zinc-300">
            Senior Technical Architect
          </p>
          <p className="mt-2 text-zinc-400">
            10+ years transforming architectural visions into precise, construction-ready documentation
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-6xl mx-auto space-y-8">
          {/* About Me Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">About Me</h3>
            <Card>
              <div className="p-6">
                <p className="text-zinc-400 leading-relaxed">
                  Senior Technical Architect with 10+ years transforming architectural visions into precise,
                  construction-ready documentation. Expert in managing full project lifecycles from concept to approval,
                  specializing in UBBL compliance and technical accuracy. Proven track record of delivering complex
                  projects on time while maintaining rigorous quality standards across multiple architectural firms
                  and personal studio practice.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Founded <span className="text-zinc-100 font-semibold">M.Y.E.A.T.Z Archstudio</span>, successfully
                  managing independent architectural consultancy since 2019. Self-taught full-stack developer, creating
                  custom productivity applications to solve architecture industry pain points.
                </p>
              </div>
            </Card>
          </div>

          {/* Core Expertise */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Core Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">Technical Drawing & Documentation</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">UBBL Compliance & Submission</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">Project Management</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">BIM & 3D Modeling</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">Construction Coordination</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">Team Leadership</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">Sustainable Design</p>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <p className="text-zinc-300">Client Relations</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Software Mastery */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Software Mastery</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["AutoCAD", "SketchUp", "Adobe Photoshop", "Adobe Illustrator", "V-Ray",
                "Enscape", "Lumion", "Primavera", "Microsoft Office", "Power Point"].map((software) => (
                <Card key={software}>
                  <div className="p-3 text-center">
                    <p className="text-zinc-300 text-sm">{software}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Professional Experience</h3>
            <div className="space-y-6">
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-100">Founder & Project Architect</h4>
                      <p className="text-zinc-300">M.Y.E.A.T.Z Archstudio</p>
                    </div>
                    <span className="text-sm text-zinc-500">Sept 2019 – Present</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">Seksyen 7, Shah Alam</p>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Founded and operate independent architectural consultancy serving residential and commercial clients</li>
                    <li>• Manage complete project lifecycle: client consultation, conceptual design, technical documentation, submission, and construction oversight</li>
                    <li>• Ensure UBBL and local authority compliance across all projects with 100% approval rate</li>
                    <li>• Coordinate with structural engineers, M&E consultants, contractors, and regulatory bodies</li>
                    <li>• Developed innovative digital workflows integrating traditional architecture with modern productivity tools</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-100">Senior Technical Architect</h4>
                      <p className="text-zinc-300">R.AR Architect & Engineering Sdn. Bhd</p>
                    </div>
                    <span className="text-sm text-zinc-500">Jan 2019 – Aug 2019</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">Taman TTDI Jaya, Shah Alam</p>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Led preparation and review of technical drawings ensuring full compliance with UBBL</li>
                    <li>• Managed submission documentation process with local authorities</li>
                    <li>• Achieved 98% first-submission approval rate through meticulous attention to regulatory details</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-100">Assistant Architect</h4>
                      <p className="text-zinc-300">Neuformation Architect & Others</p>
                    </div>
                    <span className="text-sm text-zinc-500">2012 – 2018</span>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Progressed through various architectural roles at multiple firms including Aliran Cipta Arkitek,
                    Raintree Building Construction, and FRN Solutions, building expertise in technical documentation,
                    compliance, and project coordination.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Education & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Education</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-300 font-semibold">BSc (Hons) Construction Management</p>
                      <p className="text-sm text-zinc-500">Universiti Teknologi MARA (UiTM) • 2019</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 font-semibold">Diploma in Architectural Technology</p>
                      <p className="text-sm text-zinc-500">UniKL MITEC • 2012</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Professional Certifications</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-zinc-300 font-semibold">Certified Senior Architectural Draughtsman</p>
                      <p className="text-sm text-zinc-500">PAM - Level 01, 02 & 03</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 font-semibold">Registered Construction Personnel</p>
                      <p className="text-sm text-zinc-500">CIDB Malaysia • W81114102011000B</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Digital Innovation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Digital Innovation</h3>
            <Card>
              <div className="p-6">
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Self-taught full-stack developer, creating custom productivity applications to solve
                  architecture industry pain points:
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li>• <span className="text-zinc-100 font-semibold">Brutalist Notes:</span> Note-taking and documentation system for technical professionals</li>
                  <li>• <span className="text-zinc-100 font-semibold">QodeSnipped:</span> Code snippet management tool for technical workflows</li>
                  <li>• <span className="text-zinc-100 font-semibold">PlanoraNotta:</span> Project planning and organization application</li>
                </ul>
                <p className="mt-4 text-zinc-400 italic">
                  Philosophy: "AI as teammates, not tools" - crediting all contributors and building with soul
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Get In Touch</h3>
            <Card>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 text-zinc-400">
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Email</p>
                    <p className="text-zinc-300">mhyeatz@outlook.com</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Phone</p>
                    <p className="text-zinc-300">017 3131313</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Location</p>
                    <p className="text-zinc-300">Jalan Plumbum, Seksyen 7, Shah Alam</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">LinkedIn</p>
                    <p className="text-zinc-300">linkedin.com/in/jordantaylorengineer</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
