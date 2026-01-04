import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Github, Linkedin, Mail, Phone, MapPin, Box, Layers, Palette, Pen, Zap, Sun, Video, Calendar, FileText, Monitor, Code, Figma, Terminal } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Photo */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-800 flex-shrink-0">
              <Image
                src="/Profile Photo.png"
                alt="M. Nor Hidayat"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
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
          </div>
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
                  Founded <span className="text-zinc-100 font-semibold">M•YEATZ Archstudio</span>, successfully
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Box size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">AutoCAD</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Layers size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">SketchUp</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Palette size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Photoshop</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Pen size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Illustrator</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Zap size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">V-Ray</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Sun size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Enscape</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Video size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Lumion</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Calendar size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Primavera</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <FileText size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">MS Office</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Monitor size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">PowerPoint</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Figma size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Figma</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Palette size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">Canva</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Code size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">VS Code</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Code size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">VS Codium</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 flex flex-col items-center gap-2">
                  <Terminal size={24} className="text-zinc-400" />
                  <p className="text-zinc-300 text-sm text-center">CLI Tools</p>
                </div>
              </Card>
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
                      <p className="text-zinc-300">R.A.R Architect & Engineering Sdn. Bhd</p>
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
                      <p className="text-sm text-zinc-500">University of Technology Malaysia • 2012</p>
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
                      <p className="text-sm text-zinc-500">SKM (NOSS) - Level 01, 02 & 03</p>
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
                <div className="grid md:grid-cols-2 gap-6 text-zinc-400">
                  <Link href="mailto:mhyeatz@outlook.com" className="flex items-center gap-3 hover:text-zinc-100 transition-colors">
                    <Mail size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">Email</p>
                      <p className="text-zinc-300">mhyeatz@outlook.com</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">Phone</p>
                      <p className="text-zinc-300">017 3131313</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">Location</p>
                      <p className="text-zinc-300">Jalan Plumbum, Seksyen 7, Shah Alam</p>
                    </div>
                  </div>
                  <Link href="https://linkedin.com/in/jordantaylorengineer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-zinc-100 transition-colors">
                    <Linkedin size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">LinkedIn</p>
                      <p className="text-zinc-300">jordantaylorengineer</p>
                    </div>
                  </Link>
                  <Link href="https://github.com/me-yeatz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-zinc-100 transition-colors">
                    <Github size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">GitHub</p>
                      <p className="text-zinc-300">me-yeatz</p>
                    </div>
                  </Link>
                  <Link href="https://dev.to/yeatz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-zinc-100 transition-colors">
                    <svg className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                    </svg>
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">Dev.to</p>
                      <p className="text-zinc-300">yeatz</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
