import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Sparkles,
  Send,
  Calendar,
  Clock,
  MapPin,
  AlertCircle,
  Shield,
  Loader2,
  BookOpen,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { BirthDetails } from '../astrology/engine.ts';

interface AstrologyAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectPujaForBooking?: (pujaId: string) => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const AstrologyAssistant: React.FC<AstrologyAssistantProps> = ({
  isOpen,
  onClose,
  language,
  onSelectPujaForBooking,
}) => {
  const t = TRANSLATIONS[language];

  const [birthDetails, setBirthDetails] = useState<Partial<BirthDetails>>({
    date: '',
    time: '',
    place: '',
  });
  const [showBirthDetailsForm, setShowBirthDetailsForm] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: t.astrologyAssistant.assistantGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    setErrorMsg(null);
    const newMsg: Message = {
      role: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // Call server-side API endpoint
      const res = await fetch('/api/astrology/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, text: m.text })),
          birthDetails: birthDetails,
          language: language,
        }),
      });

      if (!res.ok) {
  const errorData = await res.json().catch(() => ({})) as { error?: string };
  throw new Error(errorData.error || `Server responded with status ${res.status}`);
}

      const data: { reply?: string; error?: string } = await res.json();
      const modelReply: Message = {
        role: 'model',
        text: data.reply || (language === 'hi' ? 'हर हर महादेव! आपका प्रश्न प्राप्त हुआ।' : 'Har Har Mahadev!'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelReply]);
    } catch (err: any) {
      console.error('Astrology chat error:', err);
      setErrorMsg(
        err?.message ||
          (language === 'hi'
            ? 'परामर्श सेवा से संपर्क करने में असमर्थ। कृपया कुछ क्षण उपरांत पुनः प्रयास करें।'
            : 'Unable to connect to Astrology AI. Please check your network or try again.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#FFFDF9] rounded-2xl w-full max-w-3xl h-[92vh] max-h-[850px] flex flex-col shadow-2xl border-2 border-[#C69214]/50 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#5E141D] text-[#FAF6ED] px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-[#3F0B12]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D96800] to-[#A43F00] flex items-center justify-center text-amber-200 shadow-xs">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-vedic text-amber-200">
                  {t.astrologyAssistant.title}
                </h3>
                <span className="text-[10px] bg-amber-400/20 text-amber-200 border border-amber-400/30 px-2 py-0.5 rounded-full font-sans">
                  Lahiri Ayanamsha
                </span>
              </div>
              <p className="text-xs text-amber-100/70">
                {t.astrologyAssistant.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Accuracy & Ephemeris Strict Notice Banner */}
        <div className="bg-[#FAF4EA] border-b border-[#E8DFD0] px-4 py-2 text-[11px] sm:text-xs text-[#5D3A29] flex items-start gap-2">
          <Info className="w-4 h-4 text-[#D96800] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold text-[#3F0B12]">
              {language === 'hi' ? 'वैदिक निरयण सिद्धांत: ' : 'Vedic Sidereal Principle: '}
            </span>
            {t.astrologyAssistant.accuracyNotice}
          </p>
        </div>

        {/* Collapsible Birth Details Bar */}
        <div className="bg-white border-b border-[#E8DFD0] px-4 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4A2E1B]">
              <Calendar className="w-3.5 h-3.5 text-[#D96800]" />
              <span>{t.astrologyAssistant.birthFormTitle}</span>
              {birthDetails.date && (
                <span className="text-[11px] bg-amber-100 text-[#D96800] px-2 py-0.5 rounded font-mono">
                  {birthDetails.date} {birthDetails.time ? `@ ${birthDetails.time}` : ''} ({birthDetails.place || 'Kashi'})
                </span>
              )}
            </div>
            <button
              onClick={() => setShowBirthDetailsForm(!showBirthDetailsForm)}
              className="text-xs font-bold text-[#D96800] hover:underline cursor-pointer"
            >
              {showBirthDetailsForm
                ? (language === 'hi' ? 'छिपाएं' : 'Hide')
                : (language === 'hi' ? 'विवरण दर्ज करें' : 'Edit Birth Info')}
            </button>
          </div>

          {showBirthDetailsForm && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 mt-2 border-t border-stone-100">
              <div>
                <label className="text-[11px] font-bold text-stone-600 block mb-1">
                  {t.astrologyAssistant.dob}
                </label>
                <input
                  type="date"
                  value={birthDetails.date || ''}
                  onChange={(e) => setBirthDetails({ ...birthDetails, date: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded focus:border-[#D96800] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-600 block mb-1">
                  {t.astrologyAssistant.time}
                </label>
                <input
                  type="time"
                  value={birthDetails.time || ''}
                  onChange={(e) => setBirthDetails({ ...birthDetails, time: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded focus:border-[#D96800] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-600 block mb-1">
                  {t.astrologyAssistant.place}
                </label>
                <input
                  type="text"
                  placeholder="उदा. वाराणसी, यूपी"
                  value={birthDetails.place || ''}
                  onChange={(e) => setBirthDetails({ ...birthDetails, place: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded focus:border-[#D96800] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-sacred-pattern">
          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';

            return (
              <div
                key={index}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-xs whitespace-pre-wrap ${
                    isUser
                      ? 'bg-[#D96800] text-white rounded-br-xs'
                      : 'bg-white text-[#3F0B12] border border-[#E8DFD0] rounded-bl-xs'
                  }`}
                >
                  {!isUser && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#D96800] mb-1 font-vedic">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'वैदिक परामर्शक' : 'Vedic Advisor'}</span>
                    </div>
                  )}

                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-[#7B4D2B] bg-amber-50 p-3 rounded-xl border border-amber-200 max-w-xs animate-pulse">
              <Loader2 className="w-4 h-4 text-[#D96800] animate-spin" />
              <span>
                {language === 'hi'
                  ? 'वैदिक शास्त्रों एवं पंचांग का अवलोकन हो रहा है...'
                  : 'Analyzing Vedic scriptures & principles...'}
              </span>
            </div>
          )}

          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{errorMsg}</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Question Prompts */}
        <div className="px-4 py-2 bg-stone-50 border-t border-[#E8DFD0] overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[11px] text-stone-500 font-bold uppercase shrink-0">
              {language === 'hi' ? 'सुझावित प्रश्न:' : 'Suggested:'}
            </span>
            {t.astrologyAssistant.suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSendMessage(q)}
                className="text-xs bg-white hover:bg-amber-100/60 text-[#5E141D] border border-stone-200 px-3 py-1 rounded-full transition-colors shrink-0 cursor-pointer disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E8DFD0]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              disabled={isLoading}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.astrologyAssistant.questionPlaceholder}
              className="flex-1 px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:border-[#D96800] focus:ring-1 focus:ring-[#D96800] disabled:bg-stone-100"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-2.5 bg-[#D96800] hover:bg-[#B75300] text-white font-semibold text-sm rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{t.astrologyAssistant.askButton}</span>
            </button>
          </form>

          <p className="text-[11px] text-stone-400 text-center mt-2">
            {t.astrologyAssistant.safetyNotice}
          </p>
        </div>
      </div>
    </div>
  );
};
