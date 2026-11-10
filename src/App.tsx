/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { PujaPage } from './pages/PujaPage.tsx';
import { BookingPage } from './pages/BookingPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { AstrologyAssistant } from './components/AstrologyAssistant.tsx';
import { Language } from './data/translations.ts';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  // Requirement 1: Hindi as the default language
  const [language, setLanguage] = useState<Language>('hi');
  const [currentTab, setCurrentTab] = useState<'home' | 'puja' | 'booking' | 'contact'>('home');
  const [preselectedPujaId, setPreselectedPujaId] = useState<string | undefined>(undefined);
  const [isAstrologyOpen, setIsAstrologyOpen] = useState(false);

  const handleBookPuja = (pujaId: string) => {
    setPreselectedPujaId(pujaId);
    setCurrentTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: 'home' | 'puja' | 'booking' | 'contact') => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2C1810]">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        onOpenAstrology={() => setIsAstrologyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            language={language}
            onNavigate={handleNavigate}
            onOpenAstrology={() => setIsAstrologyOpen(true)}
          />
        )}

        {currentTab === 'puja' && (
          <PujaPage
            language={language}
            onBookPuja={handleBookPuja}
            onOpenAstrology={() => setIsAstrologyOpen(true)}
          />
        )}

        {currentTab === 'booking' && (
          <BookingPage
            language={language}
            preselectedPujaId={preselectedPujaId}
            onPujaBookedClear={() => setPreselectedPujaId(undefined)}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage language={language} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenAstrology={() => setIsAstrologyOpen(true)}
      />

      {/* Persistent Floating Action Buttons for WhatsApp & AI Astrology */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* AI Astrology Floating Button */}
        <button
          onClick={() => setIsAstrologyOpen(true)}
          className="flex items-center gap-2 bg-[#5E141D] hover:bg-[#3F0B12] text-amber-200 px-4 py-2.5 rounded-full shadow-lg border border-amber-500/40 text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Vedic AI Astrology Consultation"
        >
          <Sparkles className="w-4 h-4 text-[#D96800]" />
          <span>{language === 'hi' ? 'ज्योतिष AI' : 'Vedic AI'}</span>
        </button>

        {/* WhatsApp Floating Action Button */}
        <a
          href="https://wa.me/918210803558?text=%E0%A4%B9%E0%A4%B0%20%E0%A4%B9%E0%A4%B0%20%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A6%E0%A5%87%E0%A4%B5!%20%E0%A4%86%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%20%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A5%87%E0%A4%B6%20%E0%A4%89%E0%A4%AA%E0%A4%BE%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF%20%E0%A4%9C%E0%A5%80%20%E0%A4%B8%E0%A5%87%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%B5%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%A9%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%B6%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%E0%A5%A4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline text-xs sm:text-sm font-bold">
            {language === 'hi' ? 'व्हाट्सएप संपर्क' : 'Chat on WhatsApp'}
          </span>
        </a>
      </div>

      {/* AI Astrology Assistant Modal Dialog */}
      <AstrologyAssistant
        isOpen={isAstrologyOpen}
        onClose={() => setIsAstrologyOpen(false)}
        language={language}
        onSelectPujaForBooking={(id) => {
          setIsAstrologyOpen(false);
          handleBookPuja(id);
        }}
      />
    </div>
  );
}
