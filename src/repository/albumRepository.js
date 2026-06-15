import db from '../db/database.js'

export const albumRepository = {
  getAll() {
    return db.prepare('SELECT * FROM albumes').all()
  },

  getBySlug(slug) {
    return db.prepare('SELECT * FROM albumes WHERE slug = ?').get(slug)
  },

  getByGenero(genero) {
    return db
      .prepare('SELECT slug FROM albumes WHERE LOWER(genero) = LOWER(?)')
      .all(genero)
  },

  search(text) {
    const like = `%${text}%`
    return db
      .prepare(
        `SELECT * FROM albumes
         WHERE titulo LIKE ? OR artista LIKE ? OR resumen LIKE ? OR descripcion LIKE ?`
      )
      .all(like, like, like, like)
  },

  create(album) {
    const stmt = db.prepare(`
      INSERT INTO albumes (slug, titulo, artista, genero, anio, sello, pistas, imagen, resumen, descripcion)
      VALUES (@slug, @titulo, @artista, @genero, @anio, @sello, @pistas, @imagen, @resumen, @descripcion)
    `)
    return stmt.run(album)
  },

  update(slug, campos) {
    const keys = Object.keys(campos)
    const setClause = keys.map((k) => `${k} = @${k}`).join(', ')
    const stmt = db.prepare(`UPDATE albumes SET ${setClause} WHERE slug = @slug`)
    return stmt.run({ ...campos, slug })
  },

  delete(slug) {
    return db.prepare('DELETE FROM albumes WHERE slug = ?').run(slug)
  }
}