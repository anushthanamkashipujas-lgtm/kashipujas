import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  BookOpen,
  Award,
  CalendarCheck,
  CheckCircle2,
  Flame,
  MessageCircle,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { ASSETS } from '../data/assets.ts';

interface HomePageProps {
  language: Language;
  onNavigate: (tab: 'home' | 'puja' | 'booking' | 'contact') => void;
  onOpenAstrology: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onNavigate,
  onOpenAstrology,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="space-y-16">
      {/* Hero Section with Sacred Kashi Ghat Atmosphere */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF4EA] to-[#FFFDF9] border-b border-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Shloka Kicker */}
              <div className="inline-flex items-center gap-2 bg-[#5E141D]/10 text-[#5E141D] px-3.5 py-1.5 rounded-md border border-[#5E141D]/20 text-xs sm:text-sm font-vedic">
                <span className="text-[#D96800]">ॐ</span>
                <span className="font-semibold">{t.brand.om}</span>
                <span className="text-gray-400">·</span>
                <span>{language === 'hi' ? 'अविमुक्त क्षेत्र काशी' : 'Holy Avimukta Kshetra Kashi'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-vedic text-[#3F0B12] leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5D3A29] leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Shloka Quote Box */}
              <div className="bg-[#FFFDF9] border border-[#C69214]/30 rounded-lg p-4 sm:p-5 shadow-xs">
                <p className="font-vedic text-sm sm:text-base text-[#5E141D] font-medium italic">
                  "{t.hero.shloka}"
                </p>
                <p className="text-xs text-[#7B4D2B] mt-1.5">
                  — {t.hero.shlokaMeaning}
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('puja')}
                  className="px-6 py-3.5 bg-[#D96800] hover:bg-[#B75300] text-white font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <span>{t.hero.ctaPuja}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('booking')}
                  className="px-6 py-3.5 bg-[#5E141D] hover:bg-[#450C13] text-amber-100 font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-amber-300" />
                  <span>{t.hero.ctaBook}</span>
                </button>

                <button
                  onClick={onOpenAstrology}
                  className="px-5 py-3.5 bg-amber-50 hover:bg-amber-100/80 text-[#5E141D] border border-amber-300 font-medium rounded-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D96800]" />
                  <span>{t.hero.ctaAstrology}</span>
                </button>
              </div>

              {/* Trust Strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#5D3A29]">
                {t.hero.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 bg-stone-100 aspect-16/10 lg:aspect-4/3">
                <img
                  src={ASSETS.heroGhat}
                  alt="Kashi Ganga Ghats Varanasi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                    {language === 'hi' ? 'दशाश्वमेध एवं मणिकर्णिका तीर्थ' : 'Dashashwamedh & Manikarnika'}
                  </span>
                  <p className="text-lg font-vedic font-bold text-white mt-1">
                    {language === 'hi'
                      ? 'अनादि अविमुक्त क्षेत्र, वाराणसी'
                      : 'Eternal Avimukta Kshetra, Varanasi'}
                  </p>
                  <p className="text-xs text-amber-100/90 mt-0.5">
                    {language === 'hi'
                      ? 'उत्तरवाहिनी माँ गंगा के तट पर शास्त्रोक्त संकल्प'
                      : 'Scriptural Sankalp on the banks of North-flowing Ganga'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acharya Yogesh Upadhyay Ji Detailed Introduction & Lineage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#FAF6ED] rounded-2xl border border-[#E8DFD0] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Acharya Ji Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D96800] via-[#C69214] to-[#5E141D] rounded-2xl blur-xs opacity-60"></div>
                <div className="relative rounded-xl overflow-hidden border-2 border-white bg-stone-200 aspect-3/4 shadow-md">
                  <img
                    src={ASSETS.acharyaJi}
                    alt="Acharya Yogesh Upadhyay Ji"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#3F0B12] via-[#3F0B12]/80 to-transparent p-4 text-center">
                    <h3 className="font-vedic text-lg font-bold text-amber-200">
                      {t.contactPage.acharyaName}
                    </h3>
                    <p className="text-xs text-amber-100/80">
                      {language === 'hi'
                        ? 'शुक्ल यजुर्वेदीय कर्मकांड एवं ज्योतिष मर्मज्ञ'
                        : 'Shukla Yajurvedic Ritual & Jyotish Scholar'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acharya Ji Bio & Purpose of Kashi Anushthan */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96800]">
                  {language === 'hi' ? 'परंपरा एवं वैदिक साधना' : 'Vedic Heritage & Lineage'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-vedic text-[#3F0B12] mt-1">
                  {t.aboutAcharya.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-[#7B4D2B] mt-0.5">
                  {t.aboutAcharya.subtitle}
                </p>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-[#4A2E1B] leading-relaxed">
                <p>{t.aboutAcharya.bio1}</p>
                <p>{t.aboutAcharya.bio2}</p>
                <p>{t.aboutAcharya.bio3}</p>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-lg border border-[#E8DFD0] text-center">
                  <span className="block text-xl sm:text-2xl font-bold text-[#D96800] font-mono tabular-nums">
                    {t.aboutAcharya.experienceYears}
                  </span>
                  <span className="text-xs text-[#7B4D2B] font-medium block mt-0.5">
                    {t.aboutAcharya.experienceLabel}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E8DFD0] text-center">
                  <span className="block text-xl sm:text-2xl font-bold text-[#5E141D] font-mono tabular-nums">
                    {t.aboutAcharya.completedPujas}
                  </span>
                  <span className="text-xs text-[#7B4D2B] font-medium block mt-0.5">
                    {t.aboutAcharya.completedPujasLabel}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E8DFD0] text-center">
                  <span className="block text-base sm:text-lg font-bold text-[#3F0B12] font-vedic">
                    {t.aboutAcharya.vedicLineage}
                  </span>
                  <span className="text-xs text-[#7B4D2B] font-medium block mt-0.5">
                    {t.aboutAcharya.vedicLineageLabel}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E8DFD0] text-center">
                  <span className="block text-base sm:text-lg font-bold text-[#D96800] font-vedic">
                    {language === 'hi' ? 'काशी धाम' : 'Kashi Dham'}
                  </span>
                  <span className="text-xs text-[#7B4D2B] font-medium block mt-0.5">
                    {t.aboutAcharya.holyKshetraLabel}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 bg-[#5E141D] hover:bg-[#3F0B12] text-amber-100 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'hi' ? 'आचार्य जी से संपर्क करें' : 'Contact Acharya Ji'}
                </button>
                <a
                  href="https://wa.me/918210803558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +91 8210803558</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kashi for Anushthan Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D96800]">
            {language === 'hi' ? 'स्कंद पुराण काशी खंड' : 'Skanda Purana Kashi Khand'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-vedic text-[#3F0B12] mt-1">
            {t.whyKashi.title}
          </h2>
          <p className="text-sm sm:text-base text-[#7B4D2B] mt-1.5">
            {t.whyKashi.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyKashi.points.map((pt, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-[#E8DFD0] hover:border-[#C69214]/50 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#D96800] flex items-center justify-center font-bold text-lg font-vedic">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold font-vedic text-[#3F0B12]">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5D3A29] leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sacred Rituals in Action (Visual Preview Spotlight - NOT full list) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#FAF4EA] to-[#F5ECE0] rounded-2xl p-6 sm:p-10 border border-[#E8DFD0]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D96800]">
                {language === 'hi' ? 'वैदिक अनुष्ठान झलक' : 'Ritual Spotlight'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-vedic text-[#3F0B12] mt-1">
                {language === 'hi'
                  ? 'काशी में शास्त्रोक्त विधि से पूजन'
                  : 'Scriptural Puja In Holy Kashi'}
              </h2>
              <p className="text-sm text-[#7B4D2B] mt-1">
                {language === 'hi'
                  ? 'रुद्राभिषेक, महामृत्युंजय जाप, नवग्रह शांति एवं महायज्ञ की पावन परंपरा'
                  : 'Rudrabhishek, Mahamrityunjaya, Navagraha and Vedic Yajna traditions'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('puja')}
              className="px-5 py-2.5 bg-[#D96800] hover:bg-[#B75300] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>{language === 'hi' ? 'सभी 17 पूजाएं देखें' : 'View All 17 Pujas'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Spotlight 1: Rudrabhishek */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#E8DFD0] shadow-xs flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-4/3 sm:aspect-auto">
                <img
                  src={ASSETS.rudrabhishek}
                  alt="Rudrabhishek Puja Kashi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-1/2 p-5 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs text-[#D96800] font-bold uppercase">
                    {language === 'hi' ? 'भगवान शिव अभिषेक' : 'Lord Shiva Abhishekam'}
                  </span>
                  <h3 className="text-lg font-bold font-vedic text-[#3F0B12] mt-0.5">
                    {language === 'hi' ? 'काशी रुद्राभिषेक पूजा' : 'Kashi Rudrabhishek'}
                  </h3>
                  <p className="text-xs text-[#5D3A29] mt-1 leading-relaxed">
                    {language === 'hi'
                      ? 'शुक्ल यजुर्वेदीय रुद्राष्टाध्यायी के वैदिक मंत्रों द्वारा गंगाजल, दुग्ध, शहद व भस्म से अभिषेक।'
                      : 'Consecrated Vedic Rudrashtadhyayi chanting with sacred Ganga water, milk, and bilva patra.'}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                  <span className="font-semibold text-[#D96800]">
                    {language === 'hi' ? 'प्रारंभिक शुल्क ₹501 से' : 'Starting ₹501'}
                  </span>
                  <button
                    onClick={() => onNavigate('puja')}
                    className="font-bold text-[#5E141D] hover:underline cursor-pointer"
                  >
                    {language === 'hi' ? 'विवरण देखें ›' : 'Details ›'}
                  </button>
                </div>
              </div>
            </div>

            {/* Spotlight 2: Vedic Havan Yajna */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#E8DFD0] shadow-xs flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-4/3 sm:aspect-auto">
                <img
                  src={ASSETS.havanYajna}
                  alt="Vedic Havan Yajna Kund Kashi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-1/2 p-5 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs text-[#D96800] font-bold uppercase">
                    {language === 'hi' ? 'अग्निहोत्र एवं शांति' : 'Agnihotra & Peace'}
                  </span>
                  <h3 className="text-lg font-bold font-vedic text-[#3F0B12] mt-0.5">
                    {language === 'hi' ? 'वैदिक हवन एवं नवग्रह शांति' : 'Vedic Havan & Navagraha'}
                  </h3>
                  <p className="text-xs text-[#5D3A29] mt-1 leading-relaxed">
                    {language === 'hi'
                      ? 'ताम्र कुंड में शुद्ध गौ घृत, समिधा एवं दुर्लभ जड़ी-बूटियों द्वारा दशांश आहुति यज्ञ।'
                      : 'Sacred oblation in pure copper kund with cow ghee, samidha, and rare ayurvedic herbs.'}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                  <span className="font-semibold text-[#D96800]">
                    {language === 'hi' ? 'प्रारंभिक शुल्क ₹501 से' : 'Starting ₹501'}
                  </span>
                  <button
                    onClick={() => onNavigate('puja')}
                    className="font-bold text-[#5E141D] hover:underline cursor-pointer"
                  >
                    {language === 'hi' ? 'विवरण देखें ›' : 'Details ›'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Astrology Guidance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3F0B12] rounded-2xl p-6 sm:p-8 text-[#FAF6ED] border-2 border-[#C69214]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-amber-950/60 px-3 py-1 rounded-md border border-amber-600/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.astrologyAssistant.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-vedic text-amber-200">
              {language === 'hi'
                ? 'कौन सी पूजा आपके लिए शुभ है? AI से निःशुल्क जानें'
                : 'Which Puja Suits Your Planetary Transits? Consult AI'}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'निरयण पद्धति (Lahiri Ayanamsha) एवं विंशोत्तरी दशा सिद्धांतों पर आधारित सात्विक मार्गदर्शन। जन्म विवरण दर्ज करें और बिना किसी भय या भ्रम के उचित पूजा का परामर्श लें।'
                : 'Ethical guidance based on Vedic Nirayana principles and Lahiri Ayanamsha. Ask any life or planetary question responsibly.'}
            </p>
          </div>

          <button
            onClick={onOpenAstrology}
            className="px-6 py-3 bg-[#D96800] hover:bg-[#B75300] text-white text-sm font-bold rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{language === 'hi' ? 'परामर्श प्रारंभ करें' : 'Start Consultation'}</span>
          </button>
        </div>
      </section>

      {/* Devotee Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D96800]">
            {language === 'hi' ? 'श्रद्धा एवं विश्वास' : 'Devotee Reflections'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-vedic text-[#3F0B12] mt-1">
            {t.testimonials.title}
          </h2>
          <p className="text-sm text-[#7B4D2B] mt-1">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#E8DFD0] shadow-xs flex flex-col justify-between space-y-4"
            >
              <p className="text-sm text-[#4A2E1B] italic leading-relaxed">
                "{item.comment}"
              </p>
              <div className="pt-3 border-t border-[#F0E8D9]">
                <h4 className="font-bold text-sm text-[#3F0B12] font-vedic">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-[#7B4D2B] mt-0.5">
                  <span>{item.city}</span>
                  <span className="text-[#D96800] font-medium font-vedic">
                    {item.puja}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
