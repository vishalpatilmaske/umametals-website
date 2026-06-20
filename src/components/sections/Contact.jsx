import { company } from '../../data/content';
import Reveal from '../Reveal';
import ContactForm from '../ContactForm';

export default function Contact({ hideHeader = false }) {
  return (
    <section className="section contact-section" aria-label="Contact and inquiries">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            {!hideHeader && (
              <Reveal>
                <p className="eyebrow">Contact & Inquiries</p>
                <h2 className="section-title">
                  Discuss Your Fabrication Requirements
                </h2>
                <p className="section-lead">
                  Whether you need a custom component quote, bulk order pricing, or manufacturing support — reach out to start the conversation.
                </p>
              </Reveal>
            )}

            <Reveal delay={hideHeader ? 0 : 80}>
              <div className="contact-cards">
                <div className="contact-card">
                  <h3>Location</h3>
                  <address>{company.location}</address>
                </div>
                <div className="contact-card">
                  <h3>Business Inquiries</h3>
                  <p>Custom fabrication · Bulk orders · Manufacturing solutions</p>
                </div>
                <div className="contact-card">
                  <h3>Email</h3>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="location-block" aria-label="Map placeholder for Hingna, Nagpur">
                <div className="location-map">
                  <div className="location-map-inner">
                    <span className="location-pin" aria-hidden="true" />
                    <p>Hingna Industrial Area</p>
                    <p className="location-sub">Nagpur, Maharashtra</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="contact-form-wrap">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
