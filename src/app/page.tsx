"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import OurFarmSection from "@/components/OurFarmSection";
import VisionSection from "@/components/VisionSection";
import FuturePlansSection from "@/components/FuturePlansSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [lang, setLang] = useState<"en" | "np">("en");

  return (
    <main className="min-h-screen flex flex-col bg-emerald-950/5 selection:bg-emerald-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* 1. Hero Section */}
      <Hero lang={lang} />

      {/* 2. About Us Section */}
      <AboutSection lang={lang} />

      {/* 3. Our Farm Section */}
      <OurFarmSection lang={lang} />

      {/* 4. Our Vision Section */}
      <VisionSection lang={lang} />

      {/* 5. Future Plans Section */}
      <FuturePlansSection lang={lang} />

      {/* 6. Farm Gallery Section */}
      <GallerySection lang={lang} />

      {/* 7. Why Tara Krish Farm Section */}
      <WhyUsSection lang={lang} />

      {/* 8. Contact Section */}
      <ContactSection lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp lang={lang} />
    </main>
  );
}
