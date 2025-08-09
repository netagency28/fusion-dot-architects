"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Bawly Modern House",
    location: "San Diego, California",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/06/GettyImages-105876964.jpg",
  },
  {
    title: "Holis Passive House",
    location: "Washington, D.C.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/06/GettyImages-1149050302.jpg",
  },
  {
    title: "GG Art Gallery",
    location: "Vancouver, British Columbia",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/06/GettyImages-1284005435.jpg",
  },
]

function SelectedWork() {
  return (
    <section className="px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Selected Work</h2>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm font-medium underline underline-offset-4 hover:opacity-70 transition"
        >
          Full portfolio
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}


export { SelectedWork }