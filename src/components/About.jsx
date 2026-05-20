
import Card from './UI/Card';
import { Target, Eye, Compass, ShieldAlert, Award, Milestone } from 'lucide-react';

const stats = [
  { value: '99.999%', label: 'Infrastructure Uptime SLA', icon: ShieldAlert, color: 'text-indigo-400' },
  { value: '450+', label: 'Enterprise Systems Launched', icon: Milestone, color: 'text-primary-400' },
  { value: '180+', label: 'SRE & AI Engineers On Staff', icon: Compass, color: 'text-accent-400' },
];

const values = [
  {
    title: 'Our Mission',
    description: 'To engineer hyper-scalable neural architectures and private cloud ecosystems that empower multinational corporations to achieve full operational autonomy.',
    icon: Target,
    gradient: 'from-primary-500/10 to-indigo-500/5 border-primary-500/20',
    iconColor: 'text-primary-400',
  },
  {
    title: 'Our Vision',
    description: 'To establish the global standard for zero-trust enterprise software integrations, paving the path where AI-native computing is inherently secure and highly localized.',
    icon: Eye,
    gradient: 'from-accent-500/10 to-cyan-500/5 border-accent-500/20',
    iconColor: 'text-accent-400',
  },
  {
    title: 'Our Core Value',
    description: 'Uncompromising engineering excellence. We believe that clean architectures, microsecond performance, and impenetrable security form the backbone of trust.',
    icon: Award,
    gradient: 'from-violet-500/10 to-fuchsia-500/5 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-slate-900/40">
      <div className="absolute inset-0 glow-mesh-3 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-6">
            Architects of Secure Digital Sovereignty
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mb-8" />
          <p className="text-slate-300 text-lg leading-relaxed">
            Founded by a collective of cloud architects and deep learning researchers, Aetheris Group fills the gap between raw computational capability and production-grade enterprise stability. We partner with the world's most demanding enterprises to modernize their software infrastructure.
          </p>
        </div>

        {/* Values / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((item, idx) => (
            <Card
              key={idx}
              className={`flex flex-col items-start text-left bg-gradient-to-br ${item.gradient} hover:-translate-y-1.5 transition-transform duration-300`}
            >
              <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 mb-6 ${item.iconColor}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Statistics Board */}
        <div className="rounded-2xl glass-panel p-8 md:p-12 border border-slate-800/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center text-center ${
                  idx > 0 ? 'pt-8 md:pt-0 md:pl-8' : ''
                } ${idx < stats.length - 1 ? 'pb-8 md:pb-0' : ''}`}
              >
                <div className={`p-3 rounded-full bg-slate-950 border border-slate-900 mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
