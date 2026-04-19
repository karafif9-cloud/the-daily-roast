import about from "@/assets/about-story.jpg";
import { Award, Leaf, Sparkles } from "lucide-react";

const stats = [
  { icon: Leaf, label: "Single estate origins", value: "32+" },
  { icon: Award, label: "Years of roasting", value: "10" },
  { icon: Sparkles, label: "Cups served daily", value: "12k" },
];

const About = () => {
  return (
    <section id="about" className="container py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={about}
              alt="Coffee farmer holding fresh red coffee cherries"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-gold p-6 shadow-gold md:block md:-right-8">
            <p className="font-serif text-5xl text-espresso">10</p>
            <p className="mt-1 max-w-[100px] text-xs font-medium uppercase tracking-wider text-espresso/80">
              Years of craft
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
            From <em className="not-italic text-mocha">soil</em> to cup, with care at every step.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We partner directly with farmers across Ethiopia, Colombia, and Panama to bring you
            beans that tell a story. Every batch is roasted in small quantities at our flagship
            roastery — never more than 24 hours before it ships.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            It's a slower way to make coffee. We think it's the only way that's worth it.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <s.icon className="mb-3 h-5 w-5 text-gold" strokeWidth={1.5} />
                <p className="font-serif text-3xl text-foreground">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground story-link"
          >
            Read our journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
