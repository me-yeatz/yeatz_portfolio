'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Menu,
  X,
  User,
  Award,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronDown,
  Star,
  Trophy,
  Target,
  BookOpen,
  Users,
  Globe,
  FileText,
  Download,
  Eye,
  GraduationCap
} from 'lucide-react'

// Typing animation hook - creates sleek character reveal
const useTypingEffect = (text: string, speed: number = 100, startDelay: number = 0) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setHasStarted(true), startDelay)
    return () => clearTimeout(startTimer)
  }, [startDelay])

  useEffect(() => {
    if (!hasStarted) return
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [displayedText, text, speed, hasStarted])

  return { displayedText, isComplete, hasStarted }
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Typing effects for intro screen
  const greeting = useTypingEffect("Hi, I'm", 80, 500)
  const name = useTypingEffect("Akram Hadid", 100, 1500)
  const role = useTypingEffect("Future Educator & Historian", 60, 3000)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-transition after typing completes
  useEffect(() => {
    if (role.isComplete) {
      const timer = setTimeout(() => setShowIntro(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [role.isComplete])

  const navItems = [
    { id: 'home', label: 'Home', icon: GraduationCap },
    { id: 'about', label: 'About', icon: User },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'cv', label: 'CV', icon: FileText },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Sleek typing intro screen - chronark style
  if (showIntro) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle decorative blurs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

        <div className="text-center max-w-3xl z-10">
          {/* Top decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-12 h-0.5 bg-accent mx-auto mb-12"
          />

          {/* Greeting */}
          <div className="h-8 mb-4">
            <span className="text-lg text-muted-foreground font-light tracking-wide">
              {greeting.displayedText}
              {!greeting.isComplete && greeting.hasStarted && (
                <span className="cursor-blink text-accent">|</span>
              )}
            </span>
          </div>

          {/* Name - Large typography */}
          <div className="h-20 sm:h-24 mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              {name.displayedText}
              {!name.isComplete && name.hasStarted && (
                <span className="cursor-blink text-accent">|</span>
              )}
            </h1>
          </div>

          {/* Role */}
          <div className="h-10 mb-12">
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide">
              {role.displayedText}
              {!role.isComplete && role.hasStarted && (
                <span className="cursor-blink text-accent">|</span>
              )}
            </p>
          </div>

          {/* Enter button - appears after typing */}
          <AnimatePresence>
            {role.isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={() => setShowIntro(false)}
                  className="group flex items-center gap-2 mx-auto text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span className="text-sm tracking-widest uppercase">Enter</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="absolute bottom-12 w-24 h-0.5 bg-secondary"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo-akram.png" 
                  alt="Akram Hadid Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-lg">Akram Hadid</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-accent ${
                      activeSection === item.id ? 'text-primary bg-accent' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">AKRAM HADID</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium slide-in-from-bottom-4" style={{animationDelay: '0.2s'}}>
              Bin Mohd Ali Nopiah
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto slide-in-from-bottom-4" style={{animationDelay: '0.3s'}}>
              Bachelor of Social Science (History) with Honours
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground slide-in-from-bottom-4" style={{animationDelay: '0.4s'}}>
              <span>Universiti Malaysia Sabah</span>
              <Separator orientation="vertical" className="h-4 hidden sm:block" />
              <span>Graduated December 2025</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-4 slide-in-from-bottom-4" style={{animationDelay: '0.5s'}}>
              <Badge variant="secondary" className="px-4 py-2 text-sm hover-lift">
                <Star className="w-4 h-4 mr-2" />
                Dean's List • 6 Semesters
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm hover-lift">
                <Award className="w-4 h-4 mr-2" />
                First Class Honours
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm hover-lift">
                <Target className="w-4 h-4 mr-2" />
                CGPA 3.72/4.00
              </Badge>
            </div>
            <div className="pt-8 slide-in-from-bottom-4" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="px-8 py-6 text-lg hover-lift group"
              >
                Explore My Journey
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Motivated and detail-oriented historian with a passion for public administration and governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 hover-lift slide-in-left">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Professional Profile
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Motivated and detail-oriented Bachelor of Social Science (History) Honours graduate from Universiti Malaysia Sabah, 
                    specializing in public administration, governance, and policy analysis. Demonstrates strong leadership, communication, 
                    and organizational abilities through active participation in national and university-level programs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Skilled in research, strategic planning, stakeholder engagement, and academic writing, with proven experience in 
                    team coordination, customer service, and educational management. Committed to contributing to the development of 
                    effective policies and community-driven initiatives in Malaysia's public sector.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift slide-in-right">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Education Journey
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold">Bachelor of Social Science (History) Honours</h4>
                      <p className="text-sm text-muted-foreground">Universiti Malaysia Sabah</p>
                      <p className="text-sm text-muted-foreground">Oct 2022 - Dec 2025</p>
                      <Badge variant="outline" className="mt-2">CGPA: 3.72/4.00</Badge>
                    </div>
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-semibold">Diploma in Public Administration</h4>
                      <p className="text-sm text-muted-foreground">MARA University of Technology</p>
                      <p className="text-sm text-muted-foreground">July 2017 - Oct 2020</p>
                      <Badge variant="outline" className="mt-2">CGPA: 3.12/4.00</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for excellence in academics, leadership, and public speaking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover-lift scale-in">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  Awards & Recognition
                </h3>
                <div className="space-y-4">
                  {[
                    "Best Presenter, Global Student Residential Council Summit 2024",
                    "Champion, Speaker's Corner - Universiti Malaysia Sabah",
                    "Champion, National SMJ Oratory Competition",
                    "Dean's List Award - 6 Semesters",
                    "A+ (Excellent) in Academic Writing",
                    "Entrepreneurship Icon - Faculty of Social Sciences (2020)"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm group-hover:text-foreground transition-colors">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift scale-in">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Leadership & Representation
                </h3>
                <div className="space-y-4">
                  {[
                    "President, Student Welfare Committee (JAKMAS)",
                    "Executive Committee Member, Arts and Culture Bureau",
                    "International Representation - Indonesia & Thailand",
                    "Program Director, JAKMAS Delegation to Indonesia",
                    "Participant, Sayembara Puisi Pentas Dunia 2024"
                  ].map((leadership, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm group-hover:text-foreground transition-colors">{leadership}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certificates & Qualifications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and academic achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover-lift group cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Academic</Badge>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Dean's List Excellence
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Consistent academic excellence across 6 consecutive semesters
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2022-2025</span>
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift group cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Leadership</Badge>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Global Leadership Summit
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Best Presenter in Sustainable Leadership & Crisis Management
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2024</span>
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift group cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Public Speaking</Badge>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  National Oratory Champion
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Champion of National SMJ Oratory Competition
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2023</span>
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift group cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Research</Badge>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Academic Writing Excellence
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A+ Grade for Thesis on Cultural Studies
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2025</span>
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift group cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">Entrepreneurship</Badge>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Entrepreneurship Icon Award
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Recognized for entrepreneurial excellence in Social Sciences
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2020</span>
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift group cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">International</Badge>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  International Program Certificate
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Cultural Exchange Program - Indonesia & Thailand
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2024</span>
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="group">
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
              Download All Certificates
            </Button>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Curriculum Vitae</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional experience and core competencies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6 hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-primary" />
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-muted pl-4 group">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Team Leader</h4>
                      <p className="text-sm text-muted-foreground">AEON Wellness (AEON Co. M) Bhd</p>
                      <p className="text-sm text-muted-foreground mb-2">Apr 2022 – Oct 2022</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Supervised team of 5 staff to ensure adherence to SOPs</li>
                        <li>• Improved team efficiency by 20% through training</li>
                        <li>• Managed sales reports, stock inventory, and audits</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-muted pl-4 group">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Tutor</h4>
                      <p className="text-sm text-muted-foreground">Pusat Tuisyen Sinergi Gemilang</p>
                      <p className="text-sm text-muted-foreground mb-2">Jan 2021 – Mar 2022</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Taught Science to primary school students</li>
                        <li>• Prepared lesson plans and individualized guidance</li>
                        <li>• Developed engaging learning materials</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-muted pl-4 group">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Tearista</h4>
                      <p className="text-sm text-muted-foreground">Tealive</p>
                      <p className="text-sm text-muted-foreground mb-2">Mar 2020 - Jan 2021</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Prepared and served tea-based beverages</li>
                        <li>• Delivered excellent customer service</li>
                        <li>• Maintained workplace cleanliness</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6 hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm group-hover:text-foreground transition-colors">Akramhadid11@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm group-hover:text-foreground transition-colors">011-29568101</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm group-hover:text-foreground transition-colors">Rawang, Selangor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Policy Analysis",
                      "Report Writing",
                      "Research",
                      "Strategic Planning",
                      "Leadership",
                      "Public Speaking",
                      "Project Coordination",
                      "Critical Thinking",
                      "MS Office",
                      "Google Workspace",
                      "SPSS"
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/logo-akram.png" 
                alt="Akram Hadid Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold">Akram Hadid</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 Akram Hadid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}