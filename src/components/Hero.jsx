import { ArrowRight, Play, Shield, Globe, Cpu } from 'lucide-react';
import Button from './UI/Button';
import LightPillar from './LightPillar';
import ScrollReveal from './UI/ScrollReveal';

const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 glow-mesh-1 animate-pulse-slow" />
      <div className="absolute inset-0 glow-mesh-2" />

      {/* Light Pillar Dynamic Core */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <LightPillar
          topColor="#8b5cf6"
          bottomColor="#06b6d4"
          intensity={0.8}
          rotationSpeed={0.2}
          glowAmount={0.01}
          pillarWidth={2.4}
          pillarHeight={0.3}
          noiseIntensity={0.15}
          pillarRotation={10}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,65,85,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Typography Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0">
          {/* Badge */}
          <ScrollReveal animation="fade-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-inner">
              <Cpu className="w-3.5 h-3.5" />
              <span>Next-Gen Enterprise AI & Cloud Systems</span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Pioneering the Future of{' '}
              <span className="bg-gradient-to-r from-primary-400 via-indigo-300 to-accent-400 bg-clip-text text-transparent drop-shadow-md">
                Intelligent Enterprise
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheading */}
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-slate-300 text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-8">
              Aetheris Group engineers advanced neural architectures, scalable multi-cloud hubs, and impenetrable cybersecurity systems for modern hyper-growth enterprises worldwide.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="flex items-center gap-2 group cursor-pointer"
                onClick={handleContactClick}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-2 group cursor-pointer"
                onClick={handleServicesClick}
              >
                <Play className="w-4 h-4 fill-current text-slate-300 group-hover:text-white transition-colors" />
                Explore Services
              </Button>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal animation="fade-up" delay={500} className="w-full">
            <div className="mt-12 pt-8 border-t border-slate-900/60 w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">99.99%</span>
                <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Service Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">10x</span>
                <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Average Client ROI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">$50M+</span>
                <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Infrastructure Saved</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Abstract Animation Column */}
        <ScrollReveal animation="scale-up" delay={300} className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center pointer-events-none">
          {/* Animated Central Node Sphere */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center animate-float-slow">
            {/* Soft Radial Core Glow */}
            <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-3xl" />

            {/* Orbit paths */}
            <div className="absolute inset-0 rounded-full border border-slate-800/40 scale-100" />
            <div className="absolute inset-0 rounded-full border border-slate-800/30 scale-125 border-dashed" />
            <div className="absolute inset-0 rounded-full border border-slate-800/20 scale-150" />

            {/* Glowing Orb 1 (Indigo) */}
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-400 border border-white/20 shadow-lg shadow-primary-500/30 animate-orbit-slow" />

            {/* Glowing Orb 2 (Teal) */}
            <div className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-accent-500 to-cyan-300 border border-white/20 shadow-lg shadow-accent-400/40 animate-orbit-slow [animation-delay:-5s]" />

            {/* Centerpiece Vector Graphic */}
            <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-3xl glass-panel-light flex items-center justify-center p-6 border border-slate-700/30 shadow-2xl backdrop-blur-2xl select-none">
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-tr from-slate-950 to-slate-900 border border-slate-800/80 overflow-hidden flex flex-col justify-between p-5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-wide uppercase">
                    Secure
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Aether Shield</span>
                  <span className="text-base font-bold text-white tracking-tight">Active Neural Cluster</span>
                </div>
              </div>
            </div>

            {/* Additional Decorative Floaters */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border border-slate-800/80 shadow-lg animate-float-fast [animation-delay:-2s]">
              <Globe className="w-6 h-6 text-accent-400" />
            </div>
            <div className="absolute -bottom-8 -left-6 px-4 py-2.5 rounded-2xl glass-panel flex items-center gap-2 border border-slate-800/80 shadow-lg animate-float-slow [animation-delay:-4s]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-slate-300">Hub Online</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
