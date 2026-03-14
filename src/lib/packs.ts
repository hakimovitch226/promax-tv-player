export type Pack = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  codes: number;
  price: number;
  highlighted?: boolean;
  contactOnly?: boolean;
  features: string[];
};

const baseFeatures = (codes: number): string[] => [
  `${codes} code${codes > 1 ? "s" : ""} IPTV 12 mois`,
  "+8 000 chaînes TV en direct",
  "+80 000 VOD Films & Séries",
  "Qualité 4K / Full HD",
  "Anti-freeze avancé",
  "Compatible tous appareils",
  "Support WhatsApp 24/7",
];

export const packs: Pack[] = [
  {
    id: "individuel",
    slug: "abonnement-iptv-individuel-promax-tv-player",
    name: "Pack Individuel",
    subtitle: "Idéal pour une personne",
    codes: 1,
    price: 34,
    features: baseFeatures(1),
  },
  {
    id: "duo",
    slug: "abonnement-iptv-duo-promax-tv-player",
    name: "Pack Duo",
    subtitle: "Partagez avec un proche",
    codes: 2,
    price: 60,
    highlighted: true,
    features: baseFeatures(2),
  },
  {
    id: "famille",
    slug: "abonnement-iptv-famille-promax-tv-player",
    name: "Pack Famille",
    subtitle: "Parfait pour toute la famille",
    codes: 3,
    price: 80,
    features: baseFeatures(3),
  },
  {
    id: "pack-4",
    slug: "abonnement-iptv-pack-4-promax-tv-player",
    name: "Pack 4 Codes",
    subtitle: "Pour un petit groupe",
    codes: 4,
    price: 100,
    features: baseFeatures(4),
  },
  {
    id: "pack-5",
    slug: "abonnement-iptv-pack-5-promax-tv-player",
    name: "Pack 5 Codes",
    subtitle: "Économique à 5",
    codes: 5,
    price: 115,
    features: baseFeatures(5),
  },
  {
    id: "pack-6",
    slug: "abonnement-iptv-pack-6-promax-tv-player",
    name: "Pack 6 Codes",
    subtitle: "Plus de partage",
    codes: 6,
    price: 130,
    features: baseFeatures(6),
  },
  {
    id: "pack-7",
    slug: "abonnement-iptv-pack-7-promax-tv-player",
    name: "Pack 7 Codes",
    subtitle: "Grand groupe",
    codes: 7,
    price: 145,
    features: baseFeatures(7),
  },
  {
    id: "pack-8",
    slug: "abonnement-iptv-pack-8-promax-tv-player",
    name: "Pack 8 Codes",
    subtitle: "Pour les grandes familles",
    codes: 8,
    price: 165,
    features: baseFeatures(8),
  },
  {
    id: "pack-9",
    slug: "abonnement-iptv-pack-9-promax-tv-player",
    name: "Pack 9 Codes",
    subtitle: "Presque pro",
    codes: 9,
    price: 185,
    features: baseFeatures(9),
  },
  {
    id: "pack-10",
    slug: "abonnement-iptv-pack-10-promax-tv-player",
    name: "Pack 10 Codes",
    subtitle: "Offre revendeur",
    codes: 10,
    price: 0,
    highlighted: true,
    contactOnly: true,
    features: baseFeatures(10),
  },
  {
    id: "pack-20",
    slug: "abonnement-iptv-pack-20-promax-tv-player",
    name: "Pack 20 Codes",
    subtitle: "Revendeur intermédiaire",
    codes: 20,
    price: 0,
    contactOnly: true,
    features: baseFeatures(20),
  },
  {
    id: "pack-30",
    slug: "abonnement-iptv-pack-30-promax-tv-player",
    name: "Pack 30 Codes",
    subtitle: "Revendeur pro",
    codes: 30,
    price: 0,
    contactOnly: true,
    features: baseFeatures(30),
  },
];

export function getPackBySlug(slug: string): Pack | undefined {
  return packs.find((p) => p.slug === slug);
}

export const orderablePacks = packs.filter((p) => !p.contactOnly);
