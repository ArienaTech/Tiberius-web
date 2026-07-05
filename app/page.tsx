import Stage from "@/components/Stage";
import Loader from "@/components/Loader";
import SiteHeader from "@/components/SiteHeader";
import Experience from "@/components/Experience";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Stack from "@/components/sections/Stack";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <Stage />
      <Loader />
      <SiteHeader intro />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="top">
            <Hero />
            <Manifesto />
            <Services />
            <Marquee />
            <Work />
            <Process />
            <Stack />
            <Testimonials />
            <Partners />
            <Faq />
            <Contact />
            <SiteFooter />
          </main>
        </div>
      </div>
      <Experience />
    </>
  );
}
