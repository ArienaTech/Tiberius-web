import type { Metadata } from "next";
import { PageHero } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Website Design Onboarding | Tiberius Digital",
  description: "Let's get to know your project better.",
  alternates: { canonical: "https://www.tiberius.co.nz/onboarding" },
};

export default function OnboardingPage() {
  return (
    <>
      <PageHero
        title="Website Design Onboarding"
        lede="Let's get to know your project better."
        ctaLabel="Start Onboarding"
        ctaSubject="Onboarding — step 1 contact information"
      />

      <section className="content-section narrow">
        <span className="eyebrow">Step 1 of 6 — Contact Information</span>
        <form
          className="simple-form"
          action="mailto:hello@tiberius.co.nz?subject=Onboarding%20—%20Step%201%20Contact%20Information"
          method="get"
          encType="text/plain"
          style={{ marginTop: 24 }}
        >
          <div>
            <label htmlFor="fullName">Full Name*</label>
            <input id="fullName" name="fullName" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email Address*</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" />
          </div>
          <div>
            <label htmlFor="company">Company Name</label>
            <input id="company" name="company" type="text" />
          </div>
          <div className="form-actions" style={{ display: "flex", gap: 16 }}>
            <button type="button" className="btn-pill" disabled style={{ opacity: 0.4, cursor: "not-allowed" }}>
              <span className="btn-label">Previous</span>
            </button>
            <button type="submit" className="btn-pill">
              <span className="btn-fill"></span>
              <span className="btn-label">Next</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </form>
        <p className="lede" style={{ marginTop: 32, fontSize: 13 }}>
          Submitting step 1 sends your details straight to our team — we&apos;ll follow up to walk through the
          rest of your project brief directly rather than a long online form.
        </p>
      </section>
    </>
  );
}
