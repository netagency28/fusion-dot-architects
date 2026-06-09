import { IMAGES } from "@/lib/images"

export const WORK_CATEGORIES = [
  { id: "architectural-design", label: "Architectural Design" },
  { id: "commercial-architecture", label: "Commercial Architecture" },
  { id: "commercial-space", label: "Commercial Space" },
  { id: "luxury-interior", label: "Luxury Interior" },
  { id: "modern-interior", label: "Modern Interior" },
] as const

export type PortfolioCategoryId = (typeof WORK_CATEGORIES)[number]["id"]

type PortfolioImageKey = keyof typeof IMAGES.portfolio

const CATEGORY_IMAGE_KEYS: Record<PortfolioCategoryId, PortfolioImageKey> = {
  "architectural-design": "architecturalDesign",
  "commercial-architecture": "commercialArchitecture",
  "commercial-space": "commercialSpace",
  "luxury-interior": "luxuryInterior",
  "modern-interior": "modernInterior",
}

export function getCategoryById(id: string) {
  return WORK_CATEGORIES.find((category) => category.id === id)
}

export function getCategoryCover(categoryId: PortfolioCategoryId) {
  const key = CATEGORY_IMAGE_KEYS[categoryId]
  return IMAGES.portfolio[key].cover
}

export function getCategoryGalleryImages(categoryId: PortfolioCategoryId): string[] {
  const key = CATEGORY_IMAGE_KEYS[categoryId]
  return [...IMAGES.portfolio[key].gallery]
}

export const SELECTED_WORK = WORK_CATEGORIES.map((category) => ({
  ...category,
  image: getCategoryCover(category.id),
  href: `/gallery?category=${category.id}`,
}))
