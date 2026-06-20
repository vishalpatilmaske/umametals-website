import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from './icons/Icons';
import { company } from '../data/content';
import Reveal from './Reveal';

export default function InnerPageCta({
  title = 'Ready to Start Your Manufacturing Project?',
  lead = 'Submit your drawings and get a competitive quotation within 24 hours. No commitment required.',
  primaryLabel = 'Submit RFQ Now',
}) {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;

  return (
    <section className="inner-page-cta">
      <div className="container">
        <Reveal className="inner-page-cta__inner">
          <div>
            <h2 className="inner-page-cta__title">{title}</h2>
            <p className="inner-page-cta__lead">{lead}</p>
          </div>
          <div className="inner-page-cta__actions">
            <Link to="/contact" className="btn btn--primary">
              {primaryLabel}
              <ArrowRightIcon size={16} />
            </Link>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn btn--hero-outline">
              <PhoneIcon size={16} />
              Call Us
            </a>
            <a href={whatsappUrl} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
