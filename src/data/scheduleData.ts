export interface ScheduleItem {
  id: string;
  time: string;
  titleHindi: string;
  titleEnglish: string;
  venue: string;
  category: 'competition' | 'ceremony' | 'cultural';
  isHighlight?: boolean;
}

export interface DaySchedule {
  dayNumber: '01' | '02';
  dateDisplay: string;
  dayHindi: string;
  dayEnglish: string;
  items: ScheduleItem[];
}

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    dayNumber: '01',
    dateDisplay: '26 SEPTEMBER 2026',
    dayHindi: 'प्रथम दिवस — शुभारंभ, प्रतियोगिताएँ एवं सांस्कृतिक संध्या',
    dayEnglish: 'Day One — Inauguration, Competitions & Cultural Evenings',
    items: [
      {
        id: 's1',
        time: '10:00 AM – 12:00 PM',
        titleHindi: '"शंखनाद" — उद्घाटन समारोह (Opening Ceremony)',
        titleEnglish: 'Auspicious Lamp Lighting & Inaugural Keynote Addresses',
        venue: 'Colloquium',
        category: 'ceremony',
        isHighlight: true,
      },
      {
        id: 's2',
        time: '12:00 PM – 02:00 PM',
        titleHindi: 'सांस्कृतिक प्रश्नोत्तरी (Cultural Quiz)',
        titleEnglish: 'Screening Round & Live Stage Buzzer Finale',
        venue: 'Colloquium',
        category: 'competition',
      },
      {
        id: 's3',
        time: '02:00 PM – 05:00 PM',
        titleHindi: 'काव्य-पाठ प्रतियोगिता (Kavyapath — Poetry Recitation)',
        titleEnglish: 'Original Verses & Recitation Showcase',
        venue: 'Conclave Center',
        category: 'competition',
      },
      {
        id: 's4',
        time: '02:00 PM – 05:00 PM',
        titleHindi: '"थिरक" — एकल नृत्य प्रतियोगिता (Thirak — Solo Dance)',
        titleEnglish: 'Classical & Traditional Dance Showcase',
        venue: 'SAC',
        category: 'competition',
      },
      {
        id: 's5',
        time: '05:00 PM – 06:00 PM',
        titleHindi: 'भजन संध्या (Bhajan Sandhya)',
        titleEnglish: 'Devotional Ragas & Soulful Chants',
        venue: "Director's Lawn",
        category: 'cultural',
        isHighlight: true,
      },
      {
        id: 's6',
        time: '06:00 PM – 07:00 PM',
        titleHindi: 'दीपोत्सव (Deepotsav — Festival of Lights)',
        titleEnglish: 'Mass Illumination of Earthen Lamps & Cultural Aarti',
        venue: 'MITS-DU, Gwalior',
        category: 'cultural',
        isHighlight: true,
      },
      {
        id: 's7',
        time: '06:00 PM – 08:00 PM',
        titleHindi: 'अखिल भारतीय कवि सम्मेलन (Grand Kavi Sammelan)',
        titleEnglish: 'Eminent Invited National Poets & Kavyapath Winners Showcase',
        venue: 'Stage Ground',
        category: 'cultural',
        isHighlight: true,
      },
      {
        id: 's8',
        time: '11:00 AM – 08:00 PM',
        titleHindi: 'कला प्रदर्शनी (Art Exhibition)',
        titleEnglish: 'Fine Arts & Cultural Handicrafts Exposition',
        venue: 'MITS-DU, Gwalior',
        category: 'competition',
      },
      {
        id: 's9',
        time: '11:00 AM – 08:00 PM',
        titleHindi: 'व्यंजन मेला एवं पुस्तक प्रदर्शनी (Food Stalls & Book Fair)',
        titleEnglish: 'Traditional Cuisines & Literary Exposition',
        venue: 'MITS-DU, Gwalior',
        category: 'cultural',
      },
    ],
  },
  {
    dayNumber: '02',
    dateDisplay: '27 SEPTEMBER 2026',
    dayHindi: 'द्वितीय दिवस — साहित्य, कला, समापन एवं ग्रैंड म्यूजिकल नाइट',
    dayEnglish: 'Day Two — Literature, Music, Valedictory & Grand Musical Night',
    items: [
      {
        id: 's10',
        time: '09:00 AM – 12:00 PM',
        titleHindi: '"संजीवनी" — ट्रेजर हंट प्रतियोगिता (Sanjeevani — Treasure Hunt)',
        titleEnglish: 'Campus-wide Riddle Solving & Cryptic Cultural Hunt',
        venue: 'Open Ground',
        category: 'competition',
      },
      {
        id: 's11',
        time: '10:00 AM – 12:00 PM',
        titleHindi: '"निरूपण" — रचनात्मक लेखन प्रतियोगिता (Nirupan — Creative Writing)',
        titleEnglish: 'Visual Prompt Analytical & Creative Interpretation Essay',
        venue: 'Seminar Hall',
        category: 'competition',
      },
      {
        id: 's12',
        time: '12:00 PM – 03:00 PM',
        titleHindi: '"श्रुति संगम" — एकल गायन प्रतियोगिता (Shruti Sangam — Solo Singing)',
        titleEnglish: 'Classical Vocal Recitals & Acoustic Accompaniment',
        venue: 'SAC',
        category: 'competition',
      },
      {
        id: 's13',
        time: '12:00 PM – 03:00 PM',
        titleHindi: 'भाषण प्रतियोगिता (Speech Competition)',
        titleEnglish: 'Persuasive Hindi Oratory on Cultural Identity & GenZ',
        venue: 'Conclave Center',
        category: 'competition',
      },
      {
        id: 's14',
        time: '04:00 PM – 06:00 PM',
        titleHindi: 'समापन समारोह (Samapan Samaroh / Closing Ceremony)',
        titleEnglish: 'Grand Valedictory Session, Felicitation & Prize Distribution',
        venue: 'MITS-DU, Gwalior',
        category: 'ceremony',
        isHighlight: true,
      },
      {
        id: 's15',
        time: '06:00 PM – 08:00 PM',
        titleHindi: 'ग्रैंड म्यूजिकल नाइट (Grand Musical Night)',
        titleEnglish: 'Spectacular Musical Finale & Cultural Closing Evening',
        venue: 'Stage Ground',
        category: 'cultural',
        isHighlight: true,
      },
      {
        id: 's16',
        time: '11:00 AM – 08:00 PM',
        titleHindi: 'कला प्रदर्शनी (Art Exhibition)',
        titleEnglish: 'Fine Arts & Cultural Handicrafts Exposition',
        venue: 'MITS-DU, Gwalior',
        category: 'competition',
      },
      {
        id: 's17',
        time: '11:00 AM – 08:00 PM',
        titleHindi: 'व्यंजन मेला एवं पुस्तक प्रदर्शनी (Food Stalls & Book Fair)',
        titleEnglish: 'Traditional Cuisines & Literary Exposition',
        venue: 'MITS-DU, Gwalior',
        category: 'cultural',
      },
    ],
  },
];
