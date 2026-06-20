import { processSteps } from '../../data/content';
import Reveal from '../Reveal';

export default function Process() {
  return (
    <section className="section process-section" aria-labelledby="process-heading">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Our Process</p>
          <h2 id="process-heading" className="section-title">
            A Clear Path from Requirement to Delivery
          </h2>
          <p className="section-lead">
            A straightforward B2B workflow designed for industrial buyers, procurement teams, and fabrication partners.
          </p>
        </Reveal>

        <ol className="process-timeline">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 80} className="process-step">
              <span className="process-number">{step.step}</span>
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
