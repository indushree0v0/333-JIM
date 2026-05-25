import { Zap, ShieldAlert, Globe, Clock, CheckCircle2 } from 'lucide-react';
import Card from './UI/Card';
import ScrollReveal from './UI/ScrollReveal';

const highlights = [
  {
    title: '10x Engineering Velocity',
    description: 'Our proprietary infrastructure-as-code modules enable us to scaffold and launch zero-trust cloud architectures in days rather than months, accelerating your time-to-market.',
    icon: Zap,
    color: 'text-amber-400',
  },
  {
    title: 'Post-Quantum Cryptography',
    description: 'Every system we deploy incorporates advanced zero-knowledge encryption protocols and tokenized credential management to shield your enterprise against evolving threat models.',
    icon: ShieldAlert,
    color: 'text-indigo-400',
  },
  {
    title: 'Multi-Region Edge Topology',
    description: 'We orchestrate multi-active cloud setups spanning 40+ global regions, offering single-digit millisecond latency to endpoints on every continent.',
    icon: Globe,
    color: 'text-cyan-400',
  },
  {
    title: '24/7/365 Dedicated SRE Squads',
    description: 'Direct Slack, Teams, and pager channels to a dedicated Site Reliability Engineering team who actively audit and optimize your servers around the clock.',
    icon: Clock,
    color: 'text-emerald-400',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="relative py-24 border-t border-slate-900/40 overflow-hidden">
      <div className="absolute inset-0 glow-mesh-2 animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Feature Details Column */}
          <ScrollReveal animation="fade-right" className="lg:col-span-6 text-left">
            <div>
              <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-6">
                Why Global Enterprise Leaders Trust Aetheris Group
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mb-8" />
              <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
                We do not just install software; we engineer sovereign business ecosystems. By merging rigorous architectural standards with state-of-the-art automation, we build platforms that serve as foundational assets for decades.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-sm md:text-base"><strong className="text-white">Zero Vendor Lock-In:</strong> Open-source standards ensure you retain complete ownership of your infrastructure.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-sm md:text-base"><strong className="text-white">Strict Compliance Ready:</strong> Pre-architected to instantly pass SOC 2, HIPAA, and GDPR audits.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-sm md:text-base"><strong className="text-white">Measurable Operational Autonomy:</strong> Self-healing architectures that require minimal long-term engineering maintenance.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Highlights Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={(idx % 2) * 150} className="h-full">
                <Card
                  className="flex flex-col items-start text-left p-6 hover:-translate-y-1 transition-all duration-300 border-slate-800 bg-slate-950/40 backdrop-blur-xl h-full"
                >
                  <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 mb-5 ${highlight.color}`}>
                    <highlight.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
