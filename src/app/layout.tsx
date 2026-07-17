import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Agentek Labz — Autonomous AI Agent Engineering',
  description:
    'Agentek Labz designs and engineers autonomous AI agents and workflow automation that run operations 24/7. We build the intelligence layer for ambitious teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="selection-red font-inter min-h-screen bg-black text-white relative">
        {children}
      </body>
    </html>
  );
}
