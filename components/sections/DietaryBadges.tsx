import { DietBadge } from "@/components/DietBadge";
import { Reveal } from "@/components/Reveal";
import { diets } from "@/lib/diets";

export function DietaryBadges() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="rounded-4xl bg-primary-light p-8 md:p-12">
        <Reveal>
          <h2 className="max-w-170 text-4xl text-fg md:text-5xl">Dietary badges on every recipe</h2>
          <p className="mt-6 max-w-170 text-lg text-muted">
            Tag a recipe once and anyone browsing can see at a glance whether it fits how they eat. Hide the badges you
            never use so your feed stays clean.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul aria-label="Dietary badges" className="mt-8 flex flex-wrap gap-3">
            {diets.map((d) => (
              <li key={d.label}>
                <DietBadge {...d} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
