const items = [
  "Single Origin",
  "Small Batch",
  "Freshly Roasted",
  "Ethically Sourced",
  "Hand Selected",
  "Award Winning",
];

const Marquee = () => {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-secondary/40 py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {list.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-serif text-2xl italic text-mocha/70 md:text-3xl"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
