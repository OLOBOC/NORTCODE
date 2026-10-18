'use client';

import { useState } from 'react';
import { Terminal, ShieldCheck, Zap, Cpu, Play, CheckCircle2, Server, Globe, ArrowRight, RefreshCw, Copy, Check } from 'lucide-react';

export default function StackInspector() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'frontend', label: '01. Capa Web & Edge', icon: Globe },
    { id: 'backend', label: '02. Servidor & Seguridad', icon: Server },
    { id: 'automation', label: '03. Automatización & IA', icon: Zap },
  ];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => setSimulationStep(2), 600);
    setTimeout(() => setSimulationStep(3), 1300);
    setTimeout(() => {
      setSimulationStep(4);
      setIsSimulating(false);
    }, 2000);
  };

  const copyTelemetry = () => {
    const text = JSON.stringify(
      {
        studio: 'Nortcode',
        stack: ['Next.js', 'React', 'Tailwind', 'Node.js', 'n8n', 'Resend'],
        metrics: { lighthouse: 100, latency_avg_ms: 18, security_grade: 'A+' },
        status: 'OPERATIONAL'
      },
      null,
      2
    );
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-brand-surface/90 border border-brand-border shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-brand-border-light">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-brand-card border-b border-brand-border text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-brand-dim text-[11px] hidden sm:inline">
            nortcode-core-telemetry // v2.4.0
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SISTEMA 100% ONLINE
          </span>

          <button
            onClick={copyTelemetry}
            className="p-1.5 text-brand-dim hover:text-brand-cyan transition-colors"
            title="Copiar telemetría JSON"
            aria-label="Copiar datos técnicos"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Layer Selector Tabs */}
      <div className="grid grid-cols-3 border-b border-brand-border bg-brand-bg/50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium transition-all ${
                isActive
                  ? 'bg-brand-card text-brand-cyan border-b-2 border-brand-cyan'
                  : 'text-brand-muted hover:text-brand-text hover:bg-brand-surface/40'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-cyan' : 'text-brand-dim'}`} />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Content Area */}
      <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Architecture Specs */}
        <div className="lg:col-span-7 space-y-4">
          {activeTab === 'frontend' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                <Globe className="w-4 h-4" />
                <span>DESARROLLO WEB & RENDIMIENTO EXTREMO</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Arquitectura de Carga Instantánea sin Dependencias Inútiles
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Renderizado híbrido (SSR / Edge), estructura semántica limpia para rastreadores de Google y código optimizado para superar el 95+ en Core Web Vitals en dispositivos reales.
              </p>

              {/* Technical Metrics Badges */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">LCP (Carga)</div>
                  <div className="text-sm font-mono font-bold text-emerald-400">&lt; 0.7s</div>
                  <div className="text-[9px] text-brand-dim">Óptimo Google</div>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">CLS (Estabilidad)</div>
                  <div className="text-sm font-mono font-bold text-emerald-400">0.00</div>
                  <div className="text-[9px] text-brand-dim">Cero salto visual</div>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">SEO Técnico</div>
                  <div className="text-sm font-mono font-bold text-brand-cyan">100 / 100</div>
                  <div className="text-[9px] text-brand-dim">Indexación lista</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backend' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                <ShieldCheck className="w-4 h-4" />
                <span>SERVIDORES, APIS & PROTECCIÓN DE DATOS</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Endpoints Blindados con Respeto Normativo RGPD
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Endpoints en Serverless Edge protegidos contra inyecciones XSS, sanitización de entradas, honeypots contra bots y cumplimiento estricto con las leyes de privacidad europeas.
              </p>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">XSS & Bot Defense</div>
                  <div className="text-sm font-mono font-bold text-emerald-400">Activo</div>
                  <div className="text-[9px] text-brand-dim">Sanitización estricta</div>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">Transaccional</div>
                  <div className="text-sm font-mono font-bold text-brand-cyan">Resend API</div>
                  <div className="text-[9px] text-brand-dim">Entrega fiable</div>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">Privacidad UE</div>
                  <div className="text-sm font-mono font-bold text-blue-400">RGPD / LOPD</div>
                  <div className="text-[9px] text-brand-dim">Sin rastreadores opacos</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                <Cpu className="w-4 h-4" />
                <span>PIPELINES n8n & INTELIGENCIA ARTIFICIAL</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Conexión Automática: Menos Tareas Manuales Repetitivas
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Orquestación de webhooks, sincronización con bases de datos y procesado inteligente con modelos de IA para clasificar leads, emitir notificaciones y ahorrar horas semanales.
              </p>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">Automatizador</div>
                  <div className="text-sm font-mono font-bold text-brand-cyan">n8n / APIs</div>
                  <div className="text-[9px] text-brand-dim">Sin intermediarios</div>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">Tiempo Ahorrado</div>
                  <div className="text-sm font-mono font-bold text-emerald-400">80%</div>
                  <div className="text-[9px] text-brand-dim">En gestión rutinaria</div>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border">
                  <div className="text-[10px] font-mono text-brand-dim uppercase">Disparadores</div>
                  <div className="text-sm font-mono font-bold text-blue-400">Webhooks</div>
                  <div className="text-[9px] text-brand-dim">Tiempo real</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Interactive Terminal & Live Simulator */}
        <div className="lg:col-span-5 bg-brand-bg rounded-xl border border-brand-border p-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-border/60 text-brand-dim text-[11px]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              SIMULADOR DE FLUJO
            </span>
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 text-[10px] transition-colors disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>Test Payload</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-2 text-[11px] leading-relaxed">
            <div className="flex items-center justify-between text-brand-dim">
              <span>ENDPOINT:</span>
              <span className="text-brand-text">POST /api/pipeline</span>
            </div>

            {/* Trace Steps */}
            <div className="p-2.5 rounded bg-brand-card/80 border border-brand-border/50 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${simulationStep >= 1 ? 'bg-emerald-400' : 'bg-brand-dim'}`} />
                <span className={simulationStep >= 1 ? 'text-emerald-300' : 'text-brand-dim'}>
                  1. Solicitud entrante recibida
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${simulationStep >= 2 ? 'bg-emerald-400' : 'bg-brand-dim'}`} />
                <span className={simulationStep >= 2 ? 'text-emerald-300' : 'text-brand-dim'}>
                  2. Filtro XSS & Sanitización OK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${simulationStep >= 3 ? 'bg-emerald-400' : 'bg-brand-dim'}`} />
                <span className={simulationStep >= 3 ? 'text-emerald-300' : 'text-brand-dim'}>
                  3. Disparo n8n & Notificación Resend
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${simulationStep >= 4 ? 'bg-brand-cyan' : 'bg-brand-dim'}`} />
                <span className={simulationStep >= 4 ? 'text-brand-cyan font-bold' : 'text-brand-dim'}>
                  4. Status 200 OK (Latencia: 21ms)
                </span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-brand-dim flex items-center justify-between">
              <span>ESTADO DE PROCESO:</span>
              <span className="text-emerald-400 font-bold">
                {simulationStep === 4 ? 'EJECUTADO CON ÉXITO' : isSimulating ? 'TRANSMITIENDO...' : 'EN ESPERA'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
