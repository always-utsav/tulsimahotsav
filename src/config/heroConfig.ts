export interface HeroTextPhase {
  id: string;
  startFrame: number;
  endFrame: number;
  fadeInStart: number;
  fadeInEnd: number;
  fadeOutStart: number;
  fadeOutEnd: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accentText?: string;
  position: 'top-left' | 'center-left' | 'center-right' | 'top-right' | 'bottom-left' | 'bottom-right';
  textAlign: 'left' | 'right' | 'center';
}

export interface HeroConfig {
  totalFrames: number;
  framePathPattern: string; // e.g. /frames/ezgif-frame-%THREE_DIGIT_INDEX%.webp
  initialPreloadCount: number;
  scrollSectionHeightVh: number; // e.g. 500vh for smooth scroll speed
  phases: HeroTextPhase[];
  navLinks: { name: string; href: string }[];
  ctaButtonText: string;
}

export const HERO_CONFIG: HeroConfig = {
  totalFrames: 290,
  framePathPattern: '/frames/ezgif-frame-',
  initialPreloadCount: 30, // Quick load initial batch so canvas can start instantly
  scrollSectionHeightVh: 500, // 500vh for precise, luxurious scroll control
  phases: [
    {
      id: 'opening',
      startFrame: 1,
      endFrame: 75,
      fadeInStart: 1,
      fadeInEnd: 15,
      fadeOutStart: 55,
      fadeOutEnd: 75,
      eyebrow: 'EST. 2023 • THIRD EDITION',
      title: 'एक नए अध्याय की शुरुआत...',
      subtitle: 'A new chapter begins, bringing together culture, creativity, and celebration.',
      accentText: '01 / RITUAL UNVEILING',
      position: 'top-left',
      textAlign: 'left',
    },
    {
      id: 'expansion',
      startFrame: 80,
      endFrame: 155,
      fadeInStart: 80,
      fadeInEnd: 95,
      fadeOutStart: 140,
      fadeOutEnd: 155,
      eyebrow: 'CELEBRATING LITERATURE & CULTURE',
      title: 'जहाँ संस्कृति मंच पर उतरती है!',
      subtitle: 'Where tradition comes alive through the ideas and creativity of a new generation.',
      accentText: '02 / CINEMATIC SPECTRUM',
      position: 'center-right',
      textAlign: 'right',
    },
    {
      id: 'anticipation',
      startFrame: 160,
      endFrame: 235,
      fadeInStart: 160,
      fadeInEnd: 175,
      fadeOutStart: 215,
      fadeOutEnd: 235,
      eyebrow: 'WELCOMES YOU TO EXPERIENCE',
      title: 'विरासत वही, अंदाज़ नया',
      subtitle: 'Where our heritage meets new ideas, new voices, and new expressions.',
      accentText: '03 / THE REVEAL APPROACHES',
      position: 'bottom-left',
      textAlign: 'left',
    },
    // Note: Frames 240 to 290 have NO text overlay so the central metallic logo reveal & light sweep are 100% clean and unobstructed.
  ],
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ],
  ctaButtonText: 'Explore Mahotsav',
};
