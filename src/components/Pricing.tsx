import Link from "next/link";
import Image from "next/image";
import { packs } from "@/lib/packs";

const trustBadges = [
  { icon: "🔒", label: "Paiement sécurisé" },
  { icon: "⚡", label: "Livraison instantanée" },
  { icon: "🔄", label: "Renouvellement facile" },
  { icon: "💬", label: "Support WhatsApp 24/7" },
];

export default function Pricing() {
  return (
    <section id="prix" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">Tarifs transparents</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
            Nos Packs IPTV
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choisissez le pack qui correspond à vos besoins. Abonnement 12 mois.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className={`relative flex flex-col bg-slate-900 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                pack.highlighted
                  ? "border-red-500/60 shadow-xl shadow-red-900/20"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Popular badge */}
              {pack.highlighted && !pack.contactOnly && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold whitespace-nowrap shadow-lg">
                  ⭐ Le Plus Populaire
                </div>
              )}
              {pack.highlighted && pack.contactOnly && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-xs font-bold whitespace-nowrap shadow-lg">
                  👑 Offre Revendeur
                </div>
              )}

              <div className="p-5 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Image src="/logo.png" alt="ProMax TV Player" width={32} height={32} className="rounded-lg flex-shrink-0" />
                  <h3 className="text-white font-bold text-lg leading-tight">{pack.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{pack.subtitle}</p>

                {/* Price */}
                <div className="mb-5">
                  {pack.contactOnly ? (
                    <span className="text-2xl font-extrabold text-gray-300">Sur demande</span>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        {pack.price}€
                      </span>
                      <span className="text-gray-400 text-sm mb-1">/an</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {pack.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-5 pt-0">
                {pack.contactOnly ? (
                  <a
                    href="https://wa.me/212667451586"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors"
                  >
                    💬 Contacter WhatsApp
                  </a>
                ) : (
                  <Link
                    href={`/packs/${pack.slug}`}
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                      pack.highlighted
                        ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400 shadow-lg shadow-red-900/30"
                        : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    Commander →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-gray-300 text-sm">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
