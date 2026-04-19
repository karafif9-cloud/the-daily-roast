import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: b1,
    tag: "Brewing Guide",
    title: "How to Brew the Perfect Pour Over",
    snippet: "Master ratios, grind size, and bloom time for a consistently exceptional cup.",
    date: "5 min read",
  },
  {
    img: b2,
    tag: "Education",
    title: "Arabica vs Robusta: A Tale of Two Beans",
    snippet: "Understand the flavor, caffeine, and origin differences between the world's coffees.",
    date: "7 min read",
  },
  {
    img: b3,
    tag: "Barista",
    title: "The Art of Latte Foam & Microbubbles",
    snippet: "From steaming technique to pouring patterns — make café-quality drinks at home.",
    date: "6 min read",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-gradient-warm py-24 md:py-32">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Brewing Journal
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              Stories & guides for <em className="not-italic text-mocha">curious sippers.</em>
            </h2>
          </div>
          <a
            href="#"
            className="story-link text-sm font-medium uppercase tracking-wider text-foreground/70"
          >
            View all articles →
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-mocha/70">
                  <span className="text-gold">{post.tag}</span>
                  <span className="h-1 w-1 rounded-full bg-mocha/40" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.snippet}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex w-fit items-center text-xs font-semibold uppercase tracking-wider text-foreground story-link"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
