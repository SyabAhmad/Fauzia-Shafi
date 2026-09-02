import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Fauzia Shafi — Graphic Designer & Canva Specialist",
  description:
    "Fauzia Shafi is a Graphic Designer passionate about elevating brands through creative visuals. Specializing in social media design, branding, Canva design, and marketing creatives.",
  keywords: [
    "Fauzia Shafi",
    "Graphic Designer",
    "Social Media Designer",
    "Canva Designer",
    "Brand Identity",
    "Portfolio",
  ],
  authors: [{ name: "Fauzia Shafi" }],
  openGraph: {
    title: "Fauzia Shafi — Graphic Designer",
    description:
      "Elevating brands through creative visuals. Social media design, branding, and Canva expertise.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink text-blush font-sans selection:bg-rose/40">
        {children}
      </body>
    </html>
  );
}