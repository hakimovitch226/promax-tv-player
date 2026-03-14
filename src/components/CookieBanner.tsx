"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie_consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-gray-300 text-sm flex-1">
          🍪 Nous utilisons des cookies pour améliorer votre expérience sur{" "}
          <strong className="text-white">promax-tv-player.com</strong>. Ces cookies sont utilisés à des fins analytiques et pour mémoriser vos préférences.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-xl text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold hover:from-red-500 hover:to-orange-400 transition-all"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
