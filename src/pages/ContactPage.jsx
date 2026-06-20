import { usePageMeta } from '../hooks/usePageMeta';
import PageHeroDark from '../components/PageHeroDark';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { company } from '../data/content';
import { workingHours } from '../data/innerPages';
import { PhoneIcon } from '../components/icons/Icons';

export default function ContactPage() {
  usePageMeta(
    'Contact Us & Request Quote | UMA Metal Craft',
    'Send us your manufacturing requirements, CAD files, or technical queries. Our engineering team responds within 24 hours.'
  );

  return (
    <>
      <PageHeroDark
        title="Contact Us"
        lead="Send us your manufacturing requirements, CAD files, or technical queries. Our engineering team responds within 24 hours."
        actions={false}
      />

      <section className="section inner-section">
        <div className="container">
          <div className="contact-page-layout">
            <div>
              <Reveal>
                <h2 className="section-title-lg">Get In Touch</h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="contact-info-cards">
                  <div className="contact-info-card">
                    <PhoneIcon size={22} className="contact-info-card__icon" />
                    <div>
                      <h3>Call Us Directly</h3>
                      <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
                    </div>
                  </div>
                  <div className="contact-info-card">
                    <div>
                      <h3>Email Specifications</h3>
                      <a href={`mailto:${company.email}`}>{company.email}</a>
                    </div>
                  </div>
                  <div className="contact-info-card">
                    <div>
                      <h3>Factory Location</h3>
                      <address>Nagpur, Maharashtra, India</address>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="working-hours">
                  <h3 className="working-hours__title">Working Hours</h3>
                  {workingHours.map((row) => (
                    <div key={row.days} className="working-hours__row">
                      <span>{row.days}</span>
                      <span>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={80} className="contact-form-wrap">
              <ContactForm submitLabel="Submit Inquiry" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
