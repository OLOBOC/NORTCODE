import Link from 'next/link';
import { ArrowRight, Check, Clock3, Layers3, Sparkles } from 'lucide-react';

const pricingModels = [
  {
    icon: Layers3,
    label: 'PAQUETES A MEDIDA',
    title: 'Un alcance claro desde el principio',
    description:
      'Agrupamos diseño, desarrollo y puesta en marcha en una propuesta adaptada a lo que tu negocio necesita.',
    points: [
      'Alcance y entregables definidos',
      'Precio cerrado antes de empezar',
      'Sin extras ni cuotas sorpresa',
    ],
  },
  {
    icon: Clock3,
    label: 'POR HORAS',
    title: 'Flexibilidad para mejoras y soporte',
    description:
      'Adecuado para cambios concretos, mantenimiento o tareas cuya duración conviene controlar de cerca.',
    points: [
      'Trabajo priorizado contigo',
      'Seguimiento del tiempo dedicado',
      'Pagas solo por el trabajo acordado',
    ],
  },
  {
    icon: Sparkles,
    label: 'PROYECTOS POR FASES',
    title: 'Avanza paso a paso',
    description:
      'Dividimos proyectos más amplios en etapas para validar prioridades y distribuir la inversión en el tiempo.',
    points: [
      'Prioridades y objetivos por etapa',
      'Revisión antes de cada siguiente paso',
      'Presupuesto claro para cada fase',
    ],
  },
];

export default function PricingOverview({ showIntro = true }) {
  return (
    <section className={`relative overflow-hidden bg-brand-bg ${showIntro ? 'py-16 sm:py-24' : 'py-5'}`}>
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-brand-cyan/10 blur-[100px]" />

      <div className={`relative mx-auto max-w-7xl ${showIntro ? 'space-y-12 px-4 sm:px-6 lg:px-8' : 'space-y-8'}`}>
        {showIntro && (
          <header className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="status-pill mx-auto w-fit">
              <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
              PRECIOS CLAROS · SIN SORPRESAS
            </span>
            <h1 className="text-3xl font-black tracking-tight text-brand-text sm:text-5xl">
              Tecnología útil, a un precio que encaja.
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
              Cada negocio y cada proyecto son distintos. Buscamos una solución
              económica y proporcionada a lo que necesitas, con el coste explicado
              antes de empezar.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-cyan px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              Pide una propuesta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </header>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          {pricingModels.map(({ icon: Icon, label, title, description, points }) => (
            <article
              key={label}
              className="flex flex-col rounded-3xl border border-brand-border bg-brand-surface p-5 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
                {label}
              </p>
              <h2 className="mt-2 text-xl font-bold text-brand-text">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {description}
              </p>
              <ul className="mt-5 space-y-3 border-t border-brand-border pt-5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs text-brand-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid gap-6 rounded-3xl border border-brand-border bg-brand-card p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <p className="text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
              CÓMO LO PRESUPUESTAMOS
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-text">
              Primero entendemos el proyecto. Después, concretamos el precio.
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-brand-muted">
              Revisamos tus objetivos y el trabajo necesario para recomendarte
              la opción más sencilla que resuelva tu caso. Recibirás el alcance,
              los plazos y el presupuesto por escrito antes de decidir.
            </p>
          </div>
          <Link
            href="#contacto"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-xs font-bold text-brand-text transition-colors hover:border-brand-cyan/50"
          >
            Cuéntame tu idea
            <ArrowRight className="h-4 w-4 text-brand-cyan" />
          </Link>
        </div>
      </div>
    </section>
  );
}
