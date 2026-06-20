import { company } from '../../data/content';
import Reveal from '../Reveal';

export default function About({ hideHeader = false }) {
  return (
    <section className="section about-section" aria-label="About UMA Metal Craft">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="about-image-block">
              <div className="about-image-inner" aria-hidden="true">
                <div className="metal-texture" />
                <div className="about-image-overlay">
                  <span className="about-stat">{company.established}</span>
                  <span className="about-stat-label">Years of Manufacturing Focus</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="about-content">
            {!hideHeader && (
              <Reveal>
                <p className="eyebrow">About Us</p>
                <h2 className="section-title">
                  Manufacturing Discipline Built for Industrial Reliability
                </h2>
              </Reveal>
            )}
            {!hideHeader && (
              <Reveal delay={80}>
                <p className="section-lead">
                  Since {company.established}, {company.shortName} has focused on practical manufacturing quality — delivering precision-driven fabrication work and custom metal components built for industrial use.
                </p>
              </Reveal>
            )}
            <Reveal delay={hideHeader ? 0 : 160}>
              <p>
                With a commitment to reliability, material discipline, and long-term performance, the company supports both standard and custom fabrication requirements. From aluminium plates and power clamps to securing rings and bespoke components, every project is approached with the same focus on fit, finish, and functional durability.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="about-points">
                <li>Precision manufacturing for industrial applications</li>
                <li>Custom metal components from specification to delivery</li>
                <li>Support for bulk orders and recurring supply needs</li>
                <li>Based in {company.location}</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
