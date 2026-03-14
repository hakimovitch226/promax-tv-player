import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="ProMax TV Player" width={36} height={36} className="rounded-xl" />
              <span className="font-bold text-white">
                ProMax <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">TV Player</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Le service IPTV premium #1. +8 000 chaînes, +80 000 VOD, qualité 4K. Compatible Android Box, Firestick, Android TV et plus.
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/212667451586"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
              >
                💬 WhatsApp: +212 667-451586
              </a>
              <a
                href="mailto:Officielorcaproplus@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 text-sm transition-colors"
              >
                ✉️ Officielorcaproplus@gmail.com
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "Fonctionnalités", href: "/#fonctionnalites" },
                { label: "Nos Packs", href: "/#prix" },
                { label: "Télécharger APK", href: "/orca-pro-plus-apk" },
                { label: "Orca Pro Plus", href: "/orca-pro-plus" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {[
                "IPTV 4K Ultra HD",
                "Chaînes françaises",
                "Chaînes arabes & africaines",
                "Films & Séries VOD",
                "Sport en direct",
                "Support technique 24/7",
              ].map((s) => (
                <li key={s} className="text-gray-400 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Appareils */}
          <div>
            <h4 className="text-white font-bold mb-4">Appareils Compatibles</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Android Box & MAG Box <span className="text-xs text-gray-600">(APK)</span></li>
              <li className="text-gray-400 text-sm">Amazon Firestick <span className="text-xs text-gray-600">(APK)</span></li>
              <li className="text-gray-400 text-sm">Android TV <span className="text-xs text-gray-600">(APK)</span></li>
              <li className="text-gray-400 text-sm">Samsung / LG Smart TV <span className="text-xs text-gray-600">(Smarters Player)</span></li>
              <li className="text-gray-400 text-sm">iOS & Mac <span className="text-xs text-gray-600">(Smarters Player Lite)</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 space-y-3">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} ProMax TV Player · promax-tv-player.com · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
