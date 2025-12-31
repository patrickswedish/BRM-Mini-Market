
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface FooterProps {
  t: { 
    location: string; 
    opposite: string; 
    hours: string; 
    follow: string; 
    map_btn: string;
  };
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-black text-white border-t-4 md:border-t-8 border-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="flex flex-col justify-center">
          <h2 className="font-oswald text-4xl xxs:text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 leading-none uppercase">
            {t.location}<br />
            <span className="text-[#ffff00]">MILANO</span>
          </h2>
          <p className="text-sm xxs:text-base md:text-2xl mb-6 md:mb-8 font-bold opacity-80 italic">
            {t.opposite}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 mb-8">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4 text-[10px] xxs:text-xs xs:text-sm md:text-lg">
                <div className="bg-white/10 p-2 md:p-3 rounded-full flex-shrink-0 mt-0.5"><MapPin size={14} className="text-[#ffff00] md:w-5 md:h-5" /></div>
                <span>Via Vitruvio, 40, 20124 Milano MI</span>
              </div>
              <div className="flex items-start gap-3 md:gap-4 text-[10px] xxs:text-xs xs:text-sm md:text-lg">
                <div className="bg-white/10 p-2 md:p-3 rounded-full flex-shrink-0 mt-0.5"><Clock size={14} className="text-[#ffff00] md:w-5 md:h-5" /></div>
                <span>{t.hours}</span>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4 text-[10px] xxs:text-xs xs:text-sm md:text-lg">
                <div className="bg-white/10 p-2 md:p-3 rounded-full flex-shrink-0"><Phone size={14} className="text-[#ffff00] md:w-5 md:h-5" /></div>
                <a href="tel:+393275960880" className="hover:text-[#ffff00] transition-colors">+39 327 596 0880</a>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-[10px] xxs:text-xs xs:text-sm md:text-lg">
                <div className="bg-white/10 p-2 md:p-3 rounded-full flex-shrink-0"><Mail size={14} className="text-[#ffff00] md:w-5 md:h-5" /></div>
                <a href="mailto:sharukhbillal@gmail.com" className="hover:text-[#ffff00] transition-colors break-all">sharukhbillal@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 border-t border-white/10 pt-6 md:pt-8">
            <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">{t.follow}</span>
            <div className="flex gap-3 md:gap-4">
              <a href="https://www.instagram.com/brmminimarket/" target="_blank" className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-[#ffff00] hover:text-black transition-all">
                <Instagram size={18} className="md:w-6 md:h-6" />
              </a>
              <a href="https://www.tiktok.com/@brm.mini.market" target="_blank" className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-[#ffff00] hover:text-black transition-all">
                <TikTokIcon size={18} className="md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full aspect-square xxs:aspect-[4/3] md:aspect-video lg:h-[400px] border-2 md:border-4 border-white relative overflow-hidden group shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.68416348123!2d9.201639077227415!3d45.48321497107519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6cf046c823f%3A0xc067759a1170669!2sVia%20Vitruvio%2C%2040%2C%2020124%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full grayscale invert-[0.9] contrast-[1.1] brightness-[0.8] transition-all group-hover:grayscale-0 group-hover:invert-0"
            style={{ border: 0 }} allowFullScreen={true} loading="lazy"
          ></iframe>
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
            <button 
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=BRM+Mini+Market+Via+Vitruvio+40+Milano', '_blank')}
              className="bg-[#ffff00] text-black font-black px-2.5 py-1.5 md:px-4 md:py-2 hover:bg-white transition-all text-[9px] xxs:text-[10px] md:text-sm flex items-center gap-1.5 md:gap-2"
            >
              <MapPin size={12} className="md:w-4 md:h-4" />
              {t.map_btn}
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20 py-8 md:py-16 text-center flex flex-col items-center gap-3 md:gap-4 px-4">
        <span className="text-3xl xxs:text-4xl md:text-7xl font-black italic tracking-tighter">BRM</span>
        <p className="text-[8px] xxs:text-[9px] md:text-xs opacity-40 font-mono">2025 BRM Mini Market • Neural Mode Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
