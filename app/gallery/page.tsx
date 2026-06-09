import GalleryContent from "@/components/GalleryContent"
import { WORK_CATEGORIES, type PortfolioCategoryId } from "@/lib/portfolio"

type GalleryPageProps = {
  searchParams: Promise<{ category?: string }>
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const params = await searchParams
  const defaultCategory = WORK_CATEGORIES[0].id
  const categoryFromUrl = params.category

  const initialCategory: PortfolioCategoryId =
    WORK_CATEGORIES.find((category) => category.id === categoryFromUrl)?.id ?? defaultCategory

  return <GalleryContent key={initialCategory} initialCategory={initialCategory} />
}
