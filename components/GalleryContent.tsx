"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { IMAGES } from "@/lib/images"
import {
  WORK_CATEGORIES,
  getCategoryGalleryImages,
  type PortfolioCategoryId,
} from "@/lib/portfolio"

type GalleryContentProps = {
  initialCategory: PortfolioCategoryId
}

export default function GalleryContent({ initialCategory }: GalleryContentProps) {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId>(initialCategory)

  const handleCategoryChange = (categoryId: PortfolioCategoryId) => {
    setActiveCategory(categoryId)
    router.replace(`/gallery?category=${categoryId}`, { scroll: false })
  }

  const activeCategoryLabel = WORK_CATEGORIES.find((category) => category.id === activeCategory)?.label
  const galleryImages = [...getCategoryGalleryImages(activeCategory)]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.heroArchitecture} alt="Gallery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center text-sm hover:text-gray-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">Gallery</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Explore our portfolio by category
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            {WORK_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeCategory === category.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-light mb-2">{activeCategoryLabel}</h2>
            <p className="text-gray-500 text-sm">
              {galleryImages.length} {galleryImages.length === 1 ? "image" : "images"}
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div key={`${activeCategory}-${index}`} className="group">
                  <div className="relative h-80 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${activeCategoryLabel} ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">Images for this category will be added soon.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let&apos;s discuss how we can bring your architectural vision to life.
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
