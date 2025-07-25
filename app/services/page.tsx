import Image from "next/image"
import Link from "next/link"
import { Brain, Code, BarChart2, Users, Lightbulb, ArrowRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import CTASection from "@/components/cta-section"

export default function ServicesPage() {
  const industrySolutions = [
    {
      image: "/manufacturing-solution-new.png",
      alt: "Manufacturing Solutions",
      title: "Manufacturing",
      description: "",
      href: "/solutions/manufacturing",
    },
    {
      image: "/finance-solution-new.png",
      alt: "Financial Services Solutions",
      title: "Financial Services",
      description: "",
      href: "/solutions/financial-services",
    },
    {
      image: "/healthcare-solution-new.png",
      alt: "Healthcare Solutions",
      title: "Healthcare",
      description: "",
      href: "/solutions/healthcare",
    },
    {
      image: "/retail-solution-new.png",
      alt: "Retail Solutions",
      title: "Retail",
      description: "",
      href: "/solutions/retail",
    },
    {
      image: "/logistics-solution-new.png",
      alt: "Logistics & Supply Chain Solutions",
      title: "Logistics & Supply Chain",
      description: "",
      href: "/solutions/logistics",
    },
    {
      image: "/energy-solution-new.png",
      alt: "Energy & Utilities Solutions",
      title: "Energy & Utilities",
      description: "",
      href: "/solutions/energy",
    },
  ]

  const crossIndustrySolutions = [
    {
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI and machine learning to automate processes, gain insights from your data, and make better decisions.",
      href: "/solutions/ai-machine-learning",
    },
    {
      title: "Cloud Transformation",
      description:
        "Modernize your infrastructure, improve scalability, and reduce costs with our cloud transformation solutions.",
      href: "/solutions/cloud-transformation",
    },
    {
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with our advanced analytics solutions, from descriptive to predictive and prescriptive analytics.",
      href: "/solutions/data-analytics",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 dark:bg-tesseract-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Services & Solutions</h1>
          <p className="text-xl text-tesseract-100 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive services and tailored solutions to drive innovation, efficiency, and growth across industries
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 gradient-text">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert services to transform your business and drive digital innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Strategic Consulting"
              description="Expert guidance to navigate digital transformation and optimize business processes."
              icon={<BarChart2 size={32} />}
              href="/services/consulting"
              className="before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
            />

            <ServiceCard
              title="Digital Transformation"
              description="End-to-end solutions to modernize your business and enhance customer experiences."
              icon={<Lightbulb size={32} />}
              href="/services/digital-transformation"
              className="before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
            />

            <ServiceCard
              title="Software Development"
              description="Custom software solutions tailored to your unique business requirements."
              icon={<Code size={32} />}
              href="/services/software-development"
              className="before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
            />

            <ServiceCard
              title="Artificial Intelligence"
              description="AI-powered solutions to automate processes and gain valuable insights from your data."
              icon={<Brain size={32} />}
              href="/services/artificial-intelligence"
              className="before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
            />

            <ServiceCard
              title="Recruitment Solutions"
              description="Talent acquisition services to help you build high-performing teams."
              icon={<Users size={32} />}
              href="/services/recruitment"
              className="before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
            />
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 gradient-text">Industry Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tailored solutions to address the unique challenges of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
              >
                <div className="relative h-48">
                  <Image src={solution.image || "/placeholder.svg"} alt={solution.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Solutions */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 gradient-text">Cross-Industry Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Powerful solutions that deliver value across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crossIndustrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 gradient-text">Our Approach</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to deliver successful outcomes for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="w-16 h-16 bg-tesseract-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-300 font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discover</h3>
              <p className="text-gray-300">
                We analyze your business needs, challenges, and objectives to understand your unique requirements.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="w-16 h-16 bg-tesseract-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-300 font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300">
                We create a tailored strategy and solution design that aligns with your business goals.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="w-16 h-16 bg-tesseract-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-300 font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implement</h3>
              <p className="text-gray-300">
                We execute the strategy with precision, leveraging our expertise and best practices.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="w-16 h-16 bg-tesseract-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-300 font-bold text-xl">04</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimize</h3>
              <p className="text-gray-300">
                We continuously monitor, measure, and refine to ensure optimal performance and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to discuss how our services and solutions can help your business thrive in the digital age."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
