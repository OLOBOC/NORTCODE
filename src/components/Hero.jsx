'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Code2, Globe, Zap, Gauge, TrendingUp, ArrowUpRight, Play } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 1800 }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCurrent(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {current}{suffix}
    </span>
  );
}

export default function Hero() {
  const [activeService, setActiveService] = useState(0);
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
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
                Estudio Digital Activo · España
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
                <span>Solicitar Presupuesto Gratis</span>
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
                'Presupuesto sin compromiso',
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

          {/* ── Right: Stats & Nortcode Engine Showcase (No portfolio project here) ── */}
          <div className="space-y-4 animate-fade-in-up-delay-1">

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: 'Proyectos Entregados', value: 12, suffix: '+', color: 'text-brand-cyan' },
                { label: 'PageSpeed Score', value: 100, suffix: '', color: 'text-emerald-400' },
                { label: 'Clientes Satisfechos', value: 100, suffix: '%', color: 'text-blue-400' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-2xl bg-brand-surface border border-brand-border text-center space-y-1 card-lift"
                >
                  <div className={`text-xl sm:text-3xl font-black ${stat.color}`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-brand-dim uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Browser: Nortcode Core Engine (Studio Architecture) */}
            <div className="browser-frame animate-float shadow-2xl">
              <div className="browser-topbar">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="ml-4 flex-1 bg-brand-card rounded-md px-3 py-1 text-[11px] font-mono text-brand-muted truncate flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>https://studio.nortcode.es/core-engine</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2 py-0.5 rounded ml-2 shrink-0">
                  ACTIVO
                </span>
              </div>

              <div className="p-4 sm:p-5 bg-brand-surface/95 space-y-3.5 font-mono text-xs select-none">
                {/* Header status bar inside frame */}
                <div className="flex items-center justify-between pb-2.5 border-b border-brand-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="text-brand-text font-bold text-xs">NORTCODE CORE ENGINE</span>
                  </div>
                  <span className="text-[10px] text-brand-dim">V2.4 · MADRID EDGE</span>
                </div>

                {/* Core Web Vitals telemetry mini grid */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-card border border-brand-border">
                    <div className="text-[8px] sm:text-[9px] text-brand-dim uppercase">FCP</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400">0.28s</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-card border border-brand-border">
                    <div className="text-[8px] sm:text-[9px] text-brand-dim uppercase">LCP</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400">0.42s</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-card border border-brand-border">
                    <div className="text-[8px] sm:text-[9px] text-brand-dim uppercase">CLS</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400">0.00</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-card border border-brand-border">
                    <div className="text-[8px] sm:text-[9px] text-brand-dim uppercase">SCORE</div>
                    <div className="text-xs sm:text-sm font-bold text-brand-cyan">100/100</div>
                  </div>
                </div>

                {/* Animated Pipeline Flow */}
                <div className="p-3 rounded-xl bg-brand-card/70 border border-brand-border space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-brand-dim">
                    <span>FLUJO DE CARGA EN EDGE:</span>
                    <span className="text-emerald-400">LATENCIA 14ms</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-[9px] sm:text-[10px] text-brand-text font-mono">
                    <span className="p-1 rounded-md bg-brand-surface border border-brand-border text-center flex-1 truncate">Petición 4G</span>
                    <span className="text-brand-dim">→</span>
                    <span className="p-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-center flex-1 truncate">Cloudflare CDN</span>
                    <span className="text-brand-dim">→</span>
                    <span className="p-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center flex-1 truncate">Next.js 15</span>
                  </div>
                </div>

                {/* Console Terminal Line */}
                <div className="p-2.5 rounded-xl bg-black/60 border border-brand-border/80 text-[10px] sm:text-[11px] text-brand-muted space-y-1">
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <span className="text-brand-dim">$</span>
                    <span>nortcode audit --performance</span>
                  </div>
                  <div className="text-brand-dim">✓ Arquitectura limpia · Cero dependencias lentas</div>
                  <div className="text-brand-cyan flex items-center gap-1 pt-0.5">
                    <Zap className="w-3 h-3 text-brand-cyan shrink-0" />
                    <span>Carga garantizada en menos de 0.5 segundos</span>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="flex items-center justify-between pt-1 text-[10px] sm:text-[11px]">
                  <span className="text-brand-dim">¿Quieres esta velocidad en tu web?</span>
                  <a
                    href="#configurador"
                    className="inline-flex items-center gap-1 text-brand-cyan hover:text-white transition-colors font-bold"
                  >
                    <span>Configurar proyecto</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* PageSpeed Indicator */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-brand-card border border-brand-border">
              <div className="shrink-0">
                <Gauge className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-mono text-brand-dim mb-1.5">Google PageSpeed · Performance</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ '--fill': '100%' }} />
                </div>
              </div>
              <div className="text-sm font-black text-emerald-400 shrink-0">100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
