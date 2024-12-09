export const HERO_SEGMENTS = [
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    videoSrc: "/videos/pharma.mp4",
    market: {
      name: "Pharmaceutical",
      color: "#0066FF"
    },
    description:
      "Bronkhorst is the leader in mass flow meters and controllers technology for gases and liquids, pressure controllers and evaporation systems. We are the low-flow specialist.",
    ctaText: "View our pharmaceutical solutions",
    ctaLink: "/solutions/pharmaceutical"
  },
  {
    id: "surface-treatment",
    title: "Surface treatment",
    videoSrc: "/videos/tanks.mp4",
    market: {
      name: "Surface treatment",
      color: "#00CC88"
    },
    description:
      "Bronkhorst is the leader in mass flow meters and controllers technology for gases and liquids, pressure controllers and evaporation systems. We are the low-flow specialist.",
    ctaText: "View our pharmaceutical solutions",
    ctaLink: "/solutions/surface-treatment"
  }
] as const

// Type for the hero segments
export type HeroSegment = (typeof HERO_SEGMENTS)[number]
