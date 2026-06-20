import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import { ArrowRightIcon, ChevronDownIcon } from './icons/Icons';
import Logo from './Logo';

function isNavActive(pathname, href) {
  if (href === '/') return pathname === '/';
  if (href === '/blog') return pathname.startsWith('/blog');
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const heroMode = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const headerClass = [
    'site-header',
    scrolled ? 'site-header--scrolled' : '',
    isHome ? 'site-header--hero' : '',
    isHome && scrolled ? 'scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label="UMA Metal Craft — Home">
          <Logo variant={heroMode ? 'light' : 'default'} />
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className={`nav-dropdown ${openDropdown === link.label ? 'nav-dropdown--open' : ''}`}
                >
                  <button
                    type="button"
                    className="nav-dropdown-toggle"
                    aria-expanded={openDropdown === link.label}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDownIcon size={14} />
                  </button>
                  <div className="nav-dropdown-menu">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="nav-dropdown-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`nav-link ${isNavActive(location.pathname, link.href) ? 'nav-link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn--primary btn--sm header-cta">
            Get Instant Quote
            <ArrowRightIcon size={16} />
          </Link>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <span className="mobile-nav-link">{link.label}</span>
                  <span className="mobile-nav-group-title">Services</span>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="mobile-nav-sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`mobile-nav-link ${isNavActive(location.pathname, link.href) ? 'mobile-nav-link--active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link to="/contact" className="btn btn--primary btn--full" onClick={() => setMenuOpen(false)}>
            Get Instant Quote
            <ArrowRightIcon size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
