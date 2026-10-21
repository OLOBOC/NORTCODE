'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('nortcode_theme');
    const nextTheme = stored === 'dark' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    document.documentElement.classList.toggle('dark', nextTheme !== 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('nortcode_theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next !== 'light');
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-light text-brand-muted hover:text-brand-text transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-brand-cyan"
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600" />
      )}
    </button>
  );
}
