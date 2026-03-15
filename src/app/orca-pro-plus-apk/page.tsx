import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { packs } from "@/lib/packs";

export const metadata: Metadata = {
  title: "Télécharger ProMax TV Player APK — Alternative Orca Pro Plus APK",
  description:
    "Cherchez-vous l'APK Orca Pro Plus ? Téléchargez ProMax TV Player, la meilleure alternative IPTV. Code Downloader 286509. Compatible Android Box, Firestick, Android TV.",
  alternates: { canonical: "https://promax-tv-player.com/orca-pro-plus-apk" },
};

const faqItems = [
  {
    q: "Comment télécharger ProMax TV Player APK (alternative Orca Pro Plus) ?",
    a: "Utilisez l'application Downloader. Installez Downloader depuis votre store, entrez le code 286509 et appuyez sur Go. L'APK ProMax TV Player se télécharge et s'installe automatiquement.",
  },
  {
    q: "ProMax TV Player fonctionne-t-il sur Samsung ou LG Smart TV ?",
    a: "Les Samsung et LG Smart TV ne sont pas des appareils Android, donc l'APK ProMax TV Player ne peut pas s'y installer directement. Pour ces TV, utilisez IPTV Smarters Player disponible depuis leur store officiel, et entrez votre code IPTV.",
  },
  {
    q: "Sur quels appareils l'APK fonctionne-t-il ?",
    a: "L'APK ProMax TV Player fonctionne sur tous les appareils Android : Android Box, Amazon Firestick, Android TV, MAG Box, et smartphones Android 5.0+.",
  },
  {
    q: "Comment utiliser mon code IPTV sur iOS ou Mac ?",
    a: "Pour iOS et Mac, téléchargez IPTV Smarters Player Lite depuis l'App Store, puis entrez votre code IPTV ProMax TV Player. Toutes les chaînes et VOD seront disponibles.",
  },
  {
    q: "L'APK ProMax TV Player est-il une alternative à Orca Pro Plus APK ?",
    a: "Oui ! ProMax TV Player est la meilleure alternative à Orca Pro Plus. Même format de code IPTV, bien meilleure infrastructure avec 99.9% d'uptime et +8 000 chaînes en 4K.",
  },
];

const featuredPacks = packs.filter((p) => !p.contactOnly && ["individuel", "duo", "famille"].includes(p.id));

const installGuide = [
  {
    device: "Android Box / Firestick / Android TV",
    icon: "📦",
    steps: [
      "Installez Downloader depuis votre store",
      "Entrez le code 286509 et appuyez sur Go",
      "Installez ProMax TV Player",
      "Entrez votre code IPTV et profitez",
    ],
    app: "ProMax TV Player APK",
    appColor: "text-orange-400",
  },
  {
    device: "Samsung / LG Smart TV",
    icon: "🖥️",
    steps: [
      "Ouvrez le store de votre Smart TV",
      "Recherchez IPTV Smarters Player",
      "Installez l'application",
      "Entrez votre code IPTV ProMax",
    ],
    app: "IPTV Smarters Player",
    appColor: "text-blue-400",
  },
  {
    device: "iOS & Mac",
    icon: "🍎",
    steps: [
      "Ouvrez l'App Store",
      "Recherchez Smarters Player Lite",
      "Installez l'application",
      "Entrez votre code IPTV ProMax",
    ],
    app: "IPTV Smarters Player Lite",
    appColor: "text-blue-400",
  },
];

export default function OrcaProPlusAPKPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-gray-300">Télécharger APK — Alternative Orca Pro Plus</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-900/30 border border-orange-500/40 text-orange-400 text-xs font-medium mb-5">
                📥 APK Gratuit — Alternative Orca Pro Plus
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Télécharger{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  ProMax TV Player APK
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                L&apos;alternative #1 à Orca Pro Plus APK. Installez ProMax TV Player sur votre Android Box, Firestick ou Android TV en moins de 2 minutes.
              </p>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
                <p className="text-gray-400 text-xs mb-1">Code Downloader</p>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 tracking-widest">
                  286509
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#installation"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105"
                >
                  📥 Guide d&apos;installation
                </a>
                <Link
                  href="/#prix"
                  className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-all"
                >
                  Voir les abonnements
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-4 text-center">
                <Image src="/orca pro plus.webp" alt="Orca Pro Plus APK" width={160} height={120} className="rounded-xl mx-auto mb-3 grayscale opacity-50" />
                <div className="text-red-400 font-bold text-sm">⛔ Orca Pro Plus APK</div>
                <div className="text-gray-500 text-xs">Arrêté</div>
              </div>
              <div className="bg-slate-900 border border-green-500/30 rounded-2xl overflow-hidden">
                <Image src="/hero-bg.webp" alt="ProMax TV Player APK" width={300} height={160} className="w-full object-cover" />
                <div className="p-3 text-center">
                  <div className="text-green-400 font-bold text-sm">✅ ProMax TV Player</div>
                  <div className="text-gray-400 text-xs">Actif · 99.9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation guide */}
        <div id="installation" className="bg-slate-900/50 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-4">
              Installation selon votre appareil
            </h2>
            <p className="text-gray-400 text-center mb-10">
              ProMax TV Player APK fonctionne sur Android. Pour Samsung/LG et iOS, utilisez IPTV Smarters Player.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {installGuide.map((guide) => (
                <div key={guide.device} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{guide.icon}</div>
                  <h3 className="text-white font-bold mb-1">{guide.device}</h3>
                  <p className={`text-xs font-semibold mb-4 ${guide.appColor}`}>Via : {guide.app}</p>
                  <ol className="space-y-2">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-xs text-gray-500 flex-shrink-0 mt-0.5">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
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
              <p className="text-gray-400 text-sm">Code Downloader pour Android Box / Firestick</p>
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 tracking-widest">
                286509
              </div>
            </div>
            <Link
              href="/#prix"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all"
            >
              Obtenir un abonnement
            </Link>
          </div>
        </div>

        {/* Featured packs */}
        <div className="bg-slate-900/50 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-10">
              Choisissez votre abonnement IPTV
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredPacks.map((p) => (
                <div key={p.id} className={`bg-slate-900 border rounded-2xl p-6 ${p.highlighted ? "border-red-500/50" : "border-slate-800"}`}>
                  {p.highlighted && <div className="text-xs font-bold text-orange-400 mb-2">⭐ Le Plus Populaire</div>}
                  <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.subtitle}</p>
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">{p.price}€</div>
                  <Link
                    href={`/packs/${p.slug}`}
                    className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      p.highlighted ? "bg-gradient-to-r from-red-600 to-orange-500 text-white" : "bg-slate-800 text-white hover:bg-slate-700"
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
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl text-center mb-10">FAQ — APK & Installation</h2>
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
            Prêt à remplacer Orca Pro Plus ?
          </h2>
          <p className="text-gray-400 mb-8">ProMax TV Player — IPTV 4K, +8 000 chaînes, livraison instantanée.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#prix" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105">
              Voir Nos Packs →
            </Link>
            <a href="https://wa.me/212667451586" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-green-700 hover:bg-green-600 text-white font-semibold transition-all">
              💬 Aide sur WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
