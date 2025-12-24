
import React from 'react';

interface AboutUsProps {
  t: { badge: string; h2: string; h2_yellow: string; h3: string; p1: string; p2: string; p2_highlight: string };
}

const AboutUs: React.FC<AboutUsProps> = ({ t }) => {
  return (
    <section className="bg-black py-12 md:py-32 px-4 md:px-8 border-t-4 md:border-t-8 border-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#a81c21]/20 blur-[60px] md:blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
        <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="h-[2px] w-8 md:w-12 bg-[#ffff00]"></span>
            <span className="text-[#ffff00] font-mono text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">{t.badge}</span>
          </div>
          
          <h2 className="font-oswald text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] md:leading-none uppercase mb-4">
            {t.h2} <br className="hidden sm:block" />
            <span className="text-[#ffff00]">{t.h2_yellow}</span>
          </h2>
          
          <h3 className="text-lg md:text-3xl font-black text-white/90 uppercase tracking-tight mb-6 md:mb-8 italic">
            {t.h3}
          </h3>
          
          <div className="space-y-4 md:space-y-6 text-white/70 text-sm md:text-xl font-medium leading-relaxed max-w-2xl">
            <p>{t.p1}</p>
            <p>
              {t.p2} <span className="text-[#ffff00] underline underline-offset-4 md:underline-offset-8 decoration-1 md:decoration-2">{t.p2_highlight}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative">
            <div className="border-[4px] md:border-[12px] border-white shadow-[10px_10px_0px_rgba(168,28,33,0.5)] md:shadow-[15px_15px_0px_rgba(168,28,33,0.5)] overflow-hidden bg-zinc-900 group aspect-[3/4] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=1000" 
                alt="BRM Tech Hub - Smartphone Repair" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 border-t-[3px] md:border-t-4 border-r-[3px] md:border-r-4 border-[#ffff00]"></div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 border-b-[3px] md:border-b-4 border-l-[3px] md:border-l-4 border-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
