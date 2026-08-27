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
    dayHindi: 'प्रथम दिवस — शुभारंभ एवं प्रतियोगिताएँ',
    dayEnglish: 'Day One — Inauguration & Competitions',
    items: [
      {
        id: 's1',
        time: '10:00 AM — 11:30 AM',
        titleHindi: 'उद्घाटन समारोह (Grand Opening Ceremony)',
        titleEnglish: 'Auspicious Lamp Lighting & Keynote Addresses',
        venue: 'Main Auditorium, MITS-DU',
        category: 'ceremony',
        isHighlight: true,
      },
      {
        id: 's2',
        time: '11:30 AM — 01:30 PM',
        titleHindi: 'काव्य पाठ प्रतियोगिता (Poetry Recitation)',
        titleEnglish: 'Round 1 & Showcase of Original Verses',
        venue: 'Main Auditorium, MITS-DU',
        category: 'competition',
      },
      {
        id: 's3',
        time: '11:30 AM — 01:30 PM',
        titleHindi: '"निरूपण" - रचनात्मक लेखन प्रतियोगिता (Creative Writing)',
        titleEnglish: 'Live Prompt Essay & Short Story Writing',
        venue: 'Central Library Hall',
        category: 'competition',
      },
      {
        id: 's4',
        time: '02:00 PM — 04:00 PM',
        titleHindi: 'भाषण प्रतियोगिता (Speech & Elocution)',
        titleEnglish: 'Elocutionary Showcase on Modern & Cultural Themes',
        venue: 'Seminar Hall',
        category: 'competition',
      },
      {
        id: 's5',
        time: '02:00 PM — 04:00 PM',
        titleHindi: 'सांस्कृतिक प्रश्नोत्तरी प्रतियोगिता (Quiz Competition)',
        titleEnglish: 'Screening & Live Buzzer Stage Quiz',
        venue: 'Lecture Hall Complex',
        category: 'competition',
      },
      {
        id: 's6',
        time: '02:30 PM — 05:00 PM',
        titleHindi: '"अनुभूति" - कला प्रदर्शनी (Art & Painting Showcase)',
        titleEnglish: 'Live Canvas Painting & Art Gallery Display',
        venue: 'Art & Design Gallery',
        category: 'competition',
      },
      {
        id: 's7',
        time: '06:30 PM — 07:30 PM',
        titleHindi: 'दीपोत्सव (Deepotsav — Festival of Lights)',
        titleEnglish: 'Mass Illumination of Earthen Lamps & Aarti',
        venue: 'Central Courtyard & Temple Lawns',
        category: 'cultural',
        isHighlight: true,
      },
      {
        id: 's8',
        time: '08:00 PM — 11:00 PM',
        titleHindi: 'अखिल भारतीय कवि सम्मेलन (Grand Kavi Sammelan)',
        titleEnglish: 'Eminent Poets Reciting Poetic Masterpieces',
        venue: 'Grand Central Festival Ground',
        category: 'cultural',
        isHighlight: true,
      },
    ],
  },
  {
    dayNumber: '02',
    dateDisplay: '27 SEPTEMBER 2026',
    dayHindi: 'द्वितीय दिवस — कला, भक्ति एवं समापन',
    dayEnglish: 'Day Two — Music, Dance & Grand Finale',
    items: [
      {
        id: 's9',
        time: '10:00 AM — 01:00 PM',
        titleHindi: '"श्रुति संगम" - एकल गायन प्रतियोगिता (Solo Singing)',
        titleEnglish: 'Classical, Folk & Soulful Contemporary Singing',
        venue: 'Open Air Amphitheatre',
        category: 'competition',
      },
      {
        id: 's10',
        time: '10:30 AM — 01:30 PM',
        titleHindi: '"संजीवनी" - ट्रेजर हंट प्रतियोगिता (Treasure Hunt)',
        titleEnglish: 'Campus-wide Riddle Solving & Cryptic Hunt',
        venue: 'MITS Campus Grounds',
        category: 'competition',
      },
      {
        id: 's11',
        time: '01:30 PM — 04:30 PM',
        titleHindi: '"थिरक" - एकल नृत्य प्रतियोगिता (Solo Dance)',
        titleEnglish: 'Classical, Folk & Indo-Contemporary Dance Showcase',
        venue: 'Main Cultural Stage',
        category: 'competition',
      },
      {
        id: 's13',
        time: '04:00 PM Deadline',
        titleHindi: 'रील निर्माण प्रतियोगिता (Reel Making Submission)',
        titleEnglish: 'Final Upload & Tagging Deadline for Video Creators',
        venue: 'Digital Online Portal',
        category: 'competition',
      },
      {
        id: 's14',
        time: '06:00 PM — 08:00 PM',
        titleHindi: 'भजन संध्या (Bhajan Sandhya — Spiritual Evening)',
        titleEnglish: 'Devotional Ragas & Musical Chants',
        venue: 'Amphitheatre Ground',
        category: 'cultural',
        isHighlight: true,
      },
      {
        id: 's15',
        time: '08:30 PM — 10:30 PM',
        titleHindi: 'समापन एवं पुरस्कार वितरण (Grand Closing & Awards)',
        titleEnglish: 'Felicitation of Winners, Trophies & Valedictory Session',
        venue: 'Main Auditorium, MITS-DU',
        category: 'ceremony',
        isHighlight: true,
      },
    ],
  },
];
