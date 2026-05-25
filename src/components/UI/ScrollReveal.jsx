import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up'
  delay = 0,
  duration = 750,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal only once for clean UX
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the element is visible
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before it fully enters viewport
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

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-12',
    'fade-down': 'opacity-0 -translate-y-12',
    'fade-left': 'opacity-0 -translate-x-12',
    'fade-right': 'opacity-0 translate-x-12',
    'scale-up': 'opacity-0 scale-[0.96]',
  };

  const visibleClass = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? visibleClass : animationClasses[animation]
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
