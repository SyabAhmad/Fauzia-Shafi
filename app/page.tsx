import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

const marquee1 = ["INSTAGRAM POSTS", "LINKEDIN BANNERS", "FACEBOOK ADS", "YOUTUBE THUMBNAILS", "BRAND KITS", "LOGO DESIGN"];
const marquee2 = ["50+ DESIGNS DELIVERED", "100% CLIENT SATISFACTION", "FAST TURNAROUND", "BULK DISCOUNTS", "REVISIONS INCLUDED"];
const marquee3 = ["FOLLOW @FAUZIYA_SHAFI", "BEHANCE: FAUZIA SHAFI", "DM FOR PRICING", "SLOTS OPEN", "BOOK NOW →"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Marquee items={marquee1} speed={35} className="pt-20 border-b border-rose/10" />
        <Hero />
        <Services />
        <Marquee items={marquee2} speed={45} reverse className="border-y border-rose/10" />
        <Work />
        <Process />
        <Pricing />
        <Contact />
        <Marquee items={marquee3} speed={30} className="border-t border-rose/10" />
      </main>
      <Footer />
    </>
  );
}