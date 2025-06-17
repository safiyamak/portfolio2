"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Butterfly",
    description:
      "Butterfly is a health monitoring application built for autoimmune patients in order to make communication between patients and doctors more efficient. Awarded Hamilton Chamber of Commerce Innovation award.",
    image: "/Logo Milestone 2.png",
    tags: ["UI/UX", "Mobile Design"],
  },
  {
    id: 2,
    title: "Copyright Guardian",
    description:
      "A hackathon project aimed at artists, allowing them to look for their work and see if it is being used in large multimodal AI databases.",
    image: "/Screenshot 2025-06-17 at 01-48-43 copyright-guardian-dashboard.png",
    tags: ["Machine Learning", "React", "Vite", "Typescript", "Python"],
  },
  {
    id: 3,
    title: "Blood Glucose Control",
    description:
      "Worked in design team aimed at improving patient outcomes for those with type 1 diabetes. Currently finding causal effect between blood glucose and fitbit data. Utilizing time series data that is linked to blood glucose.",
    image: "/185291429.png",
    tags: ["Machine Learning", "Python", "RNN", "Time Series Data", "Research"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-4xl font-mono">My Projects</h1>
            <p className="text-gray-400 mt-2">A collection of my recent work and design explorations</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[3/2] bg-gray-900 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-300 group-hover:scale-105 ${
                    project.id === 3 ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-mono group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-900 rounded-xl">
          <h2 className="text-2xl font-mono mb-4">Like what you see?</h2>
          <p className="text-gray-400 mb-6">Let's work together to bring your ideas to life</p>
          <Button variant="outline" className="rounded-full">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
