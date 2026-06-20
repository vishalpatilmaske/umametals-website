import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import PageHeroDark from '../components/PageHeroDark';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import {
  aboutStats,
  aboutValues,
  aboutMachinery,
  aboutTimeline,
  aboutCertifications,
} from '../data/innerPages';
import { ArrowRightIcon } from '../components/icons/Icons';

export default function AboutPage() {
  usePageMeta(
    'About UMA Metal Craft | CNC Laser Cutting & Metal Fabrication, Nagpur',
    'Forging precision since 2013. Central India\'s trusted industrial manufacturing partner for CNC laser cutting, metal fabrication, and precision machining.'
  );

  return (
    <>
      <PageHeroDark
        tag="Nagpur, Maharashtra, India"
        title="About UMA Metal Craft"
        lead="Forging precision since 2013. Central India's trusted industrial manufacturing partner for CNC laser cutting, metal fabrication, and precision machining."
        actions={false}
      />

      <section className="section inner-section">
        <div className="container">
          <div className="inner-split">
            <Reveal>
              <p className="section-eyebrow">
                <span className="section-eyebrow__line" aria-hidden="true" />
                Our Story
              </p>
              <h2 className="section-title-lg">
                From a Single Machine to Central India&apos;s Leading <span className="title-accent">Metal Fabricator</span>
              </h2>
              <p className="section-lead inner-prose">
                UMA Metal Craft was founded in 2013 in Nagpur with one mission: to provide B2B clients with uncompromising precision in metal fabrication. What began as a single CNC lathe and two skilled operators has grown into a 20,000 sq ft manufacturing facility serving over 500 clients across India.
              </p>
              <p className="inner-prose">
                We understand that in heavy industry, tolerances are not just numbers on a drawing — they are the difference between a seamless assembly line and a costly shutdown. That&apos;s why precision is non-negotiable at UMA.
              </p>
              <p className="inner-prose">
                Today we operate fiber laser cutters, CNC press brakes, VMC machining centers, and a full welding and surface finishing line — all under one roof in Nagpur.
              </p>
              <div className="inner-actions">
                <Link to="/facilities" className="btn btn--primary btn--sm">
                  View Our Facility
                  <ArrowRightIcon size={16} />
                </Link>
                <Link to="/contact" className="btn btn--outline-white btn--sm">
                  Talk to Our Team
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100} className="inner-split__visual">
              <img src="/assets/factory-wide.jpg" alt="UMA Metal Craft manufacturing facility" className="inner-image" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section inner-section inner-section--muted">
        <div className="container">
          <div className="stat-cards">
            {aboutStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60} className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <strong className="stat-card__label">{stat.label}</strong>
                <span className="stat-card__desc">{stat.description}</span>
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
              Why We&apos;re Different
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">
              Our Core Values Drive Every <span className="title-accent">Weld, Cut, and Bend</span>
            </h2>
          </Reveal>
          <div className="value-cards">
            {aboutValues.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="value-card">
                <h3 className="value-card__title">{item.title}</h3>
                <p className="value-card__desc">{item.description}</p>
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
              State-of-the-Art Equipment
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Our Manufacturing <span className="title-accent">Machinery</span></h2>
            <p className="section-lead">
              We continuously invest in the latest industrial equipment to deliver faster, more accurate, and more cost-effective production for our B2B partners.
            </p>
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
        </div>
      </section>

      <section className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Our Journey
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">A Decade of <span className="title-accent">Growth and Innovation</span></h2>
          </Reveal>
          <div className="timeline">
            {aboutTimeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 50} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <p className="timeline__text">{item.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section inner-section--dark">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Quality &amp; Compliance
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg" style={{ color: '#fff' }}>
              Certified, Compliant, and <span className="title-accent">Trusted</span>
            </h2>
            <p className="section-lead section-lead--light">
              Our quality management system adheres to international standards. Every shipment is backed by material test certificates, inspection reports, and dimension verification sheets.
            </p>
          </Reveal>
          <div className="cert-grid">
            {aboutCertifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 60} className="cert-card">
                <strong className="cert-card__title">{cert.title}</strong>
                <span className="cert-card__subtitle">{cert.subtitle}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerPageCta
        title="Ready to Work With Us?"
        lead="Send us your technical drawings and let our engineering team provide a detailed quotation within 24 hours."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
