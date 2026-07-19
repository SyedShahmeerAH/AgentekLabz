import { ArrowRight, Play, Database, LucideIcon } from 'lucide-react';
import BrandIcon from '../components/BrandIcon';
import ShinyCta from '../components/ShinyCta';

type TechLogo =
  | { type: 'brand'; icon: 'openai' | 'langchain' | 'n8n' | 'supabase' | 'vercel'; label: string }
  | { type: 'lucide'; icon: LucideIcon; label: string };

const techLogos: TechLogo[] = [
  { type: 'brand', icon: 'openai', label: 'OpenAI' },
  { type: 'brand', icon: 'langchain', label: 'LangChain' },
  { type: 'lucide', icon: Database, label: 'Pinecone' },
  { type: 'brand', icon: 'n8n', label: 'n8n' },
  { type: 'brand', icon: 'supabase', label: 'Supabase' },
  { type: 'brand', icon: 'vercel', label: 'Vercel' },
];

export default function Hero() {
  return (
    <section id="top" className="min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="text-center max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
              style={{ animation: 'pulse-ring 2s var(--ease-out-expo) infinite' }}
            ></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
          </span>
          <span className="text-xs font-medium text-red-100/90 tracking-wide font-manrope">
            Custom websites, AI assistants & booking systems
          </span>
          <ArrowRight className="w-3 h-3 text-red-400" />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter font-manrope leading-[1.05] mb-8 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            Websites, AI assistants,
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            and booking systems{' '}
            <span className="text-accent-red inline-block relative">
              that convert
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-accent-red opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </span>
        </h1>

        <p
          className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up font-light"
          style={{ animationDelay: '0.3s' }}
        >
          We build the digital systems that turn interest into revenue — modern websites, AI assistants trained on your business, and booking flows that capture every opportunity.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <ShinyCta href="#contact">Start a Project</ShinyCta>

          <a
            href="#work"
            className="group px-7 py-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all duration-500 flex items-center gap-2.5"
            style={{ transitionTimingFunction: 'var(--ease-soft)' }}
          >
            <Play className="w-4 h-4 text-accent-red" />
            See Our Services
          </a>
        </div>
      </div>

      <div className="w-full mt-24 md:mt-32 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-10 opacity-70 hover:opacity-100 transition-opacity duration-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-16">
          <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase shrink-0 font-manrope">
            Trusted tools:
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:gap-16 items-center w-full">
            {techLogos.map((logo) => (
              <div
                key={logo.label}
                className="flex items-center gap-2 font-manrope font-semibold text-zinc-300"
              >
                {logo.type === 'brand' ? (
                  <BrandIcon name={logo.icon} className="w-5 h-5" />
                ) : (
                  <logo.icon className="w-5 h-5" />
                )}
                {logo.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
