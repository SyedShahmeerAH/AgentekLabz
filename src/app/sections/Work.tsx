const cases = [
  {
    span: 'lg:col-span-3 lg:row-span-2',
    minHeight: 'min-h-[420px]',
    category: 'Fintech · Support Automation',
    year: '2025',
    title: 'Autonomous support agent resolving 74% of tier-1 tickets',
    description:
      'A reasoning agent with tool-use across billing, identity, and policy docs — deployed into the existing helpdesk with zero workflow disruption.',
    metrics: [
      { label: 'Auto-resolved', value: '74%' },
      { label: 'Avg → 14s', value: '9 min' },
      { label: 'Annual savings', value: '$1.4M' },
    ],
  },
  {
    span: 'lg:col-span-3',
    category: 'E-commerce · Ops',
    year: '2025',
    title: 'Inventory & pricing agent across 12 marketplaces',
    description:
      'Real-time competitive pricing and stock rebalancing — fully autonomous, with audit-trail logging.',
    metrics: [
      { label: 'Margin lift', value: '+31%' },
      { label: 'Uptime', value: '24/7' },
    ],
  },
  {
    span: 'lg:col-span-2',
    category: 'Healthtech · Research',
    year: '2025',
    title: 'RAG engine over 2M clinical docs',
    description: 'Cited, traceable answers for clinicians — sub-300ms retrieval.',
    metrics: [{ label: 'P95 latency', value: '298ms' }],
  },
  {
    span: 'lg:col-span-1',
    category: 'SaaS · Growth',
    year: '2025',
    title: 'Outbound research agent',
    description: '10x account exec bandwidth.',
    metrics: [{ label: 'Throughput', value: '10×' }],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 font-manrope">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope leading-[1.1]">
              Outcomes, not <span className="text-accent-red">demos.</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm">
            A look at the agents and systems we've shipped — and the impact they delivered in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`${item.span} group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black hover:border-white/20 transition-all duration-700 ${item.minHeight || ''}`}
              style={{ transitionTimingFunction: 'var(--ease-soft)' }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 70% 20%, rgba(239,35,60,0.18), transparent 60%)' }}
              ></div>

              <div className="relative z-10 h-full flex flex-col p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 font-manrope">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-accent-red">{item.year}</span>
                </div>

                {index === 0 && (
                  <div className="flex-1 flex items-center">
                    <div className="grid grid-cols-12 gap-1.5 w-full opacity-90">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                        const highlighted = [1, 3, 5, 7, 9].includes(i);
                        return (
                          <div
                            key={i}
                            className={`col-span-1 h-2 rounded-full ${highlighted ? 'bg-accent-red/60' : 'bg-white/10'}`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white font-manrope mb-3 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-6">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className={`text-2xl font-bold font-manrope ${metric.label === 'Auto-resolved' || metric.label === 'Margin lift' || metric.label === 'P95 latency' || metric.label === 'Throughput' ? 'text-accent-red' : 'text-white'}`}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
