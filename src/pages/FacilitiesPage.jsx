import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import PageHeroDark from '../components/PageHeroDark';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import { aboutMachinery, facilityHighlights } from '../data/innerPages';
import { ArrowRightIcon } from '../components/icons/Icons';

export default function FacilitiesPage() {
  usePageMeta(
    'Manufacturing Facility | UMA Metal Craft — Nagpur',
    'Tour our 20,000 sq ft Nagpur manufacturing facility — fibre laser cutters, CNC press brakes, VMC machining centres, and certified welding stations.'
  );

  return (
    <>
      <PageHeroDark
        tag="Nagpur, Maharashtra, India"
        title="Our Manufacturing Facility"
        lead="A 20,000 sq ft state-of-the-art facility housing fibre laser cutters, CNC press brakes, VMC machining centres, and full welding and finishing capabilities."
        actions={false}
      />

      <section className="section inner-section">
        <div className="container">
          <div className="facility-gallery">
            <Reveal className="facility-gallery__main">
              <img src="/assets/factory-wide.jpg" alt="Wide view of UMA Metal Craft factory floor" loading="lazy" />
            </Reveal>
            <Reveal delay={80} className="facility-gallery__secondary">
              <img src="/assets/factory-close.jpg" alt="Close-up of CNC manufacturing equipment" loading="lazy" />
              <img src="/assets/hero-cnc.jpg" alt="CNC laser cutting in operation" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section inner-section inner-section--muted">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              On the Factory Floor
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Facility <span className="title-accent">Highlights</span></h2>
          </Reveal>
          <ul className="facility-list facility-list--centered">
            {facilityHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Equipment
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Manufacturing <span className="title-accent">Machinery</span></h2>
          </Reveal>
          <div className="machinery-grid">
            {aboutMachinery.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="machinery-card">
                <h3 className="machinery-card__title">{item.title}</h3>
                <p className="machinery-card__specs">{item.specs}</p>
                <span className="machinery-card__materials">{item.materials}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/contact" className="btn btn--primary">
                Schedule a Facility Visit
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <InnerPageCta
        title="Ready to See Our Capabilities in Action?"
        lead="Send us your drawings for a detailed quote, or contact us to arrange a facility tour."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
