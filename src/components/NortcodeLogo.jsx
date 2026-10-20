'use client';

export default function NortcodeLogo({
  size = 'md', // 'sm' (28px), 'md' (36px), 'lg' (48px)
  showText = true,
  showBadge = false,
  className = '',
}) {
  const sizeMap = {
    sm: { px: 28, text: 'text-base', subtext: 'text-[9px]' },
    md: { px: 36, text: 'text-lg', subtext: 'text-[10px]' },
    lg: { px: 44, text: 'text-xl', subtext: 'text-xs' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblem Container with strict inline dimensions */}
      <div
        style={{
          width: `${currentSize.px}px`,
          height: `${currentSize.px}px`,
          minWidth: `${currentSize.px}px`,
          minHeight: `${currentSize.px}px`,
          maxWidth: `${currentSize.px}px`,
          maxHeight: `${currentSize.px}px`,
        }}
        className="relative flex items-center justify-center rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-colors p-1 overflow-hidden shrink-0 shadow-sm"
      >
        {/* White logo for dark mode */}
        <img
          src="/logo-white.png"
          alt="Nortcode Isotipo"
          width={currentSize.px}
          height={currentSize.px}
          className="dark:block hidden w-full h-full object-contain"
          loading="eager"
        />
        {/* Original black logo for light mode */}
        <img
          src="/logo-dark.png"
          alt="Nortcode Isotipo"
          width={currentSize.px}
          height={currentSize.px}
          className="dark:hidden block w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Brand Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-mono font-bold tracking-tight text-brand-text ${currentSize.text} leading-none`}>
              NORT<span>CODE</span>
            </span>
            {showBadge && (
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </span>
            )}
          </div>
          <span className={`font-mono tracking-wider uppercase text-brand-dim ${currentSize.subtext} mt-0.5 truncate`}>
            Estudio Digital
          </span>
        </div>
      )}
    </div>
  );
}
