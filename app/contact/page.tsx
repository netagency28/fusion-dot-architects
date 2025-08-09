"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/Navbar";


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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-scree">
      {/* Navigation */}
      {/* <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-light tracking-wide">
            <Link href="/">Fusion Dot Architects</Link>
          </motion.div>
          <div className="hidden md:flex space-x-8 text-sm font-light">
            {[
              { name: "Work", href: "/work" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`hover:text-gray-600 transition-colors cursor-pointer ${
                    item.href === "/contact" ? "text-black font-medium" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav> */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src="/images/architectural-drawing.jpg" alt="Contact Us" fill className="object-cover" priority />
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
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-wide">Start Your Project</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to bring your vision to life? Fill out the form below and we'll get back to you within 24 hours to
                discuss your project in detail.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-light mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-light mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="architecture">Architecture</option>
                      <option value="interior">Interior Design</option>
                      <option value="furniture">Furniture Design</option>
                      <option value="construction">Construction</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    className="w-full"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-wide">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help bring your architectural vision to life. Reach out to us through any of the channels
                below, or visit our studio for a consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-light text-lg mb-2">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-light text-lg mb-2">Email</h4>
                    <p className="text-gray-600">hello@fusiondot.com</p>
                    <p className="text-gray-600">projects@fusiondot.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-light text-lg mb-2">Studio Address</h4>
                    <p className="text-gray-600">
                      123 Design District
                      <br />
                      Bandra West, Mumbai 400050
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-light text-lg mb-2">Studio Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-light text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ y: -2 }}
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16 tracking-wide">Visit Our Studio</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
