import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <Reveal>
        <h2 className="max-w-170 text-4xl text-fg md:text-5xl">Questions, answered</h2>
      </Reveal>
      <div className="mt-12 flex max-w-170 flex-col gap-3">
        {faq.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-border bg-surface transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] open:bg-primary-light"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-4 text-lg font-semibold text-fg [&::-webkit-details-marker]:hidden">
              {item.q}
              <CaretDownIcon
                size={20}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-180"
              />
            </summary>
            <p className="px-4 pb-4 text-base text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
