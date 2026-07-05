import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Tiberius Digital",
  description: "The terms governing engagements with Tanama Limited trading as Tiberius Digital.",
  alternates: { canonical: "https://www.tiberius.co.nz/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <section className="content-section narrow" style={{ paddingTop: "clamp(150px,20vw,210px)" }}>
      <h1 className="display page-title" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
        Terms of Service
      </h1>
      <p className="legal-meta">
        Last updated 16 March 2026 · Governed by New Zealand law · Tanama Limited trading as Tiberius Digital, 73
        The Strand, Parnell, Auckland, New Zealand · support@tiberius.co.nz
      </p>
      <div className="prose">
        <p>
          These are business-to-business terms. The Consumer Guarantees Act 1993 is excluded to the extent
          permitted by law for clients acquiring services for business purposes.
        </p>

        <h2>1. Definitions</h2>
        <p>Defined terms used throughout these terms, including &ldquo;Company&rdquo;, &ldquo;Client&rdquo; and &ldquo;Services&rdquo;.</p>

        <h2>2. Engagement &amp; Statements of Work</h2>
        <p>Variations to scope must be agreed in writing. Clients are asked to respond to requests within 5 business days to keep projects moving.</p>

        <h2>3. Fees &amp; Payment</h2>
        <p>
          All fees are in NZD plus GST. Project work is typically 50% deposit and 50% on completion; retainers are
          billed monthly in advance and are due within 20 days. Late payments accrue interest at 2% per month,
          compounding. Invoice disputes must be raised within 7 days. Ownership of deliverables is retained until
          full payment; IP assigns to the client on full payment.
        </p>

        <h2>4. Confidentiality</h2>
        <p>Confidentiality obligations survive termination of the engagement for 3 years.</p>

        <h2>5. Intellectual Property</h2>
        <p>
          Covers the client content licence, the Company&apos;s background IP, third-party elements used in
          deliverables, and our right to display completed work in our portfolio.
        </p>

        <h2>6. Project Dormancy &amp; Termination</h2>
        <p>
          A project is treated as dormant after 30 days of client unresponsiveness, following a 7-day notice.
          Either party may terminate for convenience on 30 days notice; a 25% kill fee applies to unbilled fees.
          Reinstating a dormant project carries a $500 reinstatement fee.
        </p>

        <h2>7. Warranties</h2>
        <p>
          Work carries a 30-day warranty period following delivery. We do not guarantee specific rankings or ROAS
          outcomes.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>Our liability is capped at the fees paid by the client in the prior 12 months.</p>

        <h2>9. Indemnity</h2>
        <p>Each party indemnifies the other for losses arising from their own breach of these terms.</p>

        <h2>10. Submissions</h2>
        <p>Unsolicited ideas submitted to us become Company property, and moral rights in such submissions are waived.</p>

        <h2>11. Electronic Communications &amp; Signatures</h2>
        <p>Electronic communications and signatures are accepted as valid under these terms.</p>

        <h2>12. Unsolicited Information</h2>
        <p>We accept no obligation of confidentiality over information provided to us outside an active engagement.</p>

        <h2>13. Force Majeure</h2>
        <p>Neither party is liable for delays caused by events outside its reasonable control, for up to 60 days.</p>

        <h2>14. Privacy</h2>
        <p>Personal information is handled in accordance with our Privacy Policy.</p>

        <h2>15. Dispute Resolution</h2>
        <p>
          Disputes are first addressed through direct negotiation for 15 business days, then AMINZ mediation, and
          finally the Auckland courts under New Zealand law.
        </p>

        <h2>16. General</h2>
        <p>Standard boilerplate provisions including severability, assignment, and entire agreement.</p>

        <h2>17. Contact</h2>
        <p>support@tiberius.co.nz — 73 The Strand, Parnell, Auckland 1010, New Zealand.</p>
      </div>
    </section>
  );
}
