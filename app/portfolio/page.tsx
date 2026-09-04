"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

const categories = [
  { id: "all", label: "All Work" },
  { id: "brand-kit", label: "Brand Kits" },
  { id: "logo", label: "Logos" },
  { id: "ads", label: "Product Ads" },
  { id: "social", label: "Social Media" },
  { id: "youtube", label: "YouTube" },
  { id: "food", label: "Food & Menus" },
  { id: "before-after", label: "Before / After" },
  { id: "testimonials", label: "Testimonials" },
];

const crops = [
  { src: "/portfolio/crops/novastep-logo.png", title: "Novastep", sub: "Logo Design", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.png" },
  { src: "/portfolio/crops/novastep-typography.png", title: "Novastep", sub: "Typography", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.png" },
  { src: "/portfolio/crops/novastep-palette.png", title: "Novastep", sub: "Color Palette", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.png" },
  { src: "/portfolio/crops/novastep-ad.png", title: "Novastep", sub: "Ad Design", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.png" },
  { src: "/portfolio/crops/novastep-packaging.png", title: "Novastep", sub: "Packaging", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.png" },
  { src: "/portfolio/crops/novastep-mockups.png", title: "Novastep", sub: "Social Mockups", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.png" },

  { src: "/portfolio/crops/logo-aura-royale.png", title: "Aura Royale", sub: "Emblem Logo", cat: "logo", full: "/portfolio/logo-collection.png" },
  { src: "/portfolio/crops/logo-belora.png", title: "Belora", sub: "Combination Mark", cat: "logo", full: "/portfolio/logo-collection.png" },
  { src: "/portfolio/crops/logo-royaluxe.png", title: "Royaluxe", sub: "Monogram", cat: "logo", full: "/portfolio/logo-collection.png" },
  { src: "/portfolio/crops/logo-pizzaio.png", title: "Pizzaio", sub: "Mascot Logo", cat: "logo", full: "/portfolio/logo-collection.png" },
  { src: "/portfolio/crops/logo-altivia.png", title: "Altivia", sub: "Abstract Mark", cat: "logo", full: "/portfolio/logo-collection.png" },
  { src: "/portfolio/crops/logo-natura.png", title: "Natura", sub: "Pictorial Mark", cat: "logo", full: "/portfolio/logo-collection.png" },

  { src: "/portfolio/crops/noor-overview.png", title: "Noor Sweets", sub: "Brand Overview", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.png" },
  { src: "/portfolio/crops/noor-logo-close.png", title: "Noor Sweets", sub: "Logo Detail", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.png" },
  { src: "/portfolio/crops/noor-bags.png", title: "Noor Sweets", sub: "Packaging Bags", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.png" },
  { src: "/portfolio/crops/noor-apron.png", title: "Noor Sweets", sub: "Merchandise", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.png" },
  { src: "/portfolio/crops/noor-box.png", title: "Noor Sweets", sub: "Box Design", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.png" },
  { src: "/portfolio/crops/noor-social.png", title: "Noor Sweets", sub: "Social Posts", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.png" },

  { src: "/portfolio/crops/ad-iphone.png", title: "iPhone 17", sub: "Product Ad", cat: "ads", full: "/portfolio/product-ads.png" },
  { src: "/portfolio/crops/ad-lambo.png", title: "Lamborghini", sub: "Luxury Ad", cat: "ads", full: "/portfolio/product-ads.png" },
  { src: "/portfolio/crops/ad-toyota.png", title: "Toyota Fortuner", sub: "Automotive Ad", cat: "ads", full: "/portfolio/product-ads.png" },
  { src: "/portfolio/crops/ad-mcdonalds.png", title: "McDonald's", sub: "Food Ad", cat: "ads", full: "/portfolio/product-ads.png" },
  { src: "/portfolio/crops/ad-nike.png", title: "Nike Air Jordan", sub: "Sneaker Ad", cat: "ads", full: "/portfolio/product-ads.png" },
  { src: "/portfolio/crops/ad-dior-rolex.png", title: "Dior & Rolex", sub: "Luxury Ad", cat: "ads", full: "/portfolio/product-ads.png" },

  { src: "/portfolio/crops/social-rayban.png", title: "Ray-Ban", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.png" },
  { src: "/portfolio/crops/social-mccafe.png", title: "McCafe", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.png" },
  { src: "/portfolio/crops/social-apple.png", title: "Apple", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.png" },
  { src: "/portfolio/crops/social-cocacola.png", title: "Coca-Cola", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.png" },
  { src: "/portfolio/crops/social-lv.png", title: "Louis Vuitton", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.png" },
  { src: "/portfolio/crops/social-oreo.png", title: "Oreo", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.png" },

  { src: "/portfolio/crops/yt-beast-mode.png", title: "Beast Mode", sub: "Gaming Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.png" },
  { src: "/portfolio/crops/yt-spicy-burger.png", title: "Spicy Burger", sub: "Challenge Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.png" },
  { src: "/portfolio/crops/yt-summer-haul.png", title: "Summer Haul", sub: "Lifestyle Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.png" },
  { src: "/portfolio/crops/yt-win-or-die.png", title: "Win or Die", sub: "Gaming Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.png" },
  { src: "/portfolio/crops/yt-grow-channel.png", title: "Grow Channel", sub: "Tutorial Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.png" },

  { src: "/portfolio/crops/ba-coffee.png", title: "Coffee Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.png" },
  { src: "/portfolio/crops/ba-shoes.png", title: "Shoe Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.png" },
  { src: "/portfolio/crops/ba-food.png", title: "Food Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.png" },
  { src: "/portfolio/crops/ba-perfume.png", title: "Perfume Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.png" },
  { src: "/portfolio/crops/ba-milkshake.png", title: "Milkshake Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.png" },
  { src: "/portfolio/crops/ba-tea.png", title: "Tea Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.png" },

  { src: "/portfolio/crops/food-pizza.png", title: "Pizza Place", sub: "Menu Design", cat: "food", full: "/portfolio/food-menus.png" },
  { src: "/portfolio/crops/food-chicken.png", title: "Fried Chicken", sub: "Ad Design", cat: "food", full: "/portfolio/food-menus.png" },
  { src: "/portfolio/crops/food-catering.png", title: "Catering Service", sub: "Brand Design", cat: "food", full: "/portfolio/food-menus.png" },
  { src: "/portfolio/crops/food-menu.png", title: "Beverage Menu", sub: "Menu Design", cat: "food", full: "/portfolio/food-menus.png" },
  { src: "/portfolio/crops/food-shawarma.png", title: "Shawarma", sub: "Social Post", cat: "food", full: "/portfolio/food-menus.png" },
  { src: "/portfolio/crops/food-yogurt.png", title: "Yogurt Brand", sub: "Ad Design", cat: "food", full: "/portfolio/food-menus.png" },

  { src: "/portfolio/crops/test-chat.png", title: "Client Review", sub: "Chat Screenshot", cat: "testimonials", full: "/portfolio/client-testimonials.png" },
  { src: "/portfolio/crops/test-quote.png", title: "Client Love", sub: "Testimonial Card", cat: "testimonials", full: "/portfolio/client-testimonials.png" },
  { src: "/portfolio/crops/test-profile.png", title: "Happy Client", sub: "Feedback", cat: "testimonials", full: "/portfolio/client-testimonials.png" },
];

type Crop = (typeof crops)[number];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<Crop | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? crops : crops.filter((c) => c.cat === active)),
    [active]
  );

  return (
    <div className="min-h-screen bg-ink">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-ink/85 border-b border-rose/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blush/80 hover:text-rose transition-colors text-sm font-display"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="font-script text-2xl text-rose">portfolio</h1>
          <span className="text-stone text-xs">{crops.length} designs</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="font-display font-black text-cream text-[clamp(2.5rem,7vw,5rem)] leading-[0.95]">
            REAL <span className="italic text-rose">WORK.</span>
            <br />
            REAL <span className="text-shimmer">RESULTS.</span>
          </h2>
          <p className="mt-4 text-blush/70 max-w-xl mx-auto">
            From brand kits to YouTube thumbnails — every project built from scratch.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                active === c.id
                  ? "bg-rose text-ink shadow-[0_6px_20px_-6px_rgba(226,149,148,0.6)]"
                  : "border border-rose/30 text-blush/70 hover:border-rose hover:text-rose"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Masonry grid — true pinterest */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
          {filtered.map((c, i) => (
            <div
              key={`${c.src}-${i}`}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setLightbox(c)}
            >
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] card-hover">
                <Image
                  src={c.src}
                  alt={c.title}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-display font-black text-cream text-sm">{c.title}</p>
                  <p className="text-rose/80 text-xs">{c.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox — shows the full original image */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-rose/40 text-rose flex items-center justify-center hover:bg-rose/10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.full}
              alt={lightbox.title}
              width={1400}
              height={1000}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-4 text-center">
              <p className="font-display font-black text-cream text-xl">{lightbox.title}</p>
              <p className="text-rose/80 text-sm">{lightbox.sub}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}