import { Coffee, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const cols = [
  { title: "Shop", links: ["Coffee Beans", "Ground Coffee", "Brewing Tools", "Gift Cards"] },
  { title: "Company", links: ["About", "Our Roasters", "Careers", "Press"] },
  { title: "Help", links: ["Contact", "Shipping", "Returns", "FAQ"] },
];

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-serif text-2xl">
              <Coffee className="h-6 w-6 text-gold" strokeWidth={1.5} />
              Brewed
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An artisan roastery sourcing single-estate coffees from around the world. Crafted in
              small batches, shipped within 48 hours of roasting.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brewed Roastery. Crafted with care.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE", "GPAY"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-[10px] font-bold tracking-wider text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
