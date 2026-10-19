'use client';

import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Zap, Globe, Gauge } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Subtle high-end ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Subtle Studio Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs font-mono text-brand-muted shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-brand-text font-semibold">ESTUDIO DE INGENIERÍA & DISEÑO WEB</span>
            <span className="text-brand-dim">|</span>
            <span className="text-brand-cyan font-semibold">SOLUCIONES PARA CADA BOLSILLO</span>
          </div>

          {/* Master Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-brand-text leading-[1.08]">
            Páginas web a medida <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-cyan to-blue-400">
              diseñadas para vender.
            </span>
          </h1>

          {/* Subtitle with Honest Commercial Focus */}
          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed font-normal">
            Creamos desde <strong className="text-brand-text font-semibold">webs económicas para pequeños negocios y autónomos</strong> hasta <strong className="text-brand-text font-semibold">webs corporativas de alta gama, portafolios y rescate de webs lentas</strong>. Cero plantillas genéricas. Soluciones profesionales adaptadas a tu presupuesto.
          </p>

          {/* Action Buttons: Direct Email / Budget Form + Projects */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-2xl transition-all duration-200 shadow-xl shadow-brand-cyan/20 group"
            >
              <Mail className="w-4 h-4" />
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-brand-text bg-brand-surface hover:bg-brand-elevated border border-brand-border hover:border-brand-border-light rounded-2xl transition-all"
            >
              <span>Ver Trabajos Reales</span>
            </a>

            <a
              href="#auditoria"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-rose-500 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 rounded-2xl transition-all"
            >
              <Gauge className="w-4 h-4" />
              <span>Auditar Web Gratis</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-dim font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Presupuestos honestos sin compromiso</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Carga en &lt; 0.5s en smartphones</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Código y web 100% de tu propiedad</span>
            </div>
          </div>
        </div>

        {/* Studio Pillars Minimal Grid */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-brand-surface border border-brand-border backdrop-blur-xl space-y-3 shadow-xl hover:border-brand-border-light transition-all">
            <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">01 · ADAPTABILIDAD</div>
            <h3 className="text-lg font-bold text-brand-text">Para Todos los Bolsillos</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Tanto si eres un autónomo que necesita una web sencilla y eficaz, como si representas a una empresa que busca un catálogo dinámico.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-brand-surface border border-brand-border backdrop-blur-xl space-y-3 shadow-xl hover:border-brand-border-light transition-all">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">02 · VELOCIDAD REAL</div>
            <h3 className="text-lg font-bold text-brand-text">Ingeniería sin Plantillas</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Programamos con Next.js y React para lograr tiempos de carga instantáneos, máxima retención de visitas y mejor posicionamiento en Google.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-brand-surface border border-brand-border backdrop-blur-xl space-y-3 shadow-xl hover:border-brand-border-light transition-all">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">03 · TRANSPARENCIA</div>
            <h3 className="text-lg font-bold text-brand-text">Trato Directo con Omar</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Sin comerciales intermediarios ni ataduras mensuales. Comunicación fluida por correo electrónico y atención dedicada a tu proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
