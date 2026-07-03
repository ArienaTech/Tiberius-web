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
        <blockquote className="testi-quote">Tiberius took us from page four to page one for “our trade + Auckland” in five months. The phone rings every day now — we hired two more staff to keep up.</blockquote>
        <figcaption className="testi-person">
          <span className="testi-avatar"></span>
          <span><b>Mark T.</b><span>Owner — Auckland trades company</span></span>
        </figcaption>
      </figure>
      <figure className="testi-slide">
        <blockquote className="testi-quote">Our old agency reported clicks. Tiberius reports revenue. Same ad budget, 2.8x the return — and the monthly report actually makes sense to a business owner.</blockquote>
        <figcaption className="testi-person">
          <span className="testi-avatar"></span>
          <span><b>Sarah L.</b><span>Marketing Lead — NZ e-commerce brand</span></span>
        </figcaption>
      </figure>
      <figure className="testi-slide">
        <blockquote className="testi-quote">The AI chatbot they built qualifies leads while we sleep. We wake up to booked strategy calls instead of an inbox of tyre-kickers.</blockquote>
        <figcaption className="testi-person">
          <span className="testi-avatar"></span>
          <span><b>James R.</b><span>Founder — B2B SaaS platform</span></span>
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
