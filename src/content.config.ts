import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    dateRange: z.string(),
    order: z.number(),
    description: z.string(),
    achievements: z.array(z.string()),
    stack: z.array(z.string()),
    enabled: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string().url(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    order: z.number(),
    enabled: z.boolean().default(true),
  }),
});

export const collections = { experience, projects };
