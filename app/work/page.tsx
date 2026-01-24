"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react"
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

export default function Work() {
  const projects = [
    {
      id: "modern-residence",
      title: "Modern Residence",
      location: "Mumbai",
      year: "2023",
      category: "Residential",
      image: "/images/project-1.jpg",
      description: "A contemporary family home that seamlessly blends indoor and outdoor living.",
    },
    {
      id: "corporate-office",
      title: "Corporate Office",
      location: "Delhi",
      year: "2023",
      category: "Commercial",
      image: "/images/project-2.jpg",
      description: "A modern workspace designed to inspire creativity and collaboration.",
    },
    {
      id: "luxury-villa",
      title: "Luxury Villa",
      location: "Goa",
      year: "2022",
      category: "Residential",
      image: "/images/project-3.jpg",
      description: "An elegant beachfront villa with panoramic ocean views.",
    },
    {
      id: "boutique-hotel",
      title: "Boutique Hotel",
      location: "Jaipur",
      year: "2022",
      category: "Hospitality",
      image: "/images/modern-building.jpg",
      description: "A luxury boutique hotel that celebrates local culture and craftsmanship.",
    },
    {
      id: "art-gallery",
      title: "Contemporary Art Gallery",
      location: "Bangalore",
      year: "2021",
      category: "Cultural",
      image: "/images/interior-design.jpg",
      description: "A minimalist gallery space designed to showcase contemporary art.",
    },
    {
      id: "residential-complex",
      title: "Residential Complex",
      location: "Pune",
      year: "2021",
      category: "Residential",
      image: "/images/construction-site.jpg",
      description: "A sustainable residential development with community-focused design.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src="/images/hero-architecture.jpg" alt="Our Work" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <Link href="/" className="inline-flex items-center text-sm hover:text-gray-300 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-light tracking-wide"
          >
            Our Work
          </motion.h1>
        </div>
      </section>

      {/* Projects Grid */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">Selected Projects</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of architectural and design projects, each one a unique response to our clients'
              needs and the specific challenges of their sites.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link href={`/work/${project.id}`}>
                  <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-sm">
                        <span>View Project</span>
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-light">{project.title}</h3>
                      <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We'd love to hear about your vision and explore how we can bring it to life.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-8 py-3 rounded-lg font-light hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </motion.button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
