"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Globe, MapPin, Sprout } from "lucide-react";

interface NavbarProps {
  lang: "en" | "np";
  setLang: (lang: "en" | "np") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { nameEn: "Home", nameNp: "गृहपृष्ठ", href: "#hero" },
    { nameEn: "About Us", nameNp: "हाम्रो बारेमा", href: "#about" },
    { nameEn: "Our Farm", nameNp: "हाम्रो फार्म", href: "#our-farm" },
    { nameEn: "Our Vision", nameNp: "हाम्रो दृष्टि", href: "#vision" },
    { nameEn: "Future Plans", nameNp: "भावी योजना", href: "#future-plans" },
    { nameEn: "Gallery", nameNp: "ग्यालेरी", href: "#gallery" },
    { nameEn: "Why Us", nameNp: "हामी किन?", href: "#why-us" },
    { nameEn: "Contact", nameNp: "सम्पर्क", href: "#contact" },
  ];

  const whatsappNumber = "9779817941921";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Tara Krish Farm! I would like to make an inquiry."
  )}`;

  return (
    <>
      {/* Top Banner */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-800/60">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-300 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Bhadrapur-3, Jhapa, Nepal
            </span>
            <span className="hidden md:inline-block text-emerald-500">|</span>
            <span className="hidden md:inline-flex items-center text-emerald-200">
              <Sprout className="w-3.5 h-3.5 mr-1 text-amber-400" />
              {lang === "en"
                ? "Sustainable Agriculture & Quality Livestock"
                : "दिगो कृषि तथा गुणस्तरीय पशुपालन"}
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "np" : "en")}
              className="flex items-center space-x-1.5 bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 px-2.5 py-1 rounded-full text-xs font-semibold transition border border-emerald-700/50 cursor-pointer"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === "en" ? "नेपाली" : "English"}</span>
            </button>

            {/* Quick WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1.5 text-amber-300 hover:text-amber-200 font-medium text-xs transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-amber-400 text-emerald-900" />
              <span>+977-9817941921</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-emerald-950/95 backdrop-blur-md shadow-lg py-3 border-b border-emerald-800/40"
            : "bg-emerald-950/90 backdrop-blur-sm py-4 border-b border-emerald-900/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center text-amber-400 font-bold text-xl">
                🌾
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-emerald-300 transition">
                Tara Krish Farm
              </span>
              <span className="text-[11px] font-medium text-amber-400 tracking-wider">
                तरा कृषि फार्म • भद्रपुर, झापा
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-emerald-100/90 hover:text-amber-300 hover:bg-emerald-900/60 rounded-lg transition"
              >
                {lang === "en" ? link.nameEn : link.nameNp}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-0.5 border border-emerald-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === "en" ? "WhatsApp Us" : "व्हाट्सएप सम्पर्क"}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/80 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-emerald-950/95 border-t border-emerald-800/60 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-emerald-100 hover:bg-emerald-900/80 rounded-lg hover:text-amber-300 transition"
              >
                {lang === "en" ? link.nameEn : link.nameNp}
              </a>
            ))}
            <div className="pt-3 border-t border-emerald-900/80 flex flex-col space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>
                  {lang === "en"
                    ? "Connect via WhatsApp (+977-9817941921)"
                    : "व्हाट्सएपमा सम्पर्क गर्नुहोस (+977-9817941921)"}
                </span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
