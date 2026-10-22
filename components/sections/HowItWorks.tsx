import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Follow cooks and browse",
    body: "Your feed fills with recipes from the people you follow.",
  },
  {
    title: "Save what you want to cook",
    body: "Like a recipe or save it into a collection. Dislikes stay private and are never shown to the creator.",
  },
  {
    title: "Share your own",
    body: "Write a recipe or import one, add dietary badges, then publish it or keep it private.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <Reveal>
        <h2 className="max-w-170 text-4xl text-fg md:text-5xl">How it works</h2>
      </Reveal>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 100} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
                <span className="grid size-12 place-items-center rounded-full bg-primary font-display text-2xl text-primary-ink">
                  {i + 1}
                </span>
                <h3 className="text-2xl text-fg">{s.title}</h3>
                <p className="text-base text-muted">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
