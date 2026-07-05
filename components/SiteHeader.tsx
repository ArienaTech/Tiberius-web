import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
<header className="site-header">
  <Link className="brand" href="/">TIBERIUS<sup>®</sup></Link>
  <nav className="main-nav">
    <Link href="/services"><i>01</i>SERVICES</Link>
    <Link href="/about-us"><i>02</i>ABOUT</Link>
    <Link href="/global-results"><i>03</i>GLOBAL RESULTS</Link>
    <Link href="/case-studies"><i>04</i>LOCAL RESULTS</Link>
    <Link href="/contact"><i>05</i>CONTACT</Link>
  </nav>
  <Link className="header-cta" href="/contact">BOOK A STRATEGY CALL</Link>
</header>
    </>
  );
}
