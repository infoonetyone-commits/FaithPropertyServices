const defaultItems = [
  "COMMERCIAL CLEANING",
  "RESIDENTIAL CLEANING",
  "NDIS APPROVED",
  "13+ YEARS EXPERIENCE",
  "FULLY INSURED & COMPLIANT",
  "24HR ISSUE RESPONSE",
];

// Repeated enough times that the belt is always wider than the viewport,
// then duplicated once more below — animating from -50% to 0% scrolls the
// doubled track and loops seamlessly the instant the copies line back up.
const REPEAT = 4;

export default function MarqueeRibbon({ items = defaultItems }: { items?: string[] }) {
  const unit = Array.from({ length: REPEAT }, () => items).flat();
  const track = [...unit, ...unit];

  return (
    <div className="relative overflow-hidden border-y border-cyan/20 bg-navy-deep py-4">
      <div className="flex w-max animate-marquee gap-8" style={{ animationDuration: `${REPEAT * 18}s` }}>
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-body text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
        ))}
      </div>
    </div>
  );
}
