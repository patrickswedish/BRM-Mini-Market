
import React from 'react';
import { MapPin } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  isScrolled: boolean;
  lang: string;
  setLang: (lang: string) => void;
  t: { directions: string };
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, lang, setLang, t }) => {
  const handleDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Via+Vitruvio+40+Milano', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 md:py-4 ${
      isScrolled ? 'bg-[#a81c21]/95 backdrop-blur-md shadow-2xl py-2 md:py-3 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex flex-col items-start leading-none group cursor-pointer flex-shrink-0">
          <span className="text-2xl xs:text-3xl md:text-4xl font-black italic tracking-tighter text-white">BRM</span>
          <span className="text-[8px] xs:text-[10px] md:text-xs font-bold tracking-widest text-white/80">MINI MARKET & TECH</span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
          
          <button 
            onClick={handleDirections}
            className="bg-[#ffff00] text-black font-black text-[10px] xs:text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 flex items-center gap-1.5 md:gap-2 hover:bg-white transition-colors duration-200 neon-glow whitespace-nowrap"
          >
            <MapPin size={14} className="md:w-4 md:h-4" fill="black" />
            {t.directions}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
