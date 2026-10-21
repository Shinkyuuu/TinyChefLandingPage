import Image from "next/image";

type Props = {
  /** Path under /public/screens. When omitted, a labelled placeholder renders instead. */
  src?: string;
  alt: string;
  className?: string;
};

// Outer radius 32px with 8px of bezel gives the screen a 24px radius (outer minus gap).
export function DeviceFrame({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative w-64 shrink-0 rounded-4xl sm:w-72 border border-border bg-fg p-2 ${className}`}>
      <div className="relative aspect-9/19 overflow-hidden rounded-3xl bg-bg">
        {src ? (
          <Image src={src} alt={alt} fill sizes="288px" className="object-cover" priority />
        ) : (
          <PlaceholderScreen label={alt} />
        )}
      </div>
    </div>
  );
}

function PlaceholderScreen({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="flex h-full flex-col gap-3 p-4">
      <p className="pt-6 font-display text-2xl text-fg">Following</p>
      {[
        { tint: "bg-primary-light", pill: "Vegetarian", pillClass: "bg-[#e5f2d8] text-[#355d2a]" },
        { tint: "bg-surface", pill: "Nut Free", pillClass: "bg-[#f2d8d2] text-[#8a3f36]" },
      ].map((card) => (
        <div key={card.pill} className="flex flex-1 flex-col justify-end gap-2 rounded-2xl border border-border p-3">
          <div className={`flex-1 rounded-xl ${card.tint}`} />
          <span className={`w-max rounded-full px-2 py-0.5 text-xs font-semibold ${card.pillClass}`}>{card.pill}</span>
        </div>
      ))}
      <p className="pb-1 text-center text-xs text-muted">Screen placeholder</p>
    </div>
  );
}
