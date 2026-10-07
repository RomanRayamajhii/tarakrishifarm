"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface FloatingWhatsAppProps {
  lang: "en" | "np";
}

export default function FloatingWhatsApp({ lang }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rawNumber = "9779817941921";
  const whatsappUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(
    "Namaste Tara Krish Farm! I would like to inquire about your farm in Bhadrapur-3, Jhapa."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-emerald-950 border border-emerald-700 text-white rounded-2xl p-4 shadow-2xl space-y-3 animate-fade-in backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-emerald-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
              <span className="font-bold text-xs text-amber-300">Tara Krish Farm WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-300 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-emerald-100 leading-relaxed">
            {lang === "en"
              ? "Namaste! Chat directly with our farm team in Bhadrapur-3, Jhapa regarding dairy cows, goats, chickens, or visiting!"
              : "नमस्ते! गाई, बाख्रा, कुखुरा वा फार्म भ्रमण सम्बन्धी जानकारीका लागि व्हाट्सएपमा सिधै कुरा गर्नुहोस्!"}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{lang === "en" ? "Start Chat (+977-9817941921)" : "व्हाट्सएपमा कुरा सुरु गर्नुहोस्"}</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition duration-300 border-2 border-emerald-400/40 flex items-center justify-center cursor-pointer animate-pulse-glow"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-950" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-emerald-950 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-emerald-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
          +977-9817941921
        </span>
      </button>
    </div>
  );
}
