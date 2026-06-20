import { trustItems } from '../../data/content';
import Reveal from '../Reveal';

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Company credentials">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 60} className="trust-item">
              <span className="trust-value">{item.value}</span>
              <span className="trust-label">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
