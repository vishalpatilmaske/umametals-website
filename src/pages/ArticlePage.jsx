import { useEffect, useMemo, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Link, useParams } from 'react-router-dom';
import { extractFirstImageFromContent, fetchBlogBySlug } from '../lib/api';
import Reveal from '../components/Reveal';

const getImageFilename = (url) => {
  if (!url) return '';
  const match = url.match(/\/uploads\/([^"'\s?#]+)/);
  return match ? match[1] : '';
};

const stripFirstImageFromContent = (html, heroUrl) => {
  if (!html || !heroUrl) return html;

  const filename = getImageFilename(heroUrl);
  if (!filename) return html;

  const figurePattern = new RegExp(
    `<figure[^>]*>[\\s\\S]*?${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?<\\/figure>`,
    'i'
  );
  if (figurePattern.test(html)) {
    return html.replace(figurePattern, '').trim();
  }

  const imgPattern = new RegExp(
    `<p[^>]*>\\s*(?:<a[^>]*>\\s*)?<img[^>]*${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^>]*>\\s*(?:<\\/a>\\s*)?<\\/p>|<img[^>]*${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^>]*>`,
    'i'
  );
  return html.replace(imgPattern, '').trim();
};

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const blog = await fetchBlogBySlug(slug);
        setArticle(blog);
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  const { heroImage, bodyContent } = useMemo(() => {
    if (!article) return { heroImage: '', bodyContent: '' };

    const explicitHero = article.featuredImageUrl || '';
    const contentHero = explicitHero ? '' : extractFirstImageFromContent(article.content);
    const hero = explicitHero || contentHero;

    const content = explicitHero
      ? article.content
      : stripFirstImageFromContent(article.content, hero);

    return { heroImage: hero, bodyContent: content };
  }, [article]);

  usePageMeta(
    article ? `${article.title} | UMA Metal Craft` : 'Article | UMA Metal Craft',
    article?.excerpt || 'Industrial manufacturing insights from UMA Metal Craft.'
  );

  if (loading) {
    return (
      <div className="article-page article-page--loading">
        <div className="container">
          <p className="article-loading">Loading article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1>Article not found</h1>
        <Link to="/blog" className="text-link">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="article-page">
      <div className="container article-page__inner">
        <Reveal>
          <Link to="/blog" className="text-link text-link--back article-page__back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </Reveal>

        <div className="article-page__layout">
          <div className="article-page__main">
            <Reveal delay={60}>
              <div className="article-page__header">
                <div className="article-meta">
                  <span className="article-meta__category">{article.category}</span>
                  <time dateTime={article.date}>{article.date}</time>
                  <span>{article.readTime}</span>
                </div>
                <h1 className="article-page__title">{article.title}</h1>
                {article.excerpt && (
                  <p className="article-page__lead">{article.excerpt}</p>
                )}
              </div>
            </Reveal>

            {heroImage && (
              <Reveal delay={100}>
                <figure className="article-page__hero">
                  <img src={heroImage} alt={article.title} loading="eager" />
                </figure>
              </Reveal>
            )}

            <Reveal delay={120}>
              <div className="article-page__body">
                {bodyContent ? (
                  <div
                    className="article-body-html ck-content"
                    dangerouslySetInnerHTML={{ __html: bodyContent }}
                  />
                ) : (
                  !heroImage && <p>{article.excerpt}</p>
                )}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="article-closing">
                <h2>Need Manufacturing Support?</h2>
                <p>
                  Contact our team with your drawings and specifications. We provide detailed quotations within 24 hours for CNC laser cutting, metal fabrication, and precision machining requirements.
                </p>
                <div className="article-cta-actions">
                  <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
                  <Link to="/capabilities" className="btn btn--ghost">View Services</Link>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="article-sidebar">
            <Reveal className="sidebar-card">
              <h3>Related Topics</h3>
              <ul className="sidebar-links">
                <li><Link to="/capabilities">Manufacturing Services</Link></li>
                <li><Link to="/products">Product Range</Link></li>
                <li><Link to="/facilities">Our Facility</Link></li>
              </ul>
            </Reveal>
            <Reveal delay={80} className="sidebar-card sidebar-card--accent">
              <h3>Get a Quote</h3>
              <p>Send your drawings and receive a competitive quotation within 24 hours.</p>
              <Link to="/contact" className="btn btn--primary btn--full">Contact Us</Link>
            </Reveal>
          </aside>
        </div>
      </div>
    </article>
  );
}
