import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Reveal } from "@/components/Reveal";
import { StoreBadge } from "@/components/StoreBadge";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-32 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-24 lg:pt-40">
      <div>
        <Reveal>
          <h1 className="max-w-170 text-5xl text-fg lg:text-6xl">
            Recipes from cooks you follow,
            <br className="hidden sm:block" /> without the ads.
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-170 text-lg text-muted">
            TinyChef is a social recipe app. Publish your own recipes, import ones from a web link or a photo, and save
            your favourites into collections.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <CheckCircleIcon size={20} weight="fill" className="text-accent" aria-hidden="true" />
            Free to download and use. No ads.
          </p>
        </Reveal>
      </div>
      <Reveal delay={200} className="justify-self-center">
        <DeviceFrame alt="TinyChef feed screen, placeholder until the real screenshot is added" />
      </Reveal>
    </section>
  );
}
