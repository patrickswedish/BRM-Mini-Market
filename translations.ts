
export type TranslationContent = {
  nav: { directions: string; language: string };
  hero: { badge: string; h1: string; h1_yellow: string; h1_bottom: string; sub: string; cta: string };
  services: {
    title: string;
    items: { title: string; head: string; text: string }[];
  };
  about: { badge: string; h2: string; h2_yellow: string; h3: string; p1: string; p2: string; p2_highlight: string };
  footer: { location: string; opposite: string; hours: string; follow: string; map_btn: string; terms: string; privacy: string };
};

export const translations: Record<string, TranslationContent> = {
  en: {
    nav: { directions: "DIRECTIONS", language: "LANGUAGE" },
    hero: { 
      badge: "10:00 AM - 05:00 AM • MILANO CENTRALE", 
      h1: "SNACKS.", h1_yellow: "CHIPS.", h1_bottom: "DRINKS.", 
      sub: "BRM MINI MARKET • VIA VITRUVIO 40 • MILANO", 
      cta: "OUR SERVICES" 
    },
    services: {
      title: "WHAT WE DO",
      items: [
        { title: "STORAGE", head: "BAG DROP.", text: "Safe and secure luggage storage right next to Central Station. 24/7 surveillance." },
        { title: "MARKET", head: "LIQUOR & SNACKS.", text: "Premium spirits, cold beers, and international snacks for your journey." },
        { title: "TECH", head: "TECH REPAIR.", text: "Fast screen repair and battery replacement. Certified accessories for all phones." },
        { title: "OFFICE", head: "PRINT & SCAN.", text: "Need your boarding pass? Print, copy, and scan documents instantly." },
        { title: "CASH", head: "RIA MONEY.", text: "Send money worldwide safely and quickly with our authorized Ria point." },
        { title: "TRAVEL", head: "TRAVEL GEAR.", text: "Suitcases, chargers, and travel essentials for your next destination." }
      ]
    },
    about: {
      badge: "THE_STORY",
      h2: "BEYOND THE", h2_yellow: "MARKET.",
      h3: "The Hub at Via Vitruvio 40.",
      p1: "BRM is the ultimate pitstop for travelers in Milano. We know you need things fast and we stay open when others close.",
      p2: "From a cold drink to a fixed phone, we are your",
      p2_highlight: "24/7 Milano connection."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Located directly opposite the Central Station.",
      hours: "10:00 AM - 05:00 AM • EVERY DAY", follow: "FOLLOW US", map_btn: "GOOGLE MAPS",
      terms: "TERMS", privacy: "PRIVACY"
    }
  },
  it: {
    nav: { directions: "INDICAZIONI", language: "LINGUA" },
    hero: { 
      badge: "10:00 - 05:00 • MILANO CENTRALE", 
      h1: "SNACK.", h1_yellow: "PATATINE.", h1_bottom: "BIBITE.", 
      sub: "BRM MINI MARKET • VIA VITRUVIO 40 • MILANO", 
      cta: "I NOSTRI SERVIZI" 
    },
    services: {
      title: "I NOSTRI SERVIZI",
      items: [
        { title: "DEPOSITO", head: "BAG DROP.", text: "Deposito bagagli sicuro accanto alla Stazione Centrale. Sorveglianza 24/7." },
        { title: "MARKET", head: "LIQUORI & SNACK.", text: "Liquori premium, birre fredde e snack internazionali per il tuo viaggio." },
        { title: "TECH", head: "RIPARAZIONI.", text: "Riparazione schermo e batteria veloce. Accessori certificati per tutti i telefoni." },
        { title: "UFFICIO", head: "STAMPA & SCAN.", text: "Stampa carta d'imbarco, fotocopie e scansioni documenti istantanee." },
        { title: "SOLDI", head: "RIA MONEY.", text: "Invia denaro in tutto il mondo in modo sicuro con il nostro punto Ria." },
        { title: "VIAGGIO", head: "ACCESSORI.", text: "Valigie, caricatori e tutto il necessario per la tua prossima meta." }
      ]
    },
    about: {
      badge: "LA_STORIA",
      h2: "OLTRE IL", h2_yellow: "MARKET.",
      h3: "Il Punto in Via Vitruvio 40.",
      p1: "BRM è la tappa fondamentale per i viaggiatori a Milano. Sappiamo che hai bisogno di velocità e siamo aperti quando gli altri chiudono.",
      p2: "Da una bibita fresca a un telefono riparato, siamo il tuo",
      p2_highlight: "contatto 24/7 a Milano."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Situato proprio di fronte alla Stazione Centrale.",
      hours: "10:00 - 05:00 • TUTTI I GIORNI", follow: "SEGUICI", map_btn: "MAPPA GOOGLE",
      terms: "TERMINI", privacy: "PRIVACY"
    }
  }
};
