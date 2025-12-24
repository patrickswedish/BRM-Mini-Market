
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { translations } from './translations';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safe fallback translation getter
  const t = translations[lang] || translations['en'];

  return (
    <div className={`min-h-screen bg-[#a81c21] selection:bg-yellow-400 selection:text-black ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar isScrolled={isScrolled} lang={lang} setLang={setLang} t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <Services t={t.services} />
        <AboutUs t={t.about} />
        <PartnersSection />
      </main>
      <Footer t={t.footer} />
      <WhatsAppWidget lang={lang} />
    </div>
  );
};

export default App;
