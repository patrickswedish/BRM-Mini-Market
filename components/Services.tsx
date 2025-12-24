
import React from 'react';
import { Beer, Briefcase, Smartphone, Printer, Globe, Package } from 'lucide-react';

const icons = [<Briefcase />, <Beer />, <Smartphone />, <Printer />, <Globe />, <Package />];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  headline: string;
  text: string;
}> = ({ icon, title, headline, text }) => (
  <div className="border-[8px] border-white p-8 md:p-12 flex flex-col items-start gap-6 h-full hover:bg-white group transition-all duration-300 relative overflow-hidden shadow-2xl">
    <div className="text-[#ffff00] group-hover:text-[#a81c21] transition-all duration-300 transform group-hover:scale-110">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 56, strokeWidth: 3 })}
    </div>
    
    <div className="flex flex-col gap-2 w-full">
      <span className="inline-block text-white bg-black group-hover:bg-[#a81c21] px-3 py-1 text-xs font-black tracking-widest uppercase self-start">
        {title}
      </span>
      <h3 className="font-oswald text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-[#a81c21] leading-[0.9] uppercase tracking-tighter">
        {headline}
      </h3>
    </div>

    <p className="text-white/80 group-hover:text-black text-lg md:text-2xl font-bold leading-tight">
      {text}
    </p>

    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="absolute bottom-4 right-4 text-white group-hover:text-black font-black text-6xl">/</div>
    </div>
  </div>
);

interface ServicesProps {
  t: { title: string; items: { title: string; head: string; text: string }[] };
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-white font-oswald text-4xl md:text-6xl mb-12 md:mb-20 uppercase tracking-widest border-l-8 border-[#ffff00] pl-6">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
