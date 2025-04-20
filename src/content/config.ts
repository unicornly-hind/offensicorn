// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    cover: z.string().optional()
  }),
});

export const collections = {
  blog: blogCollection,
};
