'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, Check, CheckCircle2, RotateCcw, Cpu, Layers, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function NeedMatcher({ onTransferToContact }) {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [timeframe, setTimeframe] = useState('');

  const objectives = [
    {
      id: 'web',
      label: 'Nueva Web o Landing de Alta Conversión',
      category: 'Desarrollo Web & Presencia Digital',
      desc: 'Presencia digital rápida, responsive, ultra optimizada para captar clientes y posicionar en Google.',
      icon: Layers,
    },
    {
      id: 'digitalizacion',
      label: 'Digitalizar Procesos & Organizar Datos',
      category: 'Digitalización de Procesos',
      desc: 'Eliminar hojas de cálculo caóticas y centralizar la información de tu negocio en una base de datos segura.',
      icon: Cpu,
    },
    {
      id: 'automatizacion',
      label: 'Automatización de Flujos con IA & n8n',
      category: 'Automatización & IA Aplicada',
      desc: 'Conectar herramientas, eliminar tareas repetitivas y ahorrar entre 10 y 20 horas de trabajo manual al mes.',
      icon: Zap,
    },
    {
      id: 'auditoria',
      label: 'Auditoría Técnica & Optimización de Rendimiento',
      category: 'Consultoría & Auditoría Técnica',
      desc: 'Diagnóstico de seguridad, velocidad y SEO técnico para webs existentes que no rinden como deberían.',
      icon: ShieldCheck,
    },
  ];

  const currentStates = [
    {
      id: 'cero',
      label: 'Idea o proyecto nuevo desde cero',
      desc: 'No dispones de infraestructura previa y quieres empezar con una base técnica sólida y sin deuda técnica.',
    },
    {
      id: 'lenta',
      label: 'Web existente pero lenta, desactualizada o poco eficaz',
      desc: 'Cuentas con presencia online pero la tecnología es antigua, tarda en cargar o no genera consultas comerciales.',
    },
    {
      id: 'manual',
      label: 'Procesos en Excel/papel que consumen demasiado tiempo',
      desc: 'Tu equipo dedica demasiadas horas a copiar información entre aplicaciones y mensajes.',
    },
    {
      id: 'escalar',
      label: 'Negocio en crecimiento que necesita automatizar flujos',
      desc: 'El volumen operativo aumenta y necesitas que la tecnología asuma las tareas mecánicas.',
    },
  ];

  const timeframes = [
    { id: 'urgente', label: 'Lanzamiento prioritario (< 3-4 semanas)' },
    { id: 'estandar', label: 'Desarrollo planificado (1-2 meses)' },
    { id: 'fases', label: 'Implantación progresiva por hitos' },
  ];

  // Helper to get technical recommendations based on selections
  const getRecommendation = () => {
    const objObj = objectives.find((o) => o.id === objective);
    const stateObj = currentStates.find((s) => s.id === currentState);
    const timeObj = timeframes.find((t) => t.id === timeframe);

    let stack = 'Next.js 15 (React 19) + Tailwind CSS + Vercel Edge Runtime';
    let methodology = 'Desarrollo ágil, entrega por fases con feedback continuo';
    let mainBenefit = 'Carga instantánea, código limpio sin dependencias pesadas y SEO 100%';

    if (objective === 'digitalizacion') {
      stack = 'Next.js Fullstack + Base de Datos Relacional (PostgreSQL / Supabase) + Panel Admin';
      mainBenefit = 'Fuente única de verdad, permisos de usuario y respaldo seguro de datos en la nube.';
    } else if (objective === 'automatizacion') {
      stack = 'Motor n8n + Webhooks HTTP + APIs de IA (procesado de datos) + Resend / Telegram';
      mainBenefit = 'Ahorro inmediato de tiempo y eliminación de fallos humanos al traspasar información.';
    } else if (objective === 'auditoria') {
      stack = 'Google PageSpeed DevTools + Análisis de Seguridad OWASP + Refactorización de código';
      mainBenefit = 'Optimización directa de velocidad, reducción del 50-80% de peso de página y blindaje RGPD.';
    }

    return {
      category: objObj ? objObj.category : 'Desarrollo Digital',
      objectiveLabel: objObj ? objObj.label : '',
      stateLabel: stateObj ? stateObj.label : '',
      timeframeLabel: timeObj ? timeObj.label : '',
      stack,
      mainBenefit,
      methodology,
    };
  };

  const recommendation = getRecommendation();

  const handleTransfer = () => {
    const summaryText = `[DIAGNÓSTICO DESDE EL CONFIGURADOR DE NECESIDADES]:
- Objetivo principal: ${recommendation.objectiveLabel}
- Punto de partida: ${recommendation.stateLabel}
- Plazo estimado: ${recommendation.timeframeLabel}
- Arquitectura recomendada sugerida: ${recommendation.stack}

Hola Nortcode, me gustaría recibir una propuesta formal y presupuesto detallado para este proyecto.`;

    if (onTransferToContact) {
      onTransferToContact({
        projectType: recommendation.category,
        message: summaryText,
      });
    }

    // Scroll smoothly to contact form
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setStep(1);
    setObjective('');
    setCurrentState('');
    setTimeframe('');
  };

  return (
    <section id="calculador" className="py-24 bg-brand-surface/40 relative border-t border-brand-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIGURADOR DINÁMICO & NEED MATCHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Descubre la arquitectura técnica ideal para tu proyecto
          </h2>
          <p className="text-sm sm:text-base text-brand-muted">
            Responde 3 preguntas técnicas y obtén una propuesta de solución personalizada sin ningún compromiso.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="rounded-2xl bg-brand-surface border border-brand-border shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-border text-xs font-mono">
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all ${
                      step === s
                        ? 'bg-brand-cyan text-brand-bg ring-4 ring-brand-cyan/20'
                        : step > s
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-brand-bg text-brand-dim border border-brand-border'
                    }`}
                  >
                    {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                  </div>
                  {s < 4 && <div className="hidden sm:block w-8 h-[1px] bg-brand-border" />}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-brand-dim">Paso {step} de 4</span>
              {step > 1 && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[11px] text-brand-dim hover:text-brand-cyan ml-2 transition-colors"
                  title="Reiniciar configurador"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Reiniciar</span>
                </button>
              )}
            </div>
          </div>

          {/* STEP 1: OBJETIVO */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase">Paso 01 / 04</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">¿Cuál es el objetivo principal que deseas resolver?</h3>
                <p className="text-xs sm:text-sm text-brand-muted">Selecciona la necesidad técnica que mejor describe tu situación actual.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {objectives.map((item) => {
                  const Icon = item.icon;
                  const isSelected = objective === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setObjective(item.id);
                        setStep(2);
                      }}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 group relative ${
                        isSelected
                          ? 'bg-brand-card border-brand-cyan shadow-lg shadow-brand-cyan/10 ring-1 ring-brand-cyan/40'
                          : 'bg-brand-bg/70 border-brand-border hover:border-brand-border-light hover:bg-brand-card'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="w-5 h-5 text-brand-cyan" />
                        <span className="text-[10px] font-mono text-brand-dim group-hover:text-brand-cyan">SELECCIONAR &gt;</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: ESTADO ACTUAL */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase">Paso 02 / 04</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">¿En qué situación se encuentra tu proyecto actualmente?</h3>
                <p className="text-xs sm:text-sm text-brand-muted">Nos ayuda a evaluar el punto de partida y la complejidad técnica.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentStates.map((item) => {
                  const isSelected = currentState === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentState(item.id);
                        setStep(3);
                      }}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 group ${
                        isSelected
                          ? 'bg-brand-card border-brand-cyan ring-1 ring-brand-cyan/40'
                          : 'bg-brand-bg/70 border-brand-border hover:border-brand-border-light hover:bg-brand-card'
                      }`}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-brand-dim hover:text-white transition-colors"
                >
                  &larr; Volver al paso anterior
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PLAZO */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase">Paso 03 / 04</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">¿Cuál es tu horizonte temporal deseado?</h3>
                <p className="text-xs sm:text-sm text-brand-muted">Definimos la planificación de recursos para garantizar entregas en fecha.</p>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {timeframes.map((item) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTimeframe(item.id);
                        setStep(4);
                      }}
                      className="text-left p-4 rounded-xl border border-brand-border bg-brand-bg/70 hover:border-brand-cyan/60 hover:bg-brand-card transition-all group flex items-center justify-between"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-mono text-brand-dim hover:text-white transition-colors"
                >
                  &larr; Volver al paso anterior
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: DIAGNÓSTICO RESULTADO */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  DIAGNÓSTICO TÉCNICO GENERADO
                </span>
                <h3 className="text-2xl font-bold text-white">Propuesta de Arquitectura y Enfoque Nortcode</h3>
              </div>

              {/* Recommendation Card */}
              <div className="p-5 sm:p-6 rounded-xl bg-brand-bg border border-brand-border space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-brand-border text-xs font-mono">
                  <div>
                    <span className="text-brand-dim uppercase text-[10px]">Línea de Solución:</span>
                    <div className="text-brand-cyan font-bold mt-0.5">{recommendation.category}</div>
                  </div>
                  <div>
                    <span className="text-brand-dim uppercase text-[10px]">Estado de Partida:</span>
                    <div className="text-white mt-0.5">{recommendation.stateLabel}</div>
                  </div>
                  <div>
                    <span className="text-brand-dim uppercase text-[10px]">Plazo Estimado:</span>
                    <div className="text-white mt-0.5">{recommendation.timeframeLabel}</div>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <h5 className="text-xs font-mono text-brand-dim uppercase">Stack Tecnológico Recomendado:</h5>
                    <p className="text-sm font-mono font-semibold text-white mt-1 bg-brand-card p-2.5 rounded border border-brand-border">
                      {recommendation.stack}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono text-brand-dim uppercase">Beneficio Principal Garantizado:</h5>
                    <p className="text-sm text-brand-text mt-0.5">
                      {recommendation.mainBenefit}
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary Action: Send to Contact Form */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={handleTransfer}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
                >
                  <span>Enviar esta necesidad al formulario de contacto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-brand-dim hover:text-white transition-colors"
                >
                  Configurar otra necesidad
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
