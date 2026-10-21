import { LegalPage, legalMetadata } from "@/components/LegalPage";

const slug = "delete-account";

export const metadata = legalMetadata(slug);

export default function Page() {
  return <LegalPage slug={slug} />;
}
