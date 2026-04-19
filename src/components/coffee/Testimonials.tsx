import { Quote, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Barista, Brooklyn",
    text: "The Yirgacheffe is hands-down the most aromatic single origin I've worked with this year. My customers ask for it by name now.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "James Chen",
    role: "Coffee enthusiast",
    text: "I've ordered four times in three months — that says everything. Freshness is unmatched and the roast date is always within 48 hours.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Ana Rodríguez",
    role: "Home brewer",
    text: "Beautiful packaging, beautiful cup. Brewed has turned my morning ritual into something I genuinely look forward to.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const r = reviews[active];

  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Words from our community
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Loved by <em className="not-italic text-mocha">thousands.</em>
        </h2>

        <div className="relative mt-14">
          <Quote className="mx-auto mb-6 h-10 w-10 text-gold/60" strokeWidth={1.2} />
          <div key={active} className="animate-fade-in">
            <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              "{r.text}"
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
              />
              <div>
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{r.role}</p>
              </div>
              <div className="mt-1 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold" strokeWidth={1.5} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-gold" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
