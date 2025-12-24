
import React from 'react';
import { Beer, Briefcase, Smartphone, Printer, Globe, Package } from 'lucide-react';

const icons = [<Briefcase />, <Beer />, <Smartphone />, <Printer />, <Globe />, <Package />];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  headline: string;
  text: string;
}> = ({ icon, title, headline, text }) => (
  <div className="border-4 lg:border-8 border-white p-5 md:p-8 flex flex-col items-start gap-3 md:gap-4 h-full hover:bg-white group transition-all duration-300">
    <div className="text-[#ffff00] group-hover:text-[#a81c21] transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 32, className: "md:w-12 md:h-12" })}
    </div>
    <span className="text-white bg-black group-hover:bg-[#a81c21] px-2 py-0.5 md:py-1 text-[8px] md:text-xs font-black tracking-widest uppercase">
      {title}
    </span>
    <h3 className="font-oswald text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-[#a81c21] leading-none uppercase">
      {headline}
    </h3>
    <p className="text-white group-hover:text-[#a81c21] text-sm md:text-lg font-medium leading-snug md:leading-tight">
      {text}
    </p>
  </div>
);

interface ServicesProps {
  t: { title: string; items: { title: string; head: string; text: string }[] };
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
