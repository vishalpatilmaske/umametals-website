import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqItems } from '../../data/content';
import { ArrowRightIcon, ChevronDownIcon, ChevronUpIcon, HeadsetIcon } from '../icons/Icons';
import Reveal from '../Reveal';

function FaqIllustration() {
  return (
    <svg className="faq-illustration" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="320" rx="16" fill="#FFF2E8" />
      <circle cx="200" cy="140" r="60" fill="#FF6B00" fillOpacity="0.15" />
      <rect x="120" y="80" width="160" height="120" rx="8" fill="#1A1A1A" fillOpacity="0.08" />
      <rect x="140" y="100" width="120" height="80" rx="4" fill="#FF6B00" fillOpacity="0.2" />
      <circle cx="200" cy="200" r="35" fill="#1A1A1A" />
      <rect x="175" y="235" width="50" height="60" rx="4" fill="#1A1A1A" />
      <text x="188" y="175" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="700" fill="#FF6B00">UMA</text>
      <circle cx="80" cy="60" r="20" fill="#fff" stroke="#FF6B00" strokeWidth="2" />
      <text x="74" y="66" fontSize="18" fill="#FF6B00">?</text>
      <rect x="300" y="50" width="36" height="28" rx="6" fill="#fff" stroke="#FF6B00" strokeWidth="1.5" />
      <circle cx="312" cy="64" r="2" fill="#FF6B00" />
      <circle cx="322" cy="64" r="2" fill="#FF6B00" />
      <circle cx="332" cy="64" r="2" fill="#FF6B00" />
      <rect x="310" y="240" width="32" height="40" rx="4" fill="#FF6B00" fillOpacity="0.3" stroke="#FF6B00" strokeWidth="1.5" />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-section__grid">
          <div className="faq-section__visual">
            <Reveal>
              <FaqIllustration />
            </Reveal>
            <Reveal delay={100}>
              <div className="faq-cta-card">
                <span className="faq-cta-card__icon-wrap" aria-hidden="true">
                  <HeadsetIcon size={22} />
                </span>
                <div>
                  <h3 className="faq-cta-card__title">Still have questions?</h3>
                  <p className="faq-cta-card__text">
                    Our team is here to help you with any further information.
                  </p>
                  <Link to="/contact" className="btn btn--primary btn--sm">
                    Contact Us
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="section-eyebrow">
                <span className="section-eyebrow__line" aria-hidden="true" />
                FAQ
              </p>
              <h2 id="faq-heading" className="section-title-lg">
                Frequently Asked Questions
              </h2>
              <p className="section-lead" style={{ marginBottom: '2rem' }}>
                Find answers to common questions about our manufacturing services and processes.
              </p>
            </Reveal>

            <div className="faq-accordion">
              {faqItems.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <Reveal key={item.question} delay={60 + i * 40}>
                    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                      <button
                        type="button"
                        className="faq-item__trigger"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      >
                        {item.question}
                        <span className="faq-item__chevron" aria-hidden="true">
                          {isOpen ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
                        </span>
                      </button>
                      <div className="faq-item__answer-wrap">
                        <div className="faq-item__answer-inner">
                          <p className="faq-item__answer">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
