import StatsSection from "../sections/StatsSection";
import CTASection from "../sections/CTASection";

function About() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">WHO WE ARE</div>
          <h1>
            Empowering the Next <span className="grad">Generation</span>
          </h1>
          <p>
            RAO bridges the critical gap between academic curriculum and high-growth
            industry standards through hands-on technical acceleration.
          </p>
        </div>
      </div>

      <section className="container">
        <div className="about-grid">
          <div>
            <div className="eyebrow">OUR MISSION</div>
            <h2>Fostering talent, engineering the future.</h2>
          </div>

          <div>
            <p>
              At RAO, we believe that practical software craftsmanship cannot be learned
              purely from textbooks. Our mission is to immerse promising students in
              real-world software architecture, rigorous code reviews, and production
              deployments.
            </p>
            <p>
              By collaborating closely with leading tech companies and visionary startups,
              we design our training around modern industry needs—ensuring every graduate
              steps directly into the workforce with confidence and demonstrated ability.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </div>
  );
}

export default About;
