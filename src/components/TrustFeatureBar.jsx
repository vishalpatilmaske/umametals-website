import { trustFeatures } from '../data/content';
import { DynamicIcon } from './icons/Icons';

export default function TrustFeatureBar({ light = false }) {
  return (
    <div className={`trust-feature-bar ${light ? 'trust-feature-bar--light' : ''}`}>
      {trustFeatures.map((item) => (
        <div key={item.title} className="trust-feature-bar__item">
          <span className="trust-feature-bar__icon" aria-hidden="true">
            <DynamicIcon name={item.icon} size={22} />
          </span>
          <div>
            <strong className="trust-feature-bar__title">{item.title}</strong>
            <span className="trust-feature-bar__desc">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
