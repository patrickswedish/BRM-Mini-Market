
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
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "LIQUOR.", h1_yellow: "SNACKS.", h1_bottom: "OPEN LATE.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "EXPLORE SHOP" 
    },
    services: {
      title: "OUR SERVICES",
      items: [
        { title: "TRAVEL & LUGGAGE", head: "BAG DROP & SUITCASES.", text: "Secure luggage storage for travelers. We sell trolleys and travel bags at the best prices." },
        { title: "LIQUOR & MARKET", head: "COLD DRINKS.", text: "Premium liquor, cold beers, and wines. We also stock snacks and travel toiletries." },
        { title: "TECH & REPAIRS", head: "FAST REPAIRS.", text: "Broken screen or dead battery? Quick smartphone repairs and accessories available." },
        { title: "PRINTING", head: "PHOTOCOPY & PRINT.", text: "Print boarding passes and documents instantly. Scan and email services available." },
        { title: "MONEY TRANSFER", head: "RIA MONEY TRANSFER.", text: "Send and receive money worldwide instantly. Fast and secure international transfers." },
        { title: "ESSENTIALS", head: "TOILETRIES.", text: "Forgot your toothbrush? We have travel-size hygiene products for your trip." }
      ]
    },
    about: {
      badge: "About_The_Hub",
      h2: "MORE THAN JUST", h2_yellow: "A MARKET.",
      h3: "The Travelers' Hub at Via Vitruvio 40.",
      p1: "Welcome to BRM Mini Market, your essential stop in the heart of Milan, situated right next to Milano Centrale.",
      p2: "We stock the essentials you can't find late at night. We are your",
      p2_highlight: "local problem solvers."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Opposite the Central Station area.",
      hours: "10:00 AM - 05:00 AM • Mon - Sun", follow: "Follow Us", map_btn: "VIEW LARGER MAP",
      terms: "TERMS OF SERVICE", privacy: "PRIVACY POLICY"
    }
  },
  it: {
    nav: { directions: "INDICAZIONI", language: "LINGUA" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "LIQUORI.", h1_yellow: "SNACK.", h1_bottom: "APERTO TARDI.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "ESPLORA" 
    },
    services: {
      title: "I NOSTRI SERVIZI",
      items: [
        { title: "VIAGGI E VALIGIE", head: "DEPOSITO BAGAGLI.", text: "Deposito bagagli sicuro. Vendiamo trolley e borse da viaggio ai migliori prezzi." },
        { title: "LIQUORI E MARKET", head: "BEVANDE FREDDE.", text: "Liquori premium, birre fredde e vini. Snack e articoli da toeletta disponibili." },
        { title: "TECH E RIPARAZIONI", head: "RIPARAZIONI RAPIDE.", text: "Schermo rotto? Riparazioni rapide di smartphone e accessori disponibili." },
        { title: "STAMPA", head: "FOTOCOPIE E STAMPA.", text: "Stampa biglietti e documenti istantaneamente. Servizi di scansione disponibili." },
        { title: "MONEY TRANSFER", head: "RIA MONEY TRANSFER.", text: "Invia e ricevi denaro in tutto il mondo istantaneamente. Sicuro e veloce." },
        { title: "ESSENZIALI", head: "IGIENE PERSONALE.", text: "Dimenticato lo spazzolino? Abbiamo prodotti da viaggio per la tua igiene." }
      ]
    },
    about: {
      badge: "Info_Hub",
      h2: "MOLTO PIÙ DI UN", h2_yellow: "MERCATO.",
      h3: "Il punto di riferimento in Via Vitruvio 40.",
      p1: "Benvenuti al BRM Mini Market, la vostra tappa essenziale nel cuore di Milano, situata proprio accanto alla Stazione Centrale.",
      p2: "Abbiamo tutto ciò che serve a tarda notte. Siamo i vostri",
      p2_highlight: "risolutori di problemi locali."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Di fronte alla Stazione Centrale.",
      hours: "10:00 - 05:00 • Lun - Dom", follow: "Seguici", map_btn: "MAPPA GRANDE",
      terms: "TERMINI DI SERVIZIO", privacy: "PRIVACY POLICY"
    }
  },
  bn: {
    nav: { directions: "দিকনির্দেশ", language: "ভাষা" },
    hero: { 
      badge: "মিলানো সেন্ট্রালে • ভায়া ভিট্রিউভিও ৪০", 
      h1: "মদ।", h1_yellow: "খাবার।", h1_bottom: "দেরি পর্যন্ত খোলা।", 
      sub: "বিআরএম মিনি মার্কেট ও টেক হাব", 
      cta: "দোকান দেখুন" 
    },
    services: {
      title: "আমাদের সেবা",
      items: [
        { title: "ভ্রমণ ও লাগেজ", head: "ব্যাগ জমা এবং সুটকেস।", text: "ভ্রমণকারীদের জন্য নিরাপদ লাগেজ স্টোরেজ। আমরা সাশ্রয়ী মূল্যে ট্রলি এবং ব্যাগ বিক্রি করি।" },
        { title: "পানীয় ও মার্কেট", head: "ঠাণ্ডা পানীয়।", text: "প্রিমিয়াম লিকার, ঠাণ্ডা বিয়ার এবং ওয়াইন। স্ন্যাকস এবং প্রয়োজনীয় জিনিসপত্র আছে।" },
        { title: "টেক ও মেরামত", head: "দ্রুত মেরামত।", text: "মোবাইল স্ক্রিন ভাঙা? দ্রুত স্মার্টফোন মেরামত এবং এক্সেসরিজ এখানে পাওয়া যায়।" },
        { title: "প্রিন্টিং", head: "ফটোকপি এবং প্রিন্ট।", text: "বোর্ডিং পাস এবং প্রয়োজনীয় ডকুমেন্ট তাৎক্ষণিক প্রিন্ট করুন। স্ক্যান সুবিধাও আছে।" },
        { title: "টাকা পাঠানো", head: "রিয়া মানি ট্রান্সফার।", text: "তাৎক্ষণিকভাবে বিশ্বজুড়ে টাকা পাঠান এবং গ্রহণ করুন। নিরাপদ ও দ্রুত মাধ্যম।" },
        { title: "প্রয়োজনীয় জিনিস", head: "টয়লেট্রিজ।", text: "ব্রাশ নিতে ভুলে গেছেন? আপনার ভ্রমণের জন্য সব ধরণের প্রয়োজনীয় হাইজিন পণ্য আছে।" }
      ]
    },
    about: {
      badge: "হাব_সম্পর্কে",
      h2: "শুধু একটি", h2_yellow: "মার্কেট নয়।",
      h3: "ভায়া ভিট্রিউভিও ৪০-এ ভ্রমণকারীদের ঠিকানা।",
      p1: "বিআরএম মিনি মার্কেটে স্বাগতম, মিলানের হৃদয়ে আপনার প্রয়োজনীয় গন্তব্য। মিলানো সেন্ট্রাল স্টেশনের পাশেই আমাদের অবস্থান।",
      p2: "গভীর রাতে আপনার যা প্রয়োজন সবই পাবেন আমাদের কাছে। আমরা আপনার",
      p2_highlight: "স্থানীয় সমস্যার সমাধানকারী।"
    },
    footer: {
      location: "ভায়া ভিট্রিউভিও, ৪০", opposite: "সেন্ট্রাল স্টেশনের বিপরীতে।",
      hours: "সকাল ১০:০০ - রাত ০৫:০০ • সোম - রবি", follow: "আমাদের অনুসরণ করুন", map_btn: "বড় ম্যাপ দেখুন",
      terms: "শর্তাবলী", privacy: "গোপনীয়তা নীতি"
    }
  },
  es: {
    nav: { directions: "DIRECCIONES", language: "IDIOMA" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "LICORES.", h1_yellow: "SNACKS.", h1_bottom: "ABIERTO TARDE.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "EXPLORAR TIENDA" 
    },
    services: {
      title: "NUESTROS SERVICIOS",
      items: [
        { title: "VIAJE Y EQUIPAJE", head: "DEPÓSITO DE MALETAS.", text: "Consigna de equipaje segura. Vendemos maletas y bolsos de viaje al mejor precio." },
        { title: "LICORES Y MERCADO", head: "BEBIDAS FRÍAS.", text: "Licores premium, cervezas frías y vinos. También snacks y artículos de aseo." },
        { title: "TECNOLOGÍA", head: "REPARACIONES RÁPIDAS.", text: "¿Pantalla rota? Reparaciones rápidas de smartphones y accesorios disponibles." },
        { title: "IMPRESIÓN", head: "FOTOCOPIAS E IMPRESIÓN.", text: "Imprima tarjetas de embarque al instante. Servicios de escaneo disponibles." },
        { title: "TRANSFERENCIA", head: "RIA MONEY TRANSFER.", text: "Envíe y reciba dinero en todo el mundo al instante. Seguro y rápido." },
        { title: "ESENCIALES", head: "ASEO PERSONAL.", text: "¿Olvidó su cepillo? Tenemos productos de higiene de viaje para su viaje." }
      ]
    },
    about: {
      badge: "Sobre_El_Hub",
      h2: "MÁS QUE", h2_yellow: "UN MERCADO.",
      h3: "El centro de viajeros en Via Vitruvio 40.",
      p1: "Bienvenidos a BRM Mini Market, su parada esencial en el corazón de Milán, situada justo al lado de la Estación Central.",
      p2: "Tenemos lo que necesita tarde en la noche. Somos sus",
      p2_highlight: "solucionadores de problemas locales."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Frente a la zona de la Estación Central.",
      hours: "10:00 AM - 05:00 AM • Lun - Dom", follow: "Síguenos", map_btn: "VER MAPA GRANDE",
      terms: "TÉRMINOS DE SERVICIO", privacy: "POLÍTICA DE PRIVACIDAD"
    }
  },
  zh: {
    nav: { directions: "获取路线", language: "语言" },
    hero: { 
      badge: "米兰中央火车站 • Via Vitruvio 40", 
      h1: "名酒。", h1_yellow: "零食。", h1_bottom: "营业至深夜。", 
      sub: "BRM 迷你超市与科技中心", 
      cta: "进店查看" 
    },
    services: {
      title: "我们的服务",
      items: [
        { title: "旅游与行李", head: "行李寄存与旅行箱。", text: "为旅客提供安全的行李寄存。我们以最优惠的价格出售行李箱和旅行包。" },
        { title: "酒类与超市", head: "冷饮与零食。", text: "优质烈酒、冰啤酒和葡萄酒。我们还备有零食和旅行洗漱用品。" },
        { title: "科技与维修", head: "快速维修。", text: "屏幕破碎或电池损坏？提供快速智能手机维修及配件。" },
        { title: "打印服务", head: "复印与打印。", text: "即时打印登机牌和文档。提供扫描和电子邮件服务。" },
        { title: "汇款服务", head: "RIA 国际汇款。", text: "即时向全球汇款或收款。授权代理商，快速安全。" },
        { title: "必备品", head: "洗漱用品。", text: "忘记带牙刷了？我们备有旅行装卫生用品，方便您的旅程。" }
      ]
    },
    about: {
      badge: "关于中心",
      h2: "不只是", h2_yellow: "一家超市。",
      h3: "位于 Via Vitruvio 40 的旅客中心。",
      p1: "欢迎光临 BRM 迷你超市，您在米兰市中心的重要补给站，就位于米兰中央火车站旁边。",
      p2: "我们备有您在深夜所需的一切。我们是您的",
      p2_highlight: "本地问题解决专家。"
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "中央火车站对面区域。",
      hours: "上午 10:00 - 凌晨 05:00 • 周一至周日", follow: "关注我们", map_btn: "查看大图",
      terms: "服务条款", privacy: "隐私政策"
    }
  },
  fr: {
    nav: { directions: "DIRECTIONS", language: "LANGUE" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "ALCOOLS.", h1_yellow: "SNACKS.", h1_bottom: "OUVERT TARD.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "EXPLORER" 
    },
    services: {
      title: "NOS SERVICES",
      items: [
        { title: "VOYAGE", head: "BAGAGERIE.", text: "Consigne à bagages sécurisée. Vente de valises et sacs au meilleur prix." },
        { title: "MARCHÉ", head: "BOISSONS FRAÎCHES.", text: "Alcools premium, bières fraîches et vins. Snacks et articles de toilette." },
        { title: "TECH", head: "RÉPARATIONS RAPIDES.", text: "Écran cassé? Réparations rapides de smartphones et accessoires." },
        { title: "IMPRESSION", head: "PHOTOCOPIE & IMPRESSION.", text: "Imprimez vos billets et documents instantanément. Service scan dispo." },
        { title: "MONEY TRANSFER", head: "RIA TRANSFERT D'ARGENT.", text: "Envoyez et recevez de l'argent mondialement. Sûr et rapide." },
        { title: "ESSENTIELS", head: "TOILETTE.", text: "Oublié votre brosse à dents? Produits d'hygiène format voyage dispo." }
      ]
    },
    about: {
      badge: "À_Propos",
      h2: "PLUS QU'UN", h2_yellow: "MARCHÉ.",
      h3: "Le hub des voyageurs à Via Vitruvio 40.",
      p1: "Bienvenue chez BRM Mini Market, votre arrêt essentiel au cœur de Milan, situé juste à côté de la Gare Centrale.",
      p2: "Nous avons l'essentiel pour vos nuits tardives. Nous sommes vos",
      p2_highlight: "dépanneurs locaux."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "En face de la Gare Centrale.",
      hours: "10:00 - 05:00 • Lun - Dim", follow: "Suivez-nous", map_btn: "VOIR LA CARTE",
      terms: "CONDITIONS D'UTILISATION", privacy: "POLITIQUE DE CONFIDENTIALITÉ"
    }
  },
  ar: {
    nav: { directions: "الاتجاهات", language: "اللغة" },
    hero: { 
      badge: "ميلانو سنترالي • شارع فيتروفيو 40", 
      h1: "مشروبات.", h1_yellow: "وجبات خفيفة.", h1_bottom: "مفتوح متأخراً.", 
      sub: "بي آر إم ميني ماركت والمركز التقني", 
      cta: "استكشف المتجر" 
    },
    services: {
      title: "خدماتنا",
      items: [
        { title: "السفر والأمتعة", head: "تخزين حقائب.", text: "تخزين آمن للأمتعة. نبيع حقائب السفر بأفضل الأسعار بالقرب من المحطة." },
        { title: "المتجر", head: "مشروبات باردة.", text: "مشروبات متميزة، وجبات خفيفة ومستلزمات السفر الضرورية." },
        { title: "التقنية والتصليح", head: "تصليح سريع.", text: "شاشة مكسورة؟ تصليح سريع للهواتف الذكية مع توفر جميع الملحقات." },
        { title: "الطباعة", head: "تصوير وطباعة.", text: "طباعة تذاكر الطيران والمستندات فوراً. تتوفر خدمات المسح الضوئي." },
        { title: "تحويل أموال", head: "ريا لتحويل الأموال.", text: "إرسال واستقبال الأموال حول العالم فوراً. تحويلات دولية سريعة وآمنة." },
        { title: "الضروريات", head: "أدوات تجميل.", text: "نسيت فرشاة أسنانك؟ لدينا منتجات النظافة الشخصية بحجم السفر." }
      ]
    },
    about: {
      badge: "عن_المركز",
      h2: "أكثر من مجرد", h2_yellow: "سوبر ماركت.",
      h3: "مركز المسافرين في شارع فيتروفيو 40.",
      p1: "مرحباً بكم في بي آر إم ميني ماركت، محطتكم الأساسية في قلب ميلانو، بجوار المحطة المركزية مباشرة.",
      p2: "نحن نوفر الضروريات التي لا تجدها في وقت متأخر. نحن",
      p2_highlight: "حلّالون المشاكل المحليون."
    },
    footer: {
      location: "شارع فيتروفيو، 40", opposite: "مقابل منطقة المحطة المركزية.",
      hours: "10:00 صباحاً - 05:00 فجراً • يومياً", follow: "تابعنا", map_btn: "عرض الخريطة الكبيرة",
      terms: "شروط الخدمة", privacy: "سياسة الخصوصية"
    }
  },
  hi: {
    nav: { directions: "दिशानिर्देश", language: "भाषा" },
    hero: { 
      badge: "मिलानो सेंट्रेल • वाया विट्रुवियो 40", 
      h1: "शराब।", h1_yellow: "स्नैक्स।", h1_bottom: "देर तक खुला।", 
      sub: "बीआरएम मिनी मार्केट और टेक हब", 
      cta: "दुकान देखें" 
    },
    services: {
      title: "हमारी सेवाएँ",
      items: [
        { title: "यात्रा और सामान", head: "सामान जमा और सूटकेस।", text: "यात्रियों के लिए सुरक्षित सामान रखने की सुविधा। हम किफ़ायती दामों पर ट्रॉली और बैग बेचते हैं।" },
        { title: "शराब और बाजार", head: "ठंडा पेय।", text: "प्रीमियम शराब, ठंडी बीयर और वाइन। स्नैक्स और आवश्यक सामान भी उपलब्ध हैं।" },
        { title: "टेक और मरम्मत", head: "तेजी से मरम्मत।", text: "टूटी स्क्रीन या खराब बैटरी? स्मार्टफोन की तत्काल मरम्मत और एक्सेसरीज उपलब्ध हैं।" },
        { title: "प्रिंटिंग", head: "फोटोकॉपी और प्रिंट।", text: "बोर्डिंग पास और दस्तावेज़ तुरंत प्रिंट करें। स्कैन सेवा भी उपलब्ध है।" },
        { title: "मनी ट्रांसफर", head: "रिया मनी ट्रांसफर।", text: "दुनिया भर में तुरंत पैसे भेजें और प्राप्त करें। तेज और सुरक्षित।" },
        { title: "ज़रूरी सामान", head: "हाइजीन उत्पाद।", text: "ब्रश भूल गए? आपकी यात्रा के लिए हमारे पास हाइजीन उत्पाद उपलब्ध हैं।" }
      ]
    },
    about: {
      badge: "हब_के_बारे_में",
      h2: "सिर्फ एक बाजार", h2_yellow: "से कहीं अधिक।",
      h3: "वाया विट्रुवियो 40 में यात्रियों का केंद्र।",
      p1: "बीआरएम मिनी मार्केट में आपका स्वागत है, जो मिलान के केंद्र में मिलानो सेंट्रेल के ठीक बगल में स्थित है।",
      p2: "हम वह ज़रूरी सामान रखते हैं जो आपको देर रात नहीं मिलता। हम आपके",
      p2_highlight: "स्थानीय समस्या समाधानकर्ता हैं।"
    },
    footer: {
      location: "वाया विट्रुवियो, 40", opposite: "सेंट्रल स्टेशन क्षेत्र के सामने।",
      hours: "सुबह 10:00 - सुबह 05:00 • सोम - रवि", follow: "हमें फॉलो करें", map_btn: "बड़ा मैप देखें",
      terms: "सेवा की शर्तें", privacy: "गोपनीयता नीति"
    }
  },
  ur: {
    nav: { directions: "راستے", language: "زبان" },
    hero: { 
      badge: "میلانو سینٹرل • ویا وٹروویو 40", 
      h1: "مشروبات۔", h1_yellow: "سنیکس۔", h1_bottom: "دیر تک खुला۔", 
      sub: "بی آر ایم منی مارکیٹ اور ٹیک ہب", 
      cta: "دکان دیکھیں" 
    },
    services: {
      title: "ہماری خدمات",
      items: [
        { title: "سفر اور سامان", head: "بیگ سٹوریج۔", text: "مسافروں کے لیے سامان رکھنے کی محفوظ جگہ۔ ہم مناسب قیمت پر بیگ بھی بیچتے ہیں۔" },
        { title: "مارکیٹ", head: "ٹھنڈے مشروبات۔", text: "اعلیٰ معیار کے مشروبات، ٹھنڈی بیئر اور وائن۔ سنیکس بھی دستیاب ہیں۔" },
        { title: "ٹیکنالوجی", head: "تیز مرمت۔", text: "ٹوٹی اسکرین؟ اسمارٹ فون کی فوری مرمت اور لوازمات دستیاب ہیں۔" },
        { title: "پرنٹنگ", head: "فوٹو کاپی اور پرنٹ۔", text: "دستاویزات اور بورڈنگ پاس فوری پرنٹ کریں۔ اسکیننگ بھی دستیاب ہے۔" },
        { title: "منی ٹرانسفر", head: "ریا منی ٹرانسفر۔", text: "پوری دنیا میں فوری رقم بھیجیں اور وصول کریں۔ تیز اور محفوظ۔" },
        { title: "ضروریات", head: "صفائی کی اشیاء۔", text: "برش بھول گئے؟ ہمارے پاس سفر کے لیے ضروری اشیاء موجود ہیں۔" }
      ]
    },
    about: {
      badge: "ہمارے_بارے_میں",
      h2: "صرف ایک مارکیٹ", h2_yellow: "نہیں بلکہ بہت کچھ۔",
      h3: "ویا وٹروویو 40 میں مسافروں کا مرکز۔",
      p1: "بی آر ایم منی مارکیٹ میں خوش آمدید، جو میلان کے دل میں میلانو سینٹرل کے بالکل ساتھ واقع ہے۔",
      p2: "ہم وہ ضروری سامان فراہم کرتے ہیں جو رات دیر سے نہیں ملتا۔ ہم آپ کے",
      p2_highlight: "مقامی مددگار ہیں۔"
    },
    footer: {
      location: "ویا وٹروویو، 40", opposite: "سینٹرل اسٹیشن کے سامنے۔",
      hours: "صبح 10:00 سے رات 05:00 تک", follow: "ہمیں فالو کریں", map_btn: "بڑا نقشہ دیکھیں",
      terms: "سروس کی شرائط", privacy: "رازداری کی پالیسی"
    }
  },
  pt: {
    nav: { directions: "DIREÇÕES", language: "IDIOMA" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "BEBIDAS.", h1_yellow: "SNACKS.", h1_bottom: "ABERTO TARDE.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "EXPLORAR LOJA" 
    },
    services: {
      title: "NOSSOS SERVIÇOS",
      items: [
        { title: "VIAGEM & BAGAGEM", head: "DEPÓSITO DE MALAS.", text: "Armazenamento seguro para viajantes. Vendemos malas e bolsas aos melhores preços." },
        { title: "BEBIDAS & MARKET", head: "BEBIDAS GELADAS.", text: "Bebidas premium, cervejas geladas e vinhos. Snacks e higiene pessoal." },
        { title: "TECH & REPAROS", head: "REPAROS RÁPIDOS.", text: "Tela quebrada? Reparos rápidos de smartphones e acessórios disponíveis." },
        { title: "IMPRESSÃO", head: "CÓPIAS E IMPRESSÃO.", text: "Imprima cartões de embarque na hora. Serviços de scanner disponíveis." },
        { title: "TRANSFERÊNCIA", head: "RIA MONEY TRANSFER.", text: "Envie e receba dinheiro para o mundo todo instantaneamente. Seguro." },
        { title: "ESSENCIAIS", head: "HIGIENE.", text: "Esqueceu a escova de dentes? Temos produtos de higiene para sua viagem." }
      ]
    },
    about: {
      badge: "Sobre_O_Hub",
      h2: "MAIS DO QUE", h2_yellow: "UM MERCADO.",
      h3: "O hub dos viajantes na Via Vitruvio 40.",
      p1: "Bem-vindo ao BRM Mini Market, sua parada essencial no coração de Milão, ao lado da Estação Central.",
      p2: "Temos o que você precisa tarde da noite. Somos seus",
      p2_highlight: "solucionadores de problemas locais."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Em frente à Estação Central.",
      hours: "10:00 - 05:00 • Seg - Dom", follow: "Siga-nos", map_btn: "VER MAPA AMPLIADO",
      terms: "TERMOS DE SERVIÇO", privacy: "POLÍTICA DE PRIVACIDADE"
    }
  },
  ru: {
    nav: { directions: "МАРШРУТ", language: "ЯЗЫК" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "АЛКОГОЛЬ.", h1_yellow: "СНЭКИ.", h1_bottom: "ДОПОЗДНА.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "В МАГАЗИН" 
    },
    services: {
      title: "НАШИ УСЛУГИ",
      items: [
        { title: "БАГАЖ", head: "ХРАНЕНИЕ СУМОК.", text: "Надежное хранение багажа. Продажа чемоданов и дорожных сумок по лучшим ценам." },
        { title: "МАРКЕТ", head: "ХОЛОДНЫЕ НАПИТКИ.", text: "Премиальный алкоголь, холодное пиво и вина. Снэки и товары в дорогу." },
        { title: "РЕМОНТ", head: "БЫСТРЫЙ РЕМОНТ.", text: "Разбит экран? Быстрый ремонт смартфонов и аксессуары в наличии." },
        { title: "ПЕЧАТЬ", head: "КОПИИ И ПЕЧАТЬ.", text: "Мгновенная печать посадочных талонов и документов. Сканирование." },
        { title: "ПЕРЕВОДЫ", head: "RIA MONEY TRANSFER.", text: "Мгновенная отправка и получение денег по всему миру. Быстро и надежно." },
        { title: "ГИГИЕНА", head: "ТОВАРЫ ПЕРВОЙ НЕОБХ.", text: "Забыли щетку? У нас есть все гигиенические товары для вашей поездки." }
      ]
    },
    about: {
      badge: "О_Нас",
      h2: "БОЛЬШЕ ЧЕМ", h2_yellow: "ПРОСТО МАРКЕТ.",
      h3: "Центр для путешественников на Via Vitruvio 40.",
      p1: "Добро пожаловать в BRM Mini Market, вашу важную остановку в центре Милана, рядом с Milano Centrale.",
      p2: "У нас есть всё необходимое ночью. Мы ваши",
      p2_highlight: "местные помощники."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Напротив Центрального вокзала.",
      hours: "10:00 - 05:00 • Пн - Вс", follow: "Подписывайтесь", map_btn: "ОТКРЫТЬ КАРТУ",
      terms: "УСЛОВИЯ ОБСЛУЖИВАНИЯ", privacy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ"
    }
  },
  ja: {
    nav: { directions: "アクセス", language: "言語" },
    hero: { 
      badge: "ミラノ中央駅 • Via Vitruvio 40", 
      h1: "お酒。", h1_yellow: "スナック。", h1_bottom: "深夜営業。", 
      sub: "BRM ミニマーケット & テックハブ", 
      cta: "詳細を見る" 
    },
    services: {
      title: "サービス紹介",
      items: [
        { title: "旅行と荷物", head: "手荷物預かり。", text: "旅行者向けの安全な荷物預かり。スーツケースや旅行バッグを格安で販売。" },
        { title: "マーケット", head: "冷たい飲み物。", text: "高級酒、冷えたビール、ワイン。スナックや旅行用品も完備。" },
        { title: "修理", head: "スマホ修理。", text: "画面割れやバッテリー交換。迅速な修理とアクセサリー販売。" },
        { title: "印刷", head: "コピー・印刷。", text: "搭乗券や書類を即座に印刷。スキャンやメール送信も可能。" },
        { title: "海外送金", head: "RIA マネー送金。", text: "世界中へ即座に送金・受取。迅速で安全な国際送金サービス。" },
        { title: "日用品", head: "バス用品。", text: "歯ブラシを忘れましたか？旅行サイズの衛生用品を取り揃えています。" }
      ]
    },
    about: {
      badge: "店舗情報",
      h2: "単なる店では", h2_yellow: "ありません。",
      h3: "Via Vitruvio 40 のトラベラーズハブ。",
      p1: "ミラノ中心部、ミラノ中央駅のすぐ隣にあるBRMミニマーケットへようこそ。",
      p2: "深夜に必要な必需品を揃えています。私たちはあなたの",
      p2_highlight: "ローカル・プロブレム・ソルバーです。"
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "ミラノ中央駅の向かい。",
      hours: "10:00 - 05:00 • 年中無休", follow: "フォローする", map_btn: "大きな地図を表示",
      terms: "利用規約", privacy: "プライバシーポリシー"
    }
  },
  de: {
    nav: { directions: "ROUTE", language: "SPRACHE" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "ALKOHOL.", h1_yellow: "SNACKS.", h1_bottom: "SPÄT OFFEN.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "ZUM SHOP" 
    },
    services: {
      title: "UNSERE SERVICES",
      items: [
        { title: "REISE & GEPÄCK", head: "GEPÄCKLAGERUNG.", text: "Sichere Kofferaufbewahrung für Reisende. Wir verkaufen Trolleys zum Bestpreis." },
        { title: "MARKT", head: "KALTE GETRÄNKE.", text: "Premium-Spirituosen, kaltes Bier und Weine. Snacks und Reiseartikel." },
        { title: "TECH & REPARATUR", head: "SCHNELLE HILFE.", text: "Display kaputt? Schnelle Smartphone-Reparaturen und Zubehör vor Ort." },
        { title: "DRUCK", head: "FOTOKOPIE & DRUCK.", text: "Bordkarten und Dokumente sofort drucken. Scan-Service verfügbar." },
        { title: "MONEY TRANSFER", head: "RIA GELDTRANSFER.", text: "Weltweit Geld senden und empfangen. Sicher und schnell." },
        { title: "ESSENTIALS", head: "HYGIENE.", text: "Zahnbürste vergessen? Wir haben Hygieneartikel in Reisegröße für Sie." }
      ]
    },
    about: {
      badge: "Über_Uns",
      h2: "MEHR ALS NUR", h2_yellow: "EIN MARKT.",
      h3: "Der Hub für Reisende in der Via Vitruvio 40.",
      p1: "Willkommen im BRM Mini Market, Ihrem wichtigen Stopp im Herzen von Mailand, direkt neben dem Hauptbahnhof (Milano Centrale).",
      p2: "Wir haben alles, was man nachts braucht. Wir sind Ihre",
      p2_highlight: "lokalen Problemlöser."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Gegenüber dem Hauptbahnhof-Areal.",
      hours: "10:00 - 05:00 • Mo - So", follow: "Folge uns", map_btn: "KARTE ÖFFNEN",
      terms: "NUTZUNGSBEDINGUNGEN", privacy: "DATENSCHUTZERKLÄRUNG"
    }
  },
  ko: {
    nav: { directions: "찾아오시는 길", language: "언어" },
    hero: { 
      badge: "밀라노 중앙역 • Via Vitruvio 40", 
      h1: "주류.", h1_yellow: "스낵.", h1_bottom: "심야 영업.", 
      sub: "BRM 미니 마켓 & 테크 허브", 
      cta: "매장 둘러보기" 
    },
    services: {
      title: "서비스",
      items: [
        { title: "여행 및 수하물", head: "짐 보관 서비스.", text: "여행자를 위한 안전한 짐 보관. 캐리어와 여행용 가방을 최저가에 판매합니다." },
        { title: "마켓", head: "시원한 음료.", text: "프리미엄 주류, 시원한 맥주와 와인. 스낵 및 여행용 세면도구 완비." },
        { title: "수리", head: "빠른 테크 수리.", text: "액정 파손? 스마트폰 수리 및 다양한 액세서리 구매 가능." },
        { title: "인쇄", head: "복사 및 인쇄.", text: "탑승권 및 서류 즉시 인쇄. 스캔 및 이메일 전송 서비스 지원." },
        { title: "송금", head: "RIA 해외 송금.", text: "전 세계로 즉시 송금 및 수취. 빠르고 안전한 국제 송금 서비스." },
        { title: "필수품", head: "세면도구.", text: "칫솔을 잊으셨나요? 여행용 사이즈의 위생 용품이 준비되어 있습니다." }
      ]
    },
    about: {
      badge: "정보",
      h2: "단순한 마켓", h2_yellow: "그 이상.",
      h3: "Via Vitruvio 40의 여행자 허브.",
      p1: "밀라노 중심부, 밀라노 중앙역 바로 옆에 위치한 BRM 미니 마켓에 오신 것을 환영합니다.",
      p2: "늦은 밤에도 필요한 필수품을 갖추고 있습니다. 저희는 여러분의",
      p2_highlight: "현지 문제 해결사입니다."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "중앙역 맞은편 위치.",
      hours: "10:00 - 05:00 • 월 - 일", follow: "팔로우하기", map_btn: "지도 크게 보기",
      terms: "이용 약관", privacy: "개인정보 처리방침"
    }
  },
  tr: {
    nav: { directions: "YOL TARİFİ", language: "DİL" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "İÇKİ.", h1_yellow: "ATIŞTIRMALIK.", h1_bottom: "GEÇ SAATE KADAR.", 
      sub: "BRM MİNİ MARKET & TECH HUB", 
      cta: "MAĞAZAYI GEZ" 
    },
    services: {
      title: "HİZMETLERİMİZ",
      items: [
        { title: "SEYAHAT & BAGAJ", head: "EMANET BÖLÜMÜ.", text: "Seyahat edenler için güvenli bagaj depolama. Valiz ve seyahat çantaları en iyi fiyatlarla." },
        { title: "MARKET", head: "SOĞUK İÇECEKLER.", text: "Premium içkiler, soğuk biralar ve şaraplar. Atıştırmalıklar ve seyahat ürünleri." },
        { title: "TEKNOLOJİ", head: "HIZLI TAMİR.", text: "Ekran mı kırıldı? Hızlı akıllı telefon tamiri ve aksesuarlar mevcuttur." },
        { title: "BASKI", head: "FOTOKOPİ & BASKI.", text: "Biniş kartı ve belgeleri anında yazdırın. Tarama hizmeti mevcuttur." },
        { title: "PARA TRANSFERİ", head: "RIA PARA TRANSFERİ.", text: "Dünya çapında anında para gönderin ve alın. Hızlı ve güvenli." },
        { title: "TEMEL ÜRÜNLER", head: "KİŞİSEL BAKIM.", text: "Diş fırçanızı mı unuttunuz? Seyahat boyu hijyen ürünlerimiz mevcuttur." }
      ]
    },
    about: {
      badge: "Hakkımızda",
      h2: "BİR MARKETTE", h2_yellow: "DAHA FAZLASI.",
      h3: "Via Vitruvio 40'ta Gezginlerin Merkezi.",
      p1: "Milano'nun kalbinde, Milano Centrale'nin hemen yanında bulunan BRM Mini Market'e hoş geldiniz.",
      p2: "Gece geç saatlerde bulamayacağınız her şeye sahibiz. Biz sizin",
      p2_highlight: "yerel çözüm ortağınızız."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Merkez İstasyon bölgesinin karşısı.",
      hours: "10:00 - 05:00 • Pzt - Paz", follow: "Bizi Takip Edin", map_btn: "HARİTAYI GÖR",
      terms: "HİZMET ŞARTLARI", privacy: "GİZLİLİK POLİTİKASI"
    }
  },
  vi: {
    nav: { directions: "CHỈ ĐƯỜNG", language: "NGÔN NGỮ" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "RƯỢU.", h1_yellow: "ĐỒ ĂN NHẸ.", h1_bottom: "MỞ MUỘN.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "KHÁM PHÁ CỬA HÀNG" 
    },
    services: {
      title: "DỊCH VỤ CỦA CHÚNG TÔI",
      items: [
        { title: "HÀNH LÝ", head: "GỬI ĐỒ & VALI.", text: "Nơi gửi hành lý an toàn cho du khách. Bán vali và túi du lịch giá tốt nhất." },
        { title: "CHỢ & RƯỢU", head: "ĐỒ UỐNG LẠNH.", text: "Rượu cao cấp, bia lạnh và vang. Có sẵn đồ ăn nhẹ và đồ dùng cá nhân." },
        { title: "CÔNG NGHỆ", head: "SỬA CHỮA NHANH.", text: "Hỏng màn hình? Sửa điện thoại nhanh chóng và có đầy đủ phụ kiện." },
        { title: "IN ẤN", head: "PHOTO & IN.", text: "In vé máy bay và tài liệu ngay lập tức. Có dịch vụ scan và email." },
        { title: "CHUYỂN TIỀN", head: "RIA MONEY TRANSFER.", text: "Gửi và nhận tiền quốc tế tức thì. Nhanh chóng và an toàn." },
        { title: "THIẾT YẾU", head: "VỆ SINH CÁ NHÂN.", text: "Quên bàn chải? Chúng tôi có các sản phẩm vệ sinh kích cỡ du lịch." }
      ]
    },
    about: {
      badge: "Về_Chúng_Tôi",
      h2: "KHÔNG CHỈ LÀ", h2_yellow: "MỘT CỬA HÀNG.",
      h3: "Trạm dừng chân du khách tại Via Vitruvio 40.",
      p1: "Chào mừng đến với BRM Mini Market, điểm dừng chân thiết yếu ngay trung tâm Milan, cạnh Milano Centrale.",
      p2: "Chúng tôi có những thứ bạn cần vào đêm muộn. Chúng tôi là",
      p2_highlight: "người giải quyết vấn đề của bạn."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Đối diện khu vực Ga Trung tâm.",
      hours: "10:00 sáng - 05:00 sáng • Thứ 2 - CN", follow: "Theo dõi chúng tôi", map_btn: "XEM BẢN ĐỒ LỚN",
      terms: "ĐIỀU KHOẢN DỊCH VỤ", privacy: "CHÍNH SÁCH BẢO MẬT"
    }
  },
  pl: {
    nav: { directions: "DOJAZD", language: "JĘZYK" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "ALKOHOL.", h1_yellow: "PRZEKĄSKI.", h1_bottom: "OTWARTE PÓŹNO.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "ZOBACZ SKLEP" 
    },
    services: {
      title: "NASZE USŁUGI",
      items: [
        { title: "BAGAŻ", head: "PRZECHOWALNIA.", text: "Bezpieczna przechowalnia bagażu. Sprzedaż walizek i toreb w najlepszych cenach." },
        { title: "MARKET", head: "ZIMNE NAPOJE.", text: "Alkohole premium, zimne piwo i wina. Przekąski i artykuły podróżne." },
        { title: "TECH", head: "SZYBKA NAPRAWA.", text: "Zbita szybka? Szybka naprawa smartfonów i akcesoria na miejscu." },
        { title: "DRUK", head: "KSERO I DRUK.", text: "Drukuj karty pokładowe i dokumenty od ręki. Dostępny skaner." },
        { title: "PRZELEWY", head: "RIA MONEY TRANSFER.", text: "Wysyłaj i odbieraj pieniądze na całym świecie. Szybko i bezpiecznie." },
        { title: "NIEZBĘDNIKI", head: "HIGIENA.", text: "Zapomniałeś szczoteczki? Mamy produkty higieniczne w wersji podróżnej." }
      ]
    },
    about: {
      badge: "O_Nas",
      h2: "WIĘCEJ NIŻ", h2_yellow: "ZWYKŁY SKLEP.",
      h3: "Hub dla podróżnych przy Via Vitruvio 40.",
      p1: "Witaj w BRM Mini Market, Twoim niezbędnym przystanku w sercu Mediolanu, tuż obok dworca Milano Centrale.",
      p2: "Mamy to, czego potrzebujesz późno w nocy. Jesteśmy Twoim",
      p2_highlight: "lokalnym wsparciem."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Naprzeciwko Dworca Centralnego.",
      hours: "10:00 - 05:00 • Pon - Nd", follow: "Obserwuj nas", map_btn: "POKAŻ MAPĘ",
      terms: "REGULAMIN", privacy: "POLITYKA PRYWATNOŚCI"
    }
  },
  ro: {
    nav: { directions: "DIRECȚII", language: "LIMBĂ" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "ALCOOL.", h1_yellow: "GUSTĂRI.", h1_bottom: "DESCHIS TÂRZI.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "VEZI MAGAZINUL" 
    },
    services: {
      title: "SERVICIILE NOASTRE",
      items: [
        { title: "CĂLĂTORIE", head: "DEPÓZIT BAGAJE.", text: "Depozitare sigură pentru bagaje. Vindem trollere și genți la cele mai bune prețuri." },
        { title: "MARKET", head: "BĂUTURI RECI.", text: "Băuturi premium, bere rece și vinuri. Gustări și articole de igienă." },
        { title: "TECH", head: "REPARAȚII RAPIDE.", text: "Ecran spart? Reparații rapide de telefoane și accesorii disponibile." },
        { title: "IMPRIMARE", head: "XEROX ȘI PRINT.", text: "Printați bilete și documente instant. Servicii de scanare disponibile." },
        { title: "MONEY TRANSFER", head: "RIA MONEY TRANSFER.", text: "Trimiteți și primiți bani oriunde în lume. Sigur și rapid." },
        { title: "ESENȚIALE", head: "IGIENĂ.", text: "Ați uitat periuța? Avem produse de igienă de călătorie pentru dvs." }
      ]
    },
    about: {
      badge: "Despre_Noi",
      h2: "MAI MULT DECÂT", h2_yellow: "UN MAGAZIN.",
      h3: "Hub-ul călătorilor în Via Vitruvio 40.",
      p1: "Bine ați venit la BRM Mini Market, oprirea esențială în inima Milanului, chiar lângă Gara Centrală.",
      p2: "Avem esențialul pe care nu-l găsești noaptea târziu. Suntem",
      p2_highlight: "ajutorul tău local."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "În fața Gării Centrale.",
      hours: "10:00 - 05:00 • Luni - Dum", follow: "Urmărește-ne", map_btn: "VEZI PE HARTĂ",
      terms: "TERMENI ȘI CONDIȚII", privacy: "POLITICA DE CONFIDENȚIALITATE"
    }
  },
  nl: {
    nav: { directions: "ROUTE", language: "TAAL" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "DRANK.", h1_yellow: "SNACKS.", h1_bottom: "LAAT OPEN.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "BEKIJK WINKEL" 
    },
    services: {
      title: "ONZE DIENSTEN",
      items: [
        { title: "REIZEN & BAGAGE", head: "BAGAGEOPSLAG.", text: "Veilige opslag voor reizigers. Wij verkopen koffers en tassen tegen de beste prijs." },
        { title: "MARKT", head: "KOUDE DRANKJES.", text: "Premium sterke drank, koud bier en wijn. Snacks en toiletartikelen." },
        { title: "TECH", head: "SNELLE REPARATIE.", text: "Scherm kapot? Snelle smartphone reparatie en accessoires beschikbaar." },
        { title: "PRINTEN", head: "FOTOKOPIE & PRINT.", text: "Print instapkaarten en documenten direct. Scan service beschikbaar." },
        { title: "MONEY TRANSFER", head: "RIA MONEY TRANSFER.", text: "Wereldwijd direct geld verzenden en ontvangen. Snel en veilig." },
        { title: "ESSENTIALS", head: "HYGIËNE.", text: "Tandenborstel vergeten? Wij hebben reisformaat hygiëneproducten." }
      ]
    },
    about: {
      badge: "Over_Ons",
      h2: "MEER DAN ALLEEN", h2_yellow: "EEN WINKEL.",
      h3: "De hub voor reizigers op Via Vitruvio 40.",
      p1: "Welkom bij BRM Mini Market, uw essentiële stop in het hart van Milaan, direct naast Milano Centrale.",
      p2: "Wij hebben wat u 's nachts laat nodig heeft. Wij zijn uw",
      p2_highlight: "lokale probleemoplossers."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Tegenover het Centraal Station.",
      hours: "10:00 - 05:00 • Ma - Zo", follow: "Volg ons", map_btn: "BEKIJK OP KAART",
      terms: "ALGEMENE VOORWAARDEN", privacy: "PRIVACYBELEID"
    }
  },
  th: {
    nav: { directions: "เส้นทาง", language: "ภาษา" },
    hero: { 
      badge: "มิลาโน เซนทรัล • Via Vitruvio 40", 
      h1: "เครื่องดื่ม.", h1_yellow: "ของว่าง.", h1_bottom: "เปิดดึก.", 
      sub: "BRM มินิมาร์เก็ต & เทคฮับ", 
      cta: "เลือกซื้อสินค้า" 
    },
    services: {
      title: "บริการของเรา",
      items: [
        { title: "การเดินทาง", head: "ฝากกระเป๋าเดินทาง.", text: "ที่รับฝากกระเป๋าปลอดภัยสำหรับนักเดินทาง จำหน่ายกระเป๋าเดินทางราคาสุดคุ้ม" },
        { title: "มาร์เก็ต", head: "เครื่องดื่มเย็น.", text: "สุราระดับพรีเมียม เบียร์เย็นๆ และไวน์ พร้อมของว่างและของใช้จำเป็น" },
        { title: "ซ่อมมือถือ", head: "ซ่อมด่วน.", text: "หน้าจอแตกหรือแบตเสื่อม? ซ่อมสมาร์ทโฟนด่วนและมีอุปกรณ์เสริมครบครัน" },
        { title: "งานพิมพ์", head: "ถ่ายเอกสาร & พิมพ์.", text: "พิมพ์บัตรขึ้นเครื่องและเอกสารได้ทันที มีบริการสแกนและส่งอีเมล" },
        { title: "โอนเงิน", head: "RIA โอนเงิน.", text: "ส่งและรับเงินทั่วโลกได้ทันที รวดเร็วและปลอดภัยสำหรับการโอนระหว่างประเทศ" },
        { title: "ของใช้จำเป็น", head: "เครื่องใช้ส่วนตัว.", text: "ลืมแปรงสีฟันใช่ไหม? เรามีผลิตภัณฑ์ทำความสะอาดขนาดพกพาสำหรับการเดินทาง" }
      ]
    },
    about: {
      badge: "เกี่ยวกับเรา",
      h2: "เป็นมากกว่า", h2_yellow: "ร้านค้าทั่วไป.",
      h3: "ศูนย์รวมนักเดินทางที่ Via Vitruvio 40.",
      p1: "ยินดีต้อนรับสู่ BRM Mini Market จุดแวะพักที่จำเป็นใจกลางมิลาน ติดกับสถานีรถไฟ Milano Centrale",
      p2: "เรามีของใช้จำเป็นที่คุณหาไม่ได้ในตอนดึก เราคือ",
      p2_highlight: "ผู้ช่วยแก้ปัญหาให้คุณ"
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "ตรงข้ามบริเวณสถานีรถไฟกลาง",
      hours: "10:00 น. - 05:00 น. • จันทร์ - อาทิตย์", follow: "ติดตามเรา", map_btn: "ดูแผนที่ขนาดใหญ่",
      terms: "เงื่อนไขการให้บริการ", privacy: "นโยบายความเป็นส่วนตัว"
    }
  },
  tl: {
    nav: { directions: "DIREKSYON", language: "WIKA" },
    hero: { 
      badge: "Milano Centrale • Via Vitruvio 40", 
      h1: "ALAK.", h1_yellow: "SNACKS.", h1_bottom: "BUKAS GABI.", 
      sub: "BRM MINI MARKET & TECH HUB", 
      cta: "TINGNAN ANG TINDAHAN" 
    },
    services: {
      title: "AMING MGA SERBISYO",
      items: [
        { title: "BIYAHE & BAGAGE", head: "BAG STORAGE.", text: "Ligtas na imbakan ng maleta. Nagtitinda rin kami ng mga maleta sa murang halaga." },
        { title: "MARKET", head: "MALAMIG NA INUMIN.", text: "Mga premium na alak, malamig na beer at wine. May snacks at gamit pampaligo rin." },
        { title: "TECH & REPAIRS", head: "MABILIS NA REPAIR.", text: "Basag na screen? Mabilis na repair ng cellphone at may accessories din dito." },
        { title: "PRINTING", head: "PHOTOCOPY & PRINT.", text: "Mag-print ng boarding pass at documents agad-agad. May scan services din." },
        { title: "MONEY TRANSFER", head: "RIA MONEY TRANSFER.", text: "Magpadala at tumanggap ng pera sa buong mundo. Mabilis at ligtas." },
        { title: "ESSENTIALS", head: "GAMIT SA KATAWAN.", text: "Nakalimutan ang toothbrush? Mayroon kaming mga travel-size na gamit para sa inyo." }
      ]
    },
    about: {
      badge: "Tungkol_Sa_Amin",
      h2: "HIGIT PA SA", h2_yellow: "ISANG MARKET.",
      h3: "Ang Hub ng mga Biyahero sa Via Vitruvio 40.",
      p1: "Maligayang pagdating sa BRM Mini Market, ang iyong mahalagang hinto sa gitna ng Milan, katabi lang ng Milano Centrale.",
      p2: "Mayroon kaming mga kailangan mo kahit gabi na. Kami ang iyong",
      p2_highlight: "local problem solvers."
    },
    footer: {
      location: "VIA VITRUVIO, 40", opposite: "Katapat ng Central Station area.",
      hours: "10:00 AM - 05:00 AM • Mon - Sun", follow: "I-follow Kami", map_btn: "TINGNAN ANG MAPA",
      terms: "MGA TUNTUNIN", privacy: "PATAKARAN SA PRIVACY"
    }
  }
};
