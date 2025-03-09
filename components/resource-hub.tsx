"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, Award, Code, ArrowRight } from "lucide-react"

export default function ResourceHub() {
  const resources = [
    {
      icon: <FileText className="h-10 w-10 text-indigo-500" />,
      title: "Proposal Writing Guide",
      description: "Learn how to write a compelling GSoC proposal that stands out from the competition.",
      link: "#",
      color: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-500" />,
      title: "Open Source Contribution",
      description: "Step-by-step guide to making your first open source contribution for GSoC.",
      link: "#",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: <Award className="h-10 w-10 text-pink-500" />,
      title: "Success Stories",
      description: "Read case studies from successful GSoC participants and learn from their experiences.",
      link: "#",
      color: "from-pink-500/20 to-pink-500/5",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Technical Preparation",
      description: "Technical skills and knowledge you need to prepare for your GSoC project.",
      link: "#",
      color: "from-blue-500/20 to-blue-500/5",
    },
  ]

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
    <section id="resources" className="py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Ultimate <span className="text-purple-500">GSoC Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn, contribute, and succeed with our comprehensive resources designed to help you excel in your GSoC
            journey.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] h-full flex flex-col overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                <CardHeader>
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg w-fit">{resource.icon}</div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-gray-400">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      Step-by-step tutorials
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      Expert tips and best practices
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      Real-world examples
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30 w-full justify-between group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-purple-800/30 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get Personalized Guidance</h3>
              <p className="text-gray-300 mb-6">
                Connect with mentors and past GSoC participants who can provide personalized feedback on your proposals
                and guide you through the application process.
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-full px-6">
                Connect with Mentors
              </Button>
            </div>
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Upcoming Workshops</h4>
              <ul className="space-y-4">
                {[
                  {
                    title: "Crafting the Perfect GSoC Proposal",
                    date: "March 15, 2025",
                    time: "10:00 AM UTC",
                  },
                  {
                    title: "Technical Interview Preparation",
                    date: "March 22, 2025",
                    time: "2:00 PM UTC",
                  },
                  {
                    title: "Open Source Contribution Workshop",
                    date: "March 29, 2025",
                    time: "11:00 AM UTC",
                  },
                ].map((workshop, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <div>
                      <p className="font-medium">{workshop.title}</p>
                      <p className="text-sm text-gray-400">
                        {workshop.date} • {workshop.time}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-purple-500 text-purple-400 hover:bg-purple-950/30"
                    >
                      Register
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

