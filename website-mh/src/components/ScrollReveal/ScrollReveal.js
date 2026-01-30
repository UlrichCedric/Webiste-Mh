import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({ children, animation = 'fade-up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Déclenche quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px' // Petite marge pour que l'anim se lance un peu avant le bas
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
