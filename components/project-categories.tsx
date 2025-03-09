"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Star, Users, GitBranch } from "lucide-react"

type Category = "all" | "language" | "technology"
type Language = "python" | "javascript" | "cpp" | "rust" | "java" | "go"
type Technology = "ai" | "web" | "blockchain" | "ml" | "mobile" | "cloud"

interface Project {
  id: number
  title: string
  organization: string
  description: string
  language: Language
  technology: Technology
  stars: number
  contributors: number
  forks: number
}

export default function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [activeLanguage, setActiveLanguage] = useState<Language | null>(null)
  const [activeTechnology, setActiveTechnology] = useState<Technology | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "TensorFlow Models",
      organization: "Google",
      description: "Models and examples built with TensorFlow for machine learning applications.",
      language: "python",
      technology: "ml",
      stars: 1250,
      contributors: 87,
      forks: 430,
    },
    {
      id: 2,
      title: "React Native UI Kit",
      organization: "Facebook",
      description: "A comprehensive UI library for building cross-platform mobile applications.",
      language: "javascript",
      technology: "mobile",
      stars: 980,
      contributors: 64,
      forks: 320,
    },
    {
      id: 3,
      title: "Rust Blockchain Framework",
      organization: "Parity",
      description: "A modular blockchain framework written in Rust for building custom blockchains.",
      language: "rust",
      technology: "blockchain",
      stars: 750,
      contributors: 42,
      forks: 210,
    },
    {
      id: 4,
      title: "Cloud Native Toolkit",
      organization: "IBM",
      description: "Tools and libraries for building cloud-native applications and services.",
      language: "go",
      technology: "cloud",
      stars: 680,
      contributors: 38,
      forks: 190,
    },
    {
      id: 5,
      title: "Web Accessibility Framework",
      organization: "Mozilla",
      description: "A framework for building accessible web applications with modern JavaScript.",
      language: "javascript",
      technology: "web",
      stars: 820,
      contributors: 56,
      forks: 280,
    },
    {
      id: 6,
      title: "Computer Vision Library",
      organization: "OpenCV",
      description: "Open source computer vision and machine learning library.",
      language: "cpp",
      technology: "ai",
      stars: 1100,
      contributors: 72,
      forks: 390,
    },
    {
      id: 7,
      title: "Distributed Systems Framework",
      organization: "Apache",
      description: "A framework for building reliable, high-performance distributed systems.",
      language: "java",
      technology: "cloud",
      stars: 930,
      contributors: 61,
      forks: 310,
    },
    {
      id: 8,
      title: "Neural Network Compiler",
      organization: "Intel",
      description: "A compiler for optimizing neural network models for various hardware targets.",
      language: "cpp",
      technology: "ml",
      stars: 780,
      contributors: 45,
      forks: 230,
    },
  ]

  const languageColors: Record<Language, string> = {
    python: "bg-blue-600",
    javascript: "bg-yellow-600",
    cpp: "bg-pink-600",
    rust: "bg-orange-600",
    java: "bg-red-600",
    go: "bg-cyan-600",
  }

  const technologyColors: Record<Technology, string> = {
    ai: "bg-purple-600",
    web: "bg-green-600",
    blockchain: "bg-indigo-600",
    ml: "bg-blue-600",
    mobile: "bg-pink-600",
    cloud: "bg-cyan-600",
  }

  const languageLabels: Record<Language, string> = {
    python: "Python",
    javascript: "JavaScript",
    cpp: "C++",
    rust: "Rust",
    java: "Java",
    go: "Go",
  }

  const technologyLabels: Record<Technology, string> = {
    ai: "AI",
    web: "Web",
    blockchain: "Blockchain",
    ml: "Machine Learning",
    mobile: "Mobile",
    cloud: "Cloud",
  }

  const handleLanguageFilter = (language: Language) => {
    setActiveCategory("language")
    setActiveLanguage(activeLanguage === language ? null : language)
    setActiveTechnology(null)
  }

  const handleTechnologyFilter = (technology: Technology) => {
    setActiveCategory("technology")
    setActiveTechnology(activeTechnology === technology ? null : technology)
    setActiveLanguage(null)
  }

  const resetFilters = () => {
    setActiveCategory("all")
    setActiveLanguage(null)
    setActiveTechnology(null)
  }

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true
    if (activeCategory === "language" && activeLanguage) return project.language === activeLanguage
    if (activeCategory === "technology" && activeTechnology) return project.technology === activeTechnology
    return true
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="text-purple-500">GSoC Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect open-source project for your skills and interests. Filter by programming language or
            technology stack.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={resetFilters}
              className={activeCategory === "all" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              All Projects
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(languageLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant={activeLanguage === key ? "default" : "outline"}
                  onClick={() => handleLanguageFilter(key as Language)}
                  className={`${activeLanguage === key ? languageColors[key as Language] : ""}`}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(technologyLabels).map(([key, label]) => (
              <Button
                key={key}
                variant={activeTechnology === key ? "default" : "outline"}
                onClick={() => handleTechnologyFilter(key as Technology)}
                className={`${activeTechnology === key ? technologyColors[key as Technology] : ""}`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge className={`${languageColors[project.language]}`}>{languageLabels[project.language]}</Badge>
                  </div>
                  <div className="text-sm text-gray-400">{project.organization}</div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300">{project.description}</p>
                  <div className="mt-4">
                    <Badge variant="outline" className={`${technologyColors[project.technology]} bg-opacity-20`}>
                      {technologyLabels[project.technology]}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-1 text-blue-500" />
                    <span>{project.contributors}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <GitBranch className="h-4 w-4 mr-1 text-green-500" />
                    <span>{project.forks}</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-full px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

