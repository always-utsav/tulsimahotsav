export interface SponsorCategory {
  titleHindi: string;
  
  tier: 'title' | 'powered_by' | 'associate' | 'media';
  sponsors: {
    id: string;
    name: string;
    logo?: string;
    placeholderLabel: string;
    subtitleHindi: string;
    status : string;
  }[];
}

export const PARTNERS_DATA: SponsorCategory[] = [
  {
    titleHindi: 'मुख्य साझेदार',
  
    tier: 'title',
    sponsors: [
      {
        id: 'p1',
        name: 'Title Partner',
        placeholderLabel: 'Official Title Partner',
        subtitleHindi: 'आधिकारिक मुख्य साझेदार',
        status: 'To be Updated',
      },
    ],
  },
  {
    titleHindi: 'सहयोगी',
    
    tier: 'powered_by',
    sponsors: [
      {
        id: 'p2',
        name: 'Associate Sponsor A',
        placeholderLabel: 'Powered By Partner A',
        subtitleHindi: 'आधिकारिक सह-प्रायोजक A',
        status: 'To be Updated',
      },
      {
        id: 'p3',
        name: 'Associate Sponsor B',
        placeholderLabel: 'Powered By Partner B',
        subtitleHindi: 'आधिकारिक सह-प्रायोजक B',
        status: 'To be Updated',
      },
    ],
  },
  {
    titleHindi: 'सहयोगी साझेदार',
   
    tier: 'associate',
    sponsors: [
      {
        id: 'p4',
        name: 'Cultural Partner',
        placeholderLabel: 'Cultural Institution Partner',
        subtitleHindi: 'सांस्कृतिक संस्थान भागीदार',
        status: 'To be Updated',
      },
      {
        id: 'p5',
        name: 'Hospitality Partner',
        placeholderLabel: 'Hospitality & Venue Partner',
        subtitleHindi: 'आतिथ्य एवं स्थल भागीदार',
        status: 'To be Updated',
      },
      {
        id: 'p6',
        name: 'Digital Partner',
        placeholderLabel: 'Digital Platform Partner',
        subtitleHindi: 'डिजिटल प्लेटफॉर्म भागीदार',
        status: 'To be Updated',
      },
    ],
  },
  {
    titleHindi: 'मीडिया एवं प्रचार भागीदार',
    
    tier: 'media',
    sponsors: [
      {
        id: 'p7',
        name: 'Print Media Partner',
        placeholderLabel: 'Official Print Media Partner',
        subtitleHindi: 'आधिकारिक प्रिंट मीडिया भागीदार',
        status: 'To be Updated',
      },
      {
        id: 'p8',
        name: 'Radio & Audio Partner',
        placeholderLabel: 'Official Radio Partner',
        subtitleHindi: 'आधिकारिक रेडियो भागीदार',
        status: 'To be Updated',
      },
    ],
  },
];
