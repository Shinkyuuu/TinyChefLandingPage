import { AppleLogoIcon, GooglePlayLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

type Props = { store: "apple" | "google" };

const copy = {
  apple: { label: "Download on the", name: "App Store", Icon: AppleLogoIcon },
  google: { label: "Get it on", name: "Google Play", Icon: GooglePlayLogoIcon },
};

const base =
  "inline-flex min-w-48 items-center gap-3 rounded-xl px-4 py-2 text-left transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]";

export function StoreBadge({ store }: Props) {
  const { label, name, Icon } = copy[store];
  const href = store === "apple" ? site.appStoreUrl : site.playStoreUrl;
  const inner = (
    <>
      <Icon size={28} weight="fill" aria-hidden="true" />
      <span className="flex flex-col">
        <span className="text-xs">{href ? label : "Coming soon on"}</span>
        <span className="text-lg font-semibold leading-6">{name}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span aria-disabled="true" className={`${base} cursor-not-allowed border border-border bg-surface text-muted`}>
        {inner}
      </span>
    );
  }
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={`${base} bg-fg text-bg hover:-translate-y-0.5 active:translate-y-px active:scale-[0.98]`}
    >
      {inner}
    </a>
  );
}
