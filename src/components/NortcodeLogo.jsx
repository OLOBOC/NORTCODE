'use client';

export default function NortcodeLogo({
  variant = 'white', // 'white' (pure white for dark theme) | 'dark' (original black)
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
  // Use pure white for dark theme to preserve original monochrome branding, or dark for light surfaces
  const logoSrc = variant === 'dark' ? '/logo-dark.png' : '/logo-white.png';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblem Container with strict inline dimensions to prevent layout blowup */}
      <div
        style={{
          width: `${currentSize.px}px`,
          height: `${currentSize.px}px`,
          minWidth: `${currentSize.px}px`,
          minHeight: `${currentSize.px}px`,
          maxWidth: `${currentSize.px}px`,
          maxHeight: `${currentSize.px}px`,
        }}
        className="relative flex items-center justify-center rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-colors p-1 overflow-hidden shrink-0"
      >
        <img
          src={logoSrc}
          alt="Nortcode Isotipo"
          width={currentSize.px}
          height={currentSize.px}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          loading="eager"
        />
      </div>

      {/* Brand Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-mono font-bold tracking-tight text-white ${currentSize.text} leading-none`}>
              NORT<span className="text-white">CODE</span>
            </span>
            {showBadge && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            )}
          </div>
          <span className={`font-mono tracking-wider uppercase text-brand-dim ${currentSize.subtext} mt-0.5`}>
            Estudio Digital
          </span>
        </div>
      )}
    </div>
  );
}
