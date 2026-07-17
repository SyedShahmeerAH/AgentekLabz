import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Agent Sprint',
    description: 'One agent, one outcome, shipped in two weeks.',
    pricePrefix: 'from $',
    price: '12k',
    period: '/ sprint',
    features: [
      'Scoped discovery & architecture',
      'Working prototype + evals',
      'Production handoff & docs',
    ],
    cta: 'Book a Sprint',
    highlighted: false,
  },
  {
    name: 'Lab Retainer',
    description: 'A dedicated lab pod for continuous agent work.',
    pricePrefix: '$',
    price: '9k',
    period: '/ week',
    features: [
      'Dedicated engineer + architect',
      'Ship & operate multiple agents',
      'Weekly evals & roadmap',
      'Slack-channel access',
    ],
    cta: 'Start a Retainer',
    highlighted: true,
  },
  {
    name: 'Intelligence Partner',
    description: 'Own the AI roadmap end-to-end with the lab as your core team.',
    pricePrefix: '',
    price: 'Custom',
    period: '',
    features: [
      'Multi-pod team & on-call',
      'Full platform & infra ownership',
      'Quarterly strategy & R&D',
    ],
    cta: 'Talk to Us',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 font-manrope">
              Engagements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white font-manrope mb-4 tracking-tight">
            Ways to work with the lab
          </h2>
          <p className="text-zinc-400 font-light">From a focused sprint to a full intelligence partnership.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 border transition-all duration-700 rounded-3xl flex flex-col ${
                plan.highlighted
                  ? 'border-accent-red bg-zinc-900/40 shadow-[0_0_40px_rgba(239,35,60,0.12)] scale-100 md:scale-105 z-10'
                  : 'border-zinc-800 bg-black hover:border-zinc-700'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-soft)' }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold font-manrope mb-2 tracking-tight">{plan.name}</h3>
              <p className={`text-sm mb-8 h-10 ${plan.highlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {plan.description}
              </p>

              <div className="mb-8 flex items-baseline gap-1">
                {plan.pricePrefix && (
                  <span className={`text-2xl ${plan.highlighted ? 'text-zinc-500' : 'text-zinc-500'}`}>{plan.pricePrefix}</span>
                )}
                <span className="text-5xl font-bold text-white font-manrope tracking-tighter">{plan.price}</span>
                {plan.period && (
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="text-accent-red mt-0.5 w-4 h-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 px-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-500 text-center ${
                  plan.highlighted
                    ? 'bg-accent-red hover:bg-[#d11a2e] text-white'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-soft)' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
