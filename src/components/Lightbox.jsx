import { useState, useEffect, useCallback } from 'react';
import './Lightbox.css';

const Lightbox = ({ image, onClose, onNext, onPrevious, currentIndex, totalImages }) => {
  const [direction, setDirection] = useState('');

  const handleNext = useCallback(() => {
    setDirection('next');
    setTimeout(() => {
      onNext();
      setDirection('');
    }, 300);
  }, [onNext]);

  const handlePrevious = useCallback(() => {
    setDirection('prev');
    setTimeout(() => {
      onPrevious();
      setDirection('');
    }, 300);
  }, [onPrevious]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, handleNext, handlePrevious]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Bar */}
        <div className="lightbox-top">
          <div className="counter">
            {currentIndex + 1} <span>de</span> {totalImages}
          </div>
          <button className="btn btn-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>

        {/* Main Content */}
        <div className="lightbox-center">
          <button className="btn btn-nav" onClick={handlePrevious} aria-label="Anterior">
            ‹
          </button>

          <div className="image-stage">
            <img 
              src={image.src} 
              alt={image.alt}
              className={`main-image ${direction}`}
              key={currentIndex}
            />
          </div>

          <button className="btn btn-nav" onClick={handleNext} aria-label="Siguiente">
            ›
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="lightbox-bottom">
          <div className="image-info">{image.alt}</div>
        </div>

      </div>
    </div>
  );
};

export default Lightbox;
