'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Engagements' },
];

const menuItems = [
  { href: '#work', label: 'Work', delay: 1 },
  { href: '#services', label: 'Services', delay: 2 },
  { href: '#process', label: 'Process', delay: 3 },
  { href: '#pricing', label: 'Engagements', delay: 4 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pt-6 px-4">
        <nav className="max-w-5xl mx-auto flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <a href="#top" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Agentek Labz"
              width={160}
              height={40}
              className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ transitionTimingFunction: 'var(--ease-soft)' }}
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="group relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 px-5 py-2 transition-transform duration-500 active:scale-95"
              style={{ transitionTimingFunction: 'var(--ease-soft)' }}
            >
              <span className="absolute inset-0 border border-white/10 rounded-full"></span>
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-[1px] rounded-full bg-black"></span>
              <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                Start a Project
                <span className="arrow-nest w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-red transition-colors duration-500"
                >
                  <ArrowRight className="w-3 h-3" />
                </span>
              </span>
            </a>

            <button
              id="menu-toggle"
              onClick={() => setOpen(!open)}
              className={`md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/5 ${open ? 'menu-open' : ''}`}
              aria-label="Toggle menu"
            >
              <span className="menu-line line-top block w-4 h-[1.5px] bg-white"></span>
              <span className="menu-line line-mid block w-4 h-[1.5px] bg-white"></span>
              <span className="menu-line line-bottom block w-4 h-[1.5px] bg-white"></span>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/85 backdrop-blur-3xl md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="menu-item text-3xl font-manrope font-semibold tracking-tight text-white"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(2rem)',
                transitionDelay: open ? `${60 * item.delay}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="menu-item mt-6 text-sm font-bold uppercase tracking-wider text-accent-red"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(2rem)',
              transitionDelay: open ? '300ms' : '0ms',
            }}
          >
            Start a Project →
          </a>
        </div>
      </div>
    </>
  );
}
