import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import PageHeroDark from '../components/PageHeroDark';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import {
  productPageItems,
  materialsList,
  productsWhyChoose,
  facilityHighlights,
} from '../data/innerPages';
import { ArrowRightIcon, DynamicIcon } from '../components/icons/Icons';

export default function ProductsPage() {
  usePageMeta(
    'Industrial Metal Products | CNC Laser Cut Components, Aluminium, Steel | UMA Metal Craft Nagpur',
    'Precision-manufactured components, sheets, and assemblies for B2B industrial clients across India. CNC laser cut, machined, and fabricated to your exact specifications.'
  );

  return (
    <>
      <PageHeroDark
        tag="Made in Nagpur, India"
        title="Industrial Metal Products"
        lead="Precision-manufactured components, sheets, and assemblies for B2B industrial clients across India. CNC laser cut, machined, and fabricated to your exact specifications."
        actions={false}
      />

      <section className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Product Categories
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Browse Our <span className="title-accent">Product Range</span></h2>
            <p className="section-lead">
              Each product is manufactured to order — custom dimensions, tolerances, and material grades available on all categories.
            </p>
          </Reveal>
          <div className="products-page-grid">
            {productPageItems.map((product, i) => (
              <Reveal key={product.title} delay={i * 60} className="product-page-card">
                <div className="product-page-card__image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <span className="product-page-card__badge">ISO Grade</span>
                </div>
                <div className="product-page-card__body">
                  <span className="product-page-card__icon" aria-hidden="true">
                    <DynamicIcon name={product.icon} size={22} />
                  </span>
                  <h3 className="product-page-card__title">{product.title}</h3>
                  <p className="product-page-card__desc">{product.description}</p>
                  <Link to="/contact" className="product-page-card__link">
                    View Specifications
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
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
              Full Material Capability
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Materials <span className="title-accent">We Work With</span></h2>
          </Reveal>
          <div className="materials-grid">
            {materialsList.map((material, i) => (
              <Reveal key={material.name} delay={i * 50} className="material-card">
                <h3 className="material-card__title">{material.name}</h3>
                <p className="material-card__desc">{material.description}</p>
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
              Quality You Can Trust
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>
            <h2 className="section-title-lg">Why Choose <span className="title-accent">UMA Metal Craft?</span></h2>
          </Reveal>
          <div className="feature-cards">
            {productsWhyChoose.map((item, i) => (
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

      <section className="section inner-section inner-section--muted">
        <div className="container">
          <div className="inner-split">
            <Reveal>
              <p className="section-eyebrow">
                <span className="section-eyebrow__line" aria-hidden="true" />
                Factory Floor
              </p>
              <h2 className="section-title-lg">
                Manufacturing All Products <span className="title-accent">In-House</span>
              </h2>
              <p className="section-lead inner-prose">
                Every product listed here is manufactured at our 20,000 sq ft Nagpur facility. We do not outsource production — our clients get direct access to our machines, operators, and quality team.
              </p>
              <ul className="facility-list">
                {facilityHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/facilities" className="btn btn--primary btn--sm">
                View Facility Gallery
                <ArrowRightIcon size={16} />
              </Link>
            </Reveal>
            <Reveal delay={100} className="inner-split__visual">
              <img src="/assets/factory-wide.jpg" alt="Factory floor manufacturing" className="inner-image" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <InnerPageCta
        title="Looking for a Specific Product?"
        lead="Submit your drawings and quantity. We'll send back a competitive per-part quote within 24 hours — no commitment required."
        primaryLabel="Submit Your RFQ"
      />
    </>
  );
}
