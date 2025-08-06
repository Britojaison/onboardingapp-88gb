import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Define proper types for Sanity
interface SanityImage {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

interface Tutorial extends SanityDocument {
  title: string
  slug: {
    current: string
  }
  description?: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime?: number
  content?: unknown
}

interface GalleryItem extends SanityDocument {
  title: string
  image: SanityImage
  description?: string
  category: string
}

interface OfficeInfo extends SanityDocument {
  title: string
  content: unknown
  category: string
}

// Sanity client configuration
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

// Query functions
export async function getTutorials(): Promise<Tutorial[]> {
  return await sanityClient.fetch(`
    *[_type == "tutorial"] | order(title asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      title,
      slug,
      description,
      category,
      difficulty,
      estimatedTime,
      content
    }
  `)
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return await sanityClient.fetch(`
    *[_type == "galleryItem"] | order(_createdAt desc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      title,
      image,
      description,
      category
    }
  `)
}

export async function getOfficeInfo(): Promise<OfficeInfo[]> {
  return await sanityClient.fetch(`
    *[_type == "officeInfo"] | order(title asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      title,
      content,
      category
    }
  `)
} 