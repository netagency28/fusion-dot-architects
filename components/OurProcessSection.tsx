"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"

type Step = {
  title: string
  content: string
}

const steps: Step[] = [
  {
    title: "Consultation",
    content:
      "Understand client needs and vision",
  },
  {
    title: "Conceptual Design",
    content:
      "Present sketches, ideas and mood boards",
  },
  {
    title: "Planning & Budegting",
    content:
      "Finalize layout, materials and budget",
  },
  {
    title: "Execution",
    content:
      "On-site work with continuous updates and precision",
  },
  {
    title: "Delivery & Handover",
    content: "Complete walk-through and client satisfaction",
  }
  
]

function OurProcessSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <section className="px-6 py-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left side – Text and Accordion */}
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-4">Our Process</p>
          <h2 className="text-xl md:text-xl font-semibold mb-20 tracking-tight leading-snug">
            Our process starts with the first conversation and continues through move-in, guided by a deep understanding
            of client goals and site-specific opportunities
          </h2>

          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {steps.map((step, index) => {
              const isOpen = index === openIndex
              return (
                <div key={step.title} className="py-6">
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between w-full items-center text-left"
                  >
                    <span className="text-base md:text-lg font-medium">{step.title}</span>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-sm text-gray-600 mt-4 pr-2"
                      >
                        {step.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right side – Architectural Drawing Image */}
        <div className="relative w-full h-[480px]">
          <Image
            src="https://minnaro.vamtam.com/wp-content/uploads/2025/06/2985394.svg"
            alt="Architectural Drawing"
            fill
            className="object-contain object-center opacity-80"
            priority
          />
        </div>
      </div>
    </section>
  )
}


export {OurProcessSection}