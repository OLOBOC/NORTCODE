'use client';

import { ArrowRight, ArrowDown, Code2, Shield, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import StackInspector from './StackInspector';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid bg-radial-gradient">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Real Credentials Pill - Zero humo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-muted shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span className="text-white font-medium">ESTUDIO DIGITAL INDEPENDIENTE</span>
            <span className="text-brand-dim">•</span>
            <span className="text-brand-dim hidden sm:inline">FORMACIÓN OFICIAL DAW & DAM</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Diseño digital. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-text to-brand-cyan">
              Ingeniería útil.
            </span> <br />
            Menos trabajo manual.
          </h1>

          {/* Concise Subtitle */}
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Construimos webs de alto rendimiento, digitalizamos procesos empresariales y automatizamos tareas repetitivas con tecnología e inteligencia artificial. Sin humo ni rodeos.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all duration-200 shadow-lg shadow-brand-cyan/15 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-brand-text bg-brand-surface hover:bg-brand-elevated border border-brand-border hover:border-brand-border-light rounded-xl transition-all duration-200"
            >
              <span>Explorar Trabajos Reales</span>
            </a>

            <a
              href="#calculador"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono text-brand-cyan/90 hover:text-brand-cyan bg-brand-cyan/5 hover:bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Configurador de Necesidades</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-dim font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Propiedad 100% de tu código</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Velocidad de carga extrema</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Trato directo con el desarrollador</span>
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
