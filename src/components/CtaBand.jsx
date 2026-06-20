import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function CtaBand() {
  return (
    <section className="section cta-band" aria-labelledby="cta-band-heading">
      <div className="container">
        <Reveal className="cta-band-inner">
          <div>
            <h2 id="cta-band-heading" className="cta-band-title">
              Ready to Discuss Your Fabrication Requirements?
            </h2>
            <p className="cta-band-lead">
              Custom components, bulk orders, and manufacturing inquiries — our team is ready to help.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/contact" className="btn btn--primary">
              Request a Quote
            </Link>
            <Link to="/products" className="btn btn--ghost">
              View Products
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
