import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Gauge,
  Layers3,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react';
import MobileHeader from './MobileHeader';
import MobileNeeds from './MobileNeeds';

const services = [
  { icon: Wrench, title: 'Diseño y desarrollo web', color: 'text-amber-400' },
  { icon: Server, title: 'Software e ingeniería Cloud', color: 'text-blue-400' },
  { icon: Bot, title: 'Automatización inteligente', color: 'text-emerald-400' },
];

const projects = [
  {
    image: '/portfolio-audax.jpg',
    title: 'Audax Motors',
    detail: 'Catálogo digital para automoción',
    href: '/movil/proyectos',
  },
  {
    image: '/portfolio-dfr.jpg',
    title: 'DFR Xtra Detail',
    detail: 'Experiencia premium de detailing',
    href: '/movil/proyectos',
  },
];

export default function MobileHome() {
  return (
    <div className="min-h-screen overflow-hidden bg-brand-bg text-brand-text md:hidden">
      <MobileHeader />
      <main className="mx-auto max-w-3xl px-4 pb-14 pt-20">
        <section className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-brand-border bg-brand-surface">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/15 via-transparent to-transparent" />
          <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-brand-cyan/15 blur-[90px]" />
          <div className="relative px-6 pb-7 pt-8 sm:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card/90 px-3 py-1.5 text-[9px] font-mono font-semibold tracking-[0.15em] text-brand-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ESTUDIO DIGITAL · ESPAÑA
            </span>
            <h1 className="mt-5 text-[2.45rem] font-extrabold leading-[1.08] tracking-[-0.045em]">
              Tecnología que impulsa{' '}
              <span className="text-brand-cyan">tu negocio.</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Creamos webs, software y automatizaciones útiles. Sin soluciones
              en serie: tecnología clara, trato directo y pensada para tus
              objetivos.
            </p>
            <Link
              href="/movil/soluciones"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-cyan px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              Descubre lo que hacemos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-4 overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-2xl sm:mx-6">
            <div className="flex h-8 items-center gap-1.5 border-b border-brand-border px-3">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 h-4 flex-1 rounded-md bg-brand-surface/80" />
            </div>
            <img
              src="/portfolio-audax.jpg"
              alt="Vista de un proyecto web desarrollado por Nortcode"
              className="h-48 w-full object-cover object-top sm:h-56"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-12 text-white">
              <p className="text-[9px] font-mono font-semibold tracking-widest text-brand-cyan">
                DISEÑO · DESARROLLO · RESULTADOS
              </p>
              <p className="mt-1 text-sm font-bold">Una presencia digital a la altura.</p>
            </div>
          </div>
          <a
            href="#resumen"
            aria-label="Desplazarse para ver más"
            className="mx-auto mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-muted"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </section>

        <MobileNeeds />

        <section id="resumen" className="scroll-mt-20 py-12">
          <div className="mb-5">
            <p className="text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
              QUÉ PODEMOS HACER POR TI
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
              Todo conectado. Todo a tu medida.
            </h2>
          </div>
          <div className="space-y-3">
            {services.map(({ icon: Icon, title, color }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface p-4"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand-card ${color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{title}</span>
                <Check className="ml-auto h-4 w-4 text-emerald-400" />
              </div>
            ))}
          </div>
          <Link
            href="/movil/soluciones"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-brand-cyan"
          >
            Ver soluciones web
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface p-5 sm:p-6">
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-border bg-brand-card text-blue-400">
              <Layers3 className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
              INGENIERÍA & CLOUD
            </p>
            <h2 className="mt-2 text-xl font-extrabold">
              También resolvemos lo que pasa detrás de la web.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Aplicaciones a medida, integraciones y procesos automatizados para
              que tu negocio trabaje mejor.
            </p>
            <Link
              href="/movil/ingenieria"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-4 py-2.5 text-xs font-bold"
            >
              Conocer ingeniería & Cloud
              <ArrowRight className="h-4 w-4 text-brand-cyan" />
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
                TRABAJO REAL
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                Proyectos seleccionados
              </h2>
            </div>
            <Link
              href="/movil/proyectos"
              className="mb-1 inline-flex shrink-0 items-center gap-1 text-xs font-bold text-brand-cyan"
            >
              Ver todos
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-surface"
              >
                <img
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-3">
                  <p className="text-xs font-bold">{project.title}</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-brand-muted">
                    {project.detail}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/movil/auditoria"
            className="rounded-2xl border border-brand-border bg-brand-surface p-4 transition-colors hover:border-brand-cyan/50"
          >
            <Gauge className="h-5 w-5 text-amber-400" />
            <h3 className="mt-3 text-sm font-bold">¿Tu web puede ir mejor?</h3>
            <p className="mt-1 text-xs leading-relaxed text-brand-muted">
              Explora opciones para revisar su rendimiento.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-brand-cyan">
              Ver rendimiento <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/movil/configurador"
            className="rounded-2xl border border-brand-border bg-brand-surface p-4 transition-colors hover:border-brand-cyan/50"
          >
            <Sparkles className="h-5 w-5 text-purple-400" />
            <h3 className="mt-3 text-sm font-bold">Dale forma a tu idea</h3>
            <p className="mt-1 text-xs leading-relaxed text-brand-muted">
              Cuéntanos qué tienes en mente y prepara tu propuesta.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-brand-cyan">
              Abrir configurador <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </section>

        <section className="my-12 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
          <div className="relative h-48">
            <img
              src="/founder.jpg"
              alt="Omar Lobo, fundador de Nortcode"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-black/50 px-2.5 py-1 text-[9px] font-mono font-semibold text-white">
              TRATO DIRECTO · SIN INTERMEDIARIOS
            </span>
          </div>
          <div className="p-5">
            <p className="text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
              SOBRE NORTCODE
            </p>
            <h2 className="mt-2 text-xl font-extrabold">Personas detrás del código.</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Hablas directamente con Omar, quien diseña y desarrolla tu
              proyecto desde el primer paso hasta su lanzamiento.
            </p>
            <Link
              href="/movil/nortcode"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-brand-cyan"
            >
              Conoce Nortcode
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-brand-cyan/30 bg-brand-cyan/10 p-5 text-center sm:p-7">
          <p className="text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
            PRÓXIMO PASO
          </p>
          <h2 className="mt-2 text-xl font-extrabold">Tu proyecto empieza con una conversación.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-brand-muted">
            Cuéntanos qué necesitas y resolvemos tus dudas antes de empezar.
          </p>
          <Link
            href="/movil/contacto"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-cyan px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
          >
            Contacto y preguntas frecuentes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <footer className="pb-4 pt-8 text-center text-[11px] text-brand-dim">
          © {new Date().getFullYear()} NORTCODE · Estudio Digital
        </footer>
      </main>
    </div>
  );
}
