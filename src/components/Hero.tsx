"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    badge: "🔴 IPTV Premium #1 en France",
    title: "ProMax TV Player",
    highlight: "IPTV 4K Sans Coupure",
    desc: "+8 000 chaînes TV en direct — TF1, M6, Canal+, beIN Sports, chaînes arabes & africaines.",
    cta: { label: "Voir Nos Offres", href: "/#prix" },
  },
  {
    badge: "🎬 +80 000 VOD Films & Séries",
    title: "Films & Séries",
    highlight: "Illimités en VF & VOSTFR",
    desc: "Blockbusters, séries, documentaires à la demande. Catalogue mis à jour en permanence.",
    cta: { label: "Découvrir les packs", href: "/#prix" },
  },
  {
    badge: "⚡ Anti-Freeze Avancé",
    title: "Streaming Stable",
    highlight: "99.9% Uptime Garanti",
    desc: "Technologie anti-freeze avancée. Regardez vos événements sportifs sans aucune interruption.",
    cta: { label: "Commencer maintenant", href: "/#prix" },
  },
  {
    badge: "📱 Multi-Appareils",
    title: "Compatible",
    highlight: "Android, Firestick & Plus",
    desc: "Android Box, Firestick, MAG Box, Android TV, smartphones. IPTV Smathers pour Samsung/LG & iOS.",
    cta: { label: "Voir l'installation", href: "/#telecharger" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 300);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — fixed, always visible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.18)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-950" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-16">
        {/* Badge */}
        <div
          key={`badge-${current}`}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/40 text-red-400 text-sm font-medium mb-8 transition-all duration-400 ${
            animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          {slide.badge}
        </div>

        {/* H1 */}
        <div
          key={`title-${current}`}
          className={`transition-all duration-400 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400">
              {slide.title}
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
            {slide.highlight}
          </p>
        </div>

        {/* Desc */}
        <p
          key={`desc-${current}`}
          className={`text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-500 ${
            animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          {slide.desc}
        </p>

        {/* CTAs */}
        <div
          key={`cta-${current}`}
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-500 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          <Link
            href={slide.cta.href}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105 shadow-2xl shadow-red-900/40"
          >
            {slide.cta.label}
          </Link>
          <Link
            href="/#fonctionnalites"
            className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm"
          >
            Découvrir les Avantages
          </Link>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-14">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-gradient-to-r from-red-500 to-orange-400"
                  : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
