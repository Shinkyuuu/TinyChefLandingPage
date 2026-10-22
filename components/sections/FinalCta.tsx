import { Reveal } from "@/components/Reveal";
import { StoreBadge } from "@/components/StoreBadge";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <div className="rounded-4xl bg-primary px-8 py-16 text-primary-ink md:px-12">
        <Reveal>
          <h2 className="max-w-170 text-4xl md:text-5xl">Your next favourite recipe is one follow away</h2>
          <p className="mt-6 max-w-170 text-lg">Free to download and use.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
