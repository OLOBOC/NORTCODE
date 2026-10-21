'use client';

import { Bot, Cloud, Cpu, Lock, Server } from 'lucide-react';

const technicalServices = [
  {
    icon: Server,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    badge: 'SOFTWARE A MEDIDA',
    title: 'Desarrollo SaaS & Paneles de Control',
    description: 'Desarrollamos aplicaciones web completas con autenticación segura, roles de usuario, pasarelas de cobro y dashboards analíticos.',
    features: ['Next.js / Node.js / Python', 'Bases de datos PostgreSQL & Supabase', 'APIs RESTful & GraphQL con documentación'],
  },
  {
    icon: Bot,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    badge: 'INTELIGENCIA ARTIFICIAL',
    title: 'Agentes de IA & Automatización n8n',
    description: 'Implantamos agentes inteligentes que cualifican clientes por WhatsApp, responden correos automáticamente y conectan tus herramientas 24/7.',
    features: ['Agentes entrenados con tus datos de empresa', 'Pipelines n8n & webhooks bidireccionales', 'Ahorro de +15 horas de oficina a la semana'],
  },
  {
    icon: Cloud,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    badge: 'DEVOPS & CLOUD',
    title: 'Infraestructura Cloud, Edge & CI/CD',
    description: 'Despliegues en arquitecturas serverless de alta disponibilidad en Cloudflare, AWS y Vercel. Cero caídas y escalabilidad automática.',
    features: ['Edge Caching global con SSL y DDoS shield', 'Dockerización y pipelines automáticos de test', 'Monitorización de uptime y copias de seguridad'],
  },
  {
    icon: Lock,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    badge: 'SEGURIDAD & AUDITORÍA',
    title: 'Auditoría Técnica, OWASP & RGPD',
    description: 'Evaluamos la seguridad de tu código e infraestructura para prevenir fugas de datos, cumplir normativas europeas y blindar tus servidores.',
    features: ['Análisis de vulnerabilidades y dependencias', 'Cumplimiento normativo RGPD / LSSI-CE España', 'Cabeceras seguras (HSTS, CSP, CORS estricto)'],
  },
];

export default function EngineeringServices() {
  return (
    <section id="ingenieria" className="py-24 sm:py-28 bg-brand-bg relative section-diagonal overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border/60 pb-8">
          <div className="space-y-3">
            <div className="status-pill w-fit">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>INGENIERÍA DE SOFTWARE & SOLUCIONES TÉCNICAS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-brand-text tracking-[-0.03em]">
              Software a medida, Cloud & Automatización con IA
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted max-w-md leading-relaxed">
            No solo creamos páginas web: diseñamos sistemas internos, paneles operativos, APIs y pipelines de inteligencia artificial para digitalizar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {technicalServices.map((tech) => {
            const TechIcon = tech.icon;

            return (
              <div
                key={tech.badge}
                className="p-6 sm:p-8 rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all card-lift space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-2xl border ${tech.color}`}>
                    <TechIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-dim">
                    {tech.badge}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-brand-text">
                    {tech.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mt-2">
                    {tech.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-brand-border/40">
                  {tech.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-xs text-brand-text font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan hover:text-white transition-colors"
                >
                  <span>Consultar viabilidad técnica</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
