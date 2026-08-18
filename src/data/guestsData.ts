export interface GuestProfile {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  roleHindi: string;
  roleEnglish: string;
  category: 'chief_guest' | 'poet' | 'artist';
  image: string;
  frame: string;
  quoteHindi: string;
  quoteEnglish: string;
  bioHindi: string;
  bioEnglish: string;
  isConfirmed: boolean;
}

export const GUEST_PROFILES: GuestProfile[] = [
  {
    id: 'guest-1',
    nameHindi: 'अतिथि सम्मान (मुख्य अतिथि)',
    nameEnglish: 'Distinguished Chief Guest',
    roleHindi: 'विशिष्ट अतिथि एवं मुख्य वक्ता',
    roleEnglish: 'Eminent Scholar & Guest of Honor',
    category: 'chief_guest',
    image: '/assets_webp/guest-frame.webp',
    frame: '/assets_webp/guest-frame.webp',
    quoteHindi: 'साहित्य समाज का दर्पण ही नहीं, नवसर्जन की चेतना भी है।',
    quoteEnglish: 'Literature is not merely a reflection of society, but the awakening of creative transformation.',
    bioHindi: 'नाम एवं विस्तृत परिचय आधिकारिक घोषणा के साथ शीघ्र अद्यतन किया जाएगा।',
    bioEnglish: 'Official guest announcement and background details will be revealed shortly by the Hindi Samiti organizing committee.',
    isConfirmed: false,
  },
  {
    id: 'guest-2',
    nameHindi: 'काव्य मनीषी (कवि सम्मेलन)',
    nameEnglish: 'Eminent Hindi Poet & Orator',
    roleHindi: 'वरिष्ठ साहित्यकार एवं गीतकार',
    roleEnglish: 'Celebrated Lyricist & Literary Figure',
    category: 'poet',
    image: '/assets_webp/guest-frame.webp',
    frame: '/assets_webp/guest-frame.webp',
    quoteHindi: 'जहाँ कविता साँस लेती है, वहाँ विचार अमर हो जाते हैं।',
    quoteEnglish: 'Where poetry breathes, ideas achieve immortality.',
    bioHindi: 'अखिल भारतीय कवि सम्मेलन में आमंत्रित कवियों का नाम शीघ्र घोषित किया जाएगा।',
    bioEnglish: 'The lineup of national poets gracing the Kavi Sammelan stage will be unveiled soon.',
    isConfirmed: false,
  },
  {
    id: 'guest-3',
    nameHindi: 'भक्ति साधक (भजन संध्या)',
    nameEnglish: 'Spiritual Vocalist & Music Maestro',
    roleHindi: 'प्रसिद्ध शास्त्रीय गायक',
    roleEnglish: 'Renowned Classical Devotional Singer',
    category: 'artist',
    image: '/assets_webp/guest-frame.webp',
    frame: '/assets_webp/guest-frame.webp',
    quoteHindi: 'संगीत ईश्वर प्राप्ति का सबसे सहज और सुगम मार्ग है।',
    quoteEnglish: 'Music is the most serene and accessible pathway to spiritual communion.',
    bioHindi: 'भजन संध्या के गायक कलाकार का नाम शीघ्र घोषित किया जाएगा।',
    bioEnglish: 'The musical maestro for Bhajan Sandhya will be announced shortly.',
    isConfirmed: false,
  },
];
