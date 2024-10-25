// 1. Importar las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Definir un `type` y `schema` para la colección de proyectos
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        img: z.string(),
        descripcion: z.string(),
        stack: z.array(z.string()).optional(),
        url: z.string().optional(),
    }),
})

const stackItemsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        image: z.string(),
    }),
})

export const collections = {
    projects: projectsCollection,
    stackItems: stackItemsCollection,
}
