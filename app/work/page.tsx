"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
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
      id: "commercial-fish-market",
      title: "Fish Market Design",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692671/MA_FISH_3_h2dexk.jpg",
      description: "Innovative fish market design combining functionality with modern commercial architecture.",
    },
    {
      id: "modern-architecture",
      title: "Modern Architectural Design",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692536/10_1_-_Photo_zo09ut.jpg",
      description: "Contemporary architectural design showcasing innovative structural solutions.",
    },
    {
      id: "modern-interior",
      title: "Modern Interior Design",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693036/02-6_rje7ml.jpg",
      description: "Contemporary interior design with clean lines and modern aesthetics.",
    },
    {
      id: "commercial-office",
      title: "Office Complex",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692662/11_5_-_Photo_le1raa.jpg",
      description: "Sophisticated office complex with innovative design solutions.",
    },
    {
      id: "residential-architecture",
      title: "Residential Architecture",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692526/10_2_-_Photo_jnta93.jpg",
      description: "Elegant residential architecture with clean lines and functional design.",
    },
    {
      id: "luxury-interior",
      title: "Luxury Interior Design",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693017/4_uaf35x.jpg",
      description: "High-end interior design with premium materials and finishes.",
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
                {/* <Link href={`/work/${project.id}`}> */}
                <div className="block">
                  <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    {/* <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-sm">
                        <span>View Project</span>
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div> */}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-light">{project.title}</h3>
                      <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                {/* </Link> */}
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
