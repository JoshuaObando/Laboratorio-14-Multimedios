import { z } from 'zod'

export const albumSchema = z.object({
  titulo: z.string().min(1),
  artista: z.string().min(1),
  genero: z.string().min(1),
  anio: z.number().int().min(1900).max(new Date().getFullYear()),
  sello: z.string().min(1),
  pistas: z.number().int().min(1),
  imagen: z.string().optional(),
  resumen: z.string().optional(),
  descripcion: z.string().optional()
})

export const albumUpdateSchema = albumSchema.partial()