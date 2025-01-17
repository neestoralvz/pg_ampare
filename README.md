# Ampare - Gastronomía & Cultura

Sitio web de Ampare, un espacio cultural y gastronómico en el corazón de Xalapa, Veracruz.

## Estructura del Proyecto

### Páginas Principales

El proyecto está organizado en componentes dedicados para cada sección:

- `src/pages/Home.tsx`: Página principal con hero section y secciones destacadas
- `src/pages/Eventos.tsx`: Listado de eventos culturales y actividades
- `src/pages/Blog.tsx`: Artículos y noticias
- `src/pages/Contacto.tsx`: Formulario de contacto e información

### Sección de Gastronomía

La sección gastronómica se encuentra en `src/pages/gastronomia/`:

- `tapas.tsx`: Tapas españolas
- `cortes.tsx`: Cortes finos
- `tacos.tsx`: Tacos gourmet
- `vinos.tsx`: Carta de vinos

## Rutas

La aplicación utiliza React Router v6 con las siguientes rutas:

- `/`: Página principal
- `/eventos`: Calendario de eventos y actividades
- `/blog`: Blog y noticias
- `/contacto`: Información de contacto y formulario
- `/gastronomia/tapas`: Tapas españolas
- `/gastronomia/cortes`: Cortes finos
- `/gastronomia/tacos`: Tacos gourmet
- `/gastronomia/vinos`: Carta de vinos

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Checklist para Nuevas Secciones

Al agregar una nueva sección:

1. Crear el componente en `src/pages/` (ejemplo: `NuevaSeccion.tsx`)
2. Agregar la ruta en `App.tsx`:
   ```tsx
   <Route path="/nueva-seccion" element={<NuevaSeccionPage />} />
   ```
3. Actualizar el menú en `App.tsx` agregando el nuevo ítem
4. Probar la navegación en desarrollo y producción

## Despliegue

El proyecto está configurado para despliegue en Netlify con soporte para SPA routing mediante el archivo `public/_redirects`.