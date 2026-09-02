import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display, Dancing_Script } from "next/font/google";
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
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fauzia Shafi — Custom Instagram, LinkedIn & Brand Designs",
  description:
    "Need scroll-stopping Instagram posts, LinkedIn banners, Facebook ads, X headers, YouTube thumbnails or full brand kits? Fauzia Shafi designs them all — fast, custom, and on-brand.",
  keywords: [
    "Fauzia Shafi",
    "Instagram post designer",
    "LinkedIn banner designer",
    "Facebook ad designer",
    "X Twitter header designer",
    "YouTube thumbnail designer",
    "Profile DP designer",
    "Brand kit designer",
    "Hire graphic designer",
  ],
  authors: [{ name: "Fauzia Shafi" }],
  icons: {
    icon: "/dp.jpg",
    apple: "/dp.jpg",
  },
  openGraph: {
    title: "Custom Social Media & Brand Designs by Fauzia Shafi",
    description:
      "Instagram, LinkedIn, Facebook, X, YouTube — every platform, one designer.",
    type: "website",
    images: [{ url: "/dp.jpg", width: 400, height: 400 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${playfair.variable} ${dancing.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink text-blush font-sans selection:bg-rose/40">
        {children}
      </body>
    </html>
  );
}