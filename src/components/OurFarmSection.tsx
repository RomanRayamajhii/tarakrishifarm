"use client";

import Image from "next/image";
import { MessageCircle, CheckCircle, Sparkles } from "lucide-react";

interface OurFarmProps {
  lang: "en" | "np";
}

export default function OurFarmSection({ lang }: OurFarmProps) {
  const whatsappNumber = "9779817941921";

  const farmCards = [
    {
      id: "cow",
      emoji: "🐄",
      titleEn: "Cow Farming & Dairy",
      titleNp: "गाई पालन तथा दुग्ध उत्पादन",
      image: "/images/cows.jpg",
      badgeEn: "Fresh Dairy",
      badgeNp: "ताजा दुग्ध",
      descEn: "We rear healthy Jersey and Holstein cattle raised in clean, spacious barns with green Napier grass feed. Providing fresh, pure milk daily to our community.",
      descNp: "हामी सफा खोरमा हरियो नेपियर घाँस खुवाएर निरोगी जर्सी र होलिस्टिन गाई पालन गर्छौं। दैनिक रूपमा हाम्रो समुदायलाई ताजा र शुद्ध दूध उपलब्ध गराउँछौं।",
      featuresEn: [
        "Pure Jersey & Holstein Breeds",
        "High Quality Dairy Milk",
        "Hygienic Milking & Health Care",
        "Natural Feed & Green Napier Fodder"
      ],
      featuresNp: [
        "उन्नत जर्सी र होलिस्टिन प्रजाति",
        "उच्च गुणस्तरीय ताजा दूध",
        "सफा र स्वास्थ्य-अनुकूल दुग्ध दोहन",
        "प्राकृतिक दाना र हरियो नेपियर घाँस"
      ],
    },
    {
      id: "goat",
      emoji: "🐐",
      titleEn: "Goat Farming",
      titleNp: "बाख्रा पालन (बाख्रा फार्म)",
      image: "/images/goats.jpg",
      badgeEn: "Healthy Breeds",
      badgeNp: "उन्नत नस्ल",
      descEn: "Dedicated to breeding Jamunapari and Boer goats in a combination of open pasture grazing and modern stall feeding for high health and meat/breeding quality.",
      descNp: "उच्च स्वास्थ्य, मासु र प्रजनन् गुणस्तरका लागि खुला चरन र आधुनिक खोरमा जमुनापारी र बोयर बाख्रा पालन गर्दछौं।",
      featuresEn: [
        "Jamunapari & Boer Cross Breeds",
        "Open Grazing & Stall Feeding",
        "Regular Veterinary Deworming",
        "Quality Breeding Bucks Available"
      ],
      featuresNp: [
        "जमुनापारी र बोयर क्रस प्रजाति",
        "खुला चरन र व्यवस्थित खोर",
        "नियमित पशु स्वास्थ्य जाँच र खोप",
        "उन्नत बिउ बोका उपलब्ध"
      ],
    },
    {
      id: "chicken",
      emoji: "🐔",
      titleEn: "Chicken & Poultry",
      titleNp: "कुखुरा तथा पोल्ट्री फार्म",
      image: "/images/chickens.jpg",
      badgeEn: "Free-Range",
      badgeNp: "खुला चरन कुखुरा",
      descEn: "Free-range local and backyard chickens thriving outdoors on fresh grass and natural grains, producing nutritious fresh eggs and premium local meat.",
      descNp: "ताजा घाँस र प्राकृतिक दानामा हुर्काइएका स्थानीय कुखुराहरू, जसले पौष्टिक ताजा अण्डा र स्वादिष्ट स्थानीय मासु प्रदान गर्दछन्।",
      featuresEn: [
        "Free-Range Local Chickens",
        "Nutritious Fresh Farm Eggs",
        "Chemical-Free Growth Diet",
        "Spacious Outdoor Foraging Run"
      ],
      featuresNp: [
        "खुला चरनका स्थानीय कुखुरा",
        "पौष्टिक ताजा फार्म अण्डा",
        "रसायनरहित प्राकृतिक आहार",
        "खुला र स्वच्छ वातावरण"
      ],
    },
  ];

  return (
    <section id="our-farm" className="py-20 bg-emerald-950 text-white relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-emerald-900/30 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/80 border border-emerald-700/60 rounded-full px-4 py-1 text-xs font-bold text-amber-300 uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === "en" ? "Current Farm Rearing" : "हाम्रा वर्तमान कृषि उत्पादनहरू"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "en" ? (
              <>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Livestock</span> & Farming
              </>
            ) : (
              <>
                हाम्रो <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">पशुपालन</span> तथा उत्पादन
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed font-normal">
            {lang === "en"
              ? "Discover our current livestock farming activities in Bhadrapur-3, Jhapa. Each animal is raised with pure feed, fresh water, and loving care."
              : "भद्रपुर-३, झापामा हाम्रा वर्तमान पशुपालन गतिविधिहरू हेर्नुहोस्। प्रत्येक पशुलाई शुद्ध आहार, स्वच्छ पानी र मायालु हेरचाहका साथ हुर्काइन्छ।"}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmCards.map((card) => {
            const cardMsg = encodeURIComponent(
              `Hello Tara Krish Farm! I want to inquire about ${card.titleEn} in Bhadrapur, Jhapa.`
            );
            const cardWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${cardMsg}`;

            return (
              <div
                key={card.id}
                className="group relative bg-emerald-900/60 border border-emerald-700/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md"
              >
                {/* Image Section */}
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.titleEn}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />

                    {/* Category Emoji Badge */}
                    <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-700/60 flex items-center space-x-1.5 shadow-md">
                      <span className="text-base">{card.emoji}</span>
                      <span>{lang === "en" ? card.badgeEn : card.badgeNp}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition">
                      {lang === "en" ? card.titleEn : card.titleNp}
                    </h3>

                    <p className="text-sm text-emerald-200/90 leading-relaxed font-normal">
                      {lang === "en" ? card.descEn : card.descNp}
                    </p>

                    {/* Feature Checkmarks */}
                    <ul className="space-y-2 pt-2 border-t border-emerald-800/60 text-xs sm:text-sm text-emerald-100">
                      {(lang === "en" ? card.featuresEn : card.featuresNp).map(
                        (feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <a
                    href={cardWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-3 px-4 rounded-2xl transition duration-300 border border-emerald-400/30 shadow-md group-hover:shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>
                      {lang === "en"
                        ? `Inquire About ${card.titleEn.split(" ")[0]}`
                        : `${card.titleNp.split(" ")[0]} सोधपुछ`}
                    </span>
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
