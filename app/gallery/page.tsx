"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"

export default function Gallery() {
  const projects = [
    {
      id: "architecture-project-1",
      title: "Modern Architectural Design",
      location: "Mumbai",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692536/10_1_-_Photo_zo09ut.jpg",
      description: "Contemporary architectural design showcasing innovative structural solutions and modern aesthetics.",
    },
    {
      id: "architecture-project-2",
      title: "Residential Architecture",
      location: "Delhi",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692534/IMG_0247_kn4tue.png",
      description: "Elegant residential architecture with clean lines and functional design principles.",
    },
    {
      id: "commercial-project-1",
      title: "Fish Market Design",
      location: "Kochi",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692671/MA_FISH_3_h2dexk.jpg",
      description: "Innovative fish market design combining functionality with modern commercial architecture.",
    },
    {
      id: "interior-project-1",
      title: "Modern Interior Design",
      location: "Mumbai",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693036/02-6_rje7ml.jpg",
      description: "Contemporary interior design with clean lines and modern aesthetics.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-architecture.jpg" alt="Gallery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center text-sm hover:text-gray-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Gallery
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Explore our complete portfolio of architectural and design projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">
              {projects.length} Projects Found
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <Link href={`/work/${project.id}`}>
                  <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-light hover:bg-gray-100 transition-colors">
                Get In Touch
              </button>
            </Link>
            <Link href="/work">
              <button className="border border-white text-white px-8 py-3 rounded-lg font-light hover:bg-white hover:text-black transition-colors">
                View All Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}