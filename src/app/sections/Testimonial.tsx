import { Star, User } from 'lucide-react';

export default function Testimonial() {
  return (
    <div className="w-full bg-accent-red py-20 md:py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #000 0, transparent 40%), radial-gradient(circle at 80% 50%, #000 0, transparent 40%)',
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center gap-1 text-black mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-6 h-6" fill="currentColor" />
          ))}
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-black font-manrope leading-[1.15] mb-10 tracking-tight">
          "We don't chase trends — we build systems that solve real business problems and keep working long after launch."
        </h3>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-black rounded-full overflow-hidden flex items-center justify-center">
            <User className="text-white w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-black font-bold text-lg font-manrope">Agentek Labz</div>
            <div className="text-black/70 font-medium text-sm">Custom websites, AI assistants & booking systems</div>
          </div>
        </div>
      </div>
    </div>
  );
}
