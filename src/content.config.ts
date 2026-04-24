import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    author: z.string().default('Nexcent Team'),
    readTime: z.string().default('5 min read'),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
