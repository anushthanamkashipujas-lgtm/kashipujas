export type Language = 'hi' | 'en';

export const TRANSLATIONS = {
  hi: {
    brand: {
      name: 'काशी अनुष्ठान',
      sub: 'वैदिक पूजा एवं अनुष्ठान सेवाएं',
      city: 'वाराणसी (काशी), उत्तर प्रदेश',
      om: 'ॐ नमः शिवाय',
    },
    nav: {
      home: 'मुख्य पृष्ठ',
      pujas: 'पूजा सेवाएं',
      booking: 'संकल्प व बुकिंग',
      astrology: 'ज्योतिष परामर्श AI',
      contact: 'संपर्क',
      callNow: 'कॉल करें',
      whatsapp: 'व्हाट्सएप',
      bookNow: 'पूजा बुक करें',
    },
    hero: {
      shloka: 'वाराणस्यां हि काश्यां च विश्वेशः शरणं मम। त्रैलोक्ये यानि तीर्थानि सर्वाणि सन्ति काश्याम्॥',
      shlokaMeaning: 'त्रैलोक्य के समस्त पावन तीर्थ काशी में समाहित हैं। यहाँ भगवान विश्वनाथ स्वयं मुक्ति और अभय प्रदान करते हैं।',
      title: 'पवित्र काशी की पावन धरा पर वैदिक विधि से अनुष्ठान',
      subtitle:
        'आचार्य योगेश उपाध्याय जी के मार्गदर्शन में शुद्ध वैदिक मंत्रोच्चार, शास्त्रीय संकल्प और शास्त्रोक्त विधि द्वारा रुद्राभिषेक, महामृत्युंजय जाप एवं समस्त ग्रह शांति पूजा।',
      ctaPuja: 'पूजा सेवाएं देखें',
      ctaBook: 'ऑनलाइन संकल्प बुक करें',
      ctaAstrology: 'AI ज्योतिष परामर्श',
      trustBadges: [
        'काशी के प्रामाणिक वैदिक ब्राह्मण',
        'शास्त्रोक्त संकल्प एवं लाइव दर्शन',
        'शुद्ध शास्त्रोक्त पूजन सामग्री',
        'प्रारंभिक शुल्क मात्र ₹501 से',
      ],
    },
    aboutAcharya: {
      title: 'आचार्य योगेश उपाध्याय जी का परिचय',
      subtitle: 'काशी की वैदिक परंपरा के संवाहक एवं प्रकांड कर्मकांडी विद्वान',
      bio1:
        'आचार्य योगेश उपाध्याय जी काशी (वाराणसी) के प्रतिष्ठित वैदिक परंपरा से जुड़े विद्वान हैं। आपने संपूर्णानंद संस्कृत विश्वविद्यालय एवं काशी के पारंपरिक गुरुकुलों से शुक्ल यजुर्वेद, रुद्राष्टाध्यायी एवं फलित ज्योतिष का गहन अध्ययन किया है।',
      bio2:
        'विगत 18 वर्षों से आप देश-विदेश के यजमानों के लिए काशी विश्वनाथ ज्योतिर्लिंग क्षेत्र, गंगा तट एवं प्रमुख सिद्ध तीर्थों पर शास्त्रीय विधि से महारुद्र, महामृत्युंजय, नवग्रह शांति और चंडी महायज्ञ संपन्न कराते आ रहे हैं।',
      bio3:
        'काशी अनुष्ठान का मुख्य उद्देश्य प्रत्येक सनातनी यजमान को बिना किसी आडंबर के शुद्ध वैदिक रीति से पूजा, संकल्प और शांति अनुष्ठान सुलभ कराना है। चाहे आप काशी पधारें या दूर बैठकर लाइव संकल्प लें, आपका पूजन संपूर्ण वैदिक मर्यादा से संपन्न होता है।',
      experienceYears: '18+ वर्ष',
      experienceLabel: 'वैदिक कर्मकांड एवं ज्योतिष अनुभव',
      completedPujas: '15,000+',
      completedPujasLabel: 'सफलतापूर्वक संपन्न अनुष्ठान',
      vedicLineage: 'शुक्ल यजुर्वेद',
      vedicLineageLabel: 'माध्यन्दिन शाखा परंपरा',
      holyKshetra: 'काशी विश्वनाथ क्षेत्र',
      holyKshetraLabel: 'पवित्र संकल्प पीठ',
    },
    whyKashi: {
      title: 'काशी में ही अनुष्ठान क्यों आवश्यक है?',
      subtitle: 'स्कंद पुराण काशी खंड के अनुसार अविमुक्त क्षेत्र में किया गया एक जप करोड़ गुना फल देता है',
      points: [
        {
          title: 'अविमुक्त क्षेत्र का महात्म्य',
          desc: 'काशी भगवान शिव के त्रिशूल पर स्थित अनादि मोक्षदायिनी नगरी है। यहाँ किया गया पुण्य, जप और तप कभी क्षय नहीं होता।',
        },
        {
          title: 'गंगा जी का उत्तरवाहिनी स्वरूप',
          desc: 'काशी में पतितपावनी माँ गंगा उत्तरवाहिनी होकर बहती हैं, जो तंत्र और वेद में सर्वाधिक शुभ ऊर्जा का प्रवाह मानी जाती हैं।',
        },
        {
          title: 'द्वादश ज्योतिर्लिंग श्री काशी विश्वनाथ',
          desc: 'स्वयं विश्वेश्वर की सन्निधि में रुद्राभिषेक एवं महामृत्युंजय अनुष्ठान से असाध्य रोग व मारक ग्रह दोष शांत होते हैं।',
        },
        {
          title: 'प्रामाणिक वैदिक संकल्प विधान',
          desc: 'यजमान के नाम, गोत्र, नक्षत्र और तिथि के साथ गंगा जल व तुलसी दल हाथ में लेकर शास्त्रोक्त संकल्प लिया जाता है।',
        },
      ],
    },
    testimonials: {
      title: 'श्रद्धालु यजमानों के अनुभव',
      subtitle: 'सच्चे मन से संपन्न वैदिक अनुष्ठान का प्रत्यक्ष प्रभाव',
      items: [
        {
          name: 'डॉ. रमेश चंद्र शर्मा',
          city: 'नई दिल्ली',
          puja: 'महामृत्युंजय सवा लाख जाप',
          comment:
            'हमारे परिवार पर आई गंभीर स्वास्थ्य समस्या में आचार्य योगेश उपाध्याय जी ने काशी में महामृत्युंजय अनुष्ठान कराया। उनकी पारदर्शिता, नित्य वीडियो दर्शन और विधि-विधान से हमारे मन को अपार शांति मिली।',
        },
        {
          name: 'सुनीता एवं राजेश अग्रवाल',
          city: 'मुंबई, महाराष्ट्र',
          puja: 'कालसर्प दोष निवारण एवं रुद्राभिषेक',
          comment:
            'विवाह और व्यवसाय में कई वर्षों से रुकावटें आ रही थीं। आचार्य जी ने पहले हमारी कुंडली का सही वैदिक मार्गदर्शन दिया और काशी में संकल्प कराया। आज सब कार्य सुचारू हो चुके हैं।',
        },
        {
          name: 'आनंद वर्धन मिश्र',
          city: 'लखनऊ, उत्तर प्रदेश',
          puja: 'नवचंडी महायज्ञ एवं नवग्रह शांति',
          comment:
            'काशी अनुष्ठान की सबसे बड़ी विशेषता यह है कि यहाँ कोई अंधविश्वास या भय नहीं दिखाया जाता। सात्विक वैदिक ब्राह्मणों द्वारा मंत्रोच्चार देखकर हृदय तृप्त हो गया।',
        },
      ],
    },
    pujasPage: {
      title: 'वैदिक पूजा एवं अनुष्ठान सेवाएं',
      subtitle: 'काशी विश्वनाथ ज्योतिर्लिंग एवं गंगा तट पर शास्त्रीय विधि से संपन्न होने वाले समस्त अनुष्ठान',
      startingPriceNote:
        'महत्वपूर्ण सूचना: सभी पूजाओं का प्रारंभिक सांकेतिक शुल्क ₹501 से है। अंतिम दक्षिणा एवं व्यय अनुष्ठान के स्वरूप (साधारण, विस्तृत, सवा लाख जाप), ब्राह्मणों की संख्या, आहुति मान एवं सामग्री व्यवस्था के आधार पर यजमान की सहमति से तय होती है।',
      allCategories: 'सभी पूजाएं',
      bookButton: 'यह पूजा बुक करें',
      detailsTitle: 'पूजा का विशेष महात्म्य एवं लाभ:',
      samagriTitle: 'पूजन सामग्री व व्यवस्था:',
      deityLabel: 'आराध्य देव:',
      durationLabel: 'अनुष्ठान अवधि:',
      recommendedForLabel: 'विशेष रूप से फलदायी:',
      searchPlaceholder: 'पूजा का नाम या आराध्य देव खोजें...',
    },
    bookingPage: {
      title: 'वैदिक पूजा संकल्प एवं बुकिंग',
      subtitle: 'यजमान का संपूर्ण विवरण दर्ज करें ताकि आचार्य जी शास्त्रोक्त संकल्प तैयार कर सकें',
      disclaimerBox:
        'आवश्यक नियम: यह फॉर्म भरने के उपरांत आपका विवरण सीधे आचार्य योगेश उपाध्याय जी के अधिकृत व्हाट्सएप (+91 8210803558) पर प्रेषित होगा। कोई भी बुकिंग स्वतः (ऑटोमेटिक) पुष्ट नहीं होती है। आचार्य जी शुभ मुहूर्त, पंचांग तिथि एवं अनुष्ठान सामग्री की समीक्षा करके आपसे व्यक्तिगत संपर्क कर बुकिंग की अंतिम पुष्टि करेंगे।',
      labels: {
        fullName: 'यजमान का पूरा नाम *',
        gotra: 'गोत्र (यदि ज्ञात न हो तो कश्यप लिखें) *',
        mobile: 'मोबाइल नंबर (व्हाट्सएप) *',
        email: 'ईमेल पता *',
        dob: 'जन्म तिथि (DOB) *',
        exactBirthTime: 'सटीक जन्म समय (उदा. 06:45 AM / 18:30) *',
        birthPlace: 'जन्म स्थान (नगर, राज्य) *',
        fullAddress: 'वर्तमान पूर्ण पता *',
        selectedPuja: 'वांछित पूजा सेवा *',
        preferredPlace: 'पसंदीदा पूजन स्थान / मंदिर *',
        desiredDate: 'इच्छित पूजा तिथि *',
        sankalpNotes: 'विशेष संकल्प, मनोकामना अथवा विशेष टिप्पणी *',
        submitWhatsApp: 'व्हाट्सएप पर संकल्प विवरण भेजें',
      },
      placeOptions: [
        'श्री काशी विश्वनाथ धाम क्षेत्र (वाराणसी)',
        'दशाश्वमेध घाट / मणिकर्णिका गंगा तट (वाराणसी)',
        'श्री संकट मोचन हनुमान मंदिर क्षेत्र (वाराणसी)',
        'अस्सी घाट / त्रिलोचन महादेव तीर्थ (वाराणसी)',
        'यजमान के घर पर (काशी के विद्वान ब्राह्मण द्वारा)',
        'ऑनलाइन लाइव वीडियो संकल्प (यजमान अपने घर से जुड़ेंगे)',
      ],
      successNotice:
        'आपका संकल्प विवरण तैयार है! कृपया नीचे दिए गए बटन पर क्लिक करके व्हाट्सएप के माध्यम से आचार्य जी को भेजें।',
    },
    astrologyAssistant: {
      badge: 'वैदिक ज्योतिष परामर्श AI',
      title: 'आर्ष ज्योतिष एवं पूजा मार्गदर्शक',
      subtitle:
        'निरयण पद्धति (Lahiri Ayanamsha) एवं विंशोत्तरी दशा सिद्धांतों पर आधारित आध्यात्मिक एवं पूजा मार्गदर्शन।',
      accuracyNotice:
        'सटीक खगोलीय गणना नियम: हमारी प्रणाली में निरयण पद्धति व लाहिरी अयनांश का सम्मान किया जाता है। जब तक पूर्ण स्विस इफेमेरिस इंजन सीधे जुड़ा न हो, हम मनगढ़ंत ग्रह अंश या कल्पित दशा नहीं बनाते। यहां आपको वास्तविक वैदिक सिद्धांतों, ग्रह दोषों के शास्त्रीय कारणों और काशी के उचित अनुष्ठानों की निष्पक्ष जानकारी दी जाती है। सूक्ष्म हस्तलिखित चक्र हेतु आचार्य योगेश उपाध्याय जी स्वयं परामर्श देते हैं।',
      safetyNotice:
        'सात्विक दृष्टिकोण: हम किसी भी जातक को भयभीत नहीं करते और न ही किसी झूठे चमत्कार या 100% परिणाम का अंधविश्वास फैलाते हैं। ईश्वर भक्ति, शुद्ध कर्म और वैदिक अनुष्ठान से जीवन में शांति प्राप्त होती है।',
      birthFormTitle: 'अपनी जन्म जानकारी दर्ज करें (वैकल्पिक परंतु अनुशंसित)',
      dob: 'जन्म तिथि',
      time: 'सटीक जन्म समय',
      place: 'जन्म स्थान (नगर, राज्य)',
      questionPlaceholder: 'अपना प्रश्न लिखें (उदा. मुझे कौन सी पूजा करानी चाहिए? नौकरी में बाधा के लिए क्या उपाय करें?)...',
      askButton: 'परामर्श प्राप्त करें',
      suggestedQuestions: [
        'मानसिक अशांति और स्वास्थ्य के लिए कौन सा रुद्राभिषेक श्रेष्ठ है?',
        'शनि की साढ़ेसाती में कौन से वैदिक अनुष्ठान कराने चाहिए?',
        'कालसर्प दोष के लक्षण क्या हैं और काशी में इसकी क्या विधि है?',
        'व्यापार में निरंतर आ रही रुकावटों के लिए कौन सी पूजा फलदायी है?',
      ],
      assistantGreeting:
        'हर हर महादेव! मैं काशी अनुष्ठान का वैदिक ज्योतिष एवं पूजा मार्गदर्शक हूँ। आप अपने जीवन की समस्या, कुंडली से जुड़े विचार अथवा काशी में संपन्न होने वाली वैदिक पूजाओं के विषय में निसंकोच पूछ सकते हैं।',
    },
    contactPage: {
      title: 'आचार्य योगेश उपाध्याय जी से संपर्क करें',
      subtitle: 'काशी में प्रत्यक्ष भेंट अथवा दूरभाष/व्हाट्सएप द्वारा परामर्श हेतु विवरण',
      acharyaName: 'आचार्य योगेश उपाध्याय जी',
      designation: 'मुख्य आचार्य एवं वैदिक कर्मकांड विशेषज्ञ, काशी अनुष्ठान',
      phoneLabel: 'कॉल एवं व्हाट्सएप:',
      phoneValue: '+91 8210803558',
      emailLabel: 'ईमेल आईडी:',
      emailValue: 'vkbxr258@gmail.com',
      addressLabel: 'कार्यालय व संकल्प पीठ:',
      addressValue: 'दशाश्वमेध घाट मार्ग, निकट श्री काशी विश्वनाथ मंदिर परिक्षेत्र, वाराणसी - 221001, उत्तर प्रदेश, भारत',
      timingsLabel: 'परामर्श समय:',
      timingsValue: 'प्रातः 07:00 बजे से सायं 09:00 बजे तक (सप्ताह के सातों दिन)',
      whatsappCta: 'सीधे व्हाट्सएप पर चैट करें',
      callCta: 'सीधा कॉल करें',
      inquiryTitle: 'त्वरित संदेश प्रेषित करें',
    },
    footer: {
      shloka: 'सत्यं वद धर्मं चर स्वाध्यायान्मा प्रमदः। मातृदेवो भव पितृदेवो भव आचार्यदेवो भव॥',
      about:
        'काशी अनुष्ठान सनातन धर्म की पावन राजधानी वाराणसी में शुद्ध वैदिक कर्मकांड, रुद्राभिषेक एवं ग्रह शांति अनुष्ठान का विश्वसनीय केंद्र है।',
      quickLinks: 'शीघ्र संपर्क सूत्र',
      rights: 'सर्वाधिकार सुरक्षित © 2026 काशी अनुष्ठान। आचार्य योगेश उपाध्याय जी।',
      kashiDham: 'पवित्र अविमुक्त क्षेत्र, काशी (वाराणसी)',
    },
  },
  en: {
    brand: {
      name: 'Kashi Anushthan',
      sub: 'Vedic Hindu Puja & Anushthan Services',
      city: 'Varanasi (Kashi), Uttar Pradesh',
      om: 'Om Namah Shivaya',
    },
    nav: {
      home: 'Home',
      pujas: 'Puja Services',
      booking: 'Booking & Sankalp',
      astrology: 'AI Astrology Guide',
      contact: 'Contact',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      bookNow: 'Book a Puja',
    },
    hero: {
      shloka: 'Varanasyam hi Kasyam cha Vishveshah sharanam mama. Trailokye yani teerthani sarvani santi Kasyam.',
      shlokaMeaning: 'All sacred tirthas across the three realms reside in Kashi, where Lord Vishwanath himself grants refuge and liberation.',
      title: 'Authentic Vedic Pujas & Anushthans in Holy Kashi',
      subtitle:
        'Under the revered guidance of Acharya Yogesh Upadhyay Ji, experience strictly scriptural Vedic rituals, live Sankalp, and holy Ganges blessings for health, prosperity, and peace.',
      ctaPuja: 'Explore Puja Services',
      ctaBook: 'Book Vedic Sankalp',
      ctaAstrology: 'AI Astrology Guide',
      trustBadges: [
        'Vedic Scholars of Kashi',
        'Live Video Sankalp & Darshan',
        'Consecrated Samagri & Havans',
        'Starting at ₹501 onwards',
      ],
    },
    aboutAcharya: {
      title: 'About Acharya Yogesh Upadhyay Ji',
      subtitle: 'Custodian of Kashi’s Sacred Vedic Lineage & Karmakand Tradition',
      bio1:
        'Acharya Yogesh Upadhyay Ji hails from a distinguished tradition of Vedic karmakand in Varanasi. He has undergone profound classical study of Shukla Yajurveda, Rudrashtadhyayi, and Phalita Jyotish from Sampurnanand Sanskrit Vishwavidyalaya and traditional gurukuls.',
      bio2:
        'For over 18 years, Acharya Ji has conducted profound Vedic rituals including Maharudra, Mahamrityunjaya Jaap, Navagraha Shanti, and Chandi Mahayajna across the sacred ghats of Kashi and Kashi Vishwanath Dham for devotees from India and abroad.',
      bio3:
        'The core mission of Kashi Anushthan is to make authentic Vedic rituals accessible without superstitions or fear. Whether you visit Varanasi in person or join via live interactive Sankalp from anywhere in the world, every ritual adheres strictly to Vedic discipline.',
      experienceYears: '18+ Years',
      experienceLabel: 'Vedic Karmakand & Jyotish Practice',
      completedPujas: '15,000+',
      completedPujasLabel: 'Pujas & Anushthans Performed',
      vedicLineage: 'Shukla Yajurveda',
      vedicLineageLabel: 'Madhyandina Shakha Tradition',
      holyKshetra: 'Kashi Vishwanath Kshetra',
      holyKshetraLabel: 'Sacred Ritual Seat',
    },
    whyKashi: {
      title: 'Why Perform Anushthan in Kashi?',
      subtitle: 'According to Skanda Purana Kashi Khand, a single mantra chanted here yields ten million times the spiritual merit',
      points: [
        {
          title: 'The Eternal Avimukta Kshetra',
          desc: 'Resting on the trident of Lord Shiva, Kashi is an imperishable sanctuary where spiritual vows and japas remain eternally fruitful.',
        },
        {
          title: 'North-Flowing Holy Mother Ganga',
          desc: 'In Varanasi, holy Ganga flows northward (Uttarvahini), creating an extraordinarily auspicious vortex of spiritual prana.',
        },
        {
          title: 'Shri Kashi Vishwanath Jyotirlinga',
          desc: 'Performing Rudrabhishek and Mahamrityunjaya Jaap in the vicinity of the Jyotirlinga dispels severe planetary trials.',
        },
        {
          title: 'Authentic Name & Gotra Sankalp',
          desc: 'Priests take your personal Vedic Sankalp with holy Ganga water and sacred Tulsi, aligning prayers with your exact lineage.',
        },
      ],
    },
    testimonials: {
      title: 'Devotee Experiences',
      subtitle: 'Real reflections from families who performed Vedic rituals through Kashi Anushthan',
      items: [
        {
          name: 'Dr. Ramesh Chandra Sharma',
          city: 'New Delhi',
          puja: 'Mahamrityunjaya Jaap (1.25 Lakh)',
          comment:
            'When our family faced severe medical difficulties, Acharya Yogesh Upadhyay Ji conducted the Mahamrityunjaya Anushthan in Kashi. Daily live updates, Vedic authenticity, and calm guidance gave us immense peace.',
        },
        {
          name: 'Sunita & Rajesh Agarwal',
          city: 'Mumbai, Maharashtra',
          puja: 'Kaal Sarp Shanti & Rudrabhishek',
          comment:
            'We had continuous career blocks for years. Acharya Ji honestly analyzed our chart without frightening us and conducted the Vedic ritual on Dashashwamedh Ghat. The results have been truly transformative.',
        },
        {
          name: 'Anand Vardhan Mishra',
          city: 'Lucknow, Uttar Pradesh',
          puja: 'Navchandi Mahayajna & Navagraha Shanti',
          comment:
            'What stands out most about Kashi Anushthan is the complete absence of hype or fear-mongering. The purity of Vedic chanting by the learned Brahmins was awe-inspiring.',
        },
      ],
    },
    pujasPage: {
      title: 'Vedic Puja & Anushthan Services',
      subtitle: 'Classical Hindu rituals conducted in the divine presence of Lord Vishwanath and Mother Ganga',
      startingPriceNote:
        'Important Notice: Starting price for all pujas begins at ₹501. The final dakshina and expenditure depend upon the ritual scale (standard, expanded, 1.25 lakh mantra chanting), number of Vedic Brahmins, oblation count, and ritual materials, finalized with the Yajman’s consent.',
      allCategories: 'All Pujas',
      bookButton: 'Book This Puja',
      detailsTitle: 'Spiritual Significance & Benefits:',
      samagriTitle: 'Samagri & Ritual Arrangements:',
      deityLabel: 'Presiding Deity:',
      durationLabel: 'Duration:',
      recommendedForLabel: 'Recommended For:',
      searchPlaceholder: 'Search puja name or deity...',
    },
    bookingPage: {
      title: 'Vedic Puja Booking & Sankalp Form',
      subtitle: 'Provide complete Yajman details so Acharya Ji can prepare your classical Vedic Sankalp',
      disclaimerBox:
        'Important Verification Notice: Submitting this form prepares your details and opens WhatsApp directly to Acharya Yogesh Upadhyay Ji (+91 8210803558). No booking is confirmed automatically. Acharya Ji personally reviews the auspicious Muhurat, Vedic Tithi, and Samagri requirements before confirming your appointment.',
      labels: {
        fullName: 'Yajman Full Name *',
        gotra: 'Gotra (write Kashyapa if not known) *',
        mobile: 'Mobile Number (WhatsApp) *',
        email: 'Email Address *',
        dob: 'Date of Birth *',
        exactBirthTime: 'Exact Birth Time (e.g. 06:45 AM / 18:30) *',
        birthPlace: 'Birth Place (City, State) *',
        fullAddress: 'Current Residential Address *',
        selectedPuja: 'Selected Puja Service *',
        preferredPlace: 'Preferred Temple or Place *',
        desiredDate: 'Desired Puja Date *',
        sankalpNotes: 'Special Sankalp, Prayer Intention or Notes *',
        submitWhatsApp: 'Send Sankalp Details via WhatsApp',
      },
      placeOptions: [
        'Shri Kashi Vishwanath Dham Area (Varanasi)',
        'Dashashwamedh Ghat / Manikarnika Ganga Bank (Varanasi)',
        'Shri Sankat Mochan Hanuman Temple Area (Varanasi)',
        'Assi Ghat / Trilochan Mahadev Kshetra (Varanasi)',
        'At Yajman’s Home (by visiting Vedic Brahmins)',
        'Online Live Video Sankalp (Devotee joins from home)',
      ],
      successNotice:
        'Your Sankalp details are ready. Please click below to send them directly to Acharya Ji via WhatsApp.',
    },
    astrologyAssistant: {
      badge: 'Vedic Astrology Consultation AI',
      title: 'Vedic Astrology & Puja Advisor',
      subtitle:
        'Spiritual guidance grounded in Nirayana principles (Lahiri Ayanamsha) and Vimshottari Dasha concepts.',
      accuracyNotice:
        'Astronomical Calculation Notice: Our system adheres strictly to the Vedic Nirayana system and Lahiri Ayanamsha. When an external Swiss Ephemeris database is not bundled, we do not fabricate imaginary planetary degrees or unverified dashas. We provide authentic Vedic remedies, explain deity significations, and recommend genuine Kashi rituals. For an exact handwritten birth chart, Acharya Yogesh Upadhyay Ji personally reviews your Kashi Panchang.',
      safetyNotice:
        'Ethical Practice: We never frighten seekers or promise unrealistic miracles. Vedic rituals and prayer work through sincere devotion (Shraddha), righteous action (Karma), and divine grace.',
      birthFormTitle: 'Enter Birth Details (Optional but Recommended)',
      dob: 'Date of Birth',
      time: 'Exact Birth Time',
      place: 'Birth Place (City, State)',
      questionPlaceholder: 'Type your question (e.g., Which puja is best for health? How to mitigate Shani Sade Sati?)...',
      askButton: 'Get Guidance',
      suggestedQuestions: [
        'Which Rudrabhishek is best for inner peace and health?',
        'What Vedic remedies are prescribed during Shani Sade Sati?',
        'What are the signs of Kaal Sarp Dosha and its ritual in Kashi?',
        'Which puja is recommended to overcome recurring career hurdles?',
      ],
      assistantGreeting:
        'Har Har Mahadev! I am your Vedic Astrology & Puja Advisor at Kashi Anushthan. Please feel free to ask about your life questions, planetary significations, or Vedic rituals in Kashi.',
    },
    contactPage: {
      title: 'Contact Acharya Yogesh Upadhyay Ji',
      subtitle: 'Reach out for in-person consultation in Kashi or phone / WhatsApp booking',
      acharyaName: 'Acharya Yogesh Upadhyay Ji',
      designation: 'Head Acharya & Vedic Ritual Specialist, Kashi Anushthan',
      phoneLabel: 'Call & WhatsApp:',
      phoneValue: '+91 8210803558',
      emailLabel: 'Email Address:',
      emailValue: 'vkbxr258@gmail.com',
      addressLabel: 'Ashram & Sankalp Peeth:',
      addressValue: 'Dashashwamedh Ghat Road, Near Shri Kashi Vishwanath Dham, Varanasi - 221001, UP, India',
      timingsLabel: 'Consultation Hours:',
      timingsValue: '07:00 AM to 09:00 PM (All 7 Days)',
      whatsappCta: 'Chat on WhatsApp',
      callCta: 'Call Directly',
      inquiryTitle: 'Send a Quick Message',
    },
    footer: {
      shloka: 'Satyam vada dharmam chara svadhyayan ma pramadah. Matridevo bhava pitridevo bhava acharyadevo bhava.',
      about:
        'Kashi Anushthan is a trusted sanctuary for authentic Vedic karmakand, Rudrabhishek, Mahamrityunjaya Jaap, and planetary peace rituals in the sacred capital of Varanasi.',
      quickLinks: 'Quick Links',
      rights: 'All rights reserved © 2026 Kashi Anushthan. Acharya Yogesh Upadhyay Ji.',
      kashiDham: 'Sacred Avimukta Kshetra, Kashi (Varanasi)',
    },
  },
};
