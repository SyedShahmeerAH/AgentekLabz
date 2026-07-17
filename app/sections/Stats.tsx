const stats = [
  { value: '240+', label: 'Agents shipped' },
  { value: '1.2M+', label: 'Hours automated' },
  { value: '99.98%', label: 'Agent uptime' },
  { value: '38', label: 'Teams partnered' },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-bold font-manrope tracking-tighter text-white">
              {stat.value.split(/(%|\+)/).map((part, idx) => {
                const key = `${stat.label}-${idx}`;
                if (part === '%' || part === '+') {
                  return (
                    <span key={key} className="text-accent-red">
                      {part}
                    </span>
                  );
                }
                return <span key={key}>{part}</span>;
              })}
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-manrope">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
