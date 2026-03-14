"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Nos Packs", href: "/#prix" },
  { label: "Télécharger APK", href: "/orca-pro-plus-apk" },
  { label: "Orca Pro Plus", href: "/orca-pro-plus" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="ProMax TV Player" width={40} height={40} className="rounded-xl" />
            <span className="font-bold text-white text-lg hidden sm:block">
              ProMax <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">TV Player</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#prix"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-semibold hover:from-red-500 hover:to-orange-400 transition-all hover:scale-105 shadow-lg shadow-red-900/30"
            >
              Voir Nos Packs
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900 border border-slate-800 rounded-2xl mb-4 p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white py-2 px-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#prix"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-semibold"
            >
              Voir Nos Packs
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
