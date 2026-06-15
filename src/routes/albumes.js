import { Router } from 'express'
import { albumRepository } from '../repository/albumRepository.js'
import { albumSchema } from '../schemas/albumSchema.js'
import slugify from 'slugify'

const router = Router()

router.get('/', (req, res) => {
  const albumes = albumRepository.getAll()
  res.json(albumes)
})

router.post('/', (req, res) => {
  const resultado = albumSchema.safeParse(req.body)
  if (!resultado.success) {
    return res.status(400).json({ error: resultado.error.flatten() })
  }

  const datos = resultado.data
  const slug = slugify(datos.titulo, { lower: true, strict: true })

  const existente = albumRepository.getBySlug(slug)
  if (existente) {
    return res.status(409).json({ error: `Ya existe un álbum con el slug '${slug}'` })
  }

  albumRepository.create({ ...datos, slug })

  res
    .status(201)
    .location(`/album/${slug}`)
    .json({ slug })
})

export default router