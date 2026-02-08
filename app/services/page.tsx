"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building, Home, Sofa, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import { Nabla } from "next/font/google"

function AnimatedSection({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen">
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
          <Image src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692669/MA_FISH_4_jdbwug.jpg" alt="Our Services" fill className="object-cover" priority />
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
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">Comprehensive Design Solutions</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From initial concept to final construction, we offer a full range of architectural and design services to
            bring your vision to life.
          </p>
        </div>
      </AnimatedSection>

      {/* Architecture Service */}
      <AnimatedSection className="py-24 bg-gray-50" id="architecture">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-96">
              <Image src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692536/10_1_-_Photo_zo09ut.jpg" alt="Architecture Services" fill className="object-cover rounded-lg" />
            </motion.div>
            <div>
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 mr-4 text-gray-700" />
                <h3 className="text-3xl font-light">Architecture</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our architectural services encompass everything from conceptual design to construction documentation. We
                create innovative, sustainable, and functional buildings that respond to their context and serve their
                users beautifully.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Conceptual Design & Master Planning</li>
                <li>• Schematic Design Development</li>
                <li>• Construction Documentation</li>
                <li>• Building Permits & Approvals</li>
                <li>• Sustainable Design Solutions</li>
                <li>• 3D Visualization & Renderings</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline">Discuss Your Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Interior Design Service */}
      <AnimatedSection className="py-24" id="interior">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Home className="w-8 h-8 mr-4 text-gray-700" />
                <h3 className="text-3xl font-light">Interior Design</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our interior design team creates sophisticated, functional spaces that reflect your personality and
                lifestyle. We handle everything from space planning to furniture selection, ensuring every detail
                contributes to a cohesive and beautiful environment.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Space Planning & Layout Design</li>
                <li>• Color Schemes & Material Selection</li>
                <li>• Lighting Design & Specification</li>
                <li>• Furniture Selection & Procurement</li>
                <li>• Art & Accessory Curation</li>
                <li>• Project Management & Installation</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline">Start Your Interior Project</Button>
              </Link>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693036/02-6_rje7ml.jpg"
                alt="Interior Design Services"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Furniture Design Service */}
      <AnimatedSection className="py-24 bg-gray-50" id="furniture">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693021/01_6_-_Photo_zocpd0.jpg"
                alt="Furniture Design Services"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <div>
              <div className="flex items-center mb-6">
                <Sofa className="w-8 h-8 mr-4 text-gray-700" />
                <h3 className="text-3xl font-light">Furniture Design</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We design and create custom furniture pieces that perfectly complement your architectural vision. Our
                furniture design service ensures that every piece is not only beautiful but also functional and built to
                last.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Furniture Design</li>
                <li>• Built-in Storage Solutions</li>
                <li>• Material & Finish Selection</li>
                <li>• Prototype Development</li>
                <li>• Manufacturing Coordination</li>
                <li>• Installation & Quality Control</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline">Design Custom Furniture</Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Construction Service */}
      <AnimatedSection className="py-24" id="construction">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Hammer className="w-8 h-8 mr-4 text-gray-700" />
                <h3 className="text-3xl font-light">Construction</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our construction team brings designs to life with meticulous attention to detail and quality. We manage
                every aspect of the construction process, ensuring your project is completed on time, within budget, and
                to the highest standards.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Project Management & Coordination</li>
                <li>• Quality Control & Inspections</li>
                <li>• Contractor Selection & Management</li>
                <li>• Budget Management & Cost Control</li>
                <li>• Timeline Planning & Scheduling</li>
                <li>• Final Walkthrough & Handover</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline">Start Construction</Button>
              </Link>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692619/48793eb6-dee6-407a-95f3-7a0ea311c4e9_hwvdna.jpg"
                alt="Construction Services"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-wide">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We start by understanding your needs, goals, and vision for the project.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Our team develops creative solutions that align with your requirements.",
              },
              {
                step: "03",
                title: "Development",
                desc: "We refine the design and prepare detailed documentation for construction.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "We oversee construction and ensure flawless execution of the design.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-light text-gray-300 mb-4">{phase.step}</div>
                <h4 className="text-xl font-light mb-4">{phase.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to Begin?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and explore how our services can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Start Your Project
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
