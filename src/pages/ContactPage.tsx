import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { ASSETS } from '../data/assets.ts';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const [messageForm, setMessageForm] = useState({
    name: '',
    phone: '',
    query: '',
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.phone || !messageForm.query) return;

    const text =
      `🔱 *काशी अनुष्ठान - त्वरित संपर्क संदेश* 🔱\n` +
      `आचार्य योगेश उपाध्याय जी सादर प्रणाम!\n` +
      `👤 *नाम:* ${messageForm.name}\n` +
      `📞 *फोन:* ${messageForm.phone}\n` +
      `❓ *संदेश/जिज्ञासा:* ${messageForm.query}\n\n` +
      `हर हर महादेव!`;

    window.open(`https://wa.me/918210803558?text=${encodeURIComponent(text)}`, '_blank');
    setSentNotice(true);
  };

  const faqs = [
    {
      qHi: 'यदि हम स्वयं काशी नहीं आ सकते, तो क्या ऑनलाइन लाइव संकल्प मान्य है?',
      qEn: 'If we cannot travel to Kashi in person, is an Online Live Sankalp scripturally valid?',
      aHi: 'हाँ, वैदिक शास्त्रों के अनुसार यजमान के नाम, गोत्र, नक्षत्र व तिथि का स्मरण कर काशी में उत्तरवाहिनी गंगा तट पर आचार्य जी द्वारा लाइव वीडियो कॉलिंग के माध्यम से हाथ में जल व तुलसी देकर संकल्प कराया जाता है। संपूर्ण पूजन के उपरांत प्रसाद डाक द्वारा भेजा जाता है।',
      aEn: 'Yes, according to Vedic scriptures, taking a personal Sankalp with name, gotra, and nakshatra in Kashi through interactive live video sanctum connection conveys full scriptural merit. Holy prasad and bhasma are dispatched afterwards.',
    },
    {
      qHi: 'पूजन सामग्री की व्यवस्था कौन करता है?',
      qEn: 'Who arranges the ritual materials (Samagri)?',
      aHi: 'काशी अनुष्ठान द्वारा शुद्ध गौ घृत, वैदिक समिधा, कल्पद्रुम, गंगाजल, भस्म, पुष्प व फल आदि शास्त्रोक्त सामग्री की पूर्ण व्यवस्था की जाती है। यजमान को किसी भी सामग्री हेतु भटकना नहीं पड़ता।',
      aEn: 'Kashi Anushthan comprehensively organizes all authentic, pure ritual ingredients including pure cow ghee, sacred samidha woods, consecrated Ganga water, bilva leaves, and Vedic offerings.',
    },
    {
      qHi: 'अंतिम दक्षिणा किस प्रकार निर्धारित होती है?',
      qEn: 'How are the final ritual dakshina and expenses determined?',
      aHi: 'प्रारंभिक सांकेतिक शुल्क ₹501 से है। अंतिम दक्षिणा अनुष्ठान के स्वरूप (साधारण पूजा, एकादश ब्राह्मण लघु रुद्र, अथवा सवा लाख महामृत्युंजय जाप) एवं सामग्री व्यय के आधार पर यजमान की सहमति से पहले ही स्पष्ट रूप से तय की जाती है।',
      aEn: 'Starting token fee begins at ₹501. The final dakshina depends transparently on the scale of the ritual (e.g. single priest, 11 Vedic scholars for Laghu Rudra, or 1.25 lakh mantra chanting) agreed in advance with the Yajman.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-[#5E141D]/10 text-[#5E141D] px-3.5 py-1 rounded-md text-xs font-semibold font-vedic border border-[#5E141D]/20">
          <span>ॐ नमः शिवाय</span>
          <span>·</span>
          <span>{language === 'hi' ? 'आचार्य जी से प्रत्यक्ष संपर्क' : 'Direct Priest Contact'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-vedic text-[#3F0B12]">
          {t.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#7B4D2B]">
          {t.contactPage.subtitle}
        </p>
      </div>

      {/* Main Acharya & Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Acharya Credentials & Official Info */}
        <div className="lg:col-span-5 bg-[#FAF6ED] rounded-2xl p-6 sm:p-8 border border-[#E8DFD0] shadow-xs space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-24 rounded-lg overflow-hidden border-2 border-white shadow-sm shrink-0 bg-stone-200">
              <img
                src={ASSETS.acharyaJi}
                alt={t.contactPage.acharyaName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-vedic text-[#3F0B12]">
                {t.contactPage.acharyaName}
              </h2>
              <p className="text-xs text-[#8B4513] font-medium mt-0.5">
                {t.contactPage.designation}
              </p>
              <div className="inline-flex items-center gap-1 text-[11px] text-[#D96800] font-semibold mt-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? '18+ वर्ष वैदिक अनुभव' : '18+ Years Vedic Experience'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-3 border-t border-[#E8DFD0] text-sm text-[#4A2E1B]">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#D96800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase block">
                  {t.contactPage.phoneLabel}
                </span>
                <a
                  href="tel:+918210803558"
                  className="font-bold text-[#5E141D] hover:text-[#D96800] text-base font-mono tabular-nums block"
                >
                  {t.contactPage.phoneValue}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase block">
                  WhatsApp:
                </span>
                <a
                  href="https://wa.me/918210803558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 text-base font-mono tabular-nums block"
                >
                  +91 8210803558
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#D96800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase block">
                  {t.contactPage.emailLabel}
                </span>
                <a
                  href="mailto:vkbxr258@gmail.com"
                  className="font-bold text-[#3F0B12] hover:text-[#D96800] text-sm font-mono block break-all"
                >
                  {t.contactPage.emailValue}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D96800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase block">
                  {t.contactPage.addressLabel}
                </span>
                <p className="text-xs sm:text-sm text-[#4A2E1B] leading-relaxed">
                  {t.contactPage.addressValue}
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#D96800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase block">
                  {t.contactPage.timingsLabel}
                </span>
                <p className="text-xs sm:text-sm text-[#4A2E1B]">
                  {t.contactPage.timingsValue}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/918210803558"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contactPage.whatsappCta}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="tel:+918210803558"
              className="w-full py-3 bg-[#5E141D] hover:bg-[#3F0B12] text-amber-100 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contactPage.callCta} (+91 8210803558)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Quick Message Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD0] shadow-xs space-y-5">
          <div>
            <h3 className="text-xl font-bold font-vedic text-[#3F0B12]">
              {t.contactPage.inquiryTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#7B4D2B] mt-0.5">
              {language === 'hi'
                ? 'अपने प्रश्न अथवा पूजन संबंधी जिज्ञासा सीधे आचार्य जी को भेजें'
                : 'Send your query or ritual enquiry directly to Acharya Ji'}
            </p>
          </div>

          {sentNotice && (
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-lg text-xs sm:text-sm">
              {language === 'hi'
                ? 'आपका संदेश व्हाट्सएप पर प्रेषित किया जा रहा है। आचार्य जी शीघ्र आपसे संपर्क करेंगे।'
                : 'Your message has been initiated on WhatsApp. Acharya Ji will connect shortly.'}
            </div>
          )}

          <form onSubmit={handleSendQuery} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4A2E1B]">
                {language === 'hi' ? 'आपका नाम *' : 'Your Name *'}
              </label>
              <input
                type="text"
                required
                value={messageForm.name}
                onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                placeholder={language === 'hi' ? 'पूरा नाम दर्ज करें' : 'Enter full name'}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4A2E1B]">
                {language === 'hi' ? 'मोबाइल नंबर (व्हाट्सएप) *' : 'Mobile Number (WhatsApp) *'}
              </label>
              <input
                type="tel"
                required
                value={messageForm.phone}
                onChange={(e) => setMessageForm({ ...messageForm, phone: e.target.value })}
                placeholder="+91..."
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4A2E1B]">
                {language === 'hi' ? 'आपका प्रश्न अथवा संदेश *' : 'Your Query or Message *'}
              </label>
              <textarea
                required
                rows={4}
                value={messageForm.query}
                onChange={(e) => setMessageForm({ ...messageForm, query: e.target.value })}
                placeholder={
                  language === 'hi'
                    ? 'आप किस पूजा या मुहूर्त के संबंध में परामर्श चाहते हैं...'
                    : 'Please share which ritual, date or astrological guidance you seek...'
                }
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#D96800] hover:bg-[#B75300] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्हाट्सएप द्वारा संदेश भेजें' : 'Send via WhatsApp'}</span>
            </button>
          </form>

          {/* Email fallback */}
          <div className="pt-2 border-t border-stone-100 text-center">
            <span className="text-xs text-stone-500">
              {language === 'hi' ? 'या ईमेल प्रेषित करें:' : 'Or send an email directly:'}{' '}
              <a
                href="mailto:vkbxr258@gmail.com"
                className="font-bold text-[#5E141D] hover:underline"
              >
                vkbxr258@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-[#FAF6ED] rounded-2xl p-6 sm:p-10 border border-[#E8DFD0] space-y-6">
        <div className="flex items-center gap-2 text-[#D96800]">
          <HelpCircle className="w-5 h-5" />
          <h3 className="text-xl font-bold font-vedic text-[#3F0B12]">
            {language === 'hi' ? 'प्रायः पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Questions'}
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-[#E8DFD0] space-y-2">
              <h4 className="text-sm sm:text-base font-bold font-vedic text-[#3F0B12]">
                {language === 'hi' ? faq.qHi : faq.qEn}
              </h4>
              <p className="text-xs sm:text-sm text-[#5D3A29] leading-relaxed">
                {language === 'hi' ? faq.aHi : faq.aEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
