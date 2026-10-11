import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="container">
      <article className="prose">
        <h1>Privacy Policy</h1>
        <p className="meta">Last updated: {site.lastUpdated}</p>
        <p className="notice">
          Placeholder text. This must be replaced with a policy that accurately describes
          what {site.name} collects and how it is used, and be reviewed before publishing.
          Apple and Google both require an accurate, public privacy policy URL.
        </p>

        <h2>1. Information we collect</h2>
        <p>TODO: List the data the app collects (e.g. account info, content you create, usage/analytics data, device info).</p>

        <h2>2. How we use information</h2>
        <p>TODO: Describe the purposes for each category of data.</p>

        <h2>3. Where data is stored and who we share it with</h2>
        <p>TODO: Describe storage (e.g. cloud hosting providers) and any third-party processors or SDKs.</p>

        <h2>4. Data retention and deletion</h2>
        <p>TODO: Explain how long data is kept and how users can request deletion.</p>

        <h2>5. Children&apos;s privacy</h2>
        <p>TODO: State your policy regarding users under 13 (or applicable age).</p>

        <h2>6. Your rights</h2>
        <p>TODO: Describe access, correction and deletion rights that apply (e.g. GDPR, CCPA).</p>

        <h2>7. Changes to this policy</h2>
        <p>TODO: Explain how updates will be communicated.</p>

        <h2>8. Contact us</h2>
        <p>Questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
      </article>
    </div>
  );
}
