"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Pack } from "@/lib/packs";
import CheckoutModal from "@/components/CheckoutModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reviewsByCode: Record<number, { name: string; city: string; text: string }[]> = {};
const defaultReviews = [
  { name: "Mohamed A.", city: "Paris", text: "Service impeccable, image 4K parfaite. Aucun freeze depuis 3 mois !" },
  { name: "Fatima B.", city: "Lyon", text: "Installation facile en 5 minutes. Le support WhatsApp est très réactif." },
  { name: "Karim L.", city: "Bruxelles", text: "Qualité exceptionnelle, toutes les chaînes arabes et françaises disponibles." },
  { name: "Sophie M.", city: "Marseille", text: "Parfait pour toute la famille. Compatible sur notre Samsung Smart TV sans problème." },
];

function getReviews(codes: number) {
  return reviewsByCode[codes] ?? defaultReviews;
}

export default function PackPageClient({ pack, featuredPacks }: { pack: Pack; featuredPacks: Pack[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const reviews = getReviews(pack.codes);

  return (
    <>
      <Header />
      <main className="bg-slate-950 min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/#prix" className="hover:text-gray-300 transition-colors">Packs IPTV</Link>
            <span>›</span>
            <span className="text-gray-300">{pack.name}</span>
          </nav>
        </div>

        {/* Product hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="ProMax TV Player" width={48} height={48} className="rounded-xl" />
                <div>
                  <p className="text-gray-400 text-sm">ProMax TV Player</p>
                  <h1 className="text-white font-extrabold text-2xl">{pack.name}</h1>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{pack.subtitle}</p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {pack.price}€
                </span>
                <span className="text-gray-400 mb-2">/ 12 mois</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-200">
                    <span className="w-5 h-5 rounded-full bg-green-900/50 border border-green-500/50 flex items-center justify-center text-green-400 text-xs flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105 shadow-xl shadow-red-900/30"
              >
                Commander maintenant →
              </button>
              <p className="text-gray-500 text-xs mt-3">⚡ Livraison instantanée par email & WhatsApp</p>
            </div>

            {/* Right: image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-800">
                <Image
                  src="/image-produit.jpg"
                  alt={`${pack.name} IPTV`}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold text-2xl px-4 py-2 rounded-xl shadow-lg">
                {pack.price}€
              </div>
            </div>
          </div>
        </div>

        {/* Why section */}
        <div className="bg-slate-900/50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-6">
              Pourquoi choisir le {pack.name} ProMax TV Player ?
            </h2>
            <div className="prose prose-invert text-gray-400 space-y-4 text-sm leading-relaxed">
              <p>
                Le <strong className="text-white">{pack.name} ProMax TV Player</strong> est la solution idéale pour les personnes qui souhaitent profiter d&apos;un service IPTV de qualité professionnelle à un prix accessible. Avec{" "}
                <strong className="text-white">{pack.codes} code{pack.codes > 1 ? "s" : ""} IPTV valable{pack.codes > 1 ? "s" : ""} 12 mois</strong>, vous bénéficiez d&apos;un accès complet à l&apos;ensemble de notre catalogue.
              </p>
              <p>
                Notre infrastructure haute performance garantit un streaming stable avec un uptime de <strong className="text-white">99.9%</strong>. Grâce à la technologie anti-freeze avancée, vous profitez de vos programmes sans interruption, même lors des grands événements sportifs.
              </p>
              <p>
                Compatible avec <strong className="text-white">tous les appareils</strong> — Smart TV Samsung, LG, Philips, Android Box, Amazon Firestick, MAG Box, smartphones iOS et Android, Windows et Mac — notre service s&apos;adapte à votre façon de consommer les médias.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-8 text-center">Avis clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other packs */}
        {featuredPacks.length > 0 && (
          <div className="bg-slate-900/50 py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-white font-extrabold text-2xl mb-8 text-center">D&apos;autres offres qui pourraient vous intéresser</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {featuredPacks.map((p) => (
                  <Link
                    key={p.id}
                    href={`/packs/${p.slug}`}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-700 transition-all"
                  >
                    <h3 className="text-white font-bold mb-1">{p.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{p.subtitle}</p>
                    <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                      {p.price}€
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-4">
            Prêt à profiter du meilleur IPTV ?
          </h2>
          <p className="text-gray-400 mb-8">Rejoignez des milliers de clients satisfaits. Accès immédiat.</p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105 shadow-xl shadow-red-900/30"
          >
            Commander le {pack.name} — {pack.price}€
          </button>
        </div>
      </main>
      <Footer />

      {modalOpen && <CheckoutModal pack={pack} onClose={() => setModalOpen(false)} />}
    </>
  );
}
