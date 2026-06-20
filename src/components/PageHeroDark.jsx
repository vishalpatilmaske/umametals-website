import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from './icons/Icons';
import { company } from '../data/content';
import Reveal from './Reveal';

export default function PageHeroDark({ tag, title, titleAccent, lead, actions }) {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;

  return (
    <section className="page-hero-dark">
      <div className="page-hero-dark__bg" aria-hidden="true">
        <img src="/assets/hero-cnc.jpg" alt="" />
        <div className="page-hero-dark__overlay" />
      </div>
      <div className="container page-hero-dark__inner">
        <Reveal>
          {tag && <p className="page-hero-dark__tag">{tag}</p>}
          <h1 className="page-hero-dark__title">
            {title}
            {titleAccent && <span className="title-accent"> {titleAccent}</span>}
          </h1>
          {lead && <p className="page-hero-dark__lead">{lead}</p>}
        </Reveal>
        {actions !== false && (
          <Reveal delay={100}>
            <div className="page-hero-dark__actions">
              <Link to="/contact" className="btn btn--primary">
                Get a Free Quote
                <ArrowRightIcon size={16} />
              </Link>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn btn--hero-outline">
                <PhoneIcon size={16} />
                Call {company.phone}
              </a>
              <a href={whatsappUrl} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
