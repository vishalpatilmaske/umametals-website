import { Link } from 'react-router-dom';
import { company, productCategories } from '../data/content';
import { PhoneIcon, WhatsAppIcon } from './icons/Icons';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="UMA Metal Craft — Home">
                <Logo />
              </Link>
              <p className="footer-tagline">
                Precision CNC laser cutting, sheet metal fabrication, and die &amp; tools manufacturing — built for strength, fit, and long-term performance since {company.established}.
              </p>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/capabilities">Services</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/products">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Product Range</h3>
              <ul className="footer-links">
                {productCategories.slice(0, 5).map((cat) => (
                  <li key={cat.title}>
                    <Link to="/products">{cat.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Contact</h3>
              <p className="footer-inquiry">
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
                <br />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <Link to="/contact" className="btn btn--outline btn--sm">
                Request a Quote
              </Link>
              <address className="footer-address">
                Nagpur, Maharashtra, India
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
            <p className="footer-meta">Precision Manufacturing · Nagpur, India</p>
          </div>
        </div>
      </footer>

      <div className="sticky-actions" aria-label="Quick contact actions">
        <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="sticky-actions__btn">
          <PhoneIcon size={18} />
          Call Us
        </a>
        <a href={whatsappUrl} className="sticky-actions__btn sticky-actions__btn--whatsapp" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={18} />
          WhatsApp Us
        </a>
        <Link to="/contact" className="sticky-actions__btn sticky-actions__btn--primary">
          RFQ Contact
        </Link>
      </div>
    </>
  );
}
