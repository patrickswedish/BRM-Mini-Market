
import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'bn', name: 'Bangla', native: 'বাংলা' },
  { code: 'zh', name: 'Chinese', native: '中文' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'ja', name: 'Japanese', native: '日本語' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'ko', name: 'Korean', native: '한국어' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'pl', name: 'Polish', native: 'Polski' },
  { code: 'ro', name: 'Romanian', native: 'Română' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands' },
  { code: 'th', name: 'Thai', native: 'ไทย' },
  { code: 'tl', name: 'Tagalog', native: 'Tagalog' }
];

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (code: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-2 md:px-4 md:py-3 transition-all duration-200 border-2 group ${
          isOpen 
          ? 'bg-[#ffff00] text-black border-[#ffff00]' 
          : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
        }`}
      >
        <Languages size={16} className={`${isOpen ? 'text-black' : 'text-[#ffff00]'} group-hover:rotate-12 transition-transform md:w-5 md:h-5`} />
        <span className="text-[9px] xs:text-[10px] md:text-sm font-black tracking-widest uppercase hidden sm:inline">
          {languages.find(l => l.code === currentLang)?.name || 'LANG'}
        </span>
        <span className="text-[10px] font-black uppercase inline sm:hidden">
          {currentLang.toUpperCase()}
        </span>
        <ChevronDown size={12} className={`transition-transform duration-300 md:w-4 md:h-4 ${isOpen ? 'rotate-180 text-black' : 'text-white/40'}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[280px] xs:w-72 bg-black border-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[60] animate-in slide-in-from-top-2 fade-in duration-200 origin-top-right">
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Select_Locale</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-[#ffff00] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
            </div>
          </div>

          <div className="max-h-[60vh] md:max-h-[400px] overflow-y-auto custom-scrollbar overflow-x-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 xs:py-3 border-b border-white/5 transition-all group hover:bg-white/5 ${
                  currentLang === lang.code ? 'bg-[#ffff00]/5' : ''
                }`}
              >
                <div className="flex flex-col items-start leading-tight">
                  <span className={`text-xs md:text-sm font-black uppercase tracking-tight transition-colors ${
                    currentLang === lang.code ? 'text-[#ffff00]' : 'text-white group-hover:text-[#ffff00]'
                  }`}>
                    {lang.name}
                  </span>
                  <span className="text-[9px] font-mono text-white/30 uppercase">
                    {lang.native}
                  </span>
                </div>
                
                {currentLang === lang.code && (
                  <Check size={16} className="text-[#ffff00]" strokeWidth={4} />
                )}
              </button>
            ))}
          </div>

          <div className="bg-black p-3 border-t border-white/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ffff00] animate-pulse"></span>
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">40_Milano_Ready</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          display: block;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffff00;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
