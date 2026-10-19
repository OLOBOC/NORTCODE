'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Gauge, Eye } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluciones', href: '#servicios' },
    { label: 'Configurador', href: '#simulador' },
    { label: 'Auditoría Gratis', href: '#auditoria', highlight: true },
    { label: 'Casos Reales', href: '#proyectos' },
    { label: 'Sobre Nortcode', href: '#sobre-nortcode' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/80 shadow-lg shadow-black/10 dark:shadow-black/30 py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Nortcode - Ir al inicio"
          >
            <NortcodeLogo size="md" showBadge={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-brand-surface/70 px-4 py-1.5 rounded-full border border-brand-border/60 backdrop-blur-sm" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  link.highlight
                    ? 'text-rose-500 dark:text-rose-400 font-semibold hover:bg-rose-500/10'
                    : 'text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + CTA */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href="#contacto"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all duration-200 shadow-sm shadow-brand-cyan/20 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
            >
              <span>Pedir Presupuesto</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text focus:outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-brand-border bg-brand-surface/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 mb-2 rounded-lg bg-brand-card border border-brand-border flex items-center justify-between text-[11px] font-mono text-brand-dim">
            <span className="text-brand-text font-medium">Estudio Digital Nortcode</span>
            <span className="text-emerald-500 font-semibold">PRESUPUESTOS 2026</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                link.highlight
                  ? 'text-rose-500 dark:text-rose-400 font-semibold bg-rose-500/10'
                  : 'text-brand-muted hover:text-brand-text hover:bg-brand-elevated'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-brand-bg bg-brand-cyan rounded-xl"
            >
              <span>Pedir Presupuesto Gratuito</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
