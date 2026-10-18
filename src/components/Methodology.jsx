'use client';

import { Search, Compass, Terminal, Rocket, Check, ArrowRight, ShieldCheck, Key } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico & Análisis Real',
      icon: Search,
      tag: 'Cero Humo',
      desc: 'Analizamos a fondo tu negocio, tus procesos actuales y tus cuellos de botella reales. Si una solución no te ahorra tiempo ni te genera clientes, no la recomendamos.',
      points: [
        'Auditoría del estado actual y herramientas en uso.',
        'Definición clara de objetivos y requisitos indispensables.',
        'Propuesta técnica honesta con plazos y presupuesto cerrado.',
      ],
    },
    {
      num: '02',
      title: 'Arquitectura & UI/UX Funcional',
      icon: Compass,
      tag: 'Diseño Sobrio',
      desc: 'Diseñamos la interfaz y la estructura de navegación pensando en la claridad, la legibilidad y la conversión. Sin elementos decorativos innecesarios.',
      points: [
        'Estructura de páginas y flujos de usuario intuitivos.',
        'Diseño visual limpio, tipografía legible y paleta sobria.',
        'Validación del enfoque antes de escribir una sola línea de código.',
      ],
    },
    {
      num: '03',
      title: 'Desarrollo, Seguridad & Pruebas',
      icon: Terminal,
      tag: 'Ingeniería Limpia',
      desc: 'Programamos con Next.js, React y Tailwind CSS aplicando los más altos estándares de rendimiento, accesibilidad WCAG y blindaje de seguridad.',
      points: [
        'Código modular, semántico y optimizado para Google.',
        'Sanitización estricta de formularios y protección antispam.',
        'Pruebas exhaustivas en móviles, tabletas y ordenadores.',
      ],
    },
    {
      num: '04',
      title: 'Despliegue & Propiedad Total',
      icon: Rocket,
      tag: 'Autonomía 100%',
      desc: 'Publicamos tu proyecto en infraestructura en la nube de alta disponibilidad y te entregamos la propiedad absoluta de todo el código fuente.',
      points: [
        'Despliegue en Vercel o Cloudflare con CDN global.',
        'Certificado SSL, DNS y correo transaccional configurados.',
        'Entrega del repositorio GitHub y tutorial de gestión básica.',
      ],
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-brand-surface/30 relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>METODOLOGÍA TRANSPARENTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cómo trabajo: de la necesidad a la solución en producción
          </h2>
          <p className="text-sm sm:text-base text-brand-muted">
            Un proceso directo de cuatro fases sin reuniones interminables ni tecnicismos vacíos para ocultar la falta de trabajo real.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="rounded-2xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between hover:border-brand-border-light transition-all duration-300 relative group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-brand-cyan">
                      {st.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-dim">
                      {st.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-brand-card border border-brand-border text-white group-hover:text-brand-cyan group-hover:border-brand-cyan/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {st.title}
                    </h3>
                  </div>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {st.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-brand-border/60">
                    {st.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-brand-dim">
                        <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-brand-border/40 text-[10px] font-mono text-brand-dim flex items-center justify-between">
                  <span>ENTREGA VERIFICABLE</span>
                  <span className="text-emerald-400">FASE {st.num}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="rounded-2xl bg-brand-card border border-brand-border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-brand-bg border border-brand-cyan/30 text-brand-cyan shrink-0">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Garantía de Propiedad y Soberanía Tecnológica
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                Al concluir el proyecto recibes el repositorio completo con tu código y las claves maestras. Tú eres el único dueño de tu producto.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shrink-0"
          >
            <span>Iniciar una conversación técnica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
