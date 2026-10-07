"use client";

import { MapPin, MessageCircle, ArrowUp, Heart } from "lucide-react";

interface FooterProps {
  lang: "en" | "np";
}

export default function Footer({ lang }: FooterProps) {
  const whatsappNumber = "9779817941921";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Tara Krish Farm!"
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center text-amber-400 font-bold text-lg">
                  🌾
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white">Tara Krish Farm</h3>
                <p className="text-xs text-amber-400 font-medium">तरा कृषि फार्म • भद्रपुर, झापा</p>
              </div>
            </div>

            <p className="text-sm text-emerald-200/90 max-w-sm leading-relaxed">
              {lang === "en"
                ? "A local agricultural & livestock farm in Bhadrapur-3, Jhapa, Nepal. Dedicated to pure cows dairy, healthy goat rearing, free-range poultry, and sustainable future fish farming."
                : "भद्रपुर-३, झापा, नेपालको एक स्थानीय कृषि तथा पशुपालन फार्म। शुद्ध गाईको दूध, निरोगी बाख्रा पालन, खुला कुखुरा र दिगो माछा पालनमा समर्पित।"}
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Bhadrapur Municipality Ward No. 3, Jhapa, Nepal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === "en" ? "Quick Navigation" : "मुख्य लिङ्कहरू"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80">
              <li>
                <a href="#about" className="hover:text-amber-300 transition">
                  {lang === "en" ? "About Our Farm" : "हाम्रो फार्मको बारेमा"}
                </a>
              </li>
              <li>
                <a href="#our-farm" className="hover:text-amber-300 transition">
                  {lang === "en" ? "Livestock (Cows, Goats, Chickens)" : "पशुपालन (गाई, बाख्रा, कुखुरा)"}
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-amber-300 transition">
                  {lang === "en" ? "Farm Vision" : "हाम्रो दृष्टि"}
                </a>
              </li>
              <li>
                <a href="#future-plans" className="hover:text-amber-300 transition">
                  {lang === "en" ? "Future Plans (Fish Farming & Crops)" : "भावी योजना (माछा पालन)"}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition">
                  {lang === "en" ? "Farm Gallery" : "फोटो ग्यालेरी"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Link */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === "en" ? "Direct WhatsApp Contact" : "सम्पर्क नं."}
            </h4>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-900/90 hover:bg-emerald-800 text-amber-300 px-4 py-3 rounded-2xl border border-emerald-700 font-bold text-sm transition"
            >
              <MessageCircle className="w-5 h-5 fill-amber-400 text-emerald-950" />
              <span>WhatsApp: +977-9817941921</span>
            </a>

            <p className="text-xs text-emerald-300/80">
              {lang === "en"
                ? "Connect with us anytime for farm visits, dairy supply, or breeding livestock inquiries."
                : "फार्म भ्रमण, दुग्ध आपूर्ति वा पशुधन सोधपुछका लागि जुनसुकै बेला सम्पर्क गर्नुहोस्।"}
            </p>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <div className="flex items-center space-x-1">
            <span>© 2026 Tara Krish Farm. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>in Jhapa, Nepal</span>
            </span>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-emerald-900 hover:bg-emerald-800 text-amber-300 flex items-center justify-center transition border border-emerald-700 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
