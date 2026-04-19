import heroImg from "@/assets/hero-coffee.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Premium coffee being poured into a ceramic cup with cinematic lighting"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-espresso/30" />

      <div className="container relative z-10 flex h-full flex-col items-start justify-end pb-24 md:justify-center md:pb-0">
        <div className="max-w-2xl">
          <p
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-10 bg-gold" /> Artisan Roastery est. 2014
          </p>
          <h1
            className="text-balance font-serif text-5xl font-medium leading-[1.05] text-cream opacity-0 animate-fade-in-slow md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "0.25s" }}
          >
            Experience the <em className="not-italic gradient-text-gold">Art</em> of Premium Coffee
          </h1>
          <p
            className="mt-6 max-w-lg text-lg text-cream/80 opacity-0 animate-fade-in md:text-xl"
            style={{ animationDelay: "0.55s" }}
          >
            Freshly roasted beans & perfectly ground blends — sourced from single estates,
            crafted for the moments that matter.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-espresso shadow-gold transition-all hover:bg-gold-soft hover:shadow-elegant"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream backdrop-blur-sm transition-all hover:border-gold hover:bg-cream/10 hover:text-gold"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
