import Card from './UI/Card';
import { Cloud, Cpu, ShieldCheck, Layers, Share2, Infinity as InfinityIcon, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Intelligent Cloud Orchestration',
    description: 'We design and manage global, low-latency multi-cloud topologies with automated autoscaling SRE protocols, reducing compute overhead by up to 40%.',
    icon: Cloud,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
  },
  {
    title: 'Predictive AI Architectures',
    description: 'Establish proprietary LLMs, neural search mechanisms, and private semantic networks tailored to ingest and operationalize your complex corporate knowledgebase.',
    icon: Cpu,
    color: 'text-primary-400',
    bgColor: 'bg-primary-500/10',
    borderColor: 'hover:border-primary-500/50 hover:shadow-primary-500/10',
  },
  {
    title: 'Zero-Trust CyberShield',
    description: 'Impenetrable, end-to-end security architectures featuring active intrusion detection, real-time threat response, and regulatory compliance frameworks (SOC2/GDPR).',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  },
  {
    title: 'Autonomous SaaS Engines',
    description: 'Engineering microsecond-level database layers, ultra-responsive API gateways, and distributed modular backends to run your core software operations without bottlenecking.',
    icon: Layers,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
  },
  {
    title: 'Cryptographic Ledger Assets',
    description: 'Build hyper-secure consensus bridges, private blockchain ledgers, and audited decentralized environments for asset tokenization and programmatic logistics.',
    icon: Share2,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
  },
  {
    title: 'DevOps Pipeline Automation',
    description: 'Zero-downtime blue-green rollouts, automated canary deployments, and serverless optimization pipelines built to scale infinitely from first commit to deployment.',
    icon: InfinityIcon,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 border-t border-slate-900/40 bg-slate-950/20">
      <div className="absolute inset-0 glow-mesh-1 animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-400 uppercase">Core Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-6">
            Engineered Services for Hyper-Scale Infrastructure
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mb-8" />
          <p className="text-slate-300 text-base md:text-lg">
            We provide full-spectrum engineering capabilities, deploying highly specialized cloud, software, security, and neural infrastructures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className={`flex flex-col items-start text-left group cursor-pointer transition-all duration-300 border-slate-800/60 ${service.borderColor}`}
            >
              {/* Icon Container */}
              <div className="flex justify-between items-center w-full mb-6">
                <div className={`p-3.5 rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-center ${service.color} ${service.bgColor}`}>
                  <service.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-slate-600 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Action Link */}
              <span className="mt-auto text-xs font-bold text-slate-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest flex items-center gap-1.5">
                Learn More
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform" />
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
