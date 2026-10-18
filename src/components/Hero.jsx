'use client';

import { ArrowRight, Gauge, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import StackInspector from './StackInspector';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid bg-radial-gradient">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-muted shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-brand-text font-medium">ESTUDIO DIGITAL DE INGENIERÍA WEB</span>
            <span className="text-brand-dim">•</span>
            <span className="text-brand-dim hidden sm:inline">CERO PLANTILLAS GENÉRICAS</span>
          </div>

          {/* Business-Driven Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.12]">
            Diseño digital pensado para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-cyan to-blue-500">
              conseguir clientes
            </span>{' '}
            y menos trabajo manual.
          </h1>

          {/* Action-Oriented Subtitle */}
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Creamos webs ultrarrápidas que transmiten confianza inmediata, digitalizamos la operativa de tu empresa y automatizamos tareas repetitivas con tecnología e inteligencia artificial.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all duration-200 shadow-lg shadow-brand-cyan/20 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#auditoria"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-rose-500 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 rounded-xl transition-all"
            >
              <Gauge className="w-4 h-4" />
              <span>Auditar Mi Web Gratis</span>
            </a>

            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-brand-text bg-brand-surface hover:bg-brand-elevated border border-brand-border hover:border-brand-border-light rounded-xl transition-all duration-200"
            >
              <span>Ver Trabajos Reales</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-dim font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Carga instantánea en smartphones</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Código y web 100% tuyos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Trato directo con el desarrollador</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Stack Inspector Element */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto">
          <StackInspector />
        </div>
      </div>
    </section>
  );
}
