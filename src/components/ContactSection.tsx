"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, CheckCircle2, Share2 } from "lucide-react";

interface ContactProps {
  lang: "en" | "np";
}

export default function ContactSection({ lang }: ContactProps) {
  const [selectedTopic, setSelectedTopic] = useState("General Inquiry");
  const [inquirerName, setInquirerName] = useState("");
  const [inquirerMessage, setInquirerMessage] = useState("");

  const phoneNumber = "+977 9817941921";
  const rawWhatsapp = "9779817941921";
  const emailAddress = "tarakrishfarm@gmail.com";
  const facebookUrl = "https://facebook.com/tarakrishfarm";

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Hello Tara Krish Farm! 👋\nMy name: ${inquirerName || "Guest"}\nInquiry Type: ${selectedTopic}\nMessage: ${inquirerMessage || "I would like to inquire about your farm in Bhadrapur-3, Jhapa."}`;
    const url = `https://wa.me/${rawWhatsapp}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{lang === "en" ? "Get In Touch" : "सम्पर्क तथा सोधपुछ"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? (
              <>
                Contact <span className="text-emerald-700">Tara Krish Farm</span>
              </>
            ) : (
              <>
                <span className="text-emerald-700">तरा कृषि फार्ममा</span> सम्पर्क गर्नुहोस्
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {lang === "en"
              ? "We welcome visitors, customers, and partners to our farm in Bhadrapur-3, Jhapa, Nepal. Connect directly via WhatsApp or phone!"
              : "हामी भद्रपुर-३, झापामा रहेका हाम्रा पाहुनाहरू, ग्राहकहरू र साझेदारहरूलाई स्वागत गर्दछौं। सिधै व्हाट्सएप वा फोनमार्फत जोडिनुहोस्!"}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-emerald-950 text-white p-7 rounded-3xl shadow-xl space-y-6 border border-emerald-800">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-amber-300 flex items-center justify-center font-bold text-xl shadow">
                  🌾
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tara Krish Farm</h3>
                  <p className="text-xs text-amber-300 font-semibold">तरा कृषि फार्म • झापा</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-emerald-100">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Location / ठेगाना:</span>
                    <span>Bhadrapur-3, Jhapa, Nepal</span>
                    <span className="block text-xs text-emerald-300">(भद्रपुर वडा नं. ३, झापा, नेपाल)</span>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 fill-emerald-400 text-emerald-950" />
                  <div>
                    <span className="font-bold text-white block">WhatsApp & Phone:</span>
                    <a
                      href={`https://wa.me/${rawWhatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:text-amber-200 font-bold text-base underline decoration-amber-400/50"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email:</span>
                    <a href={`mailto:${emailAddress}`} className="hover:text-amber-300 transition">
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <span className="font-bold text-white block">Facebook:</span>
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 hover:text-amber-300 transition underline"
                    >
                      facebook.com/tarakrishfarm
                    </a>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start space-x-3 pt-2 border-t border-emerald-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Visiting Hours:</span>
                    <span>Sunday – Saturday (6:00 AM – 6:00 PM)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${rawWhatsapp}?text=${encodeURIComponent(
                    "Namaste Tara Krish Farm! I would like to visit or place an inquiry."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg transition duration-300 border border-emerald-300/30"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{lang === "en" ? "Chat Directly on WhatsApp" : "व्हाट्सएपमा सिधै कुरा गर्नुहोस्"}</span>
                </a>
              </div>
            </div>

            {/* Embedded Stylized Map Card */}
            <div className="bg-emerald-50 p-4 rounded-3xl border border-emerald-200 shadow-md">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-bold text-xs text-emerald-900 flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Farm Location Map (Bhadrapur-3, Jhapa)</span>
                </span>
                <span className="text-[11px] bg-emerald-200 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                  Jhapa, Nepal
                </span>
              </div>
              <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-emerald-200">
                <iframe
                  title="Tara Krish Farm Location Bhadrapur Jhapa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57053.8644558237!2d88.0772714!3d26.5414164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b6f3c1d53b21%3A0x6b77207c858bebb9!2sBhadrapur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {lang === "en" ? "Send Quick WhatsApp Inquiry" : "त्वरित व्हाट्सएप सोधपुछ पठाइहाल्नुहोस्"}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {lang === "en"
                  ? "Select your interest below, enter your message, and click send to open WhatsApp directly with your formatted inquiry."
                  : "तल आफ्नो विषय छान्नुहोस्, सन्देश लेख्नुहोस् र व्हाट्सएप सिधै खोल्न पठाउनुहोस् दबाउनुहोस्।"}
              </p>
            </div>

            <form onSubmit={handleSendWhatsapp} className="space-y-5">
              {/* Inquiry Topic Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {lang === "en" ? "Select Farm Topic" : "विषय छान्नुहोस्"}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "Cow Farming & Dairy", label: "🐄 Cows / Dairy" },
                    { id: "Goat Rearing", label: "🐐 Goats" },
                    { id: "Poultry & Eggs", label: "🐔 Chickens" },
                    { id: "Fish Pond Future", label: "🐟 Fish Farm" },
                    { id: "Farm Visit", label: "🏡 Visit Farm" },
                    { id: "General Inquiry", label: "💬 General" },
                  ].map((topic) => (
                    <button
                      type="button"
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition cursor-pointer text-left flex items-center justify-between ${
                        selectedTopic === topic.id
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50"
                      }`}
                    >
                      <span>{topic.label}</span>
                      {selectedTopic === topic.id && <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === "en" ? "Your Name / तपाईको नाम" : "तपाईको नाम"}
                </label>
                <input
                  type="text"
                  placeholder={lang === "en" ? "e.g. Ramesh Sharma" : "जस्तै: रमेश शर्मा"}
                  value={inquirerName}
                  onChange={(e) => setInquirerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-800 text-sm"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === "en" ? "Message / Detail Inquiry" : "सन्देश विवरण"}
                </label>
                <textarea
                  rows={4}
                  placeholder={
                    lang === "en"
                      ? "Write details about milk order, goat breed price, chicken quantity, or visiting date..."
                      : "दूध अर्डर, बाख्राको नस्ल मूल्य, कुखुराको संख्या वा भ्रमण मितिबारे लेख्नुहोस्..."
                  }
                  value={inquirerMessage}
                  onChange={(e) => setInquirerMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-800 text-sm"
                />
              </div>

              {/* Submit WhatsApp Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer border border-emerald-400/30"
              >
                <Send className="w-4 h-4" />
                <span>
                  {lang === "en"
                    ? "Send Inquiry via WhatsApp (+977-9817941921)"
                    : "व्हाट्सएप मार्फत सोधपुछ पठाउनुहोस् (+977-9817941921)"}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
