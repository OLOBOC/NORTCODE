'use client';

import { Terminal, Cpu, Database, Cloud, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function TechStackShowcase() {
  const stackCategories = [
    {
      title: 'Frontend & Experiencia de Usuario',
      icon: Layers,
      color: 'text-brand-cyan',
      techs: [
        { name: 'Next.js 15', role: 'Renderizado híbrido SSR & Edge' },
        { name: 'React 19', role: 'Librería de componentes reactivos' },
        { name: 'TypeScript', role: 'Tipado estricto y código robusto' },
        { name: 'Tailwind CSS', role: 'Diseño ultra optimizado sin CSS pesado' },
      ],
    },
    {
      title: 'Backend, APIs & Bases de Datos',
      icon: Database,
      color: 'text-emerald-400',
      techs: [
        { name: 'Node.js & Python', role: 'Lógica de servidor y microservicios' },
        { name: 'PHP / Laravel', role: 'Aplicaciones web empresariales' },
        { name: 'PostgreSQL & Supabase', role: 'Bases de datos relacionales seguras' },
        { name: 'REST & GraphQL APIs', role: 'Integración fluida de datos' },
      ],
    },
    {
      title: 'Cloud, Despliegue & Seguridad',
      icon: Cloud,
      color: 'text-blue-400',
      techs: [
        { name: 'Cloudflare Edge CDN', role: 'Latencia < 20ms en toda Europa' },
        { name: 'Docker & Linux', role: 'Contenedores y entornos aislados' },
        { name: 'Seguridad OWASP', role: 'Protección contra XSS e inyecciones' },
        { name: 'Cumplimiento RGPD', role: 'Privacidad y normativa española/UE' },
      ],
    },
    {
      title: 'Automatización & Agentes IA',
      icon: Zap,
      color: 'text-purple-400',
      techs: [
        { name: 'n8n Workflows', role: 'Automatización integral de procesos' },
        { name: 'Modelos de Lenguaje (IA)', role: 'Clasificación semántica y respuestas' },
        { name: 'Webhooks & Eventos', role: 'Sincronización en tiempo real' },
        { name: 'Resend API', role: 'Entrega transaccional de correo fiable' },
      ],
    },
  ];

  return (
    <section className="py-24 bg-brand-surface/40 relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>CAPACIDAD DE INGENIERÍA COMPLETA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            Tecnología sólida, sin limitaciones
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Trabajamos con el stack completo que demandan los proyectos serios. Desde frontend ultrarrápido hasta bases de datos relacionales, automatizaciones de backend y despliegues seguros en la nube.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all shadow-xl space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-brand-card border border-brand-border ${cat.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-dim uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-text">
                    {cat.title}
                  </h3>

                  <div className="space-y-2.5 pt-2 border-t border-brand-border/60">
                    {cat.techs.map((tech, tIdx) => (
                      <div key={tIdx} className="space-y-0.5">
                        <div className="text-xs font-mono font-bold text-brand-text flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                          <span>{tech.name}</span>
                        </div>
                        <div className="text-[11px] text-brand-muted pl-2.5">
                          {tech.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-brand-dim">
                  ✓ Dominio completo
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
