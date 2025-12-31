
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC<{ lang: string }> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "393275960880"; 

  const translations: Record<string, { msg: string; chat: string; call: string }> = {
    en: { 
      msg: "Hello! I need help with Bag Drop / Market services.", 
      chat: "WHATSAPP CHAT", 
      call: "CALL NOW" 
    },
    it: { 
      msg: "Ciao! Ho bisogno di aiuto per i servizi Bag Drop / Market.", 
      chat: "CHAT WHATSAPP", 
      call: "CHIAMA ORA" 
    },
    bn: { 
      msg: "হ্যালো! আমি সাহায্য চাই।", 
      chat: "হোয়াটসঅ্যাপ চ্যাট", 
      call: "কল করুন" 
    },
    es: { 
      msg: "¡Hola! Necesito ayuda.", 
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

  const isRtl = lang === 'ar' || lang === 'ur';

  return (
    <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-[90] flex flex-col gap-4 items-end`}>
      
      {/* Call Button Group */}
      <div className={`flex items-center gap-3 group/call`}>
        <div className={`hidden md:block bg-black border-2 border-white px-4 py-2 opacity-0 group-hover/call:opacity-100 transition-all shadow-[4px_4px_0px_rgba(255,255,255,1)]`}>
          <span className="text-white font-black text-xs uppercase tracking-widest">{t.call}</span>
        </div>
        <button 
          onClick={handleCall}
          className="bg-[#ffff00] text-black p-4 md:p-5 rounded-none border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 neon-call"
        >
          <Phone size={28} strokeWidth={4} className="md:w-8 md:h-8" />
        </button>
      </div>

      {/* WhatsApp Button Group */}
      <div className={`flex items-center gap-3 group/chat`}>
        <div className={`hidden md:block bg-black border-2 border-white px-4 py-2 opacity-0 group-hover/chat:opacity-100 transition-all shadow-[4px_4px_0px_rgba(255,255,255,1)]`}>
          <span className="text-white font-black text-xs uppercase tracking-widest">{t.chat}</span>
        </div>
        <button 
          onClick={handleChat}
          className="relative bg-[#25D366] text-white p-4 md:p-5 rounded-none border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 neon-whatsapp"
        >
          <MessageCircle size={28} strokeWidth={4} className="md:w-8 md:h-8" />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#ffff00] border-2 border-black rounded-none flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#ffff00] opacity-75"></span>
            <span className="relative text-[10px] text-black font-black">!</span>
          </span>
        </button>
      </div>

      <style>{`
        .neon-whatsapp { box-shadow: 6px 6px 0px rgba(0,0,0,1), 0 0 20px rgba(37, 211, 102, 0.4); }
        .neon-call { box-shadow: 6px 6px 0px rgba(0,0,0,1), 0 0 20px rgba(255, 255, 0, 0.4); }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;
