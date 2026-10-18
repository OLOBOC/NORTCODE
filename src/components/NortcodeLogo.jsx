'use client';

import Image from 'next/image';

export default function NortcodeLogo({
  variant = 'white', // 'white' | 'cyan' | 'dark'
  size = 'md', // 'sm' (28px), 'md' (36px), 'lg' (48px), 'xl' (64px)
  showText = true,
  showBadge = false,
  className = '',
}) {
  const sizeMap = {
    sm: { box: 'w-7 h-7', px: 28, text: 'text-base', subtext: 'text-[9px]' },
    md: { box: 'w-9 h-9', px: 36, text: 'text-lg', subtext: 'text-[10px]' },
    lg: { box: 'w-12 h-12', px: 48, text: 'text-xl', subtext: 'text-xs' },
    xl: { box: 'w-16 h-16', px: 64, text: 'text-2xl', subtext: 'text-xs' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const logoSrc = variant === 'cyan' ? '/logo-cyan.png' : variant === 'dark' ? '/logo-dark.png' : '/logo-white.png';

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Emblem Container with Subtle Engineering Surface */}
      <div
        className={`relative flex items-center justify-center ${currentSize.box} rounded-xl bg-brand-surface/90 border border-brand-border group-hover:border-brand-cyan/50 transition-all duration-300 shadow-sm overflow-hidden p-1.5`}
      >
        {/* Ambient Glow on hover */}
        <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />

        <img
          src={logoSrc}
          alt="NORTCODE Emblem"
          width={currentSize.px}
          height={currentSize.px}
          className="relative z-10 w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-all duration-300"
          loading="eager"
        />
      </div>

      {/* Brand Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-mono font-bold tracking-tight text-white ${currentSize.text} leading-none`}>
              NORT<span className="text-brand-cyan">CODE</span>
            </span>
            {showBadge && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
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
