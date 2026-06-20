import { productCategories } from '../../data/content';
import Reveal from '../Reveal';

export default function Products({ hideHeader = false }) {
  return (
    <section className="section products-section" aria-label="Products and offerings">
      <div className="container">
        {!hideHeader && (
          <Reveal className="section-header">
            <p className="eyebrow">Products & Offerings</p>
            <h2 className="section-title">
              Fabricated Metal Solutions for Industrial Applications
            </h2>
            <p className="section-lead">
              A focused range of precision-manufactured components and custom fabrication services for businesses across Maharashtra and beyond.
            </p>
          </Reveal>
        )}

        <div className="products-layout">
          {productCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 80} className="product-category">
              <div className="product-category-header">
                <span className="product-category-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="product-category-title">{category.title}</h3>
              </div>
              <p className="product-category-desc">{category.description}</p>
              <ul className="product-category-items">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
