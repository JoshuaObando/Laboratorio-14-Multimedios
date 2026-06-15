import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../../discostore.db')

const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS albumes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    titulo TEXT NOT NULL,
    artista TEXT NOT NULL,
    genero TEXT NOT NULL,
    anio INTEGER NOT NULL,
    sello TEXT NOT NULL,
    pistas INTEGER NOT NULL,
    imagen TEXT,
    resumen TEXT,
    descripcion TEXT
  )
`)

export default db