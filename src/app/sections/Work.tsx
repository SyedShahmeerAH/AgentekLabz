const cases = [
  {
    span: 'lg:col-span-3 lg:row-span-2',
    minHeight: 'min-h-[420px]',
    category: 'Custom Websites',
    year: 'Service',
    title: 'A website that sells while you sleep',
    description:
      'We design and build fast, responsive websites that clearly communicate your value and guide visitors toward action — whether that is a purchase, a booking, or a consultation request.',
    metrics: [
      { label: 'Focus', value: 'Conversion' },
      { label: 'Approach', value: 'Custom' },
      { label: 'Result', value: 'Growth' },
    ],
  },
  {
    span: 'lg:col-span-3',
    category: 'AI Assistants',
    year: 'Service',
    title: 'An AI employee that knows your business',
    description:
      'Stop leaving customers waiting. We train AI assistants on your real business content so they answer questions accurately, consistently, and around the clock.',
    metrics: [
      { label: 'Availability', value: '24/7' },
      { label: 'Knowledge', value: 'Yours' },
    ],
  },
  {
    span: 'lg:col-span-2',
    category: 'Booking Systems',
    year: 'Service',
    title: 'Scheduling that never drops the ball',
    description: 'We build appointment and consultation booking systems connected to your calendar, with automated confirmations and reminders that reduce no-shows and manual follow-up.',
    metrics: [{ label: 'Outcome', value: 'More bookings' }],
  },
  {
    span: 'lg:col-span-1',
    category: 'End-to-End',
    year: 'Service',
    title: 'Everything connected',
    description: 'Your website, assistant, and booking tools working together as one clean system.',
    metrics: [{ label: 'Approach', value: 'Unified' }],
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
                How We Help
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope leading-[1.1]">
              Built for <span className="text-accent-red">business growth.</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm">
            Three services designed to turn interest into revenue — better websites, faster answers, and smoother bookings.
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
                        <div className={`text-2xl font-bold font-manrope ${metric.label === 'Outcome' || metric.label === 'Result' || metric.label === 'Availability' ? 'text-accent-red' : 'text-white'}`}>
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
