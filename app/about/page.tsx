"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Award, Users, Target, Heart } from "lucide-react"
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

export default function About() {
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
          <Image src="/images/modern-building.jpg" alt="About Us" fill className="object-cover" priority />
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
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">Our Story</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2019, Fusion Dot Architects has been at the forefront of contemporary design, creating spaces
              that inspire and endure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
              Fusion Dot Architects is a multi-disciplinary design and build firm passionate about transforming spaces into meaningful environments. We combine the precision of architectural design, the creativity of interior styling, the structure of construction, and the aesthetics of furniture craftsmanship – all under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
              With over 50+ completed projects, Fusion Dot Architects has established a strong reputation for delivering functional and timeless spaces in both residential and commercial sectors.

              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-96">
              <Image src="/images/interior-design.jpg" alt="Our Studio" fill className="object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-wide">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Purpose-Driven",
                desc: "Every design decision is guided by purpose and meaning, creating spaces that truly serve their users.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                desc: "We pursue excellence in every detail, from initial concept to final execution.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                desc: "We believe the best results come from close collaboration with our clients and partners.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Passion",
                desc: "Our love for design and architecture drives us to create extraordinary spaces.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4 text-gray-700">{value.icon}</div>
                <h3 className="text-xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      {/* <AnimatedSection className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-wide">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Founding Principal",
                bio: "With over 20 years of experience, Arjun leads our architectural vision and client relationships.",
                image: "/images/team-member.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Design Director",
                bio: "Priya oversees our interior design practice and ensures every space tells a unique story.",
                image: "/images/team-member.jpg",
              },
              {
                name: "Vikram Singh",
                role: "Construction Head",
                bio: "Vikram brings our designs to life with his expertise in construction and project management.",
                image: "/images/team-member.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-light mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with our expertise and passion for design.
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
