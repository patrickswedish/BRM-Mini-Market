
import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-[#990000] py-10 md:py-[40px] px-5 text-center border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* OFFICIAL SERVICES */}
        <div className="mb-10 md:mb-[40px]">
          <h3 className="text-white font-sans text-sm mb-5 opacity-80 tracking-[1px] uppercase">
            OFFICIAL SERVICES
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "Ria", "Lycamobile", "Samsung", "Apple", "Huawei", 
              "Android", "Xiaomi", "Redmi", "Oppo", "TCL"
            ].map((service) => (
              <div 
                key={service} 
                className="bg-white px-4 py-2 rounded-[6px] flex items-center shadow-md border border-black/5 hover:scale-110 hover:shadow-xl hover:bg-zinc-50 transition-all duration-300 cursor-default"
              >
                <span className="text-black font-black text-xs md:text-sm tracking-tight uppercase">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WE ACCEPT */}
        <div>
          <h3 className="text-white font-sans text-[12px] mb-[15px] opacity-60 tracking-[1px] uppercase">
            WE ACCEPT
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-[12px] md:gap-[16px]">
            
            {/* Standardized Payment Card Component */}
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", alt: "Visa" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", alt: "Mastercard" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg", alt: "Amex" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg", alt: "Apple Pay" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg", alt: "Google Pay" }
            ].map((payment) => (
              <div 
                key={payment.alt} 
                className="bg-white h-[32px] md:h-[40px] px-3 py-1.5 rounded-[6px] flex items-center justify-center shadow-sm border border-black/5 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <img 
                  src={payment.src} 
                  alt={payment.alt} 
                  className="h-full w-auto object-contain max-w-[50px] md:max-w-[60px]"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
