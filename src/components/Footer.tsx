import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface FooterProps {
  language: Language;
  onNavigate: (tab: 'home' | 'puja' | 'booking' | 'contact') => void;
  onOpenAstrology: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate, onOpenAstrology }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#3F0B12] text-[#FAF6ED] border-t-2 border-[#C69214]/40 mt-16">
      {/* Sacred Mantra Banner */}
      <div className="bg-[#5E141D] py-4 px-4 text-center border-b border-[#C69214]/20">
        <p className="font-vedic text-sm sm:text-base text-amber-200 tracking-wide">
          {t.footer.shloka}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Acharya Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D96800] to-[#A43F00] flex items-center justify-center text-amber-200 font-vedic text-xl font-bold shadow-xs">
                ॐ
              </div>
              <div>
                <span className="text-xl font-bold font-vedic text-amber-300 block">
                  {t.brand.name}
                </span>
                <span className="text-xs text-amber-100/70 block">
                  {t.brand.sub}
                </span>
              </div>
            </div>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              {t.footer.about}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/60 px-3 py-1 rounded-md border border-amber-600/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{t.contactPage.designation}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold font-vedic text-amber-300 border-b border-amber-400/20 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('puja')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> {t.nav.pujas} (17 वैदिक पूजाएं)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> {t.nav.booking} (संकल्प प्रपत्र)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAstrology}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D96800]" />
                  <span>{t.nav.astrology} (Vedic AI)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> {t.nav.contact} (आचार्य योगेश जी)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sacred Pujas Spotlight */}
          <div className="space-y-3">
            <h4 className="text-base font-bold font-vedic text-amber-300 border-b border-amber-400/20 pb-2">
              {language === 'hi' ? 'प्रमुख वैदिक अनुष्ठान' : 'Major Vedic Pujas'}
            </h4>
            <ul className="space-y-1.5 text-xs text-amber-100/75">
              <li>• महामृत्युंजय सवा लाख जाप (Mahamrityunjaya)</li>
              <li>• काशी रुद्राभिषेक पूजा (Rudrabhishek)</li>
              <li>• लघु रुद्र एवं महारुद्र महायज्ञ (Maharudra)</li>
              <li>• नवग्रह शांति एवं विशिष्ट हवन (Navagraha)</li>
              <li>• कालसर्प दोष निवारण पूजा (Kaal Sarp)</li>
              <li>• नवचंडी एवं दुर्गा सप्तशती (Chandi Path)</li>
              <li>• गृह एवं व्यापार वास्तु शांति (Vastu Shanti)</li>
              <li className="pt-1 text-amber-300 font-medium">
                • {language === 'hi' ? 'प्रारंभिक सांकेतिक शुल्क ₹501 से शुरू' : 'Starting token dakshina from ₹501'}
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-base font-bold font-vedic text-amber-300 border-b border-amber-400/20 pb-2">
              {language === 'hi' ? 'आचार्य जी से संपर्क' : 'Contact Acharya Ji'}
            </h4>
            <div className="space-y-2.5 text-xs text-amber-100/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.contactPage.addressValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+918210803558" className="hover:text-white font-mono tabular-nums">
                  +91 8210803558
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918210803558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-300"
                >
                  WhatsApp: +91 8210803558
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:vkbxr258@gmail.com" className="hover:text-white font-mono">
                  vkbxr258@gmail.com
                </a>
              </div>
              <p className="text-[11px] text-amber-200/60 pt-1">
                {t.contactPage.timingsValue}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/70 gap-4">
          <p>{t.footer.rights}</p>
          <p className="flex items-center gap-1.5">
            <span>{t.footer.kashiDham}</span>
            <span className="text-amber-400">·</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
              <span>सत्यम् शिवम् सुन्दरम्</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
