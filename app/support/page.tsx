import { LegalPage, legalMetadata } from "@/components/LegalPage";

const slug = "support";

export const metadata = legalMetadata(slug);

export default function Page() {
  return <LegalPage slug={slug} />;
}
