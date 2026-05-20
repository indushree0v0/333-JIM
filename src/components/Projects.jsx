import { useState } from 'react';
import Card from './UI/Card';
import { ArrowRight, Sparkles, Shield, Cloud, Server } from 'lucide-react';

const categories = ['All', 'AI Systems', 'Enterprise Cloud', 'Cybersecurity'];

const projects = [
  {
    title: 'Nexus Core Neural Platform',
    client: 'Apex Banking Corp',
    category: 'AI Systems',
    results: '99.9% Risk Assessment Accuracy',
    description: 'We engineered custom LLM-based neural layers to analyze transaction records, automating compliance workflows and reducing processing overhead.',
    icon: Sparkles,
    color: 'from-primary-500/20 to-indigo-500/20',
    iconColor: 'text-primary-400',
    meta: 'AI LLM Pipeline',
  },
  {
    title: 'Helios Sovereign Cloud Hub',
    client: 'EuroLogistics AG',
    category: 'Enterprise Cloud',
    results: '99.999% SLA Guarantee Met',
    description: 'A sovereign multi-cloud mesh network across 24 European regions ensuring complete data localization compliance with zero-trust bridges.',
    icon: Cloud,
    color: 'from-sky-500/20 to-indigo-500/20',
    iconColor: 'text-sky-400',
    meta: 'Multi-Region Mesh',
  },
  {
    title: 'Aether Shield Zero-Trust Core',
    client: 'Novus FinTech Ltd',
    category: 'Cybersecurity',
    results: '3ms Threat Mitigation Time',
    description: 'Engineered tokenized transaction firewalls with real-time active honeypots, mitigating over 50,000+ potential threat vectors daily.',
    icon: Shield,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    meta: 'Cryptographic Vault',
  },
  {
    title: 'Vesper SaaS Sync Engine',
    client: 'SaaSify Inc',
    category: 'Enterprise Cloud',
    results: '10M+ Concurrent Sync Streams',
    description: 'A global microservices sync layer optimizing active state caches across edge computing points, driving down latency by 65%.',
    icon: Server,
    color: 'from-violet-500/20 to-fuchsia-500/20',
    iconColor: 'text-violet-400',
    meta: 'State Cache Sync',
  },
  {
    title: 'Cognitive Industrial Vision',
    client: 'Stark Manufacturing',
    category: 'AI Systems',
    results: '99.98% Defect Deflection Rate',
    description: 'Computer vision neural layers deployed at edge camera nodes performing instant sub-millimeter component structural integrity testing.',
    icon: Sparkles,
    color: 'from-pink-500/20 to-primary-500/20',
    iconColor: 'text-pink-400',
    meta: 'Edge Neural Vision',
  },
  {
    title: 'Aegis Quantum Firewall',
    client: 'MedSovereign Health',
    category: 'Cybersecurity',
    results: 'Fully Post-Quantum Protected',
    description: 'Deploying lattice-based encryption algorithms to secure medical database records against theoretical quantum computing decryption.',
    icon: Shield,
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    meta: 'Lattice Cryptography',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="relative py-24 border-t border-slate-900/40 bg-slate-950/20">
      <div className="absolute inset-0 glow-mesh-3 animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-6">
            Proven Operations at Global Scales
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mb-8" />
          <p className="text-slate-300 text-base md:text-lg">
            A showcase of enterprise systems engineered to deliver performance, scalability, and absolute security under stress.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 border-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              className="group p-0 overflow-hidden border-slate-800 bg-slate-950/40 backdrop-blur-xl relative flex flex-col min-h-[460px] hover:border-primary-500/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Graphic/Image Simulator Header */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${project.color} overflow-hidden border-b border-slate-900 flex items-center justify-center p-6 select-none`}>
                {/* Simulated Wireframe Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                
                {/* Central Visual Graphic Representing the Project */}
                <div className="relative w-28 h-28 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between p-4 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 w-fit ${project.iconColor}`}>
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">{project.meta}</span>
                    <span className="text-xxs font-semibold text-slate-300 truncate max-w-[80px]">{project.client}</span>
                  </div>
                </div>

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                {/* Client & Category Header */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xxs font-bold uppercase tracking-widest text-slate-500">
                    {project.client}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-bold tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics / Technical Result Footer */}
                <div className="mt-auto pt-4 border-t border-slate-900/60 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Key Metric Achieved</span>
                    <span className="text-xs font-bold text-emerald-400 mt-0.5">{project.results}</span>
                  </div>
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
