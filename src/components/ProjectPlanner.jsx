'use client';

import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Zap, 
  Globe, 
  Server, 
  Bot, 
  Clock, 
  CreditCard, 
  Check, 
  RefreshCw, 
  Wand2, 
  Code2, 
  Lock 
} from 'lucide-react';

export default function ProjectPlanner({ onTransferToContact }) {
  const [plannerMode, setPlannerMode] = useState('guided'); // 'guided' | 'ai'
  const [projectType, setProjectType] = useState('corporativa');
  const [priority, setPriority] = useState('leads');
  const [selectedAddons, setSelectedAddons] = useState(['whatsapp']);
  
  // AI Scope Assistant States
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState(null);

  const options = {
    economica: {
      id: 'economica',
      title: 'Web para Negocio Local / Autónomo',
      category: 'Web Comercial',
      tag: 'ACCESIBLE & RÁPIDA',
      description: 'Presencia seria, optimizada para smartphones con llamada directa y Google Maps para comercios, talleres y profesionales locales.',
      timeframe: '4 - 7 días laborables',
      keyBenefit: 'Sin cuotas mensuales obligatorias ni costes ocultos de permanencia.',
      recommendedStack: ['Next.js 15', 'Tailwind CSS', 'Vercel Edge', 'Google Maps API'],
    },
    corporativa: {
      id: 'corporativa',
      title: 'Web Corporativa de Empresa & Catálogo',
      category: 'Alta Gama',
      tag: 'ALTO IMPACTO VISUAL',
      description: 'El estándar de proyectos como Audax Motors o DFR Xtra Detail: estética sobria, catálogo filtrable dinámico y máxima solvencia comercial.',
      timeframe: '6 - 10 días laborables',
      keyBenefit: 'Diseñada para proyectar liderazgo de marca y captar clientes de alto valor.',
      recommendedStack: ['Next.js 15', 'Framer Motion', 'Tailwind', 'Edge Cache CDN'],
    },
    saas_custom: {
      id: 'saas_custom',
      title: 'Software a Medida & Panel de Control SaaS',
      category: 'Ingeniería Cloud',
      tag: 'APLICACIÓN COMPLETA',
      description: 'Aplicación web completa con autenticación de usuarios, panel de administración privado, base de datos en la nube y roles de acceso.',
      timeframe: '8 - 14 días laborables',
      keyBenefit: 'Digitalización integral de tus operaciones internas sin depender de hojas de cálculo.',
      recommendedStack: ['Next.js 15', 'Node / Python', 'PostgreSQL / Supabase', 'Auth JWT'],
    },
    ia_automation: {
      id: 'ia_automation',
      title: 'Automatización 24/7 & Agentes de IA',
      category: 'Inteligencia Artificial',
      tag: 'AUTOMATIZACIÓN PURA',
      description: 'Agentes inteligentes que cualifican clientes por WhatsApp, responden presupuestos por correo y sincronizan tus datos con n8n.',
      timeframe: '6 - 12 días laborables',
      keyBenefit: 'Ahorro de más de 15 horas semanales en gestiones repetitivas de oficina.',
      recommendedStack: ['n8n Workflows', 'OpenAI / Gemini API', 'Webhooks HTTP', 'Resend'],
    },
    modernizacion: {
      id: 'modernizacion',
      title: 'Modernización & Rescate de Web Lenta',
      category: 'Rendimiento',
      tag: 'PAGE SPEED 100',
      description: 'Reingeniería completa sobre código limpio para webs antiguas o lentas, alcanzando 95–100 en Google PageSpeed y rescatando visitas.',
      timeframe: '5 - 8 días laborables',
      keyBenefit: 'Mantenemos tu dominio y contenidos eliminando el 100% del código pesado.',
      recommendedStack: ['Next.js 15', 'React 19', 'Core Web Vitals Opt', 'Cloudflare'],
    },
  };

  const priorities = [
    { id: 'leads', label: 'Captar clientes y llamadas en móvil' },
    { id: 'speed', label: 'Carga instantánea (< 0.5s en 4G)' },
    { id: 'prestige', label: 'Prestigio de marca e imagen sólida' },
    { id: 'automation', label: 'Ahorrar tiempo y automatizar tareas' },
  ];

  const addonsList = [
    { id: 'whatsapp', label: 'Botón y flujo directo a WhatsApp', category: 'Conversión' },
    { id: 'payments', label: 'Pasarela de Cobro (Stripe / Bizum / Redsys)', category: 'Finanzas' },
    { id: 'ia_bot', label: 'Agente IA para atención de clientes 24/7', category: 'IA' },
    { id: 'admin_panel', label: 'Panel Administrativo privado para datos', category: 'Backend' },
    { id: 'seo_geo', label: 'Optimización SEO Local & Google My Business', category: 'Marketing' },
    { id: 'cloudflare', label: 'Protección Cloudflare & SSL Alta Velocidad', category: 'Cloud' },
  ];

  const current = options[projectType];

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleTransfer = () => {
    const priorityLabel = priorities.find((p) => p.id === priority)?.label || 'General';
    const activeAddonsNames = addonsList
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.label)
      .join(', ');

    const msg = `[PLANIFICADOR DE PROYECTO]:
- Solución Seleccionada: ${current.title} (${current.category})
- Objetivo Prioritario: ${priorityLabel}
- Plazo Estimado: ${current.timeframe}
- Módulos / Add-ons Técnicos: ${activeAddonsNames || 'Configuración estándar'}
- Stack Recomendado: ${current.recommendedStack.join(' + ')}

Hola Omar, he configurado este proyecto en el configurador técnico de Nortcode y me gustaría recibir una propuesta económica personalizada por correo adaptada a mi negocio.`;

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

  // AI Scope Assistant Analysis
  const handleAnalyzeWithAI = (e) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    setIsAnalyzing(true);
    setAiAnalysisResult(null);

    const promptLower = aiPrompt.toLowerCase();

    setTimeout(() => {
      let detectedType = 'corporativa';
      let suggestedAddons = ['whatsapp'];
      let diagnosis = '';
      let estimatedDays = '6 - 9 días laborables';

      if (promptLower.includes('taller') || promptLower.includes('clinica') || promptLower.includes('restaurante') || promptLower.includes('local') || promptLower.includes('bar') || promptLower.includes('econom')) {
        detectedType = 'economica';
        suggestedAddons = ['whatsapp', 'seo_geo'];
        diagnosis = 'Tu negocio necesita captación móvil inmediata, ficha en Google Maps y llamada directa en 1 toque.';
        estimatedDays = '4 - 7 días laborables';
      } else if (promptLower.includes('saas') || promptLower.includes('panel') || promptLower.includes('usuarios') || promptLower.includes('gestion') || promptLower.includes('datos') || promptLower.includes('app')) {
        detectedType = 'saas_custom';
        suggestedAddons = ['admin_panel', 'payments', 'cloudflare'];
        diagnosis = 'Proyecto de ingeniería de software con arquitectura cloud, autenticación y base de datos relacional.';
        estimatedDays = '9 - 14 días laborables';
      } else if (promptLower.includes('ia') || promptLower.includes('bot') || promptLower.includes('automatiz') || promptLower.includes('n8n') || promptLower.includes('whatsapp') || promptLower.includes('lead')) {
        detectedType = 'ia_automation';
        suggestedAddons = ['ia_bot', 'whatsapp', 'cloudflare'];
        diagnosis = 'Flujo de automatización autónomo con agentes de inteligencia artificial y webhooks para atender leads 24/7.';
        estimatedDays = '6 - 11 días laborables';
      } else if (promptLower.includes('lenta') || promptLower.includes('optimizar') || promptLower.includes('wordpress') || promptLower.includes('wix') || promptLower.includes('remodelar')) {
        detectedType = 'modernizacion';
        suggestedAddons = ['cloudflare', 'seo_geo'];
        diagnosis = 'Rescate de rendimiento: reconstrucción sobre Next.js para eliminar dependencias y subir a 100/100 en PageSpeed.';
        estimatedDays = '5 - 8 días laborables';
      } else {
        detectedType = 'corporativa';
        suggestedAddons = ['whatsapp', 'seo_geo', 'cloudflare'];
        diagnosis = 'Web corporativa de alto nivel visual y catálogo para generar máxima autoridad y confianza comercial.';
        estimatedDays = '6 - 10 días laborables';
      }

      setProjectType(detectedType);
      setSelectedAddons(suggestedAddons);

      setAiAnalysisResult({
        detectedType,
        diagnosis,
        timeframe: estimatedDays,
        suggestedAddons,
        stack: options[detectedType].recommendedStack,
      });

      setIsAnalyzing(false);
    }, 1200);
  };

  const handleApplyAiProposal = () => {
    if (!aiAnalysisResult) return;
    const msg = `[PROPUESTA ASISTENTE IA NORTCODE]:
- Requisito del Cliente: "${aiPrompt}"
- Diagnóstico IA: ${aiAnalysisResult.diagnosis}
- Arquitectura Sugerida: ${options[aiAnalysisResult.detectedType].title}
- Plazo Estimado: ${aiAnalysisResult.timeframe}
- Stack Tecnológico Recomendado: ${aiAnalysisResult.stack.join(' + ')}

Hola Omar, he utilizado el Asistente IA para detallar mi proyecto y me gustaría que me envíes una cotización adaptada a estas especificaciones.`;

    if (onTransferToContact) {
      onTransferToContact({
        projectType: options[aiAnalysisResult.detectedType].title,
        message: msg,
      });
    }

    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="configurador" className="py-24 sm:py-28 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIGURADOR TÉCNICO & ESTIMADOR CON IA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-text tracking-tight leading-tight">
            Planifica el alcance de tu proyecto
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Personaliza los módulos técnicos de tu web o utiliza nuestro asistente inteligente para definir el alcance exacto. Recibirás una propuesta honesta y transparente por correo.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-brand-surface border border-brand-border text-xs font-semibold">
            <button
              onClick={() => setPlannerMode('guided')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                plannerMode === 'guided'
                  ? 'bg-brand-cyan text-brand-bg font-bold shadow-md'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Configurador Guiado</span>
            </button>
            <button
              onClick={() => setPlannerMode('ai')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                plannerMode === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <Wand2 className="w-4 h-4 text-purple-400" />
              <span>Asistente IA de Requisitos</span>
            </button>
          </div>
        </div>

        {/* ── MODE 1: GUIDED PLANNER ── */}
        {plannerMode === 'guided' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto animate-in fade-in duration-300">
            {/* Left Column: Solution Types & Add-ons */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Solution Type */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                  Paso 1 · Selecciona el tipo de solución:
                </div>
                <div className="space-y-2.5">
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
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                            projectType === opt.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-card text-brand-dim'
                          }`}>
                            {opt.tag}
                          </span>
                          <span className="text-[10px] font-mono text-brand-dim">{opt.category}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-brand-text">{opt.title}</h3>
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
              </div>

              {/* Step 2: Technical Add-ons */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                  Paso 2 · Módulos técnicos & integraciones (opcional):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-3 ${
                          isChecked
                            ? 'bg-brand-surface border-brand-cyan/70 text-brand-text shadow-sm'
                            : 'bg-brand-card/40 border-brand-border text-brand-muted hover:text-brand-text'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                            isChecked ? 'bg-brand-cyan border-brand-cyan text-brand-bg' : 'border-brand-border'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="truncate font-medium">{addon.label}</span>
                        </div>
                        <span className="text-[9px] font-mono text-brand-dim shrink-0">{addon.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Priorities & Live Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-brand-surface border border-brand-border shadow-2xl space-y-5">
                <div>
                  <div className="text-xs font-mono text-brand-dim uppercase tracking-wider mb-3">
                    Paso 3 · ¿Cuál es tu prioridad?
                  </div>
                  <div className="grid grid-cols-1 gap-2">
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

                {/* Live Architecture Summary */}
                <div className="pt-4 border-t border-brand-border/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                      Resumen del proyecto:
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">PRESUPUESTO A MEDIDA</span>
                  </div>

                  <h4 className="text-base font-bold text-brand-text leading-snug">{current.title}</h4>

                  <div className="p-3.5 rounded-xl bg-brand-card border border-brand-border text-xs text-brand-muted space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-brand-dim">Plazo estimado:</span>
                      <strong className="text-brand-text font-mono">{current.timeframe}</strong>
                    </div>
                    <div>
                      <span className="text-brand-dim block mb-1">Stack tecnológico base:</span>
                      <div className="flex flex-wrap gap-1">
                        {current.recommendedStack.map((st, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-brand-text">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedAddons.length > 0 && (
                      <div className="pt-1 border-t border-brand-border/40">
                        <span className="text-brand-dim block mb-1">Módulos añadidos: {selectedAddons.length}</span>
                        <p className="text-[11px] text-brand-text leading-snug">
                          {addonsList.filter(a => selectedAddons.includes(a.id)).map(a => a.label.split('(')[0].trim()).join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Transfer CTA */}
                <div>
                  <button
                    onClick={handleTransfer}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 group cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Solicitar Presupuesto con esta Configuración</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[10px] text-center text-brand-dim mt-2 font-mono">
                    Respuesta directa con opciones económicas en menos de 24h
                  </p>
                </div>
              </div>

              {/* Trust Footer */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-brand-dim font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Garantía técnica por escrito
                </span>
                <span>•</span>
                <span>Sin costes cautivos ni ataduras</span>
              </div>
            </div>
          </div>
        )}

        {/* ── MODE 2: AI SCOPE ASSISTANT ── */}
        {plannerMode === 'ai' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-surface border border-purple-500/30 shadow-2xl space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-text">
                    Describe qué necesitas en tus propias palabras
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    Escribe qué tipo de negocio tienes, qué funciones te gustaría tener y el asistente analizará la arquitectura idónea y tiempo de desarrollo.
                  </p>
                </div>
              </div>

              {/* Sample Prompts */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-brand-dim uppercase tracking-wider">
                  Ejemplos rápidos para probar:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Tengo una clínica dental y quiero web con reservas y aviso a WhatsApp',
                    'Necesito un software con panel para gestionar presupuestos y clientes',
                    'Tengo una web en WordPress que tarda 5 segundos y quiero acelerarla',
                    'Quiero un agente de IA que responda dudas y cualifique leads 24/7',
                  ].map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setAiPrompt(sample)}
                      className="text-[11px] text-brand-muted hover:text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border px-3 py-1.5 rounded-lg transition-colors text-left"
                    >
                      "{sample}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Input Form */}
              <form onSubmit={handleAnalyzeWithAI} className="space-y-4">
                <textarea
                  rows="3"
                  required
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ej: Tengo una tienda física de muebles y quiero un catálogo online moderno donde la gente pueda consultar medidas, ver fotos en alta resolución y pedir presupuesto directo por WhatsApp..."
                  className="w-full p-4 rounded-2xl bg-brand-card border border-brand-border text-brand-text placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-y"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-brand-dim font-mono">
                    Análisis heurístico en tiempo real con especificaciones de ingeniería
                  </span>
                  <button
                    type="submit"
                    disabled={isAnalyzing || !aiPrompt.trim()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-95 rounded-xl transition-all shadow-lg shadow-purple-600/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Analizando requisitos técnicos...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4" />
                        <span>Analizar Requisitos con IA</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* AI Analysis Result Card */}
              {aiAnalysisResult && (
                <div className="mt-6 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/30 space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                        Diagnóstico de Alcance Inteligente
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">
                      Plazo estimado: {aiAnalysisResult.timeframe}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-brand-text">
                      Solución recomendada: {options[aiAnalysisResult.detectedType].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {aiAnalysisResult.diagnosis}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-border space-y-1">
                      <span className="text-[10px] font-mono text-brand-dim uppercase">Stack de Ingeniería Sugerido</span>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {aiAnalysisResult.stack.map((st, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-text">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-border space-y-1">
                      <span className="text-[10px] font-mono text-brand-dim uppercase">Módulos Clave Recomendados</span>
                      <p className="text-xs text-brand-text pt-1 font-mono">
                        {addonsList.filter(a => aiAnalysisResult.suggestedAddons.includes(a.id)).map(a => a.label.split('(')[0].trim()).join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleApplyAiProposal}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Pedir Presupuesto Oficial para este Alcance</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
