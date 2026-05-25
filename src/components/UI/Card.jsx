import { useRef } from 'react';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  spotlight = true,
  ...props
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !spotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative glass-panel rounded-2xl p-6 md:p-8 transition-all duration-500 overflow-hidden group/card ${
        hoverEffect ? 'hover:bg-slate-900/40 hover:border-primary-500/35 hover:shadow-2xl hover:shadow-primary-500/5 hover:-translate-y-1.5' : ''
      } ${
        glow ? 'shadow-lg shadow-primary-500/5' : ''
      } ${className}`}
      {...props}
    >
      {/* Background Spotlight Radial Glow */}
      {spotlight && (
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(350px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(139,92,246,0.06)_0%,rgba(6,182,212,0.03)_50%,transparent_100%)]" 
        />
      )}
      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
