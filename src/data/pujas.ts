export interface PujaService {
  id: string;
  nameHi: string;
  nameEn: string;
  category: 'shiva' | 'graha' | 'devi' | 'shanti_dosha' | 'jaap_path' | 'sanskar';
  categoryLabelHi: string;
  categoryLabelEn: string;
  startingPrice: number;
  durationHi: string;
  durationEn: string;
  descriptionHi: string;
  descriptionEn: string;
  significanceHi: string;
  significanceEn: string;
  deityHi: string;
  deityEn: string;
  mantraHi?: string;
  mantraEn?: string;
  recommendedForHi: string[];
  recommendedForEn: string[];
  samagriIncludedHi: string;
  samagriIncludedEn: string;
}

export const PUJA_SERVICES: PujaService[] = [
  {
    id: 'mahamrityunjaya-jaap',
    nameHi: 'महामृत्युंजय जाप एवं अनुष्ठान',
    nameEn: 'Mahamrityunjaya Jaap & Anushthan',
    category: 'shiva',
    categoryLabelHi: 'शिव अनुष्ठान',
    categoryLabelEn: 'Shiva Rituals',
    startingPrice: 501,
    durationHi: '1.25 लाख / 51,000 / 21,000 मंत्र (3 से 7 दिन)',
    durationEn: '1.25 Lakh / 51,000 / 21,000 Mantras (3 to 7 Days)',
    deityHi: 'भगवान महामृत्युंजय शिव',
    deityEn: 'Bhagwan Mahamrityunjaya Shiva',
    mantraHi: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
    mantraEn: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam...',
    descriptionHi:
      'ऋग्वेदोक्त महामृत्युंजय मंत्र का सविधि सवा लाख या 51,000 जाप। काशी विश्वनाथ धाम व गंगा तट पर गंभीर रोग निवारण, अकाल मृत्यु भय मुक्ति, आयु रक्षा तथा मानसिक शांति हेतु सर्वोत्तम अनुष्ठान।',
    descriptionEn:
      'Consecrated chanting of the Rigvedic Mahamrityunjaya Mantra (1.25 lakh or 51,000 repetitions) performed in Kashi for health recovery, longevity, removal of chronic afflictions, and fearlessness.',
    significanceHi:
      'मारक दशा, शनि की साढ़ेसाती व राहु की महादशा में जीवन रक्षा एवं आरोग्य का दिव्य रक्षा-कवच।',
    significanceEn:
      'Sacred armor during Maraka dashas, Sade Sati, and severe astrological afflictions for health and vitality.',
    recommendedForHi: ['दीर्घकालीन असाध्य रोग', 'अकाल मृत्यु या दुर्घटना का भय', 'आयु एवं आरोग्य संवर्धन', 'गंभीर मानसिक तनाव'],
    recommendedForEn: ['Chronic health issues', 'Fear of accidents/untimely death', 'Longevity and vitality', 'Deep mental stress'],
    samagriIncludedHi: 'रुद्राक्ष माला, घृत, समिधा, दशांश हवन सामग्री, विशेष आयुर्वेदिक औषधियां।',
    samagriIncludedEn: 'Rudraksha rosary, pure ghee, samidha, Dashansh havan samagri, and medicinal herbs.',
  },
  {
    id: 'rudrabhishek',
    nameHi: 'काशी रुद्राभिषेक पूजा',
    nameEn: 'Kashi Rudrabhishek Puja',
    category: 'shiva',
    categoryLabelHi: 'शिव अनुष्ठान',
    categoryLabelEn: 'Shiva Rituals',
    startingPrice: 501,
    durationHi: '2 से 3 घंटे',
    durationEn: '2 to 3 Hours',
    deityHi: 'भगवान काशी विश्वनाथ',
    deityEn: 'Bhagwan Kashi Vishwanath',
    mantraHi: 'नमस्ते रुद्र मन्यव उतो त इषवे नमः। बाहुभ्यामुत ते नमः॥',
    mantraEn: 'Namaste Rudra Manyava Uto Ta Ishave Namah...',
    descriptionHi:
      'शुक्ल यजुर्वेद के रुद्राष्टाध्यायी के वैदिक मंत्रों द्वारा भगवान शिव का पंचामृत, गंगाजल, गन्ने का रस, मधु, एवं भस्म से अभिषेक। काशी के सिद्ध ज्योतिर्लिंग क्षेत्र में मनोकामना पूर्ति का मूल आधार।',
    descriptionEn:
      'Authentic Vedic Abhisheka of Lord Shiva according to Shukla Yajurveda Rudrashtadhyayi with Panchamrit, holy Ganga water, sugarcane juice, honey, and sacred bilva leaves.',
    significanceHi:
      'समस्त पापों का शमन, कुंडली के चंद्र दोष निवारण और पारिवारिक सुख-समृद्धि हेतु अमोघ उपाय।',
    significanceEn:
      'Dissolution of past karmas, lunar afflictions pacification, and blessing of peace and prosperity.',
    recommendedForHi: ['पारिवारिक सुख व शांति', 'रोग-शोक से मुक्ति', 'कार्य में आ रही बाधाएं', 'चंद्रमा की अनुकूलता'],
    recommendedForEn: ['Family peace and harmony', 'Freedom from illness', 'Overcoming career roadblocks', 'Moon afflicted remedies'],
    samagriIncludedHi: 'गंगाजल, पंचामृत, भस्म, बिल्वपत्र, धतूरा, इत्र, चंदन, जनेऊ व नैवेद्य।',
    samagriIncludedEn: 'Ganga water, Panchamrit, sacred ash, bilva patra, sandalwood paste, sacred thread, and naivedyam.',
  },
  {
    id: 'laghu-rudra',
    nameHi: 'लघु रुद्र अनुष्ठान',
    nameEn: 'Laghu Rudra Anushthan',
    category: 'shiva',
    categoryLabelHi: 'शिव अनुष्ठान',
    categoryLabelEn: 'Shiva Rituals',
    startingPrice: 501,
    durationHi: '1 पूर्ण दिवस (11 ब्राह्मण)',
    durationEn: '1 Full Day (11 Vedic Priests)',
    deityHi: 'एकादश रुद्र (11 Rudras)',
    deityEn: 'Ekadasha Rudras (11 Rudra Forms)',
    mantraHi: 'ॐ नमो भगवते रुद्राय',
    mantraEn: 'Om Namo Bhagavate Rudraya',
    descriptionHi:
      'रुद्राष्टाध्यायी के 121 आवर्तनों द्वारा 11 वैदिक ब्राह्मणों द्वारा एकादश रुद्रों का विशिष्ट अभिषेक एवं दशांश हवन। राज-योग, पद-प्रतिष्ठा तथा बड़े संकटों से मुक्ति हेतु कराया जाता है।',
    descriptionEn:
      'Consecrated chanting of 121 Rudra recitations by 11 learned Vedic Brahmins with Ekadasha Rudra worship and dedicated Dashansh Havan for state honours, career milestones, and profound protection.',
    significanceHi:
      'ग्रहों के अत्यंत उग्र प्रभाव, भूमि-भवन विवाद तथा उच्च प्रशासनिक सफलता हेतु अद्वितीय अनुष्ठान।',
    significanceEn:
      'Profound remedy for severe planetary afflictions, property disputes, and high administrative success.',
    recommendedForHi: ['उच्च पद एवं व्यापारिक वृद्धि', 'शत्रु एवं कानूनी संकट', 'कुल दोष व ग्रह पीड़ा', 'वंश वृद्धि एवं स्वास्थ्य'],
    recommendedForEn: ['High executive success', 'Legal and adversarial disputes', 'Ancestral pacification', 'Lineage prosperity'],
    samagriIncludedHi: '11 कलश, विशेष पंचामृत, सहस्त्र कमल-बिल्वपत्र, दशांश हवन सामग्री।',
    samagriIncludedEn: '11 consecrated kalash, abundant bilva leaves, special havan samagri, and vastram.',
  },
  {
    id: 'maharudra',
    nameHi: 'महारुद्र महायज्ञ',
    nameEn: 'Maharudra Mahayajna',
    category: 'shiva',
    categoryLabelHi: 'शिव अनुष्ठान',
    categoryLabelEn: 'Shiva Rituals',
    startingPrice: 501,
    durationHi: '3 से 5 दिवस (वैदिक विद्वत परिषद)',
    durationEn: '3 to 5 Days (Vedic Scholar Council)',
    deityHi: 'देवाधिदेव महादेव',
    deityEn: 'Devadhideva Mahadeva',
    mantraHi: 'श्री रुद्रम् - नमकम एवं चमकम्',
    mantraEn: 'Shri Rudram - Namakam and Chamakam',
    descriptionHi:
      '1,331 एकादशनी आवर्तनों से संपन्न होने वाला अत्यंत भव्य एवं अलौकिक वैदिक महायज्ञ। काशी की पावन धरा पर सम्पूर्ण कुल के कल्याण एवं आध्यात्मिक पराकाष्ठा हेतु संपन्न किया जाता है।',
    descriptionEn:
      'The monumental Vedic yajna encompassing 1,331 Rudra recitations with continuous stream of oblations and Vedic chanting for supreme spiritual grace and multi-generational prosperity.',
    significanceHi:
      'जन्म-जन्मांतर के संचित प्रारब्ध का शोधन तथा समस्त 9 ग्रहों और 27 नक्षत्रों की पूर्ण शांति।',
    significanceEn:
      'Cleansing of deep karmic debts and complete harmonizing of all 9 planets and 27 nakshatras.',
    recommendedForHi: ['कुल-खानदान का समग्र उत्थान', 'व्यापक सामाजिक व राष्ट्रीय संकट निवारण', 'सर्वतोमुखी विजय', 'मोक्ष एवं आत्मशुद्धि'],
    recommendedForEn: ['Holistic ancestral upliftment', 'Major life breakthroughs', 'Universal success', 'Moksha and spiritual zenith'],
    samagriIncludedHi: 'विशाल यज्ञशाला व्यवस्था, संपूर्ण वैदिक पूजन द्रव्य, आचार्य व ऋत्विक वरण।',
    samagriIncludedEn: 'Full yajnashala setup, rare sacred herbs, samidha, pure cow ghee, and vastram.',
  },
  {
    id: 'navagraha-shanti',
    nameHi: 'नवग्रह शांति एवं हवन',
    nameEn: 'Navagraha Shanti & Havan',
    category: 'graha',
    categoryLabelHi: 'ग्रह शांति',
    categoryLabelEn: 'Planetary Remedies',
    startingPrice: 501,
    durationHi: '3 से 4 घंटे',
    durationEn: '3 to 4 Hours',
    deityHi: 'समस्त नवग्रह मंडल (सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु)',
    deityEn: 'Nine Celestial Planets (Surya to Ketu)',
    mantraHi: 'ब्रह्मामुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च। गुरुश्च शुक्रः शनिराहुकेतवः कुर्वन्तु सर्वे मम सुप्रभातम्॥',
    mantraEn: 'Brahma Muraris Tripurantakari Bhanuh Shashi Bhumisuto Budhashcha...',
    descriptionHi:
      'नवग्रह मंडल पीठ पर प्रत्येक ग्रह के अधिदेवता, प्रत्यधिदेवता की स्थापना, ग्रह मंत्र जाप तथा उनकी विशिष्ट समिधाओं (आक, पलाश, खदिर, अपामार्ग आदि) द्वारा विधिवत हवन।',
    descriptionEn:
      'Vedic consecration of the Navagraha mandala with specific Beej mantras, adhidevatas, pratyadhidevatas, and havan with 9 sacred woods (Samidha) dedicated to each planet.',
    significanceHi:
      'जन्मकुंडली में ग्रहों के अशुभ प्रभाव को न्यून कर शुभ फल प्राप्त करने हेतु अत्यंत फलदायी।',
    significanceEn:
      'Balances malefic planetary vibrations in birth chart and activates auspicious opportunities.',
    recommendedForHi: ['एक साथ कई ग्रहों की पीड़ा', 'निरंतर असफलता एवं भाग्य-बाधा', 'गृह क्लेश व आर्थिक तंगी', 'कुंडली के ग्रह दोष'],
    recommendedForEn: ['Multiple malefic planetary dashas', 'Repeated career setbacks', 'Domestic discord', 'General chart imbalance'],
    samagriIncludedHi: 'नवग्रह यंत्र, नवधान्य, 9 प्रकार के वस्त्र, 9 समिधाएं, हवन सामग्री।',
    samagriIncludedEn: 'Navagraha yantra, 9 sacred grains, 9 colors of vastra, specific samidha, and havan items.',
  },
  {
    id: 'surya-puja',
    nameHi: 'भगवान सूर्य देव पूजा एवं आदित्य हृदय पाठ',
    nameEn: 'Surya Dev Puja & Aditya Hridaya Stotra',
    category: 'graha',
    categoryLabelHi: 'ग्रह शांति',
    categoryLabelEn: 'Planetary Remedies',
    startingPrice: 501,
    durationHi: '2 घंटे',
    durationEn: '2 Hours',
    deityHi: 'प्रत्यक्ष देव भगवान भास्कर',
    deityEn: 'Bhagwan Surya (Sun God)',
    mantraHi: 'ॐ घृणिः सूर्याय नमः / ॐ ह्रीं ह्रीं सूर्याय नमः',
    mantraEn: 'Om Ghrinih Suryaya Namah',
    descriptionHi:
      'गंगा तट पर तांबे के पात्र में लाल चंदन, कुमकुम, रक्त पुष्प से भगवान भुवनभास्कर को अर्घ्य, वैदिक सूर्य सूक्त एवं आदित्य हृदय स्तोत्र का पाठ तथा मदार की समिधा से हवन।',
    descriptionEn:
      'Sacred sunrise worship on the banks of holy Ganga to Lord Surya with copper arghya, Aditya Hridaya Stotra, and Vedic Surya Sukta for leadership, vitality, and father’s well-being.',
    significanceHi:
      'कुंडली में सूर्य नीच, ग्रहण दोष या पीड़ित होने पर आत्मबल, मान-सम्मान एवं सरकारी कार्यों में सफलता हेतु।',
    significanceEn:
      'Pacifies debilitated Sun, Grahan dosha, increases self-confidence, vitality, and success in state affairs.',
    recommendedForHi: ['पिता से संबंध या पिता का स्वास्थ्य', 'सरकारी नौकरी व राजकीय सम्मान', 'हृदय, नेत्र या अस्थि स्वास्थ्य', 'आत्मविश्वास की कमी'],
    recommendedForEn: ['Government jobs and civil recognition', 'Fatherly relations & health', 'Eye/bone vitality', 'Confidence and leadership'],
    samagriIncludedHi: 'ताम्र पात्र, लाल चंदन, रक्त पुष्प, गेहूं, गुड़, मदार की लकड़ी, हवन सामग्री।',
    samagriIncludedEn: 'Copper vessel, red sandalwood, red flowers, wheat, jaggery, and Surya havan wood.',
  },
  {
    id: 'shani-shanti',
    nameHi: 'शनि शांति एवं तैलाभिषेक पूजा',
    nameEn: 'Shani Shanti & Tailabhishekam',
    category: 'graha',
    categoryLabelHi: 'ग्रह शांति',
    categoryLabelEn: 'Planetary Remedies',
    startingPrice: 501,
    durationHi: '2 से 3 घंटे',
    durationEn: '2 to 3 Hours',
    deityHi: 'कर्मफलदाता भगवान शनिदेव',
    deityEn: 'Bhagwan Shanidev',
    mantraHi: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',
    mantraEn: 'Om Praam Preem Proum Sah Shanaishcharaya Namah',
    descriptionHi:
      'शनिदेव का काले तिल, उड़द, नीले पुष्प, सरसों का तेल एवं शमी पत्र से पूजन, शनि गायत्री व वैदिक मंत्र जाप तथा शमी समिधा से विशिष्ट शांति हवन।',
    descriptionEn:
      'Vedic Shanidev appeasement with pure mustard oil abhisheka, black sesame seeds, urad, Shami leaves, and 23,000 / 19,000 Vedic chants for mitigating karmic trials.',
    significanceHi:
      'शनि की साढ़ेसाती, ढैय्या, महादशा अथवा अंतर्दशा में संकट निवारण व न्यायप्रियता हेतु परम कल्याणकारी।',
    significanceEn:
      'Mitigates severe hardships of Shani Sade Sati, Dhaiya, and Kantaka Shani periods.',
    recommendedForHi: ['शनि की साढ़ेसाती व ढैय्या', 'कार्य में अत्यधिक विलंब व बाधा', 'जोड़ों व स्नायु के रोग', 'ऋण व कानूनी उलझनें'],
    recommendedForEn: ['Sade Sati & Shani Dhaiya', 'Persistent project delays', 'Joint/neurological ailments', 'Debts and legal hurdles'],
    samagriIncludedHi: 'तिल का तेल, काले उड़द, काला वस्त्र, लोहे की कील, शमी समिधा, हवन सामग्री।',
    samagriIncludedEn: 'Sesame/mustard oil, black urad, dark cloth, iron token, shami wood, and havan herbs.',
  },
  {
    id: 'rahu-ketu-shanti',
    nameHi: 'राहु-केतु शांति अनुष्ठान',
    nameEn: 'Rahu-Ketu Shanti Anushthan',
    category: 'graha',
    categoryLabelHi: 'ग्रह शांति',
    categoryLabelEn: 'Planetary Remedies',
    startingPrice: 501,
    durationHi: '3 घंटे',
    durationEn: '3 Hours',
    deityHi: 'छाया ग्रह राहु एवं केतु',
    deityEn: 'Shadow Planets Rahu & Ketu',
    mantraHi: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः / ॐ स्रां स्रीं स्रौं सः केतवे नमः',
    mantraEn: 'Om Bhram Bhreem Bhroum Sah Rahave Namah...',
    descriptionHi:
      'राहु के दूर्वा एवं केतु के कुशा द्वारा वैदिक मंत्रों से तुष्टि, उड़द एवं तिल से हवन। अनिद्रा, भ्रम, अज्ञात भय, अचानक होने वाले नुकसान तथा नजर दोष के निवारण हेतु काशी में श्रेष्ठ अनुष्ठान।',
    descriptionEn:
      'Pacification of karmic shadow nodes with Durva (for Rahu) and Kusha (for Ketu), specific beeja mantras, and targeted oblations to clear confusion, illusion, and sudden disruptions.',
    significanceHi:
      'राहु-केतु की दशा में होने वाले भ्रम, मानसिक अशांति एवं अचानक संकटों को शांत करता है।',
    significanceEn:
      'Dispels deep illusions, anxiety, sudden financial drops, and karmic obsessions.',
    recommendedForHi: ['अज्ञात भय, अनिद्रा एवं भ्रम', 'व्यापार में अचानक बड़ा घाटा', 'नजर दोष व नकारात्मक ऊर्जा', 'राहु या केतु की महादशा'],
    recommendedForEn: ['Unknown anxiety & sleeplessness', 'Sudden unexpected losses', 'Negative psychic influence', 'Rahu/Ketu Mahadasha'],
    samagriIncludedHi: 'दूर्वा, कुशा, गोमेद-लहसुनिया प्रतीक, काले-भूरे वस्त्र, सप्तधान्य, हवन सामग्री।',
    samagriIncludedEn: 'Durva, sacred Kusha grass, sapta-dhanya, dual-tone vastra, and Rahu-Ketu samidha.',
  },
  {
    id: 'kaal-sarp-shanti',
    nameHi: 'कालसर्प दोष निवारण पूजा',
    nameEn: 'Kaal Sarp Dosh Nivaran Puja',
    category: 'shanti_dosha',
    categoryLabelHi: 'दोष शांति',
    categoryLabelEn: 'Dosha Nivaran',
    startingPrice: 501,
    durationHi: '3 से 4 घंटे (नाग पंचमी या शुभ नक्षत्र)',
    durationEn: '3 to 4 Hours (Auspicious Tithi)',
    deityHi: 'नाग देवता एवं भगवान भोलेनाथ',
    deityEn: 'Nag Devata & Lord Shiva',
    mantraHi: 'ॐ नवकुलाय विद्महे विषदन्ताय धीमहि तन्नो सर्पः प्रचोदयात्॥',
    mantraEn: 'Om Navakulaya Vidmahe Visha Dantaya Dhimahi...',
    descriptionHi:
      'कुंडली में जब सभी 7 ग्रह राहु और केतु के बीच आ जाते हैं, तब बनने वाले 12 प्रकार के कालसर्प दोषों (अनंत, कुलिक, वासुकि, शंखपाल आदि) का काशी में चांदी के नाग-नागिन जोड़े के साथ शास्त्रीय निवारण।',
    descriptionEn:
      'Classical scriptural resolution of all 12 types of Kaal Sarp Doshas using silver serpent pair, consecrated Shiva abhishekam, and Nag Gayatri chants in the holy kshetra of Varanasi.',
    significanceHi:
      'जीवन में रुक-रुक कर आने वाली रुकावटों, विवाह में देरी व संतान संबंधी बाधाओं का समूल निवारण।',
    significanceEn:
      'Overcomes cyclical roadblocks, marriage delays, child-bearing anxieties, and recurring nightmares.',
    recommendedForHi: ['12 प्रकार के कालसर्प दोष', 'सपनों में सांप दिखना व भय', 'मेहनत के बाद भी सफलता न मिलना', 'विवाह एवं संतान में अत्यधिक विलंब'],
    recommendedForEn: ['All 12 Kaal Sarp configurations', 'Recurring snake dreams', 'Stagnation despite hard labor', 'Severe marriage delays'],
    samagriIncludedHi: 'चांदी के नाग-नागिन का जोड़ा, तांबे का कलश, दूध, काले तिल, धतूरा, विशिष्ट हवन सामग्री।',
    samagriIncludedEn: 'Silver Nag-Nagin pair, copper urn, raw milk, black sesame, bilva, and Vedic havan pack.',
  },
  {
    id: 'satyanarayan-puja',
    nameHi: 'श्री सत्यनारायण व्रत कथा एवं पूजन',
    nameEn: 'Shri Satyanarayan Vrat Katha & Puja',
    category: 'sanskar',
    categoryLabelHi: 'गृह संस्कार',
    categoryLabelEn: 'Sacred Samskaras',
    startingPrice: 501,
    durationHi: '2 से 2.5 घंटे',
    durationEn: '2 to 2.5 Hours',
    deityHi: 'भगवान श्री सत्यनारायण (विष्णु रूप)',
    deityEn: 'Lord Satyanarayana (Bhagwan Vishnu)',
    mantraHi: 'ॐ नमो भगवते वासुदेवाय',
    mantraEn: 'Om Namo Bhagavate Vasudevaya',
    descriptionHi:
      'स्कंद पुराण के रेवाखंड पर आधारित पांच अध्यायों की अमृतमयी कथा, केले के पत्तों का मंडप, पंजीरी व पंचामृत का दिव्य प्रसाद तथा श्री हरि विष्णु का सहस्त्र नाम से अर्चन।',
    descriptionEn:
      'Traditional narration of the 5 sacred chapters of Skanda Purana with banana tree altar, Panchamrit, wheat flour prasad, and soulful aarti for family blessings and auspicious beginnings.',
    significanceHi:
      'गृह-प्रवेश, विवाह, जन्म, व्यापार प्रारंभ व पूर्णिमा पर पारिवारिक शांति और अखंड सौभाग्य हेतु।',
    significanceEn:
      'Ideal for housewarming, weddings, birthdays, new ventures, and Purnima tithis for family harmony.',
    recommendedForHi: ['गृह प्रवेश व नवीन प्रतिष्ठान', 'पारिवारिक सौहार्द व सुख', 'संतान प्राप्ति व मांगलिक कार्य', 'पूर्णिमा का व्रत उद्यापन'],
    recommendedForEn: ['Griha Pravesh (Housewarming)', 'Family happiness and peace', 'Celebration of milestones', 'Purnima vows'],
    samagriIncludedHi: 'केले के खंभे, पंजीरी भोग, तुलसी दल, कलश, नारियल, पीत वस्त्र, कपूर व आरती सामग्री।',
    samagriIncludedEn: 'Banana leaves, Panjiri bhog, Tulsi leaves, kalash, coconut, yellow vastra, and aarti samagri.',
  },
  {
    id: 'vishnu-sahasranama',
    nameHi: 'श्री विष्णु सहस्रनाम पाठ एवं अर्चन',
    nameEn: 'Shri Vishnu Sahasranama Path & Archana',
    category: 'jaap_path',
    categoryLabelHi: 'जाप एवं पाठ',
    categoryLabelEn: 'Jaap & Scripture Path',
    startingPrice: 501,
    durationHi: '2 घंटे',
    durationEn: '2 Hours',
    deityHi: 'जगतपालक भगवान श्री हरि विष्णु',
    deityEn: 'Lord Vishnu (The Preserver)',
    mantraHi: 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्...',
    mantraEn: 'Shantakaram Bhujagashayanam Padmanabham Suresham...',
    descriptionHi:
      'महाभारत के अनुशासन पर्व से उद्भूत 1000 पवित्र नामों का तुलसी पत्रों द्वारा सहस्रार्चन पाठ। मन की शुद्धि, बृहस्पति ग्रह की प्रबलता और जीवन में धर्म-अर्थ-काम-मोक्ष की प्राप्ति हेतु।',
    descriptionEn:
      'Sacred chanting of the 1,000 names of Lord Vishnu accompanied by Archana using fresh Tulsi leaves. Strengthens Jupiter (Guru), brings mental clarity, and dispels karmic burdens.',
    significanceHi:
      'गुरु ग्रह की नीचता व संतान बाधा दूर करने तथा मानसिक शांति के लिए अत्यंत प्रभावशाली।',
    significanceEn:
      'Remedy for afflicted Jupiter (Guru), delays in progeny, and cultivating profound inner serenity.',
    recommendedForHi: ['बृहस्पति ग्रह की मजबूती', 'विद्या, ज्ञान व एकाग्रता', 'संतान सुख में वृद्धि', 'मानसिक तनाव व अशांति से मुक्ति'],
    recommendedForEn: ['Strengthening Jupiter (Brihaspati)', 'Academic clarity & wisdom', 'Children well-being', 'Sublime inner stillness'],
    samagriIncludedHi: 'ताजा तुलसी दल, पीले पुष्प, चंदन, पंचामृत, शुद्ध घी का दीपक, पीतांबर वस्त्र।',
    samagriIncludedEn: 'Fresh Tulsi leaves, yellow blossoms, sandalwood, panchamrit, and pure cow ghee lamp.',
  },
  {
    id: 'durga-saptashati-path',
    nameHi: 'श्री दुर्गा सप्तशती संपूर्ण पाठ',
    nameEn: 'Shri Durga Saptashati Sampurna Path',
    category: 'devi',
    categoryLabelHi: 'भगवती दुर्गा अनुष्ठान',
    categoryLabelEn: 'Devi Rituals',
    startingPrice: 501,
    durationHi: '1 दिवस (कवच, कीलक, अर्गला, 13 अध्याय व सिद्ध कुंजिका)',
    durationEn: '1 Day (Kavach, Keelak, Argala, 13 Chapters & Kunjika)',
    deityHi: 'माँ आद्यशक्ति भगवती दुर्गा',
    deityEn: 'Maa Aadyashakti Durga',
    mantraHi: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥',
    mantraEn: 'Sarva Mangala Mangalye Shive Sarvartha Sadhike...',
    descriptionHi:
      'मार्कंडेय पुराणोक्त 700 श्लोकों का संपुटित शास्त्रीय पाठ। कवच, अर्गला, कीलक, 13 अध्यायों का विधिवत पारायण, हवन तथा कन्या पूजन। समस्त संकटों का नाश और भगवती की अखंड कृपा।',
    descriptionEn:
      'Complete Vedic recitation of the 700 verses of Devi Mahatmyam including Kavacha, Argala, Kilaka, 13 chapters, and Siddha Kunjika Stotram with dedicated oblations and Kanya Puja.',
    significanceHi:
      'शत्रु भय, नकारात्मक ऊर्जा, व्यापारिक मंदी तथा ग्रह पीड़ा के समूल नाश हेतु आद्यशक्ति का वरदान।',
    significanceEn:
      'Destruction of adversarial enmities, negative energies, business stagnation, and fear.',
    recommendedForHi: ['शत्रु बाधा व भय', 'घर में नकारात्मक ऊर्जा', 'कोर्ट-कचहरी व विवाद', 'मनोवांछित कार्य सिद्धि'],
    recommendedForEn: ['Protection from adversaries', 'Clearing negative spaces', 'Legal victories', 'Accomplishment of cherished desires'],
    samagriIncludedHi: 'लाल चुनरी, कुमकुम, अक्षत, नारियल, हवन समिधा, घृत, लौंग-इलायची भोग।',
    samagriIncludedEn: 'Red chunari, kumkum, sacred grains, coconut, havan herbs, ghee, and cloves.',
  },
  {
    id: 'chandi-path',
    nameHi: 'श्री चंडी पाठ एवं हवन',
    nameEn: 'Shri Chandi Path & Havan',
    category: 'devi',
    categoryLabelHi: 'भगवती दुर्गा अनुष्ठान',
    categoryLabelEn: 'Devi Rituals',
    startingPrice: 501,
    durationHi: '4 से 5 घंटे',
    durationEn: '4 to 5 Hours',
    deityHi: 'माँ चंडिका परमेश्वरी',
    deityEn: 'Maa Chandika Parameshwari',
    mantraHi: 'ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे',
    mantraEn: 'Om Aim Hreem Kleem Chamundayai Vichche',
    descriptionHi:
      'भगवती चंडिका का सविधि आवाहन, नवार्ण मंत्र का सविधि जाप, चंडी पाठ और अग्निहोत्र में सुगंधित औषधियों, खीर व शहद की आहुतियों द्वारा महाहवन। असाध्य संकटों में अभय प्रदान करने वाला पाठ।',
    descriptionEn:
      'Classical recitation of the Chandi Path with Navarna Mantra chanting and intense Agnihotra offerings of kheer, honey, and sacred samidha for unshakeable courage and triumph.',
    significanceHi:
      'घोर संकटों, अदालती मामलों, व्यापारिक बाधाओं और असाध्य कष्टों में देवी चंडिका का प्रत्यक्ष संरक्षण।',
    significanceEn:
      'Divine protection in severe crises, litigation hurdles, and insurmountable obstacles.',
    recommendedForHi: ['अत्यंत कठिन संकट व मुकदमे', 'दृढ़ शत्रु पराजय', 'व्यापार में भारी रुकावटें', 'पारिवारिक रक्षा'],
    recommendedForEn: ['Difficult litigation & crises', 'Defeating malefic enemies', 'Overcoming heavy roadblocks', 'Family sanctuary'],
    samagriIncludedHi: 'चंडी पाठ पुस्तक, नवार्ण यंत्र, दशांश हवन सामग्री, खीर आहुति, लाल वस्त्र।',
    samagriIncludedEn: 'Chandi Path scriptures, Navarna yantra, payasam (kheer) offerings, and red vastra.',
  },
  {
    id: 'navchandi',
    nameHi: 'श्री नवचंडी महायज्ञ',
    nameEn: 'Shri Navchandi Mahayajna',
    category: 'devi',
    categoryLabelHi: 'भगवती दुर्गा अनुष्ठान',
    categoryLabelEn: 'Devi Rituals',
    startingPrice: 501,
    durationHi: '1 से 2 दिवस (9 विद्वान ब्राह्मण)',
    durationEn: '1 to 2 Days (9 Vedic Scholars)',
    deityHi: 'नवदुर्गा एवं माँ महाकाली, महालक्ष्मी, महासरस्वती',
    deityEn: 'Navadurga & Mahakali, Mahalakshmi, Mahasaraswati',
    mantraHi: 'दुर्गे स्मृता हरसि भीतिमशेषजन्तोः स्वस्थैः स्मृता मतिमतीव शुभां ददासि...',
    mantraEn: 'Durge Smrita Harasi Bheetim Asheshajantoh...',
    descriptionHi:
      '9 विद्वान ब्राह्मणों द्वारा 9 बार दुर्गा सप्तशती का संपूर्ण पाठ, नौ देवियों का अलग-अलग आवाहन एवं विशाल नवचंडी हवन। यह अनुष्ठान सभी प्रकार के राजभय, शत्रु बाधा और दुर्भाग्य का शमन करता है।',
    descriptionEn:
      'Elaborate 9-fold recitation of Devi Mahatmyam by 9 learned Brahmins with invocation of the 9 forms of Durga, Kumkumarchana, and a large-scale ceremonial fire sacrifice.',
    significanceHi:
      'व्यापक सुरक्षा, कुल रक्षा और अपार ऐश्वर्य प्रदान करने वाला सर्वश्रेष्ठ शक्ति अनुष्ठान।',
    significanceEn:
      'The crown jewel of Shakti worship for lineage protection, sovereign honor, and boundless fortune.',
    recommendedForHi: ['कुल रक्षा व वंश वृद्धि', 'राजनीतिक व प्रशासनिक सफलता', 'विशाल व्यापारिक विस्तार', 'दुर्भाग्य का संपूर्ण विनाश'],
    recommendedForEn: ['Lineage protection', 'High political / administrative success', 'Vast enterprise growth', 'Eradication of bad luck'],
    samagriIncludedHi: 'विशाल नवचंडी यज्ञशाला, 9 कलश, श्री यंत्र, विशिष्ट आहुति द्रव्य, कन्या पूजन।',
    samagriIncludedEn: 'Full Navchandi yajnashala, 9 kalash, Sri Yantra, rare oblations, and Kanya Puja.',
  },
  {
    id: 'ganesh-puja',
    nameHi: 'श्री गणेश पूजन एवं अथर्वशीर्ष पाठ',
    nameEn: 'Shri Ganesh Puja & Ganapati Atharvashirsha',
    category: 'sanskar',
    categoryLabelHi: 'विघ्नहर्ता पूजन',
    categoryLabelEn: 'Vighnaharta Rituals',
    startingPrice: 501,
    durationHi: '1.5 से 2 घंटे',
    durationEn: '1.5 to 2 Hours',
    deityHi: 'प्रथम पूज्य भगवान श्री गणेश',
    deityEn: 'Lord Ganesha (Vighnaharta)',
    mantraHi: 'ॐ गं गणपतये नमः / ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्तिः प्रचोदयात्॥',
    mantraEn: 'Om Gam Ganapataye Namah',
    descriptionHi:
      'समस्त कार्यों की निर्विघ्न सिद्धि हेतु प्रथम पूज्य भगवान गजानन का मोदक, दूर्वा, रक्त चंदन एवं सिन्दूर से अभिषेक तथा 21 बार गणपति अथर्वशीर्ष का सस्वर पाठ व मोदक आहुति हवन।',
    descriptionEn:
      'Consecrated worship of Lord Ganesha with 21 blades of Durva grass, modakas, red vermilion, and 21 melodic recitations of Ganapati Atharvashirsha with special oblation.',
    significanceHi:
      'किसी भी नए कार्य, व्यापार, गृह निर्माण अथवा शिक्षा में आने वाले समस्त विघ्नों का तुरंत नाश।',
    significanceEn:
      'Immediate removal of obstacles for new beginnings, examinations, business launches, and properties.',
    recommendedForHi: ['नया व्यापार अथवा नौकरी प्रारंभ', 'विद्या व परीक्षाओं में सफलता', 'विवाह में आ रही बाधाएं', 'बुध व केतु दोष शांति'],
    recommendedForEn: ['New venture launches', 'Academic milestones & tests', 'Marriage obstruction clearing', 'Mercury/Ketu harmony'],
    samagriIncludedHi: 'ताजा दूर्वा, मोदक, लाल पुष्प, सिन्दूर, जनेऊ, दूर्वा हवन सामग्री।',
    samagriIncludedEn: 'Fresh Durva grass, steamed modakas, red blossoms, sindoor, and sacred havan kit.',
  },
  {
    id: 'vastu-shanti',
    nameHi: 'गृह एवं व्यापार वास्तु शांति पूजन',
    nameEn: 'Vastu Shanti & Griha Pravesh Puja',
    category: 'sanskar',
    categoryLabelHi: 'गृह संस्कार',
    categoryLabelEn: 'Sacred Samskaras',
    startingPrice: 501,
    durationHi: '3 से 4 घंटे',
    durationEn: '3 to 4 Hours',
    deityHi: 'वास्तु पुरुष एवं दसों दिशाओं के दिग्पाल',
    deityEn: 'Vastu Purusha & 10 Digpalas',
    mantraHi: 'नमस्ते वास्तु पुरुषाय भूशय्याभिरत प्रभो। मद्गृहं धनधान्यादि समृद्धं कुरु सर्वदा॥',
    mantraEn: 'Namaste Vastu Purushaya Bhooshayyabhirata Prabho...',
    descriptionHi:
      'भवन, कार्यालय, भूखंड या कारखाने में वास्तु दोषों के निवारण हेतु वास्तु पुरुष मंडल की स्थापना, नवग्रह एवं दिग्पाल पूजन तथा वास्तु शांति का विशिष्ट वैदिक हवन।',
    descriptionEn:
      'Sacred rectifying ceremony for residential, commercial, and industrial plots. Involves Vastu Purusha Mandala establishment, 10 directional Digpala worship, and Vastu Agnihotra.',
    significanceHi:
      'भवन में सकारात्मक ऊर्जा का संचार, आर्थिक स्थिरता और परिवार के सदस्यों के स्वास्थ्य की रक्षा।',
    significanceEn:
      'Infuses living and working spaces with positive prana, financial stability, and good health.',
    recommendedForHi: ['नए घर या दुकान का उद्घाटन', 'घर में लगातार कलह या बीमारी', 'व्यापार में अप्रत्याशित घाटा', 'वास्तु दोष निवारण (बिना तोड़े-फोड़े)'],
    recommendedForEn: ['New house/office inauguration', 'Unexplained domestic stress', 'Sudden business slumps', 'Structural Vastu correction'],
    samagriIncludedHi: 'वास्तु यंत्र, तांबे की तार, चांदी का सर्प, नवधान्य, पंचरत्न, हवन सामग्री।',
    samagriIncludedEn: 'Vastu Yantra, copper wire, silver token, nine grains, panch-ratna, and havan woods.',
  },
  {
    id: 'ram-naam-jaap',
    nameHi: 'अखंड श्री राम नाम संकीर्तन व जाप अनुष्ठान',
    nameEn: 'Akhand Shri Ram Naam Jaap & Sankirtan',
    category: 'jaap_path',
    categoryLabelHi: 'जाप एवं पाठ',
    categoryLabelEn: 'Jaap & Scripture Path',
    startingPrice: 501,
    durationHi: 'सवा लाख जाप / 24 घंटे अखंड',
    durationEn: '1.25 Lakh Jaap / 24-Hour Akhand',
    deityHi: 'मर्यादा पुरुषोत्तम भगवान श्री राम व भक्त हनुमान',
    deityEn: 'Bhagwan Shri Ram & Bhakta Hanuman',
    mantraHi: 'श्री राम जय राम जय जय राम / ॐ रां रामाय नमः',
    mantraEn: 'Shri Ram Jai Ram Jai Jai Ram',
    descriptionHi:
      'तुलसीदास जी द्वारा प्रतिपादित कलयुग का एकमात्र तारक मंत्र—भगवान राम के पावन नाम का काशी में सवा लाख जाप, सुंदरकांड पाठ तथा राम दरबार की सविधि आरती व प्रसाद वितरण।',
    descriptionEn:
      'The supreme redemptive mantra of the Kali Yuga. 1.25 lakh sacred chanting of Shri Ram Naam in Kashi with Sundarkand recitation, Ram Darbar Puja, and soulful Ramayana Aradhana.',
    significanceHi:
      'समस्त प्रकार के मानसिक संताप, प्रारब्ध के कठोर बंधन और भय से मुक्ति का सबसे सरल व श्रेष्ठ मार्ग।',
    significanceEn:
      'The supreme pathway to inner tranquility, dissolving karmic bonds, and boundless grace.',
    recommendedForHi: ['मानसिक शांति व आत्मिक आनंद', 'भक्ति व परिवार में धर्म का प्रसार', 'संकट मोचन व भय से मुक्ति', 'पुण्य संचय एवं मोक्ष की अभिलाषा'],
    recommendedForEn: ['Profound spiritual peace', 'Spreading Dharma in home', 'Deliverance from anxiety', 'Cultivating divine devotion'],
    samagriIncludedHi: 'तुलसी माला, पीले चंदन, रामनामा वस्त्र, पंचामृत, भोग-प्रसाद एवं हवन सामग्री।',
    samagriIncludedEn: 'Tulsi rosary, yellow sandalwood, Ramnam cloth, panchamrit, and sweet bhog.',
  },
];
