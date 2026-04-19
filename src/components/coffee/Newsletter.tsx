import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-espresso py-24 text-cream md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Newsletter
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
            Join our <em className="not-italic gradient-text-gold">coffee lovers</em> community
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-cream/70">
            Brewing tips, new arrivals, and members-only releases — delivered fresh.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("Welcome aboard! Check your inbox.");
              setEmail("");
            }}
            className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-cream/20 bg-coffee/50 p-2 backdrop-blur"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider text-espresso transition-all hover:bg-gold-soft"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-4 text-xs text-cream/40">No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
