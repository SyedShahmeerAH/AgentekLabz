import Image from 'next/image';
import { Twitter, Linkedin, Github } from 'lucide-react';

const labLinks = [
  { href: '#work', label: 'How We Help' },
  { href: '#services', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Engagements' },
];

const companyLinks = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Field Notes' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="Agentek Labz"
              width={640}
              height={160}
              className="h-28 w-auto object-contain"
            />
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            Agentek Labz builds custom websites, AI knowledge assistants, and booking systems that help growing businesses save time, improve customer experience, and convert more leads.
          </p>

          <div className="flex gap-3 mt-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent-red/40 transition-all duration-500"
                  style={{ transitionTimingFunction: 'var(--ease-soft)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-accent-red uppercase tracking-widest mb-6 font-manrope">Lab</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {labLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-accent-red uppercase tracking-widest mb-6 font-manrope">Company</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-[10px] uppercase tracking-widest gap-4">
        <p>&copy; 2026 Agentek Labz. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
}
