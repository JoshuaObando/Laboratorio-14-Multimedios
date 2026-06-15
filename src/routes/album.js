import { Router } from 'express'
import { albumRepository } from '../repository/albumRepository.js'
import { albumUpdateSchema } from '../schemas/albumSchema.js'

const router = Router()

router.get('/:slug', (req, res) => {
  const album = albumRepository.getBySlug(req.params.slug)
  if (!album) return res.status(404).json({ error: 'Álbum no encontrado' })
  res.json(album)
})

router.put('/:slug', (req, res) => {
  const album = albumRepository.getBySlug(req.params.slug)
  if (!album) return res.status(404).json({ error: 'Álbum no encontrado' })

  const resultado = albumUpdateSchema.safeParse(req.body)
  if (!resultado.success) {
    return res.status(400).json({ error: resultado.error.flatten() })
  }

  albumRepository.update(req.params.slug, resultado.data)
  const actualizado = albumRepository.getBySlug(req.params.slug)
  res.json(actualizado)
})

router.delete('/:slug', (req, res) => {
  const album = albumRepository.getBySlug(req.params.slug)
  if (!album) return res.status(404).json({ error: 'Álbum no encontrado' })

  albumRepository.delete(req.params.slug)
  res.status(204).send()
})

export default router