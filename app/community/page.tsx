"use client"

import Link from "next/link"
import Image from "next/image"
import { Briefcase, Code, Database, Filter, Search, Server, Star, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Professional data - this would typically come from a database
const professionals = [
  {
    name: "Alex Johnson",
    slug: "alex-johnson",
    title: "Senior Full Stack Developer",
    image: "/placeholder.svg?height=400&width=600",
    available: true,
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    rating: 5.0,
    projects: 24,
    categories: ["developers"],
  },
  {
    name: "Sophia Chen",
    slug: "sophia-chen",
    title: "AI/ML Specialist",
    image: "/placeholder.svg?height=400&width=600",
    available: false,
    skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    rating: 4.8,
    projects: 19,
    categories: ["dataScientists"],
  },
  {
    name: "Marcus Williams",
    slug: "marcus-williams",
    title: "DevOps Engineer",
    image: "/placeholder.svg?height=400&width=600",
    available: true,
    skills: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
    rating: 4.9,
    projects: 31,
    categories: ["developers"],
  },
  {
    name: "Priya Patel",
    slug: "priya-patel",
    title: "UX/UI Designer",
    image: "/placeholder.svg?height=400&width=600",
    available: true,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    rating: 5.0,
    projects: 27,
    categories: ["uxDesigners"],
  },
  {
    name: "David Kim",
    slug: "david-kim",
    title: "Blockchain Developer",
    image: "/placeholder.svg?height=400&width=600",
    available: false,
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"],
    rating: 4.7,
    projects: 15,
    categories: ["developers"],
  },
  {
    name: "Elena Rodriguez",
    slug: "elena-rodriguez",
    title: "Data Scientist",
    image: "/placeholder.svg?height=400&width=600",
    available: true,
    skills: ["Python", "R", "SQL", "Data Visualization"],
    rating: 4.9,
    projects: 22,
    categories: ["dataScientists"],
  },
  {
    name: "James Wilson",
    slug: "james-wilson",
    title: "Mobile Developer",
    image: "/placeholder.svg?height=400&width=600",
    available: true,
    skills: ["React Native", "Flutter", "iOS", "Android"],
    rating: 4.8,
    projects: 18,
    categories: ["developers"],
  },
  {
    name: "Olivia Thompson",
    slug: "olivia-thompson",
    title: "Project Manager",
    image: "/placeholder.svg?height=400&width=600",
    available: false,
    skills: ["Agile", "Scrum", "JIRA", "Risk Management"],
    rating: 5.0,
    projects: 29,
    categories: ["projectManagers", "consultants"],
  },
]

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleCount, setVisibleCount] = useState(8)
  const [searchQuery, setSearchQuery] = useState("")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const filtersRef = useRef<HTMLDivElement>(null)

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(8)
  }, [activeFilter, searchQuery, selectedSkills, minRating])

  // Close filters when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setShowAdvancedFilters(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Get all unique skills from professionals
  const allSkills = Array.from(new Set(professionals.flatMap((professional) => professional.skills))).sort()

  // Filter professionals based on active filter, search query, and advanced filters
  const filteredProfessionals = professionals.filter((professional) => {
    // Category filter
    const categoryMatch =
      activeFilter === "all" ||
      (activeFilter === "available" && professional.available) ||
      professional.categories.includes(activeFilter)

    // Search query filter
    const searchMatch =
      searchQuery === "" ||
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Skills filter
    const skillsMatch =
      selectedSkills.length === 0 || selectedSkills.every((skill) => professional.skills.includes(skill))

    // Rating filter
    const ratingMatch = professional.rating >= minRating

    return categoryMatch && searchMatch && skillsMatch && ratingMatch
  })

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/abstract-swirls.png" alt="Background pattern" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tesseract TaskForce</h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with our network of elite developers, consultants, and digital specialists ready to bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, skill or expertise..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition w-full sm:w-auto"
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                >
                  <Filter size={18} />
                  <span>Filters</span>
                </button>

                {showAdvancedFilters && (
                  <div
                    ref={filtersRef}
                    className="absolute right-0 mt-2 w-72 bg-gray-800 rounded-lg shadow-lg p-4 z-20"
                  >
                    <h3 className="font-medium mb-3">Filter by Skills</h3>
                    <div className="max-h-48 overflow-y-auto mb-4 space-y-2">
                      {allSkills.map((skill) => (
                        <div key={skill} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`skill-${skill}`}
                            checked={selectedSkills.includes(skill)}
                            onChange={() => {
                              if (selectedSkills.includes(skill)) {
                                setSelectedSkills(selectedSkills.filter((s) => s !== skill))
                              } else {
                                setSelectedSkills([...selectedSkills, skill])
                              }
                            }}
                            className="mr-2"
                          />
                          <label htmlFor={`skill-${skill}`}>{skill}</label>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-medium mb-3">Minimum Rating</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.5"
                        value={minRating}
                        onChange={(e) => setMinRating(Number.parseFloat(e.target.value))}
                        className="flex-1"
                      />
                      <span>{minRating.toFixed(1)}</span>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          setSelectedSkills([])
                          setMinRating(0)
                        }}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        Reset Filters
                      </button>
                      <button
                        onClick={() => setShowAdvancedFilters(false)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-900">
        <div className="container">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">120+</p>
              <p className="text-gray-300">Developers</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">45+</p>
              <p className="text-gray-300">Consultants</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">30+</p>
              <p className="text-gray-300">Specializations</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">85%</p>
              <p className="text-gray-300">Availability Rate</p>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedSkills.length > 0 || minRating > 0) && (
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <span className="text-gray-400">Active filters:</span>
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                  onClick={() => setSelectedSkills(selectedSkills.filter((s) => s !== skill))}
                >
                  {skill}
                  <button className="hover:text-white">×</button>
                </span>
              ))}
              {minRating > 0 && (
                <span
                  className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                  onClick={() => setMinRating(0)}
                >
                  {minRating.toFixed(1)}+ Rating
                  <button className="hover:text-white">×</button>
                </span>
              )}
              <button
                className="text-sm text-gray-400 hover:text-white underline"
                onClick={() => {
                  setSelectedSkills([])
                  setMinRating(0)
                }}
              >
                Clear all
              </button>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              className={`px-4 py-2 ${activeFilter === "all" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("all")}
            >
              All Professionals
            </button>
            <button
              className={`px-4 py-2 ${activeFilter === "developers" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("developers")}
            >
              Developers
            </button>
            <button
              className={`px-4 py-2 ${activeFilter === "consultants" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("consultants")}
            >
              Consultants
            </button>
            <button
              className={`px-4 py-2 ${activeFilter === "dataScientists" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("dataScientists")}
            >
              Data Scientists
            </button>
            <button
              className={`px-4 py-2 ${activeFilter === "uxDesigners" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("uxDesigners")}
            >
              UX/UI Designers
            </button>
            <button
              className={`px-4 py-2 ${activeFilter === "projectManagers" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("projectManagers")}
            >
              Project Managers
            </button>
            <button
              className={`px-4 py-2 ${activeFilter === "available" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("available")}
            >
              Available Now
            </button>
          </div>

          {/* Search Results Count */}
          <div className="mb-6 text-gray-400">
            Showing {Math.min(filteredProfessionals.length, visibleCount)} of {filteredProfessionals.length}{" "}
            professionals
          </div>

          {/* Professionals Grid */}
          {filteredProfessionals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProfessionals.slice(0, visibleCount).map((professional, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div
                        className={`w-3 h-3 rounded-full ${professional.available ? "bg-green-500" : "bg-red-500"}`}
                      ></div>
                      <span className="text-xs font-medium">{professional.available ? "Available" : "Busy"}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{professional.name}</h3>
                    <p className="text-gray-400 mb-3">{professional.title}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {professional.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-gray-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(Math.floor(professional.rating))].map((_, i) => (
                        <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                      ))}
                      {professional.rating % 1 !== 0 && (
                        <Star className="text-gray-600" size={16} fill="currentColor" />
                      )}
                      <span className="text-sm ml-1">{professional.rating.toFixed(1)}</span>
                      <span className="text-xs text-gray-400 ml-1">({professional.projects} projects)</span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/community/${professional.slug}`}
                        className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition"
                      >
                        View Profile
                      </Link>
                      <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
                        <Briefcase size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-xl mb-2">No professionals match your search criteria</p>
              <p className="text-gray-400 mb-4">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("all")
                  setSelectedSkills([])
                  setMinRating(0)
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          <div className="mt-12 text-center">
            {filteredProfessionals.length > visibleCount ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition inline-flex items-center gap-2"
              >
                <span>Load More Professionals</span>
                <Zap size={16} />
              </button>
            ) : filteredProfessionals.length > 0 ? (
              <p className="text-gray-400">All professionals are displayed</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connecting with our talent is simple and efficient. Here's how the process works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Browse & Select</h3>
              <p className="text-gray-300">
                Explore our TaskForce of professionals and find the perfect match for your project needs.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Connect & Discuss</h3>
              <p className="text-gray-300">
                Reach out to discuss your project requirements, timeline, and expectations.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Collaborate & Deliver</h3>
              <p className="text-gray-300">
                Work together seamlessly with our talent to bring your project to successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Tesseract TaskForce</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our TaskForce of professionals offers unique advantages for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vetted Experts</h3>
              <p className="text-gray-300">
                All professionals undergo rigorous screening and skill verification before joining our TaskForce.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Matching</h3>
              <p className="text-gray-300">
                Find the right talent for your project in days, not weeks, with our efficient matching system.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Skill Sets</h3>
              <p className="text-gray-300">
                Access professionals across various technologies, industries, and specializations.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-300">
                Our professionals maintain high standards with regular performance reviews and client feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect with Top Talent?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a single developer or an entire team, our TaskForce has the expertise to bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
              >
                Request Talent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
