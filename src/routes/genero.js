import { Router } from 'express'
import { albumRepository } from '../repository/albumRepository.js'

const router = Router()

router.get('/:genero', (req, res) => {
  const resultados = albumRepository.getByGenero(req.params.genero)
  res.json(resultados.map((r) => r.slug))
})

export default router