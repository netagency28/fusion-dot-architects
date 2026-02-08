"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"

export default function Gallery() {
  const projects = [
    // Commercial Projects
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
      id: "commercial-project-2",
      title: "Fish Market Concept",
      location: "Kochi",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692671/fish_v4_pn9hg1.png",
      description: "Modern commercial space designed for optimal functionality and aesthetic appeal.",
    },
    {
      id: "commercial-project-3",
      title: "Market Architecture",
      location: "Kochi",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692669/MA_FISH_msi6kf.jpg",
      description: "Contemporary market design with innovative structural solutions.",
    },
    {
      id: "commercial-project-4",
      title: "Commercial Space Design",
      location: "Kochi",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692669/MA_FISH_4_jdbwug.jpg",
      description: "Functional commercial architecture with modern design principles.",
    },
    {
      id: "commercial-project-5",
      title: "Commercial Building",
      location: "Mumbai",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692664/29_19_-_Photo_adprge.jpg",
      description: "Modern commercial building showcasing contemporary architectural design.",
    },
    {
      id: "commercial-project-6",
      title: "Office Complex",
      location: "Delhi",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692662/11_5_-_Photo_le1raa.jpg",
      description: "Sophisticated office complex with innovative design solutions.",
    },
    {
      id: "commercial-project-7",
      title: "Commercial Development",
      location: "Bangalore",
      year: "2024",
      category: "Commercial",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692619/48793eb6-dee6-407a-95f3-7a0ea311c4e9_hwvdna.jpg",
      description: "Contemporary commercial development with modern amenities.",
    },
    
    // Architecture Projects
    {
      id: "architecture-project-1",
      title: "Modern Architectural Design",
      location: "Mumbai",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692536/10_1_-_Photo_zo09ut.jpg",
      description: "Contemporary architectural design showcasing innovative structural solutions.",
    },
    {
      id: "architecture-project-2",
      title: "Residential Architecture",
      location: "Delhi",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692526/10_2_-_Photo_jnta93.jpg",
      description: "Elegant residential architecture with clean lines and functional design.",
    },
    {
      id: "architecture-project-3",
      title: "Contemporary Building",
      location: "Pune",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692522/IMG_1743_dpafzx.png",
      description: "Modern building design with innovative architectural elements.",
    },
    {
      id: "architecture-project-4",
      title: "Architectural Excellence",
      location: "Chennai",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692522/IMG_1744_qxnmok.png",
      description: "Sophisticated architectural design with attention to detail.",
    },
    {
      id: "architecture-project-5",
      title: "Modern Structure",
      location: "Hyderabad",
      year: "2024",
      category: "Architecture",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692520/IMG_0172_kxzjb5.jpg",
      description: "Contemporary structural design with modern aesthetics.",
    },
    
    // Interior Projects
    {
      id: "interior-project-1",
      title: "Modern Interior Design",
      location: "Mumbai",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693036/02-6_rje7ml.jpg",
      description: "Contemporary interior design with clean lines and modern aesthetics.",
    },
    {
      id: "interior-project-2",
      title: "Elegant Interior Space",
      location: "Delhi",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693032/09-2_aq4oq5.jpg",
      description: "Sophisticated interior design with luxurious finishes.",
    },
    {
      id: "interior-project-3",
      title: "Contemporary Interior",
      location: "Bangalore",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693021/01_6_-_Photo_zocpd0.jpg",
      description: "Modern interior space with functional design elements.",
    },
    {
      id: "interior-project-4",
      title: "Luxury Interior Design",
      location: "Pune",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693017/4_uaf35x.jpg",
      description: "High-end interior design with premium materials and finishes.",
    },
    {
      id: "interior-project-5",
      title: "Modern Living Space",
      location: "Chennai",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693006/2_10_-_Photo_dokgyt.jpg",
      description: "Contemporary living space with innovative design solutions.",
    },
    {
      id: "interior-project-6",
      title: "Residential Interior",
      location: "Hyderabad",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757693004/IMG_0879_mpfgqj.jpg",
      description: "Elegant residential interior with modern amenities.",
    },
    {
      id: "interior-project-7",
      title: "Designer Interior",
      location: "Kolkata",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692999/01_10_-_Photo_awygxp.jpg",
      description: "Sophisticated interior design with contemporary styling.",
    },
    {
      id: "interior-project-8",
      title: "Premium Interior Space",
      location: "Ahmedabad",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692997/2_7_-_Photo_myzmda.jpg",
      description: "Luxurious interior design with attention to detail.",
    },
    {
      id: "interior-project-9",
      title: "Contemporary Living",
      location: "Jaipur",
      year: "2024",
      category: "Interior",
      image: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1757692984/d868f1a2-eea6-4b6e-b040-2acef318137c_mzppxo.jpg",
      description: "Modern interior design with functional elegance.",
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
                {/* <Link href={`/work/${project.id}`}> */}
                <div className="block">
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
                  </div>
                </div>
                {/* </Link> */}
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