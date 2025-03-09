"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Bell } from "lucide-react"


export default function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setMessage("");

      try {
        const res = await fetch("/api/joinWaitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
  
        const data = await res.json();
        if (res.ok) {
          setSubmitted(true)
          setMessage(data.message)
        } else {
          setMessage(data.error)
        }
      } catch (_error) {
        setMessage("Something went wrong, please try again.")
        console.error(_error)
      } finally {
        setLoading(false)
      }
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/90 to-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 shadow-[0_0_25px_rgba(168,85,247,0.1)]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-sm font-medium mb-6">
                  <Bell className="h-4 w-4 mr-2" />
                  Stay Updated
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Not Ready to Commit? <span className="text-purple-500">Join Our Waitlist</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Be the first to know when we launch new features, special offers, or when more spots become available.
                  No spam, just timely updates about GSoC opportunities.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-12 px-6"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="flex items-center">
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Joining...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Join Waitlist
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </div>
                        )}
                      </Button>
                      {message && (
                        <p className="text-red-500 text-sm">{message}</p>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">We respect your privacy. Unsubscribe at any time.</p>
                  </form>

                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 border border-green-500/30 rounded-lg p-4 flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-400 mb-1">You are on the list!</h4>
                      <p className="text-gray-300">
                        Thanks for joining our waitlist. We will notify you about new features and when spots become
                        available.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="md:w-2/5 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
                  <div className="relative bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-xs">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                        <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></div>
                        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-pink-500 rounded-full mr-3"></div>
                        <div className="h-3 bg-gray-700 rounded w-4/5"></div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { count: "500+", label: "Students Helped" },
                  { count: "200+", label: "Projects Listed" },
                  { count: "50+", label: "Organizations" },
                  { count: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-purple-400">{stat.count}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

