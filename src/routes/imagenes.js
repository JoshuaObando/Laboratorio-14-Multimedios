import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const router = Router()

router.use('/', (req, res) => {
  const archivo = req.path
  res.sendFile(path.join(__dirname, '../../imagenes', archivo))
})

export default router