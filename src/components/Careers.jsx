import Button from './UI/Button';
import { Briefcase, MapPin, Globe, Sparkles, Send } from 'lucide-react';
import ScrollReveal from './UI/ScrollReveal';

const openRoles = [
  {
    title: 'Principal Site Reliability Engineer',
    team: 'SRE & Infrastructure',
    location: 'Remote / Zurich, CH',
    type: 'Full-time',
  },
  {
    title: 'Deep Learning Research Architect',
    team: 'AI systems',
    location: 'Remote / San Francisco, US',
    type: 'Full-time',
  },
  {
    title: 'Zero-Trust Security Lead',
    team: 'Cybersecurity Operations',
    location: 'Remote / London, UK',
    type: 'Full-time',
  },
];

const Careers = () => {
  const handleApplyClick = (roleTitle) => {
    alert(`Mock Application initialized for: ${roleTitle}. In a production environment, this would load our secure candidate intake portal.`);
  };

  return (
    <section id="careers" className="relative py-24 border-t border-slate-900/40 overflow-hidden">
      <div className="absolute inset-0 glow-mesh-3 animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Careers Card Container */}
        <div className="rounded-3xl glass-panel p-8 md:p-16 border border-slate-800/80 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/60 to-slate-950/80">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Recruiting Details Column */}
            <ScrollReveal animation="fade-right" className="lg:col-span-5 text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-500/20 bg-accent-500/10 text-accent-300 text-[10px] font-bold tracking-wider uppercase mb-6">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  Active Recruiting
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  Build the Sovereign Infrastructure of Tomorrow
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  We are a distributed engineering force of systems thinkers, kernel hackers, and AI pioneers. We work with complete technical freedom, solving massive scale challenges with high autonomy. Join us and shape the architectural bedrock of modern enterprise.
                </p>

                {/* Company Perks */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-950 border border-slate-850 text-slate-400">
                      <Globe className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300 text-xs font-semibold">100% Distributed & Async Operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-950 border border-slate-850 text-slate-400">
                      <Briefcase className="w-4 h-4 text-violet-400" />
                    </div>
                    <span className="text-slate-300 text-xs font-semibold">Competitive Equity + Full Medical & Learning Budgets</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Open Positions Grid Column */}
            <div className="lg:col-span-7 w-full flex flex-col gap-4">
              <ScrollReveal animation="fade-left" delay={100}>
                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2 text-left">
                  Featured Open Positions
                </h3>
              </ScrollReveal>

              {openRoles.map((role, idx) => (
                <ScrollReveal key={idx} animation="fade-left" delay={150 + idx * 100}>
                  <div
                    className="rounded-2xl border border-slate-850/60 bg-slate-950/60 hover:bg-slate-900/80 hover:border-primary-500/40 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-300 group"
                  >
                    <div className="text-left">
                      <span className="text-xxs font-bold text-primary-400 uppercase tracking-widest block mb-1">
                        {role.team}
                      </span>
                      <h4 className="text-base font-bold text-white tracking-tight group-hover:text-primary-300 transition-colors">
                        {role.title}
                      </h4>
                      <div className="flex items-center gap-4 mt-2.5">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xxs font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-slate-600" />
                          {role.location}
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                          {role.type}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="secondary"
                      size="sm"
                      className="sm:w-auto w-full flex items-center justify-center gap-1.5 group/btn border-slate-800 hover:bg-primary-500/10 hover:border-primary-500/50 hover:text-white"
                      onClick={() => handleApplyClick(role.title)}
                    >
                      <span>Apply</span>
                      <Send className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal animation="fade-left" delay={450}>
                <div className="mt-4 text-center sm:text-left">
                  <span className="text-slate-500 text-xs font-medium">
                    Don't see your specific expertise? Send your CV to{' '}
                    <a
                      href="mailto:careers@aetheris.group"
                      className="text-primary-400 hover:text-primary-300 font-semibold underline cursor-pointer"
                    >
                      careers@aetheris.group
                    </a>
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
