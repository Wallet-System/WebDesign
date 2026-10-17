import './intro-section.css';

export const IntroSection = () => {
  return (
    <section className="intro-section" id="hakkimizda">
      <div className="intro-section__content">
        <h2 className="intro-section__title">
          FavyoFlex Card ile <span>tanışın.</span>
        </h2>
        <p className="intro-section__description">
          Kurumunuz için teklif alın, kartınızın geçtiği yerleri keşfedin ya da işletmenizi üye iş yeri ağımıza katılın.
        </p>
        <div className="intro-section__buttons">
          <a href="/iletisim" className="intro-section__button intro-section__button--primary">
            KURUMSAL TEKLİF ALIN <span aria-hidden="true">→</span>
          </a>
          <a href="/iletisim" className="intro-section__button intro-section__button--secondary">
            ÜYE İŞ YERİ BAŞVURUSU YAPIN <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};