import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const links = ["Home", "Shop", "About", "Blog", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a
          href="#"
          className={cn(
            "flex items-center gap-2 font-serif text-2xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-cream"
          )}
        >
          <Coffee className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <span>Brewed</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={cn(
                  "story-link text-sm font-medium uppercase tracking-wider transition-colors",
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-cream/90 hover:text-gold"
                )}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          {[Search, User].map((Icon, i) => (
            <button
              key={i}
              aria-label="action"
              className={cn(
                "hidden rounded-full p-2.5 transition-colors md:inline-flex",
                scrolled
                  ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  : "text-cream/90 hover:bg-cream/10 hover:text-gold"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </button>
          ))}
          <button
            aria-label="cart"
            className={cn(
              "relative rounded-full p-2.5 transition-colors",
              scrolled
                ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
                : "text-cream/90 hover:bg-cream/10 hover:text-gold"
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-espresso">
              2
            </span>
          </button>
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "ml-1 rounded-full p-2.5 transition-colors md:hidden",
              scrolled ? "text-foreground" : "text-cream"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container mt-4 animate-fade-in md:hidden">
          <ul className="flex flex-col gap-1 rounded-2xl bg-card p-4 shadow-elegant">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:bg-secondary"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
