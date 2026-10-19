'use client';

import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, MessageCircle, HeartHandshake, UserCheck, Award, Terminal } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

export default function About() {
  const credentials = [
    {
      title: 'Desarrollo de Aplicaciones Web (DAW)',
      tag: 'Titulación Oficial Superior',
      desc: 'Arquitectura frontend con Next.js 15, optimización de renderizado, SEO técnico estructurado y diseño responsivo de máxima velocidad.',
    },
    {
      title: 'Desarrollo Multiplataforma (DAM)',
      tag: 'Titulación Oficial Superior',
      desc: 'Integración de APIs complejas, bases de datos relacionales, automatizaciones de backend y lógica empresarial para ahorrar tiempo.',
    },
    {
      title: 'Sistemas de Telecomunicaciones e Informáticos (STI)',
      tag: 'Especialización Continua',
      desc: 'Infraestructura Cloudflare Edge, seguridad en servidores, cumplimiento estricto RGPD y protección contra vulnerabilidades.',
    },
  ];

  return (
    <section id="sobre-nortcode" className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[320px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>CRITERIO TÉCNICO & CERCANÍA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            Sobre Nortcode
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Un estudio de ingeniería web y digitalización creado para erradicar las plantillas genéricas y los costes abusivos de las agencias tradicionales. Soluciones de primer nivel para todos los bolsillos.
          </p>
        </div>

        {/* Content Layout: Balanced Founder Card + Engineering Studio Value */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Subtle, balanced Founder & Studio Profile */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-brand-surface border border-brand-border shadow-xl space-y-5">
              {/* Founder Header Row with Discreet Photo */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-cyan/40 shrink-0 shadow-lg group">
                  <img
                    src="/founder.jpg"
                    alt="Omar - Fundador de Nortcode"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" title="Disponible para nuevos proyectos" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-brand-text">Omar Loboc</h3>
                    <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30">
                      Fundador
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted">Desarrollador & Diseñador Principal</p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Trato directo sin intermediarios</span>
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-brand-muted leading-relaxed space-y-3 pt-2 border-t border-brand-border/60">
                <p>
                  "Fundé <strong className="text-brand-text">Nortcode</strong> porque estaba harto de ver cómo autónomos y pymes pagaban miles de euros a agencias convencionales para recibir a cambio una plantilla lenta de WordPress que fallaba al mes."
                </p>
                <p>
                  "Aquí cada proyecto se programa con código limpio, arquitectura de alto rendimiento y un diseño a medida que enamora a tus clientes. Siempre con opciones económicas adaptadas a tu presupuesto."
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/34600000000?text=Hola%20Omar,%20he%20visto%20la%20web%20de%20Nortcode%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/40 group"
                >
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Hablar con Omar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Studio Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-brand-surface/60 border border-brand-border flex items-center justify-between text-xs font-mono text-brand-dim">
              <span className="flex items-center gap-2 text-brand-text">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Garantía técnica y código 100% tuyo
              </span>
              <span className="text-emerald-400 font-bold">VERIFICADO</span>
            </div>
          </div>

          {/* Right Column: Regulated Official Qualifications & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-brand-dim uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-cyan" />
                <span>Base Técnica & Titulaciones Oficiales del Estado</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
                Ingeniería rigurosa detrás de cada pantalla
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                No somos una agencia improvisada ni utilizamos constructores automáticos. Detrás de Nortcode hay una base académica oficial superior que respalda la estabilidad, seguridad y velocidad de tu plataforma.
              </p>
            </div>

            {/* Qualifications Cards */}
            <div className="space-y-3 pt-1">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-brand-cyan uppercase px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 font-semibold">
                      {cred.tag}
                    </span>
                    <span className="text-[10px] font-mono text-brand-dim">HOMOLOGACIÓN OFICIAL</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-brand-text pt-1">{cred.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{cred.desc}</p>
                </div>
              ))}
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs text-brand-text font-medium">Soluciones para todos los bolsillos</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs text-brand-text font-medium">Sin cuotas mensuales obligatorias</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs text-brand-text font-medium">Respuesta en &lt; 24h por WhatsApp</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs text-brand-text font-medium">Aceleración de webs lentas existentes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
