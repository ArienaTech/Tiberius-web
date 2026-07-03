export default function SiteFooter() {
  return (
    <>
<footer className="site-footer">
    <div className="footer-top">
      <div>
        <div className="footer-brand">TIBERIUS<sup style={{fontSize:'.35em',color:'var(--brass)'}}>®</sup></div>
        <p className="lede" style={{marginTop:'18px',maxWidth:'34ch',fontSize:'14px'}}>Auckland’s full-service digital growth agency — SEO, Google Ads, website development and AI automation.</p>
      </div>
      <div className="footer-cols">
        <div className="footer-col">
          <h4>Studio</h4>
          <a href="#services" data-scroll-to="#services">Services</a>
          <a href="#work" data-scroll-to="#work">Work</a>
          <a href="#process" data-scroll-to="#process">Process</a>
          <a href="#faq" data-scroll-to="#faq">FAQ</a>
        </div>
        <div className="footer-col">
          <h4>Social</h4>
          <a href="#" rel="noopener">Instagram</a>
          <a href="#" rel="noopener">Twitter / X</a>
          <a href="#" rel="noopener">LinkedIn</a>
          <a href="#" rel="noopener">Awwwards</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@tiberius.co.nz">hello@tiberius.co.nz</a>
          <a href="mailto:audits@tiberius.co.nz">audits@tiberius.co.nz</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Tiberius Digital Ltd.</span>
      <span>Auckland, New Zealand</span>
      <span>All rights reserved</span>
    </div>
  </footer>
    </>
  );
}
