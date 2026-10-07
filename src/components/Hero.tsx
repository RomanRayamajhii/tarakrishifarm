"use client";

import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

interface HeroProps {
  lang: "en" | "np";
  onInquireClick?: (category?: string) => void;
}

export default function Hero({ lang }: HeroProps) {
  const whatsappNumber = "9779817941921";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Namaste Tara Krish Farm! I found your website and would like to learn more about your farm products."
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center bg-emerald-950 text-white overflow-hidden py-16 lg:py-24"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000">
        <Image
          src="/images/hero.jpg"
          alt="Tara Krish Farm Bhadrapur Jhapa"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Masks */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-emerald-900/60" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-950/60 to-emerald-950" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-800/60 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-300 backdrop-blur-md shadow-sm">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === "en"
                  ? "Bhadrapur-3, Jhapa, Nepal"
                  : "भद्रपुर-३, झापा, नेपाल"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                {lang === "en" ? (
                  <>
                    Tara Krish <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">Farm</span>
                  </>
                ) : (
                  <>
                    तरा कृषि <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">फार्म</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl font-semibold text-amber-300/90 italic tracking-wide">
                &ldquo;{lang === "en" ? "Growing Together, Naturally." : "एकसाथ, प्राकृतिक रूपमा अगाडि बढ्दै।"}&rdquo;
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
              {lang === "en"
                ? "A local farm in Bhadrapur-3, Jhapa, dedicated to livestock farming, quality agricultural products, and sustainable farming for the future."
                : "भद्रपुर-३, झापामा रहेको एक स्थानीय फार्म, जुन पशुपालन, गुणस्तरीय कृषि उत्पादन र भविष्यका लागि दिगो कृषिमा समर्पित छ।"}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Button */}
              <a
                href="#our-farm"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-emerald-500/25 transition duration-300 transform hover:-translate-y-0.5 border border-emerald-300/30"
              >
                <span>{lang === "en" ? "Explore Our Farm" : "हाम्रो फार्म हेर्नुहोस्"}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Secondary WhatsApp Contact Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-base px-6 py-3.5 rounded-2xl border border-emerald-600/50 backdrop-blur-md transition duration-300 hover:border-amber-400/50 shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300 fill-emerald-300" />
                <span>{lang === "en" ? "Contact Us" : "सम्पर्क गर्नुहोस्"}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-emerald-900/80 grid grid-cols-3 gap-3 text-xs sm:text-sm text-emerald-200 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === "en" ? "100% Organic Feed" : "१००% अर्गानिक दाना"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === "en" ? "Healthy Livestock" : "निरोगी पशुधन"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === "en" ? "Local Jhapa Care" : "स्थानीय रेखदेख"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-600 opacity-30 blur-xl animate-pulse-glow" />

              {/* Main Visual Card */}
              <div className="relative rounded-3xl bg-emerald-900/90 border border-emerald-700/60 p-5 shadow-2xl backdrop-blur-xl text-white space-y-4">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner group">
                  <Image
                    src="/images/hero.jpg"
                    alt="Tara Krish Farm Overview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-emerald-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-700/50">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">🌿</span>
                      <span className="text-xs font-semibold text-emerald-100">
                        {lang === "en" ? "Bhadrapur-3, Jhapa" : "भद्रपुर-३, झापा"}
                      </span>
                    </div>
                    <span className="text-[11px] bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-md border border-amber-400/30">
                      {lang === "en" ? "Local Family Farm" : "स्थानीय कृषि फार्म"}
                    </span>
                  </div>
                </div>

                {/* Quick Livestock Badges */}
                <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
                  <div className="bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-800/80 hover:border-emerald-500 transition">
                    <div className="text-2xl mb-0.5">🐄</div>
                    <div className="text-xs font-bold text-emerald-200">
                      {lang === "en" ? "Dairy Cows" : "गाई पालन"}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-medium">Fresh Milk</div>
                  </div>

                  <div className="bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-800/80 hover:border-emerald-500 transition">
                    <div className="text-2xl mb-0.5">🐐</div>
                    <div className="text-xs font-bold text-emerald-200">
                      {lang === "en" ? "Goat Breeding" : "बाख्रा पालन"}
                    </div>
                    <div className="text-[10px] text-amber-400 font-medium">Healthy Breeds</div>
                  </div>

                  <div className="bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-800/80 hover:border-emerald-500 transition">
                    <div className="text-2xl mb-0.5">🐔</div>
                    <div className="text-xs font-bold text-emerald-200">
                      {lang === "en" ? "Free-Range" : "कुखुरा पालन"}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-medium">Poultry & Eggs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
