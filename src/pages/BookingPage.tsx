import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageCircle,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  FileText,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { PUJA_SERVICES } from '../data/pujas.ts';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface BookingPageProps {
  language: Language;
  preselectedPujaId?: string;
  onPujaBookedClear?: () => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  language,
  preselectedPujaId,
}) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState({
    fullName: '',
    gotra: '',
    mobile: '',
    email: '',
    dob: '',
    exactBirthTime: '',
    birthPlace: '',
    fullAddress: '',
    selectedPuja: preselectedPujaId || PUJA_SERVICES[0].id,
    preferredPlace: t.bookingPage.placeOptions[0],
    desiredDate: '',
    sankalpNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');
  const [preparedMessageText, setPreparedMessageText] = useState('');
  const [copied, setCopied] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedPujaId) {
      setFormData((prev) => ({ ...prev, selectedPuja: preselectedPujaId }));
    }
  }, [preselectedPujaId]);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = language === 'hi' ? 'कृपया यजमान का पूरा नाम दर्ज करें' : 'Full name is required';
    if (!formData.gotra.trim()) errors.gotra = language === 'hi' ? 'कृपया गोत्र दर्ज करें (यदि अज्ञात हो तो कश्यप लिखें)' : 'Gotra is required';
    if (!formData.mobile.trim() || formData.mobile.length < 10) errors.mobile = language === 'hi' ? 'वैध मोबाइल नंबर दर्ज करें' : 'Valid mobile number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = language === 'hi' ? 'वैध ईमेल दर्ज करें' : 'Valid email is required';
    if (!formData.dob) errors.dob = language === 'hi' ? 'जन्म तिथि अनिवार्य है' : 'Date of birth is required';
    if (!formData.exactBirthTime.trim()) errors.exactBirthTime = language === 'hi' ? 'सटीक जन्म समय दर्ज करें' : 'Exact birth time is required';
    if (!formData.birthPlace.trim()) errors.birthPlace = language === 'hi' ? 'जन्म स्थान दर्ज करें' : 'Birthplace is required';
    if (!formData.fullAddress.trim()) errors.fullAddress = language === 'hi' ? 'पूर्ण पता दर्ज करें' : 'Full address is required';
    if (!formData.desiredDate) errors.desiredDate = language === 'hi' ? 'इच्छित पूजा तिथि चुनें' : 'Desired date is required';
    if (!formData.sankalpNotes.trim()) errors.sankalpNotes = language === 'hi' ? 'विशेष संकल्प अथवा मनोकामना लिखें' : 'Sankalp notes are required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    const selectedPujaObj = PUJA_SERVICES.find((p) => p.id === formData.selectedPuja);
    const pujaName = selectedPujaObj
      ? `${selectedPujaObj.nameHi} (${selectedPujaObj.nameEn})`
      : formData.selectedPuja;

    // Compose formatted WhatsApp text message
    const message =
      `🔱 *काशी अनुष्ठान - वैदिक पूजा संकल्प प्रपत्र* 🔱\n` +
      `आचार्य योगेश उपाध्याय जी सादर प्रणाम!\n` +
      `मैंने काशी अनुष्ठान से पूजा संकल्प हेतु संपूर्ण विवरण प्रेषित किया है:\n\n` +
      `👤 *यजमान का नाम:* ${formData.fullName}\n` +
      `🌿 *गोत्र:* ${formData.gotra}\n` +
      `📞 *मोबाइल नंबर:* ${formData.mobile}\n` +
      `✉️ *ईमेल आईडी:* ${formData.email}\n` +
      `📅 *जन्म तिथि (DOB):* ${formData.dob}\n` +
      `⏰ *सटीक जन्म समय:* ${formData.exactBirthTime}\n` +
      `📍 *जन्म स्थान:* ${formData.birthPlace}\n` +
      `🏠 *वर्तमान पता:* ${formData.fullAddress}\n` +
      `🕉️ *चयनित पूजा सेवा:* ${pujaName}\n` +
      `🏛️ *पसंदीदा स्थान/मंदिर:* ${formData.preferredPlace}\n` +
      `🗓️ *इच्छित पूजा तिथि:* ${formData.desiredDate}\n` +
      `📜 *विशेष संकल्प/मनोकामना:* ${formData.sankalpNotes}\n\n` +
      `_कृपया पंचांग अनुसार शुभ मुहूर्त, सामग्री एवं अंतिम दक्षिणा का मार्गदर्शन कर संकल्प पुष्ट करें।_\n` +
      `*हर हर महादेव!*`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918210803558?text=${encoded}`;

    setPreparedMessageText(message);
    setPreparedWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(preparedMessageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-[#5E141D]/10 text-[#5E141D] px-3.5 py-1 rounded-md text-xs font-semibold font-vedic border border-[#5E141D]/20">
          <span>ॐ श्री गणेशाय नमः</span>
          <span>·</span>
          <span>{language === 'hi' ? 'शास्त्रोक्त संकल्प प्रपत्र' : 'Vedic Sankalp Form'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-vedic text-[#3F0B12]">
          {t.bookingPage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#7B4D2B]">
          {t.bookingPage.subtitle}
        </p>
      </div>

      {/* Mandatory Non-Automatic Booking Confirmation Disclaimer Box */}
      <div className="bg-[#FAF4EA] border-2 border-amber-600/40 rounded-xl p-5 shadow-xs flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-[#D96800] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base font-bold text-[#3F0B12] font-vedic">
            {language === 'hi'
              ? 'महत्वपूर्ण सूचना: बुकिंग स्वतः (ऑटोमेटिक) पुष्ट नहीं होती'
              : 'Important Notice: Bookings Are NOT Confirmed Automatically'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5D3A29] leading-relaxed">
            {t.bookingPage.disclaimerBox}
          </p>
        </div>
      </div>

      {/* Successful Preparation Banner if already submitted */}
      {submitted && (
        <div className="bg-emerald-50 border-2 border-emerald-500/50 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-emerald-950 font-vedic">
                {language === 'hi'
                  ? 'संकल्प प्रपत्र सफलतापूर्वक तैयार हो चुका है!'
                  : 'Sankalp Details Prepared Successfully!'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
                {t.bookingPage.successNotice}
              </p>
            </div>
          </div>

          {/* Action buttons to trigger WhatsApp or copy */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={preparedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्हाट्सएप में पुनः खोलें' : 'Open in WhatsApp Again'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={handleCopy}
              className="px-4 py-2.5 bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100/50 font-medium text-sm rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? (language === 'hi' ? 'प्रतिलिपि बनाई गई!' : 'Copied!') : (language === 'hi' ? 'संदेश कॉपी करें' : 'Copy Message')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Detailed Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8DFD0] p-6 sm:p-10 shadow-xs space-y-6">
        <h3 className="text-lg font-bold font-vedic text-[#3F0B12] border-b border-[#E8DFD0] pb-3">
          {language === 'hi' ? '1. यजमान एवं जन्म विवरण' : '1. Yajman & Birth Details'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.fullName}</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder={language === 'hi' ? 'उदा. रविशंकर तिवारी' : 'e.g. Ravishankar Tiwari'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.fullName && <p className="text-xs text-red-600">{formErrors.fullName}</p>}
          </div>

          {/* Gotra */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B]">
              {t.bookingPage.labels.gotra}
            </label>
            <input
              type="text"
              value={formData.gotra}
              onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
              placeholder={language === 'hi' ? 'उदा. कश्यप / भारद्वाज / पराशर' : 'e.g. Kashyapa / Bharadwaj'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.gotra && <p className="text-xs text-red-600">{formErrors.gotra}</p>}
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.mobile}</span>
            </label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder={language === 'hi' ? '10 अंकों का मोबाइल नंबर' : '10-digit mobile number'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.mobile && <p className="text-xs text-red-600">{formErrors.mobile}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.email}</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@gmail.com"
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.email && <p className="text-xs text-red-600">{formErrors.email}</p>}
          </div>

          {/* Date of Birth */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.dob}</span>
            </label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.dob && <p className="text-xs text-red-600">{formErrors.dob}</p>}
          </div>

          {/* Exact Birth Time */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.exactBirthTime}</span>
            </label>
            <input
              type="text"
              value={formData.exactBirthTime}
              onChange={(e) => setFormData({ ...formData, exactBirthTime: e.target.value })}
              placeholder={language === 'hi' ? 'उदा. प्रातः 06:45 बजे / 18:30' : 'e.g. 06:45 AM or 18:30'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.exactBirthTime && <p className="text-xs text-red-600">{formErrors.exactBirthTime}</p>}
          </div>

          {/* Birth Place */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.birthPlace}</span>
            </label>
            <input
              type="text"
              value={formData.birthPlace}
              onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
              placeholder={language === 'hi' ? 'उदा. वाराणसी, उत्तर प्रदेश' : 'e.g. Varanasi, Uttar Pradesh'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.birthPlace && <p className="text-xs text-red-600">{formErrors.birthPlace}</p>}
          </div>

          {/* Full Residential Address */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-[#4A2E1B]">
              {t.bookingPage.labels.fullAddress}
            </label>
            <input
              type="text"
              value={formData.fullAddress}
              onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
              placeholder={language === 'hi' ? 'मकान संख्या, गली, शहर, पिन कोड' : 'House no, Street, City, Pin code'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.fullAddress && <p className="text-xs text-red-600">{formErrors.fullAddress}</p>}
          </div>
        </div>

        {/* Section 2: Puja & Venue Details */}
        <h3 className="text-lg font-bold font-vedic text-[#3F0B12] border-b border-[#E8DFD0] pt-4 pb-3">
          {language === 'hi' ? '2. अनुष्ठान एवं स्थान चयन' : '2. Ritual & Venue Selection'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Selected Puja Service */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-[#4A2E1B]">
              {t.bookingPage.labels.selectedPuja}
            </label>
            <select
              value={formData.selectedPuja}
              onChange={(e) => setFormData({ ...formData, selectedPuja: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800] font-medium text-[#3F0B12]"
            >
              {PUJA_SERVICES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nameHi} ({p.nameEn}) - ₹{p.startingPrice} {language === 'hi' ? 'से शुरू' : 'onwards'}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Temple or Place */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B]">
              {t.bookingPage.labels.preferredPlace}
            </label>
            <select
              value={formData.preferredPlace}
              onChange={(e) => setFormData({ ...formData, preferredPlace: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800] text-[#3F0B12]"
            >
              {t.bookingPage.placeOptions.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Desired Puja Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.desiredDate}</span>
            </label>
            <input
              type="date"
              value={formData.desiredDate}
              onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.desiredDate && <p className="text-xs text-red-600">{formErrors.desiredDate}</p>}
          </div>

          {/* Special Sankalp Notes */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-[#4A2E1B] flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.bookingPage.labels.sankalpNotes}</span>
            </label>
            <textarea
              rows={3}
              value={formData.sankalpNotes}
              onChange={(e) => setFormData({ ...formData, sankalpNotes: e.target.value })}
              placeholder={
                language === 'hi'
                  ? 'उदा. परिवार के स्वास्थ्य एवं दीर्घायु हेतु, नए व्यापार में वृद्धि हेतु, अथवा किसी ग्रह बाधा की शांति हेतु...'
                  : 'e.g. For health recovery, commercial prosperity, mitigating planetary afflictions...'
              }
              className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800]"
            />
            {formErrors.sankalpNotes && <p className="text-xs text-red-600">{formErrors.sankalpNotes}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-[#E8DFD0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            {language === 'hi'
              ? 'सबमिट करने पर विवरण सीधे +91 8210803558 पर व्हाट्सएप होगा।'
              : 'Submitting prepares your WhatsApp message to +91 8210803558.'}
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.bookingPage.labels.submitWhatsApp}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
