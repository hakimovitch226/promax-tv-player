import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Télécharger l'app Downloader",
    desc: 'Installez l\'application "Downloader" depuis le store de votre appareil (Firestick, Android Box, Android TV).',
  },
  {
    num: "02",
    title: "Entrer le code 286509",
    desc: "Lancez Downloader, entrez le code 286509 dans le champ URL et appuyez sur Go.",
  },
  {
    num: "03",
    title: "Démarrer le streaming",
    desc: "ProMax TV Player s'installe automatiquement. Entrez votre code IPTV et profitez !",
  },
];

const devices = [
  { icon: "📦", label: "Android Box", compat: "ProMax TV Player APK" },
  { icon: "🔥", label: "Firestick", compat: "ProMax TV Player APK" },
  { icon: "📺", label: "Android TV", compat: "ProMax TV Player APK" },
  { icon: "📱", label: "Android Phone", compat: "ProMax TV Player APK" },
  { icon: "🎮", label: "MAG Box", compat: "ProMax TV Player APK" },
  { icon: "🖥️", label: "Samsung / LG TV", compat: "IPTV Smarters Player" },
  { icon: "🍎", label: "iOS & Mac", compat: "IPTV Smarters Player Lite" },
];

export default function Download() {
  return (
    <section id="telecharger" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">Installation facile</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
            Prêt en 3 étapes
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Installez ProMax TV Player en moins de 2 minutes sur Android Box, Firestick ou Android TV.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={step.num} className="flex-1">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 h-0.5 bg-gradient-to-r from-red-500/40 to-transparent" style={{ left: `calc(${(i + 1) * 33.3}% - 12px)`, width: "calc(33.3% - 24px)" }} />
              )}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-3">
                  {step.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner code */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <p className="text-gray-400 text-sm mb-2">Code Downloader</p>
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 tracking-widest">
                286509
              </div>
              <p className="text-gray-500 text-xs mt-2">Entrez ce code dans Downloader</p>
            </div>
            <div className="p-6 flex items-center justify-center">
              <Image src="/Downloader.webp" alt="Application Downloader" width={200} height={140} className="rounded-xl object-contain" />
            </div>
            <div className="p-8 flex flex-col items-center justify-center gap-4">
              <p className="text-white font-semibold text-center">Obtenez votre abonnement IPTV dès maintenant</p>
              <Link href="/#prix" className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105 shadow-lg shadow-red-900/30">
                Obtenir mon abonnement
              </Link>
            </div>
          </div>
        </div>

        {/* Devices compatibility */}
        <div>
          <h3 className="text-white font-bold text-xl text-center mb-6">Appareils compatibles</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {devices.map((d) => (
              <div key={d.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{d.icon}</div>
                <p className="text-white text-xs font-semibold mb-1">{d.label}</p>
                <p className="text-gray-500 text-[10px] leading-tight">{d.compat}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            💡 Samsung/LG Smart TV (non-Android) et iOS/Mac → utilisez <strong className="text-gray-400">IPTV Smarters Player</strong> ou <strong className="text-gray-400">Smarters Player Lite</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
