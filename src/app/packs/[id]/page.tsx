import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { packs, orderablePacks, getPackBySlug } from "@/lib/packs";
import PackPageClient from "./PackPageClient";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return orderablePacks.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pack = getPackBySlug(id);
  if (!pack) return {};
  return {
    title: `${pack.name} IPTV 12 Mois — ProMax TV Player | ${pack.price}€`,
    description: `Abonnez-vous au ${pack.name} ProMax TV Player : ${pack.codes} code${pack.codes > 1 ? "s" : ""} IPTV 12 mois, +8 000 chaînes, +80 000 VOD, qualité 4K. Seulement ${pack.price}€/an.`,
    alternates: { canonical: `https://promax-tv-player.com/packs/${pack.slug}` },
  };
}

export default async function PackPage({ params }: Props) {
  const { id } = await params;
  const pack = getPackBySlug(id);
  if (!pack) notFound();
  const featuredPacks = packs.filter((p) => !p.contactOnly && p.id !== pack.id).slice(0, 3);
  return <PackPageClient pack={pack} featuredPacks={featuredPacks} />;
}
