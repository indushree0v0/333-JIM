import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import Button from './UI/Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for background styling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const scrollPosition = window.scrollY + 120; // offset
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.replace('#', ''));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu if window is resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint is 1024px
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Navbar height
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 py-4 shadow-lg shadow-slate-950/20'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-500 shadow-lg shadow-primary-600/20 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-5.5 h-5.5 text-white animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            AETHERIS<span className="text-primary-400">GROUP</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:text-white cursor-pointer ${
                    active ? 'text-primary-400 font-semibold' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 shadow-md shadow-primary-500/50" />
                  )}
                </a>
              );
            })}
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-slate-950/98 backdrop-blur-lg border-t border-slate-900/80 transition-all duration-300 z-40 flex flex-col p-6 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3 my-auto">
          {navLinks.map((link) => {
            const active = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-center py-4 text-lg font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-400 border border-primary-500/20'
                    : 'text-slate-400 hover:bg-slate-900/40 hover:text-white border border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
