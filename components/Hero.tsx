
import React, { useState, useEffect } from 'react';

interface HeroProps {
  t: { badge: string; h1: string; h1_yellow: string; h1_bottom: string; sub: string; cta: string };
}

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200",
    label: "INTERNATIONAL SNACKS • CHIPS",
    alt: "Market Aisle"
  },
  {
    url: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&q=80&w=1200",
    label: "COLD HEINEKEN • PREMIUM LIQUOR",
    alt: "Cold Heineken Beer Bottle"
  },
  {
    url: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&q=80&w=1200",
    label: "LUGGAGE • TRAVEL KITS",
    alt: "Travel Essentials"
  },
  {
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200",
    label: "ELECTRONICS • TECH REPAIR",
    alt: "Tech and Electronics"
  }
];

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    // Images change every 3 seconds (3000ms)
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-32 px-4 md:px-6 lg:px-8 overflow-hidden border-b-4 md:border-b-8 border-white bg-[#a81c21]">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="inline-block bg-[#ffff00] text-black font-black text-[9px] xxs:text-xs md:text-xl px-3 py-1 md:px-6 md:py-2 mb-6 md:mb-8 rotate-[-2deg] neon-glow uppercase tracking-[0.1em] xxs:tracking-[0.2em] whitespace-nowrap">
            {t.badge}
          </div>
          
          <h1 className="font-oswald text-4xl xxs:text-5xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] 3xl:text-[13rem] text-white leading-[0.8] tracking-tighter uppercase mb-6 md:mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {t.h1}<br />
            <span className="text-[#ffff00]">{t.h1_yellow}</span><br />
            {t.h1_bottom}
          </h1>
          
          <div className="bg-white text-black font-black text-[8px] xxs:text-[10px] xs:text-xs md:text-sm px-3 py-2 mb-8 md:mb-10 tracking-[0.15em] xxs:tracking-[0.2em] uppercase inline-block italic border-r-4 xs:border-r-8 border-yellow-400 shadow-xl">
            {t.sub}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#ffff00] text-black font-black text-lg xxs:text-xl md:text-2xl px-10 xxs:px-12 md:px-16 py-4 xxs:py-5 md:py-6 hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 neon-glow uppercase tracking-tighter shadow-[4px_4px_0px_rgba(0,0,0,1)] xs:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            >
              {t.cta}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-2xl mx-auto pb-16 lg:pb-0">
          <div className="relative group">
            <div className="relative z-10 border-[6px] xs:border-[8px] md:border-[16px] border-white shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[30px_30px_0px_rgba(0,0,0,0.6)] overflow-hidden bg-zinc-900 aspect-square md:aspect-auto h-[300px] xxs:h-[350px] md:h-[500px]">
              <div className="relative overflow-hidden h-full w-full">
                {HERO_IMAGES.map((img, idx) => (
                  <img 
                    key={img.url}
                    src={img.url} 
                    alt={img.alt} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      idx === currentIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    } brightness-[0.8] contrast-[1.2] saturate-[1.2]`}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-tr from-[#a81c21]/50 via-transparent to-black/30 pointer-events-none"></div>
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%] pointer-events-none opacity-20"></div>
              </div>
              
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-[#ffff00] text-black font-black text-[10px] xxs:text-xs md:text-xl px-3 py-1.5 md:px-6 md:py-3 uppercase italic shadow-2xl rotate-[-3deg] border border-black z-20">
                {HERO_IMAGES[currentIdx].label}
              </div>
            </div>
            
            <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 w-10 h-10 xs:w-12 xs:h-12 border-t-4 xs:border-t-8 border-l-4 xs:border-l-8 border-[#ffff00] pointer-events-none z-20"></div>
            <div className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 w-10 h-10 xs:w-12 xs:h-12 border-b-4 xs:border-b-8 border-r-4 xs:border-r-8 border-white pointer-events-none z-20"></div>

            {/* Pagination Indicators - Positioned further down to avoid overlap with yellow bar on tiny screens */}
            <div className="absolute -bottom-10 lg:-bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {HERO_IMAGES.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2.5 h-2.5 xxs:w-3 xxs:h-3 md:w-4 md:h-4 border-2 border-white transition-all duration-300 ${
                    idx === currentIdx ? 'bg-[#ffff00] w-6 xxs:w-8 md:w-10' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
