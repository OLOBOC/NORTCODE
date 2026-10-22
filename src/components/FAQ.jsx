import { ChevronDown, CircleHelp } from 'lucide-react';

const questions = [
  {
    question: '¿El sitio web será mío cuando terminemos?',
    answer:
      'Sí. Una vez completado el proyecto y los pagos acordados, recibirás el código y los materiales creados específicamente para tu web. Los recursos de terceros, como fuentes o servicios externos, mantienen sus propias licencias.',
  },
  {
    question: '¿Qué tecnología se utilizará para crear mi web?',
    answer:
      'Depende de lo que necesite tu negocio. Priorizamos soluciones rápidas, seguras y fáciles de mantener; en la propuesta te explicaremos la tecnología elegida y por qué encaja con tu proyecto.',
  },
  {
    question: '¿Podré cambiar textos, imágenes o productos por mi cuenta?',
    answer:
      'Podemos incluir un gestor de contenidos o un panel de administración si te conviene. Si no hace falta, también podemos acordar cómo solicitar cambios y qué soporte tendrás después de publicar la web.',
  },
  {
    question: '¿Cómo sabré cómo va avanzando el proyecto?',
    answer:
      'Definimos contigo las etapas y los momentos de revisión. Podrás ver los avances y darnos feedback antes de cerrar cada parte importante del trabajo.',
  },
  {
    question: '¿Cuánto se tarda en tener la web lista?',
    answer:
      'El plazo depende del alcance, los contenidos y las funcionalidades. Antes de empezar recibirás una planificación con tiempos estimados; tener los textos e imágenes preparados ayuda a cumplirla.',
  },
  {
    question: '¿Tengo que cambiar mi dominio, correo u alojamiento?',
    answer:
      'Normalmente puedes conservar tu dominio y tus cuentas de correo. Revisamos el alojamiento que ya utilizas y te recomendamos si conviene mantenerlo o cambiarlo, procurando que la transición sea ordenada.',
  },
];

export default function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      className="py-12 sm:py-16 bg-brand-bg relative border-t border-brand-border/60"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-7 sm:mb-8">
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight"
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-2">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl bg-brand-surface border border-brand-border open:border-brand-cyan/30 transition-colors"
            >
              <summary className="flex items-center gap-3 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <CircleHelp className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="flex-1 text-sm font-semibold text-brand-text">
                  {question}
                </span>
                <span className="w-7 h-7 rounded-full bg-brand-card border border-brand-border flex items-center justify-center shrink-0">
                  <ChevronDown className="w-3.5 h-3.5 text-brand-muted transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <div className="pl-11 pr-4 pb-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
