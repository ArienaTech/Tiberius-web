export default function Contact() {
  return (
    <>
<section id="contact" className="contact" aria-label="Contact">
    <span className="eyebrow" data-reveal>Free SEO audit — no obligation</span>
    <h2 className="contact-title split-lines" data-split>Ready to outrank your competitors?</h2>
    <a className="btn-pill" href="mailto:hello@tiberius.co.nz?subject=Strategy%20call%20request" data-magnetic style={{marginBottom:'34px'}}>
      <span className="btn-fill"></span>
      <span className="btn-label">Book a free strategy call</span>
      <span className="btn-arrow">→</span>
    </a>
    <a className="contact-email" href="mailto:hello@tiberius.co.nz" data-magnetic>hello@tiberius.co.nz</a>
    <div className="contact-meta" data-reveal>
      <span>73 The Strand, Parnell, Auckland 1010 — HQ</span>
      <span>Serving NZ &amp; Australia</span>
      <span>Replies within one business day</span>
      <span id="local-time">AKL 00:00</span>
    </div>
  </section>
    </>
  );
}
