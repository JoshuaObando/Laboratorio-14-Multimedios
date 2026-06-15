import { Router } from 'express'
import { albumRepository } from '../repository/albumRepository.js'

const router = Router()

router.get('/:slug', (req, res) => {
  const album = albumRepository.getBySlug(req.params.slug)
  if (!album) return res.status(404).json({ error: 'Álbum no encontrado' })
  res.json(album)
})

export default router