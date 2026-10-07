"use client";

import { Quote, Compass, Target, Award, Users, Sprout } from "lucide-react";

interface VisionProps {
  lang: "en" | "np";
}

export default function VisionSection({ lang }: VisionProps) {
  const pillars = [
    {
      icon: Sprout,
      titleEn: "Sustainable Agriculture",
      titleNp: "दिगो कृषि प्रणाली",
      descEn: "Promoting natural eco-friendly cycles, biosecurity, and organic manure recycling for soil health.",
      descNp: "प्राकृतिक वातावरणमैत्री चक्र, जैविक सुरक्षा र माटोको उर्वरता बढाउन गोबर/मलको सही प्रयोग।",
    },
    {
      icon: Award,
      titleEn: "Quality Farm Products",
      titleNp: "उच्च गुणस्तरीय कृषि उत्पादन",
      descEn: "Delivering pure dairy milk, healthy livestock, and wholesome organic produce to local households.",
      descNp: "स्थानीय परिवारहरूलाई शुद्ध दूध, निरोगी पशुधन र स्वस्थ अर्गानिक उत्पादनहरू उपलब्ध गराउने।",
    },
    {
      icon: Users,
      titleEn: "Community Opportunity",
      titleNp: "समुदायका लागि अवसर",
      descEn: "Generating employment, training local youth, and partnering with neighboring farmers in Jhapa.",
      descNp: "रोजगारी सिर्जना, स्थानीय युवाहरूलाई तालिम र झापाका छिमेकी कृषकहरूसँग सहकार्य।",
    },
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-amber-50/50 via-emerald-50/40 to-white relative overflow-hidden">
      {/* Decorative Leaf Background shapes */}
      <div className="absolute top-10 left-10 text-emerald-900/5 text-9xl font-bold select-none pointer-events-none">
        🌿
      </div>
      <div className="absolute bottom-10 right-10 text-amber-900/5 text-9xl font-bold select-none pointer-events-none">
        🌾
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Vision Banner Card */}
        <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden border border-emerald-700/50">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">
              <Target className="w-4 h-4 text-amber-300" />
              <span>{lang === "en" ? "Our Core Vision" : "हाम्रो प्रमुख दृष्टि"}</span>
            </div>

            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
            </div>

            {/* Main Vision Quote Statement */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-100 leading-tight tracking-tight italic">
              &ldquo;
              {lang === "en"
                ? "To build a sustainable and diversified farm that supports local agriculture, provides quality farm products, and creates opportunities for future generations."
                : "स्थानीय कृषिलाई प्रवर्द्धन गर्ने, गुणस्तरीय फार्म उत्पादनहरू प्रदान गर्ने र भावी पुस्ताका लागि अवसरहरू सिर्जना गर्ने दिगो र बहुआयामिक फार्म निर्माण गर्ने।"
              }
              &rdquo;
            </blockquote>

            {/* Author / Subtitle Tag */}
            <div className="pt-4 flex items-center justify-center space-x-2 text-emerald-300 font-semibold text-sm sm:text-base">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>
                {lang === "en"
                  ? "Tara Krish Farm • Bhadrapur-3, Jhapa, Nepal"
                  : "तरा कृषि फार्म • भद्रपुर-३, झापा, नेपाल"}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-md hover:shadow-xl hover:border-emerald-300 transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-500 text-white flex items-center justify-center shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === "en" ? pillar.titleEn : pillar.titleNp}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {lang === "en" ? pillar.descEn : pillar.descNp}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-50 text-xs font-semibold text-emerald-700 flex items-center space-x-1">
                  <span>Pillar 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
