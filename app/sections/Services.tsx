import { Bot, Code, Zap, Layers, Database, Plug, Check, ArrowRight } from 'lucide-react';

const mainFeature = {
  icon: Bot,
  iconColor: 'text-accent-red',
  title: 'Autonomous Agent Engineering',
  description:
    'Multi-step agents that reason, plan, and act across your tools — from research synthesis to fully autonomous support resolution. We ship agents with guardrails, memory, and observability built in.',
  bullets: [
    'Tool-use & function calling orchestration',
    'Long-term memory & vector recall',
    'Eval suites & human-in-the-loop fallback',
  ],
};

const features = [
  {
    icon: Code,
    iconColor: 'text-blue-400',
    title: 'Workflow Automation',
    description:
      'Replace brittle no-code stacks with durable, observable pipelines that connect every tool in your stack — and self-heal when they break.',
    span: 'lg:col-span-2',
  },
  {
    icon: Database,
    iconColor: 'text-purple-400',
    title: 'RAG & Data Pipelines',
    description: 'Ground every answer in your own knowledge — retrieval systems tuned for accuracy, not hallucination.',
    span: 'lg:col-span-1',
  },
  {
    icon: Plug,
    iconColor: 'text-emerald-400',
    title: 'Integrations & APIs',
    description: 'Production-grade connectors across CRM, billing, support, and internal data — typed and tested.',
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
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6 leading-[1.1]">
            The operating system for <br />
            <span className="text-accent-red">AI-native teams</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light max-w-xl">
            We replace stitched-together tooling with one cohesive intelligence layer — designed, built, and operated by our lab.
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
                <span className="text-xs font-mono text-accent-red uppercase tracking-wider">Explore capability</span>
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
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
