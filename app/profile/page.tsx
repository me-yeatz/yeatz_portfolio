import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Github, Linkedin, Mail, Phone, MapPin, Award, ExternalLink, ShieldCheck } from "lucide-react";
import { SoftwareItem } from "../components/software-icons";
import { softwareList } from "../components/software-data";

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
                alt="M.NOR HIDAYAT"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                M.NOR HIDAYAT
              </h2>
              <p className="mt-4 text-xl text-zinc-300">
                Senior Technical Architect × Software Developer × Researcher
              </p>
              <p className="mt-2 text-zinc-400">
                Bridging traditional architecture with modern digital innovation
              </p>
              <div className="mt-4 flex justify-center md:justify-start">
                <a href="https://orcid.org/0009-0004-2211-2406" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                    <mask id="mask0_105_2" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_105_2)">
                      <path d="M12.0521 0H3.94889C2.21778 0 0.948889 1.26889 0.948889 2.90667V13.0944C0.948889 14.7322 2.21778 16 3.94889 16H12.0522C13.7822 16 15.0511 14.7311 15.0511 13.0944V2.90667C15.0511 1.26889 13.7822 0 12.0511 0H12.0521Z" fill="#009DE0" />
                      <path d="M4.22222 13.2311H2.31556V4.76889H4.22222V13.2311Z" fill="white" />
                      <path d="M13.7778 13.2311H11.8711V4.76889H13.7778V13.2311Z" fill="white" />
                      <path d="M11.0667 10.0444C10.2222 9.33333 9.15556 8.88889 7.99999 8.88889C5.79999 8.88889 4.08889 10.5556 4.08889 12.6667C4.08889 14.7778 5.79999 16 7.99999 16C10.1999 16 11.9111 14.7778 11.9111 12.6667C11.9111 11.7778 11.5556 11.0667 10.9778 10.4444C11.3778 10.0444 11.6889 10.0444 11.0667 10.0444ZM6.22222 12.6667C6.22222 11.5556 7.02222 10.6667 7.99999 10.6667C8.97777 10.6667 9.77777 11.5556 9.77777 12.6667C9.77777 13.7778 8.97777 14.2222 7.99999 14.2222C7.02222 14.2222 6.22222 13.7778 6.22222 12.6667Z" fill="white" />
                    </g>
                  </svg>
                  <span>ORCID: 0009-0004-2211-2406</span>
                </a>
              </div>
              <div className="mt-6 max-w-lg">
                <p className="text-sm text-zinc-400 italic leading-relaxed">
                  Years of exploitation taught me invisibility in tech has a cost. I now build open-source solutions that respect creator integrity, protect privacy, and honor craftsmanship in every line.
                </p>
              </div>
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
                  I'm a Senior Technical Architect with 10+ years of experience transforming architectural visions into precise,
                  construction-ready documentation. My expertise spans the full project lifecycle from concept to approval,
                  with specialization in UBBL compliance and technical accuracy. I've delivered complex projects on time
                  while maintaining rigorous quality standards across multiple architectural firms and my own studio practice.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  As the founder of <span className="text-zinc-100 font-semibold">M. YEATZ archstudio</span>,
                  I've successfully managed independent architectural consultancy since 2019. Beyond architecture,
                  I'm a self-taught full-stack developer who creates custom productivity applications to solve real-world
                  architecture industry challenges.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  My unique approach bridges traditional architecture with cutting-edge technology. I believe in
                  "Human-Centric Innovation" and focus on building systems with integrity. My work combines deep domain
                  expertise in architecture with modern software development practices, creating innovative solutions
                  that amplify both technical precision and creative expression.
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
              {softwareList.map((software) => (
                <Card key={software.name}>
                  <SoftwareItem {...software} />
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
                      <p className="text-zinc-300">M. YEATZ archstudio</p>
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
                      <p className="text-zinc-300">Neuformation Architect Sdn. Bhd</p>
                    </div>
                    <span className="text-sm text-zinc-500">2012 – 2018</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">Ara Damansara, Petaling Jaya.</p>
                  <p className="text-zinc-400 text-sm">
                    Assisted in preparing architectural drawings, design documentation, and
                    submission materials under the guidance of senior architects, supporting project coordination and compliance efforts.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-100">Assistant Architect</h4>
                      <p className="text-zinc-300">Aliran Cipta Arkitek</p>
                    </div>
                    <span className="text-sm text-zinc-500">2012 – 2017</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">Seksyen 13, Shah Alam</p>
                  <p className="text-zinc-400 text-sm">
                    Supported senior architects in preparing design drawings, technical drawing,
                    documentation, and submission materials, contributing to project coordination
                    and regulatory compliance.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Formal Education</h4>
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
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Continuing Education</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-300 font-semibold">Advanced Web Development</p>
                      <p className="text-sm text-zinc-500">Self-directed Learning • 2023-2025</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 font-semibold">AI Integration in Design</p>
                      <p className="text-sm text-zinc-500">Continuous Professional Development • 2024-2025</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Vercel Certified Professional</h4>
                  <p className="text-sm text-zinc-500 mb-3">Vercel Deployment & Hosting Certification</p>
                  <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden group">
                    <Image
                      src="/Certifications/Cert Vercel.png"
                      alt="Vercel Certified Professional Certificate"
                      width={300}
                      height={200}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Hive University Certification</h4>
                  <p className="text-sm text-zinc-500 mb-3">Advanced Web Development Program</p>
                  <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden group">
                    <Image
                      src="/Certifications/Cert_Hive University.jpeg"
                      alt="Hive University Certification"
                      width={300}
                      height={200}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Responsible AI with GitHub Copilot</h4>
                  <p className="text-sm text-zinc-500 mb-3">Ethical AI Implementation & Integration</p>
                  <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden group">
                    <Image
                      src="/Certifications/Responsible AI with GitHub Copilot_page-0001.jpg"
                      alt="Responsible AI with GitHub Copilot Certificate"
                      width={300}
                      height={200}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Build a Generative AI Chat App</h4>
                  <p className="text-sm text-zinc-500 mb-3">Generative AI Development Certification</p>
                  <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden group">
                    <Image
                      src="/Certifications/Build a generative AI chat app_page-0001.jpg"
                      alt="Build a Generative AI Chat App Certificate"
                      width={300}
                      height={200}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">Develop an AI App with Microsoft Foundry SDK</h4>
                  <p className="text-sm text-zinc-500 mb-3">Microsoft AI Development Certification</p>
                  <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden group">
                    <Image
                      src="/Certifications/Develop an AI app with the Microsoft Foundry SDK_page-0001.jpg"
                      alt="Develop an AI App with Microsoft Foundry SDK Certificate"
                      width={300}
                      height={200}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional Verifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-zinc-100">Professional Verifications</h3>
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <p className="text-zinc-400 text-sm">Official course completions verified via Alison Learning Platform.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Award className="w-8 h-8 text-zinc-500" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Alison Verified</span>
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-1">
                    OSHA Bloodborne Pathogens (BBP)
                  </h4>
                  <p className="text-sm text-zinc-400 mb-4">Health & Safety in the Workplace</p>

                  <div className="mt-auto pt-4 border-t border-zinc-800/50 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Learner ID:</span>
                      <span className="text-zinc-300 font-mono">49166390</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Completed:</span>
                      <span className="text-zinc-300">5th June 2025</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Award className="w-8 h-8 text-zinc-500" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Alison Verified</span>
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-1">
                    AutoCAD: Basic Practice Drawings
                  </h4>
                  <p className="text-sm text-zinc-400 mb-4">Technical Design Proficiency</p>

                  <div className="mt-auto pt-4 border-t border-zinc-800/50 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Learner ID:</span>
                      <span className="text-zinc-300 font-mono">49166390</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Completed:</span>
                      <span className="text-zinc-300">5th June 2025</span>
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
                  I create custom productivity applications that solve real architecture industry challenges,
                  combining technical precision with intuitive design:
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li>• <span className="text-zinc-100 font-semibold">Brutalist Notes:</span> Note-taking and documentation system for technical professionals</li>
                  <li>• <span className="text-zinc-100 font-semibold">QodeSnipped:</span> Code snippet management tool for technical workflows</li>
                  <li>• <span className="text-zinc-100 font-semibold">PlanoraNotta:</span> Project planning and organization application</li>
                  <li>• <span className="text-zinc-100 font-semibold">BaseForge:</span> No-code database platform with Gantt charts for project management</li>
                </ul>
                <p className="mt-4 text-zinc-400 italic">
                  Philosophy: "Human-Centric Innovation" — building systems with integrity and crediting all contributors
                </p>
              </div>
            </Card>
          </div>

          {/* Resilience Statement */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Resilience & Recovery</h3>
            <Card>
              <div className="p-6">
                <p className="text-zinc-400 leading-relaxed">
                  My journey has included professional challenges that tested my resilience. After experiencing three years of systematic exploitation and abuse in a project where I received no payment despite extensive work beyond my original scope, I emerged with a deeper understanding of the importance of ethical practices in professional relationships.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  This experience, while traumatic, strengthened my commitment to building solutions that respect creator integrity, protect privacy, and honor craftsmanship. I now channel my expertise toward creating tools and systems that prevent the kind of exploitation I experienced - ensuring others don't face the same vulnerabilities.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Though the journey has been difficult, it has shaped my unwavering dedication to ethical technology and design. Every line of code I write and every project I undertake carries the lessons learned from adversity - transforming pain into purpose, and vulnerability into strength.
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
                  <Link href="mailto:me.yeatz@outlook.com" className="flex items-center gap-3 hover:text-zinc-100 transition-colors">
                    <Mail size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">Email</p>
                      <p className="text-zinc-300">me.yeatz@outlook.com</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-zinc-500" />
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">Phone</p>
                      <p className="text-zinc-300">017 2101898</p>
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
