import { useState } from 'react';
import Lightbox from './Lightbox';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Montañas nevadas'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      alt: 'Bosque verde'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
      alt: 'Lago cristalino'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop',
      alt: 'Atardecer dorado'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
      alt: 'Océano azul'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      alt: 'Ciudad moderna'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop',
      alt: 'Desierto rojo'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop',
      alt: 'Aurora boreal'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=300&fit=crop',
      alt: 'Cascada natural'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
      alt: 'Campo de flores'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Volcán activo'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
      alt: 'Glaciar blanco'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      alt: 'Pradera verde'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop',
      alt: 'Costa rocosa'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop',
      alt: 'Valle montañoso'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1484591974057-265bb767ef71?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1484591974057-265bb767ef71?w=400&h=300&fit=crop',
      alt: 'Río serpenteante'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop',
      alt: 'Cielo estrellado'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      alt: 'Arcoíris doble'
    },
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?w=400&h=300&fit=crop',
      alt: 'Tormenta eléctrica'
    },
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=300&fit=crop',
      alt: 'Amanecer dorado'
    },
    {
      id: 21,
      src: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=300&fit=crop',
      alt: 'Nieve fresca'
    },
    {
      id: 22,
      src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop',
      alt: 'Selva tropical'
    },
    {
      id: 23,
      src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=300&fit=crop',
      alt: 'Cueva misteriosa'
    },
    {
      id: 24,
      src: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=800&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
      alt: 'Paisaje lunar'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <header className="page-header">
        <h1 className="page-title">Galería Fotográfica</h1>
        <p className="page-subtitle">Explora la colección</p>
      </header>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-card"
            onClick={() => openLightbox(index)}
            style={{ '--delay': `${index * 0.05}s` }}
          >
            <div className="card-image">
              <img src={image.thumb} alt={image.alt} loading="lazy" />
              <div className="card-overlay">
                <span className="view-text">Ver</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          currentIndex={currentIndex}
          totalImages={images.length}
        />
      )}
    </div>
  );
};

export default Gallery;
