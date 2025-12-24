
import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-[#990000] py-12 md:py-16 px-5 text-center border-t border-white/20 relative overflow-hidden">
      {/* Decorative Scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* OFFICIAL SERVICE PROTOCOLS */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <span className="h-[1px] w-8 md:w-16 bg-white/30"></span>
            <h3 className="text-white font-mono text-[10px] md:text-xs opacity-70 tracking-[0.4em] uppercase">
              CERTIFIED_SERVICE_PARTNERS
            </h3>
            <span className="h-[1px] w-8 md:w-16 bg-white/30"></span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
            {[
              "Ria", "Lycamobile", "Samsung", "Apple", "Huawei", 
              "Android", "Xiaomi", "Redmi", "Oppo", "TCL"
            ].map((service) => (
              <div 
                key={service} 
                className="bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-none flex items-center shadow-[4px_4px_0px_rgba(0,0,0,0.3)] border-2 border-transparent hover:border-black hover:scale-105 hover:bg-white transition-all duration-300 cursor-default group"
              >
                <span className="text-black font-black text-xs md:text-sm tracking-tight uppercase group-hover:scale-110 transition-transform">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECURE PAYMENT CLEARANCE */}
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-10">
          <h3 className="text-white/50 font-mono text-[9px] mb-6 tracking-[0.3em] uppercase">
            WE ACCEPT
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", alt: "Visa" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", alt: "Mastercard" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg", alt: "Amex" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg", alt: "Apple Pay" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg", alt: "Google Pay" }
            ].map((payment) => (
              <div 
                key={payment.alt} 
                className="bg-white/90 h-8 md:h-10 px-4 py-2 rounded-none flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all duration-300 group overflow-hidden grayscale hover:grayscale-0"
              >
                <img 
                  src={payment.src} 
                  alt={payment.alt} 
                  className="h-full w-auto object-contain max-w-[50px] md:max-w-[70px] group-hover:scale-110 transition-transform"
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
