import Card from './UI/Card';
import { Star, MessageSquare } from 'lucide-react';
import ScrollReveal from './UI/ScrollReveal';

const testimonials = [
  {
    name: 'Dr. Evelyn Carter',
    role: 'VP of Platform Engineering',
    company: 'Apex Banking Corp',
    content: 'Aetheris Group engineered our proprietary LLM risk pipelines from the ground up. Their team demonstrated absolute technical competence, automating 90% of our banking compliance reviews with sub-millisecond precision.',
    stars: 5,
  },
  {
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Novus FinTech Ltd',
    content: 'The 3ms threat mitigation SLA that Aetheris Shield promised sounded like an overshoot, but it held true under mock attacks. Our transaction system handles massive loads with zero jitter. Uncompromisingly robust.',
    stars: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Executive Director of Cloud Ops',
    company: 'EuroLogistics AG',
    content: 'Transitioning to a multi-region sovereign cluster across 24 European nodes was a mammoth task. Aetheris SREs orchestrated the migration seamlessly with zero consumer downtime. An exceptional engineering partner.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 border-t border-slate-900/40 overflow-hidden">
      <div className="absolute inset-0 glow-mesh-1 animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-accent-400 uppercase">Endorsements</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-6">
              Trusted by Enterprise Engineering Teams
            </h2>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mb-8" />
            <p className="text-slate-300 text-base md:text-lg">
              Read what industry leaders say about our custom-engineered systems, cloud reliability, and technical SRE support.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 150} className="h-full">
              <Card
                className="flex flex-col items-start text-left p-8 hover:-translate-y-1.5 transition-all duration-300 border-slate-800/80 bg-slate-950/40 backdrop-blur-xl relative overflow-hidden h-full"
              >
                {/* Quote Mark Decorator */}
                <div className="absolute top-6 right-8 text-slate-800/40 select-none pointer-events-none">
                  <MessageSquare className="w-10 h-10 fill-current" />
                </div>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                  "{t.content}"
                </p>

                {/* Executive Profile Info */}
                <div className="flex flex-col pt-6 border-t border-slate-900 w-full mt-auto">
                  <span className="text-sm font-bold text-white tracking-tight">{t.name}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{t.role}</span>
                  <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest mt-1.5">
                    {t.company}
                  </span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
