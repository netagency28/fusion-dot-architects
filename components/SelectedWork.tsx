"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "",
    location: "",
    image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756047461/1_rknxoa.jpg",
  },
  {
    title: "",
    location: "",
    image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756047461/3_ocsui2.jpg",
  },
  {
    title: "",
    location: "",
    image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756047460/2_uiiaxb.jpg",
  },
]

export default function SelectedWork() {
  return (
    <section className="px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Selected Work</h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-medium underline underline-offset-4 hover:opacity-70 transition"
        >
          Our Services
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="opacity-0 translate-y-10 animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative w-full h-[420px] mb-4 overflow-hidden rounded">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{project.location}</p>
          </div>
        ))}
      </div>
    </section>
  )
}