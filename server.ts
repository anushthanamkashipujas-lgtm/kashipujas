import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { processAstrologyContext, BirthDetails } from './src/astrology/engine.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI on the server side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
} else {
  console.warn('GEMINI_API_KEY is not set in environment. Gemini features will return a configuration notice.');
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Kashi Anushthan Server',
    hasGeminiKey: Boolean(apiKey),
    timestamp: new Date().toISOString(),
  });
});

// Vedic Astrology AI Consultation Endpoint
interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

app.post('/api/astrology/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { messages, birthDetails, language } = req.body as {
      messages: ChatMessage[];
      birthDetails?: Partial<BirthDetails>;
      language?: 'hi' | 'en';
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Messages array is required' });
      return;
    }

    if (!aiClient) {
      res.status(503).json({
        error:
          language === 'en'
            ? 'Gemini API key is not configured in Settings > Secrets. Please check your AI Studio secrets.'
            : 'Gemini API कुंजी वातावरण में उपलब्ध नहीं है। कृपया Settings > Secrets में API Key जांचें।',
      });
      return;
    }

    // Process Vedic sidereal astrology context
    const astrologyContext = processAstrologyContext(birthDetails);

    const systemInstruction = `
You are the dedicated Vedic Astrology and Puja Consultant for "Kashi Anushthan" (काशी अनुष्ठान), under the venerable guidance of Acharya Yogesh Upadhyay Ji in holy Varanasi (Kashi).

CORE PRINCIPLES & ACCURACY:
1. Vedic Sidereal Astrology (Nirayana Jyotish) & Lahiri Ayanamsha (Chitrapaksha):
   - You strictly follow classical Vedic Jyotish principles (Parashari, Jaimini, Shukla Yajurvedic traditions).
   - IMPORTANT ACCURACY RULE: Do NOT invent, hallucinate, or fabricate exact planetary degrees, exact ascendant (Lagna), exact nakshatra padas, or exact Vimshottari dasha timings unless genuinely supplied by the user.
   - The system status is: Exact Swiss Ephemeris database is isolated. Transparently explain that accurate birth chart calculations according to Lahiri Ayanamsha are verified personally by Acharya Yogesh Upadhyay Ji using authentic handwritten Kashi Panchang prior to the ritual Sankalp.
2. Compassionate, Sattvic & Responsible Guidance:
   - NEVER frighten the user (no "heavy disaster is coming", no curses, no fear-mongering).
   - NEVER guarantee magic 100% instant outcomes or miracle fixes.
   - Emphasize devotion (Shraddha), right action (Karma), prayer, and the grace of Bhagwan Shiva & the deities in Kashi.
3. Recommend Relevant Kashi Anushthan Pujas:
   Based on the seeker's concerns or planetary questions, recommend relevant Vedic rituals from our sacred catalog and explain the spiritual/scriptural reasons:
   - Mahamrityunjaya Jaap: For chronic ailments, health recovery, fear of mortality, vitality, Maraka dasha relief.
   - Rudrabhishek: For inner peace, mental calm, Lord Shiva's divine grace, Chandrama (Moon) afflictions.
   - Laghu Rudra / Maharudra: For major life breakthroughs, high executive success, ancestral hurdles, profound spiritual cleansing.
   - Navagraha Shanti: For pacifying multiple afflicted planets, recurring career hurdles, harmony.
   - Surya Puja & Aditya Hridaya: For government/career growth, vitality, confidence, fatherly well-being.
   - Shani Shanti: For Sade Sati, Shani Dhaiya, persistent delays, neurological or joint issues.
   - Rahu-Ketu Shanti: For sudden setbacks, anxiety, unknown fears, illusions.
   - Kaal Sarp Shanti: For 12 types of Kaal Sarp doshas, recurring snake visions, delayed marriage/progeny.
   - Satyanarayan Puja: For family harmony, housewarming, milestones, prosperity.
   - Vishnu Sahasranama: For mental purity, strengthening Jupiter (Guru), wisdom, children's welfare.
   - Durga Saptashati / Chandi Path / Navchandi: For courage, defeating obstacles/enemies, litigation, supreme protection.
   - Ganesh Puja: For removing obstacles at the start of new business, education, marriage.
   - Vastu Shanti: For resolving architectural and planetary energy imbalances in house or business.
   - Ram Naam Jaap: For sublime peace, burning past karmic debts, spiritual devotion.
4. Booking & Contact Details:
   - Mention that bookings and Vedic Sankalp can be requested through Kashi Anushthan, with Acharya Yogesh Upadhyay Ji reachable on WhatsApp (+91 8210803558) and email (vkbxr258@gmail.com).
   - Starting price for pujas is ₹501, with final dakshina & samagri depending on the ritual scale.
5. Language:
   - Respond in the requested language: ${language === 'en' ? 'English' : 'Hindi (हिन्दी in Devanagari script)'}.
   - Maintain a respectful, divine, polite tone ("हर हर महादेव", "सादर प्रणाम", etc.).

CURRENT CONTEXT:
- User Birth Details Provided: ${astrologyContext.userBirthDataProvided ? JSON.stringify(birthDetails) : 'Not specified yet (offer to incorporate them if user wishes)'}
- Lahiri Ayanamsha approx for date: ${astrologyContext.formattedAyanamsha || 'N/A'}
- Ephemeris Engine status: ${astrologyContext.status.disclaimerHi}
`;

    // Format conversation history for Gemini contents
    const contents = messages.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

    let replyText: string | undefined;

    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
        },
      });
      if (response && response.text) {
        replyText = response.text;
      }
    } catch (err: any) {
      console.warn('Gemini 3.8 Flash temporary spike or capacity limit:', err?.message || err);
      // Try gemini-flash-latest once
      try {
        const fallbackRes = await aiClient.models.generateContent({
          model: 'gemini-flash-latest',
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
          },
        });
        if (fallbackRes && fallbackRes.text) {
          replyText = fallbackRes.text;
        }
      } catch (fallbackErr: any) {
        console.warn('Fallback also busy:', fallbackErr?.message || fallbackErr);
      }
    }

    if (!replyText) {
      // Provide authentic Vedic guidance based on user's query context when upstream is temporarily busy
      const lastUserMsg = messages[messages.length - 1]?.text?.toLowerCase() || '';
      const isHealth = lastUserMsg.includes('स्वास्थ्य') || lastUserMsg.includes('रोग') || lastUserMsg.includes('health') || lastUserMsg.includes('बीमार');
      const isShani = lastUserMsg.includes('शनि') || lastUserMsg.includes('साढ़ेसाती') || lastUserMsg.includes('shani') || lastUserMsg.includes('विलंब');
      const isKaalSarp = lastUserMsg.includes('कालसर्प') || lastUserMsg.includes('kaal sarp') || lastUserMsg.includes('सर्प');
      const isPeace = lastUserMsg.includes('शांति') || lastUserMsg.includes('रुद्राभिषेक') || lastUserMsg.includes('peace') || lastUserMsg.includes('तनाव');

      if (language === 'en') {
        let specificPuja = 'Kashi Rudrabhishek and Navagraha Shanti';
        let reason = 'harmonize planetary vibrations and bring mental clarity.';
        if (isHealth) {
          specificPuja = 'Mahamrityunjaya Jaap & Anushthan (1.25 Lakh or 51,000 chants)';
          reason = 'Rigvedic mantras invoke Bhagwan Shiva as Tryambakam for vital energy, recovery, and longevity.';
        } else if (isShani) {
          specificPuja = 'Shani Shanti, Tailabhishekam & Vedic Havan';
          reason = 'mitigate karmic friction during Shani Sade Sati or Dhaiya periods.';
        } else if (isKaalSarp) {
          specificPuja = 'Kaal Sarp Dosh Nivaran Puja with Silver Nag-Nagin';
          reason = 'pacify Rahu-Ketu nodal axis in Varanasi.';
        } else if (isPeace) {
          specificPuja = 'Shukla Yajurvedic Kashi Rudrabhishek';
          reason = 'soothe the Moon (Chandra) and dispel afflictions with holy Ganga water.';
        }

        replyText =
          `Har Har Mahadev! In Vedic sidereal astrology (Lahiri Ayanamsha), your query relates to balancing planetary energies and invoking divine grace.\n\n` +
          `• Recommended Ritual in Kashi: ${specificPuja}.\n` +
          `• Spiritual Reason: According to Vedic scriptures, ${reason}\n\n` +
          `Starting token fee begins at ₹501. Note: Exact chart calculations require handwritten Kashi Panchang analysis. You can request a personalized Vedic Sankalp through our Booking page or connect directly with Acharya Yogesh Upadhyay Ji on WhatsApp (+91 8210803558).`;
      } else {
        let specificPuja = 'काशी रुद्राभिषेक एवं नवग्रह शांति हवन';
        let reason = 'समस्त ग्रहों की अनुकूलता, मानसिक शांति एवं सकारात्मक ऊर्जा का संचार करता है।';
        if (isHealth) {
          specificPuja = 'महामृत्युंजय सवा लाख अथवा 51,000 जाप एवं अनुष्ठान';
          reason = 'ऋग्वेदोक्त महामृत्युंजय मंत्र अकाल भय मुक्ति, आरोग्य रक्षा तथा जीवनी शक्ति के संवर्धन हेतु सर्वोत्तम वैदिक कवच है।';
        } else if (isShani) {
          specificPuja = 'शनि शांति, तैलाभिषेक एवं शमी समिधा हवन';
          reason = 'शनि की साढ़ेसाती व ढैय्या में कर्मफल के भार को कम कर धैर्य व न्याय की कृपा प्रदान करता है।';
        } else if (isKaalSarp) {
          specificPuja = 'काशी में चांदी के नाग-नागिन जोड़े सहित कालसर्प दोष निवारण';
          reason = 'राहु-केतु के मध्य बंधे ग्रहों की ऊर्जा को मुक्त कर जीवन में आ रही रुकावटों को समाप्त करता है।';
        } else if (isPeace) {
          specificPuja = 'शुक्ल यजुर्वेदीय काशी रुद्राभिषेक पूजा';
          reason = 'चंद्रमा की शांति, मानसिक स्थिरता तथा भगवान शिव के अनुग्रह हेतु सर्वश्रेष्ठ अनुष्ठान है।';
        }

        replyText =
          `हर हर महादेव! वैदिक निरयण ज्योतिष (लाहिरी अयनांश) के शास्त्रीय सिद्धांतों के अनुसार आपके प्रश्न का आध्यात्मिक एवं शास्त्रोक्त मार्गदर्शन इस प्रकार है:\n\n` +
          `• काशी में अनुशंसित पूजा: ${specificPuja}।\n` +
          `• वैदिक कारण एवं महात्म्य: ${reason}\n\n` +
          `काशी अनुष्ठान में सभी पूजाओं का प्रारंभिक सांकेतिक शुल्क ₹501 से है। ध्यान रहे कि सूक्ष्म कुंडली एवं गोचर का अंतिम निर्णय आचार्य योगेश उपाध्याय जी द्वारा काशी पंचांग से किया जाता है। आप हमारी 'बुकिंग' पृष्ठ से संकल्प प्रपत्र भेज सकते हैं अथवा आचार्य जी से सीधे व्हाट्सएप (+91 8210803558) पर चर्चा कर सकते हैं।`;
      }
    }

    res.json({
      reply: replyText,
      astrologyContext: {
        system: astrologyContext.status.system,
        ayanamsha: astrologyContext.status.ayanamshaSystem,
        approxAyanamsha: astrologyContext.formattedAyanamsha,
        disclaimer: language === 'en' ? astrologyContext.status.disclaimerEn : astrologyContext.status.disclaimerHi,
      },
    });
  } catch (error: any) {
    console.error('Error in /api/astrology/chat:', error);
    res.status(500).json({
      error: error?.message || 'Internal server error while consulting Vedic Astrology AI',
    });
  }
});

// Setup Vite in development or serve static in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: Number(PORT),
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[Kashi Anushthan] Server running on http://0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
