import { trustedPartners } from '../../data/content';
import Reveal from '../Reveal';

export default function TrustedBy() {
  return (
    <section className="trusted-by" aria-label="Trusted by leading manufacturers">
      <div className="container">
        <Reveal>
          <div className="trusted-by__heading">
            <span className="trusted-by__line" aria-hidden="true" />
            <h2 className="trusted-by__title">Trusted by India&apos;s Leading Manufacturers</h2>
            <span className="trusted-by__line" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="trusted-by__logos">
          {trustedPartners.map((name, i) => (
            <Reveal key={name} delay={i * 50}>
              <span className="trusted-by__logo">{name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
