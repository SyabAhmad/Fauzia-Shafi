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
  { src: "/portfolio/crops/novastep-logo.jpg", title: "Novastep", sub: "Logo Design", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.jpg" },
  { src: "/portfolio/crops/novastep-typography.jpg", title: "Novastep", sub: "Typography", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.jpg" },
  { src: "/portfolio/crops/novastep-palette.jpg", title: "Novastep", sub: "Color Palette", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.jpg" },
  { src: "/portfolio/crops/novastep-ad.jpg", title: "Novastep", sub: "Ad Design", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.jpg" },
  { src: "/portfolio/crops/novastep-packaging.jpg", title: "Novastep", sub: "Packaging", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.jpg" },
  { src: "/portfolio/crops/novastep-mockups.jpg", title: "Novastep", sub: "Social Mockups", cat: "brand-kit", full: "/portfolio/novastep-brand-kit.jpg" },

  { src: "/portfolio/crops/logo-aura-royale.jpg", title: "Aura Royale", sub: "Emblem Logo", cat: "logo", full: "/portfolio/logo-collection.jpg" },
  { src: "/portfolio/crops/logo-belora.jpg", title: "Belora", sub: "Combination Mark", cat: "logo", full: "/portfolio/logo-collection.jpg" },
  { src: "/portfolio/crops/logo-royaluxe.jpg", title: "Royaluxe", sub: "Monogram", cat: "logo", full: "/portfolio/logo-collection.jpg" },
  { src: "/portfolio/crops/logo-pizzaio.jpg", title: "Pizzaio", sub: "Mascot Logo", cat: "logo", full: "/portfolio/logo-collection.jpg" },
  { src: "/portfolio/crops/logo-altivia.jpg", title: "Altivia", sub: "Abstract Mark", cat: "logo", full: "/portfolio/logo-collection.jpg" },
  { src: "/portfolio/crops/logo-natura.jpg", title: "Natura", sub: "Pictorial Mark", cat: "logo", full: "/portfolio/logo-collection.jpg" },

  { src: "/portfolio/crops/noor-overview.jpg", title: "Noor Sweets", sub: "Brand Overview", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.jpg" },
  { src: "/portfolio/crops/noor-logo-close.jpg", title: "Noor Sweets", sub: "Logo Detail", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.jpg" },
  { src: "/portfolio/crops/noor-bags.jpg", title: "Noor Sweets", sub: "Packaging Bags", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.jpg" },
  { src: "/portfolio/crops/noor-apron.jpg", title: "Noor Sweets", sub: "Merchandise", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.jpg" },
  { src: "/portfolio/crops/noor-box.jpg", title: "Noor Sweets", sub: "Box Design", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.jpg" },
  { src: "/portfolio/crops/noor-social.jpg", title: "Noor Sweets", sub: "Social Posts", cat: "brand-kit", full: "/portfolio/noor-sweets-brand-kit.jpg" },

  { src: "/portfolio/crops/ad-iphone.jpg", title: "iPhone 17", sub: "Product Ad", cat: "ads", full: "/portfolio/product-ads.jpg" },
  { src: "/portfolio/crops/ad-lambo.jpg", title: "Lamborghini", sub: "Luxury Ad", cat: "ads", full: "/portfolio/product-ads.jpg" },
  { src: "/portfolio/crops/ad-toyota.jpg", title: "Toyota Fortuner", sub: "Automotive Ad", cat: "ads", full: "/portfolio/product-ads.jpg" },
  { src: "/portfolio/crops/ad-mcdonalds.jpg", title: "McDonald's", sub: "Food Ad", cat: "ads", full: "/portfolio/product-ads.jpg" },
  { src: "/portfolio/crops/ad-nike.jpg", title: "Nike Air Jordan", sub: "Sneaker Ad", cat: "ads", full: "/portfolio/product-ads.jpg" },
  { src: "/portfolio/crops/ad-dior-rolex.jpg", title: "Dior & Rolex", sub: "Luxury Ad", cat: "ads", full: "/portfolio/product-ads.jpg" },

  { src: "/portfolio/crops/social-rayban.jpg", title: "Ray-Ban", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.jpg" },
  { src: "/portfolio/crops/social-mccafe.jpg", title: "McCafe", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.jpg" },
  { src: "/portfolio/crops/social-apple.jpg", title: "Apple", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.jpg" },
  { src: "/portfolio/crops/social-cocacola.jpg", title: "Coca-Cola", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.jpg" },
  { src: "/portfolio/crops/social-lv.jpg", title: "Louis Vuitton", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.jpg" },
  { src: "/portfolio/crops/social-oreo.jpg", title: "Oreo", sub: "Instagram Post", cat: "social", full: "/portfolio/social-media-grid.jpg" },

  { src: "/portfolio/crops/yt-beast-mode.jpg", title: "Beast Mode", sub: "Gaming Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.jpg" },
  { src: "/portfolio/crops/yt-spicy-burger.jpg", title: "Spicy Burger", sub: "Challenge Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.jpg" },
  { src: "/portfolio/crops/yt-summer-haul.jpg", title: "Summer Haul", sub: "Lifestyle Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.jpg" },
  { src: "/portfolio/crops/yt-win-or-die.jpg", title: "Win or Die", sub: "Gaming Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.jpg" },
  { src: "/portfolio/crops/yt-grow-channel.jpg", title: "Grow Channel", sub: "Tutorial Thumbnail", cat: "youtube", full: "/portfolio/youtube-thumbnails.jpg" },

  { src: "/portfolio/crops/ba-coffee.jpg", title: "Coffee Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.jpg" },
  { src: "/portfolio/crops/ba-shoes.jpg", title: "Shoe Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.jpg" },
  { src: "/portfolio/crops/ba-food.jpg", title: "Food Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.jpg" },
  { src: "/portfolio/crops/ba-perfume.jpg", title: "Perfume Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.jpg" },
  { src: "/portfolio/crops/ba-milkshake.jpg", title: "Milkshake Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.jpg" },
  { src: "/portfolio/crops/ba-tea.jpg", title: "Tea Brand", sub: "Before / After", cat: "before-after", full: "/portfolio/before-after-redesigns.jpg" },

  { src: "/portfolio/crops/food-pizza.jpg", title: "Pizza Place", sub: "Menu Design", cat: "food", full: "/portfolio/food-menus.jpg" },
  { src: "/portfolio/crops/food-chicken.jpg", title: "Fried Chicken", sub: "Ad Design", cat: "food", full: "/portfolio/food-menus.jpg" },
  { src: "/portfolio/crops/food-catering.jpg", title: "Catering Service", sub: "Brand Design", cat: "food", full: "/portfolio/food-menus.jpg" },
  { src: "/portfolio/crops/food-menu.jpg", title: "Beverage Menu", sub: "Menu Design", cat: "food", full: "/portfolio/food-menus.jpg" },
  { src: "/portfolio/crops/food-shawarma.jpg", title: "Shawarma", sub: "Social Post", cat: "food", full: "/portfolio/food-menus.jpg" },
  { src: "/portfolio/crops/food-yogurt.jpg", title: "Yogurt Brand", sub: "Ad Design", cat: "food", full: "/portfolio/food-menus.jpg" },

  { src: "/portfolio/crops/test-chat.jpg", title: "Client Review", sub: "Chat Screenshot", cat: "testimonials", full: "/portfolio/client-testimonials.jpg" },
  { src: "/portfolio/crops/test-quote.jpg", title: "Client Love", sub: "Testimonial Card", cat: "testimonials", full: "/portfolio/client-testimonials.jpg" },
  { src: "/portfolio/crops/test-profile.jpg", title: "Happy Client", sub: "Feedback", cat: "testimonials", full: "/portfolio/client-testimonials.jpg" },
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
      <div className="sticky top-0 z-50 bg-ink/95 border-b border-rose/15">
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
        <div className="columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent pointer-events-none sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                  <p className="font-display font-black text-cream text-xs sm:text-sm">{c.title}</p>
                  <p className="text-rose/80 text-[10px] sm:text-xs">{c.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox — shows the full original image */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 sm:p-8"
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