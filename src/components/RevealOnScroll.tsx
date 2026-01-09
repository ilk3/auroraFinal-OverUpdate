import React, { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation: 'fade-up' | 'fade' | 'fade-left' | 'fade-right' | 'zoom' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  scale?: number;
  rotate?: number;
}

export function RevealOnScroll({ 
  children, 
  animation, 
  delay = 0, 
  duration = 800,
  threshold = 0.1,
  distance = 50,
  scale = 0.95,
  rotate = 15
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.style.opacity = '1';
                ref.current.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
                ref.current.style.filter = 'blur(0)';
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '-50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);

  const getInitialStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      opacity: 0,
      filter: 'blur(5px)',
      transition: `all ${duration}ms cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
    };

    switch (animation) {
      case 'fade-up':
        return {
          ...baseStyles,
          transform: `translateY(${distance}px)`,
        };
      case 'fade-left':
        return {
          ...baseStyles,
          transform: `translateX(-${distance}px)`,
        };
      case 'fade-right':
        return {
          ...baseStyles,
          transform: `translateX(${distance}px)`,
        };
      case 'zoom':
        return {
          ...baseStyles,
          transform: `scale(${scale})`,
        };
      case 'rotate':
        return {
          ...baseStyles,
          transform: `rotate(${rotate}deg) scale(${scale})`,
        };
      default:
        return baseStyles;
    }
  };

  return (
    <div ref={ref} style={getInitialStyles()}>
      {children}
    </div>
  );
}