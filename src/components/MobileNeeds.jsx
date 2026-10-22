'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Zap } from 'lucide-react';
import { businessNeeds, createBusinessNeedsContactData } from '@/lib/businessNeeds';

export default function MobileNeeds() {
  const router = useRouter();
  const [selectedNeeds, setSelectedNeeds] = useState([]);

  const toggleNeed = (id) => {
    setSelectedNeeds((current) => (
      current.includes(id)
        ? current.filter((need) => need !== id)
        : [...current, id]
    ));
  };

  const handleSubmit = () => {
    if (selectedNeeds.length === 0) return;

    window.sessionStorage.setItem(
      'nortcode-mobile-contact',
      JSON.stringify(createBusinessNeedsContactData(selectedNeeds)),
    );
    router.push('/movil/contacto');
  };

  return (
    <section className="py-8" aria-labelledby="mobile-needs-title">
      <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-xl">
        <div className="flex h-11 items-center gap-1.5 border-b border-brand-border px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 min-w-0 flex-1 truncate text-[10px] font-mono text-brand-muted">
            nortcode.es / tu proyecto
          </span>
          <span className="rounded border border-brand-cyan/20 bg-brand-cyan/10 px-2 py-1 text-[9px] font-mono font-semibold text-brand-cyan">
            A TU MEDIDA
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-cyan">
              <Sparkles className="h-3.5 w-3.5" />
              01 / Tareas del día a día
            </p>
            <h2 id="mobile-needs-title" className="mt-2 text-xl font-extrabold tracking-tight">
              ¿Qué tareas haces cada semana?
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-brand-muted">
              Marca las que te suenen y te enseño cómo podríamos resolverlas.
            </p>
          </div>

          <div className="mt-4">
            {businessNeeds.map((need) => {
              const isSelected = selectedNeeds.includes(need.id);

              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => toggleNeed(need.id)}
                  aria-pressed={isSelected}
                  className={`group flex w-full items-start gap-3 border-b px-1 py-4 text-left transition-colors ${
                    isSelected
                      ? 'border-brand-cyan/50'
                      : 'border-brand-border hover:border-brand-cyan/40'
                  }`}
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    isSelected
                      ? 'border-brand-cyan bg-brand-cyan text-black'
                      : 'border-brand-muted text-transparent group-hover:border-brand-cyan'
                  }`}>
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-semibold leading-snug ${
                      isSelected ? 'text-brand-muted line-through decoration-brand-cyan decoration-2' : 'text-brand-text'
                    }`}>
                      {need.label}
                    </span>
                    {isSelected && (
                      <span className="mt-2 block text-xs leading-relaxed text-brand-muted">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-cyan">
                          Podemos ayudarte:
                        </span>
                        <br />
                        {need.solution}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-start gap-2 text-[11px] leading-relaxed text-brand-dim">
              <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
              {selectedNeeds.length ? (
                <span>Has marcado {selectedNeeds.length}. Con eso ya tenemos por dónde empezar.</span>
              ) : (
                <Link href="/movil/contacto" className="hover:text-brand-cyan">
                  Si ninguna encaja, cuéntame tu caso directamente.
                </Link>
              )}
            </div>
            <div className="flex flex-col gap-3 min-[390px]:flex-row min-[390px]:items-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={selectedNeeds.length === 0}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-cyan px-4 py-3 text-xs font-bold text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-brand-cyan"
              >
                Enviarme la lista
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/movil/ingenieria"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-cyan transition-colors hover:text-white"
              >
                Ver ingeniería y tecnología
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
