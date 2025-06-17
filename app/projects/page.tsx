"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with seamless user experience, featuring advanced filtering, secure payments, and responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "Web Design", "React"],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Intuitive mobile banking application focused on security and ease of use, with biometric authentication and real-time notifications.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile Design", "Fintech", "UX Research"],
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "Comprehensive dashboard for SaaS analytics with data visualization, user management, and customizable reporting features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Dashboard", "Data Viz", "B2B"],
  },
  {
    id: 4,
    title: "Healthcare Portal",
    description:
      "Patient-centered healthcare portal enabling appointment scheduling, medical records access, and telemedicine consultations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Healthcare", "Accessibility", "Web App"],
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Educational platform with interactive courses, progress tracking, and collaborative learning tools for students and educators.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["EdTech", "Interactive", "Platform"],
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description:
      "Property listing platform with advanced search, virtual tours, and integrated mortgage calculator for buyers and sellers.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Real Estate", "Search", "Virtual Tours"],
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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
