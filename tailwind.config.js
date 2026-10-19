/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:             'var(--brand-bg)',
          surface:        'var(--brand-surface)',
          card:           'var(--brand-card)',
          elevated:       'var(--brand-elevated)',
          border:         'var(--brand-border)',
          'border-light': 'var(--brand-border-light)',
          cyan:           '#00f0ff',
          'cyan-dim':     'rgba(0, 240, 255, 0.08)',
          blue:           '#3b82f6',
          accent:         '#00e5ff',
          text:           'var(--brand-text)',
          muted:          'var(--brand-muted)',
          dim:            'var(--brand-dim)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.03em',
      },
      animation: {
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse':    'glow 3s ease-in-out infinite alternate',
        marquee:         'marquee 35s linear infinite',
        float:           'float-gentle 6s ease-in-out infinite',
        'border-glow':   'border-glow 3s ease-in-out infinite',
        'fade-in-up':    'fade-in-up 0.7s ease forwards',
        shimmer:         'shimmer 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%':   { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0, 240, 255, 0.2)', boxShadow: '0 0 20px rgba(0, 240, 255, 0.08)' },
          '50%':       { borderColor: 'rgba(0, 240, 255, 0.4)', boxShadow: '0 0 40px rgba(0, 240, 255, 0.15)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-cyan-glow': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.15), transparent 70%)',
      },
      boxShadow: {
        'cyan-glow':  '0 0 40px rgba(0, 240, 255, 0.12), 0 0 80px rgba(0, 240, 255, 0.06)',
        'cyan-sm':    '0 0 20px rgba(0, 240, 255, 0.1)',
        'dark-heavy': '0 40px 100px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
