import type { Diet } from "@/lib/diets";

export function DietBadge({ abbr, label, bg, fg }: Diet) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold"
      style={{ backgroundColor: bg, color: fg }}
    >
      <span aria-hidden="true" className="text-xs">
        {abbr}
      </span>
      {label}
    </span>
  );
}
