
import React from 'react';
import { Beer, Briefcase, Smartphone, Printer, Globe, Package } from 'lucide-react';

const icons = [<Briefcase />, <Beer />, <Smartphone />, <Printer />, <Globe />, <Package />];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  headline: string;
  text: string;
}> = ({ icon, title, headline, text }) => (
  <div className="border-[4px] xs:border-[6px] md:border-[8px] border-white p-5 xxs:p-7 md:p-12 flex flex-col items-start gap-4 md:gap-6 h-full hover:bg-white group transition-all duration-300 relative overflow-hidden shadow-2xl">
    <div className="text-[#ffff00] group-hover:text-[#a81c21] transition-all duration-300 transform group-hover:scale-110">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 40, className: "md:w-14 md:h-14", strokeWidth: 3 })}
    </div>
    
    <div className="flex flex-col gap-1 md:gap-2 w-full">
      <span className="inline-block text-white bg-black group-hover:bg-[#a81c21] px-2 md:px-3 py-0.5 md:py-1 text-[9px] md:text-xs font-black tracking-widest uppercase self-start">
        {title}
      </span>
      <h3 className="font-oswald text-3xl xxs:text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-[#a81c21] leading-[0.9] uppercase tracking-tighter">
        {headline}
      </h3>
    </div>

    <p className="text-white/80 group-hover:text-black text-sm xxs:text-base md:text-2xl font-bold leading-tight">
      {text}
    </p>

    <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-white group-hover:text-black font-black text-4xl md:text-6xl">/</div>
    </div>
  </div>
);

interface ServicesProps {
  t: { title: string; items: { title: string; head: string; text: string }[] };
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-8 max-w-[1440px] mx-auto">
      <h2 className="text-white font-oswald text-3xl md:text-6xl mb-10 md:mb-20 uppercase tracking-widest border-l-4 md:border-l-8 border-[#ffff00] pl-4 md:pl-6">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 md:gap-12">
        {t.items.map((item, idx) => (
          <ServiceCard 
            key={idx}
            icon={icons[idx]}
            title={item.title}
            headline={item.head}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
