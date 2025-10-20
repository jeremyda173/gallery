# 📸 Galería Fotográfica Modal - Mikens

Una galería de fotos moderna y elegante construida con React + Vite, que incluye un lightbox modal profesional con animaciones fluidas y navegación intuitiva.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características

### 🎨 Diseño Moderno
- **Grid Responsivo**: Se adapta automáticamente a cualquier tamaño de pantalla
- **Gradiente Atractivo**: Fondo con degradado de Indigo a Purple
- **Animaciones Suaves**: Transiciones fluidas con efectos de rebote (cubic-bezier)
- **Glassmorphism**: Efectos de cristal esmerilado en el lightbox

### 🖼️ Galería de Imágenes
- **24 Imágenes Únicas**: Colección curada de paisajes y naturaleza
- **Lazy Loading**: Carga optimizada de imágenes
- **Miniaturas Optimizadas**: Thumbnails de 400x300px para carga rápida
- **Imágenes Full HD**: Resolución de 1200x800px en el lightbox

### 🎯 Lightbox Modal
- **Navegación Completa**: Botones prev/next con iconos minimalistas
- **Teclado Shortcuts**: 
  - `←` / `→` - Navegar entre imágenes
  - `Esc` - Cerrar lightbox
- **Contador de Imágenes**: Muestra posición actual (ej: "3 / 24")
- **Botones Elegantes**: Diseño circular con hover effects sutiles
- **Transiciones Animadas**: Efectos de slide al cambiar imágenes

### 📱 100% Responsivo
- **Desktop**: Grid de 4 columnas con espaciado amplio
- **Tablet**: Grid adaptativo con botones optimizados
- **Mobile**: Vista vertical con controles superpuestos
- **Small Mobile**: Navegación optimizada para pantallas pequeñas

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd modal-gallery
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

El servidor se abrirá automáticamente en tu navegador predeterminado.

## 🛠️ Scripts Disponibles

```bash
# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Linter
npm run lint
```

## 📁 Estructura del Proyecto

```
modal-gallery/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx          # Componente principal de la galería
│   │   ├── Gallery.css          # Estilos de la galería
│   │   ├── Lightbox.jsx         # Componente del modal lightbox
│   │   └── Lightbox.css         # Estilos del lightbox
│   ├── App.jsx                  # Componente raíz
│   ├── App.css                  # Estilos globales de la app
│   ├── index.css                # Reset y estilos base
│   └── main.jsx                 # Punto de entrada
├── public/                      # Archivos estáticos
├── index.html                   # HTML principal
├── package.json                 # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                    # Este archivo
```

## 🎨 Personalización

### Cambiar Imágenes

Edita el array `images` en `src/components/Gallery.jsx`:

```javascript
const images = [
  {
    id: 1,
    src: 'https://tu-url.com/imagen.jpg?w=1200&h=800',
    thumb: 'https://tu-url.com/imagen.jpg?w=400&h=300',
    alt: 'Descripción de la imagen'
  },
  // ... más imágenes
];
```

### Personalizar Colores

Edita las variables CSS en `src/components/Gallery.css`:

```css
:root {
  --gallery-bg-start: #6366f1;    /* Color inicial del gradiente */
  --gallery-bg-end: #a855f7;      /* Color final del gradiente */
  --header-text-color: #ffffff;   /* Color del texto */
  /* ... más variables */
}
```

### Modificar Animaciones

Cambia la función de easing en `Gallery.css`:

```css
:root {
  --transition-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Efecto bouncy */
}
```

## 🔧 Tecnologías Utilizadas

- **React 18.3.1** - Librería de UI
- **Vite 5.4.10** - Build tool y dev server
- **CSS3** - Estilos con variables CSS y animaciones
- **Unsplash** - Servicio de imágenes de alta calidad

## 📦 Dependencias

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### DevDependencies

```json
{
  "@vitejs/plugin-react": "^4.3.3",
  "vite": "^5.4.10",
  "eslint": "^9.13.0"
}
```

## 🌟 Características Técnicas

### Optimizaciones
- ✅ Componentes funcionales con React Hooks
- ✅ `useState` para gestión de estado
- ✅ `useEffect` para event listeners
- ✅ `useCallback` para optimización de funciones
- ✅ Lazy loading de imágenes
- ✅ Prevención de scroll al abrir lightbox

### Accesibilidad
- ✅ Atributos `aria-label` en botones
- ✅ Alt text descriptivo en imágenes
- ✅ Navegación por teclado
- ✅ Contraste de colores adecuado

### Performance
- ✅ Imágenes optimizadas (thumbnails vs full size)
- ✅ CSS animations con GPU acceleration
- ✅ Event delegation
- ✅ Cleanup de event listeners

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contribuir

Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

- [ ] Agregar modo oscuro/claro
- [ ] Implementar filtros por categorías
- [ ] Agregar funcionalidad de zoom avanzado
- [ ] Soporte para videos
- [ ] Compartir en redes sociales
- [ ] Descarga de imágenes

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👤 Autor

**Mikens**

---

⭐️ Si te gustó este proyecto, no olvides darle una estrella en GitHub!

**Desarrollado con ❤️ usando React + Vite**
