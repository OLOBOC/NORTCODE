'use client';

import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

const commitments = [
  { title: 'Para Todos los Bolsillos', desc: 'Desde webs básicas económicas hasta plataformas corporativas complejas.' },
  { title: 'Control & Autonomía', desc: 'Plena libertad sobre tus dominios, diseño y contenidos sin ningún tipo de atadura.' },
  { title: 'Respuesta en 24h', desc: 'Sin comerciales intermediarios. Hablas directamente con quien lo construye.' },
  { title: 'Rendimiento Garantizado', desc: 'Carga en < 0.5s y score 100 en PageSpeed o lo optimizamos.' },
];

const credentials = [
  { abbrev: 'DAW', full: 'Desarrollo de Aplicaciones Web', grade: 'FP Superior Oficial', desc: 'Frontend, Next.js, React, SEO, UX' },
  { abbrev: 'DAM', full: 'Desarrollo de Aplicaciones Multiplataforma', grade: 'FP Superior Oficial', desc: 'Backend, APIs, Cloud, Bases de datos' },
  { abbrev: 'STI', full: 'Sistemas de Telecomunicaciones', grade: 'Especialización Técnica', desc: 'Seguridad, redes, RGPD, servidores' },
];

export default function About() {
  return (
    <section id="sobre-nortcode" className="py-24 sm:py-28 bg-brand-bg relative section-diagonal overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-brand-cyan/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="mb-14 sm:mb-16 space-y-4">
          <div className="status-pill w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan inline-block" />
            SOBRE NORTCODE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-[-0.03em] leading-[1.05] sm:leading-[0.98] lg:leading-[0.95]">
            El estudio digital<br />
            <span className="text-brand-muted font-light italic text-2xl sm:text-4xl">que trabaja por ti.</span>
          </h2>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">

          {/* ── LEFT: Founder Card (compact, natural landscape ratio, not oversized) ── */}
          <div className="lg:col-span-4 max-w-md mx-auto lg:mx-0 w-full">
            <div className="rounded-3xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden card-lift">
              {/* Photo Container with natural landscape ratio (matches 1024x571 image) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-card">
                <img
                  src="/founder.jpg"
                  alt="Omar Loboc — Fundador de Nortcode"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
                
                {/* Subtle bottom edge gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge: Verified Degree */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Titulación Oficial</span>
                </div>

                {/* Status on bottom-left of photo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  DIRECTO CON DESARROLLADOR
                </div>
              </div>

              {/* Founder Bio Details (below photo so face is never cut off or obscured) */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start justify-between gap-2 border-b border-brand-border/60 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-text">Omar Loboc</h3>
                    <p className="text-xs text-brand-cyan font-mono mt-0.5">Fundador & Desarrollador Principal</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-dim shrink-0">
                    NORTCODE
                  </span>
                </div>

                <p className="text-xs text-brand-muted leading-relaxed">
                  Trato directo con quien diseña la arquitectura, programa el código y te acompaña en el lanzamiento. Sin intermediarios comerciales.
                </p>

                {/* Compact Action Buttons */}
                <div className="space-y-2 pt-1">
                  <a
                    href="#contacto"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-black bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-md shadow-brand-cyan/20"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Hablar Directamente por Correo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Philosophy */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight leading-snug">
                "Sin intermediarios, sin costes inflados,{' '}
                <span className="text-brand-cyan">con resultados que se miden."</span>
              </h3>
              <div className="space-y-3 text-sm text-brand-muted leading-relaxed">
                <p>
                  Nortcode es un estudio digital independiente creado para que <strong className="text-brand-text">pequeños negocios, autónomos y empresas</strong> accedan a una presencia digital de verdad — con la calidad de un equipo grande, al precio que puedes permitirte.
                </p>
                <p>
                  En lugar de comerciales y gestores de cuentas que nunca tocan el código, aquí trabajas directamente con el desarrollador. Eso se traduce en <strong className="text-brand-text">respuestas inmediatas, presupuestos honestos y un resultado del que puedes sentirte orgulloso.</strong>
                </p>
              </div>
            </div>

            {/* Commitments grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commitments.map((c, i) => (
                <div key={i} className="p-4 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3 hover:border-brand-border-light transition-all">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-text">{c.title}</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic credentials */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-dim uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-brand-cyan" />
                <span>Titulaciones Oficiales del Estado Español</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="relative p-4 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-border-light transition-all overflow-hidden group"
                  >
                    {/* Accent top line */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-brand-cyan/30 to-transparent" />
                    
                    <div className="text-2xl font-black text-brand-cyan mb-2 group-hover:text-white transition-colors">
                      {cred.abbrev}
                    </div>
                    <div className="text-[9px] font-mono text-brand-cyan uppercase mb-1">{cred.grade}</div>
                    <h5 className="text-xs font-bold text-brand-text leading-tight mb-1">{cred.full}</h5>
                    <p className="text-[10px] text-brand-muted">{cred.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location + availability */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-card border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-brand-surface border border-brand-border shrink-0">
                  <NortcodeLogo size="sm" showBadge={false} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-brand-dim uppercase tracking-wider">UBICACIÓN & ALCANCE</div>
                  <p className="text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                    Operando desde España para clientes locales, pymes y proyectos remotos en toda la Unión Europea.
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                DISPONIBLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
