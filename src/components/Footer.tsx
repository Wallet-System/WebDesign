import './footer.css';

const footerColumns = [
  {
    title: 'En Çok Tıklanan',
    links: [
      ['Ana Sayfa', '#'],
      ['Kurumsal Avantajlar', '#avantajlar'],
      ['Vergi Avantajı', '#vergi-sgk'],
      ['Nasıl Çalışır?', '#nasil-calisir'],
    ],
  },
  {
    title: 'Ürünler & Hizmetler',
    links: [
      ['FavyoFlex Card', '#flex-card'],
      ['Mobil Uygulama', '#mobil-uygulama'],
      ['Üye İş Yeri Ağı', '#uye-isyeri'],
      ['Kurumsal Teklif Alın', '/iletisim'],
    ],
  },
  {
    title: 'Yasal',
    links: [
      ['KVKK Aydınlatma Metni', '#kvkk'],
      ['Gizlilik Politikası', '#gizlilik'],
      ['Çerez Politikası', '#cerez-politikasi'],
      ['Kullanım Koşulları', '#kullanim-kosullari'],
    ],
  },
];

export const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__main">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <a className="site-footer__logo" href="#" aria-label="FavyoFlex Card ana sayfa">
            <svg
              className="site-footer__logo-mark"
              viewBox="0 0 64 64"
              role="img"
              aria-label="FavyoFlex"
            >
              <path d="M12 10h40c-2 8-9 14-18 14H25c-5 0-9 2-12 7l-5 8c-1 2-4 1-4-1V23c0-6 3-11 8-13Zm1 25h17c-2 8-8 13-17 13h-4v-6c0-3 1-5 4-7Z" />
            </svg>
            <span className="site-footer__logo-name">
              FAVYOFLEX
              <small>CARD</small>
            </span>
          </a>
          <p>
            Yeni nesil giyim ve yan hak çözümleriyle kurumunuza vergi avantajı,
            çalışanlarınıza özgürlük sunar.
          </p>
        </div>

        <nav className="site-footer__columns" aria-label="Alt menü">
          {footerColumns.map(({ title, links }) => (
            <div className="site-footer__column" key={title}>
              <h2>{title}</h2>
              <ul>
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>
                      <span aria-hidden="true">→</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>

    <div className="site-footer__security">
      <div className="site-footer__security-inner">
        <div className="site-footer__security-items">
          <div className="site-footer__security-item">
            <span className="site-footer__security-icon" aria-hidden="true">⌑</span>
            <span>
              <strong>SSL Güvenli Bağlantı</strong>
              <small>Bilgileriniz güvenli bağlantı ile iletilir.</small>
            </span>
          </div>
          <div className="site-footer__security-item">
            <span className="site-footer__security-icon" aria-hidden="true">✓</span>
            <span>
              <strong>Güvenli Ödeme</strong>
              <small>Ödemeleriniz güvenli şekilde doğrulanır.</small>
            </span>
          </div>
        </div>
        <p className="site-footer__powered">Powered by <strong>AquaSoft</strong></p>
      </div>
    </div>

    <div className="site-footer__bottom">
      <div className="site-footer__bottom-inner">
        <p>© 2026 FavyoFlex Card. Tüm hakları saklıdır.</p>
        <span>Siltek Teknoloji Kurumsal Hizmetler San. Tic. A.Ş.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
  