import { useState } from 'react';
import { Cpu, Send, Check } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setError('');
    setSubscribed(true);
    setEmail('');
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-16 overflow-hidden">
      {/* Mesh background subtle glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1: Brand Pitch */}
          <div className="lg:col-span-4 text-left flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group cursor-pointer mb-6"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Cpu className="w-4 h-4 text-white animate-pulse" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                AETHERIS<span className="text-primary-400">GROUP</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              Engineering secure, hyper-scalable cloud solutions, private neural platforms, and autonomous enterprise systems for industry-leading organizations.
            </p>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-850 px-3.5 py-1.5 rounded-full select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Aether Hub: Active</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xxs font-bold text-white uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  Cloud Orchestration
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  Enterprise AI Hubs
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  Zero-Trust Security
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  SaaS Architectures
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xxs font-bold text-white uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleNavClick(e, '#careers')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  Careers Portal
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-slate-400 hover:text-white text-xs font-semibold transition-colors">
                  Contact SRE
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xxs font-bold text-white uppercase tracking-widest mb-6">Aether Briefing</h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Subscribe to receive verified architectural insights and benchmark performance analysis directly.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold animate-fade-in">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed to Intel Briefings!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-850 bg-slate-900/50 p-3.5 pr-12 text-xs text-white placeholder-slate-600 focus:border-primary-500/50 focus:bg-slate-950 focus:outline-none transition-all duration-300"
                    placeholder="architect@company.com"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 p-2 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-500 hover:from-primary-500 hover:to-accent-400 text-white shadow-md cursor-pointer transition-colors duration-300"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <span className="text-[10px] text-rose-400 font-semibold">{error}</span>}
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-900/60 w-full mb-8" />

        {/* Bottom Metadata row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium">
          {/* Copyright */}
          <span>© 2026 Aetheris Group. All rights reserved.</span>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">SLA Terms</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Security Ledger</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <span className="p-2.5 rounded-lg border border-slate-900 bg-slate-950 hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all duration-300 cursor-pointer">
              <GithubIcon className="w-4 h-4 text-slate-400 hover:text-white" />
            </span>
            <span className="p-2.5 rounded-lg border border-slate-900 bg-slate-950 hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all duration-300 cursor-pointer">
              <LinkedinIcon className="w-4 h-4 text-slate-400 hover:text-white" />
            </span>
            <span className="p-2.5 rounded-lg border border-slate-900 bg-slate-950 hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all duration-300 cursor-pointer">
              <TwitterIcon className="w-4 h-4 text-slate-400 hover:text-white" />
            </span>
            <span className="p-2.5 rounded-lg border border-slate-900 bg-slate-950 hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all duration-300 cursor-pointer">
              <YoutubeIcon className="w-4 h-4 text-slate-400 hover:text-white" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
