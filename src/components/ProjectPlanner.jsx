'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Mail, ShieldCheck, Layers, Cpu, Zap, Globe } from 'lucide-react';

export default function ProjectPlanner({ onTransferToContact }) {
  const [projectType, setProjectType] = useState('corporativa');
  const [priority, setPriority] = useState('leads');

  const options = {
    economica: {
      id: 'economica',
      title: 'Web Económica para Negocio / Autónomo',
      tag: 'ACCESIBLE & RÁPIDA',
      description: 'Presencia seria, adaptable a smartphones y con contacto directo para talleres, comercios y profesionales locales.',
      timeframe: '4 - 7 días laborables',
      keyBenefit: 'Sin cuotas mensuales abusivas ni costes ocultos de mantenimiento.',
    },
    corporativa: {
      id: 'corporativa',
      title: 'Web Corporativa de Empresa & Catálogo',
      tag: 'ALTA GAMA & PRESTIGIO',
      description: 'El estándar de proyectos como Audax Motors o DFR Xtra Detail: estética sobria, catálogo dinámico y máxima solvencia comercial.',
      timeframe: '6 - 10 días laborables',
      keyBenefit: 'Diseñada para proyectar liderazgo y captar clientes de alto valor.',
    },
    portafolio: {
      id: 'portafolio',
      title: 'Portafolio Personal de Autor',
      tag: 'DISEÑO EDITORIAL',
      description: 'Web exclusiva para abogados, arquitectos, médicos o consultores donde la calidad del trabajo y la trayectoria hablan por sí solos.',
      timeframe: '5 - 8 días laborables',
      keyBenefit: 'Diferenciación total frente a la competencia con tipografía de alta costura.',
    },
    modernizacion: {
      id: 'modernizacion',
      title: 'Modernización de Web Existente Lenta',
      tag: 'RESCATE DE RENDIMIENTO',
      description: 'Reingeniería completa para webs antiguas o hechas en constructores lentos, alcanzando 100/100 en Google PageSpeed.',
      timeframe: '5 - 8 días laborables',
      keyBenefit: 'Mantenemos tu dominio y contenidos eliminando el 100% de la lentitud.',
    },
    digitalizacion: {
      id: 'digitalizacion',
      title: 'Digitalización & Automatización con IA',
      tag: 'SOFTWARE A MEDIDA',
      description: 'Centralización de datos, paneles de control sencillos y flujos automáticos con n8n e IA para eliminar horas de trabajo manual.',
      timeframe: '7 - 14 días laborables',
      keyBenefit: 'Ahorro de más de 12 horas semanales en tareas repetitivas de oficina.',
    },
  };

  const priorities = [
    { id: 'leads', label: 'Captar clientes y llamadas' },
    { id: 'speed', label: 'Velocidad de carga instantánea' },
    { id: 'prestige', label: 'Imagen de empresa sólida y de prestigio' },
    { id: 'save_time', label: 'Ahorrar tiempo y automatizar tareas' },
  ];

  const current = options[projectType];

  const handleTransfer = () => {
    const priorityLabel = priorities.find((p) => p.id === priority)?.label || 'General';
    const msg = `[PLANIFICADOR DE PROYECTO]:
- Tipo de Solución: ${current.title}
- Prioridad Principal: ${priorityLabel}
- Plazo Estimado: ${current.timeframe}

Hola Omar, he configurado este proyecto y me gustaría que me envíes una propuesta por correo con opciones de presupuesto adaptadas a mi caso.`;

    if (onTransferToContact) {
      onTransferToContact({
        projectType: current.title,
        message: msg,
      });
    }

    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="configurador" className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLANIFICADOR DE PROYECTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            Configura el alcance de tu proyecto
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Selecciona qué tipo de plataforma necesitas y tu prioridad comercial. Te enviaremos un presupuesto honesto y adaptado a tus posibilidades directamente por correo.
          </p>
        </div>

        {/* Interactive Scope Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Solution Types */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-brand-dim uppercase tracking-wider mb-2">
              Paso 1 · Selecciona el tipo de solución:
            </div>
            {Object.values(options).map((opt) => (
              <button
                key={opt.id}
                onClick={() => setProjectType(opt.id)}
                className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all border flex items-start justify-between gap-4 shadow-sm ${
                  projectType === opt.id
                    ? 'bg-brand-surface border-brand-cyan text-brand-text ring-1 ring-brand-cyan/40 shadow-brand-cyan/10'
                    : 'bg-brand-surface/60 border-brand-border hover:border-brand-border-light text-brand-muted hover:text-brand-text'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      projectType === opt.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-card text-brand-dim'
                    }`}>
                      {opt.tag}
                    </span>
                    <h3 className="text-sm font-bold text-brand-text">{opt.title}</h3>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">{opt.description}</p>
                </div>
                <div className="shrink-0 mt-1">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    projectType === opt.id ? 'border-brand-cyan bg-brand-cyan' : 'border-brand-border'
                  }`}>
                    {projectType === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-bg" />}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Priorities & Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-surface border border-brand-border shadow-xl space-y-5">
              <div>
                <div className="text-xs font-mono text-brand-dim uppercase tracking-wider mb-3">
                  Paso 2 · ¿Cuál es tu objetivo prioritario?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {priorities.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPriority(p.id)}
                      className={`p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                        priority === p.id
                          ? 'bg-brand-card border-brand-cyan text-brand-text font-bold shadow-xs'
                          : 'bg-brand-card/50 border-brand-border text-brand-muted hover:text-brand-text'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Card */}
              <div className="pt-4 border-t border-brand-border/60 space-y-3">
                <div className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  Resumen de la propuesta:
                </div>
                <h4 className="text-base font-bold text-brand-text">{current.title}</h4>
                <div className="p-3 rounded-xl bg-brand-card border border-brand-border text-xs text-brand-muted space-y-1">
                  <div><strong>Plazo estimado:</strong> {current.timeframe}</div>
                  <div><strong>Ventaja clave:</strong> {current.keyBenefit}</div>
                  <div><strong>Presupuesto:</strong> Solución económica adaptada a tu presupuesto</div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={handleTransfer}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Solicitar Presupuesto por Correo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[10px] text-center text-brand-dim mt-2 font-mono">
                  Envío directo a oloboc.digitalbusiness@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-brand-dim font-mono justify-center">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Garantía técnica por escrito
              </span>
              <span>•</span>
              <span>Código 100% de tu propiedad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
