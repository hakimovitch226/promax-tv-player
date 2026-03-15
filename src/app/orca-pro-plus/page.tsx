import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { packs } from "@/lib/packs";

export const metadata: Metadata = {
  title: "Alternative à Orca Pro Plus — ProMax TV Player IPTV",
  description:
    "Orca Pro Plus est arrêté ? Découvrez ProMax TV Player, la meilleure alternative IPTV. +8 000 chaînes, +80 000 VOD, 4K Ultra HD. Vos codes IPTV restent compatibles.",
  alternates: { canonical: "https://promax-tv-player.com/orca-pro-plus" },
};

const faqItems = [
  {
    q: "Mes codes Orca Pro Plus fonctionnent-ils avec ProMax TV Player ?",
    a: "Non, Orca Pro Plus utilisait ses propres serveurs. Vous devez souscrire un nouvel abonnement ProMax TV Player pour accéder à nos serveurs premium.",
  },
  {
    q: "Orca Pro Plus est-il définitivement arrêté ?",
    a: "Oui, l'application Orca Pro Plus a cessé ses activités. ProMax TV Player est la solution de remplacement recommandée avec une bien meilleure infrastructure.",
  },
  {
    q: "Comment migrer d'Orca Pro Plus vers ProMax TV Player ?",
    a: "C'est simple : choisissez un pack ProMax TV Player, installez l'app via Downloader avec le code 286509, et entrez votre nouveau code IPTV. En 5 minutes vous êtes opérationnel.",
  },
  {
    q: "ProMax TV Player est-il mieux qu'Orca Pro Plus ?",
    a: "Absolument. ProMax TV Player offre 99.9% d'uptime, une technologie anti-freeze avancée, et un catalogue plus large avec +8 000 chaînes et +80 000 VOD en 4K.",
  },
  {
    q: "Comment contacter le support ProMax TV Player ?",
    a: "Notre support WhatsApp est disponible 24h/24 et 7j/7 au +212 667-451586. Nous répondons en quelques minutes.",
  },
];

const featuredPacks = packs.filter((p) => !p.contactOnly && ["individuel", "duo", "famille"].includes(p.id));

export default function OrcaProPlusPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-gray-300">Alternative Orca Pro Plus</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-900/30 border border-red-500/40 text-red-400 text-xs font-medium mb-5">
                ⚠️ Orca Pro Plus est arrêté
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                La meilleure <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">alternative à Orca Pro Plus</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Orca Pro Plus a fermé ses portes ? <strong className="text-white">ProMax TV Player</strong> est là.
                Même qualité, meilleure infrastructure, support réactif 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#prix"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105"
                >
                  Voir nos packs →
                </Link>
                <a
                  href="https://wa.me/212667451586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold transition-all"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Images comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="bg-slate-900 border border-red-500/30 rounded-2xl p-4 text-center">
                  <Image src="/orca pro plus.webp" alt="Orca Pro Plus arrêté" width={200} height={140} className="rounded-xl mx-auto mb-3 grayscale opacity-60" />
                  <div className="text-red-400 font-bold text-sm">⛔ Orca Pro Plus</div>
                  <div className="text-gray-500 text-xs">Arrêté · Inactif</div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-slate-900 border border-green-500/30 rounded-2xl overflow-hidden">
                  <Image src="/hero-bg.webp" alt="ProMax TV Player" width={300} height={160} className="w-full object-cover" />
                  <div className="p-3 text-center">
                    <div className="text-green-400 font-bold text-sm">✅ ProMax TV Player</div>
                    <div className="text-gray-400 text-xs">Actif · 99.9% uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-slate-900/50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-10">
              Comparaison
            </h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-800/50 divide-x divide-slate-700">
                <div className="p-4 font-semibold text-gray-300">Fonctionnalité</div>
                <div className="p-4 font-semibold text-red-400 text-center">Orca Pro Plus</div>
                <div className="p-4 font-semibold text-green-400 text-center">ProMax TV Player</div>
              </div>
              {[
                ["Statut", "❌ Arrêté", "✅ Actif"],
                ["Uptime", "❌ N/A", "✅ 99.9%"],
                ["Chaînes TV", "❌ Indisponible", "✅ +8 000"],
                ["VOD", "❌ Indisponible", "✅ +80 000"],
                ["Qualité", "❌ N/A", "✅ 4K Ultra HD"],
                ["Anti-freeze", "❌ N/A", "✅ Avancé"],
                ["Support", "❌ Aucun", "✅ WhatsApp 24/7"],
                ["Installation", "❌ App inaccessible", "✅ Code Downloader 286509"],
              ].map(([feat, old, neo]) => (
                <div key={feat} className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800">
                  <div className="p-4 text-gray-400 text-sm">{feat}</div>
                  <div className="p-4 text-sm text-center text-red-400">{old}</div>
                  <div className="p-4 text-sm text-center text-green-400">{neo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compatible banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="text-white font-bold text-xl mb-2">Migration facile depuis Orca Pro Plus</h3>
            <p className="text-gray-400">ProMax TV Player utilise le même format de code IPTV. Installez l&apos;app, entrez votre nouveau code et c&apos;est parti.</p>
          </div>
        </div>

        {/* Installation steps */}
        <div className="bg-slate-900/50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-10">
              3 étapes pour commencer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", t: "Choisissez un pack", d: "Sélectionnez le pack adapté à vos besoins et passez commande." },
                { n: "02", t: "Installez via Downloader", d: "Téléchargez Downloader, entrez le code 286509 et installez ProMax TV Player." },
                { n: "03", t: "Entrez votre code IPTV", d: "Entrez le code reçu par email/WhatsApp et profitez immédiatement." },
              ].map((s) => (
                <div key={s.n} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-3">{s.n}</div>
                  <h3 className="text-white font-bold mb-2">{s.t}</h3>
                  <p className="text-gray-400 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Downloader banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <Image src="/Downloader.webp" alt="Downloader" width={120} height={80} className="rounded-xl" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-gray-400 text-sm">Code Downloader</p>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 tracking-widest">
                286509
              </div>
            </div>
            <Link
              href="/#prix"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all"
            >
              Voir les packs
            </Link>
          </div>
        </div>

        {/* Featured packs */}
        <div className="bg-slate-900/50 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-10">Nos packs les plus populaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredPacks.map((p) => (
                <div key={p.id} className={`bg-slate-900 border rounded-2xl p-6 ${p.highlighted ? "border-red-500/50" : "border-slate-800"}`}>
                  {p.highlighted && (
                    <div className="text-xs font-bold text-orange-400 mb-2">⭐ Le Plus Populaire</div>
                  )}
                  <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.subtitle}</p>
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">{p.price}€</div>
                  <Link
                    href={`/packs/${p.slug}`}
                    className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      p.highlighted
                        ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                        : "bg-slate-800 text-white hover:bg-slate-700"
                    }`}
                  >
                    Commander →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-4">
            Passez à ProMax TV Player dès aujourd&apos;hui
          </h2>
          <p className="text-gray-400 mb-8">Ne laissez pas l&apos;arrêt d&apos;Orca Pro Plus priver votre famille de divertissement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#prix"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105"
            >
              Voir Nos Packs →
            </Link>
            <a
              href="https://wa.me/212667451586"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-green-700 hover:bg-green-600 text-white font-semibold transition-all"
            >
              💬 Contacter sur WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
