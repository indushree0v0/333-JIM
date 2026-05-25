import { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress increments
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random progress step
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 80);

    const handleLoad = () => {
      // Make sure progress hits 100 first, then trigger fade out
      setTimeout(() => {
        setFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 600); // Match transition-all duration-600
      }, 700);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case window load event delays
      const fallback = setTimeout(handleLoad, 2500);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(progressInterval);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        fade ? 'opacity-0 scale-[1.04] pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Mesh Glow Points */}
      <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary-950/15 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-accent-950/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '-5s' }} />

      {/* Central Content */}
      <div className="relative flex flex-col items-center z-10">
        {/* Brand Icon and Ripple Effects */}
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-500 shadow-2xl shadow-primary-600/30 mb-8 select-none">
          <Cpu className="w-9 h-9 text-white animate-pulse" />
          {/* Multi-ring echo ripples */}
          <div className="absolute inset-0 rounded-2xl border-2 border-primary-500/20 scale-[1.12] animate-ping opacity-25" />
          <div className="absolute inset-0 rounded-2xl border border-accent-400/15 scale-[1.25] animate-ping opacity-15" style={{ animationDelay: '-1s' }} />
        </div>

        {/* Branding Typography */}
        <h1 className="text-xl md:text-2xl font-black tracking-[0.25em] text-white uppercase mb-2">
          AETHERIS<span className="text-primary-400">GROUP</span>
        </h1>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-10">
          Neural Systems & Cloud Hubs
        </span>

        {/* Progress Bar Container */}
        <div className="w-52 h-[2px] bg-slate-900/80 rounded-full overflow-hidden relative mb-4">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(139,92,246,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Sub-text Logs */}
        <div className="h-5 flex items-center justify-center">
          <span className="text-[9px] font-bold text-primary-400/90 uppercase tracking-[0.2em] font-mono">
            {progress < 25 && 'establishing node mesh...'}
            {progress >= 25 && progress < 55 && 'syncing neural clusters...'}
            {progress >= 55 && progress < 80 && 'verifying zero-trust key...'}
            {progress >= 80 && progress < 100 && 'launching cloud hub...'}
            {progress >= 100 && 'sovereignty active'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
