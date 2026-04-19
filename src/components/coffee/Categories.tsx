import { ArrowUpRight } from "lucide-react";
import beans from "@/assets/category-beans.jpg";
import ground from "@/assets/category-ground.jpg";

const cats = [
  {
    title: "Coffee Beans",
    desc: "Whole bean varieties from the world's most celebrated estates — for those who grind their own.",
    img: beans,
    count: "24 blends",
  },
  {
    title: "Ground Coffee",
    desc: "Precision-ground for your favorite brewing method. Convenience without compromise.",
    img: ground,
    count: "18 blends",
  },
];

const Categories = () => {
  return (
    <section id="shop" className="container py-24 md:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Our Selection
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
            Two ways to brew, <em className="not-italic text-mocha">one obsession with quality.</em>
          </h2>
        </div>
        <a
          href="#products"
          className="story-link text-sm font-medium uppercase tracking-wider text-foreground/70"
        >
          View all products →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {cats.map((c) => (
          <a
            key={c.title}
            href="#"
            className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover-lift"
          >
            <div className="aspect-[4/3] overflow-hidden md:aspect-[5/4]">
              <img
                src={c.img}
                alt={c.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                {c.count}
              </p>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl text-cream md:text-4xl">{c.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-cream/80">{c.desc}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-espresso transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
