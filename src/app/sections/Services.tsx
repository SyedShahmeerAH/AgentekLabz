import { Bot, Code, Zap, Calendar, Check, ArrowRight } from 'lucide-react';

const mainFeature = {
  icon: Bot,
  iconColor: 'text-accent-red',
  title: 'AI Knowledge Assistants',
  description:
    'Give your customers instant, accurate answers with an AI assistant trained specifically on your business — your docs, FAQs, products, services, and policies. It works 24/7 like a knowledgeable employee who never forgets the details.',
  bullets: [
    'Trained on your own business data and content',
    'Answers customer questions instantly, 24/7',
    'Reduces repetitive inquiries and support load',
  ],
};

const features = [
  {
    icon: Code,
    iconColor: 'text-blue-400',
    title: 'Custom Business Websites',
    description:
      'A modern website is your hardest-working salesperson. We design and build responsive, fast, SEO-friendly sites with CMS integration, dashboards, and client portals — so your business looks premium and operates smoothly.',
    span: 'lg:col-span-2',
    bullets: [
      'Responsive design that works on every device',
      'SEO-friendly structure for organic growth',
      'CMS, dashboards, and client portals integrated',
    ],
  },
  {
    icon: Calendar,
    iconColor: 'text-purple-400',
    title: 'Booking & Appointment Systems',
    description: 'Turn scheduling into revenue with appointment booking, consultation flows, calendar integration, and automated confirmations — so no lead slips through the cracks.',
    span: 'lg:col-span-1',
  },
  {
    icon: Zap,
    iconColor: 'text-emerald-400',
    title: 'Strategy & Ongoing Support',
    description: 'We plan, build, and refine your systems over time — connecting your website, assistant, and booking tools into one cohesive experience.',
    span: 'lg:col-span-1',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 font-manrope">
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6 leading-[1.1]">
            Three services. One clear goal:<br />
            <span className="text-accent-red">more business.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light max-w-xl">
            We build the digital systems that turn interest into revenue — websites that convert, assistants that answer, and booking flows that never miss an opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 auto-rows-fr">
          {/* Main Feature Card */}
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-700 hover:border-white/20"
            style={{ transitionTimingFunction: 'var(--ease-soft)' }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-zinc-900/50 to-black"></div>
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, #ef233c, transparent 65%)' }}
            ></div>
            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-accent-red icon-pill">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-semibold text-white font-manrope mb-4 tracking-tight">
                {mainFeature.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">{mainFeature.description}</p>
              <div className="mt-8 space-y-2.5 flex-1">
                {mainFeature.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-accent-red" />
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0"
              >
                <span className="text-xs font-mono text-accent-red uppercase tracking-wider">Explore service</span>
                <ArrowRight className="w-4 h-4 text-accent-red" />
              </div>
            </div>
          </div>

          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.span} group relative overflow-hidden rounded-3xl border border-white/10 bg-black hover:border-white/20 transition-all duration-700`}
                style={{ transitionTimingFunction: 'var(--ease-soft)' }}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-[0.10] transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${feature.iconColor === 'text-blue-400' ? '#3b82f6' : feature.iconColor === 'text-purple-400' ? '#a855f7' : '#10b981'}, transparent 65%)` }}
                ></div>
                <div className="relative z-10 flex flex-col h-full p-8"
                >
                  <div className={`mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 ${feature.iconColor} icon-pill`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-400 mb-4">{feature.description}</p>
                  {feature.bullets && (
                    <div className="space-y-2 mt-auto">
                      {feature.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <Check className="w-4 h-4 text-accent-red" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
