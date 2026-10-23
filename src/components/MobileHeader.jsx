'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  BadgeEuro,
  Bot,
  BriefcaseBusiness,
  Gauge,
  Menu,
  MessageCircle,
  Server,
  UserRound,
  Wrench,
  X,
} from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/movil/soluciones', title: 'Soluciones web', icon: Wrench },
  { href: '/movil/ingenieria', title: 'Ingeniería & Cloud', icon: Server },
  { href: '/movil/precios', title: 'Precios', icon: BadgeEuro },
  { href: '/movil/proyectos', title: 'Proyectos reales', icon: BriefcaseBusiness },
  { href: '/movil/configurador', title: 'Diseña tu proyecto', icon: Bot },
  { href: '/movil/auditoria', title: 'Rendimiento web', icon: Gauge },
  { href: '/movil/nortcode', title: 'Sobre Nortcode', icon: UserRound },
  { href: '/movil/contacto', title: 'Contacto y preguntas frecuentes', icon: MessageCircle },
];

export default function MobileHeader({ backHref = '/', backLabel, showContact = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-border bg-brand-bg/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4">
          <div className="flex min-w-0 items-center gap-2">
            {backLabel && (
              <Link
                href={backHref}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-brand-muted"
                aria-label={backLabel}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Link>
            )}
            <Link href="/" aria-label="Nortcode, inicio">
              <NortcodeLogo size="sm" />
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-brand-text transition-colors hover:text-brand-cyan"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-navigation"
            aria-label="Qué te gustaría conocer"
            className="absolute inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-brand-border bg-brand-bg px-4 pb-8 pt-6"
          >
            <p className="mb-4 text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
              ¿QUÉ TE GUSTARÍA CONOCER?
            </p>
            <div className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-2">
              {navLinks.map(({ href, title, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface p-3.5 transition-colors hover:border-brand-cyan/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-card text-brand-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-sm font-semibold">{title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand-dim" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {showContact && (
        <Link
          href="/movil/contacto"
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-cyan text-black shadow-xl shadow-black/25 transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={2} />
        </Link>
      )}
    </>
  );
}
