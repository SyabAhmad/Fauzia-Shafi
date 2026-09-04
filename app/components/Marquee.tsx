export default function Marquee({
  items,
  speed = 40,
  reverse = false,
  className = "",
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const repeated = [...items, ...items, ...items, ...items];
  const animation = reverse ? "marquee-reverse" : "marquee";

  return (
    <div className={`relative overflow-hidden py-4 ${className}`}>
      <div
        className="flex w-max gap-8 whitespace-nowrap"
        style={{
          animation: `${animation} ${items.length * speed}s linear infinite`,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display font-black text-[clamp(1rem,2.5vw,1.5rem)] text-rose/20 uppercase tracking-widest flex items-center gap-8 shrink-0"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-rose/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}