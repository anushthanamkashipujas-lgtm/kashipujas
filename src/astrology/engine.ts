/**
 * Vedic Sidereal Astrology (Lahiri Ayanamsha / Nirayana) Module
 *
 * Strict Accuracy Guideline:
 * We do NOT invent planetary positions, ascendants, nakshatras, or dashas.
 * This module isolates the astronomical and astrological calculations so a full
 * Swiss Ephemeris / planetary engine can be plugged in seamlessly.
 *
 * Current status: When an external Swiss Ephemeris engine is not yet connected,
 * this module explicitly reports that exact planetary longitudes and lagna degrees
 * require Acharya Ji's manual or ephemeris verification, preventing AI hallucination.
 */

export interface BirthDetails {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24-hour or AM/PM string)
  place: string; // City, State, Country
  latitude?: number;
  longitude?: number;
  timezoneOffsetHours?: number; // e.g. +5.5 for IST
}

export interface AstrologyEngineStatus {
  isExactEphemerisConfigured: boolean;
  system: 'Vedic Sidereal (Nirayana)';
  ayanamshaSystem: 'Lahiri (Chitrapaksha)';
  dashaSystem: 'Vimshottari (120-year cycle)';
  disclaimerHi: string;
  disclaimerEn: string;
}

export interface ComputedAstrologyContext {
  status: AstrologyEngineStatus;
  julianDay?: number;
  approxLahiriAyanamshaDeg?: number;
  formattedAyanamsha?: string;
  userBirthDataProvided: boolean;
  notes: string[];
}

/**
 * Calculates Julian Day Number for a given civil date in UT/IST.
 */
export function calculateJulianDay(year: number, month: number, day: number, hourFraction: number = 0): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5 + hourFraction / 24.0;
  return jd;
}

/**
 * Approximate Lahiri (Chitrapaksha) Ayanamsha formula:
 * J2000.0 (JD 2451545.0) Ayanamsha was approx 23° 51' 25.5" (23.85708°)
 * Precession rate is approximately 50.290966 arcseconds per tropical year.
 */
export function calculateApproxLahiriAyanamsha(julianDay: number): number {
  const T = (julianDay - 2451545.0) / 36525.0; // centuries since J2000.0
  const ayanamsha = 23.85708 + 1.39697 * T + 0.000308 * (T * T);
  return ayanamsha;
}

export function formatDegreesToDMS(deg: number): string {
  const d = Math.floor(deg);
  const minFloat = (deg - d) * 60;
  const m = Math.floor(minFloat);
  const s = Math.round((minFloat - m) * 60);
  return `${d}° ${m}' ${s}"`;
}

/**
 * Returns the current engine configuration and strict guidelines.
 */
export function getAstrologyEngineStatus(): AstrologyEngineStatus {
  return {
    isExactEphemerisConfigured: false, // Explicit: ephemeris tables not bundled, preventing hallucination
    system: 'Vedic Sidereal (Nirayana)',
    ayanamshaSystem: 'Lahiri (Chitrapaksha)',
    dashaSystem: 'Vimshottari (120-year cycle)',
    disclaimerHi:
      'सटीक वैदिक जन्मपत्रिका (लग्न, ग्रह स्थिति, नक्षत्र एवं विंशोत्तरी दशा) निरयण पद्धति व लाहिरी अयनांश पर आधारित होती है। चूंकि सटीक खगोलीय इफेमेरिस डेटाबेस पृथक है, आचार्य योगेश उपाध्याय जी काशी में हस्तलिखित पंचांग से सूक्ष्म गणना कर अनुष्ठान का सटीक संकल्प कराते हैं।',
    disclaimerEn:
      'Accurate Vedic sidereal charts (Lagna, Planetary degrees, Nakshatras & Vimshottari Dasha) strictly require Lahiri Ayanamsha calculations. Exact degree-level chart calculations are prepared and verified by Acharya Yogesh Upadhyay Ji using authentic Kashi Panchang before ritual Sankalp.',
  };
}

/**
 * Prepares the transparent astrology context to be passed to Gemini.
 */
export function processAstrologyContext(details?: Partial<BirthDetails>): ComputedAstrologyContext {
  const status = getAstrologyEngineStatus();
  const notes: string[] = [
    'System: Vedic Sidereal Astrology (Nirayana).',
    'Ayanamsha: Lahiri (Chitrapaksha).',
    'Dasha System: Vimshottari Dasha (120-year cycle).',
    'Accuracy Mandate: Do NOT fabricate imaginary planetary degrees, exact ascendant, or unverified dashas.',
    'Guidance Rule: Provide philosophical, deity, and scriptural remedies based on user concerns and suggest authentic Kashi Pujas (e.g. Mahamrityunjaya, Rudrabhishek, Navagraha Shanti, Kaal Sarp Shanti) with their Vedic significance.',
  ];

  let julianDay: number | undefined;
  let approxLahiriAyanamshaDeg: number | undefined;
  let formattedAyanamsha: string | undefined;

  if (details?.date) {
    try {
      const parts = details.date.split('-').map(Number);
      if (parts.length === 3) {
        const [year, month, day] = parts;
        let hourFraction = 12.0; // default noon if not specified
        if (details.time) {
          const timeParts = details.time.split(':').map(Number);
          if (timeParts.length >= 2 && !isNaN(timeParts[0]) && !isNaN(timeParts[1])) {
            hourFraction = timeParts[0] + timeParts[1] / 60.0;
          }
        }
        julianDay = calculateJulianDay(year, month, day, hourFraction);
        approxLahiriAyanamshaDeg = calculateApproxLahiriAyanamsha(julianDay);
        formattedAyanamsha = formatDegreesToDMS(approxLahiriAyanamshaDeg);
        notes.push(`Calculated approx Lahiri Ayanamsha for date: ${formattedAyanamsha}`);
      }
    } catch {
      // ignore parsing error gracefully
    }
  }

  return {
    status,
    julianDay,
    approxLahiriAyanamshaDeg,
    formattedAyanamsha,
    userBirthDataProvided: Boolean(details?.date && details?.time && details?.place),
    notes,
  };
}
