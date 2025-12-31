
import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown, Check, X } from 'lucide-react';

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

  // Prevent background scroll when modal is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

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
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-2 md:px-4 md:py-3 transition-all duration-200 border-2 group shadow-lg ${
          isOpen 
          ? 'bg-[#ffff00] text-black border-[#ffff00]' 
          : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
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

      {/* Language Selector Overlay/Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop for Mobile */}
          <div 
            className="fixed inset-0 bg-[#a81c21]/60 backdrop-blur-sm z-[90] sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className={`
            fixed inset-x-4 top-[80px] sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2
            w-auto sm:w-[480px] md:w-[600px] 
            bg-black border-4 border-white shadow-[0_30px_90px_rgba(0,0,0,0.8)] 
            z-[100] animate-in zoom-in-95 fade-in duration-200 origin-top-right
            flex flex-col
          `}>
            {/* Header Section */}
            <div className="bg-white/10 px-4 py-3 border-b border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ffff00] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.3em]">LOC_CORE_V2</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="sm:hidden text-white/40 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Language Grid */}
            <div className="max-h-[60vh] sm:max-h-[450px] overflow-y-auto custom-scrollbar p-2 grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 gap-1 bg-zinc-900/50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex flex-col items-start px-4 py-3 md:px-5 md:py-4 transition-all group border border-white/5 hover:border-[#ffff00]/30 hover:bg-[#ffff00]/5 ${
                    currentLang === lang.code ? 'bg-[#ffff00] text-black border-[#ffff00]' : 'text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[11px] md:text-xs font-black uppercase tracking-tight ${
                      currentLang === lang.code ? 'text-black' : 'text-white group-hover:text-[#ffff00]'
                    }`}>
                      {lang.name}
                    </span>
                    {currentLang === lang.code && (
                      <Check size={14} className="text-black" strokeWidth={4} />
                    )}
                  </div>
                  <span className={`text-[8px] md:text-[9px] font-mono uppercase mt-0.5 ${
                    currentLang === lang.code ? 'text-black/60' : 'text-white/30 group-hover:text-white/50'
                  }`}>
                    {lang.native}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer Section */}
            <div className="bg-black p-3 border-t border-white/20 hidden sm:block">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffff00]"></div>
                  <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em]">Milano_Nexus_Ready</span>
                </div>
                <span className="text-[8px] font-mono text-[#ffff00] uppercase tracking-[0.1em]">{languages.length} Translation Nodes</span>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          display: block !important;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffff00;
          border: 1px solid #000;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
