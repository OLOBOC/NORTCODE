'use client';

import { useState } from 'react';
import { FormInput, ShieldCheck, Cpu, BellRing, ArrowRight, Play, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AutomationFlow() {
  const [selectedNode, setSelectedNode] = useState(2); // Default to n8n / AI node

  const nodes = [
    {
      id: 0,
      step: '01',
      title: 'Entrada de Lead',
      subtitle: 'Formulario / Webhook',
      icon: FormInput,
      color: 'border-blue-500/50 text-blue-400',
      description: 'El cliente solicita un presupuesto o servicio en la web. El evento genera un payload JSON estructurado.',
      details: {
        tipo: 'Webhook Trigger HTTP',
        frecuencia: 'Tiempo real (< 15ms)',
        beneficio: 'Cero formularios perdidos o no registrados.'
      },
      codeSnippet: `// Evento entrante
{
  "lead_id": "usr_9421",
  "origen": "nortcode.es/contacto",
  "timestamp": 1729241893
}`
    },
    {
      id: 1,
      step: '02',
      title: 'Sanitización & Filtro',
      subtitle: 'Seguridad en Edge',
      icon: ShieldCheck,
      color: 'border-emerald-500/50 text-emerald-400',
      description: 'Filtrado de caracteres maliciosos, comprobación de email RFC válido y verificación de honeypot antispam.',
      details: {
        tipo: 'Middleware de Seguridad',
        proteccion: 'XSS, Injection & Bot Block',
        beneficio: 'Base de datos limpia sin spam ni basura.'
      },
      codeSnippet: `// Resultado de verificación
{
  "antispam_honeypot": "CLEAN",
  "email_valid": true,
  "xss_vectors_detected": 0
}`
    },
    {
      id: 2,
      step: '03',
      title: 'Motor n8n & IA',
      subtitle: 'Clasificación & Lógica',
      icon: Cpu,
      color: 'border-brand-cyan/60 text-brand-cyan',
      description: 'El flujo en n8n evalúa el tipo de proyecto, genera un resumen técnico inicial y categoriza la prioridad.',
      details: {
        tipo: 'Pipeline Automatizado n8n',
        ia_aplicada: 'Clasificación semántica de necesidad',
        beneficio: 'Ahorro de 10-15 horas semanales de gestión.'
      },
      codeSnippet: `// n8n Pipeline Executor
const task = await n8n.dispatch({
  workflow: "lead_routing_priority",
  category: "Desarrollo Web Next.js",
  auto_estimate: true
});`
    },
    {
      id: 3,
      step: '04',
      title: 'Notificación & CRM',
      subtitle: 'Email Resend / Telegram',
      icon: BellRing,
      color: 'border-purple-500/50 text-purple-400',
      description: 'Envío instantáneo al correo oficial (oloboc.digitalbusiness@gmail.com) y confirmación automática al cliente.',
      details: {
        tipo: 'Resend API Transaccional',
        latencia: 'Menos de 2 segundos',
        beneficio: 'Respuesta al cliente 5x más rápida.'
      },
      codeSnippet: `// Notificación despachada
{
  "to": "oloboc.digitalbusiness@gmail.com",
  "delivery_status": "DELIVERED",
  "client_confirmation": "SENT"
}`
    }
  ];

  const current = nodes[selectedNode];

  return (
    <div className="rounded-2xl bg-brand-surface border border-brand-border p-5 sm:p-6 shadow-xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-brand-border">
        <div>
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
            Arquitectura de Automatización en Vivo
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            Haz clic en los nodos para inspeccionar el flujo técnico
          </h4>
        </div>
        <span className="text-xs font-mono text-brand-dim px-2.5 py-1 rounded bg-brand-card border border-brand-border">
          4 Nodos Conectados
        </span>
      </div>

      {/* Nodes Interactive Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative group ${
                isSelected
                  ? 'bg-brand-card border-brand-cyan shadow-lg shadow-brand-cyan/10 ring-1 ring-brand-cyan/50'
                  : 'bg-brand-bg/60 border-brand-border hover:border-brand-border-light hover:bg-brand-card/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-brand-dim">PASO {node.step}</span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-cyan' : 'text-brand-dim'}`} />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                {node.title}
              </div>
              <div className="text-[11px] text-brand-dim truncate mt-0.5">
                {node.subtitle}
              </div>
              {isSelected && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-cyan rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Node Inspector Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 rounded-xl bg-brand-bg border border-brand-border items-center">
        {/* Explanation */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
              NODO {current.step}: {current.title.toUpperCase()}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-brand-text leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
            {Object.entries(current.details).map(([key, val]) => (
              <div key={key} className="p-2 rounded bg-brand-card border border-brand-border/60">
                <div className="text-[9px] text-brand-dim uppercase">{key}</div>
                <div className="text-xs text-white font-medium mt-0.5">{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Payload Window */}
        <div className="lg:col-span-5 bg-brand-card/90 rounded-lg border border-brand-border p-3 font-mono text-[11px] overflow-x-auto">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-border/60 text-[10px] text-brand-dim">
            <span>DATA PAYLOAD</span>
            <span className="text-emerald-400">STATUS: ACTIVE</span>
          </div>
          <pre className="text-brand-cyan/90 leading-tight">
            <code>{current.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
