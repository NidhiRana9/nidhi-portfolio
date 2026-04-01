import React, { useState } from 'react';
import { Settings, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ThemeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, accent, setAccent } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const accents = [
    { name: 'teal', color: '#06B6D4' },
    { name: 'purple', color: '#9333EA' },
    { name: 'rose', color: '#F43F5E' },
    { name: 'green', color: '#10B981' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Settings Menu Popup */}
      {isOpen && (
        <div className="bg-card border border-border p-4 rounded-2xl shadow-xl flex flex-col gap-4 min-w-[150px] animate-in slide-in-from-bottom-5">
          {/* Light / Dark Mode */}
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-sm font-semibold text-text-sec uppercase tracking-wider">Mode</span>
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border hover:border-accent-main text-text-main transition-colors"
            >
              {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>

          {/* Accent Color Palette */}
          <div>
            <span className="text-sm font-semibold text-text-sec uppercase tracking-wider block mb-3">Accent Color</span>
            <div className="flex items-center gap-2">
              {accents.map((a) => (
                <button
                  key={a.name}
                  onClick={() => setAccent(a.name)}
                  style={{ backgroundColor: a.color }}
                  className={`w-6 h-6 rounded-full transition-transform ${accent === a.name ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-card' : 'hover:scale-110'}`}
                  aria-label={`Select ${a.name} accent`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Gear Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-card border border-border flex items-center justify-center rounded-full shadow-lg hover:border-accent-main transition-all group"
        aria-label="Theme Settings"
      >
        <Settings size={20} className={`text-text-main group-hover:text-accent-main transition-all ${isOpen ? 'rotate-90' : ''}`} />
      </button>
    </div>
  );
}
