import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-title">{title}</h1>
          {lead && <p className="page-lead">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
