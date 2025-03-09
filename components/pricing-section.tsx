"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check} from "lucide-react"
import { motion } from "framer-motion"

export default function PricingSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [remainingSpots, setRemainingSpots] = useState({ tier1: 10, tier2: 50 })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 12, minutes: 45, seconds: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const plans = [
    {
      name: "Early Bird",
      description: "First 10 users get exclusive access",
      price: "₹99.99",
      originalPrice: "₹500.00",
      discount: "80.01% OFF",
      features: [
        "All GSoC project listings",
        "Proposal templates",
        "Basic resource access",
        "Community forum access",
        "Email support",
      ],
      remainingSpots: remainingSpots.tier1,
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Limited Offer",
      description: "Next 50 users get special pricing",
      price: "₹249.99",
      originalPrice: "₹500.00",
      discount: "50% OFF",
      features: [
        "All GSoC project listings",
        "Proposal templates",
        "Full resource access",
        "Community forum access",
        "Priority email support",
        "Mentor matching",
      ],
      remainingSpots: remainingSpots.tier2,
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Regular",
      description: "Standard pricing after promotion ends",
      price: "₹500.00",
      originalPrice: "₹500.00",
      discount: null,
      features: [
        "All GSoC project listings",
        "Proposal templates",
        "Full resource access",
        "Community forum access",
        "Priority email support",
        "Mentor matching",
        "1-on-1 proposal review",
      ],
      remainingSpots: null,
      cta: "Get Started",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get <span className="text-purple-500">Exclusive Access</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Limited-time offer for early users. Sign up now to secure your discount before it expires.
          </p>

          {/* <div className="mt-8 flex justify-center">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-purple-800/30 p-4 inline-flex items-center">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-300">Offer ends in: </span>
              <div className="ml-3 flex space-x-2">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <div className="bg-gray-800 text-white px-2 py-1 rounded-md font-mono">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card
                className={`bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] flex flex-col w-full ${plan.popular ? "relative border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className={`${plan.popular ? "pt-8" : ""}`}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.discount && (
                        <span className="ml-2 text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                      )}
                    </div>
                    {plan.discount && (
                      <span className="inline-block mt-1 bg-purple-900/30 text-purple-400 text-xs font-medium px-2 py-1 rounded">
                        {plan.discount}
                      </span>
                    )}
                  </div>

                  {plan.remainingSpots !== null && (
                    <div className="mb-6">
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                          style={{ width: `${(plan.remainingSpots / (plan.name === "Early Bird" ? 10 : 50)) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        <span className="text-purple-400 font-medium">{plan.remainingSpots}</span> spots remaining
                      </p>
                    </div>
                  )}

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 bg-purple-900/30 rounded-full p-1">
                          <Check className="h-3 w-3 text-purple-400" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Not sure which plan is right for you?{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              Contact us
            </a>{" "}
            for help.
          </p>
        </div>
      </div>
    </section>
  )
}

