import db from './database.js'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, '../../data/albumes.json')

const albumes = JSON.parse(readFileSync(filePath, 'utf-8'))

const insertar = db.prepare(`
  INSERT OR IGNORE INTO albumes (slug, titulo, artista, genero, anio, sello, pistas, imagen, resumen, descripcion)
  VALUES (@slug, @titulo, @artista, @genero, @anio, @sello, @pistas, @imagen, @resumen, @descripcion)
`)

const insertarMuchos = db.transaction((lista) => {
  for (const album of lista) {
    insertar.run(album)
  }
})

insertarMuchos(albumes)
console.log('Base de datos poblada con los álbumes iniciales.')