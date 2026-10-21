import { WordReveal } from "@/components/WordReveal";

export function TaglineReveal() {
  return (
    <section aria-label="Our promise" className="mx-auto max-w-6xl px-4 py-24 md:py-24">
      <WordReveal
        lines={[
          "Your kitchen, your people, your recipes.",
          "Cook what you love, save what you find, share what you make.",
        ]}
      />
    </section>
  );
}
