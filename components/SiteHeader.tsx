export default function SiteHeader() {
  return (
    <>
<header className="site-header">
  <a className="brand" href="#top" data-scroll-to="#top">TIBERIUS<sup>®</sup></a>
  <nav className="main-nav">
    <a href="#services" data-scroll-to="#services"><i>01</i>SERVICES</a>
    <a href="#work" data-scroll-to="#work"><i>02</i>WORK</a>
    <a href="#process" data-scroll-to="#process"><i>03</i>PROCESS</a>
    <a href="#faq" data-scroll-to="#faq"><i>04</i>FAQ</a>
  </nav>
  <a className="header-cta" href="#contact" data-scroll-to="#contact">BOOK A STRATEGY CALL</a>
</header>
    </>
  );
}
