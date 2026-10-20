'use client';

import { Terminal, Cpu, Database, Cloud, Shield, Zap, Layers, Code2, Globe, Server, Lock, Bot } from 'lucide-react';

const TECH_ROWS = [
  // Row 1: Frontend
  { name: 'Next.js 15', icon: Globe, color: '#ffffff', cat: 'Frontend' },
  { name: 'React 19', icon: Code2, color: '#61DAFB', cat: 'Frontend' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6', cat: 'Frontend' },
  { name: 'Tailwind CSS', icon: Layers, color: '#38BDF8', cat: 'UI' },
  { name: 'HTML5 / CSS3', icon: Code2, color: '#E34F26', cat: 'Frontend' },
  // Row 2: Backend
  { name: 'Node.js', icon: Terminal, color: '#339933', cat: 'Backend' },
  { name: 'Python', icon: Code2, color: '#3776AB', cat: 'Backend' },
  { name: 'PHP / Laravel', icon: Server, color: '#FF2D20', cat: 'Backend' },
  { name: 'REST & GraphQL', icon: Zap, color: '#E535AB', cat: 'APIs' },
  { name: 'Nest.js', icon: Code2, color: '#E0234E', cat: 'Backend' },
  // Row 3: Data
  { name: 'PostgreSQL', icon: Database, color: '#4169E1', cat: 'Database' },
  { name: 'MySQL', icon: Database, color: '#4479A1', cat: 'Database' },
  { name: 'Firebase', icon: Database, color: '#FFCA28', cat: 'Cloud DB' },
  { name: 'Supabase', icon: Database, color: '#3ECF8E', cat: 'Cloud DB' },
  { name: 'Redis', icon: Database, color: '#FF4438', cat: 'Cache' },
  // Row 4: Cloud
  { name: 'Cloudflare', icon: Shield, color: '#F48120', cat: 'CDN' },
  { name: 'Vercel', icon: Globe, color: '#ffffff', cat: 'Hosting' },
  { name: 'Docker', icon: Server, color: '#2496ED', cat: 'DevOps' },
  { name: 'Linux', icon: Terminal, color: '#FCC624', cat: 'Systems' },
  // Row 5: AI
  { name: 'n8n Workflows', icon: Zap, color: '#EA4B71', cat: 'Automation' },
  { name: 'OpenAI API', icon: Bot, color: '#74AA9C', cat: 'AI' },
  { name: 'LangChain', icon: Bot, color: '#1C7F54', cat: 'AI' },
  { name: 'Webhooks', icon: Zap, color: '#brand-cyan', cat: 'Automation' },
  { name: 'RGPD / OWASP', icon: Lock, color: '#10B981', cat: 'Security' },
];

const CATEGORIES = [
  { icon: Layers, label: 'Frontend & UI', color: 'text-brand-cyan', bg: 'bg-brand-cyan/10', border: 'border-brand-cyan/20', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion'] },
  { icon: Server, label: 'Backend & APIs', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', items: ['Node.js', 'Python', 'PHP / Laravel', 'Nest.js', 'REST APIs', 'GraphQL'] },
  { icon: Database, label: 'Datos & Cloud', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', items: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Redis', 'Cloudflare Edge'] },
  { icon: Bot, label: 'IA & Automatización', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20', items: ['n8n Workflows', 'OpenAI API', 'LangChain', 'Webhooks HTTP', 'Agentes IA', 'Resend'] },
];

const MARQUEE_ITEMS = [...TECH_ROWS, ...TECH_ROWS]; // doubled for infinite loop

export default function TechStackShowcase() {
  return (
    <section className="py-24 bg-brand-card relative overflow-hidden border-y border-brand-border">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-brand-cyan/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-5">
            <div className="status-pill w-fit">
              <Cpu className="w-3 h-3" />
              STACK TECNOLÓGICO COMPLETO
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-text tracking-[-0.03em] leading-[1.05] sm:leading-[0.95]">
              Sin limitaciones<br />
              <span className="text-brand-muted font-light italic text-2xl sm:text-3xl">de tecnología.</span>
            </h2>
          </div>
          <p className="text-base text-brand-muted leading-relaxed max-w-md">
            Elegimos la herramienta correcta para cada problema. Desde un landing page estático hasta una plataforma SaaS con IA, tenemos el stack y la experiencia.
          </p>
        </div>

        {/* ── Scrolling Marquee ── */}
        <div className="relative overflow-hidden py-2">
          {/* Fade edges */}
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-brand-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-brand-card to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee">
            {MARQUEE_ITEMS.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 mx-4 px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-sm font-mono font-medium text-brand-text whitespace-nowrap hover:border-brand-cyan/30 hover:text-brand-cyan transition-colors shrink-0"
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: tech.color === '#ffffff' ? '#94a3b8' : tech.color }} />
                  {tech.name}
                  <span className="text-[10px] text-brand-dim">{tech.cat}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Category Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className={`p-5 rounded-3xl bg-brand-surface border ${cat.border} hover:border-opacity-60 transition-all card-lift space-y-4`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-2xl ${cat.bg} border ${cat.border} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </div>

                {/* Label */}
                <h3 className="text-sm font-bold text-brand-text">{cat.label}</h3>

                {/* Items */}
                <div className="space-y-1.5">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-brand-muted">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${cat.color.replace('text-', 'bg-')}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Banner ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-brand-surface border border-brand-border">
          <div className="text-sm text-brand-muted">
            <strong className="text-brand-text">¿Tienes una tecnología específica en mente?</strong>{' '}
            Lo más probable es que ya trabajemos con ella o podamos aprenderla.
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-brand-cyan hover:bg-white rounded-xl transition-all"
          >
            Consultar sin compromiso
          </a>
        </div>
      </div>
    </section>
  );
}
