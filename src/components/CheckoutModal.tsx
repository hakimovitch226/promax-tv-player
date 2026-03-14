"use client";
import { useEffect, useRef, useState } from "react";
import type { Pack } from "@/lib/packs";

interface Props {
  pack: Pack;
  onClose: () => void;
}

const countries = [
  "France", "Belgique", "Suisse", "Canada", "Maroc", "Algérie", "Tunisie",
  "Sénégal", "Côte d'Ivoire", "Espagne", "Italie", "Allemagne", "Autre",
];

export default function CheckoutModal({ pack, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", country: "France" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Le nom est requis";
    if (!form.email.includes("@")) e.email = "Email invalide";
    if (form.whatsapp.length < 8) e.whatsapp = "Numéro WhatsApp invalide";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, packName: pack.name, packPrice: pack.price, packCodes: pack.codes }),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
    >
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-white font-bold text-xl">Commander {pack.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl leading-none">×</button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-white font-bold text-xl mb-3">Commande reçue !</h3>
            <p className="text-gray-300 mb-3">
              Merci pour votre commande. Vous recevrez une confirmation par email sous peu.
            </p>
            <p className="text-yellow-400 text-sm bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-3">
              ⚠️ Pensez à vérifier votre dossier spam/indésirables si vous ne recevez pas notre email dans les 5 minutes.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 p-6 space-y-4">
              {[
                { key: "name", label: "Nom Complet *", type: "text", placeholder: "Votre nom complet" },
                { key: "email", label: "Email *", type: "email", placeholder: "votre@email.com" },
                { key: "whatsapp", label: "WhatsApp *", type: "tel", placeholder: "+33 6 12 34 56 78" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm text-gray-300 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                  {errors[field.key] && <p className="text-red-400 text-xs mt-1">{errors[field.key]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Pays</label>
                <select
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 text-sm"
                >
                  {countries.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:from-red-500 hover:to-orange-400 transition-all disabled:opacity-60"
              >
                {loading ? "Envoi en cours..." : "Commander maintenant"}
              </button>
            </form>

            {/* Summary */}
            <div className="md:col-span-2 p-6">
              <h3 className="text-white font-bold mb-4">Récapitulatif</h3>
              <div className="bg-slate-800 rounded-xl p-4 space-y-3">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Produit</p>
                  <p className="text-white font-semibold">{pack.name}</p>
                  <p className="text-gray-400 text-sm">{pack.subtitle}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Codes IPTV</p>
                  <p className="text-white font-semibold">{pack.codes} code{pack.codes > 1 ? "s" : ""}</p>
                </div>
                <div className="border-t border-slate-700 pt-3">
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Total</p>
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    {pack.price}€
                  </p>
                  <p className="text-gray-500 text-xs">Abonnement 12 mois</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-500">✓ Livraison instantanée par email</p>
                <p className="text-xs text-gray-500">✓ Support WhatsApp inclus</p>
                <p className="text-xs text-gray-500">✓ Compatible tous appareils</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
