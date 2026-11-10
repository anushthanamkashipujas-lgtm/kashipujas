import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Info,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { PUJA_SERVICES, PujaService } from '../data/pujas.ts';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface PujaPageProps {
  language: Language;
  onBookPuja: (pujaId: string) => void;
  onOpenAstrology: () => void;
}

export const PujaPage: React.FC<PujaPageProps> = ({
  language,
  onBookPuja,
  onOpenAstrology,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = useMemo(() => {
    return [
      { id: 'all', labelHi: 'सभी 17 पूजाएं', labelEn: 'All 17 Pujas' },
      { id: 'shiva', labelHi: 'शिव अनुष्ठान', labelEn: 'Shiva Rituals' },
      { id: 'graha', labelHi: 'ग्रह शांति', labelEn: 'Planetary Remedies' },
      { id: 'devi', labelHi: 'भगवती दुर्गा', labelEn: 'Devi Rituals' },
      { id: 'shanti_dosha', labelHi: 'दोष शांति', labelEn: 'Dosha Nivaran' },
      { id: 'jaap_path', labelHi: 'जाप एवं पाठ', labelEn: 'Jaap & Path' },
      { id: 'sanskar', labelHi: 'गृह संस्कार', labelEn: 'Sacred Samskaras' },
    ];
  }, []);

  const filteredPujas = useMemo(() => {
    return PUJA_SERVICES.filter((puja) => {
      const matchesCategory =
        selectedCategory === 'all' || puja.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        puja.nameHi.toLowerCase().includes(q) ||
        puja.nameEn.toLowerCase().includes(q) ||
        puja.deityHi.toLowerCase().includes(q) ||
        puja.deityEn.toLowerCase().includes(q) ||
        puja.descriptionHi.toLowerCase().includes(q) ||
        puja.descriptionEn.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#5E141D]/10 text-[#5E141D] px-3.5 py-1 rounded-md text-xs font-semibold font-vedic border border-[#5E141D]/20">
          <span>ॐ नमः शिवाय</span>
          <span>·</span>
          <span>{language === 'hi' ? 'वैदिक अनुष्ठान सूची' : 'Vedic Ritual Catalog'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-vedic text-[#3F0B12]">
          {t.pujasPage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#7B4D2B]">
          {t.pujasPage.subtitle}
        </p>
      </div>

      {/* Starting Price & Samagri Disclaimer Card - Explicit Requirement */}
      <div className="bg-[#FAF4EA] border-2 border-[#C69214]/50 rounded-xl p-5 shadow-xs flex items-start gap-4">
        <Info className="w-6 h-6 text-[#D96800] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base font-bold text-[#3F0B12] font-vedic">
            {language === 'hi' ? 'प्रारंभिक सांकेतिक शुल्क ₹501 एवं दक्षिणा नीति' : 'Starting Token Fee ₹501 & Dakshina Policy'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5D3A29] leading-relaxed">
            {t.pujasPage.startingPriceNote}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-xl border border-[#E8DFD0] shadow-xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#5E141D] text-amber-100 shadow-xs'
                  : 'text-[#5D3A29] hover:bg-amber-100/50'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.pujasPage.searchPlaceholder}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
          />
        </div>
      </div>

      {/* Count Info & AI Advisor Prompt */}
      <div className="flex items-center justify-between text-xs text-[#7B4D2B] px-1">
        <span>
          {language === 'hi'
            ? `कुल ${filteredPujas.length} पूजा सेवाएं उपलब्ध`
            : `Showing ${filteredPujas.length} Vedic Puja Services`}
        </span>
        <button
          onClick={onOpenAstrology}
          className="flex items-center gap-1 text-[#D96800] hover:text-[#B75300] font-semibold cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'निर्णय में सहायता हेतु AI से पूछें' : 'Need help choosing? Ask AI'}</span>
        </button>
      </div>

      {/* Puja Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPujas.map((puja: PujaService) => {
          const isExpanded = expandedCardId === puja.id;

          return (
            <div
              key={puja.id}
              className="bg-white rounded-xl border border-[#E8DFD0] hover:border-[#C69214]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header & Main Info */}
              <div className="p-5 space-y-3.5">
                {/* Meta line */}
                <div className="flex items-center justify-between text-xs text-[#7B4D2B]">
                  <span className="font-medium text-[#D96800] font-vedic">
                    {language === 'hi' ? puja.categoryLabelHi : puja.categoryLabelEn}
                  </span>
                  <div className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3 h-3" />
                    <span>{language === 'hi' ? puja.durationHi : puja.durationEn}</span>
                  </div>
                </div>

                {/* Puja Name */}
                <div>
                  <h3 className="text-lg font-bold font-vedic text-[#3F0B12] group-hover:text-[#D96800] transition-colors leading-snug">
                    {language === 'hi' ? puja.nameHi : puja.nameEn}
                  </h3>
                  <p className="text-xs text-[#8B4513] font-medium mt-0.5">
                    {t.pujasPage.deityLabel}{' '}
                    <span className="text-[#3F0B12]">
                      {language === 'hi' ? puja.deityHi : puja.deityEn}
                    </span>
                  </p>
                </div>

                {/* Mantra snippet if present */}
                {puja.mantraHi && (
                  <div className="bg-[#FAF6ED] p-2.5 rounded-md border border-[#E8DFD0] text-xs font-vedic text-[#5E141D] italic">
                    {language === 'hi' ? puja.mantraHi : (puja.mantraEn || puja.mantraHi)}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5D3A29] leading-relaxed line-clamp-3">
                  {language === 'hi' ? puja.descriptionHi : puja.descriptionEn}
                </p>

                {/* Recommended For Points */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#7B4D2B] uppercase">
                    {t.pujasPage.recommendedForLabel}
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {(language === 'hi' ? puja.recommendedForHi : puja.recommendedForEn)
                      .slice(0, 3)
                      .map((rec, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-stone-100 text-[#4A2E1B] px-2 py-0.5 rounded"
                        >
                          {rec}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Expandable Details Section */}
                {isExpanded && (
                  <div className="pt-3 border-t border-stone-100 space-y-2.5 text-xs text-[#5D3A29] animate-fadeIn">
                    <div>
                      <span className="font-bold text-[#3F0B12]">
                        {t.pujasPage.detailsTitle}
                      </span>
                      <p className="mt-0.5">
                        {language === 'hi' ? puja.significanceHi : puja.significanceEn}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-[#3F0B12]">
                        {t.pujasPage.samagriTitle}
                      </span>
                      <p className="mt-0.5 text-stone-600">
                        {language === 'hi' ? puja.samagriIncludedHi : puja.samagriIncludedEn}
                      </p>
                    </div>
                    <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                      {language === 'hi'
                        ? 'अंतिम दक्षिणा एवं सामग्री अनुष्ठान के स्वरूप (साधारण या सवा लाख जाप) अनुसार तय होती है।'
                        : 'Final charges depend on ritual scope, mantra repetitions, and samagri.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer: Starting Price ₹501 & Actions */}
              <div className="px-5 py-4 bg-[#FAF6ED] border-t border-[#E8DFD0] flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-stone-500 block leading-tight">
                    {language === 'hi' ? 'आरंभिक शुल्क' : 'Starting from'}
                  </span>
                  <span className="text-lg font-bold text-[#D96800] font-mono tabular-nums leading-tight">
                    ₹{puja.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleExpand(puja.id)}
                    className="p-2 text-stone-600 hover:text-[#3F0B12] rounded-md hover:bg-stone-200/50 transition-colors text-xs flex items-center gap-0.5 cursor-pointer"
                    title={isExpanded ? 'कम विवरण' : 'अधिक विवरण'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => onBookPuja(puja.id)}
                    className="px-4 py-2 bg-[#D96800] hover:bg-[#B75300] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>{t.pujasPage.bookButton}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA for Custom Puja or Questions */}
      <div className="bg-[#FAF6ED] rounded-xl p-6 border border-[#E8DFD0] text-center space-y-3">
        <h3 className="text-lg sm:text-xl font-bold font-vedic text-[#3F0B12]">
          {language === 'hi'
            ? 'क्या आप किसी विशेष अनुष्ठान या सवा लाख मंत्र जाप का संकल्प कराना चाहते हैं?'
            : 'Looking for a specialized multi-day Anushthan or 1.25 Lakh Mantra Jaap?'}
        </h3>
        <p className="text-xs sm:text-sm text-[#7B4D2B] max-w-2xl mx-auto">
          {language === 'hi'
            ? 'आचार्य योगेश उपाध्याय जी से सीधे परामर्श करें। यजमान के नाम व गोत्र से काशी विश्वनाथ क्षेत्र में विशेष संपुटित अनुष्ठान का आयोजन किया जाता है।'
            : 'Consult directly with Acharya Yogesh Upadhyay Ji for customized scriptural Vedic resolutions in Kashi.'}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/918210803558"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors"
          >
            WhatsApp: +91 8210803558
          </a>
          <button
            onClick={onOpenAstrology}
            className="px-5 py-2.5 bg-[#5E141D] hover:bg-[#3F0B12] text-amber-100 font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'AI ज्योतिष से सुझाव लें' : 'Get Suggestions from AI'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
