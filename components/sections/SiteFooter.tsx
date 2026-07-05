import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
<footer className="site-footer">
    <div className="footer-top">
      <div>
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Tiberius/TiberiusLogo.svg"
            alt="Tiberius Digital logo"
            width={56}
            height={56}
            loading="lazy"
          />
          TIBERIUS<sup style={{fontSize:'.35em',color:'var(--brass)'}}>®</sup>
        </div>
        <p className="lede" style={{marginTop:'18px',maxWidth:'34ch',fontSize:'14px'}}>No fluff. No bloated overheads. No excuses. Just results.</p>
      </div>
      <div className="footer-cols">
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/services">All Services</Link>
          <Link href="/services/digital-strategy">Digital Strategy</Link>
          <Link href="/services/marketing-strategy">Marketing Strategy</Link>
          <Link href="/contact">Free Consultation</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/shop">Shop</Link>
        </div>
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <span style={{display:'block',padding:'5px 0',fontSize:'14px',color:'var(--ink-2)'}}>73 The Strand, Parnell, Auckland 1010, NZ</span>
          <a href="mailto:hello@tiberius.co.nz">hello@tiberius.co.nz</a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Tiberius Digital Marketing. All rights reserved.</span>
      <span style={{display:'flex',gap:'20px'}}>
        <a href="https://facebook.com/TiberiusDigital" target="_blank" rel="noopener">Facebook</a>
        <a href="https://instagram.com/tiberius.digital" target="_blank" rel="noopener">Instagram</a>
        <a href="https://twitter.com/TiberiusDigit" target="_blank" rel="noopener">Twitter / X</a>
      </span>
    </div>
  </footer>
    </>
  );
}
