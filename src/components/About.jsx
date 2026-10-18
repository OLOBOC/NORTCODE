'use client';

import { Terminal, GraduationCap, Cpu, ShieldCheck, HeartHandshake, Code, Sparkles, Check } from 'lucide-react';

export default function About() {
  const credentials = [
    {
      title: 'Desarrollo de Aplicaciones Web (DAW)',
      type: 'Titulación Oficial Superior',
      desc: 'Dominio de arquitecturas cliente/servidor, diseño de bases de datos, seguridad web y frameworks modernos.',
    },
    {
      title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
      type: 'Titulación Oficial Superior',
      desc: 'Programación orientada a objetos, integración de sistemas, gestión de procesos y desarrollo móvil.',
    },
    {
      title: 'Sistemas de Telecomunicaciones e Informáticos (STI)',
      type: 'Especialización Continua',
      desc: 'Infraestructura de redes, protocolos de comunicación, servidores, telecomunicaciones y despliegue seguro.',
    },
  ];

  return (
    <section id="sobre-nortcode" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>EL PERFIL DETRÁS DE NORTCODE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Criterio técnico real y trato directo de desarrollador a cliente
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Nortcode nació con un principio claro: erradicar las promesas vacías y la complejidad innecesaria en el desarrollo digital. Detrás de cada proyecto hay dedicación técnica, ingeniería y rigor.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-brand-cyan" />
                <span>¿Por qué trabajar con un estudio independiente especializado?</span>
              </h3>

              <p className="text-sm text-brand-muted leading-relaxed">
                En las agencias tradicionales, tu interlocutor suele ser un comercial o gestor de cuentas que rara vez comprende el código o la infraestructura. En Nortcode hablas directamente con quien diseña la arquitectura, escribe cada línea de código y despliega tu sistema.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                Esto se traduce en respuestas inmediatas, estimaciones honestas de tiempo y costes, y la certeza de que tu web o sistema no se quedará obsoleto a los pocos meses por haber sido construido sobre plantillas frágiles.
              </p>

              {/* Guiding Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-brand-border/60 text-xs text-brand-text">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Sin intermediarios comerciales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Código limpio y documentado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Máxima privacidad y seguridad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Soporte directo y continuo</span>
                </div>
              </div>
            </div>

            {/* Philosophy Banner */}
            <div className="p-5 rounded-xl bg-brand-surface/50 border border-brand-border/80 flex items-start gap-3.5">
              <HeartHandshake className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="text-xs text-brand-muted leading-relaxed">
                <strong className="text-white">Filosofía de trabajo:</strong> Entender el problema → Diseñar la solución técnica óptima → Hacer que la tecnología trabaje incansablemente para el crecimiento del negocio.
              </div>
            </div>
          </div>

          {/* Right Credentials Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-brand-dim uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-cyan" />
              <span>Base Técnica & Formación Reglada</span>
            </div>

            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-cyan uppercase px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                    {cred.type}
                  </span>
                  <span className="text-[10px] font-mono text-brand-dim">ESPECIALIDAD #{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-white pt-1">{cred.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{cred.desc}</p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-brand-card/70 border border-brand-border text-center space-y-2">
              <span className="text-[11px] font-mono text-brand-dim">UBICACIÓN & ALCANCE</span>
              <p className="text-xs text-brand-text">
                Operando desde España para clientes locales, pymes y proyectos en remoto en toda la Unión Europea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
