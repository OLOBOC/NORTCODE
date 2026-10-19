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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-brand-text leading-[0.95] tracking-[-0.03em]">
                Webs que
                <br />
                <span className="text-shimmer">generan clientes</span>
                <br />
                <span className="text-brand-muted font-light italic text-4xl sm:text-5xl lg:text-6xl">de verdad.</span>
              </h1>
            </div>

            {/* Animated Service Ticker */}
            <div className="flex items-center gap-3 h-8">
              <span className="text-sm font-mono text-brand-dim shrink-0">Para:</span>
              <div className="overflow-hidden h-8 flex-1">
                {services.map((svc, i) => (
                  <div
                    key={i}
                    className="h-8 flex items-center transition-all duration-500 ease-in-out"
                    style={{
                      opacity: i === activeService ? 1 : 0,
                      transform: i === activeService ? 'translateY(0)' : i < activeService ? 'translateY(-100%)' : 'translateY(100%)',
                      position: i === activeService ? 'relative' : 'absolute',
                    }}
                  >
                    <span className="text-lg font-semibold text-brand-cyan">
                      {i === activeService ? '→ ' : ''}{svc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base text-brand-muted max-w-lg leading-relaxed animate-fade-in-up-delay-1">
              Desde una web económica para tu negocio local hasta una plataforma corporativa de alto nivel.{' '}
              <strong className="text-brand-text font-semibold">Sin plantillas. Sin cuotas ocultas. Código tuyo al 100%.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up-delay-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-black bg-brand-cyan hover:bg-white rounded-2xl transition-all duration-200 shadow-xl shadow-brand-cyan/20 group"
              >
                <span>Solicitar Presupuesto Gratis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center gap-2.5 px-6 py-4 text-sm font-semibold text-brand-text bg-brand-card border border-brand-border hover:border-brand-border-light rounded-2xl transition-all"
              >
                <Play className="w-4 h-4 text-brand-cyan" />
                <span>Ver Proyectos Reales</span>
              </a>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in-up-delay-3">
              {[
                'Presupuesto sin compromiso',
                'Carga en < 0.5s garantizada',
                'Web 100% de tu propiedad',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-brand-dim">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Stats & Browser Preview ── */}
          <div className="space-y-4 animate-fade-in-up-delay-1">

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Proyectos Entregados', value: 12, suffix: '+', color: 'text-brand-cyan' },
                { label: 'PageSpeed Score', value: 100, suffix: '', color: 'text-emerald-400' },
                { label: 'Clientes Contentos', value: 100, suffix: '%', color: 'text-blue-400' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-brand-surface border border-brand-border text-center space-y-1 card-lift"
                >
                  <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-mono text-brand-dim uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Browser Preview of Audax */}
            <div className="browser-frame animate-float">
              <div className="browser-topbar">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="ml-4 flex-1 bg-brand-card rounded-md px-3 py-1 text-[11px] font-mono text-brand-muted truncate">
                  audax-motors.vercel.app
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2 py-0.5 rounded ml-3">
                  EN VIVO
                </span>
              </div>
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/portfolio-audax.png"
                  alt="Ejemplo de proyecto real: Audax Motors"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 via-transparent to-transparent" />
                {/* Overlay CTA */}
                <a
                  href="https://audax-motors.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm border border-brand-border text-xs font-bold text-white rounded-xl hover:bg-brand-cyan hover:text-black transition-all"
                >
                  <span>Abrir en Vivo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
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
