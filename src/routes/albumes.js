import { Router } from 'express'
import { albumRepository } from '../repository/albumRepository.js'

const router = Router()

router.get('/', (req, res) => {
  const albumes = albumRepository.getAll()
  res.json(albumes)
})

export default router