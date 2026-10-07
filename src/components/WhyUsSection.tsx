"use client";

import { Home, ShieldCheck, Leaf, TrendingUp, Users, Compass, CheckCircle2 } from "lucide-react";

interface WhyUsProps {
  lang: "en" | "np";
}

export default function WhyUsSection({ lang }: WhyUsProps) {
  const highlights = [
    {
      icon: Home,
      titleEn: "Local Farm",
      titleNp: "स्थानीय फार्म",
      descEn: "Rooted in Bhadrapur-3, Jhapa, understanding the local soil, climate, and community needs.",
      descNp: "भद्रपुर-३, झापाको माटो, मौसम र स्थानीय समुदायको आवश्यकता बुझेको फार्म।",
    },
    {
      icon: ShieldCheck,
      titleEn: "Quality Livestock",
      titleNp: "गुणस्तरीय पशुधन",
      descEn: "Health-inspected dairy cows, Jamunapari & Boer goats, and disease-free local poultry.",
      descNp: "स्वास्थ्य जाँच गरिएका गाई, उन्नत जातका बाख्रा र निरोगी स्थानीय कुखुरा।",
    },
    {
      icon: Leaf,
      titleEn: "Natural Farming",
      titleNp: "प्राकृतिक खेती",
      descEn: "Clean green fodder, open grazing, zero harmful growth hormones, and natural feeds.",
      descNp: "हरियो नेपियर घाँस, खुला चरन र रसायनरहित प्राकृतिक आहार।",
    },
    {
      icon: TrendingUp,
      titleEn: "Sustainable Growth",
      titleNp: "दिगो विकास",
      descEn: "Recycling organic animal manure for agricultural soil enrichment and future biogas energy.",
      descNp: "माटोको उर्वरता र बायोग्याँसका लागि प्रांगारिक मलको पुनः प्रयोग।",
    },
    {
      icon: Users,
      titleEn: "Community Focus",
      titleNp: "सामुदायिक केन्द्रित",
      descEn: "Providing wholesome produce to local families and creating local farm jobs in Jhapa.",
      descNp: "झापाका स्थानीय परिवारलाई स्वस्थ उत्पादन र गाउँमै रोजगारीको सिर्जना।",
    },
    {
      icon: Compass,
      titleEn: "Future-Oriented Agriculture",
      titleNp: "भविष्य-उन्मुख कृषि",
      descEn: "Expanding into freshwater fish farming, crops, solar pumping, and integrated eco-farming.",
      descNp: "जलकृषि (माछा पालन), खाद्यान्न बाली र सौर्य सिँचाइतर्फ विस्तार।",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-emerald-950 text-white relative">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[450px] bg-emerald-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/90 border border-emerald-700/60 rounded-full px-4 py-1.5 text-xs font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{lang === "en" ? "Why Choose Us" : "हामीलाई किन रोज्ने?"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === "en" ? (
              <>
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Tara Krish Farm</span>
              </>
            ) : (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">तरा कृषि फार्म</span> नै किन?
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed">
            {lang === "en"
              ? "We bridge traditional Nepali rural hospitality with modern, clean, and sustainable farming standards."
              : "हामी परम्परागत नेपाली ग्रामीण आतिथ्यता र आधुनिक दिगो कृषि मापदण्डलाई एकैसाथ जोड्छौं।"}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-emerald-900/60 border border-emerald-700/50 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400/50 transition duration-300 flex flex-col justify-between backdrop-blur-md group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-400 text-emerald-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                    <IconComp className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition">
                    {lang === "en" ? item.titleEn : item.titleNp}
                  </h3>

                  <p className="text-sm text-emerald-200/90 leading-relaxed">
                    {lang === "en" ? item.descEn : item.descNp}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                  <span>{lang === "en" ? "Tara Krish Value" : "तरा कृषि मूल्य"}</span>
                  <span className="text-amber-300">✓ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
