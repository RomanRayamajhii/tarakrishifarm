"use client";

import Image from "next/image";
import { ArrowRight, Rocket, Waves, Sprout, Feather, LucideIcon } from "lucide-react";

interface FuturePlansProps {
  lang: "en" | "np";
}

interface TimelineStep {
  phase: string;
  phaseNp: string;
  titleEn: string;
  titleNp: string;
  image: string;
  icon: LucideIcon;
  descEn: string;
  descNp: string;
  badge: string;
  badgeNp: string;
}

export default function FuturePlansSection({ lang }: FuturePlansProps) {
  const whatsappNumber = "9779817941921";

  const timelineSteps: TimelineStep[] = [
    {
      phase: "Phase 1",
      phaseNp: "चरण १",
      titleEn: "Fish Farming (Aquaculture)",
      titleNp: "माछा पालन (जलकृषि)",
      image: "/images/fish-pond.jpg",
      icon: Waves,
      descEn: "Constructing modern freshwater ponds with clean water circulation and solar-powered aeration to raise healthy Tilapia & Carp species.",
      descNp: "स्वच्छ पानी र सौर्य ऊर्जाबाट सञ्चालित एरोटर प्रयोग गरी ग्रास कार्प, रहु र तिलापिया माछा पालनका लागि आधुनिक पोखरी निर्माण।",
      badge: "Upcoming Project",
      badgeNp: "आगामी योजना",
    },
    {
      phase: "Phase 2",
      phaseNp: "चरण २",
      titleEn: "Expanded Livestock Rearing",
      titleNp: "विस्तारित पशुपालन (गाई तथा बाख्रा)",
      image: "/images/goats.jpg",
      icon: Feather,
      descEn: "Scaling up goat breeding sheds and modernizing cow milking parlors to increase pure dairy production and breeding bucks.",
      descNp: "शुद्ध दुग्ध उत्पादन र उन्नत नस्ल बाख्रा संख्या बढाउन आधुनिक खोर र दुग्ध संकलन संरचना विस्तार।",
      badge: "Expansion Stage",
      badgeNp: "विस्तार चरण",
    },
    {
      phase: "Phase 3",
      phaseNp: "चरण ३",
      titleEn: "Agricultural Crop Farming",
      titleNp: "खाद्यान्न तथा तरकारी खेती",
      image: "/images/crops.jpg",
      icon: Sprout,
      descEn: "Utilizing fertile farmland in Bhadrapur-3 for organic paddy crops, seasonal green vegetables, mustard oilseeds, and fodder crops.",
      descNp: "भद्रपुर-३ को उब्जाउ भूमिमा अर्गानिक धान, मौसमी हरियो तरकारी, तोरी र उन्नत घाँस खेती।",
      badge: "In Planning",
      badgeNp: "योजना चरण",
    },
    {
      phase: "Phase 4",
      phaseNp: "चरण ४",
      titleEn: "Diversified Eco-Agriculture",
      titleNp: "एकीकृत पारिस्थितिक कृषि",
      image: "/images/chickens.jpg",
      icon: Sprout,
      descEn: "Integrating poultry manure composting, biogas energy generation, solar pumping, and sustainable rural farming experiences.",
      descNp: "मलबाट कम्पोष्ट र बायोग्याँस निर्माण, सौर्य सिँचाइ र दिगो ग्रामीण कृषि मोडेलको विकास।",
      badge: "Long-Term Vision",
      badgeNp: "दीर्घकालीन दृष्टि",
    },
  ];

  return (
    <section id="future-plans" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/80 border border-emerald-700/60 rounded-full px-4 py-1.5 text-xs font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md">
            <Rocket className="w-4 h-4 text-amber-400" />
            <span>{lang === "en" ? "Farm Roadmap" : "भावी कृषि विस्तार रोडम्याप"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === "en" ? (
              <>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400">Future Expansion</span> Plans
              </>
            ) : (
              <>
                हाम्रो <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400">भावी विस्तार</span> योजनाहरू
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed font-normal">
            {lang === "en"
              ? "Tara Krish Farm is continuously evolving. Explore our step-by-step expansion plan from fish farming to diversified organic agriculture."
              : "तरा कृषि फार्म निरन्तर अगाडि बढिरहेको छ। माछा पालनदेखि एकीकृत अर्गानिक कृषिसम्मको हाम्रो क्रमैसँग विस्तार हुने योजना हेर्नुहोस्।"}
          </p>
        </div>

        {/* Roadmap Steps Process Flow */}
        <div className="mb-12 hidden lg:flex items-center justify-between bg-emerald-900/40 p-4 rounded-2xl border border-emerald-800/80 text-xs font-bold text-amber-300">
          <div className="flex items-center space-x-2">
            <span className="w-7 h-7 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-extrabold">1</span>
            <span>{lang === "en" ? "Fish Farming 🐟" : "माछा पालन 🐟"}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-500" />
          <div className="flex items-center space-x-2">
            <span className="w-7 h-7 rounded-full bg-emerald-700 text-amber-300 flex items-center justify-center font-extrabold">2</span>
            <span>{lang === "en" ? "Expanded Livestock 🐐🐄" : "विस्तारित पशुपालन 🐐🐄"}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-500" />
          <div className="flex items-center space-x-2">
            <span className="w-7 h-7 rounded-full bg-emerald-700 text-amber-300 flex items-center justify-center font-extrabold">3</span>
            <span>{lang === "en" ? "Crop Farming 🌾" : "खाद्यान्न खेती 🌾"}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-500" />
          <div className="flex items-center space-x-2">
            <span className="w-7 h-7 rounded-full bg-emerald-700 text-amber-300 flex items-center justify-center font-extrabold">4</span>
            <span>{lang === "en" ? "Diversified Agriculture 🐓" : "एकीकृत कृषि 🐓"}</span>
          </div>
        </div>

        {/* Expansion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {timelineSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-emerald-900/50 border border-emerald-700/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.titleEn}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />

                    {/* Phase Badge */}
                    <div className="absolute top-3 left-3 bg-amber-400 text-emerald-950 font-extrabold text-xs px-3 py-1 rounded-full shadow">
                      {lang === "en" ? step.phase : step.phaseNp}
                    </div>

                    <div className="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-emerald-700">
                      {lang === "en" ? step.badge : step.badgeNp}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
                        {lang === "en" ? step.titleEn : step.titleNp}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                      {lang === "en" ? step.descEn : step.descNp}
                    </p>
                  </div>
                </div>

                {/* Footer status link */}
                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello! I want to ask about your ${step.titleEn} future expansion plan in Bhadrapur, Jhapa.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-emerald-950/80 hover:bg-emerald-800 py-2.5 px-3 rounded-xl border border-emerald-700/60 transition"
                  >
                    <span>{lang === "en" ? "Partner / Inquire" : "साझेदारी / सोधपुछ"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
