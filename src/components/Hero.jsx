'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Check, Play, Sparkles, Zap } from 'lucide-react';
import { businessNeeds, createBusinessNeedsContactData } from '@/lib/businessNeeds';

export default function Hero({ onTransferToContact }) {
  const [activeService, setActiveService] = useState(0);
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const services = [
    'Webs para negocios locales',
    'Tiendas y catálogos online',
    'Webs corporativas premium',
    'Portafolios profesionales',
    'Automatización con IA',
    'Rescate de webs lentas',
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setActiveService((p) => (p + 1) % services.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const toggleNeed = (id) => {
    setSelectedNeeds((current) => (
      current.includes(id)
        ? current.filter((need) => need !== id)
        : [...current, id]
    ));
  };

  const handleNeedsSubmit = () => {
    if (selectedNeeds.length === 0) return;

    onTransferToContact?.(createBusinessNeedsContactData(selectedNeeds));

    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-radial-gradient"
    >
      {/* ── Ambient Light Orbs ── */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[8%] w-[350px] h-[350px] rounded-full bg-blue-600/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] rounded-full bg-brand-cyan/3 blur-[80px] pointer-events-none" />

      {/* ── Subtle Grid ── */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="space-y-8 animate-fade-in-up">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="status-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan inline-block" />
                Nortcode · Estudio Digital · España
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-brand-text leading-[1.05] sm:leading-[0.98] lg:leading-[0.95] tracking-[-0.03em]">
                Webs que
                <br />
                <span className="text-shimmer">generan clientes</span>
                <br />
                <span className="text-brand-muted font-light italic text-3xl sm:text-5xl lg:text-6xl">de verdad.</span>
              </h1>
            </div>

            {/* Animated Service Ticker */}
            <div className="flex items-center gap-2 sm:gap-3 min-h-[36px]">
              <span className="text-xs sm:text-sm font-mono text-brand-dim shrink-0">Para:</span>
              <div className="overflow-hidden h-9 flex-1 relative">
                {services.map((svc, i) => (
                  <div
                    key={i}
                    className="h-9 flex items-center transition-all duration-500 ease-in-out"
                    style={{
                      opacity: i === activeService ? 1 : 0,
                      transform: i === activeService ? 'translateY(0)' : i < activeService ? 'translateY(-100%)' : 'translateY(100%)',
                      position: i === activeService ? 'relative' : 'absolute',
                      width: '100%',
                    }}
                  >
                    <span className="text-base sm:text-lg font-semibold text-brand-cyan truncate">
                      {i === activeService ? '→ ' : ''}{svc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-brand-muted max-w-lg leading-relaxed animate-fade-in-up-delay-1">
              Desde una web económica para tu negocio local hasta una plataforma corporativa o software a medida.{' '}
              <strong className="text-brand-text font-semibold">Sin plantillas genéricas, sin cuotas cautivas y con arquitectura escalable.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up-delay-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-black bg-brand-cyan hover:bg-white rounded-2xl transition-all duration-200 shadow-xl shadow-brand-cyan/20 group"
              >
                <span>Cuéntame tu caso</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-brand-text bg-brand-card border border-brand-border hover:border-brand-border-light rounded-2xl transition-all"
              >
                <Play className="w-4 h-4 text-brand-cyan" />
                <span>Ver Proyectos Reales</span>
              </a>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 animate-fade-in-up-delay-3">
              {[
                'Precio asequible',
                'Carga en < 0.5s garantizada',
                'Arquitectura limpia y escalable',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-brand-dim">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Interactive needs selector ── */}
          <div className="animate-fade-in-up-delay-1">
            <div className="browser-frame shadow-2xl">
              <div className="browser-topbar">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="ml-4 flex-1 bg-brand-card rounded-md px-3 py-1 text-[11px] font-mono text-brand-muted truncate">
                  nortcode.es / tu proyecto
                </div>
                <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded ml-2 shrink-0">
                  A TU MEDIDA
                </span>
              </div>

              <div className="p-4 sm:p-6 bg-brand-surface/95 space-y-4">
                <div>
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-brand-cyan uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      01 / Tareas del día a día
                    </div>
                    <h2 className="mt-2 text-lg sm:text-xl font-bold text-brand-text">¿Qué tareas haces cada semana?</h2>
                    <p className="mt-1 text-xs text-brand-muted">Marca las que te suenen y te enseño cómo podríamos resolverlas.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {businessNeeds.map((need, index) => {
                    const isSelected = selectedNeeds.includes(need.id);

                    return (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => toggleNeed(need.id)}
                        aria-pressed={isSelected}
                        aria-expanded={isSelected}
                        className={`group w-full flex items-start gap-3 border-b px-1 py-3.5 sm:py-4 text-left transition-all duration-300 ${
                          isSelected
                            ? 'border-brand-cyan/50'
                            : 'border-brand-border hover:border-brand-border-light'
                        }`}
                        style={{ transitionDelay: `${index * 35}ms` }}
                      >
                        <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all duration-300 ${
                          isSelected
                            ? 'bg-brand-cyan text-brand-bg border-brand-cyan'
                            : 'bg-transparent text-transparent border-brand-muted group-hover:border-brand-cyan'
                        }`}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={`block w-fit text-sm sm:text-base font-medium transition-all duration-300 ${
                            isSelected
                              ? 'text-brand-muted line-through decoration-brand-cyan decoration-2'
                              : 'text-brand-text'
                          }`}>
                            {need.label}
                          </span>
                          <span
                            className={`block overflow-hidden text-xs sm:text-sm leading-relaxed text-brand-muted transition-all duration-500 ${
                              isSelected ? 'mt-2 max-h-24 translate-y-0 opacity-100' : 'max-h-0 -translate-y-1 opacity-0'
                            }`}
                            aria-hidden={!isSelected}
                          >
                            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-cyan">Podemos ayudarte:</span>
                            <br />
                            {need.solution}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-brand-dim">
                    <Zap className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    <span>
                      {selectedNeeds.length
                        ? `Has marcado ${selectedNeeds.length}. Con eso ya tenemos por dónde empezar.`
                        : 'Si ninguna encaja, cuéntame tu caso directamente.'}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={handleNeedsSubmit}
                      disabled={selectedNeeds.length === 0}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-cyan px-4 py-2.5 text-xs font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-brand-cyan/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-brand-cyan disabled:hover:shadow-none"
                    >
                      <span>Enviarme la lista</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href="/servicios"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-cyan transition-colors hover:text-white"
                    >
                      <span>Ver ingeniería y tecnología</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
