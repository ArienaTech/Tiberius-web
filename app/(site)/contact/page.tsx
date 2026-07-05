import type { Metadata } from "next";
import { PageHero, BlockHead } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Contact Us | Free Marketing Consultation | Tiberius Digital",
  description: "Let's discuss how we can help your business grow. Our team is ready to answer your questions and build a strategy that works.",
  alternates: { canonical: "https://www.tiberius.co.nz/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        lede="Let's discuss how we can help your business grow. Our team is ready to answer your questions and build a strategy that works."
        ctaLabel="Send Message"
        ctaSubject="Contact — general enquiry"
        to="support@tiberius.co.nz"
      />

      <section className="content-section">
        <BlockHead eyebrow="Where to find us" title="Our Offices" />
        <div className="card-grid" style={{ ["--cols" as string]: 2 }}>
          <div className="card-cell">
            <b>New Zealand</b>
            <p>73 The Strand, Parnell, Auckland 1010, New Zealand</p>
          </div>
          <div className="card-cell">
            <b>Canada</b>
            <p>201 King St, London, Ontario, Canada</p>
          </div>
        </div>
        <div className="info-strip">
          <span>
            <b>Business Hours</b>
          </span>
          <span>Monday – Friday: 9:00am – 5:00pm (NZST)</span>
          <span>Saturday – Sunday: By appointment</span>
        </div>
      </section>

      <section className="content-section narrow">
        <BlockHead eyebrow="Get in touch" title="Send Us a Message" />
        <p className="lede" style={{ marginBottom: 24 }}>
          Fill out the form below and our team will be in touch within 24 hours.
        </p>
        <form className="simple-form" action="mailto:support@tiberius.co.nz" method="get" encType="text/plain">
          <div>
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" type="text" required />
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
            <label htmlFor="company">Company / Organisation</label>
            <input id="company" name="company" type="text" />
          </div>
          <div>
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-pill">
              <span className="btn-fill"></span>
              <span className="btn-label">Send Message</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
