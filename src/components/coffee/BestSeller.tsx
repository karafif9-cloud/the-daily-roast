import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const items = [
  { name: "Reserve Geisha", badge: "Limited", price: 68, img: p2, desc: "Panama auction lot — only 200 bags." },
  { name: "Midnight Espresso", badge: "Best Seller", price: 26, img: p4, desc: "Our signature dark roast, crowd favorite." },
  { name: "Ethiopia Heirloom", badge: "New", price: 32, img: p1, desc: "Floral, citrus, jasmine notes." },
  { name: "Founders Reserve", badge: "Limited", price: 54, img: p3, desc: "A vintage barrel-aged single origin." },
];

const BestSeller = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: "l" | "r") => {
    ref.current?.scrollBy({ left: dir === "l" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section className="bg-espresso py-24 text-cream md:py-32">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Best Sellers & Limited
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              Reserved for <em className="not-italic gradient-text-gold">connoisseurs.</em>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("l")}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("r")}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))]"
      >
        {items.map((it) => (
          <article
            key={it.name}
            className="group relative w-[300px] shrink-0 overflow-hidden rounded-2xl bg-coffee/60 md:w-[360px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={it.img}
                alt={it.name}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-espresso">
                {it.badge}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl">{it.name}</h3>
              <p className="mt-2 text-sm text-cream/70">{it.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-serif text-2xl text-gold">${it.price}</span>
                <button className="text-xs font-semibold uppercase tracking-wider text-cream/80 story-link">
                  Discover →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
