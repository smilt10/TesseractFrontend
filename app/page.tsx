"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import CaseStudyCard from "@/components/case-study-card"
import BlueCTASection from "@/components/blue-cta-section"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4 // Now we have 8 testimonials, but showing 2 at once means 4 total slides
  const [activeTab, setActiveTab] = useState(0)
  const [logoOffset, setLogoOffset] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentSlide])

  // Define default fallback image
  const defaultImage = "/abstract-swirls.png"

  const tabs = [
    {
      id: "ai-solutions",
      label: "AI-Powered Solutions",
      headline: "Construisez votre IAvenir.",
      subheading:
        "Tesseract conçoit et déploie des solutions IA sur-mesure, directement utiles à vos équipes. Moins de tâches répétitives, plus d'agilité, une vraie valeur ajoutée : l'intelligence devient actionnable",
      image: "/ai-visualization.jpg",
    },
    {
      id: "digital-transformation",
      label: "Digital Transformation",
      headline: "Augmenter la performance terrain par la donnée et l'IA",
      subheading:
        "Moderniser vos opérations, activer vos données, booster la performance. Avec un interlocuteur unique, des experts dédiés et les bons outils (IA, automatisation, UX), Tesseract aligne exécution terrain et stratégie d'entreprise.",
      image: "/service-digital-bg.jpg",
    },
    {
      id: "strategic-consulting",
      label: "Strategic Consulting",
      headline: "Activez l'expertise tech, modulez la puissance",
      subheading:
        "De la conception à la mise en production, appuyez-vous sur une expertise ciblée. Tesseract aligne les bonnes ressources sur chaque phase de votre roadmap tech, pour livrer plus vite, mieux, sans diluer vos standards.",
      image: "/service-consulting-bg.jpg",
    },
    {
      id: "enterprise-solutions",
      label: "Enterprise Solutions",
      headline: "De la vision à la solution digitale : concrétisez votre projet, sans être expert",
      subheading:
        "Vous avez des projets digitaux mais pas l'expertise nécessaire. De la stratégie à la mise en œuvre, Tesseract vous accompagne jusqu'à l'aboutissement de votre vision, en toute maitrise et sécurité.",
      image: "/service-software-bg.jpg",
    },
  ]

  // Add this new useEffect for automatic tab rotation
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1))
    }, 5000) // Change tab every 5 seconds

    return () => clearInterval(tabInterval)
  }, [tabs])

  // Only the 18 client logos from public/images/
  const clientLogos = [
    { src: "/images/client-logo-amcor.jpeg", alt: "Amcor" },
    { src: "/images/client-logo-avs.png", alt: "AVS Research" },
    { src: "/images/client-logo-guardian-sentinel.png", alt: "Guardian Sentinel" },
    { src: "/images/client-logo-del-monte.png", alt: "Del Monte" },
    { src: "/images/client-logo-guardian-security.png", alt: "Guardian Security" },
    { src: "/images/client-logo-de-vrij.png", alt: "De Vrij Group" },
    { src: "/images/client-logo-coca-cola.png", alt: "Coca Cola" },
    { src: "/images/client-logo-braun.jpeg", alt: "B. Braun" },
    { src: "/images/client-logo-chablass.png", alt: "Chablass" },
    { src: "/images/japy-tech.png", alt: "Japy Tech" },
    { src: "/images/savoye.png", alt: "Savoye" },
    { src: "/images/schneider.png", alt: "Schneider Electric" },
    { src: "/images/uimm.png", alt: "UIMM" },
    { src: "/images/novolyze.png", alt: "Novolyze" },
    { src: "/images/hz.jpeg", alt: "HZ" },
    { src: "/images/kalygma.jpeg", alt: "Kalygma" },
    { src: "/images/savencia.png", alt: "Groupe Savencia" },
    { src: "/images/sigma.png", alt: "Sigma Alimentos" },
  ]

  // Continuous scroll effect - move logos from right to left every 3 seconds
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setLogoOffset((prev) => {
        const logoWidth = 180 // Width of each logo container (140px + 40px gap)
        const nextOffset = prev + logoWidth
        // Reset when we've scrolled through all logos
        if (nextOffset >= logoWidth * clientLogos.length) {
          return 0
        }
        return nextOffset
      })
    }, 3000) // Move every 3 seconds

    return () => clearInterval(logoInterval)
  }, [clientLogos.length])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
          {/* Left Column - Content */}
          <div className="relative flex flex-col h-full">
            {/* Content Area */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex items-center relative z-30">
              <div className="max-w-xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-white min-h-[100px] md:min-h-[120px] lg:min-h-[140px] flex items-center">
                  {tabs[activeTab].headline}
                </h1>
                <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed min-h-[80px] md:min-h-[100px] flex items-start">
                  {tabs[activeTab].subheading}
                </p>
                <Link href="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-5 text-lg rounded-full">
                    Learn more <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tabs - Fixed at bottom */}
            <div className="w-full border-t border-gray-800 relative z-30">
              <div className="grid grid-cols-4 w-full">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`py-4 px-2 h-16 text-xs font-medium transition-colors font-poppins border-r border-gray-800 last:border-r-0 flex items-center justify-center ${
                      activeTab === index
                        ? "text-white border-t-2 -mt-[1px] border-yellow-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="block text-center leading-tight">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:block relative h-full overflow-hidden z-5">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeTab === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={defaultImage || "/placeholder.svg"}
                  alt={tab.label}
                  fill
                  className={`object-cover object-center transition-transform duration-1000 ${
                    activeTab === index ? "scale-100" : "scale-110"
                  }`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Digital Story Animation Background - Extended to Full Hero Section */}
        <div className="absolute inset-0 overflow-hidden opacity-40 z-20 pointer-events-none">
          <div className="digital-story-animation">
            {/* Developer 1 */}
            <div className="developer dev-1">
              <div className="avatar dev-avatar-1">
                <div className="avatar-face"></div>
              </div>
              <div className="code-editor">
                <div className="editor-header">
                  <div className="editor-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="file-name">app.json</span>
                </div>
                <div className="code-content">
                  <div className="code-line line-1"></div>
                  <div className="code-line line-2"></div>
                  <div className="code-line line-3"></div>
                  <div className="typing-cursor"></div>
                </div>
              </div>
              <div className="dev-label">Developer A</div>
            </div>

            {/* JSON File with Animation */}
            <div className="json-file">
              <div className="file-container">
                <div className="file-icon">
                  <span className="file-text">{"{ }"}</span>
                  <div className="file-glow"></div>
                </div>
                <div className="file-details">
                  <div className="file-name">data.json</div>
                  <div className="file-size">2.4 KB</div>
                </div>
              </div>
            </div>

            {/* Enhanced Connection Line with Network Effect */}
            <div className="connection-network">
              <div className="connection-line main-line">
                <div className="data-packet packet-1"></div>
                <div className="data-packet packet-2"></div>
                <div className="data-packet packet-3"></div>
              </div>
              <div className="network-grid">
                <div className="grid-line horizontal line-1"></div>
                <div className="grid-line horizontal line-2"></div>
                <div className="grid-line vertical line-3"></div>
                <div className="grid-line vertical line-4"></div>
              </div>
            </div>

            {/* Developer 2 */}
            <div className="developer dev-2">
              <div className="avatar dev-avatar-2">
                <div className="avatar-face"></div>
              </div>
              <div className="notification-system">
                <div className="notification">
                  <div className="notification-icon">📄</div>
                  <div className="notification-text">
                    <div className="notification-title">File Received</div>
                    <div className="notification-subtitle">data.json</div>
                  </div>
                  <div className="notification-dot"></div>
                </div>
              </div>
              <div className="dev-label">Developer B</div>
            </div>

            {/* Enhanced Network Nodes */}
            <div className="network-nodes">
              <div className="network-node node-1">
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>
              <div className="network-node node-2">
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>
              <div className="network-node node-3">
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>
              <div className="network-node node-4">
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>
            </div>

            {/* Digital Particles */}
            <div className="digital-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Statement Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Vous avez une{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">vision</span>{" "}
              mais ne savez pas comment la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400">
                concrétiser
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Vous n'avez pas besoin d'être un expert technique pour transformer votre entreprise. Que vous cherchiez à
              optimiser vos opérations, atteindre plus de clients, ou résoudre des défis complexes, nous parlons votre
              langue et transformons vos idées en solutions digitales puissantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/enterprise-solutions">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Découvrez les possibilités <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-gray-400 text-sm">Pas de jargon technique, que des solutions qui fonctionnent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Témoignages Clients</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ne nous croyez pas sur parole - écoutez ce que nos clients ont à dire
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1 - Testimonials 1 & 2 */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="px-2">
                    <TestimonialCard
                      name="Sarah Johnson"
                      position="CTO"
                      company="Global Manufacturing Corp"
                      image="/testimonial-1.jpg"
                      rating={5}
                      testimonial="TESSERACT's AI solutions have transformed our maintenance operations. Their team's expertise and dedication to our success made all the difference in our digital transformation journey."
                    />
                  </div>
                  <div className="px-2">
                    <TestimonialCard
                      name="Michael Chen"
                      position="CEO"
                      company="Innovate Financial"
                      image="/testimonial-2.jpg"
                      rating={4.5}
                      testimonial="Working with TESSERACT on our digital transformation initiative was a game-changer. Their strategic approach and technical expertise helped us modernize our systems while minimizing disruption."
                    />
                  </div>
                </div>

                {/* Slide 2 - Testimonials 3 & 4 */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="px-2">
                    <TestimonialCard
                      name="Emily Rodriguez"
                      position="Director of Operations"
                      company="TechSolutions Inc."
                      image="/testimonial-3.jpg"
                      rating={5}
                      testimonial="The software development team at TESSERACT delivered our custom solution ahead of schedule and exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry."
                    />
                  </div>
                  <div className="px-2">
                    <TestimonialCard
                      name="David Wilson"
                      position="CIO"
                      company="Healthcare Innovations"
                      image="/testimonial-1.jpg"
                      rating={5}
                      testimonial="The AI solutions provided by TESSERACT have revolutionized our patient care systems. We've seen a 40% improvement in diagnostic accuracy and significantly reduced wait times."
                    />
                  </div>
                </div>

                {/* Slide 3 - Testimonials 5 & 6 */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="px-2">
                    <TestimonialCard
                      name="Jennifer Lee"
                      position="VP of Technology"
                      company="Retail Solutions Group"
                      image="/testimonial-2.jpg"
                      rating={4.5}
                      testimonial="TESSERACT's digital transformation expertise helped us completely reimagine our customer experience. Our online sales have increased by 65% since implementing their recommendations."
                    />
                  </div>
                  <div className="px-2">
                    <TestimonialCard
                      name="Robert Martinez"
                      position="COO"
                      company="Logistics International"
                      image="/testimonial-3.jpg"
                      rating={5}
                      testimonial="The supply chain optimization solution from TESSERACT has been transformative. We've reduced delivery times by 30% and cut operational costs by 25% within just six months of implementation."
                    />
                  </div>
                </div>

                {/* Slide 4 - Testimonials 7 & 8 */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="px-2">
                    <TestimonialCard
                      name="Amanda Thompson"
                      position="CMO"
                      company="Digital Marketing Solutions"
                      image="/testimonial-1.jpg"
                      rating={4.5}
                      testimonial="TESSERACT's AI-powered analytics platform has given us unprecedented insights into customer behavior. We've been able to increase campaign effectiveness by 45% and deliver much more personalized experiences."
                    />
                  </div>
                  <div className="px-2">
                    <TestimonialCard
                      name="Thomas Wright"
                      position="CTO"
                      company="NextGen Energy"
                      image="/testimonial-2.jpg"
                      rating={5}
                      testimonial="The custom IoT solution developed by TESSERACT has revolutionized how we monitor and maintain our renewable energy infrastructure. Downtime has decreased by 70% and efficiency has improved dramatically."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Témoignages précédents"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Témoignages suivants"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentSlide(dot)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === dot ? "bg-blue-500" : "bg-gray-400"
                  }`}
                  aria-label={`Aller aux témoignages ${dot + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg">
                Lire Plus de Témoignages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - New Visual Style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Pourquoi choisir{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                TESSERACT
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
              Nous combinons expertise technique et approche humaine pour transformer vos défis en opportunités de
              croissance
            </p>

            {/* Visual Grid of Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Nos valeurs */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Nos valeurs</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Des valeurs humaines et de l'innovation au cœur de notre approche. L'humain au centre de chaque
                    projet.
                  </p>
                </div>
              </div>

              {/* Notre Vision */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Notre Vision</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Accélérer et consolider les compétences d'entreprises pour prospérer dans l'économie numérique.
                  </p>
                </div>
              </div>

              {/* Esprit novateur */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Esprit novateur</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    L'innovation au cœur de notre métier. Nous explorons constamment de nouvelles approches.
                  </p>
                </div>
              </div>

              {/* Expertise et efficience */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-green-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Expertise et efficience</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Des experts qualifiés, au bon moment pour maximiser votre retour sur investissement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  En savoir plus sur nous <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-gray-400 text-sm">Une approche qui fait la différence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section with Continuous Scroll */}
      <section className="py-12 bg-gray-800 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-300 text-lg font-medium mb-10">
            Approuvé par des organisations de premier plan à travers le monde
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${logoOffset}px)`,
                width: `${clientLogos.length * 180}px`,
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex justify-center items-center" style={{ width: "180px" }}>
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={140}
                    height={50}
                    className="opacity-70 hover:opacity-100 transition object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/30 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Histoires de Succès</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez comment nous avons aidé les organisations à atteindre leurs objectifs commerciaux grâce à la
              transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Solution de Maintenance Prédictive Alimentée par l'IA"
              client="Global Manufacturing Corp"
              industry="Manufacturing"
              image="/images/case-study-manufacturing.png"
              summary="Mise en place d'une solution IA qui a réduit les temps d'arrêt des équipements de 35% et les coûts de maintenance de 25%."
              slug="manufacturing-predictive-maintenance"
            />

            <CaseStudyCard
              title="Transformation Digitale pour les Services Financiers"
              client="Premier Financial Group"
              industry="Finance"
              image="/images/case-study-finance.png"
              summary="Modernisation des systèmes et processus existants, résultant en une intégration client 40% plus rapide et une satisfaction améliorée."
              slug="finance-digital-transformation"
            />

            <CaseStudyCard
              title="Implémentation ERP Personnalisée"
              client="Global Retail Chain"
              industry="Retail"
              image="/images/case-study-retail.png"
              summary="Développement et déploiement d'une solution ERP personnalisée qui a rationalisé les opérations dans plus de 200 sites."
              slug="retail-erp-implementation"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg">
                Voir Toutes les Études de Cas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <BlueCTASection
        title="Ready to Transform Your Business?"
        description="Schedule a consultation with our experts to discuss how we can help you achieve your business goals through digital transformation and AI-powered solutions."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />

      <style jsx>{`
        .digital-story-animation {
          position: relative;
          width: 100%;
          height: 100%;
          animation: storyLoop 25s infinite linear;
        }

        /* Enhanced Developer Styles */
        .developer {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .dev-1 {
          top: 15%;
          left: 8%;
        }

        .dev-2 {
          top: 15%;
          right: 8%;
        }

        /* Enhanced Avatar Styles */
        .dev-avatar-1, .dev-avatar-2 {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: relative;
          border: 3px solid rgba(59, 130, 246, 0.6);
          animation: avatarPulse 3s infinite ease-in-out;
        }

        .dev-avatar-1 {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .dev-avatar-2 {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          animation-delay: 1s;
        }

        .avatar-face {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
        }

        .avatar-face::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          width: 8px;
          height: 8px;
          background: #1f2937;
          border-radius: 50%;
        }

        /* Enhanced Code Editor */
        .code-editor {
          width: 140px;
          height: 100px;
          background: rgba(17, 24, 39, 0.95);
          border-radius: 12px;
          border: 2px solid rgba(59, 130, 246, 0.4);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
          overflow: hidden;
          animation: editorGlow 4s infinite ease-in-out;
        }

        .editor-header {
          background: rgba(31, 41, 55, 0.8);
          padding: 6px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .editor-dots {
          display: flex;
          gap: 4px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .editor-header .file-name {
          font-size: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-family: monospace;
        }

        .code-content {
          padding: 8px;
        }

        .code-line {
          height: 4px;
          background: rgba(59, 130, 246, 0.7);
          margin: 6px 0;
          border-radius: 2px;
          animation: typing 3s infinite ease-in-out;
        }

        .line-1 { width: 90%; animation-delay: 0s; }
        .line-2 { width: 60%; animation-delay: 0.5s; }
        .line-3 { width: 80%; animation-delay: 1s; }

        .typing-cursor {
          width: 2px;
          height: 14px;
          background: #fbbf24;
          animation: blink 1s infinite;
          margin-top: 4px;
        }

        /* Enhanced JSON File */
        .json-file {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translateX(-50%);
          animation: fileFloat 8s infinite ease-in-out;
        }

        .file-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .file-icon {
          position: relative;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);
          border: 2px solid rgba(16, 185, 129, 0.6);
        }

        .file-text {
          color: white;
          font-weight: bold;
          font-size: 14px;
          font-family: monospace;
        }

        .file-glow {
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 16px;
          opacity: 0.3;
          animation: fileGlow 2s infinite ease-in-out;
          z-index: -1;
        }

        .file-details {
          text-align: center;
        }

        .file-details .file-name {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .file-size {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Enhanced Connection Network */
        .connection-network {
          position: absolute;
          top: 30%;
          left: 25%;
          width: 50%;
          height: 40%;
        }

        .main-line {
          position: absolute;
          top: 20px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent);
          animation: connectionPulse 4s infinite ease-in-out;
        }

        .data-packet {
          position: absolute;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #fbbf24, #f59e0b);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.6);
          animation: dataTravel 4s infinite linear;
        }

        .packet-1 { animation-delay: 0s; }
        .packet-2 { animation-delay: 1.3s; }
        .packet-3 { animation-delay: 2.6s; }

        .network-grid {
          position: absolute;
          inset: 0;
        }

        .grid-line {
          position: absolute;
          background: rgba(59, 130, 246, 0.2);
          animation: gridPulse 6s infinite ease-in-out;
        }

        .grid-line.horizontal {
          height: 1px;
          width: 100%;
        }

        .grid-line.vertical {
          width: 1px;
          height: 100%;
        }

        .line-1 { top: 10%; animation-delay: 0s; }
        .line-2 { bottom: 10%; animation-delay: 2s; }
        .line-3 { left: 30%; animation-delay: 1s; }
        .line-4 { right: 30%; animation-delay: 3s; }

        /* Enhanced Notification System */
        .notification-system {
          position: relative;
        }

        .notification {
          background: rgba(16, 185, 129, 0.15);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(16, 185, 129, 0.4);
          border-radius: 16px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: notificationPop 8s infinite ease-in-out;
          opacity: 0;
          transform: scale(0.8);
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.2);
        }

        .notification-icon {
          font-size: 16px;
        }

        .notification-text {
          display: flex;
          flex-direction: column;
        }

        .notification-title {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        .notification-subtitle {
          font-size: 8px;
          color: rgba(255, 255, 255, 0.6);
        }

        .notification-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: dotBlink 1s infinite;
        }

        /* Developer Labels */
        .dev-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          text-align: center;
          padding: 4px 8px;
          background: rgba(17, 24, 39, 0.6);
          border-radius: 8px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        /* Enhanced Network Nodes */
        .network-nodes {
          position: absolute;
          inset: 0;
        }

        .network-node {
          position: absolute;
          width: 20px;
          height: 20px;
        }

        .node-core {
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #3b82f6, #1e40af);
          border-radius: 50%;
          border: 2px solid rgba(59, 130, 246, 0.6);
        }

        .node-ring {
          position: absolute;
          inset: -6px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: ringPulse 3s infinite ease-in-out;
        }

        .node-1 {
          top: 60%;
          left: 15%;
          animation-delay: 0s;
        }

        .node-2 {
          top: 70%;
          left: 40%;
          animation-delay: 1s;
        }

        .node-3 {
          top: 65%;
          right: 40%;
          animation-delay: 2s;
        }

        .node-4 {
          top: 75%;
          right: 15%;
          animation-delay: 1.5s;
        }

        /* Digital Particles */
        .digital-particles {
          position: absolute;
          inset: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(59, 130, 246, 0.6);
          border-radius: 50%;
          animation: particleFloat 8s infinite linear;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 40%;
          left: 60%;
          animation-delay: 2s;
        }

        .particle-3 {
          top: 60%;
          left: 30%;
          animation-delay: 4s;
        }

        .particle-4 {
          top: 80%;
          left: 70%;
          animation-delay: 6s;
        }

        .particle-5 {
          top: 30%;
          left: 80%;
          animation-delay: 1s;
        }

        /* Animations */
        @keyframes storyLoop {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        @keyframes avatarPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }

        @keyframes editorGlow {
          0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.4); }
        }

        @keyframes typing {
          0% { width: 0; opacity: 0.5; }
          50% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0.8; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes fileFloat {
          0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
          25% { transform: translateX(-50%) translateY(-15px) scale(1.05); }
          50% { transform: translateX(-50%) translateY(0) scale(1); }
          75% { transform: translateX(-50%) translateY(-8px) scale(1.02); }
        }

        @keyframes fileGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes connectionPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes dataTravel {
          0% { left: -6px; opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; transform: scale(1); }
          100% { left: calc(100% + 6px); opacity: 0; transform: scale(0.5); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        @keyframes notificationPop {
          0%, 60% { opacity: 0; transform: scale(0.8) translateY(10px); }
          70%, 90% { opacity: 1; transform: scale(1) translateY(0); }
          100% { opacity: 0; transform: scale(0.8) translateY(-10px); }
        }

        @keyframes dotBlink {
          0%, 50% { opacity: 1; transform: scale(1); }
          51%, 100% { opacity: 0.3; transform: scale(0.8); }
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.1; }
        }

        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-40px) translateX(20px); opacity: 0; }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .digital-story-animation {
            transform: scale(0.7);
          }
          
          .dev-1 { left: 5%; }
          .dev-2 { right: 5%; }
          
          .code-editor {
            width: 120px;
            height: 80px;
          }
          
          .file-icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}
