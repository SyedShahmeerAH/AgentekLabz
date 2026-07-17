import { Search, FlaskConical, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'We map your workflows, data, and failure modes — then pinpoint where autonomous agents earn their keep.',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Prototype',
    description: 'A working agent in two weeks — evals, guardrails, and a measurable outcome, not a slide deck.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ship',
    description: 'Production deployment with observability, evals in CI, and a clear rollback path. We run it, you own it.',
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Evolve',
    description: 'Continuous eval-driven improvement — your agents get sharper every week against your own metrics.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 font-manrope">
              How we work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope leading-[1.1]">
            A lab process, not a <span className="text-accent-red">black box.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-700"
                style={{ transitionTimingFunction: 'var(--ease-soft)' }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-bold font-manrope text-stroke">{step.number}</span>
                  <Icon className="w-5 h-5 text-zinc-600 group-hover:text-accent-red transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-white font-manrope mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
