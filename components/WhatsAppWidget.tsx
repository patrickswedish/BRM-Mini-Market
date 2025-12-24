
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC<{ lang: string }> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  // Phone number: 3275960880 with Italy prefix 39
  const phoneNumber = "393275960880"; 

  // Support messages and labels
  const translations: Record<string, { msg: string; chat: string; call: string }> = {
    en: { 
      msg: "Hello! I need assistance with your services.", 
      chat: "WHATSAPP CHAT", 
      call: "CALL SUPPORT" 
    },
    it: { 
      msg: "Ciao! Ho bisogno di assistenza per i vostri servizi.", 
      chat: "CHAT WHATSAPP", 
      call: "CHIAMA ORA" 
    },
    bn: { 
      msg: "হ্যালো! আমি আপনার পরিষেবা সম্পর্কে সাহায্য চাই।", 
      chat: "হোয়াটসঅ্যাপ চ্যাট", 
      call: "কল করুন" 
    },
    es: { 
      msg: "¡Hola! Necesito asistencia con sus servicios.", 
      chat: "CHAT WHATSAPP", 
      call: "LLAMAR AHORA" 
    }
  };

  const t = translations[lang] || translations['en'];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.msg)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  if (!isVisible) return null;

  const isRtl = lang === 'ar';

  return (
    <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-[100] flex flex-col gap-4 items-end`}>
      
      {/* Call Button Group */}
      <div className={`flex items-center gap-3 group/call animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150`}>
        <div className={`hidden md:block bg-black border-2 border-white px-4 py-2 opacity-0 group-hover/call:opacity-100 transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,1)] translate-x-2 group-hover/call:translate-x-0`}>
          <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
            {t.call}
          </span>
        </div>
        <button 
          onClick={handleCall}
          className="relative bg-[#ffff00] text-black p-4 md:p-5 rounded-none border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 neon-call"
          aria-label="Call support directly"
        >
          <Phone size={28} strokeWidth={3} className="md:w-8 md:h-8" />
        </button>
      </div>

      {/* WhatsApp Button Group */}
      <div className={`flex items-center gap-3 group/chat animate-in fade-in slide-in-from-bottom-4 duration-500`}>
        <div className={`hidden md:block bg-black border-2 border-white px-4 py-2 opacity-0 group-hover/chat:opacity-100 transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,1)] translate-x-2 group-hover/chat:translate-x-0`}>
          <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
            {t.chat}
          </span>
        </div>
        <button 
          onClick={handleChat}
          className="relative bg-[#25D366] text-white p-4 md:p-5 rounded-none border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 neon-whatsapp"
          aria-label="Contact support on WhatsApp"
        >
          <MessageCircle size={28} strokeWidth={3} className="md:w-8 md:h-8" />
          
          {/* Pulsating Notification Dot */}
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#ffff00] border-2 border-black rounded-none flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#ffff00] opacity-75"></span>
            <span className="relative text-[10px] text-black font-black">1</span>
          </span>
        </button>
      </div>

      <style>{`
        .neon-whatsapp {
          box-shadow: 6px 6px 0px rgba(0,0,0,1), 0 0 20px rgba(37, 211, 102, 0.4);
        }
        .neon-whatsapp:hover {
          box-shadow: 2px 2px 0px rgba(0,0,0,1), 0 0 30px rgba(37, 211, 102, 0.6);
        }
        .neon-call {
          box-shadow: 6px 6px 0px rgba(0,0,0,1), 0 0 20px rgba(255, 255, 0, 0.4);
        }
        .neon-call:hover {
          box-shadow: 2px 2px 0px rgba(0,0,0,1), 0 0 30px rgba(255, 255, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;
