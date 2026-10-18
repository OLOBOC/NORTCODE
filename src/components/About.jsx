'use client';

import { Terminal, GraduationCap, Cpu, ShieldCheck, HeartHandshake, Code, Sparkles, Check, ArrowRight, UserCheck } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

export default function About() {
  const credentials = [
    {
      title: 'Desarrollo de Aplicaciones Web (DAW)',
      type: 'Titulación Oficial Superior',
      desc: 'Arquitectura cliente/servidor, optimización de velocidad de carga, diseño de bases de datos seguras y Next.js.',
    },
    {
      title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
      type: 'Titulación Oficial Superior',
      desc: 'Lógica orientada a objetos, integración de APIs complejas, automatizaciones en backend y escalabilidad de sistemas.',
    },
    {
      title: 'Sistemas de Telecomunicaciones e Informáticos (STI)',
      type: 'Especialización Continua',
      desc: 'Protocolos de red, seguridad informática, despliegue en servidores en la nube y protección de datos conforme a la normativa europea.',
    },
  ];

  return (
    <section id="sobre-nortcode" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>TRANSPARENCIA & CRITERIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Quién está detrás de Nortcode y por qué puedes confiar
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Nortcode nació con un principio claro: erradicar el humo y las falsas promesas en el desarrollo digital. Detrás de cada proyecto hay dedicación técnica, ingeniería y rigor para que tu inversión genere beneficios reales.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-surface border border-brand-border space-y-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-brand-card border border-brand-border text-brand-cyan">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text">
                    Trato directo de desarrollador a cliente
                  </h3>
                  <span className="text-xs font-mono text-brand-dim">Sin comerciales intermediarios</span>
                </div>
              </div>

              <p className="text-sm text-brand-muted leading-relaxed">
                En las agencias tradicionales, tu interlocutor suele ser un comercial o gestor de cuentas que rara vez comprende el código o los servidores. En Nortcode hablas directamente con quien diseña la arquitectura, escribe cada línea de código y despliega tu sistema.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                Esto se traduce en respuestas inmediatas, estimaciones honestas de tiempo y costes, y la certeza de que tu web o sistema no se romperá a los pocos meses por haber sido construido sobre plantillas frágiles o constructores lentos.
              </p>

              {/* Guiding Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-brand-border/60 text-xs text-brand-text">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sin intermediarios comerciales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Código limpio y documentado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Máxima privacidad y seguridad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Soporte directo y continuo</span>
                </div>
              </div>
            </div>

            {/* Philosophy Banner */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3.5 shadow-md">
              <HeartHandshake className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="text-xs text-brand-muted leading-relaxed">
                <strong className="text-brand-text">Filosofía de trabajo:</strong> Entender a fondo tu modelo de negocio → Diseñar la solución técnica óptima → Hacer que la tecnología trabaje incansablemente para multiplicar tus ventas.
              </div>
            </div>
          </div>

          {/* Right Credentials Cards: Official Regulated Training */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-brand-dim uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-cyan" />
              <span>Base Técnica & Formación Oficial Reglada</span>
            </div>

            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-colors space-y-1.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-cyan uppercase px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 font-semibold">
                    {cred.type}
                  </span>
                  <span className="text-[10px] font-mono text-brand-dim">ESPECIALIDAD #{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-brand-text pt-1">{cred.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{cred.desc}</p>
              </div>
            ))}

            <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <NortcodeLogo size="sm" showText={false} />
                <div className="text-left">
                  <div className="text-xs font-mono font-bold text-brand-text">NORTCODE STUDIO</div>
                  <div className="text-[10px] font-mono text-brand-dim">Ingeniería Web & Soluciones Digitales</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-semibold">
                VERIFICADO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
