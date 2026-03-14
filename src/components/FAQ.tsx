"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Qu'est-ce que ProMax TV Player ?",
    a: "ProMax TV Player est un service IPTV premium qui vous donne accès à plus de 8 000 chaînes TV en direct et +80 000 contenus VOD (films, séries, documentaires) en qualité 4K Ultra HD, sur tous vos appareils compatibles Android.",
  },
  {
    q: "Sur quels appareils fonctionne ProMax TV Player ?",
    a: "L'application ProMax TV Player (APK) fonctionne sur les appareils Android : Android Box, Amazon Firestick, Android TV, MAG Box, et smartphones Android. Pour Samsung/LG Smart TV (non-Android) et iOS/Mac, nous recommandons IPTV Smarters Player ou Smarters Player Lite avec votre code IPTV.",
  },
  {
    q: "Comment recevoir mon code IPTV après commande ?",
    a: "Après validation de votre paiement, votre code IPTV est envoyé instantanément par email et WhatsApp. Vous pouvez commencer à streamer en quelques minutes seulement.",
  },
  {
    q: "Le streaming est-il stable et sans coupure ?",
    a: "Oui ! Nos serveurs garantissent un uptime de 99.9%. La technologie anti-freeze intégrée élimine les interruptions, même lors des grands événements sportifs. Votre connexion internet doit être d'au moins 10 Mbps pour la 4K.",
  },
  {
    q: "Puis-je tester avant d'acheter ?",
    a: "Contactez-nous sur WhatsApp pour discuter d'un accès de démonstration. Notre équipe est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions avant votre abonnement.",
  },
  {
    q: "Comment installer ProMax TV Player sur Android Box ou Firestick ?",
    a: "Téléchargez l'application Downloader sur votre appareil, entrez le code 286509 dans le champ URL, puis appuyez sur Go. L'application s'installe automatiquement. Pour Samsung/LG TV, installez IPTV Smarters Player depuis leur store et entrez votre code IPTV.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">Questions fréquentes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">FAQ</h2>
          <p className="text-gray-400">Tout ce que vous devez savoir sur ProMax TV Player.</p>
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-slate-900 border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-red-500/40" : "border-slate-800"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-white font-semibold pr-4">{faq.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                <div className={`faq-answer px-5 ${isOpen ? "open" : ""}`}>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">Vous avez d&apos;autres questions ?</p>
          <a
            href="https://wa.me/212667451586"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all hover:scale-105 shadow-lg"
          >
            💬 Posez votre question sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
