import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons/Icons';

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  lead,
  centered = false,
  action,
  actionLabel,
  actionHref,
  actionIcon: ActionIcon,
  className = '',
}) {
  return (
    <div className={`section-header-block ${centered ? 'section-header-block--centered' : ''} ${className}`}>
      <div className="section-header-block__text">
        {eyebrow && (
          <p className="section-eyebrow">
            <span className="section-eyebrow__line" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className="section-title-lg">
          {title}
          {titleAccent && <span className="title-accent"> {titleAccent}</span>}
        </h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {action && actionHref && (
        <Link to={actionHref} className="btn btn--outline-white section-header-block__action">
          {ActionIcon && <ActionIcon size={18} />}
          {actionLabel}
          <ArrowRightIcon size={16} />
        </Link>
      )}
    </div>
  );
}
