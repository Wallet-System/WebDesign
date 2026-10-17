import React, { useEffect, useState } from 'react';
import './hero/hero-animations.css';

const slides = [
  {
    id: 'corporate',
    image: '/home/hero-kurumsal.png',
    eyebrow: '',
    title: ['Kurumsal Tasarrufta', 'Yeni Nesil Kolaylık.'],
    description: '',
    button: 'Detaylı Bilgi Al',
  },
  {
    id: 'tax',
    image: '/home/hero-vergi.png',
    eyebrow: 'VERGİ VE SGK AVANTAJLARI',
    title: ['%34’e Varan', 'Vergi ve SGK Muafiyeti'],
    description:
      'FavyoFlex Card ile çalışanlarınıza sunduğunuz harcamalar; şirketinizin maliyetlerini düşürür hem de çalışanlarınız için daha fazla fayda sağlar.',
    button: 'Detaylı Bilgi Al',
  },
];

export const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const openContact = () => {
    window.location.href = '/iletisim';
  };

  return (
    <section style={styles.wrapper}>
      <div className="hero-slider" style={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              opacity: activeSlide === index ? 1 : 0,
              visibility: activeSlide === index ? 'visible' : 'hidden',
              pointerEvents: activeSlide === index ? 'auto' : 'none',
            }}
            aria-hidden={activeSlide !== index}
          >
            <div className={activeSlide === index ? 'hero-design-enter' : ''}>
              <img
                className={`hero-slider__image${
                  activeSlide === index ? ' hero-design-zoom' : ''
                }`}
                src={slide.image}
                alt=""
                aria-hidden="true"
                style={styles.design}
              />
            </div>
            <div className={`hero-copy hero-copy--${slide.id}`}>
              <div className="hero-copy-mask" />
              <div className="hero-copy-content">
                {slide.eyebrow && (
                  <p
                    className={
                      activeSlide === index
                        ? 'hero-copy-eyebrow hero-copy-animate'
                        : 'hero-copy-eyebrow'
                    }
                  >
                    {slide.eyebrow}
                  </p>
                )}
                <h1 className="hero-copy-title">
                  {slide.title.map((line, lineIndex) => (
                    <span
                      key={line}
                      className={
                        activeSlide === index
                          ? `hero-copy-line hero-copy-animate${
                              lineIndex === 1 ? ' hero-copy-line--gold' : ''
                            }`
                          : `hero-copy-line${
                              lineIndex === 1 ? ' hero-copy-line--gold' : ''
                            }`
                      }
                      style={{ animationDelay: `${lineIndex * 140 + 100}ms` }}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
                {slide.description && (
                  <p
                    className={
                      activeSlide === index
                        ? 'hero-copy-description hero-copy-animate'
                        : 'hero-copy-description'
                    }
                    style={{ animationDelay: '380ms' }}
                  >
                    {slide.description}
                  </p>
                )}
                <button
                  type="button"
                  className={
                    activeSlide === index
                      ? 'hero-copy-button hero-copy-animate'
                      : 'hero-copy-button'
                  }
                  style={{
                    animationDelay:
                      slide.id === 'corporate' ? '420ms' : '520ms',
                  }}
                  onClick={openContact}
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Önceki slayt"
          style={{ ...styles.arrow, left: '20px' }}
        >
          ‹
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Sonraki slayt"
          style={{ ...styles.arrow, right: '20px' }}
        >
          ›
        </button>
      </div>

      <div className="hero-mobile-action">
        <button type="button" onClick={openContact}>
          Detaylı Bilgi Al <span aria-hidden="true">→</span>
        </button>
      </div>

      <div style={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`${index + 1}. slayta geç`}
            aria-current={activeSlide === index ? 'true' : undefined}
            style={{
              ...styles.dot,
              backgroundColor:
                activeSlide === index ? '#10264A' : '#D9C7A9',
            }}
          />
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    width: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#F8F5EE',
  },
  slider: {
    position: 'relative',
    width: '100%',
    aspectRatio: '167 / 94',
    overflow: 'hidden',
    backgroundColor: '#F8F5EE',
  },
  slide: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    minHeight: '100%',
    transition: 'opacity 500ms ease-in-out',
  },
  design: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 5,
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '1px solid #D6AA68',
    backgroundColor: 'rgba(248,245,238,0.92)',
    color: '#10264A',
    fontSize: '32px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '16px',
    backgroundColor: '#F8F5EE',
  },
  dot: {
    width: '12px',
    height: '12px',
    border: '1px solid #C5A875',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};
