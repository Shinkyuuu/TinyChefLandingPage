import { FlagIcon, ProhibitIcon, ShieldCheckIcon, TrashIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    Icon: ShieldCheckIcon,
    title: "Scanned and reviewed",
    body: "Automated scanning and human moderators check content. Content can be hidden for a short time while it is reviewed.",
  },
  {
    Icon: FlagIcon,
    title: "Report what does not belong",
    body: "Report a recipe, story or profile from the app and our team will take a look.",
  },
  {
    Icon: ProhibitIcon,
    title: "Block accounts",
    body: "Block anyone you do not want to hear from. You can review blocked accounts in your settings.",
  },
  {
    Icon: TrashIcon,
    title: "Delete your account",
    body: "Remove your account and your data from inside the app, any time.",
  },
];

export function Safety() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h2 className="max-w-170 text-4xl text-fg md:text-5xl">A friendly kitchen to share in</h2>
        <p className="mt-6 max-w-170 text-lg text-muted">
          TinyChef has tools for keeping the community respectful, and you stay in control of your own account.
        </p>
      </Reveal>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, title, body }, i) => (
          <li key={title}>
            <Reveal delay={i * 100} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
                <span className="grid size-12 place-items-center rounded-full bg-primary-light text-accent">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-2xl text-fg">{title}</h3>
                <p className="text-base text-muted">{body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
