import { Button } from "@/components/ui/button"
import { ArrowRight, Code, BookOpen, Users, Zap } from "lucide-react"
import ProjectCategories from "@/components/project-categories"
import ResourceHub from "@/components/resource-hub"
import HeroBackground from "@/components/hero-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WaitlistSection from "@/components/waitlist-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Find the Best GSoC Projects
            <span className="block mt-2">Based on Your Skills & Interests</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore open-source projects categorized by languages & tech stacks. Get the ultimate GSoC-ready toolkit
            with curated resources, proposal tips, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-medium"
            >
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-950/30 rounded-full px-8 py-6 text-lg font-medium"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-purple-500">GSoC Finder</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-indigo-500" />,
                title: "Curated Projects",
                description: "Find the best open-source projects filtered by programming languages and technologies.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-purple-500" />,
                title: "Learning Resources",
                description: "Access comprehensive guides on proposal writing and open-source contribution.",
              },
              {
                icon: <Users className="h-10 w-10 text-pink-500" />,
                title: "Community Support",
                description: "Connect with mentors and past GSoC participants for guidance and advice.",
              },
              {
                icon: <Zap className="h-10 w-10 text-blue-500" />,
                title: "Success Stories",
                description: "Learn from real case studies of successful GSoC applications and projects.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group"
              >
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg w-fit group-hover:bg-gray-800/80 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <ProjectCategories />

      {/* Resources Section */}
      <ResourceHub />

      {/* Pricing Section */}

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

