import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tara Krish Farm | Sustainable Agriculture & Livestock Farm in Bhadrapur, Jhapa, Nepal",
  description: "Tara Krish Farm is a trusted local agricultural and livestock farm located in Bhadrapur-3, Jhapa, Nepal. Specializing in healthy dairy cows, goat farming, free-range poultry chickens, and future fish farming.",
  keywords: [
    "Tara Krish Farm",
    "Farm in Jhapa",
    "Bhadrapur-3 farm",
    "Cow farming Nepal",
    "Goat farming Jhapa",
    "Poultry chicken farm Nepal",
    "Livestock farm Bhadrapur",
    "Sustainable agriculture Nepal",
    "Nepali agricultural farm",
    "Fish farming Jhapa"
  ],
  authors: [{ name: "Tara Krish Farm Team" }],
  openGraph: {
    title: "Tara Krish Farm | Growing Together, Naturally",
    description: "Quality local livestock and sustainable farming in Bhadrapur-3, Jhapa, Nepal. Cows, Goats, Chickens & Fish Farming vision.",
    url: "https://tarakrishfarm.com",
    siteName: "Tara Krish Farm",
    locale: "en_NP",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Tara Krish Farm Bhadrapur Jhapa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${devanagari.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-emerald-950/5 text-slate-900 selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

