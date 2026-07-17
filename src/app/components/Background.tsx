export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] via-black to-black"></div>

      <div className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent stars-1 animate-[animStar_50s_linear_infinite]"></div>
      <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent stars-2 animate-[animStar_80s_linear_infinite]"></div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/8 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>

      <div className="absolute inset-0 grid-glow-line [mask-image:radial-gradient(circle_at_center,black_40%,transparent_85%)]"></div>

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        }}
      ></div>
    </div>
  );
}
