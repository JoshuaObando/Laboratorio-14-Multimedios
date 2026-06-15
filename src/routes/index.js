import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    nombre: 'DiscoStore API',
    version: '1.0.0',
    descripcion: 'API REST para gestión de catálogo de álbumes musicales',
    rutas: [
      'GET  /albumes',
      'POST /albumes',
      'GET  /album/:slug',
      'PUT  /album/:slug',
      'DELETE /album/:slug',
      'GET  /genero/:genero',
      'GET  /search/:text',
      'GET  /imagenes/*'
    ]
  })
})

export default router