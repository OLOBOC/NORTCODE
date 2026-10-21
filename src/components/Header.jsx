'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Server, Eye, Sparkles, Gauge, UserCheck, Mail, ArrowRight, MessageSquare } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Soluciones', href: '/#servicios', icon: Globe, tag: 'Web & Móvil' },
    { label: 'Ingeniería & Cloud', href: '/servicios#ingenieria', icon: Server, tag: 'SaaS / DevOps' },
    { label: 'Casos Reales', href: '/#proyectos', icon: Eye, tag: 'En Vivo' },
    { label: 'Configurador IA', href: '/#configurador', icon: Sparkles, tag: 'Nuevo' },
    { label: 'Auditoría Gratis', href: '/#auditoria', icon: Gauge, highlight: true },
    { label: 'Sobre Nortcode', href: '/#sobre-nortcode', icon: UserCheck, tag: 'Equipo' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/80 shadow-lg shadow-black/10 dark:shadow-black/30 py-3'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Official Logo */}
            <a
              href="/#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group focus:outline-none shrink-0"
              aria-label="Nortcode - Ir al inicio"
            >
              <NortcodeLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-brand-surface/70 px-4 py-1.5 rounded-full border border-brand-border/60 backdrop-blur-sm" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    link.highlight
                      ? 'text-rose-500 dark:text-rose-400 font-semibold hover:bg-rose-500/10'
                      : 'text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Theme Toggle + CTA + Hamburger Button */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <ThemeToggle />

              {/* Desktop & Tablet CTA */}
              <a
                href="#contacto"
                className="hidden sm:inline-flex relative items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all duration-200 shadow-sm shadow-brand-cyan/20 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 shrink-0"
              >
                <span>Cuéntame tu caso</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Menu Button ("Las tres rayas") */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-text hover:text-brand-cyan hover:border-brand-border-light active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-rose-500" />
                ) : (
                  <div className="w-5 h-5 flex flex-col justify-center gap-1">
                    <span className="w-5 h-0.5 bg-brand-text rounded-full transition-transform" />
                    <span className="w-3.5 h-0.5 bg-brand-cyan rounded-full transition-transform" />
                    <span className="w-5 h-0.5 bg-brand-text rounded-full transition-transform" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Overlay & Menu Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed inset-x-0 top-[60px] bottom-0 max-h-[calc(100vh-60px)] overflow-y-auto bg-brand-surface border-b border-brand-border p-5 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Top Status Banner */}
            <div className="p-3 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-brand-text font-medium"> Nortcode </span>
              </div>
              <span className="text-brand-cyan font-semibold text-[10px] bg-brand-cyan/10 border border-brand-cyan/25 px-2 py-0.5 rounded-full">
                RESPUESTA &lt; 24H
              </span>
            </div>

            {/* Navigation Links Grid */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-brand-dim uppercase tracking-wider block px-1">
                Secciones Principales
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                        link.highlight
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-400 font-semibold'
                          : 'bg-brand-card/70 border-brand-border text-brand-text hover:border-brand-border-light hover:bg-brand-card'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${link.highlight ? 'bg-rose-500/20 text-rose-400' : 'bg-brand-surface text-brand-cyan'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">{link.label}</span>
                      </div>
                      {link.tag && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-surface text-brand-muted border border-brand-border">
                          {link.tag}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact & CTA Area */}
            <div className="pt-2 border-t border-brand-border/60 space-y-3">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-4 text-sm font-bold text-black bg-brand-cyan hover:bg-white rounded-2xl transition-all shadow-lg shadow-brand-cyan/20 active:scale-[0.98]"
              >
                <span>Cuéntame tu caso</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:oloboc.digitalbusiness@gmail.com?subject=Consulta%20Web%20Nortcode"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-xs font-mono text-brand-muted hover:text-brand-text transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-cyan" />
                <span>HABLEMOS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
