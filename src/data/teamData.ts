export interface TeamMember {
  id: string;
  name: string;
  roleHindi: string;
  roleEnglish: string;
  category: 'leadership' | 'core_lead' | 'web_team';
  subCategory?: string;
  image?: string;
  frame?: string;
  email?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Website Development Team (FIRST)
  {
    id: 'w1',
    name: 'Utsav Kumawat',
    roleHindi: 'वेबसाइट प्रमुख एवं डिजिटल आर्किटेक्ट',
    roleEnglish: 'Web Lead & Systems Architect',
    category: 'web_team',
    image: '/assets_png/sample.png',
  },
  {
    id: 'w2',
    name: 'Prateek Chawla',
    roleHindi: 'यूआई/यूएक्स एवं फ्रंटएंड डेवलपर',
    roleEnglish: 'UI/UX & Frontend Engineer',
    category: 'web_team',
    image: '/assets_png/sample.png',
  },

  // Leadership (THEN)
  {
    id: 'l1',
    name: 'Name',
    roleHindi: 'संयोजक / ओवरऑल लीड',
    roleEnglish: 'Overall Student Coordinator',
    category: 'leadership',
    image: '/assets_png/sample.png',
  },
  {
    id: 'l2',
    name: 'Name',
    roleHindi: 'हिंदी समिति प्रमुख',
    roleEnglish: 'Hindi Samiti Lead',
    category: 'leadership',
    email: 'hindisamitiofficial@gmail.com',
    image: '/assets_png/sample.png',
  },

  // Core Team Domain Heads / Members
  {
    id: 'c1',
    name: 'Name',
    roleHindi: 'रचनात्मक एवं पोस्टर कला प्रमुख',
    roleEnglish: 'Creative & Visual Art Lead',
    category: 'core_lead',
    subCategory: 'Creative',
    image: '/assets_png/sample.png',
  },
  {
    id: 'c2',
    name: 'Name',
    roleHindi: 'प्रतियोगिता एवं मंच संचालन प्रमुख',
    roleEnglish: 'Events Operations Lead',
    category: 'core_lead',
    subCategory: 'Events',
    image: '/assets_png/sample.png',
  },
  {
    id: 'c3',
    name: 'Name',
    roleHindi: 'मीडिया, प्रचार एवं जनसंपर्क प्रमुख',
    roleEnglish: 'Media & Publicity Lead',
    category: 'core_lead',
    subCategory: 'PR & Media',
    image: '/assets_png/sample.png',
  },
  {
    id: 'c4',
    name: 'Name',
    roleHindi: 'आवागमन एवं अतिथि सत्कार प्रमुख',
    roleEnglish: 'Logistics & Guest Relations',
    category: 'core_lead',
    subCategory: 'Operations',
    image: '/assets_png/sample.png',
  },
];
