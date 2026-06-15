import { Router } from 'express'
import { albumRepository } from '../repository/albumRepository.js'

const router = Router()

router.get('/:text', (req, res) => {
  const resultados = albumRepository.search(req.params.text)
  res.json(resultados)
})

export default router