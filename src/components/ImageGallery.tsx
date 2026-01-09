import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

interface Image {
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const openLightbox = (index = currentIndex) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    setIsLoading(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightbox = () => {
    setIsLoading(true);
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightbox = () => {
    setIsLoading(true);
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const el = lightboxRef.current;
    if (isLightboxOpen && el) {
      disableBodyScroll(el);
    } else if (el) {
      enableBodyScroll(el);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextLightbox();
      else if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isLightboxOpen]);

  return (
    <>
      {/* Main Gallery */}
      <div className="relative group">
        <div
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={() => openLightbox()}
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openLightbox();
            }}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 opacity-0 group-hover:opacity-100 transition"
          >
            <Expand className="text-white w-6 h-6" />
          </button>

          <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* ✅ New description below the image */}
        <div className="mt-4 text-center text-lg text-white max-w-3xl mx-auto">
          {images[currentIndex].alt}
        </div>

        {/* Thumbnails */}
        <div className="mt-6 grid grid-cols-6 gap-4">
          {images.map((image, i) => (
            <button
              key={i}
              className={`rounded-xl overflow-hidden aspect-square transition-all transform ${
                i === currentIndex ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setCurrentIndex(i)}
              onDoubleClick={() => openLightbox(i)}
            >
              <img src={image.url} alt={image.alt} className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen &&
        createPortal(
          <div
            ref={lightboxRef}
            className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/95"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/60 hover:bg-black/80"
            >
              <X className="text-white w-6 h-6" />
            </button>

            <div className="relative max-w-full max-h-[90vh] mx-4">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].alt}
                onLoad={() => setIsLoading(false)}
                className={`max-w-full max-h-[90vh] object-contain transition-all ${
                  isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
            </div>

            {/* Nav buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 rounded-full"
            >
              <ChevronLeft className="text-white w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 rounded-full"
            >
              <ChevronRight className="text-white w-8 h-8" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm text-center px-4 py-2 bg-black/50 rounded-full">
              {lightboxIndex + 1} / {images.length} — {images[lightboxIndex].alt}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
