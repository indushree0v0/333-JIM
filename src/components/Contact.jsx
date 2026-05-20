import { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, Message).',
      });
      return;
    }

    // Email Pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please enter a valid business email address.',
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    // Mock transmission timeout
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: '',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-slate-900/40 bg-slate-950/20">
      <div className="absolute inset-0 glow-mesh-2 animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-400 uppercase">Partner With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-6">
            Initiate Modernization Strategy
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mb-8" />
          <p className="text-slate-300 text-base md:text-lg">
            Connect with our system architects to schedule a private infrastructure audit and discover vector performance gains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Form Column */}
          <div className="lg:col-span-7 flex">
            <Card className="w-full flex flex-col p-8 md:p-10 border-slate-800 bg-slate-950/40 backdrop-blur-xl">
              {status.success ? (
                /* Success Feedback Screen */
                <div className="flex flex-col items-center justify-center text-center my-auto py-12 animate-fade-in">
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">Transmission Confirmed</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Your modernization brief has been securely routed to our SRE queue. A Principal Solutions Architect will contact you at your business email within 6 business hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-800"
                    onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                /* Standard Contact Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left">
                  {status.error && (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-slate-400 text-xxs font-bold uppercase tracking-widest">
                        Full Name <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-850 bg-slate-950/60 p-3.5 text-sm text-white placeholder-slate-600 focus:border-primary-500/50 focus:bg-slate-950 focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-slate-400 text-xxs font-bold uppercase tracking-widest">
                        Business Email <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-850 bg-slate-950/60 p-3.5 text-sm text-white placeholder-slate-600 focus:border-primary-500/50 focus:bg-slate-950 focus:outline-none transition-all duration-300"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-slate-400 text-xxs font-bold uppercase tracking-widest">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-850 bg-slate-950/60 p-3.5 text-sm text-white placeholder-slate-600 focus:border-primary-500/50 focus:bg-slate-950 focus:outline-none transition-all duration-300"
                      placeholder="Acme Corp"
                    />
                  </div>

                  {/* Brief Outline */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-slate-400 text-xxs font-bold uppercase tracking-widest">
                      Modernization Brief <span className="text-primary-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-xl border border-slate-850 bg-slate-950/60 p-3.5 text-sm text-white placeholder-slate-600 focus:border-primary-500/50 focus:bg-slate-950 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Outline your architectural bottlenecks, database scales, or AI deployment plans..."
                      required
                    />
                  </div>

                  {/* Action Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full flex items-center justify-center gap-2 group cursor-pointer"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>routing secure stream...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Architectural Brief</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right Address & Simulated Map Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl border border-slate-850 bg-slate-950/40 p-5 flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-primary-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">secure email channel</span>
                  <a href="mailto:partner@aetheris.group" className="text-sm font-bold text-white hover:text-primary-400 transition-colors">
                    partner@aetheris.group
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-850 bg-slate-950/40 p-5 flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">corporate voice gateway</span>
                  <a href="tel:+14155550199" className="text-sm font-bold text-white hover:text-sky-400 transition-colors">
                    +1 (415) 555-0199
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-850 bg-slate-950/40 p-5 flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-accent-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">hq operations</span>
                  <span className="text-sm font-bold text-white block">
                    100 Pine Street, San Francisco, CA 94111
                  </span>
                  <span className="text-xs text-slate-500 font-semibold block mt-1">
                    Branch: Talstrasse 80, 8001 Zürich, Switzerland
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Simulated Dark-themed Map Widget */}
            <div className="rounded-2xl border border-slate-850 bg-slate-950/60 p-6 flex flex-col items-center justify-center flex-grow min-h-[220px] relative overflow-hidden select-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:1rem_1rem]" />
              
              {/* Custom High-fidelity Vector Wireframe Map Graphics */}
              <svg className="w-full h-full min-h-[160px] relative z-10 text-slate-800" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated World Outlines (Abstract Nodes Network) */}
                <path d="M40 70H80M80 70L90 100M90 100H120M120 100L140 130M140 130H180M180 130L200 90M200 90H240M240 90L260 60M260 60H300M300 60L330 110M330 110H370" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M60 130H100M100 130L120 70M120 70H160M160 70L190 110M190 110H230M230 110L250 140M250 140H320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                
                {/* Headquarters Hub Pulse (San Francisco - Left Side) */}
                <g className="animate-pulse">
                  <circle cx="80" cy="70" r="10" fill="url(#pulse-glow-primary)" opacity="0.3" />
                  <circle cx="80" cy="70" r="4" fill="#8b5cf6" />
                </g>
                <text x="80" y="55" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle">SF HQ</text>

                {/* Branch Hub Pulse (Zurich - Middle Right) */}
                <g className="animate-pulse" style={{ animationDelay: '-1s' }}>
                  <circle cx="240" cy="90" r="10" fill="url(#pulse-glow-accent)" opacity="0.3" />
                  <circle cx="240" cy="90" r="4" fill="#06b6d4" />
                </g>
                <text x="240" y="78" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle">ZURICH HUB</text>

                <defs>
                  <radialGradient id="pulse-glow-primary" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="pulse-glow-accent" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Architect Nodes Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
