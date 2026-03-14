const features = [
  {
    icon: "📡",
    title: "+8 000 Chaînes TV en Direct",
    desc: "TF1, M6, Canal+, beIN Sports, chaînes arabes, africaines, sportives et internationales. Tout ce que vous aimez, en direct.",
  },
  {
    icon: "🎬",
    title: "+80 000 VOD Films & Séries",
    desc: "Blockbusters, séries populaires, documentaires en VF et VOSTFR. Un catalogue immense mis à jour régulièrement.",
  },
  {
    icon: "🔥",
    title: "Streaming 4K Ultra HD",
    desc: "La résolution s'adapte automatiquement à votre débit internet. Pas de buffering, une image toujours nette.",
  },
  {
    icon: "🛡️",
    title: "Anti-Freeze & Sans Coupure",
    desc: "Serveurs haute disponibilité avec 99.9% uptime. Profitez des événements sportifs sans interruption.",
  },
  {
    icon: "📺",
    title: "Compatible Multi-Appareils",
    desc: "Android Box, Firestick, Android TV, MAG Box, smartphones Android. Samsung/LG & iOS via IPTV Smarters Player.",
  },
  {
    icon: "💬",
    title: "Support WhatsApp 24h/24 7j/7",
    desc: "Configuration, dépannage, renouvellement — notre équipe répond en quelques minutes sur WhatsApp.",
  },
];

const trustPoints = [
  "✅ Livraison instantanée",
  "✅ Code IPTV activé immédiatement",
  "✅ Serveurs 99.9% uptime",
  "✅ Support WhatsApp réactif",
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">Pourquoi nous choisir</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
            La meilleure expérience IPTV
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ProMax TV Player vous offre une qualité premium sans compromis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-900/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-2xl mb-4 group-hover:shadow-lg group-hover:shadow-red-900/40 transition-shadow">
                {feat.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
