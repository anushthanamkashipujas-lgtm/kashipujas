import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface NavbarProps {
  currentTab: 'home' | 'puja' | 'booking' | 'contact';
  setCurrentTab: (tab: 'home' | 'puja' | 'booking' | 'contact') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenAstrology: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  onOpenAstrology,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const handleNavClick = (tab: 'home' | 'puja' | 'booking' | 'contact') => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E8DFD0] shadow-xs">
      {/* Sacred Top Announcement Strip */}
      <div className="bg-[#5E141D] text-[#FAF6ED] px-4 py-1.5 text-xs text-center border-b border-[#3F0B12] flex items-center justify-between max-w-7xl mx-auto">
        <div className="hidden sm:flex items-center gap-2 text-amber-200/90 font-medium text-xs">
          <span className="text-amber-400">ॐ</span>
          <span>{t.brand.om}</span>
          <span className="text-amber-400/50">·</span>
          <span>{t.brand.city}</span>
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto text-xs">
          <a
            href="tel:+918210803558"
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono tabular-nums">+91 8210803558</span>
          </a>
          <span className="text-amber-400/50">·</span>
          <a
            href="https://wa.me/918210803558?text=%E0%A4%B9%E0%A4%B0%20%E0%A4%B9%E0%A4%B0%20%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A6%E0%A5%87%E0%A4%B5!%20%E0%A4%86%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%20%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A5%87%E0%A4%B6%20%E0%A4%89%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF%20%E0%A4%9C%E0%A5%80%20%E0%A4%B8%E0%A5%87%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%B5%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%A9%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%B6%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%E0%A5%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <span className="text-amber-400/50">·</span>
          {/* Language Switcher */}
          <div className="flex items-center bg-black/25 rounded px-1 py-0.5">
            <button
              onClick={() => setLanguage('hi')}
              className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
                language === 'hi' ? 'bg-[#D96800] text-white font-semibold' : 'text-amber-200/70 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
            <span className="text-amber-400/30 px-0.5">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
                language === 'en' ? 'bg-[#D96800] text-white font-semibold' : 'text-amber-200/70 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left shrink-0 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#D96800] to-[#5E141D] flex items-center justify-center text-amber-200 shadow-xs border border-amber-500/30">
              <span className="font-vedic text-2xl font-bold">ॐ</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#5E141D] font-vedic block leading-tight">
                {t.brand.name}
              </span>
              <span className="text-xs text-[#8B4513] block font-medium">
                {t.brand.sub}
              </span>
            </div>
          </button>

          {/* Zone 2: Concise Nav Links (Single line, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#4A2E1B]">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 hover:text-[#D96800] whitespace-nowrap shrink-0 ${
                currentTab === 'home' ? 'text-[#D96800] border-b-2 border-[#D96800]' : ''
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('puja')}
              className={`transition-colors py-1 hover:text-[#D96800] whitespace-nowrap shrink-0 ${
                currentTab === 'puja' ? 'text-[#D96800] border-b-2 border-[#D96800]' : ''
              }`}
            >
              {t.nav.pujas}
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className={`transition-colors py-1 hover:text-[#D96800] whitespace-nowrap shrink-0 ${
                currentTab === 'booking' ? 'text-[#D96800] border-b-2 border-[#D96800]' : ''
              }`}
            >
              {t.nav.booking}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAstrology();
              }}
              className="flex items-center gap-1.5 text-[#5E141D] hover:text-[#D96800] transition-colors py-1 whitespace-nowrap shrink-0 font-medium"
            >
              <Sparkles className="w-4 h-4 text-[#D96800]" />
              <span>{t.nav.astrology}</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors py-1 hover:text-[#D96800] whitespace-nowrap shrink-0 ${
                currentTab === 'contact' ? 'text-[#D96800] border-b-2 border-[#D96800]' : ''
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('booking')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#D96800] hover:bg-[#B75300] active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAstrology()}
              className="p-2 text-[#D96800] bg-amber-50 rounded-lg border border-amber-200"
              aria-label="Astrology AI"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5E141D] hover:bg-amber-100/50 rounded-lg focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#E8DFD0] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col gap-2 text-base font-medium text-[#4A2E1B]">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 rounded-md ${
                currentTab === 'home' ? 'bg-amber-100/70 text-[#D96800] font-bold' : ''
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('puja')}
              className={`text-left px-3 py-2 rounded-md ${
                currentTab === 'puja' ? 'bg-amber-100/70 text-[#D96800] font-bold' : ''
              }`}
            >
              {t.nav.pujas}
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className={`text-left px-3 py-2 rounded-md ${
                currentTab === 'booking' ? 'bg-amber-100/70 text-[#D96800] font-bold' : ''
              }`}
            >
              {t.nav.booking}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAstrology();
              }}
              className="text-left px-3 py-2 rounded-md flex items-center justify-between text-[#5E141D] font-semibold bg-amber-50 border border-amber-200/80"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D96800]" />
                {t.nav.astrology}
              </span>
              <span className="text-xs bg-[#D96800] text-white px-2 py-0.5 rounded">AI</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3 py-2 rounded-md ${
                currentTab === 'contact' ? 'bg-amber-100/70 text-[#D96800] font-bold' : ''
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8DFD0] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full py-3 text-center font-bold text-white bg-[#D96800] rounded-lg shadow-sm"
            >
              {t.nav.bookNow}
            </button>
            <div className="flex items-center justify-center gap-3 pt-2 text-sm text-[#8B4513]">
              <a href="tel:+918210803558" className="flex items-center gap-1 hover:text-[#5E141D]">
                <Phone className="w-4 h-4 text-[#D96800]" />
                <span>+91 8210803558</span>
              </a>
              <span>·</span>
              <a
                href="https://wa.me/918210803558"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
