export interface FestivalEvent {
  id: string;
  slug: string;
  number: string;
  titleHindi: string;
  titleEnglish: string;
  category: 'competition' | 'featured_night';
  illustration: string;
  taglineHindi: string;
  taglineEnglish: string;
  aboutHindi: string;
  aboutEnglish: string;
  date: string;
  time: string;
  venue: string;
  whoCanParticipate: string;
  format: string[];
  rules: string[];
  prizes: string;
}

const COMPETITION_DEFAULT_VENUE = 'MITS-DU, Gwalior';
const FESTIVAL_DATES = '26–27 September 2026';
const GENERAL_PRIZE_INFO = 'Winners and runners-up will receive cash awards from the ₹2,00,000+ prize pool, along with Certificates of Merit and trophies during the Grand Valedictory Ceremony.';

export const COMPETITIONS: FestivalEvent[] = [
  // 01. Kavyapath — Poetry Recitation Competition
  {
    id: 'kavya-paath',
    slug: 'kavya-paath',
    number: '01',
    titleHindi: 'काव्य-पाठ प्रतियोगिता',
    titleEnglish: 'Kavyapath — Poetry Recitation Competition',
    category: 'competition',
    illustration: '/assets_webp/Poetry-Recitation-Competition.webp',
    taglineHindi: 'मौलिक कविता, सशक्त वाचन और हिंदी काव्य की गरिमा।',
    taglineEnglish: 'Original verse, expressive recitation and the richness of Hindi poetry.',
    aboutHindi: 'काव्य-पाठ नवोदित कवियों के लिए हिंदी साहित्य की अभिव्यक्ति-शक्ति, दार्शनिक गहराई और सौंदर्यपूर्ण समृद्धि का उत्सव मनाने वाला प्रतिष्ठित मंच है।',
    aboutEnglish: 'Kavyapath is a literary platform for emerging poets to celebrate the expressive power, philosophical depth and aesthetic richness of Hindi literature through original verse.',
    date: '26 September 2026',
    time: '02:00 PM – 05:00 PM',
    venue: 'Conclave Center',
    whoCanParticipate: 'UG and PG students currently enrolled in recognized colleges, institutes and universities across India; registration is limited to 30 participants.',
    format: [
      'Solo poetry recitation in Hindi.',
      'Individual performance duration: strictly 3 minutes maximum per participant.',
      'Warning bell at 2 minutes 30 seconds; final bell at 3 minutes.',
      'Selected winners receive the distinguished opportunity to recite their original verse alongside eminent invited national poets during the Akhil Bhartiya Kavi Sammelan.',
    ],
    rules: [
      'The poem must be completely original and self-written by the participant.',
      'Plagiarism, adaptation of published poetry, or AI-generated poetry results in immediate disqualification.',
      'Composition and recitation must be strictly in Hindi.',
      'Themes must align with Cultural, Literary, Philosophical, Patriotic, or Socio-ethical subjects.',
      'Political slander, vulgarity, communal incitement, and derogatory references are prohibited.',
      'The recital must follow standard Vachan Shaili with correct meter, rhythm (Laya/Chhand), diction and grammatical purity.',
      'Musical instruments, background audio tracks, and external theatrical props are strictly prohibited.',
      'Exceeding the prescribed 3-minute limit will result in negative marking.',
      'Judging Criteria (Total 50 Marks): Thematic Depth, Originality & Content (15 Marks), Linguistic Precision, Meter & Rhythm [Chhand/Laya] (10 Marks), Voice Modulation, Diction & Articulation (10 Marks), Emotional Impact & Aesthetic Expression [Rasa] (10 Marks), Stage Presence, Poise & Time Adherence (5 Marks).',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 02. Speech Competition
  {
    id: 'bhashan',
    slug: 'bhashan',
    number: '02',
    titleHindi: 'भाषण प्रतियोगिता',
    titleEnglish: 'Speech Competition',
    category: 'competition',
    illustration: '/assets_webp/Speech-Competition.webp',
    taglineHindi: 'विचार, तर्क और प्रभावशाली हिंदी वक्तृत्व।',
    taglineEnglish: 'Ideas, reasoning and persuasive Hindi oratory.',
    aboutHindi: 'हिंदी भाषा में वक्तृत्व-कौशल, विश्लेषणात्मक चिंतन और भाषाई शुद्धता को विकसित करने वाला मंच, जहाँ प्रतिभागी भारतीय विरासत, समकालीन सामाजिक-सांस्कृतिक विषयों और दार्शनिक विचारों पर प्रभावशाली वक्तव्य प्रस्तुत करते हैं।',
    aboutEnglish: 'A Hindi public-speaking platform designed to cultivate rhetorical excellence, analytical intellect and linguistic precision through well-reasoned perspectives on Indian heritage, socio-cultural dynamics and philosophical themes.',
    date: '27 September 2026',
    time: '12:00 PM – 03:00 PM',
    venue: 'Conclave Center',
    whoCanParticipate: 'UG and PG students currently enrolled in recognized colleges, institutes and universities across India; participation is limited to 30 registered speakers.',
    format: [
      'Topic: "Indian Cultural Identity in the Era of Globalization and the Role of GenZ".',
      'Speech must be delivered in Hindi; standard technical terms may be used where necessary, but primary discourse should follow formal Hindi syntax.',
      'Individual speech duration: strictly 3–5 minutes.',
      'Warning bell at 4 minutes; final cutoff bell at 5 minutes.',
      'Speech must be prepared and delivered from memory.',
    ],
    rules: [
      'Reading from manuscripts, teleprompters, mobile devices, or written cue cards is strictly prohibited and attracts substantial mark deductions.',
      'Speech must address the officially notified topic.',
      'Defamatory statements, vulgar language, communally provocative rhetoric, and politically partisan rhetoric are strictly forbidden.',
      'Exceeding the 5-minute maximum ceiling results in progressive score penalties.',
      'Judging Criteria (Total 50 Marks): Content Depth, Logical Coherence & Thematic Insight (15 Marks), Linguistic Fluency, Diction & Hindi Vocabulary (10 Marks), Voice Modulation, Inflection & Articulation (10 Marks), Stage Poise, Body Language & Persuasive Impact (10 Marks), Memorization, Fluency & Time Adherence (5 Marks).',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 03. Cultural Quiz
  {
    id: 'quiz',
    slug: 'quiz',
    number: '03',
    titleHindi: 'सांस्कृतिक प्रश्नोत्तरी',
    titleEnglish: 'Cultural Quiz',
    category: 'competition',
    illustration: '/assets_webp/Quiz-Competition.webp',
    taglineHindi: 'भारतीय सभ्यता, संस्कृति और ज्ञान की जीवंत परीक्षा।',
    taglineEnglish: 'A live test of India’s civilizational and cultural knowledge.',
    aboutHindi: 'भारतीय सभ्यतागत विरासत, आध्यात्मिक परंपराओं और सांस्कृतिक ethos पर आधारित बौद्धिक प्रतियोगिता, जिसमें प्रतिभागियों की पौराणिक, वैदिक, ऐतिहासिक और समकालीन सांस्कृतिक समझ परखी जाएगी।',
    aboutEnglish: 'An intellectually stimulating quiz on India’s civilizational heritage, spiritual traditions and cultural ethos, spanning mythology, Vedic and Puranic literature, epics, monuments, philosophy and contemporary cultural developments.',
    date: '26 September 2026',
    time: '12:00 PM – 02:00 PM',
    venue: 'Colloquium',
    whoCanParticipate: 'UG and PG students from recognized Colleges, Institutes and Universities across India; no registration limit. The event is strictly individual (solo).',
    format: [
      'Individual / Solo competition.',
      'Syllabus includes Indian mythology, Vedic & Puranic literature, Ramayana & Mahabharata, historic monuments, spiritual philosophy, and contemporary cultural developments.',
      'Round 1: Timed online MCQ screening on an official digital platform. Tied scores decided by system-recorded submission timestamp (fastest submission prevails).',
      'Top 10% high-scoring participants from Round 1 qualify for Stage Buzzer Round.',
      'Round 2: Live stage buzzer finale. First participant to press electronic buzzer after question reading receives right to answer.',
      'Negative marking applies to incorrect answers, false buzzes before question fully displayed, or countdown timeouts.',
    ],
    rules: [
      'Syllabus covers mythology, epics, monuments, philosophy, and cultural history.',
      'The Stage Buzzer format is tentative; final details will be communicated to participants through official WhatsApp group.',
      'General competition rules, including schedule adherence and official communication through WhatsApp groups, apply.',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 04. Nirupan — Creative Writing Competition
  {
    id: 'rachnatmak-lekhan',
    slug: 'rachnatmak-lekhan',
    number: '04',
    titleHindi: 'निरूपण — रचनात्मक लेखन प्रतियोगिता',
    titleEnglish: 'Nirupan — Creative Writing Competition',
    category: 'competition',
    illustration: '/assets_webp/Creative-Writing-Competition.webp',
    taglineHindi: 'दृश्य को समझें, विचार को शब्द दें।',
    taglineEnglish: 'Interpret the visual, shape the thought into words.',
    aboutHindi: 'निरूपण एक विश्लेषणात्मक एवं रचनात्मक लेखन प्रतियोगिता है, जिसमें प्रतिभागी एक सांस्कृतिक दृश्य संकेत की व्याख्या करते हुए उसके सांस्कृतिक भाव, सौंदर्यात्मक प्रतीक और कलात्मक महत्त्व पर संरचित लेख लिखते हैं।',
    aboutEnglish: 'Nirupan is an analytical and creative writing competition in which participants interpret a curated cultural visual prompt and develop a structured article reflecting its cultural ethos, aesthetic symbolism and artistic significance.',
    date: '27 September 2026',
    time: '10:00 AM – 12:00 PM',
    venue: 'Seminar Hall',
    whoCanParticipate: 'UG and PG students from recognized Colleges, Institutes and Universities across India; participation is limited to 150 registered candidates.',
    format: [
      'A specific cultural image/artwork will be presented at commencement of session.',
      'The article must be a direct analytical and creative interpretation of the displayed visual.',
      'Writing medium: Hindi only.',
      'Required length: 300–400 words.',
      'Total writing duration: 45 minutes.',
      'Authenticated writing sheets provided by organizers; participants must bring their own blue or black ballpoint/gel pen.',
    ],
    rules: [
      'Mobile phones, smartwatches, electronic dictionaries, reference materials, and AI assistance are strictly prohibited.',
      'Unfair practices or rule violations result in immediate disqualification.',
      'Going outside the prescribed 300–400 word range will attract penalty deductions.',
      'Judging Criteria (Total 50 Marks): Visual Comprehension & Cultural Interpretation (15 Marks), Depth of Thought, Originality & Analytical Reasoning (10 Marks), Linguistic Proficiency, Vocabulary & Grammatical Accuracy (10 Marks), Structural Coherence, Flow & Paragraph Organization (10 Marks), Adherence to Prescribed Word Count & Time Management (5 Marks).',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 05. Shruti Sangam — Solo Singing Competition
  {
    id: 'ekal-gaayan',
    slug: 'ekal-gaayan',
    number: '05',
    titleHindi: 'श्रुति संगम — एकल गायन प्रतियोगिता',
    titleEnglish: 'Shruti Sangam — Solo Singing Competition',
    category: 'competition',
    illustration: '/assets_webp/Solo-Singing-Competition.webp',
    taglineHindi: 'सुर, ताल और भाव का शास्त्रीय संगम।',
    taglineEnglish: 'A classical confluence of Sur, Taal and Bhava.',
    aboutHindi: 'श्रुति संगम भारतीय संगीत की मधुर विरासत, गायन-कौशल और सौंदर्यात्मक गहराई का उत्सव है, जिसमें सुर, ताल और भाव के माध्यम से भारतीय संगीत परंपरा की गरिमा को प्रस्तुत किया जाता है।',
    aboutEnglish: 'Shruti Sangam celebrates the melodic heritage, vocal virtuosity and aesthetic depth of Indian music through tonal purity, rhythmic discipline and emotional expression.',
    date: '27 September 2026',
    time: '12:00 PM – 03:00 PM',
    venue: 'SAC',
    whoCanParticipate: 'UG and PG students from recognized Colleges, Institutes and Universities across India; solo vocal performance only, capped at 30 participants.',
    format: [
      'Solo vocal performance.',
      'Theme: Classical.',
      'Total stage time: strictly 3–5 minutes, including setup and sound check.',
      'Warning bell at 4 minutes; final cutoff bell at 5 minutes.',
      'Participants may bring and use their own acoustic instruments (Tanpura, Harmonium, Tabla, Acoustic Guitar, Flute).',
    ],
    rules: [
      'Performances must uphold cultural dignity. Vulgar, profane or inappropriate lyrics are strictly prohibited.',
      'Exceeding 5 minutes will result in negative marks.',
      'Judging Criteria (Total 50 Marks): Vocal Tonality, Pitch Accuracy & Sur [Sur Shuddhi] (15 Marks), Rhythmic Precision & Timing [Taal/Laya] (10 Marks), Emotional Depth, Diction & Expression [Bhava/Rasa] (10 Marks), Vocal Dynamics, Breath Control & Range (10 Marks), Stage Poise, Overall Presentation & Time Discipline (5 Marks).',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 06. Thirak — Solo Dance Competition
  {
    id: 'ekal-nritya',
    slug: 'ekal-nritya',
    number: '06',
    titleHindi: 'थिरक — एकल नृत्य प्रतियोगिता',
    titleEnglish: 'Thirak — Solo Dance Competition',
    category: 'competition',
    illustration: '/assets_webp/Solo-Dance-Competition.webp',
    taglineHindi: 'लय, भाव और शास्त्रीय नृत्य की गरिमा।',
    taglineEnglish: 'Rhythm, expression and the grace of classical dance.',
    aboutHindi: 'थिरक पारंपरिक भारतीय नृत्य शैलियों की गरिमा, लयात्मक जटिलता और अभिव्यंजक कथावाचन का उत्सव मनाने वाली प्रतिष्ठित एकल नृत्य प्रतियोगिता है, जिसमें शास्त्रीय अनुशासन, अभिनय और नृत्त की तकनीकी शुद्धता पर बल दिया जाता है।',
    aboutEnglish: 'Thirak celebrates the grace, rhythmic complexity and expressive storytelling of traditional Indian dance, emphasizing classical discipline, Abhinaya and technical precision in Nritta.',
    date: '26 September 2026',
    time: '02:00 PM – 05:00 PM',
    venue: 'SAC',
    whoCanParticipate: 'UG and PG students from recognized Colleges, Institutes and Universities across India; 30 registered solo performers maximum on a first-come, first-served basis.',
    format: [
      'Solo classical dance performance.',
      'Performance duration: strictly 3–5 minutes, excluding stage entry and exit.',
      'Warning bell at 4 minutes; final cutoff bell at 5 minutes.',
      'High-quality pre-recorded audio track (MP3 or WAV) must be submitted on a clean, labelled USB drive to sound console desk at or before reporting.',
      'Handheld or stage props permitted only when integral to performance and safe.',
    ],
    rules: [
      'Theme: Classical.',
      'Costumes, ornaments, and makeup must authentically correspond to chosen dance genre.',
      'Strictly Prohibited: Fire, inflammable items, water, coloured powders, loose glitter, oils, or any materials that can damage stage or create safety hazards.',
      'Judging Criteria (Total 50 Marks): Rhythm, Footwork & Timing (15 Marks), Expressions, Gestures & Storytelling (10 Marks), Choreography, Posture & Body Alignment (10 Marks), Authenticity of Costume, Makeup & Presentation (10 Marks), Stage Presence, Prop Integration & Time Adherence (5 Marks).',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 07. Reel Making Competition
  {
    id: 'reel-making',
    slug: 'reel-making',
    number: '07',
    titleHindi: 'रील मेकिंग प्रतियोगिता',
    titleEnglish: 'Reel Making Competition',
    category: 'competition',
    illustration: '/assets_webp/Reel-Making-Competition.webp',
    taglineHindi: 'तुलसी महोत्सव की ऊर्जा को डिजिटल कहानी में पिरोएँ।',
    taglineEnglish: 'Turn the energy of Tulsi Mahotsav into a visual story.',
    aboutHindi: 'यह प्रतियोगिता रचनात्मक कहानीकारों, वीडियोग्राफरों और डिजिटल कलाकारों को तुलसी महोत्सव की सांस्कृतिक भव्यता, साहित्यिक उत्साह, मंचीय प्रस्तुतियों और छात्र समुदाय की जीवंतता को शॉर्ट-फॉर्म वीडियो में अभिव्यक्त करने का अवसर देती है।',
    aboutEnglish: 'A short-form video competition for storytellers, videographers and digital artists to capture the cultural splendour, literary spirit, stage performances and vibrant student community of Tulsi Mahotsav.',
    date: FESTIVAL_DATES,
    time: 'Submission window opens 29 September 2026',
    venue: COMPETITION_DEFAULT_VENUE,
    whoCanParticipate: 'Open participation with no entry limit.',
    format: [
      'All footage must be shot on-site by participant during official festival timeline (from inauguration on 26 September to musical performance on 27 September 2026).',
      'Reel must be vertical (9:16) with minimum resolution of 1080p (Full HD).',
      'Video duration must be strictly 30–90 seconds.',
      'A 2-day submission window follows the festival; official Google Form is activated from 29 September 2026.',
      'Submit through designated Google Form by uploading high-resolution master file or view-accessible cloud-drive link with complete participant credentials.',
    ],
    rules: [
      'Submitted footage must be original and shot during current edition of Tulsi Mahotsav.',
      'Pre-recorded, archival, or non-festival external video footage is strictly prohibited.',
      'Submissions must uphold the cultural dignity of the festival.',
      'Vulgarity, defamatory framing, unauthorized backstage trespassing, or disruption of ongoing stage programmes will result in immediate disqualification.',
      'Judging Criteria (Total 50 Marks): Visual Storytelling & Narrative Cohesion (15 Marks), Cinematography, Framing & Visual Composition (10 Marks), Editing Precision, Pacing & Sound Design (10 Marks), Cultural Essence & Atmosphere Representation (10 Marks), Creativity, Originality & Overall Engagement (5 Marks).',
    ],
    prizes: 'Cash awards for winners will be disbursed through verified electronic banking/UPI channels after credential authentication; winners and runners-up are also covered by overall ₹2,00,000+ prize pool, Certificates of Merit and trophies.',
  },

  // 08. Art Exhibition
  {
    id: 'art-exhibition',
    slug: 'art-exhibition',
    number: '08',
    titleHindi: 'कला प्रदर्शनी',
    titleEnglish: 'Art Exhibition',
    category: 'competition',
    illustration: '/assets_webp/Art-Exhibition.webp',
    taglineHindi: 'भारतीय कला, परंपरा और साहित्य की दृश्य अभिव्यक्ति।',
    taglineEnglish: 'A visual celebration of Indian art, tradition and literary heritage.',
    aboutHindi: 'तुलसी महोत्सव की प्रमुख ललित कला प्रदर्शनी, जहाँ कलाकार भारतीय कला, परंपरा, दर्शन, साहित्य, सांस्कृतिक धरोहर, शास्त्रीय कथाओं और लोक परंपराओं को चित्रकला एवं हस्तशिल्प जैसी विविध कलारूपों में अभिव्यक्त करते हैं।',
    aboutEnglish: 'The premier fine-arts exposition of Tulsi Mahotsav, inviting visual artists to express Indian art, tradition, philosophy, literature, cultural heritage, classical narratives and folk traditions through paintings, handicrafts and related visual forms.',
    date: FESTIVAL_DATES,
    time: '11:00 AM – 08:00 PM (Both Days)',
    venue: COMPETITION_DEFAULT_VENUE,
    whoCanParticipate: 'Students from recognized Colleges, Institutes and Universities across India; participation is capped at 100 registered artists on a first-come, first-served basis.',
    format: [
      'Each registered participant may submit a maximum of 3 original artworks.',
      'Artworks must be physically submitted to Exhibition Curation Desk exactly 1 day before scheduled exhibition date within designated time slot.',
      'Each artwork must carry label with artist full name, institutional affiliation & registration ID, title, and a 25–50 word conceptual note.',
      'Artworks may optionally be offered for sale through a discreet standard-sized price tag; transactions are directly between artist and buyer.',
      'Artworks must be collected by participant 1 day after exhibition concludes.',
    ],
    rules: [
      'All artworks must strictly follow theme of Cultural and Literary Heritage.',
      'Works outside cultural/literary scope, or containing controversial, offensive, or politically sensitive motifs, will be disqualified during curation.',
      'Late artwork submissions will not be accepted. Organizers are not responsible for unclaimed artworks or private buyer-artist transactions.',
      'Judging Criteria (Total 50 Marks): Thematic Relevance & Cultural Depth (15 Marks), Originality & Artistic Creativity (10 Marks), Technical Mastery & Execution (10 Marks), Visual Impact & Aesthetic Harmony (10 Marks), Finishing & Presentation (5 Marks).',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },

  // 09. Sanjeevani — Treasure Hunt Competition
  {
    id: 'treasure-hunt',
    slug: 'treasure-hunt',
    number: '09',
    titleHindi: 'संजीवनी — ट्रेजर हंट प्रतियोगिता',
    titleEnglish: 'Sanjeevani — Treasure Hunt Competition',
    category: 'competition',
    illustration: '/assets_webp/treasure_hunt.webp',
    taglineHindi: 'बुद्धि, टीमवर्क और सुरागों की रोमांचक दौड़।',
    taglineEnglish: 'A race of intellect, teamwork and clues.',
    aboutHindi: 'भारतीय विरासत और साहित्य से प्रेरित पहेलियों, ऐतिहासिक कूट-संकेतों और कैंपस-व्यापी पड़ावों के माध्यम से बुद्धि, टीमवर्क, तर्कशक्ति और सांस्कृतिक ज्ञान की परीक्षा लेने वाली रोमांचक प्रतियोगिता।',
    aboutEnglish: 'An immersive cultural hunt testing intellect, teamwork, deductive reasoning and cultural literacy through riddles, historical ciphers and campus-wide waypoints inspired by Indian heritage and literature.',
    date: '27 September 2026',
    time: '09:00 AM – 12:00 PM',
    venue: 'Open Ground',
    whoCanParticipate: 'MITS-DU students only; 40 teams maximum, with exactly 4 members per team.',
    format: [
      'All four team members must report together at designated assembly point at scheduled time. Late reporting leads to immediate forfeiture.',
      'All team members must remain together throughout hunt; splitting up is prohibited.',
      'A designated organizing volunteer accompanies each team.',
      'Mobile phones, smartwatches, internet-enabled gadgets and external communication devices prohibited; must be switched off and deposited before hunt.',
      'Team leader may lodge formal challenge after depositing ₹100 dispute fee (returned if challenge valid, forfeited if frivolous).',
      'First two teams to complete clue trail fastest across all rounds will be declared Winner and Runner-up.',
    ],
    rules: [
      'Damaging, relocating, concealing, defacing, or confiscating clues or campus property results in immediate disqualification.',
      'Zero collusion: teams must not share, trade, discuss, or hint at clues with other teams.',
    ],
    prizes: GENERAL_PRIZE_INFO,
  },
];

export const FEATURED_NIGHTS: FestivalEvent[] = [
  // 01. Shankhnaad — Udghatan Samaroh
  {
    id: 'udghatan',
    slug: 'udghatan',
    number: '01',
    titleHindi: 'शंखनाद — उद्घाटन समारोह',
    titleEnglish: 'Shankhnaad — Udghatan Samaroh / Opening Ceremony',
    category: 'featured_night',
    illustration: '/assets_webp/opening-ceremony.webp',
    taglineHindi: 'उत्सव की भव्य शुरुआत।',
    taglineEnglish: 'The magnificent commencement of Tulsi Mahotsav 2026.',
    aboutHindi: 'तुलसी महोत्सव के भव्य शुभ मुहूर्त एवं उद्घाटन समारोह का आयोजन, जहाँ दीप प्रज्वलन, अतिथि उद्बोधन एवं मुख्य मंचीय प्रस्तुतियों का शुभारंभ होगा।',
    aboutEnglish: 'The ceremonial inauguration of Tulsi Mahotsav 2026 featuring lamp lighting, keynote addresses by distinguished dignitaries, and traditional inaugural recitals.',
    date: '26 September 2026',
    time: '10:00 AM – 12:00 PM',
    venue: 'Colloquium, MITS-DU Gwalior',
    whoCanParticipate: 'Open for all festival guests, faculty, and student participants.',
    format: ['Auspicious Lamp Lighting', 'Inaugural Addresses', 'Cultural Procession'],
    rules: ['Attendees are requested to be seated 15 minutes prior to the inauguration.'],
    prizes: '',
  },

  // 02. Bhajan Sandhya
  {
    id: 'bhajan-sandhya',
    slug: 'bhajan-sandhya',
    number: '02',
    titleHindi: 'भजन संध्या',
    titleEnglish: 'Bhajan Sandhya',
    category: 'featured_night',
    illustration: '/assets_webp/bhajan-sandhya.webp',
    taglineHindi: 'भक्ति और संगीत की संगीतमय संध्या।',
    taglineEnglish: 'An evening of devotion and music.',
    aboutHindi: 'भजन संध्या में भक्ति संगीत, शास्त्रीय रागों और आध्यात्मिक प्रस्तुतियों का भव्य आयोजन होगा, जो प्रांगण को भक्तिमय वातावरण से परिपूर्ण करेगा।',
    aboutEnglish: 'A devotional evening of classical ragas, soulful bhajans, and spiritual compositions set against the serene ambiance of Director\'s Lawn.',
    date: '26 September 2026',
    time: '05:00 PM – 06:00 PM',
    venue: 'Director\'s Lawn, MITS-DU Gwalior',
    whoCanParticipate: 'Open to all festival attendees.',
    format: ['Devotional Music Performance', 'Classical Raga Chants'],
    rules: ['Maintain quiet decorum during spiritual music recitals.'],
    prizes: '',
  },

  // 03. Deepotsav
  {
    id: 'deepotsav',
    slug: 'deepotsav',
    number: '03',
    titleHindi: 'दीपोत्सव',
    titleEnglish: 'Deepotsav',
    category: 'featured_night',
    illustration: '/assets_webp/deepotsav.webp',
    taglineHindi: 'प्रकाश, परंपरा और सामूहिक उत्सव।',
    taglineEnglish: 'Light, tradition and collective celebration.',
    aboutHindi: 'दीपोत्सव के दौरान संपूर्ण प्रांगण को सहस्रों मिट्टी के दीपों एवं अलौकिक आभामंडल से सुसज्जित किया जाएगा, जो भारतीय ज्ञान-प्रकाश परंपरा का प्रतीक है।',
    aboutEnglish: 'Mass illumination of earthen lamps across campus grounds and temple lawns, celebrating the divine triumph of light and Indian cultural heritage.',
    date: '26 September 2026',
    time: '06:00 PM – 07:00 PM',
    venue: 'Central Courtyard & Temple Lawn, MITS-DU Gwalior',
    whoCanParticipate: 'Open to all students, faculty, and guests.',
    format: ['Mass Diya Illumination', 'Cultural Aarti'],
    rules: ['Follow safety guidelines around lit earthen lamps.'],
    prizes: '',
  },

  // 04. Akhil Bhartiya Kavi Sammelan
  {
    id: 'kavi-sammelan',
    slug: 'kavi-sammelan',
    number: '04',
    titleHindi: 'अखिल भारतीय कवि सम्मेलन',
    titleEnglish: 'Akhil Bhartiya Kavi Sammelan',
    category: 'featured_night',
    illustration: '/assets_webp/kavi-sammelan.webp',
    taglineHindi: 'प्रतिष्ठित कवियों के साथ काव्य का भव्य उत्सव।',
    taglineEnglish: 'A grand celebration of poetry with eminent invited poets.',
    aboutHindi: 'देश के प्रतिष्ठित राष्ट्रीय कवियों का भव्य जमावड़ा। काव्य-पाठ प्रतियोगिता के विजेता कवियों को आमंत्रित दिग्गज कवियों के साथ मंच साझा करने का विशेष privilege मिलेगा।',
    aboutEnglish: 'The landmark poetic evening featuring national renowned poets alongside qualified student winners of Kavyapath.',
    date: '26 September 2026',
    time: '06:00 PM – 08:00 PM',
    venue: 'Stage Ground, MITS-DU Gwalior',
    whoCanParticipate: 'Open to all audience members; Kavyapath winners receive stage privilege.',
    format: ['Grand Poetic Recitations', 'Guest Poet Felicitations'],
    rules: ['Main stage seating on a first-come basis.'],
    prizes: '',
  },

  // 05. Samapan Samaroh
  {
    id: 'samapan',
    slug: 'samapan',
    number: '05',
    titleHindi: 'समापन समारोह',
    titleEnglish: 'Samapan Samaroh / Closing Ceremony',
    category: 'featured_night',
    illustration: '/assets_webp/closing-ceremony.webp',
    taglineHindi: 'विजेताओं का सम्मान और उत्सव का भव्य समापन।',
    taglineEnglish: 'Honouring winners and bringing the festival to a grand close.',
    aboutHindi: 'तुलसी महोत्सव 2026 का आधिकारिक समापन एवं पुरस्कार वितरण समारोह। विजेताओं को ₹2,00,000+ पुरस्कार राशि, ट्रॉफी एवं योग्यता प्रमाण-पत्र प्रदान किए जाएंगे।',
    aboutEnglish: 'Grand Valedictory & Award Ceremony felicitating competition winners and runners-up with cash prizes from the ₹2,00,000+ pool, trophies, and merit certificates.',
    date: '27 September 2026',
    time: '04:00 PM – 06:00 PM',
    venue: 'MITS-DU, Gwalior',
    whoCanParticipate: 'All winners, runners-up, participants, and invited dignitaries.',
    format: ['Felicitation Ceremony', 'Trophy & Prize Distribution', 'Valedictory Address'],
    rules: ['All competition winners must be present to receive trophies and certificates.'],
    prizes: '₹2,00,000+ overall prize pool disbursed during ceremony.',
  },

  // 06. Grand Musical Night
  {
    id: 'grand-musical-night',
    slug: 'grand-musical-night',
    number: '06',
    titleHindi: 'ग्रैंड म्यूजिकल नाइट',
    titleEnglish: 'Grand Musical Night',
    category: 'featured_night',
    illustration: '/assets_webp/musical-night.webp',
    taglineHindi: 'उत्सव की भव्य संगीतमय समापन संध्या।',
    taglineEnglish: 'The spectacular musical finale of Tulsi Mahotsav 2026.',
    aboutHindi: 'तुलसी महोत्सव 2026 का भव्य संगीतमय समापन कार्यक्रम, जहाँ समापन समारोह के पश्चात संगीत एवं सांस्कृतिक तरंगों के साथ महोत्सव का यादगार समापन होगा।',
    aboutEnglish: 'The grand musical finale following Samapan Samaroh, bringing two days of art, literature, and culture to an unforgettable close.',
    date: '27 September 2026',
    time: '06:00 PM – 08:00 PM',
    venue: 'Stage Ground, MITS-DU Gwalior',
    whoCanParticipate: 'Open for all registered participants, students, and guests.',
    format: ['Musical Performance', 'Grand Cultural Finale'],
    rules: ['Entry with official festival pass/badge.'],
    prizes: '',
  },
];

export const ALL_EVENTS = [...COMPETITIONS, ...FEATURED_NIGHTS];
