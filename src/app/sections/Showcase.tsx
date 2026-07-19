'use client';

import CircularGallery from '../components/CircularGallery';

const showcaseItems = [
  { image: 'https://picsum.photos/seed/agentek-1/800/600?grayscale', text: 'Support Agent' },
  { image: 'https://picsum.photos/seed/agentek-2/800/600?grayscale', text: 'Pricing Engine' },
  { image: 'https://picsum.photos/seed/agentek-3/800/600?grayscale', text: 'RAG Pipeline' },
  { image: 'https://picsum.photos/seed/agentek-4/800/600?grayscale', text: 'Outbound Agent' },
  { image: 'https://picsum.photos/seed/agentek-5/800/600?grayscale', text: 'Workflow Orchestrator' },
  { image: 'https://picsum.photos/seed/agentek-6/800/600?grayscale', text: 'Research Engine' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 font-manrope">
                Visual Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope leading-[1.1]">
              Systems in <span className="text-accent-red">motion.</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm">
            Drag, scroll, or swipe through the agents we&apos;ve built. Each one runs autonomously in production.
          </p>
        </div>

        <div
          className="relative w-full h-[60vh] min-h-[420px] max-h-[720px] rounded-[40px] border border-white/10 bg-black/40 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.35)]"
          style={{
            background:
              'radial-gradient(circle at 50% -20%, rgba(239,35,60,0.12), transparent 60%), rgba(0,0,0,0.4)',
          }}
        >
          <CircularGallery
            items={showcaseItems}
            bend={3.5}
            textColor="#ffffff"
            borderRadius={0.08}
            scrollEase={0.03}
            scrollSpeed={2.5}
            font="bold 28px var(--font-manrope), sans-serif"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
