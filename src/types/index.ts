// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

// Hero Types
export interface HeroSegment {
  id: string;
  videoUrl: string;
  market: {
    name: string;
    color: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

// Language Types
export interface Language {
  code: string; // e.g., "en", "nl"
  name: string; // e.g., "English", "Nederlands"
  flag?: string; // Optional flag icon
}
