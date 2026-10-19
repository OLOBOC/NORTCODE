'use client';

import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Mail, UserCheck } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

export default function About() {
  const credentials = [
    {
      title: 'Desarrollo de Aplicaciones Web (DAW)',
      tag: 'Titulación Oficial Superior',
      desc: 'Arquitectura frontend con Next.js, rendimiento de carga extremo, posicionamiento SEO semántico y experiencia de usuario fluida.',
    },
    {
      title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
      tag: 'Titulación Oficial Superior',
      desc: 'Lógica de negocio, integración de APIs y servicios en la nube, bases de datos y desarrollo de paneles a medida.',
    },
    {
      title: 'Sistemas de Telecomunicaciones e Informáticos (STI)',
      tag: 'Especialización Continua',
      desc: 'Seguridad en servidores, redes, protección de datos conforme al RGPD europeo y despliegues de alta disponibilidad.',
    },
  ];

  return (
    <section id="sobre-nortcode" className="py-28 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>CRITERIO TÉCNICO & CERCANÍA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            Sobre Nortcode
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Un estudio independiente de ingeniería y diseño web creado para ofrecer soluciones digitales de máxima calidad, accesibles y adaptadas a cualquier presupuesto.
          </p>
        </div>

        {/* Editorial Layout: Large Portrait + Studio Philosophy & Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large, Prominent, Elegant Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-brand-border via-brand-surface to-brand-border shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-brand-card aspect-[3/4] flex items-center justify-center">
                <img
                  src="/founder.jpg"
                  alt="Omar Loboc - Fundador de Nortcode"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]"
                />

                {/* Subtle dark gradient overlay at bottom for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Bottom Card Identity Banner */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">Omar Loboc</h3>
                      <p className="text-xs text-brand-cyan font-mono">Fundador & Desarrollador Principal</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      DIRECTO
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 pt-1 leading-snug">
                    Trato directo de profesional a cliente en cada proyecto, sin intermediarios comerciales.
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -top-3 -right-3 p-2.5 rounded-2xl bg-brand-surface border border-brand-border shadow-xl flex items-center gap-2 text-xs font-mono text-brand-text">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">Titulación Homologada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Value, Philosophy and Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight leading-snug">
                "Mi compromiso es que tengas una presencia digital seria, impecable y de la que sentirte orgulloso, sin sobrecostes innecesarios."
              </h3>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                En Nortcode no hay comerciales, recepcionistas ni oficinas vacías que inflen las facturas. Hablas y trabajas directamente con la persona que diseña la interfaz, escribe cada línea de código y optimiza tu web para que cargue en milisegundos y consiga clientes.
              </p>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Ofrecemos <strong className="text-brand-text font-semibold">soluciones económicas para todos los bolsillos</strong>: desde proyectos sencillos para negocios locales y autónomos que quieren empezar con buen pie, hasta plataformas corporativas complejas y rescate de webs lentas.
              </p>
            </div>

            {/* Core Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Soluciones para Cada Bolsillo</h4>
                  <p className="text-[11px] text-brand-muted">Opciones económicas adaptadas a tu realidad, sin cuotas sorpresa.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Propiedad 100% Tuya</h4>
                  <p className="text-[11px] text-brand-muted">El código fuente, el diseño y el dominio te pertenecen por completo.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Contacto por Correo & Formulario</h4>
                  <p className="text-[11px] text-brand-muted">Respuesta garantizada en menos de 24 horas laborables.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-text">Garantía de Rendimiento</h4>
                  <p className="text-[11px] text-brand-muted">Carga en menos de 0.5s y optimización SEO en Google.</p>
                </div>
              </div>
            </div>

            {/* Official Academic Qualifications */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-brand-dim uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-cyan" />
                <span>Base Técnica & Titulaciones Oficiales del Estado</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all space-y-1"
                  >
                    <span className="text-[9px] font-mono text-brand-cyan uppercase font-semibold">
                      {cred.tag}
                    </span>
                    <h5 className="text-xs font-bold text-brand-text leading-tight">{cred.title}</h5>
                    <p className="text-[10px] text-brand-muted leading-normal">{cred.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button to Email Contact */}
            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 group"
              >
                <Mail className="w-4 h-4" />
                <span>Escribir a Omar por Correo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
