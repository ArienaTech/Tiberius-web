import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tiberius Digital",
  description: "How Tanama Limited trading as Tiberius Digital collects, uses and protects your information.",
  alternates: { canonical: "https://www.tiberius.co.nz/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="content-section narrow" style={{ paddingTop: "clamp(150px,20vw,210px)" }}>
      <h1 className="display page-title" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
        Privacy Policy
      </h1>
      <p className="legal-meta">
        Last updated 16 March 2026 · Governed by New Zealand law · Tanama Limited trading as Tiberius Digital, 73
        The Strand, Parnell, Auckland, New Zealand · support@tiberius.co.nz
      </p>
      <div className="prose">
        <p>
          This policy explains how Tanama Limited, trading as Tiberius Digital (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
          handles personal information under the Privacy Act 2020 (NZ) and the 13 Information Privacy Principles.
        </p>

        <h2>1. Introduction</h2>
        <p>This policy applies to tiberius.co.nz and tiberius.digital, and to the data we collect as part of delivering our services.</p>

        <h2>2. Who We Are</h2>
        <p>Tanama Limited trading as Tiberius Digital, based at 73 The Strand, Parnell, Auckland 1010, New Zealand.</p>

        <h2>3. Information We Collect</h2>
        <p>Direct information you provide to us, information collected automatically, cookies, and client business data shared as part of an engagement.</p>

        <h2>4. Legal Basis for Processing</h2>
        <p>We process personal information to perform our services, meet legal obligations, and pursue legitimate business interests.</p>

        <h2>5. How We Use Your Information</h2>
        <p>To deliver and improve our services, communicate with you, and meet contractual and legal obligations.</p>

        <h2>6. Direct Marketing &amp; Opt-Out</h2>
        <p>You can opt out of marketing communications at any time using the unsubscribe link or by contacting us directly.</p>

        <h2>7. Sharing Your Information</h2>
        <p>We share information with service providers that support our operations, including Google, Meta, HubSpot, Xero, Stripe and Cloudflare.</p>

        <h2>8. International Data Transfers</h2>
        <p>Some providers we use store or process data outside New Zealand. We take reasonable steps to ensure equivalent protection.</p>

        <h2>9. Data Retention</h2>
        <p>Client records are retained for 7 years; analytics data is retained for 26 months.</p>

        <h2>10. Data Security</h2>
        <p>We use reasonable technical and organisational measures to protect personal information from loss, misuse and unauthorised access.</p>

        <h2>11. Data Breach Notification</h2>
        <p>We follow the notifiable privacy breach requirements under section 113 of the Privacy Act 2020.</p>

        <h2>12. Your Privacy Rights</h2>
        <p>
          You may request access (responded to within 20 working days), correction, deletion, restriction,
          objection, portability, or withdraw consent at any time.
        </p>

        <h2>13. Automated Decision-Making</h2>
        <p>We do not make solely automated decisions that produce legal or similarly significant effects about you.</p>

        <h2>14. Do Not Track</h2>
        <p>Our systems currently do not respond to browser Do Not Track signals.</p>

        <h2>15. Children&apos;s Privacy</h2>
        <p>Our services are not directed at, and we do not knowingly collect information from, anyone under 16.</p>

        <h2>16. Third-Party Websites</h2>
        <p>Our site may link to third-party websites; we are not responsible for their privacy practices.</p>

        <h2>17. Social Media</h2>
        <p>Interactions with our social media profiles are also governed by the relevant platform&apos;s own privacy policy.</p>

        <h2>18. Accuracy</h2>
        <p>We take reasonable steps to keep personal information accurate, complete and up to date.</p>

        <h2>19. Changes</h2>
        <p>We may update this policy from time to time; the &ldquo;last updated&rdquo; date above reflects the current version.</p>

        <h2>20. Contact &amp; Complaints</h2>
        <p>
          Contact us at support@tiberius.co.nz. You may also complain to the Office of the Privacy Commissioner —
          privacy.org.nz, 0800 803 909.
        </p>
      </div>
    </section>
  );
}
