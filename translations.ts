
export type TranslationContent = {
  nav: { directions: string; language: string };
  hero: { badge: string; h1: string; h1_yellow: string; h1_bottom: string; sub: string; cta: string };
  services: {
    title: string;
    items: { title: string; head: string; text: string }[];
  };
  about: { badge: string; h2: string; h2_yellow: string; h3: string; p1: string; p2: string; p2_highlight: string };
  footer: { location: string; opposite: string; hours: string; follow: string; map_btn: string };
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
      hours: "10:00 AM - 05:00 AM • EVERY DAY", follow: "FOLLOW US", map_btn: "GOOGLE MAPS"
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
      hours: "10:00 - 05:00 • TUTTI I GIORNI", follow: "SEGUICI", map_btn: "MAPPA GOOGLE"
    }
  },
  es: {
    nav: { directions: "DIRECCIONES", language: "IDIOMA" },
    hero: { 
      badge: "10:00 - 05:00 • MILANO CENTRALE", 
      h1: "SNACKS.", h1_yellow: "CHIPS.", h1_bottom: "BEBIDAS.", 
      sub: "BRM MINI MARKET • VIA VITRUVIO 40 • MILÁN", 
      cta: "NUESTROS SERVICIOS" 
    },
    services: {
      title: "QUÉ HACEMOS",
      items: [
        { title: "DEPÓSITO", head: "EQUIPAJE.", text: "Consigna de equipaje segura junto a la Estación Central. Vigilancia 24/7." },
        { title: "MERCADO", head: "LICORES.", text: "Licores premium, cervezas frías y snacks internacionales para tu viaje." },
        { title: "TECH", head: "REPARACIÓN.", text: "Reparación rápida de pantalla y batería. Accesorios certificados." },
        { title: "OFICINA", head: "IMPRESIÓN.", text: "Imprime tu tarjeta de embarque y escanea documentos al instante." },
        { title: "DINERO", head: "RIA MONEY.", text: "Envía dinero a todo el mundo de forma segura con nuestro punto Ria." },
        { title: "VIAJE", head: "EQUIPO.", text: "Maletas, cargadores y esenciales para tu próximo destino." }
      ]
    },
    about: {
      badge: "LA_HISTORIA",
      h2: "MÁS ALLÁ DEL", h2_yellow: "MERCADO.",
      h3: "El Hub en Via Vitruvio 40.",
      p1: "BRM es la parada definitiva para viajeros en Milán. Sabemos que necesitas rapidez.",
      p2: "Desde una bebida fría hasta un móvil reparado, somos tu",
      p2_highlight: "conexión 24/7 en Milán."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Situado directamente frente a la Estación Central.",
      hours: "10:00 - 05:00 • TODOS LOS DÍAS", follow: "SÍGUENOS", map_btn: "GOOGLE MAPS"
    }
  },
  fr: {
    nav: { directions: "DIRECTIONS", language: "LANGUE" },
    hero: { 
      badge: "10:00 - 05:00 • MILANO CENTRALE", 
      h1: "SNACKS.", h1_yellow: "CHIPS.", h1_bottom: "BOISSONS.", 
      sub: "BRM MINI MARKET • VIA VITRUVIO 40 • MILAN", 
      cta: "NOS SERVICES" 
    },
    services: {
      title: "NOS SERVICES",
      items: [
        { title: "STOCKAGE", head: "BAGAGES.", text: "Consigne à bagages sécurisée à côté de la gare centrale. Surveillance 24/7." },
        { title: "MARCHÉ", head: "ALCOOLS.", text: "Spiritueux premium, bières fraîches et snacks internationaux." },
        { title: "TECH", head: "RÉPARATION.", text: "Réparation rapide d'écran et batterie. Accessoires certifiés." },
        { title: "BUREAU", head: "IMPRESSION.", text: "Imprimez vos cartes d'embarquement et scannez vos documents." },
        { title: "ARGENT", head: "RIA MONEY.", text: "Envoyez de l'argent dans le monde entier en toute sécurité." },
        { title: "VOYAGE", head: "ACCESSOIRES.", text: "Valises, chargeurs et essentiels de voyage pour votre destination." }
      ]
    },
    about: {
      badge: "L_HISTOIRE",
      h2: "PLUS QU'UN", h2_yellow: "MARCHÉ.",
      h3: "Le Hub au 40 Via Vitruvio.",
      p1: "BRM est l'escale ultime pour les voyageurs à Milan. Nous sommes ouverts quand les autres ferment.",
      p2: "D'une boisson fraîche à un téléphone réparé, nous sommes votre",
      p2_highlight: "connexion 24/7 à Milan."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Situé directement en face de la gare centrale.",
      hours: "10:00 - 05:00 • TOUS LES JOURS", follow: "SUIVEZ-NOUS", map_btn: "GOOGLE MAPS"
    }
  },
  bn: {
    nav: { directions: "দিকনির্দেশ", language: "ভাষা" },
    hero: { 
      badge: "সকাল ১০:০০ - ভোর ০৫:০০ • মিলানো সেন্ট্রাল", 
      h1: "স্ন্যাকস।", h1_yellow: "চিপস।", h1_bottom: "পানীয়।", 
      sub: "বিআরএম মিনি মার্কেট • ভায়া ভিট্রুভিও ৪০ • মিলানো", 
      cta: "আমাদের সেবা" 
    },
    services: {
      title: "আমরা কী করি",
      items: [
        { title: "স্টোরেজ", head: "ব্যাগ ড্রপ।", text: "সেন্ট্রাল স্টেশনের পাশেই নিরাপদ লাগেজ স্টোরেজ। ২৪/৭ নজরদারি।" },
        { title: "মার্কেট", head: "পানীয় ও খাবার।", text: "প্রিমিয়াম লিকার, ঠান্ডা বিয়ার এবং আন্তর্জাতিক স্ন্যাকস।" },
        { title: "টেক", head: "টেক মেরামত।", text: "দ্রুত স্ক্রিন মেরামত এবং ব্যাটারি প্রতিস্থাপন।" },
        { title: "অফিস", head: "প্রিন্ট ও স্ক্যান।", text: "বোর্ডিং পাস প্রিন্ট এবং ডকুমেন্ট স্ক্যান করুন তাৎক্ষণিকভাবে।" },
        { title: "ক্যাশ", head: "রিয়া মানি।", text: "রিয়া মানি ট্রান্সফারের মাধ্যমে বিশ্বজুড়ে নিরাপদে টাকা পাঠান।" },
        { title: "ভ্রমণ", head: "ভ্রমণ গিয়ার।", text: "সুটকেস, চার্জার এবং ভ্রমণের প্রয়োজনীয় সরঞ্জাম।" }
      ]
    },
    about: {
      badge: "গল্প",
      h2: "মার্কেটের", h2_yellow: "বাইরে।",
      h3: "ভায়া ভিট্রুভিও ৪০-এর হাব।",
      p1: "মিলানোতে ভ্রমণকারীদের জন্য বিআরএম হলো সেরা স্টপ। আমরা জানি আপনার দ্রুত কিছু প্রয়োজন।",
      p2: "একটি ঠান্ডা পানীয় থেকে শুরু করে ফোন মেরামত পর্যন্ত, আমরা আপনার",
      p2_highlight: "২৪/৭ মিলানো কানেকশন।"
    },
    footer: {
      location: "ভায়া ভিট্রুভিও, ৪০", opposite: "সেন্ট্রাল স্টেশনের ঠিক বিপরীতে অবস্থিত।",
      hours: "সকাল ১০:০০ - ভোর ০৫:০০ • প্রতিদিন", follow: "আমাদের অনুসরণ করুন", map_btn: "গুগল ম্যাপস"
    }
  },
  ar: {
    nav: { directions: "الاتجاهات", language: "اللغة" },
    hero: { 
      badge: "١٠:٠٠ ص - ٠٥:٠٠ ص • ميلانو سنترالي", 
      h1: "وجبات.", h1_yellow: "شيبس.", h1_bottom: "مشروبات.", 
      sub: "بي آر إم ميني ماركت • شارع فيتروفيو ٤٠ • ميلانو", 
      cta: "خدماتنا" 
    },
    services: {
      title: "ماذا نفعل",
      items: [
        { title: "تخزين", head: "حقائب.", text: "تخزين آمن للحقائب بجانب المحطة المركزية. مراقبة ٢٤/٧." },
        { title: "ماركت", head: "مشروبات.", text: "مشروبات فاخرة، بيرة باردة، ووجبات خفيفة دولية." },
        { title: "تقنية", head: "إصلاح هاتف.", text: "إصلاح سريع للشاشة واستبدال البطارية." },
        { title: "مكتب", head: "طباعة.", text: "اطبع تذكرة السفر وامسح المستندات ضوئياً." },
        { title: "نقود", head: "ريا موني.", text: "أرسل الأموال حول العالم بأمان مع ريا." },
        { title: "سفر", head: "معدات سفر.", text: "حقائب سفر، شواحن، وأساسيات السفر." }
      ]
    },
    about: {
      badge: "القصة",
      h2: "أكثر من", h2_yellow: "ماركت.",
      h3: "مركزنا في شارع فيتروفيو ٤٠.",
      p1: "بي آر إم هي المحطة النهائية للمسافرين في ميلانو.",
      p2: "من مشروب بارد إلى هاتف تم إصلاحه، نحن",
      p2_highlight: "تواصلك في ميلانو ٢٤/٧."
    },
    footer: {
      location: "شارع فيتروفيو، ٤٠", opposite: "يقع مباشرة مقابل المحطة المركزية.",
      hours: "١٠:٠٠ ص - ٠٥:٠٠ ص • يومياً", follow: "تابعنا", map_btn: "خرائط جوجل"
    }
  },
  ur: {
    nav: { directions: "راستے", language: "زبان" },
    hero: { 
      badge: "10:00 AM - 05:00 AM • میلانو سنٹرل", 
      h1: "سنیکس۔", h1_yellow: "چپس۔", h1_bottom: "ڈنرنکس۔", 
      sub: "بی آر ایم منی مارکیٹ • ویا وٹروویو 40 • میلان", 
      cta: "ہماری خدمات" 
    },
    services: {
      title: "ہم کیا کرتے ہیں",
      items: [
        { title: "سٹوریج", head: "بیگ ڈراپ۔", text: "سنٹرل اسٹیشن کے ساتھ محفوظ سامان کا ذخیرہ۔ 24/7 نگرانی۔" },
        { title: "مارکیٹ", head: "ڈرنکس۔", text: "پریمیم مشروبات، ٹھنڈی بیئر، اور بین الاقوامی سنیکس۔" },
        { title: "ٹیک", head: "فون مرمت۔", text: "تیزی سے اسکرین کی مرمت اور بیٹری کی تبدیلی۔" },
        { title: "آفس", head: "پرنٹ۔", text: "اپنا بورڈنگ پاس پرنٹ کریں اور دستاویزات اسکین کریں۔" },
        { title: "کیش", head: "ریا منی۔", text: "ریا کے ذریعے دنیا بھر میں محفوظ طریقے سے پیسے بھیجیں۔" },
        { title: "سفر", head: "سامان سفر۔", text: "سوٹ کیس، چارجرز اور سفر کی ضروری اشیاء۔" }
      ]
    },
    about: {
      badge: "کہانی",
      h2: "مارکیٹ سے", h2_yellow: "آگے!",
      h3: "ویا وٹروویو 40 پر ہمارا مرکز۔",
      p1: "میلان میں مسافروں کے لیے بی آر ایم بہترین اسٹاپ ہے۔",
      p2: "ایک ٹھنڈے مشروب سے لے کر ٹھیک فون تک، ہم آپ کا",
      p2_highlight: "میلان 24/7 کنکشن ہیں۔"
    },
    footer: {
      location: "ویا وٹروویو، 40", opposite: "سنٹرل اسٹیشن کے بالکل سامنے واقع ہے۔",
      hours: "10:00 AM - 05:00 AM • ہر روز", follow: "ہمیں فالو کریں", map_btn: "گوگل میپس"
    }
  }
};
