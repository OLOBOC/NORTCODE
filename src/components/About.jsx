'use client';

import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

const commitments = [
  { title: 'Para Todos los Bolsillos', desc: 'Desde webs básicas económicas hasta plataformas corporativas complejas.' },
  { title: 'Código 100% Tuyo', desc: 'El código fuente, el diseño y el dominio te pertenecen completamente.' },
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
    <section id="sobre-nortcode" className="py-28 bg-brand-bg relative section-diagonal overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-brand-cyan/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="mb-16 space-y-4">
          <div className="status-pill w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan inline-block" />
            SOBRE NORTCODE
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-[-0.03em] leading-[0.95]">
            El estudio digital<br />
            <span className="text-brand-muted font-light italic text-3xl sm:text-4xl">que trabaja por ti.</span>
          </h2>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">

          {/* ── LEFT: Photo Card ── */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden bg-brand-card border border-brand-border shadow-2xl">

              {/* Photo */}
              <div className="relative aspect-[3/4]">
                <img
                  src="/founder.jpg"
                  alt="Omar Loboc — Fundador de Nortcode"
                  className="w-full h-full object-cover object-center"
                />
                {/* Bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Name card at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white">Omar Loboc</h3>
                        <p className="text-xs text-brand-cyan font-mono">Fundador & Desarrollador Principal</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        ACTIVO
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      Trato directo con quien diseña, programa y entrega tu proyecto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified badge */}
              <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-brand-surface border border-brand-border shadow-xl text-xs font-mono text-brand-text">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Titulación Homologada</span>
              </div>
            </div>

            {/* CTA buttons under photo */}
            <div className="mt-5 space-y-3">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black bg-brand-cyan hover:bg-white rounded-2xl transition-all shadow-lg shadow-brand-cyan/20"
              >
                <Mail className="w-4 h-4" />
                <span>Contactar por Correo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-border-light rounded-2xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-brand-cyan" />
                <span>Solicitar Presupuesto</span>
              </a>
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
            <div className="p-5 rounded-2xl bg-brand-card border border-brand-border flex items-center gap-5">
              <div className="p-3 rounded-2xl bg-brand-surface border border-brand-border">
                <NortcodeLogo size="sm" showBadge={false} />
              </div>
              <div>
                <div className="text-xs font-mono text-brand-dim">UBICACIÓN & ALCANCE</div>
                <p className="text-sm text-brand-text font-medium">Operando desde España para clientes locales, pymes y proyectos en remoto en toda la Unión Europea.</p>
              </div>
              <div className="ml-auto shrink-0 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
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
