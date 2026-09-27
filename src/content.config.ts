import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const PROJECT_TYPES = [
  "Trainee Struct",
  "Freelancer",
  "Empresa Júnior Struct",
  "Projeto Pessoal",
  "Open Source",
  "Acadêmico",
] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    nome: z.string(),
    tipo: z.string(),
    src: z.string(), // ID Cloudinary (ex: "api-ruby") ou caminho de imagem (/images/uploads/...)
    alt: z.string(),
    bgColor: z.string().default("bg-azul-kaleb"),
    colSpan: z.enum(["1", "2"]).default("1"),
    order: z.number().default(0),
    link: z.string().optional(),
    github: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
