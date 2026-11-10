import { processAstrologyContext, type BirthDetails } from '../../../src/astrology/engine';

interface Env {
  GEMINI_API_KEY: string;
}

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    if (!env.GEMINI_API_KEY) {
      return Response.json(
        { error: 'Gemini API key is not configured in Cloudflare.' },
        { status: 503 }
      );
    }

    const body = await request.json() as {
      messages?: ChatMessage[];
      birthDetails?: Partial<BirthDetails>;
      language?: 'hi' | 'en';
    };

    const { messages, birthDetails, language = 'hi' } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: 'Messages array is required.' },
        { status: 400 }
      );
    }

    const astrologyContext = processAstrologyContext(birthDetails);

    const systemInstruction = `
You are the dedicated Vedic Astrology and Puja Consultant for Kashi Anushthan under Acharya Yogesh Upadhyay Ji in Varanasi.

Follow Vedic Sidereal Nirayana Jyotish and Lahiri Ayanamsha.
Never invent exact planetary degrees, Lagna, Nakshatra Pada or Vimshottari Dasha timings.
The supplied astrology engine does not contain an exact planetary ephemeris.
Explain that precise chart calculations are verified by Acharya Yogesh Upadhyay Ji using the authentic handwritten Kashi Panchang.
Never frighten users or guarantee miracles.
Give compassionate, responsible spiritual guidance.
Recommend relevant pujas only when appropriate.
Bookings: WhatsApp +91 8210803558, Email vkbxr258@gmail.com.
Starting puja price: Rs. 501. Final dakshina and samagri depend on ritual scale.
Respond in ${language === 'en' ? 'English' : 'Hindi in Devanagari script'}.
Maintain a respectful and devotional tone.

Astrology calculation context:
${JSON.stringify(astrologyContext)}

Birth details:
${JSON.stringify(birthDetails || {})}
`;

    const contents = messages.map((message) => ({
      role: message.role === 'model' ? 'model' : 'user',
      parts: [{ text: String(message.text || '') }],
    }));

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
          contents,
        }),
      }
    );

    const data = await response.json() as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text?: string }>;
        };
      }>;
      error?: { message?: string };
    };

    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || 'Gemini API request failed.' },
        { status: response.status }
      );
    }

    const reply = data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || '')
      .join('')
      .trim();

    if (!reply) {
      return Response.json(
        { error: 'AI could not generate a response. Please try again.' },
        { status: 502 }
      );
    }

    return Response.json({ reply });
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error
          ? error.message
          : 'An internal server error occurred.',
      },
      { status: 500 }
    );
  }
};
