// 1. Importar las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Definir un `type` y `schema` para la colección de proyectos
const projectsCollection = defineCollection({
    type: 'content', // v2.5.0 y posteriores
    schema: z.object({
        title: z.string(),
        descripcion: z.string(),
    }),
})

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
    projects: projectsCollection, // Cambiado de 'blog' a 'projects'
}
