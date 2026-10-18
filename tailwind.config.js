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
          bg: 'var(--brand-bg)',
          surface: 'var(--brand-surface)',
          card: 'var(--brand-card)',
          elevated: 'var(--brand-elevated)',
          border: 'var(--brand-border)',
          'border-light': 'var(--brand-border-light)',
          cyan: '#00f0ff',
          'cyan-glow': 'rgba(0, 240, 255, 0.15)',
          blue: '#3b82f6',
          'blue-dark': '#1d4ed8',
          accent: '#00e5ff',
          text: 'var(--brand-text)',
          muted: 'var(--brand-muted)',
          dim: 'var(--brand-dim)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
};
