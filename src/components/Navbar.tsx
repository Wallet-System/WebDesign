import React, { useState } from 'react';
import { navLinks } from '../data/mockData';
import './navbar.css';

const submenuItems: Record<string, { title: string; href: string }[]> = {
  Hizmetler: [
    { title: 'Flex Card', href: '#flex-card' },
    { title: 'Vergi ve SGK Muafiyeti', href: '#vergi-sgk' },
    { title: 'Çalışan Yan Hakları', href: '#yan-haklar' },
  ],
  Avantajlar: [
    { title: 'İşveren Avantajları', href: '#isveren-avantajlari' },
    { title: 'Çalışan Avantajları', href: '#calisan-avantajlari' },
    { title: 'Vergi Avantajları', href: '#vergi-avantajlari' },
  ],
};

export const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isContactPage = window.location.pathname.replace(/\/+$/, '') === '/iletisim';

  return (
    <nav className="site-navbar" style={styles.nav}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <span style={styles.logoIcon}>F</span>
        <div style={styles.logoTextGroup}>
          <span style={styles.logoMain}>FAVYO</span>
          <span style={styles.logoSub}>FLEX CARD</span>
        </div>
      </div>

      <button
        type="button"
        className="site-navbar__toggle"
        aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menü Linkleri */}
      <div
        className={`site-navbar__links${mobileMenuOpen ? ' is-open' : ''}`}
        style={styles.navLinksContainer}
      >
        {navLinks.map((link) => {
          const hasSubmenu = Boolean(submenuItems[link.title]);

          return (
            <div
              key={link.id}
              className="site-navbar__link-wrapper"
              style={styles.linkWrapper}
              onMouseEnter={() =>
                hasSubmenu && setOpenMenu(link.title)
              }
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={
                  isContactPage && link.href.startsWith('#')
                    ? `/${link.href}`
                    : link.href
                }
                style={styles.link}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
              {hasSubmenu && openMenu === link.title && (
                <div className="site-navbar__dropdown" style={styles.dropdown}>
                  {submenuItems[link.title].map((item) => (
                    <a
                      key={item.title}
                      href={isContactPage ? `/${item.href}` : item.href}
                      style={styles.dropdownLink}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#13243b';
                        e.currentTarget.style.color = '#e5be90';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sağ Taraf: Butonlar */}
      <div
        className={`site-navbar__actions${mobileMenuOpen ? ' is-open' : ''}`}
        style={styles.actionsContainer}
      >
        <a
          href="/iletisim"
          style={styles.offerBtn}
          onClick={() => setMobileMenuOpen(false)}
        >
          TEKLİF ALIN <span style={styles.arrowRight}>→</span>
        </a>

        <a
          href="#kurumsal"
          style={styles.corporateBtn}
          onClick={() => setMobileMenuOpen(false)}
        >
          KURUMSAL GİRİŞ
        </a>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#071122',
    padding: '16px 40px',
    fontFamily: 'var(--sans)',
    color: '#ffffff',
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  logoIcon: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#e5be90',
  },

  logoTextGroup: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  },

  logoMain: {
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#ffffff',
  },

  logoSub: {
    fontSize: '14px',
    fontWeight: '300',
    letterSpacing: '1px',
    color: '#e5be90',
  },

  navLinksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },

  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '10px 0',
  },

  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'color 0.2s',
  },

  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '-16px',
    minWidth: '220px',
    padding: '8px',
    backgroundColor: '#071122',
    border: '1px solid #1e3a5f',
    borderRadius: '10px',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    zIndex: 1000,
  },

  dropdownLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    padding: '12px 14px',
    borderRadius: '6px',
    transition: 'background-color 0.2s, color 0.2s',
    whiteSpace: 'nowrap',
  },

  badge: {
    backgroundColor: '#e5be90',
    color: '#071122',
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '4px',
    marginLeft: '6px',
    fontWeight: 'bold',
  },

  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  corporateBtn: {
    backgroundColor: '#d0b388',
    color: '#071122',
    padding: '10px 20px',
    borderRadius: '24px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
  },

  offerBtn: {
    backgroundColor: '#d0b388',
    color: '#071122',
    padding: '10px 22px',
    borderRadius: '24px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
  },

  arrowRight: {
    fontSize: '14px',
  },
};
