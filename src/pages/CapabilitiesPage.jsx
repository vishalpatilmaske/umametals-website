import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import PageHeroDark from '../components/PageHeroDark';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import {
  servicesList,
  servicesWhyChoose,
  servicesProcess,
  industriesServed,
  facilityHighlights,
} from '../data/innerPages';
import { ArrowRightIcon, DynamicIcon } from '../components/icons/Icons';

export default function CapabilitiesPage() {
  usePageMeta(
    'CNC Laser Cutting, Metal Fabrication & Machining Services in Nagpur | UMA Metal Craft',
    'From raw sheet to finished component — CNC laser cutting, press brake forming, VMC machining, MIG/TIG welding, and die making all under one roof.'
  );

  return (
    <>
      <PageHeroDark
        tag="Nagpur, Maharashtra — Serving All India"
        title="Industrial Manufacturing Services"
        lead="From raw sheet to finished component — CNC laser cutting, press brake forming, VMC machining, MIG/TIG welding, and die making all under one roof."
      />

      <section className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              10 Core Services
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Everything You Need <span className="title-accent">Under One Roof</span></h2>
          </Reveal>
          <div className="service-cards">
            {servicesList.map((service, i) => (
              <Reveal key={service.title} delay={i * 40} className="service-card">
                <span className="icon-circle" aria-hidden="true">
                  <DynamicIcon name={service.icon} size={22} />
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <Link to="/contact" className="service-card__link">
                  View Details
                  <ArrowRightIcon size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section inner-section--muted">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Why B2B Clients Choose UMA
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">
              Precision, Scale, and Reliability — <span className="title-accent">Every Order</span>
            </h2>
          </Reveal>
          <div className="feature-cards">
            {servicesWhyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="feature-card">
                <span className="feature-card__icon" aria-hidden="true">
                  <DynamicIcon name={item.icon} size={24} />
                </span>
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__desc">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Simple &amp; Transparent
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">How It Works — <span className="title-accent">From RFQ to Delivery</span></h2>
          </Reveal>
          <div className="process-grid">
            {servicesProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 50} className="process-card">
                <span className="process-card__step">{step.step}</span>
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__desc">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section inner-section--muted">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Sector Experience
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Industries <span className="title-accent">We Serve</span></h2>
          </Reveal>
          <div className="industry-tags">
            {industriesServed.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 40}>
                <span className="industry-tag">{industry.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section">
        <div className="container">
          <div className="inner-split">
            <Reveal>
              <p className="section-eyebrow">
                <span className="section-eyebrow__line" aria-hidden="true" />
                See the Facility
              </p>
              <h2 className="section-title-lg">
                State-of-the-Art Manufacturing, <span className="title-accent">Nagpur</span>
              </h2>
              <p className="section-lead inner-prose">
                Our 20,000 sq ft facility houses multiple fibre laser cutters, CNC press brakes, VMC machining centres, and a full welding and surface finishing bay.
              </p>
              <ul className="facility-list">
                {facilityHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/facilities" className="btn btn--primary btn--sm">
                View Full Gallery
                <ArrowRightIcon size={16} />
              </Link>
            </Reveal>
            <Reveal delay={100} className="inner-split__visual">
              <img src="/assets/factory-close.jpg" alt="Manufacturing facility interior" className="inner-image" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <InnerPageCta />
    </>
  );
}
