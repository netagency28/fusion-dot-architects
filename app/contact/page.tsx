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
import ContactForm from "@/components/ContactForm";


function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`opacity-0 translate-y-16 animate-fade-in-up ${className}`}>
      {children}
    </div>
  )
}

export default function Contact() {

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
        <div className="absolute inset-0">
          <Image src="/images/architectural-drawing.jpg" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center text-sm hover:text-gray-300 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

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
                    <p className="text-gray-600">fusiondotcreatives@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-light text-lg mb-2">Studio Address</h4>
                    <p className="text-gray-600">
                      3rd Street PRP nagar cross near, <br/> main, road, near Sarada College Road, <br/> Salem, Tamil Nadu 636016
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
                    <a
                      key={social}
                      href="#"
                      className="text-gray-600 hover:text-black text-sm hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {social}
                    </a>
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
          
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2419522554064!2d78.14729607538771!3d11.6772575419316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1fc04f02ea7%3A0x31b98fe21e754bd6!2sFUSION%20DOT%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1757009366392!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Fusion Dot Architects Location"
              onLoad={() => console.log('Map iframe loaded successfully')}
              onError={(e) => console.error('Map iframe failed to load:', e)}
            />
            {/* Fallback content in case iframe fails */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-600">
              <div className="text-center">
                <p className="text-lg mb-2">Loading map...</p>
                <p className="text-sm">If the map doesn't load, please refresh the page</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
