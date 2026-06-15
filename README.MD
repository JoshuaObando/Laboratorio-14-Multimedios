# DiscoStore API

API REST para gestión de catálogo de álbumes musicales

## Cómo ejecutar

1. Clonar el repositorio

bash
git clone https://github.com/JoshuaObando/Laboratorio-14-Multimedios.git
cd Laboratorio-14-Multimedios


2. Instalar dependencias

bash
pnpm install


3. Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto:

.env
PORT=3000
HOST=localhost


4. Poblar la base de datos

bash
node src/db/seed.js


 5. Iniciar el servidor

```bash
pnpm dev
```

El servidor estará disponible en `http://localhost:3000`.

Rutas disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | / | Información de la API |
| GET | /albumes | Lista todos los álbumes |
| POST | /albumes | Crea un nuevo álbum |
| GET | /album/:slug | Obtiene un álbum por slug |
| PUT | /album/:slug | Actualiza un álbum |
| DELETE | /album/:slug | Elimina un álbum |
| GET | /genero/:genero | Slugs de álbumes por género |
| GET | /search/:text | Búsqueda por texto |
| GET | /imagenes/* | Sirve imágenes estáticas |

 Códigos de respuesta

| Código | Descripción |
|--------|-------------|
| 200 | Lectura o actualización exitosa |
| 201 | Recurso creado (incluye header Location) |
| 204 | Eliminación exitosa |
| 400 | Error de validación Zod |
| 404 | Recurso no encontrado |
| 409 | Slug duplicado al crear |