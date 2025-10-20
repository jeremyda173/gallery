# Photo Gallery

Galería de fotos minimalista y elegante con lightbox modal.

## Inicio

```bash
npm install
npm run dev
```

Abre http://localhost:5174/

## Características

- Grid responsivo con auto-fit
- Aspect ratio 3:4 (estilo retrato)
- Lightbox con fondo blanco
- Zoom 2x con drag
- Navegación con teclado
- Diseño limpio y moderno

## Reemplazar Imágenes

Edita `src/components/Gallery.jsx`:

```javascript
const images = [
  {
    id: 1,
    src: '/tu-imagen.jpg',
    thumb: '/tu-imagen-thumb.jpg',
    alt: 'Descripción'
  }
];
```

## Licencia

MIT
