import 'dotenv/config'
import express from 'express'
import indexRouter from './routes/index.js'
import albumesRouter from './routes/albumes.js'
import albumRouter from './routes/album.js'
import generoRouter from './routes/genero.js'
import searchRouter from './routes/search.js'
import imagenesRouter from './routes/imagenes.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
app.use(express.json())

app.use('/', indexRouter)
app.use('/albumes', albumesRouter)
app.use('/album', albumRouter)
app.use('/genero', generoRouter)
app.use('/search', searchRouter)
app.use('/imagenes', imagenesRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

app.listen(PORT, HOST, () => {
  console.log(`DiscoStore corriendo en http://${HOST}:${PORT}`)
})