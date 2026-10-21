import { LegalPage, legalMetadata } from "@/components/LegalPage";

const slug = "privacy";

export const metadata = legalMetadata(slug);

export default function Page() {
  return <LegalPage slug={slug} />;
}
