'use client';

import { useState } from 'react';
import { Globe, RefreshCw, Cpu, CheckCircle2, ArrowRight, Smartphone, Monitor, Gauge, Shield, Database } from 'lucide-react';
import BeforeAfterComparator from './BeforeAfterComparator';
import AutomationFlow from './AutomationFlow';

export default function Services() {
  const [devicePreview, setDevicePreview] = useState('desktop');

  return (
    <section id="servicios" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>TRES PILARES TÉCNICOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ingeniería digital pensada para resolver problemas reales
          </h2>
          <p className="text-base text-brand-muted mt-3 leading-relaxed">
            Eliminamos intermediarios, plantillas pesadas y código innecesario. Diseñamos infraestructura digital sólida para que la tecnología trabaje directamente para el beneficio de tu negocio.
          </p>
        </div>

        {/* ============================================================== */}
        {/* PILAR 01: DESARROLLO WEB & PRESENCIA DIGITAL */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan">
              <span className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/30">01</span>
              <span>DESARROLLO WEB & RENDIMIENTO EXTREMO</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Webs y plataformas rápidas, elegantes y pensadas para convertir
            </h3>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              No usamos constructores visuales lentos ni plantillas sobrecargadas. Programamos con <strong className="text-white">Next.js, React y Tailwind CSS</strong> para lograr tiempos de carga instantáneos, indexación SEO impecable y adaptación fluida a cualquier pantalla.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-text">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Webs corporativas, portfolios profesionales y landings de alta conversión.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Arquitectura SEO técnico estructurada con microdatos Schema.org.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Score 95-100 en Google PageSpeed Insights (móvil y escritorio).</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Propiedad y código 100% tuyos, sin ataduras a plataformas propietarias.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white transition-colors group"
              >
                <span>Solicitar propuesta de desarrollo web</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Interactive Web Performance Mockup */}
          <div className="lg:col-span-6 rounded-2xl bg-brand-surface border border-brand-border p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs">
              <div className="flex items-center gap-2 font-mono text-brand-dim">
                <Gauge className="w-4 h-4 text-emerald-400" />
                <span>AUDITORÍA EN VIVO (CORE WEB VITALS)</span>
              </div>
              <div className="inline-flex p-1 rounded-lg bg-brand-bg border border-brand-border">
                <button
                  onClick={() => setDevicePreview('desktop')}
                  className={`p-1.5 rounded transition-all ${
                    devicePreview === 'desktop' ? 'bg-brand-card text-brand-cyan' : 'text-brand-dim hover:text-white'
                  }`}
                  title="Vista Escritorio"
                  aria-label="Vista de escritorio"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDevicePreview('mobile')}
                  className={`p-1.5 rounded transition-all ${
                    devicePreview === 'mobile' ? 'bg-brand-card text-brand-cyan' : 'text-brand-dim hover:text-white'
                  }`}
                  title="Vista Móvil"
                  aria-label="Vista móvil"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Google Lighthouse 100 Dials */}
            <div className="grid grid-cols-4 gap-2 text-center py-2">
              <div className="p-2.5 rounded-xl bg-brand-card border border-emerald-500/30">
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">100</div>
                <div className="text-[10px] text-brand-muted mt-0.5">Rendimiento</div>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-card border border-emerald-500/30">
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">100</div>
                <div className="text-[10px] text-brand-muted mt-0.5">Accesibilidad</div>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-card border border-emerald-500/30">
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">100</div>
                <div className="text-[10px] text-brand-muted mt-0.5">Buenas Prácticas</div>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-card border border-emerald-500/30">
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">100</div>
                <div className="text-[10px] text-brand-muted mt-0.5">SEO Técnico</div>
              </div>
            </div>

            {/* Code Structure Preview */}
            <div className="rounded-xl bg-brand-bg p-3.5 font-mono text-xs border border-brand-border space-y-1.5 text-brand-dim">
              <div className="text-[10px] text-brand-cyan flex items-center justify-between pb-1 border-b border-brand-border/60">
                <span>// RENDIMIENTO DE COMPILACIÓN</span>
                <span className="text-emerald-400">BUNDLE: 64 KB GZIPPED</span>
              </div>
              <div className="text-white text-[11px]">&gt; next build --experimental-turbo</div>
              <div className="text-brand-muted text-[10px] pl-2">✓ Generating static pages (SSG)</div>
              <div className="text-brand-muted text-[10px] pl-2">✓ Optimizing images with Next/Image AVIF</div>
              <div className="text-emerald-400 text-[10px] pl-2 font-bold">✓ First Contentful Paint: 0.3s</div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PILAR 02: DIGITALIZACIÓN DE PROCESOS */}
        {/* ============================================================== */}
        <div className="space-y-6 pt-10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan">
              <span className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/30">02</span>
              <span>DIGITALIZACIÓN DE PROCESOS EMPRESARIALES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Moderniza flujos de trabajo caóticos y elimina errores manuales
            </h3>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Muchas empresas siguen perdiendo horas al día copiando y pegando datos entre hojas de cálculo, correos y notas adhesivas. Diseñamos e implementamos sistemas digitales centralizados para que todo tu equipo trabaje coordinado y sin pérdidas de información.
            </p>
          </div>

          {/* Interactive Before/After Comparator Component */}
          <BeforeAfterComparator />
        </div>

        {/* ============================================================== */}
        {/* PILAR 03: AUTOMATIZACIÓN & IA APLICADA */}
        {/* ============================================================== */}
        <div className="space-y-6 pt-10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan">
              <span className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/30">03</span>
              <span>AUTOMATIZACIÓN CON IA & WEBHOOKS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Haz que la tecnología haga el trabajo repetitivo por ti
            </h3>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Conectamos tus canales (formularios, correos, bases de datos, n8n y modelos de lenguaje) para automatizar la atención inicial, la extracción de datos de documentos y la sincronización en tiempo real. Cero humo, solo ahorro tangible de horas de trabajo cada mes.
            </p>
          </div>

          {/* Interactive Automation Flow Diagram Component */}
          <AutomationFlow />
        </div>
      </div>
    </section>
  );
}
