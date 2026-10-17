import { useEffect, useRef } from 'react';
import './app-section.css';

export const AppSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      section.classList.add('app-section--visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('app-section--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="app-section" ref={sectionRef} aria-labelledby="app-section-title">
      <div className="app-section__container">
        <div className="app-section__copy">
          <span className="app-section__badge">Akıllı Mobil Cüzdan</span>

          <h2 className="app-section__heading" id="app-section-title">
            Bakiyeniz ve harcamalarınız{' '}
            <span>elinizin altında.</span>
          </h2>

          <p className="app-section__description">
            Giyim bakiyenizi ve harcamalarınızı FavyoFlex Card mobil uygulamasından
            kolayca takip edin. Kartınızı geçici olarak dondurabilir, limitlerinizi
            görüntüleyebilir ve QR ile anında ödeyebilirsiniz.
          </p>

          <p className="app-section__subdescription">
            Bireysel kullanım için uygulamadan sanal kartınızı oluşturabilir, banka
            kartı, kredi kartı veya havale ile ek bakiye yükleyebilirsiniz.
          </p>

          <div className="app-section__downloads">
            <a className="app-section__download" href="#">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.07c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.7-1.12 1.8-.98 2.87 1.04.08 2.12-.56 2.76-1.34z" />
              </svg>
              <span>
                <small>İNDİRİN</small>
                <strong>App Store</strong>
              </span>
            </a>

            <a className="app-section__download" href="#">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85A1.5 1.5 0 0 1 3 20.5Zm13.81-5.38-2-2L12.56 15.37l4.25 4.25c.62-.36 1.04-1.02 1.04-1.77 0-.75-.42-1.79-1.04-2.73Zm0-6.24c.62-.56 1.04-1.59 1.04-2.73 0-.75-.42-1.41-1.04-1.77l-4.25 4.25 2.25 2.25 2-2Z" />
              </svg>
              <span>
                <small>İNDİRİN</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="app-section__visual" aria-label="FavyoFlex Card mobil uygulama ekranları">
          <div className="app-section__glow" />

          <div className="app-phone app-phone--left" aria-hidden="true">
            <div className="app-phone__frame">
              <div className="app-phone__notch" />
              <div className="app-phone__screen app-phone__screen--activity">
                <div className="app-phone__status"><span>9:41</span><span>●●● ▰</span></div>
                <div className="app-phone__topline"><span>Merhaba,</span><strong>Yunus 👋</strong><b>•••</b></div>
                <div className="app-phone__card">
                  <img src="/images/favyoflex-card.jpeg" alt="" />
                </div>
                <div className="app-phone__section-title"><strong>Son işlemler</strong><span>Tümünü gör</span></div>
                <div className="app-phone__transaction"><i>🛍</i><span><b>Moda mağazası</b><small>Bugün, 12:42</small></span><strong>-₺ 850</strong></div>
                <div className="app-phone__transaction"><i>☕</i><span><b>Kahve durağı</b><small>Dün, 16:20</small></span><strong>-₺ 120</strong></div>
                <div className="app-phone__nav"><span>⌂<small>Ana sayfa</small></span><span>▤<small>İşlemler</small></span><span>▣<small>Kartlarım</small></span><span>◉<small>Profil</small></span></div>
              </div>
            </div>
          </div>

          <div className="app-phone app-phone--center" aria-hidden="true">
            <div className="app-phone__frame">
              <div className="app-phone__notch" />
              <div className="app-phone__screen app-phone__screen--spending">
                <div className="app-phone__status"><span>9:41</span><span>●●● ▰</span></div>
                <div className="app-phone__screen-heading"><span>‹</span><strong>Harcamalarım</strong><span>•••</span></div>
                <div className="app-phone__tabs"><b>Temmuz</b><span>Ağustos</span><span className="is-active">Eylül</span></div>
                <div className="app-phone__balance"><small>Eylül harcamalarınız</small><strong>₺ 2.715,00</strong><span>Bu ayki toplam harcamanız</span></div>
                <div className="app-phone__chart"><span style={{ height: '36%' }} /><span style={{ height: '58%' }} /><span style={{ height: '44%' }} /><span style={{ height: '76%' }} /><span style={{ height: '62%' }} /><span className="is-current" style={{ height: '92%' }} /></div>
                <div className="app-phone__chart-labels"><span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span></div>
                <div className="app-phone__section-title"><strong>Son harcamalar</strong><span>Eylül</span></div>
                <div className="app-phone__transaction"><i>🧥</i><span><b>Giyim mağazası</b><small>Bugün, 11:30</small></span><strong>-₺ 680</strong></div>
                <div className="app-phone__transaction"><i>👟</i><span><b>Spor mağazası</b><small>18 Eylül</small></span><strong>-₺ 945</strong></div>
                <div className="app-phone__nav"><span>⌂<small>Ana sayfa</small></span><span>▤<small>İşlemler</small></span><span>▣<small>Kartlarım</small></span><span>◉<small>Profil</small></span></div>
              </div>
            </div>
          </div>

          <div className="app-phone app-phone--right" aria-hidden="true">
            <div className="app-phone__frame">
              <div className="app-phone__notch" />
              <div className="app-phone__screen app-phone__screen--card">
                <div className="app-phone__status"><span>9:41</span><span>●●● ▰</span></div>
                <div className="app-phone__screen-heading"><span>‹</span><strong>Kartlarım</strong><span>•••</span></div>
                <div className="app-phone__mini-card"><img src="/images/favyoflex-card.jpeg" alt="" /></div>
                <div className="app-phone__card-label"><span>FavyoFlex Card</span><b>Aktif</b></div>
                <div className="app-phone__settings"><span><i>◉</i><b>Kartı geçici dondur</b><em>›</em></span><span><i>⌖</i><b>Güvenlik ayarları</b><em>›</em></span><span><i>↗</i><b>Limitlerim</b><em>›</em></span></div>
                <div className="app-phone__help"><strong>Yardıma mı ihtiyacınız var?</strong><small>Destek ekibimiz size yardımcı olabilir.</small></div>
                <div className="app-phone__nav"><span>⌂<small>Ana sayfa</small></span><span>▤<small>İşlemler</small></span><span>▣<small>Kartlarım</small></span><span>◉<small>Profil</small></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
