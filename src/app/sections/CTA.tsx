'use client';

import ShinyCta from '../components/ShinyCta';

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6 text-center bg-zinc-950/40 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
          </span>
          <span className="text-xs font-medium text-red-100/90 tracking-wide font-manrope">
            Ready to grow?
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold font-manrope mb-8 tracking-tighter">
          Ready to <span className="text-accent-red">convert?</span>
        </h2>

        <p className="text-xl text-zinc-400 mb-12 font-light">
          Tell us what you need — a website that sells, an assistant that answers, or a booking system that never misses a lead. We&apos;ll build the system that makes it happen.
        </p>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="you@company.com"
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-red transition-all duration-500"
            style={{ transitionTimingFunction: 'var(--ease-soft)' }}
          />
          <ShinyCta type="submit">Start a Project</ShinyCta>
        </form>

        <p className="text-xs text-zinc-600 mt-6">
          Or email us directly —{' '}
          <a href="mailto:hello@agenteklabz.ai" className="text-zinc-400 hover:text-accent-red transition-colors">
            hello@agenteklabz.ai
          </a>
        </p>
      </div>
    </section>
  );
}
