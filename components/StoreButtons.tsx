import { site } from "@/lib/site";

type Props = { label: string; store: string; href: string | null };

function StoreButton({ label, store, href }: Props) {
  if (!href) {
    return (
      <span className="store-button" aria-disabled="true">
        <small>Coming soon on</small>
        <strong>{store}</strong>
      </span>
    );
  }
  return (
    <a className="store-button" href={href} rel="noopener noreferrer">
      <small>{label}</small>
      <strong>{store}</strong>
    </a>
  );
}

export function StoreButtons() {
  return (
    <div className="store-buttons">
      <StoreButton label="Download on the" store="App Store" href={site.appStoreUrl} />
      <StoreButton label="Get it on" store="Google Play" href={site.playStoreUrl} />
    </div>
  );
}
