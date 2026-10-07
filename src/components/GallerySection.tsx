"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X, Maximize2, Sparkles, MapPin } from "lucide-react";

interface GalleryProps {
  lang: "en" | "np";
}

export default function GallerySection({ lang }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    desc: string;
    category: string;
  } | null>(null);

  const categories = [
    { id: "all", labelEn: "All Photos", labelNp: "सबै फोटोहरू" },
    { id: "cows", labelEn: "Cows & Dairy", labelNp: "गाई तथा दुग्ध" },
    { id: "goats", labelEn: "Goats", labelNp: "बाख्रा फार्म" },
    { id: "chickens", labelEn: "Chickens", labelNp: "कुखुरा फार्म" },
    { id: "land", labelEn: "Farmland", labelNp: "कृषि भूमि" },
    { id: "fish", labelEn: "Fish Pond Concept", labelNp: "माछा पोखरी धारणा" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "cows",
      src: "/images/cows.jpg",
      titleEn: "Dairy Cow Pasture",
      titleNp: "गाई पालन तथा हरियो खोर",
      descEn: "Healthy Jersey & Holstein dairy cows feeding on fresh Napier grass in Bhadrapur-3.",
      descNp: "भद्रपुर-३ मा ताजा नेपियर घाँस खाँदै गरेका जर्सी र होलिस्टिन गाईहरू।",
    },
    {
      id: 2,
      category: "goats",
      src: "/images/goats.jpg",
      titleEn: "Goat Breeding Facility",
      titleNp: "उन्नत बाख्रा पालन तथा खोर",
      descEn: "Jamunapari and Boer goats grazing in open sunlit pasture.",
      descNp: "खुला चौरमा चरिरहेका जमुनापारी तथा बोयर प्रजातिका बाख्राहरू।",
    },
    {
      id: 3,
      category: "chickens",
      src: "/images/chickens.jpg",
      titleEn: "Free-Range Poultry Yard",
      titleNp: "खुला चरन कुखुरा फार्म",
      descEn: "Free-range chickens roaming outdoors naturally in green farm yards.",
      descNp: "फार्मको हरियो चौरमा प्राकृतिक रूपमा चरिरहेका कुखुराहरू।",
    },
    {
      id: 4,
      category: "fish",
      src: "/images/fish-pond.jpg",
      titleEn: "Freshwater Fish Pond Concept",
      titleNp: "स्वच्छ जल माछा पालन अवधारणा",
      descEn: "Future fish pond model with solar aerator splash and surrounding fruit trees.",
      descNp: "सौर्य एरोटर र हरियो किनारसहितको भावी माछा पोखरी अवधारणा।",
    },
    {
      id: 5,
      category: "land",
      src: "/images/crops.jpg",
      titleEn: "Jhapa Farmland & Crops",
      titleNp: "झापाको उब्जाउ कृषि भूमि",
      descEn: "Lush green organic crops and paddy field rows glowing under sun.",
      descNp: "घाममा टल्किएका हरिया अर्गानिक बाली र धान खेतका गराहरू।",
    },
    {
      id: 6,
      category: "cows",
      src: "/images/hero.jpg",
      titleEn: "Tara Krish Farm Overview",
      titleNp: "तरा कृषि फार्मको विहङ्गम दृश्य",
      descEn: "Panoramic view of our main farm ground, green pastures, and bamboo fencing.",
      descNp: "हाम्रो मुख्य फार्मको जमिन, हरिया चौर र बाँसको बारको विहङ्गम दृश्य।",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Camera className="w-4 h-4 text-emerald-600" />
            <span>{lang === "en" ? "Farm Photo Gallery" : "फार्म फोटो ग्यालेरी"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? (
              <>
                Life at <span className="text-emerald-700">Tara Krish Farm</span>
              </>
            ) : (
              <>
                <span className="text-emerald-700">तरा कृषि फार्मको</span> झलकहरू
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {lang === "en"
              ? "Take a look inside our farm in Bhadrapur-3, Jhapa — from our cows, goats, and poultry to our future fish pond vision."
              : "भद्रपुर-३, झापामा रहेको हाम्रो फार्मको भित्री झलक - गाई, बाख्रा, कुखुरादेखि भावी माछा पोखरी अवधारण सम्म।"}
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-emerald-700 text-white shadow-md scale-105"
                    : "bg-emerald-50 text-slate-700 hover:bg-emerald-100"
                }`}
              >
                {lang === "en" ? cat.labelEn : cat.labelNp}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setLightboxImage({
                  src: item.src,
                  title: lang === "en" ? item.titleEn : item.titleNp,
                  desc: lang === "en" ? item.descEn : item.descNp,
                  category: item.category,
                })
              }
              className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-emerald-100 cursor-pointer bg-slate-950"
            >
              <Image
                src={item.src}
                alt={item.titleEn}
                fill
                className="object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />

              {/* Hover overlay details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300">
                    {lang === "en" ? item.titleEn : item.titleNp}
                  </h3>
                  <p className="text-xs text-emerald-200 line-clamp-2">
                    {lang === "en" ? item.descEn : item.descNp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-emerald-950 rounded-3xl overflow-hidden border border-emerald-700 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-emerald-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[450px] w-full">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Text */}
            <div className="p-6 text-white space-y-2 bg-emerald-950">
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-300">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bhadrapur-3, Jhapa, Nepal</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-emerald-200">
                {lightboxImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
