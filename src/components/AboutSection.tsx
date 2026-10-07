"use client";

import Image from "next/image";
import { HeartHandshake, ShieldCheck, Leaf, Sun, MapPin } from "lucide-react";

interface AboutProps {
  lang: "en" | "np";
}

export default function AboutSection({ lang }: AboutProps) {
  const highlights = [
    {
      icon: Leaf,
      titleEn: "Sustainable & Natural Farming",
      titleNp: "दिगो तथा प्राकृतिक खेती",
      descEn: "We practice chemical-free livestock rearing with fresh green fodder and organic feed produced right here in Bhadrapur.",
      descNp: "हामी भद्रपुरमै उत्पादित ताजा हरियो घाँस र अर्गानिक दानाबाट रसायनरहित पशुपालन गर्छौं।",
    },
    {
      icon: HeartHandshake,
      titleEn: "Community & Family Values",
      titleNp: "सामुदायिक र पारिवारिक मूल्यहरू",
      descEn: "Built on traditional Nepali hospitality, hard work, and a commitment to serving our neighbors in Jhapa with pure farm produce.",
      descNp: "नेपाली आतिथ्यता, कडा परिश्रम र झापाका छिमेकीहरूलाई शुद्ध कृषि उत्पादन सेवा प्रदान गर्ने प्रतिबद्धतामा आधारित।",
    },
    {
      icon: ShieldCheck,
      titleEn: "Healthy & Well-Cared Livestock",
      titleNp: "निरोगी र व्यवस्थित पशुधन",
      descEn: "Our cows, goats, and chickens receive regular veterinary checks, spacious open housing, and clean drinking water.",
      descNp: "हाम्रा गाई, बाख्रा र कुखुराहरूले नियमित पशु चिकित्सक जाँच, खुला खोर र सफा पिउने पानी पाउँछन्।",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto">
              {/* Main Image Frame */}
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-50">
                <Image
                  src="/images/cows.jpg"
                  alt="Tara Krish Farm Cattle in Bhadrapur Jhapa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Small Card overlay */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 max-w-xs flex items-center space-x-3.5 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-2xl font-bold">
                  🌾
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === "en" ? "Bhadrapur-3, Jhapa" : "भद्रपुर-३, झापा"}
                  </h4>
                  <p className="text-xs text-emerald-700 font-medium">
                    {lang === "en"
                      ? "Pure local Nepali farm"
                      : "शुद्ध स्थानीय नेपाली फार्म"}
                  </p>
                </div>
              </div>

              {/* Top Left Badge */}
              <div className="absolute top-6 left-6 bg-emerald-900/90 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-emerald-700 flex items-center space-x-1.5 backdrop-blur-sm">
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span>{lang === "en" ? "Fresh & Organic" : "ताजा तथा अर्गानिक"}</span>
              </div>
            </div>
          </div>

          {/* Right Text Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Section Tag */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "en" ? "About Tara Krish Farm" : "हाम्रो परिचय"}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === "en" ? (
                <>
                  Rooted in <span className="text-emerald-700">Jhapa</span>, Committed to <span className="text-amber-700">Sustainable Farming</span>
                </>
              ) : (
                <>
                  <span className="text-emerald-700">झापाको माटोमा</span> आधारित, <span className="text-amber-700">दिगो कृषिमा</span> समर्पित
                </>
              )}
            </h2>

            {/* Narrative Paragraph */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                {lang === "en"
                  ? "Tara Krish Farm is a local family and community-based agricultural farm situated in the fertile region of Bhadrapur-3, Jhapa, Nepal. Founded with a deep passion for livestock farming and rural sustainability, our farm focuses on raising healthy cows, goats, and poultry in an ethical and natural environment."
                  : "तरा कृषि फार्म भद्रपुर-३, झापा, नेपालको उब्जाउ भूमिमा अवस्थित एक स्थानीय पारिवारिक तथा सामुदायिक कृषि फार्म हो। पशुपालन र ग्रामीण दिगोपनाको गहिरो लगावका साथ स्थापना गरिएको यस फार्मले नैतिक र प्राकृतिक वातावरणमा निरोगी गाई, बाख्रा र कुखुरा पालनमा ध्यान केन्द्रित गर्दछ।"}
              </p>
              <p>
                {lang === "en"
                  ? "We take immense pride in supporting local agriculture, providing fresh milk, healthy livestock breeds, and wholesome farm products to families and businesses across Jhapa. As we grow, our vision remains clear: to pioneer diversified, eco-friendly farming while preserving our traditional rural Nepali values."
                  : "हामी झापाभरिका परिवार र व्यवसायहरूलाई ताजा दूध, निरोगी पशु नस्ल र स्वस्थ फार्म उत्पादनहरू उपलब्ध गराएर स्थानीय कृषिलाई प्रवर्द्धन गर्नमा गर्व गर्छौं। हाम्रा पारम्परिक ग्रामीण नेपाली मूल्य मान्यताहरूलाई जगेर्ना गर्दै एकीकृत र वातावरणमैत्री खेतीलाई अगाडि बढाउने हाम्रो दृष्टि छ।"}
              </p>
            </div>

            {/* 3 Key Highlights Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 hover:bg-emerald-50 transition"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-2.5 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">
                      {lang === "en" ? item.titleEn : item.titleNp}
                    </h3>
                    <p className="text-xs text-slate-600 leading-snug">
                      {lang === "en" ? item.descEn : item.descNp}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location Tagline */}
            <div className="pt-2 flex items-center space-x-2 text-sm text-emerald-800 font-semibold bg-amber-50/80 p-3 rounded-xl border border-amber-200/70">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                {lang === "en"
                  ? "Location: Ward No. 3, Bhadrapur Municipality, Jhapa, Nepal"
                  : "ठेगाना: वडा नं. ३, भद्रपुर नगरपालिका, झापा, नेपाल"}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
