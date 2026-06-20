import { showcaseProducts } from '../../data/content';
import Reveal from '../Reveal';

export default function ProductShowcase() {
  return (
    <section className="section showcase-section section--bleed" aria-labelledby="showcase-heading">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Featured Products</p>
          <h2 id="showcase-heading" className="section-title">
            Precision Components in Focus
          </h2>
        </Reveal>
      </div>

      <div className="showcase-track">
        {showcaseProducts.map((product, i) => (
          <Reveal key={product.title} delay={i * 70} className="showcase-card">
            <div className="showcase-card-visual" aria-hidden="true">
              <div className={`showcase-texture showcase-texture--${i % 3}`} />
            </div>
            <div className="showcase-card-body">
              <span className="showcase-tag">{product.tag}</span>
              <h3 className="showcase-title">{product.title}</h3>
              <p className="showcase-desc">{product.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
