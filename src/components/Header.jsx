'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Cpu, ChevronRight } from 'lucide-react';

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
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Calculador', href: '#calculador' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Sobre Nortcode', href: '#sobre-nortcode' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-border/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Isotype */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Nortcode - Ir al inicio"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-surface border border-brand-border group-hover:border-brand-cyan/60 transition-colors duration-300 overflow-hidden shadow-inner">
              <svg viewBox="0 0 32 32" className="w-6 h-6 text-brand-cyan transition-transform duration-300 group-hover:scale-105" fill="none">
                <path d="M16 6L23 22L16 19L9 22L16 6Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                <path d="M16 6V19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                <circle cx="8" cy="25" r="1.25" fill="#3B82F6"/>
                <circle cx="24" cy="25" r="1.25" fill="#3B82F6"/>
              </svg>
              <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white font-mono">
                  NORT<span className="text-brand-cyan">CODE</span>
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Sistema Operativo" />
              </div>
              <span className="text-[10px] tracking-wider uppercase text-brand-dim font-mono">
                Estudio Digital
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-brand-surface/70 px-4 py-1.5 rounded-full border border-brand-border/60 backdrop-blur-sm" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-brand-muted hover:text-white hover:bg-brand-elevated/70 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-lg transition-all duration-200 shadow-sm shadow-brand-cyan/20 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
            >
              <span>Iniciar Proyecto</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-muted hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-cyan"
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
        <div className="md:hidden border-b border-brand-border bg-brand-surface/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 mb-2 rounded-lg bg-brand-elevated/50 border border-brand-border/50 flex items-center justify-between text-[11px] font-mono text-brand-dim">
            <span className="flex items-center gap-1.5 text-brand-muted">
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              DAW • DAM • STI
            </span>
            <span className="text-emerald-400">DISPONIBLE 2026</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-brand-text hover:text-brand-cyan hover:bg-brand-elevated rounded-lg transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-brand-dim" />
            </a>
          ))}

          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-brand-bg bg-brand-cyan rounded-lg"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
