import {
  BookmarksSimpleIcon,
  DotsSixVerticalIcon,
  LinkSimpleIcon,
  MagnifyingGlassIcon,
  PaletteIcon,
  PencilSimpleLineIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import { Reveal } from "@/components/Reveal";

const card = "flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6";

function IconBubble({ Icon }: { Icon: Icon }) {
  return (
    <span className="grid size-12 place-items-center rounded-full bg-primary-light text-accent">
      <Icon size={24} weight="regular" aria-hidden="true" />
    </span>
  );
}

function Card({ Icon, title, children, className = "" }: { Icon: Icon; title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`${card} ${className}`}>
      <IconBubble Icon={Icon} />
      <h3 className="text-2xl text-fg">{title}</h3>
      <p className="text-base text-muted">{children}</p>
    </div>
  );
}

const ingredients = ["200 g plain flour", "2 eggs", "250 ml milk", "1 tbsp butter, melted"];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <Reveal>
        <h2 className="max-w-170 text-4xl text-fg md:text-5xl">Everything you need to cook, share and save</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className={`${card} lg:flex-row lg:items-center lg:gap-8`}>
            <div className="flex flex-1 flex-col gap-4">
              <IconBubble Icon={PencilSimpleLineIcon} />
              <h3 className="text-2xl text-fg">Write a recipe once, share it in a minute</h3>
              <p className="text-base text-muted">
                Add ingredients with quantities and units, steps with timers, prep and cook times, servings and
                nutrition. Drag ingredients into order, and save a draft to finish later.
              </p>
            </div>
            <ul aria-label="Example ingredient list" className="flex flex-1 flex-col gap-2 rounded-2xl bg-bg p-2">
              {ingredients.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-base text-fg">
                  <DotsSixVerticalIcon size={20} className="text-secondary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Card Icon={LinkSimpleIcon} title="Bring in recipes you already found">
            Paste a web link or take a photo of a recipe and TinyChef turns it into a recipe you can edit.
          </Card>
        </Reveal>
        <Reveal>
          <Card Icon={BookmarksSimpleIcon} title="Keep what you save organised">
            Sort recipes into named collections. Keep a collection private or make it public.
          </Card>
        </Reveal>
        <Reveal delay={100}>
          <Card Icon={UsersThreeIcon} title="See new recipes from cooks you follow">
            Your feed shows the latest recipes from people you follow, and a banner tells you when new ones arrive.
          </Card>
        </Reveal>
        <Reveal delay={200}>
          <Card Icon={MagnifyingGlassIcon} title="Search that narrows down fast">
            Search for a recipe, then use filters to cut the results down to what you want to cook.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2 lg:col-span-3">
          <div className={`${card} lg:flex-row lg:items-center lg:justify-between lg:gap-8`}>
            <div className="flex max-w-170 flex-col gap-4">
              <IconBubble Icon={PaletteIcon} />
              <h3 className="text-2xl text-fg">Make it look like your kitchen</h3>
              <p className="text-base text-muted">
                Pick from five themes, and choose whether ingredient quantities show as fractions or decimals.
              </p>
            </div>
            <ul aria-label="Themes" className="flex flex-wrap gap-2">
              {["Beige", "Light", "Dark", "Olivia Dark", "Cozy"].map((t) => (
                <li key={t} className="rounded-full border border-border bg-bg px-3 py-2 text-sm font-semibold text-fg">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
