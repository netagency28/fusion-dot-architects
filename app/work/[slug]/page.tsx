"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Users, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // Mock project data - in a real app, this would come from a CMS or API
  const project = {
    title: "Modern Residence",
    location: "Mumbai",
    year: "2023",
    category: "Residential",
    client: "The Kumar Family",
    area: "4,500 sq ft",
    duration: "18 months",
    heroImage: "/images/project-1.jpg",
    description:
      "This contemporary family home represents a perfect balance between modern design principles and comfortable living. Located in the heart of Mumbai, the residence seamlessly blends indoor and outdoor spaces while maximizing natural light and ventilation.",
    challenge:
      "The primary challenge was to create a spacious, light-filled home on a relatively compact urban plot while ensuring privacy from neighboring buildings and busy streets.",
    solution:
      "Our design solution involved creating a series of interconnected courtyards that bring natural light deep into the home while providing private outdoor spaces. The use of local materials and contemporary forms creates a home that feels both modern and rooted in its context.",
    images: [
      "/images/project-1.jpg",
      "/images/project-2.jpg",
      "/images/project-3.jpg",
      "/images/interior-design.jpg",
      "/images/modern-building.jpg",
      "/images/construction-site.jpg",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative z-10 w-full p-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <Link
                href="/work"
                className="inline-flex items-center text-white text-sm hover:text-gray-300 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Work
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-light tracking-wide text-white mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center text-white text-lg space-x-6"
            >
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {project.year}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-light mb-8 tracking-wide">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{project.description}</p>

              <div className="mb-12">
                <h3 className="text-xl font-light mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-light mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-8">Project Details</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Client</div>
                    <div className="font-light">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Area</div>
                    <div className="font-light">{project.area}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-light">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-light">{project.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Project Gallery */}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-16 tracking-wide text-center">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative h-80 overflow-hidden rounded-lg"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Next Project */}
      <AnimatedSection className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-8 tracking-wide">Explore More Projects</h2>
            <Link href="/work">
              <Button variant="outline" size="lg">
                View All Work
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Get In Touch
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
