import { defineCollection, z } from 'astro:content';

const people = defineCollection({ type: 'content', schema: z.object({
  name: z.string(), role: z.string(), email: z.string().optional(),
  image: z.string().optional(), shortBio: z.string().optional(),
  areas: z.array(z.string()).default([]), order: z.number().default(999),
  links: z.array(z.object({ label: z.string(), url: z.string() })).default([])
}) });

const projects = defineCollection({ type: 'content', schema: z.object({
  title: z.string(), excerpt: z.string(), cover: z.string().optional(),
  year: z.number().optional(), status: z.enum(['ongoing','completed','featured']).optional(),
  tags: z.array(z.string()).default([]), people: z.array(z.string()).default([]),
  publications: z.array(z.string()).default([]), consortium: z.array(z.string()).default([]),
  featured: z.boolean().default(false)
}) });

const publications = defineCollection({ type: 'content', schema: z.object({
  title: z.string(), authors: z.array(z.string()), year: z.number(),
  venue: z.string().optional(), doi: z.string().optional(), url: z.string().optional(),
  relatedProjects: z.array(z.string()).default([]), featured: z.boolean().default(false)
}) });

const news = defineCollection({ type: 'content', schema: z.object({
  title: z.string(), date: z.date(), excerpt: z.string(), cover: z.string().optional(),
  relatedProjects: z.array(z.string()).default([]), featured: z.boolean().default(false)
}) });

const consortium = defineCollection({ type: 'content', schema: z.object({
  name: z.string(), website: z.string().optional(), logo: z.string().optional(),
  description: z.string().optional(), order: z.number().default(999)
}) });

const settings = defineCollection({ type: 'data', schema: z.object({
  siteTitle: z.string(),
  siteDescription: z.string(),
  siteMotto: z.string().optional(),
  contactEmail: z.string().optional(),
  address: z.string().optional()
}) });

export const collections = { people, projects, publications, news, consortium, settings };
