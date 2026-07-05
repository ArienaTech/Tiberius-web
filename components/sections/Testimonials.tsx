export default function Testimonials() {
  return (
    <>
<section id="voices" className="testimonials" aria-label="Testimonials">
    <div className="sec-head">
      <span className="eyebrow" data-reveal>In their words</span>
      <span className="sec-index" data-reveal>/ 05 — VOICES</span>
    </div>
    <div className="testi-stage" id="testi-stage">
      <figure className="testi-slide is-active">
        <blockquote className="testi-quote">Great service, great attention to detail, made the whole process stress free and easy so I could focus on my upcoming fight.</blockquote>
        <figcaption className="testi-person">
          <span className="testi-avatar"></span>
          <span><b>Haze &ldquo;The Huntsman&rdquo; Hepi</b><span>BKFC Athlete — Hard2Kill Apparel</span></span>
        </figcaption>
      </figure>
      <figure className="testi-slide">
        <blockquote className="testi-quote">Our business is in a completely different position thanks to Tiberius. Profound impact working with these guys.</blockquote>
        <figcaption className="testi-person">
          <span className="testi-avatar"></span>
          <span><b>The Natural Funeral Company</b><span>naturalfuneral.nz</span></span>
        </figcaption>
      </figure>
      <figure className="testi-slide">
        <blockquote className="testi-quote">Tiberius Digital built us a completely custom site from scratch — new logo, online store, Afterpay integration. The process was smooth, professional and the result exceeded our expectations.</blockquote>
        <figcaption className="testi-person">
          <span className="testi-avatar"></span>
          <span><b>Grease Monkey Team</b><span>greasemonkeyshop.co.nz</span></span>
        </figcaption>
      </figure>
    </div>
    <div className="testi-nav">
      <button className="testi-btn" id="testi-prev" aria-label="Previous testimonial">←</button>
      <button className="testi-btn" id="testi-next" aria-label="Next testimonial">→</button>
      <span className="testi-progress"><i id="testi-progress"></i></span>
      <span className="testi-count"><b id="testi-current">01</b> / 03</span>
    </div>
  </section>
    </>
  );
}
