import { whyChooseUs } from '../../data/content';
import Reveal from '../Reveal';

export default function WhyChooseUs() {
  return (
    <section className="section why-section" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-layout">
          <Reveal className="why-intro">
            <p className="eyebrow">Why Choose Us</p>
            <h2 id="why-heading" className="section-title">
              Built for Buyers Who Need More Than a Standard Part
            </h2>
            <p className="section-lead">
              Industrial procurement demands consistency, communication, and components that perform under real conditions. That is the standard we work toward on every fabrication project.
            </p>
          </Reveal>

          <div className="why-list">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.number} delay={i * 60} className="why-item">
                <span className="why-number">{item.number}</span>
                <div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
