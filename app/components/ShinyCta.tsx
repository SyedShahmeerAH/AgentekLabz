import { ArrowRight } from 'lucide-react';

interface ShinyCtaProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

export default function ShinyCta({
  children,
  href,
  type = 'button',
  className = '',
  onClick,
}: ShinyCtaProps) {
  const content = (
    <span className="relative z-10 flex items-center gap-2 text-white font-medium">
      {children}
      <ArrowRight
        className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
        style={{ transitionTimingFunction: 'var(--ease-soft)' }}
      />
    </span>
  );

  const classes = `shiny-cta group inline-flex ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
