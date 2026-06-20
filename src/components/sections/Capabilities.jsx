import { capabilities } from '../../data/content';
import Reveal from '../Reveal';

export default function Capabilities({ hideHeader = false }) {
  return (
    <section className="section capabilities-section section--dark" aria-label="Manufacturing capabilities">
      <div className="container">
        {!hideHeader && (
          <Reveal className="section-header">
            <p className="eyebrow eyebrow--light">Capabilities</p>
            <h2 className="section-title section-title--light">
              Manufacturing Strengths You Can Rely On
            </h2>
            <p className="section-lead section-lead--light">
              From precision sheet metal work to bulk production runs — structured fabrication support for industrial buyers.
            </p>
          </Reveal>
        )}

        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 70} className="capability-card">
              <div className="capability-marker" aria-hidden="true" />
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
