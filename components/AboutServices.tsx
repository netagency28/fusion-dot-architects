"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

const services = [
  {
    title: "Architecture Design",
    description: "We offer end-to-end solutions for your space — from architectural planning and turnkey interiors to structural execution and custom furniture fabrication.",
    icon: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756997151/architecture-icon_o3sj6q.png",
  },
  {
    title: "Interior Design",
    description: "Fusion Dot Architects strives toward a socially just and equitable world where buildings positively contribute to the environment.",
    icon: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756997151/interior-design_sf70jw.png",
  },
  {
    title: "Construction Services",
    description: "Our construction service includes foundation, structural works, electrical, plumbing, flooring, and finishing with a high emphasis on quality control and project timelines.",
    icon: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756997151/contruction_ojpgny.png",
  },
  {
    title: "Furniture Design",
    description: "All services are customizable, and we work closely with clients to ensure that the vision is brought to life within scope and budget.",
    icon: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1756997151/chair_phertq.png",
  },
]

export default function AboutServices() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="px-6 py-12">
      {/* Who We Are */}
      <div className="mb-24 grid md:grid-cols-3 items-start gap-10">
        <div className="md:col-span-2">
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-4">Who We Are</p>
          <h2 className="text-xl md:text-xl font-semibold leading-snug">
          Fusion Dot Architects is a multi-disciplinary design and build firm passionate about transforming spaces into meaningful environments. 
          We combine the precision of architectural design, the creativity of interior styling,
           the structure of construction, and the aesthetics of furniture craftsmanship – all under one roof. <br />

          </h2>
          {/* <p>With over 50+ completed projects, Fusion Dot Architects has established a strong reputation for delivering functional and timeless spaces in both residential and commercial sectors.</p> */}
        </div>
        <div className="mt-6 md:mt-0 text-right self-end">
          <Link
            href="/about"
            className="inline-flex items-center text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition"
          >
            More about us
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Our Services – Scrollable */}
      <div>
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-8">Our Services</p>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide -mx-2"
        >
          <div className="flex space-x-6 px-2 pb-4 snap-x snap-mandatory">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="w-[30%] snap-start border border-gray-200 p-6 shrink-0 bg-white hover:shadow-md transition"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <hr className="border-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}