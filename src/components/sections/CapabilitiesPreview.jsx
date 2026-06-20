import { Link } from 'react-router-dom';
import { capabilityServices } from '../../data/content';
import { ArrowRightIcon, DynamicIcon, GridIcon } from '../icons/Icons';
import Reveal from '../Reveal';
import TrustFeatureBar from '../TrustFeatureBar';

export default function CapabilitiesPreview() {
  return (
    <section className="section capabilities-preview" aria-labelledby="capabilities-heading">
      <div className="container">
        <Reveal className="capabilities-preview__header">
          <div>
            <p className="section-eyebrow">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Our Capabilities
            </p>
            <h2 id="capabilities-heading" className="section-title-lg">
              Industrial <span className="title-accent">Capabilities</span>
            </h2>
            <p className="section-lead">
              Complete end-to-end metal manufacturing capabilities under one roof.
            </p>
          </div>
          <Link to="/capabilities" className="btn btn--outline-white">
            <GridIcon size={18} />
            View All Services
            <ArrowRightIcon size={16} />
          </Link>
        </Reveal>

        <div className="capabilities-preview__grid">
          {capabilityServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50} className="capability-card-v2">
              <div className="capability-card-v2__image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="capability-card-v2__icon-wrap" aria-hidden="true">
                  <DynamicIcon name={service.icon} size={22} />
                </span>
              </div>
              <div className="capability-card-v2__body">
                <h3 className="capability-card-v2__title">{service.title}</h3>
                <p className="capability-card-v2__desc">{service.description}</p>
                <Link to="/capabilities" className="capability-card-v2__link">
                  Explore specs &gt;
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <TrustFeatureBar />
      </div>
    </section>
  );
}
