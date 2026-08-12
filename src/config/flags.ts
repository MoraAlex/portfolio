import { GITHUB_FF, FEATURED_PROJECTS_FF, BLOG_FF } from "astro:env/server";

export const flags = {
  github: GITHUB_FF,
  featuredProjects: FEATURED_PROJECTS_FF,
  blog: BLOG_FF,
} as const;
