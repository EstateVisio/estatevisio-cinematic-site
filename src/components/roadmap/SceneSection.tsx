import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SceneSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  parallax?: boolean;
  overlay?: 'light' | 'medium' | 'heavy';
}

const SceneSection = ({
  children,
  backgroundImage,
  className,
  parallax = false,
  overlay = 'medium',
}: SceneSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * 0.3;
        setScrollOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  const overlayClasses = {
    light: 'bg-charcoal/60',
    medium: 'bg-charcoal/75',
    heavy: 'bg-charcoal/90',
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {/* Background Image with Parallax */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: parallax ? `translateY(${scrollOffset}px)` : 'none',
            transition: parallax ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={cn('absolute inset-0', overlayClasses[overlay])} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

export default SceneSection;
