import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="container">
      <article className="prose">
        <h1>Terms of Service</h1>
        <p className="meta">Last updated: {site.lastUpdated}</p>
        <p className="notice">
          Placeholder text. Replace with real terms reviewed by a qualified professional
          before publishing.
        </p>

        <h2>1. Acceptance of terms</h2>
        <p>TODO: By using {site.name} you agree to these terms.</p>

        <h2>2. Use of the app</h2>
        <p>TODO: Describe permitted and prohibited use.</p>

        <h2>3. Accounts</h2>
        <p>TODO: Responsibilities for account security and accuracy of information.</p>

        <h2>4. User content</h2>
        <p>TODO: Ownership and license terms for content users create or upload.</p>

        <h2>5. Intellectual property</h2>
        <p>TODO: Describe ownership of the app, branding and content.</p>

        <h2>6. Disclaimers and limitation of liability</h2>
        <p>TODO: Warranty disclaimers and liability limits.</p>

        <h2>7. Termination</h2>
        <p>TODO: When and how accounts or access may be terminated.</p>

        <h2>8. Changes to these terms</h2>
        <p>TODO: Explain how updates will be communicated.</p>

        <h2>9. Contact us</h2>
        <p>Questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
      </article>
    </div>
  );
}
