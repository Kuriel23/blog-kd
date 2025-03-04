import { z, defineCollection, type CollectionEntry } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    slug: z.string(),
  })
})

export const collections = {
  blog: blogCollection
}

export type Post = CollectionEntry<'posts'>
