"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Star,
  Phone,
  X,
} from "lucide-react"

// Professional data - in a real app, this would come from a database
const professionalsData = [
  {
    name: "Alex Johnson",
    slug: "alex-johnson",
    title: "Senior Full Stack Developer",
    image: "/professional-headshot.png",
    available: true,
    skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB", "GraphQL", "Docker", "CI/CD"],
    rating: 5.0,
    projects: 24,
    categories: ["developers"],
    location: "San Francisco, CA",
    hourlyRate: "$120-150",
    bio: "With over 8 years of experience in full-stack development, I specialize in building scalable web applications using modern JavaScript frameworks. I've worked with startups and enterprise clients across fintech, healthcare, and e-commerce sectors.",
    experience: [
      {
        company: "TechNova Solutions",
        role: "Senior Developer",
        period: "2020 - Present",
        description: "Lead developer for client projects, architecting solutions and managing development teams.",
      },
      {
        company: "DataSphere Inc.",
        role: "Full Stack Developer",
        period: "2017 - 2020",
        description: "Developed and maintained multiple web applications using React, Node.js, and AWS.",
      },
      {
        company: "WebFront Technologies",
        role: "Junior Developer",
        period: "2015 - 2017",
        description: "Worked on front-end development using React and Angular.",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "M.S. Computer Science",
        year: "2015",
      },
      {
        institution: "University of California, Berkeley",
        degree: "B.S. Computer Science",
        year: "2013",
      },
    ],
    portfolio: [
      {
        title: "E-commerce Platform",
        description: "Built a scalable e-commerce platform with React, Node.js, and MongoDB.",
        image: "/ecommerce-website-homepage.png",
      },
      {
        title: "Healthcare Management System",
        description: "Developed a comprehensive healthcare management system for a major hospital chain.",
        image: "/placeholder.svg?key=hr9i4",
      },
      {
        title: "Financial Analytics Dashboard",
        description: "Created a real-time financial analytics dashboard using D3.js and React.",
        image: "/financial-dashboard.png",
      },
    ],
    testimonials: [
      {
        client: "Sarah Chen, CTO at HealthTech",
        text: "Alex delivered our project ahead of schedule and exceeded our expectations. His technical expertise and communication skills made the development process smooth and efficient.",
      },
      {
        client: "Michael Rodriguez, Founder at StartupX",
        text: "Working with Alex was a pleasure. He quickly understood our requirements and delivered a high-quality solution that perfectly met our needs.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Available after connection",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "Sophia Chen",
    slug: "sophia-chen",
    title: "AI/ML Specialist",
    image: "/professional-woman-headshot.png",
    available: false,
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Data Science", "Deep Learning", "MLOps"],
    rating: 4.8,
    projects: 19,
    categories: ["dataScientists"],
    location: "Boston, MA",
    hourlyRate: "$140-180",
    bio: "I'm an AI/ML specialist with a PhD in Computer Science and 6 years of industry experience. I focus on developing machine learning models for natural language processing and computer vision applications. My work has been published in top AI conferences including NIPS and ICML.",
    experience: [
      {
        company: "AI Innovations Lab",
        role: "Lead ML Engineer",
        period: "2021 - Present",
        description: "Leading a team of ML engineers to develop cutting-edge AI solutions for enterprise clients.",
      },
      {
        company: "DataMind",
        role: "ML Engineer",
        period: "2018 - 2021",
        description: "Developed and deployed machine learning models for NLP and computer vision applications.",
      },
      {
        company: "Research University",
        role: "Research Assistant",
        period: "2015 - 2018",
        description: "Conducted research in deep learning and published papers in top AI conferences.",
      },
    ],
    education: [
      {
        institution: "MIT",
        degree: "Ph.D. Computer Science (AI Focus)",
        year: "2018",
      },
      {
        institution: "Carnegie Mellon University",
        degree: "M.S. Machine Learning",
        year: "2015",
      },
      {
        institution: "University of Washington",
        degree: "B.S. Computer Science",
        year: "2013",
      },
    ],
    portfolio: [
      {
        title: "Sentiment Analysis Engine",
        description: "Built an advanced sentiment analysis engine for a major social media platform.",
        image: "/placeholder.svg?key=ukxqv",
      },
      {
        title: "Medical Image Recognition",
        description: "Developed a deep learning system for medical image analysis with 98% accuracy.",
        image: "/medical-imaging-ai.png",
      },
      {
        title: "Automated Content Moderation",
        description: "Created an AI system for content moderation used by several online platforms.",
        image: "/content-moderation-system.png",
      },
    ],
    testimonials: [
      {
        client: "Dr. James Wilson, Research Director at MedTech",
        text: "Sophia's work on our medical imaging project was exceptional. Her deep understanding of ML algorithms and their practical applications was invaluable.",
      },
      {
        client: "Lisa Park, VP of Engineering at SocialConnect",
        text: "Sophia delivered a state-of-the-art NLP solution that significantly improved our content recommendation system. Highly recommended!",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Contact via platform",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "Marcus Williams",
    slug: "marcus-williams",
    title: "DevOps Engineer",
    image: "/professional-black-man-headshot.png",
    available: true,
    skills: ["Kubernetes", "Docker", "CI/CD", "Terraform", "AWS", "Azure", "GCP", "Infrastructure as Code"],
    rating: 4.9,
    projects: 31,
    categories: ["developers"],
    location: "Austin, TX",
    hourlyRate: "$110-140",
    bio: "I'm a DevOps engineer with 7+ years of experience in automating, optimizing, and maintaining modern infrastructure. I specialize in containerization, orchestration, and building robust CI/CD pipelines. I'm passionate about creating scalable, resilient systems that enable development teams to deliver features faster.",
    experience: [
      {
        company: "CloudScale Solutions",
        role: "Senior DevOps Engineer",
        period: "2019 - Present",
        description: "Architecting and implementing cloud infrastructure and DevOps practices for enterprise clients.",
      },
      {
        company: "TechOps Inc.",
        role: "DevOps Engineer",
        period: "2016 - 2019",
        description: "Managed Kubernetes clusters and implemented CI/CD pipelines for microservices architectures.",
      },
      {
        company: "Global Systems",
        role: "Systems Administrator",
        period: "2014 - 2016",
        description: "Maintained and optimized Linux-based infrastructure and deployment processes.",
      },
    ],
    education: [
      {
        institution: "Georgia Institute of Technology",
        degree: "M.S. Computer Engineering",
        year: "2014",
      },
      {
        institution: "University of Texas at Austin",
        degree: "B.S. Computer Science",
        year: "2012",
      },
    ],
    portfolio: [
      {
        title: "Microservices Infrastructure",
        description:
          "Designed and implemented a Kubernetes-based infrastructure for a fintech company's microservices.",
        image: "/kubernetes-infrastructure.png",
      },
      {
        title: "CI/CD Pipeline Automation",
        description: "Built a comprehensive CI/CD pipeline that reduced deployment time by 80%.",
        image: "/ci-cd-pipeline.png",
      },
      {
        title: "Multi-Cloud Strategy",
        description: "Developed a multi-cloud strategy and implementation for a SaaS company.",
        image: "/placeholder.svg?key=x22dz",
      },
    ],
    testimonials: [
      {
        client: "Robert Chen, CTO at FinanceApp",
        text: "Marcus transformed our deployment process. His expertise in Kubernetes and CI/CD has been instrumental in scaling our platform.",
      },
      {
        client: "Amanda Johnson, Engineering Manager at SaaS Co",
        text: "Marcus is a DevOps wizard. He built a robust infrastructure that has significantly improved our reliability and deployment speed.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Available after connection",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "Priya Patel",
    slug: "priya-patel",
    title: "UX/UI Designer",
    image: "/professional-indian-woman-headshot.png",
    available: true,
    skills: [
      "Figma",
      "Adobe XD",
      "User Research",
      "Prototyping",
      "Wireframing",
      "Design Systems",
      "Usability Testing",
      "Interaction Design",
    ],
    rating: 5.0,
    projects: 27,
    categories: ["uxDesigners"],
    location: "New York, NY",
    hourlyRate: "$100-130",
    bio: "I'm a UX/UI designer with 6 years of experience creating intuitive, accessible, and beautiful digital experiences. I combine user-centered design principles with strong visual aesthetics to craft products that users love. My approach involves deep user research, iterative design, and close collaboration with development teams.",
    experience: [
      {
        company: "DesignForward Agency",
        role: "Senior UX/UI Designer",
        period: "2020 - Present",
        description: "Lead designer for client projects across fintech, healthcare, and e-commerce sectors.",
      },
      {
        company: "UserFirst Design",
        role: "UX Designer",
        period: "2018 - 2020",
        description:
          "Conducted user research and created wireframes, prototypes, and final designs for web and mobile applications.",
      },
      {
        company: "Creative Solutions",
        role: "UI Designer",
        period: "2016 - 2018",
        description:
          "Designed user interfaces for websites and mobile apps with a focus on visual design and branding.",
      },
    ],
    education: [
      {
        institution: "Rhode Island School of Design",
        degree: "M.F.A. Graphic Design",
        year: "2016",
      },
      {
        institution: "New York University",
        degree: "B.A. Design and Psychology",
        year: "2014",
      },
    ],
    portfolio: [
      {
        title: "Banking App Redesign",
        description: "Completely redesigned a banking app, improving user satisfaction scores by 45%.",
        image: "/banking-app-design.png",
      },
      {
        title: "E-commerce UX Overhaul",
        description: "Redesigned the user experience for an e-commerce platform, increasing conversion rates by 30%.",
        image: "/ecommerce-website-design.png",
      },
      {
        title: "Healthcare Portal",
        description: "Designed an intuitive healthcare portal for patients and providers.",
        image: "/healthcare-portal.png",
      },
    ],
    testimonials: [
      {
        client: "David Kim, Product Manager at FinTech Inc.",
        text: "Priya's designs transformed our product. She has an exceptional ability to understand user needs and translate them into beautiful, functional designs.",
      },
      {
        client: "Emily Chen, Founder at RetailX",
        text: "Working with Priya was a game-changer for our platform. Her design thinking and attention to detail resulted in a product our users love.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Available after connection",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "David Kim",
    slug: "david-kim",
    title: "Blockchain Developer",
    image: "/professional-asian-man-headshot.png",
    available: false,
    skills: [
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "Web3.js",
      "DeFi",
      "Blockchain Architecture",
      "Cryptography",
      "dApps",
    ],
    rating: 4.7,
    projects: 15,
    categories: ["developers"],
    location: "Seattle, WA",
    hourlyRate: "$130-170",
    bio: "I'm a blockchain developer with 5 years of experience building decentralized applications and smart contracts. I specialize in Ethereum development and DeFi protocols. My background in traditional finance combined with technical expertise allows me to bridge the gap between financial requirements and blockchain solutions.",
    experience: [
      {
        company: "BlockChain Innovations",
        role: "Lead Blockchain Developer",
        period: "2020 - Present",
        description: "Developing smart contracts and dApps for enterprise clients and DeFi projects.",
      },
      {
        company: "DeFi Solutions",
        role: "Smart Contract Developer",
        period: "2018 - 2020",
        description: "Built and audited smart contracts for various DeFi protocols.",
      },
      {
        company: "FinTech Corp",
        role: "Software Engineer",
        period: "2016 - 2018",
        description: "Developed financial software before transitioning to blockchain technology.",
      },
    ],
    education: [
      {
        institution: "University of Washington",
        degree: "M.S. Computer Science",
        year: "2016",
      },
      {
        institution: "University of California, San Diego",
        degree: "B.S. Computer Science and Finance",
        year: "2014",
      },
    ],
    portfolio: [
      {
        title: "DeFi Lending Protocol",
        description: "Developed a decentralized lending protocol with $10M+ in total value locked.",
        image: "/defi-lending-platform.png",
      },
      {
        title: "NFT Marketplace",
        description: "Built a specialized NFT marketplace for digital art with custom royalty features.",
        image: "/nft-marketplace-concept.png",
      },
      {
        title: "Supply Chain Tracking",
        description: "Created a blockchain solution for supply chain tracking for a major logistics company.",
        image: "/blockchain-supply-chain.png",
      },
    ],
    testimonials: [
      {
        client: "Jennifer Lee, CEO at DeFi Startup",
        text: "David's expertise in smart contract development was crucial for our project. His code is secure, efficient, and well-documented.",
      },
      {
        client: "Thomas Wright, Blockchain Lead at Enterprise Co",
        text: "David delivered an exceptional blockchain solution that met all our complex requirements. His knowledge of both finance and blockchain technology is impressive.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Contact via platform",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "Elena Rodriguez",
    slug: "elena-rodriguez",
    title: "Data Scientist",
    image: "/professional-latina-woman-headshot.png",
    available: true,
    skills: [
      "Python",
      "R",
      "SQL",
      "Data Visualization",
      "Machine Learning",
      "Statistical Analysis",
      "Big Data",
      "Tableau",
    ],
    rating: 4.9,
    projects: 22,
    categories: ["dataScientists"],
    location: "Chicago, IL",
    hourlyRate: "$115-145",
    bio: "I'm a data scientist with 7 years of experience transforming complex data into actionable insights. I specialize in predictive modeling, statistical analysis, and data visualization. My work has helped companies across retail, finance, and healthcare sectors make data-driven decisions that drive business growth.",
    experience: [
      {
        company: "Data Insights Inc.",
        role: "Senior Data Scientist",
        period: "2019 - Present",
        description:
          "Leading data science initiatives for Fortune 500 clients, developing predictive models and analytics solutions.",
      },
      {
        company: "Analytics Partners",
        role: "Data Scientist",
        period: "2017 - 2019",
        description: "Developed machine learning models and data visualizations for business intelligence.",
      },
      {
        company: "Research Institute",
        role: "Research Analyst",
        period: "2015 - 2017",
        description: "Conducted statistical analysis and data modeling for research projects.",
      },
    ],
    education: [
      {
        institution: "University of Chicago",
        degree: "M.S. Statistics",
        year: "2015",
      },
      {
        institution: "Northwestern University",
        degree: "B.S. Mathematics and Computer Science",
        year: "2013",
      },
    ],
    portfolio: [
      {
        title: "Retail Demand Forecasting",
        description: "Built a demand forecasting model that improved inventory management efficiency by 25%.",
        image: "/demand-forecasting-dashboard.png",
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Developed a customer segmentation model that increased marketing ROI by 40%.",
        image: "/customer-segmentation-analysis.png",
      },
      {
        title: "Healthcare Outcomes Prediction",
        description: "Created a predictive model for patient outcomes that helped optimize treatment protocols.",
        image: "/placeholder.svg?key=fwttp",
      },
    ],
    testimonials: [
      {
        client: "Robert Johnson, CMO at RetailCorp",
        text: "Elena's data analysis transformed our marketing strategy. Her insights led to significant improvements in our customer targeting and engagement.",
      },
      {
        client: "Dr. Sarah Miller, Research Director at HealthOrg",
        text: "Elena's predictive models have been invaluable for our research. Her ability to translate complex data into clear insights is remarkable.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Contact via platform",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "James Wilson",
    slug: "james-wilson",
    title: "Mobile Developer",
    image: "/professional-man-headshot.png",
    available: true,
    skills: ["React Native", "Flutter", "iOS", "Android", "Swift", "Kotlin", "Mobile UI/UX", "App Performance"],
    rating: 4.8,
    projects: 18,
    categories: ["developers"],
    location: "Denver, CO",
    hourlyRate: "$105-135",
    bio: "I'm a mobile developer with 6 years of experience creating native and cross-platform mobile applications. I specialize in building high-performance, user-friendly apps for iOS and Android using React Native, Flutter, and native technologies. My focus is on creating seamless user experiences with clean, maintainable code.",
    experience: [
      {
        company: "AppWorks Studio",
        role: "Senior Mobile Developer",
        period: "2020 - Present",
        description: "Developing cross-platform mobile applications for clients across various industries.",
      },
      {
        company: "MobileTech Solutions",
        role: "Mobile Developer",
        period: "2018 - 2020",
        description: "Built native iOS and Android applications with a focus on performance and user experience.",
      },
      {
        company: "Digital Creations",
        role: "Junior Developer",
        period: "2016 - 2018",
        description: "Started with web development before specializing in mobile application development.",
      },
    ],
    education: [
      {
        institution: "Colorado State University",
        degree: "M.S. Computer Science",
        year: "2016",
      },
      {
        institution: "University of Colorado",
        degree: "B.S. Software Engineering",
        year: "2014",
      },
    ],
    portfolio: [
      {
        title: "Fitness Tracking App",
        description: "Developed a comprehensive fitness tracking app with over 500,000 downloads.",
        image: "/fitness-app-design.png",
      },
      {
        title: "Food Delivery Platform",
        description: "Built a cross-platform food delivery app used by multiple restaurant chains.",
        image: "/food-delivery-app-screen.png",
      },
      {
        title: "Travel Companion App",
        description: "Created a travel app with offline capabilities and interactive maps.",
        image: "/travel-app-interface.png",
      },
    ],
    testimonials: [
      {
        client: "Lisa Chen, Product Owner at FitLife",
        text: "James delivered an exceptional mobile app that exceeded our expectations. His attention to detail and focus on user experience resulted in outstanding user feedback.",
      },
      {
        client: "Michael Brown, CEO at FoodConnect",
        text: "Working with James was a pleasure. He understood our requirements perfectly and delivered a high-quality app that has been crucial for our business growth.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Contact via platform",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
  {
    name: "Olivia Thompson",
    slug: "olivia-thompson",
    title: "Project Manager",
    image: "/professional-woman-manager-headshot.png",
    available: false,
    skills: [
      "Agile",
      "Scrum",
      "JIRA",
      "Risk Management",
      "Stakeholder Management",
      "Budgeting",
      "Resource Planning",
      "Strategic Planning",
    ],
    rating: 5.0,
    projects: 29,
    categories: ["projectManagers", "consultants"],
    location: "Portland, OR",
    hourlyRate: "$125-160",
    bio: "I'm a certified PMP with 8 years of experience managing complex technology projects. I specialize in Agile methodologies and have successfully delivered projects ranging from web applications to enterprise software implementations. My strength lies in coordinating cross-functional teams and ensuring projects are delivered on time, within scope, and on budget.",
    experience: [
      {
        company: "Tech Solutions Group",
        role: "Senior Project Manager",
        period: "2019 - Present",
        description: "Managing enterprise-level software implementation projects with budgets exceeding $1M.",
      },
      {
        company: "Digital Transformations",
        role: "Project Manager",
        period: "2016 - 2019",
        description: "Led Agile development teams for web and mobile application projects.",
      },
      {
        company: "Global Consulting Firm",
        role: "Project Coordinator",
        period: "2014 - 2016",
        description: "Assisted in managing technology projects and implementing project management processes.",
      },
    ],
    education: [
      {
        institution: "University of Oregon",
        degree: "M.B.A.",
        year: "2014",
      },
      {
        institution: "Portland State University",
        degree: "B.S. Business Administration",
        year: "2012",
      },
    ],
    certifications: [
      "Project Management Professional (PMP)",
      "Certified Scrum Master (CSM)",
      "PRINCE2 Practitioner",
      "Professional Scrum Product Owner",
    ],
    portfolio: [
      {
        title: "Enterprise CRM Implementation",
        description: "Managed the implementation of a CRM system for a company with 5,000+ employees.",
        image: "/enterprise-crm-dashboard.png",
      },
      {
        title: "E-commerce Platform Launch",
        description: "Led the development and launch of an e-commerce platform with integration to multiple systems.",
        image: "/ecommerce-platform-management.png",
      },
      {
        title: "Digital Transformation Initiative",
        description: "Managed a company-wide digital transformation project affecting multiple departments.",
        image: "/digital-transformation.png",
      },
    ],
    testimonials: [
      {
        client: "John Davis, CIO at Enterprise Corp",
        text: "Olivia managed our complex CRM implementation with exceptional skill. Her ability to coordinate multiple stakeholders and keep the project on track was impressive.",
      },
      {
        client: "Emma Wilson, CEO at Digital Retail",
        text: "Olivia's project management expertise was crucial to the success of our platform launch. She anticipated challenges and ensured smooth delivery despite tight deadlines.",
      },
    ],
    contact: {
      email: "Contact via platform",
      phone: "Contact via platform",
      linkedin: "View after connection",
      github: "Available after connection",
    },
  },
]

export default function ProfessionalProfile({ params }: { params: { slug: string } }) {
  const { slug } = params
  const professional = professionalsData.find((p) => p.slug === slug)
  const [activeTab, setActiveTab] = useState("about")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    alert("Your request has been sent! The professional will contact you soon.")
    setIsModalOpen(false)
  }

  if (!professional) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Professional Not Found</h1>
          <p className="text-gray-300 mb-6">The professional you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/community"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Back to TaskForce</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-900">
      <div className="container">
        {/* Back Button */}
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={16} />
          <span>Back to TaskForce</span>
        </Link>

        {/* Profile Header */}
        <div className="bg-gray-800 rounded-xl overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image src="/abstract-tech-background.png" alt="Cover background" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>

          <div className="px-6 py-6 md:px-10 md:py-8 relative">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-48 md:-mt-24 z-10">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-gray-800 mx-auto md:mx-0">
                  <Image
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">{professional.name}</h1>
                    <p className="text-xl text-gray-300 mt-1">{professional.title}</p>

                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-gray-300">{professional.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400" size={16} fill="currentColor" />
                        <span>{professional.rating.toFixed(1)}</span>
                        <span className="text-xs text-gray-400">({professional.projects} projects)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div
                      className={`flex items-center gap-1 px-3 py-1 rounded-full ${professional.available ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${professional.available ? "bg-green-500" : "bg-red-500"}`}
                      ></div>
                      <span className="text-sm font-medium">
                        {professional.available ? "Available for Work" : "Currently Busy"}
                      </span>
                    </div>
                    <div className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {professional.hourlyRate}/hr
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {professional.skills.map((skill, index) => (
                    <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === "about" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"}`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === "experience" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"}`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === "portfolio" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => setActiveTab("testimonials")}
                className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === "testimonials" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"}`}
              >
                Testimonials
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-gray-800 rounded-xl p-6">
              {/* About Tab */}
              {activeTab === "about" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-300 mb-8">{professional.bio}</p>

                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <div className="space-y-4 mb-8">
                    {professional.education.map((edu, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div>
                          <h4 className="font-medium">{edu.institution}</h4>
                          <p className="text-gray-400">{edu.degree}</p>
                        </div>
                        <div className="text-gray-500 mt-1 sm:mt-0">{edu.year}</div>
                      </div>
                    ))}
                  </div>

                  {professional.certifications && (
                    <>
                      <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
                        {professional.certifications.map((cert, index) => (
                          <li key={index}>{cert}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                  <div className="space-y-8">
                    {professional.experience.map((exp, index) => (
                      <div key={index} className="relative pl-8 border-l border-gray-700">
                        <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 -translate-x-1/2"></div>
                        <div className="mb-2">
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-gray-400">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.period}</p>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Portfolio Tab */}
              {activeTab === "portfolio" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {professional.portfolio.map((item, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials Tab */}
              {activeTab === "testimonials" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
                  <div className="space-y-6">
                    {professional.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-5">
                        <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                        <p className="text-gray-400 font-medium">— {testimonial.client}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                Contact this professional through our secure platform to protect privacy.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>Contact via platform</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>Available after connection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Professional Network</p>
                    <p>View after connection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Portfolio</p>
                    <p>Available after connection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Availability</h2>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-blue-400" size={18} />
                <span className="text-gray-300">Current Status:</span>
                <span className={`${professional.available ? "text-green-400" : "text-red-400"} font-medium`}>
                  {professional.available ? "Available" : "Busy"}
                </span>
              </div>

              {professional.available && (
                <div className="space-y-3">
                  <p className="text-gray-300">Available for:</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Full-time contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Part-time projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Consulting sessions</span>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <Calendar className="text-blue-400 mb-2" size={18} />
                <p className="text-gray-300 mb-2">Typical response time:</p>
                <p className="font-medium">Within 24 hours</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={!professional.available}
                className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                  professional.available ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 cursor-not-allowed opacity-60"
                }`}
              >
                <MessageSquare size={18} />
                <span>Request Talent</span>
              </button>
              {!professional.available && (
                <p className="text-sm text-gray-400 text-center mt-2">
                  This professional is currently busy. Please check back later or browse other available talent.
                </p>
              )}
            </div>

            {/* Request Talent Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-800 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h3 className="text-xl font-bold">Request {professional.name}'s Services</h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                      <X size={24} />
                    </button>
                  </div>

                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="project-title" className="block text-sm font-medium mb-1">
                          Project Title
                        </label>
                        <input
                          type="text"
                          id="project-title"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="E.g., Website Redesign, Mobile App Development"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="project-description" className="block text-sm font-medium mb-1">
                          Project Description
                        </label>
                        <textarea
                          id="project-description"
                          rows={4}
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Describe your project requirements, goals, and timeline..."
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-1">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a budget range</option>
                          <option value="< $1,000">Less than $1,000</option>
                          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000+">$25,000+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a timeline</option>
                          <option value="Less than 1 week">Less than 1 week</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="2-4 weeks">2-4 weeks</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3+ months">3+ months</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-info" className="block text-sm font-medium mb-1">
                          Your Contact Information
                        </label>
                        <input
                          type="email"
                          id="contact-info"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your email address"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="additional-info" className="block text-sm font-medium mb-1">
                          Additional Information
                        </label>
                        <textarea
                          id="additional-info"
                          rows={3}
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Any additional details you'd like to share..."
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                        >
                          Send Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
