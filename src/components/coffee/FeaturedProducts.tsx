import { Eye, Plus, Star } from "lucide-react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const products = [
  { name: "Ethiopia Yirgacheffe", origin: "Arabica · Light Roast", price: 24, rating: 4.9, img: p1 },
  { name: "Colombian Supremo", origin: "Arabica · Medium Roast", price: 22, rating: 4.8, img: p2 },
  { name: "House Blend", origin: "Arabica Blend · Medium", price: 19, rating: 4.7, img: p3 },
  { name: "Italian Espresso", origin: "Robusta Blend · Dark", price: 26, rating: 5.0, img: p4 },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="bg-gradient-warm py-24 md:py-32">
      <div className="container">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Featured Roasts
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
            Crafted by hand, <em className="not-italic text-mocha">loved by many.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-4">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft hover-lift"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-beige">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  aria-label="Quick view"
                  className="absolute right-3 top-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream/90 text-espresso opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mocha/70">
                  {p.origin}
                </p>
                <h3 className="mt-1.5 font-serif text-xl leading-tight text-foreground">
                  {p.name}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-3.5 w-3.5 ${idx < Math.round(p.rating) ? "fill-gold" : "fill-none opacity-30"}`}
                      strokeWidth={1.5}
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">{p.rating}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="font-serif text-2xl text-foreground">${p.price}</span>
                  <button
                    aria-label="Add to cart"
                    className="group/btn flex items-center gap-2 rounded-full bg-espresso px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream transition-all hover:bg-gold hover:text-espresso"
                  >
                    <Plus className="h-3.5 w-3.5 transition-transform group-hover/btn:rotate-90" />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
