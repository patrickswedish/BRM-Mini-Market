
import React from 'react';

interface HeroProps {
  t: { badge: string; h1: string; h1_yellow: string; h1_bottom: string; sub: string; cta: string };
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-32 px-4 overflow-hidden border-b-8 border-white bg-[#a81c21]">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
          <div className="inline-block bg-[#ffff00] text-black font-black text-[10px] sm:text-sm md:text-lg px-2 py-1 md:px-4 md:py-1 mb-6 rotate-[-2deg] neon-glow uppercase">
            {t.badge}
          </div>
          
          <h1 className="font-oswald text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white leading-[0.8] tracking-tighter uppercase mb-6 md:mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {t.h1}<br />
            <span className="text-[#ffff00]">{t.h1_yellow}</span><br />
            {t.h1_bottom}
          </h1>
          
          <div className="bg-white text-black font-black text-xs md:text-sm px-3 py-1 mb-8 tracking-[0.2em] uppercase inline-block italic border-r-8 border-yellow-400">
            {t.sub}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#ffff00] text-black font-black text-xl px-10 py-5 hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 neon-glow uppercase tracking-tighter shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            >
              {t.cta}
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative order-1 lg:order-2">
          <div className="relative group">
            <div className="relative z-10 border-[8px] md:border-[16px] border-white shadow-[20px_20px_0px_rgba(0,0,0,0.6)] overflow-hidden bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200" 
                alt="BRM Mini Market - Premium Snacks & Chips" 
                className="w-full h-auto block object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              
              {/* Floating Badge for Snacks */}
              <div className="absolute bottom-6 left-6 bg-[#ffff00] text-black font-black text-xs md:text-sm px-4 py-2 uppercase italic shadow-xl rotate-[-3deg] border-2 border-black animate-bounce-slow">
                Premium Snacks • Cold Drinks • Open Late
              </div>

              <div className="absolute top-4 right-4 bg-black/80 text-[#ffff00] text-[10px] font-mono px-2 py-1 border border-[#ffff00]/30">
                LOC: 45.4832 N / 9.2016 E
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[6px] border-l-[6px] border-[#ffff00] pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-[6px] border-r-[6px] border-white pointer-events-none"></div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-5px) rotate(-3deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
