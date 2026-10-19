'use client';

import Image from 'next/image';
import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Sparkles, MessageCircle, HeartHandshake, UserCheck } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

export default function About() {
  const qualifications = [
    {
      title: 'Desarrollo de Aplicaciones Web (DAW)',
      tag: 'Titulación Oficial Superior',
      desc: 'Especialista en arquitectura moderna, velocidad de carga instantánea, posicionamiento SEO y diseño responsivo.',
    },
    {
      title: 'Desarrollo Multiplataforma (DAM)',
      tag: 'Titulación Oficial Superior',
      desc: 'Integración de sistemas, bases de datos seguras, automatizaciones y lógica de negocio para optimizar tareas.',
    },
    {
      title: 'Sistemas de Telecomunicaciones e Informáticos (STI)',
      tag: 'Especialización Continua',
      desc: 'Seguridad en servidores, protección de datos conforme a la normativa europea (RGPD) y fiabilidad técnica.',
    },
  ];

  return (
    <section id="sobre-nortcode" className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>CONFIANZA & CERCANÍA REAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            Quién está detrás de Nortcode
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Sin comerciales intermediarios, sin costes inflados de grandes agencias. Un profesional cualificado dedicado a resolver los problemas de tu negocio con tecnología que funciona.
          </p>
        </div>

        {/* Main Grid: Founder Portrait + Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-brand-border via-brand-surface to-brand-border shadow-2xl group">
              <div className="relative rounded-2xl overflow-hidden bg-brand-card aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center">
                <img
                  src="/founder.jpg"
                  alt="Omar Loboc - Fundador de Nortcode"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">Omar Loboc</h3>
                      <p className="text-xs text-brand-cyan font-mono">Fundador & Desarrollador Principal</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      DISPONIBLE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 pt-1 leading-snug">
                    Trato directo de desarrollador a cliente en cada fase del proyecto.
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -top-3 -right-3 p-2.5 rounded-2xl bg-brand-surface border border-brand-border shadow-xl flex items-center gap-2 text-xs font-mono text-brand-text">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">Desarrollador Certificado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Proposition & Official Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
                "Mi objetivo es que recuperes tu inversión con creces y tengas una web de la que sentirte orgulloso."
              </h3>
              
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                En las agencias convencionales, el 70% de lo que pagas se va en pagar sueldos de comerciales, recepcionistas y costes de oficina. Tu proyecto acaba en manos de becarios o construido sobre plantillas lentas de WordPress que fallan a los pocos meses.
              </p>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                En <strong className="text-brand-text">Nortcode</strong> trabajas directamente conmigo. Analizo tu negocio, te aconsejo con honestidad sobre lo que de verdad necesitas (y lo que no) y programo una solución sólida, rápida y económica que convierte visitantes en llamadas y clientes.
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Presupuestos a Medida</h4>
                  <p className="text-[11px] text-brand-muted">Precios accesibles y cerrados desde el día 1, sin sorpresas ni cuotas ocultas.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Propiedad 100% Tuya</h4>
                  <p className="text-[11px] text-brand-muted">El código y el dominio te pertenecen por completo, sin contratos de permanencia.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Comunicación Fluida</h4>
                  <p className="text-[11px] text-brand-muted">Respuestas en menos de 24 horas y contacto directo por WhatsApp o llamada.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Garantía Técnica</h4>
                  <p className="text-[11px] text-brand-muted">Soporte post-lanzamiento para que tu web funcione siempre como un reloj.</p>
                </div>
              </div>
            </div>

            {/* Official Academic Qualifications */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono text-brand-dim uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-cyan" />
                <span>Formación Oficial Superior Homologada</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-brand-surface/70 border border-brand-border hover:border-brand-border-light transition-colors space-y-1"
                  >
                    <span className="text-[9px] font-mono text-brand-cyan uppercase font-semibold">
                      {q.tag}
                    </span>
                    <h5 className="text-xs font-bold text-brand-text leading-tight">{q.title}</h5>
                    <p className="text-[10px] text-brand-muted leading-normal">{q.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-md shadow-brand-cyan/20 group"
              >
                <span>Hablar directamente con Omar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/34600000000?text=Hola%20Omar,%20he%20visto%20la%20web%20de%20Nortcode%20y%20me%20gustar%C3%ADa%20pedirte%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
