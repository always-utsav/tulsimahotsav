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
  objectPosition?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // 1. DIGITAL & DEVELOPMENT ARCHITECTS (2 Members - Kept exactly as existing)
  {
    id: 'w1',
    name: 'Utsav Kumawat',
    roleHindi: 'वेबसाइट विकास प्रमुख एवं डेवलपर',
    roleEnglish: 'Web Lead & Developer',
    category: 'web_team',
    image: '/assets_webp/utsav.webp',
  },
  {
    id: 'w2',
    name: 'Prateek Chawla',
    roleHindi: 'यूआई/यूएक्स एवं इंटरफेस डिज़ाइनर',
    roleEnglish: 'UI/UX & Interface Designer',
    category: 'web_team',
    image: '/assets_webp/prateek.webp',
  },

  // 2. FESTIVAL LEADERSHIP (5 Members in ONE ROW on desktop)
  {
    id: 'l1',
    name: 'Nitesh Gurjar',
    roleHindi: 'अध्यक्ष',
    roleEnglish: 'President',
    category: 'leadership',
    image: '/assets_webp/NiteshGurjar.webp',
  },
  {
    id: 'l2',
    name: 'Baldev Kaurav',
    roleHindi: 'उपाध्यक्ष',
    roleEnglish: 'Vice President',
    category: 'leadership',
    image: '/assets_webp/baldev.webp',
  },
  {
    id: 'l3',
    name: 'Ajay Rana',
    roleHindi: 'महासचिव',
    roleEnglish: 'General Secretary',
    category: 'leadership',
    image: '/assets_png/sample.png',
  },
  {
    id: 'l4',
    name: 'Devansh Rai',
    roleHindi: 'सह-सचिव',
    roleEnglish: 'Joint Secretary',
    category: 'leadership',
    image: '/assets_webp/Devansh Rai.webp',
  },
  {
    id: 'l5',
    name: 'Ananya Tiwari',
    roleHindi: 'सह-सचिव',
    roleEnglish: 'Joint Secretary',
    category: 'leadership',
    image: '/assets_webp/Ananya Tiwari.webp',
  },

  // 3. DOMAIN HEADS
  // TREASURER
  {
    id: 'dh1',
    name: 'Yuvraj Shukla',
    roleHindi: 'कोषाध्यक्ष',
    roleEnglish: 'Treasurer',
    category: 'core_lead',
    subCategory: 'Treasurer',
    image: '/assets_png/sample.png',
  },
  {
    id: 'dh2',
    name: 'Gaurang Sharma',
    roleHindi: 'कोषाध्यक्ष',
    roleEnglish: 'Treasurer',
    category: 'core_lead',
    subCategory: 'Treasurer',
    image: '/assets_webp/gaurang-sharma.webp',
  },

  // SPONSOR
  {
    id: 'dh3',
    name: 'Abhay Sharma',
    roleHindi: 'प्रायोजन प्रमुख',
    roleEnglish: 'Sponsor Lead',
    category: 'core_lead',
    subCategory: 'Sponsorship',
    image: '/assets_webp/abhay-sharma.webp',
  },

  {
    id: 'dh4',
    name: 'Dhruv Verma',
    roleHindi: 'प्रायोजन प्रमुख',
    roleEnglish: 'Sponsor Lead',
    category: 'core_lead',
    subCategory: 'Sponsorship',
    image: '/assets_webp/Dhruv_Verma.webp',
  },
  {
    id: 'dh5',
    name: 'Dhruv Sharma',
    roleHindi: 'प्रायोजन प्रमुख',
    roleEnglish: 'Sponsor Lead',
    category: 'core_lead',
    subCategory: 'Sponsorship',
    image: '/assets_webp/Dhruv Sharma.webp',
  },

  // MANAGEMENT
  {
    id: 'dh6',
    name: 'Ashish Rajawat',
    roleHindi: 'प्रबंधन प्रमुख',
    roleEnglish: 'Management Lead',
    category: 'core_lead',
    subCategory: 'Management',
    image: '/assets_webp/Ashish-Singh-Rajawat_.webp',
  },
  {
    id: 'dh7',
    name: 'Aditya Singh Tomar',
    roleHindi: 'प्रबंधन प्रमुख',
    roleEnglish: 'Management Lead',
    category: 'core_lead',
    subCategory: 'Management',
    image: '/assets_webp/Aditya Singh Tomar.webp',
  },
  {
    id: 'dh8',
    name: 'Ajeet Gurjar',
    roleHindi: 'प्रबंधन प्रमुख',
    roleEnglish: 'Management Lead',
    category: 'core_lead',
    subCategory: 'Management',
    image: '/assets_webp/Ajeet Gurjar.webp',
  },
  {
    id: 'dh9',
    name: 'Rashi Rajoriya',
    roleHindi: 'प्रबंधन प्रमुख',
    roleEnglish: 'Management Lead',
    category: 'core_lead',
    subCategory: 'Management',
    image: '/assets_webp/Rashi Rajoriya_.webp',
  },

  // COMPETITION
  {
    id: 'dh10',
    name: 'Om Chaturvedi',
    roleHindi: 'प्रतियोगिता प्रमुख',
    roleEnglish: 'Competition Lead',
    category: 'core_lead',
    subCategory: 'Competition',
    image: '/assets_webp/Om Chaturvedi.webp',
  },
  {
    id: 'dh11',
    name: 'Anku Solanki',
    roleHindi: 'प्रतियोगिता प्रमुख',
    roleEnglish: 'Competition Lead',
    category: 'core_lead',
    subCategory: 'Competition',
    image: '/assets_png/sample.png',
  },
  {
    id: 'dh12',
    name: 'Anubha Singh',
    roleHindi: 'प्रतियोगिता प्रमुख',
    roleEnglish: 'Competition Lead',
    category: 'core_lead',
    subCategory: 'Competition',
    image: '/assets_png/sample.png',
  },
  {
    id: 'dh13',
    name: 'Ayushi Kushwah',
    roleHindi: 'प्रतियोगिता प्रमुख',
    roleEnglish: 'Competition Lead',
    category: 'core_lead',
    subCategory: 'Competition',
    image: '/assets_webp/Ayushi Kushwah.webp',
  },

  // CONTENT & DOCUMENTATION
  {
    id: 'dh14',
    name: 'Rohit Gaur',
    roleHindi: 'सामग्री एवं दस्तावेज़ीकरण प्रमुख',
    roleEnglish: 'Content & Documentation',
    category: 'core_lead',
    subCategory: 'Content & Documentation',
    image: '/assets_webp/Rohit.webp',
  },
  {
    id: 'dh15',
    name: 'Umesh Kumar Mishra',
    roleHindi: 'सामग्री एवं दस्तावेज़ीकरण प्रमुख',
    roleEnglish: 'Content & Documentation',
    category: 'core_lead',
    subCategory: 'Content & Documentation',
    image: '/assets_webp/Umesh Kumar Mishra.webp',
  },
  {
    id: 'dh16',
    name: 'Charu Saxena',
    roleHindi: 'सामग्री एवं दस्तावेज़ीकरण प्रमुख',
    roleEnglish: 'Content & Documentation',
    category: 'core_lead',
    subCategory: 'Content & Documentation',
    image: '/assets_png/sample.png',
  },
  {
    id: 'dh17',
    name: 'Astha Sapre',
    roleHindi: 'सामग्री एवं दस्तावेज़ीकरण प्रमुख',
    roleEnglish: 'Content & Documentation',
    category: 'core_lead',
    subCategory: 'Content & Documentation',
    image: '/assets_webp/Astha Sapre.webp',
  },

  // TECHNICAL & SOCIAL MEDIA
  {
    id: 'dh18',
    name: 'Prasanna Saxena',
    roleHindi: 'तकनीकी प्रमुख',
    roleEnglish: 'Technical',
    category: 'core_lead',
    subCategory: 'Technical',
    image: '/assets_webp/PRASANNA_SAXENA.webp',
  },
  {
    id: 'dh19',
    name: 'Adarsh Mishra',
    roleHindi: 'तकनीकी प्रमुख',
    roleEnglish: 'Technical',
    category: 'core_lead',
    subCategory: 'Technical',
    image: '/assets_webp/adarsh-mishra.webp',
  },
  {
    id: 'dh20',
    name: 'Amrit Tehalani',
    roleHindi: 'सोशल मीडिया प्रमुख',
    roleEnglish: 'Social Media',
    category: 'core_lead',
    subCategory: 'Social Media',
    image: '/assets_webp/AmritTehalani.webp',
  },

  // PROMOTIONS & PR
  {
    id: 'dh21',
    name: 'Aryan Shrivastava',
    roleHindi: 'प्रचार एवं जनसंपर्क प्रमुख',
    roleEnglish: 'Promotions & PR',
    category: 'core_lead',
    subCategory: 'Promotions & PR',
    image: '/assets_webp/Aryan-Shrivastava_.webp',
  },
  {
    id: 'dh22',
    name: 'Satwik Dubey',
    roleHindi: 'प्रचार एवं जनसंपर्क प्रमुख',
    roleEnglish: 'Promotions & PR',
    category: 'core_lead',
    subCategory: 'Promotions & PR',
    image: '/assets_webp/satwik dubey.webp',
  },
  {
    id: 'dh23',
    name: 'Jagrati Singhal',
    roleHindi: 'प्रचार एवं जनसंपर्क प्रमुख',
    roleEnglish: 'Promotions & PR',
    category: 'core_lead',
    subCategory: 'Promotions & PR',
    image: '/assets_webp/Jagrati Singhal.webp',
  },
  {
    id: 'dh24',
    name: 'Jayshree Rathore',
    roleHindi: 'प्रचार एवं जनसंपर्क प्रमुख',
    roleEnglish: 'Promotions & PR',
    category: 'core_lead',
    subCategory: 'Promotions & PR',
    image: '/assets_webp/Jayshree Rathore.webp',
  },

  // GRAPHIC DESIGNING
  {
    id: 'dh25',
    name: 'Shreya Singh',
    roleHindi: 'ग्राफिक डिजाइनिंग प्रमुख',
    roleEnglish: 'Graphic Designing Lead',
    category: 'core_lead',
    subCategory: 'Graphic Designing',
    image: '/assets_webp/Shreya Singh_.webp',
  },
  {
    id: 'dh26',
    name: 'Vaishnavi Sharma',
    roleHindi: 'ग्राफिक डिजाइनिंग प्रमुख',
    roleEnglish: 'Graphic Designing Lead',
    category: 'core_lead',
    subCategory: 'Graphic Designing',
    image: '/assets_webp/Vaishnavi Sharma.webp',
  },

  // VIDEOGRAPHY & EDITING
  {
    id: 'dh27',
    name: 'Shresth Bharti',
    roleHindi: 'वीडियो संपादन प्रमुख',
    roleEnglish: 'Videography & Editing Lead',
    category: 'core_lead',
    subCategory: 'Videography & Editing',
    image: '/assets_png/sample.png',
  },
  {
    id: 'dh28',
    name: 'Prem Sharma',
    roleHindi: 'वीडियो संपादन प्रमुख',
    roleEnglish: 'Videography & Editing Lead',
    category: 'core_lead',
    subCategory: 'Videography & Editing',
    image: '/assets_webp/Prem sharma_.webp',
  },
  {
    id: 'dh29',
    name: 'Krash Dandotiya',
    roleHindi: 'वीडियो संपादन प्रमुख',
    roleEnglish: 'Videography & Editing Lead',
    category: 'core_lead',
    subCategory: 'Videography & Editing',
    image: '/assets_webp/Krash Dandotiya.webp',
  },

  // DECORATION & CREATIVE
  {
    id: 'dh30',
    name: 'Tanushka Sengar',
    roleHindi: 'सज्जा एवं रचनात्मक प्रमुख',
    roleEnglish: 'Decoration & Creative Lead',
    category: 'core_lead',
    subCategory: 'Decoration & Creative',
    image: '/assets_png/sample.png',
  },
];
