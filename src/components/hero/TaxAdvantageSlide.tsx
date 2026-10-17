
import React from 'react';

type TaxAdvantageSlideProps = {
  isActive: boolean;
};

export const TaxAdvantageSlide: React.FC<TaxAdvantageSlideProps> = ({
  isActive,
}) => {
  const animationClass = isActive ? 'hero-enter' : '';

  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <span
          className={animationClass}
          style={{ ...styles.eyebrow, animationDelay: '80ms' }}
        >
          FAVYO FLEX CARD
        </span>

        <h1
          className={animationClass}
          style={{ ...styles.heading, animationDelay: '180ms' }}
        >
          Vergi ve SGK avantajlarıyla
          <br />
          daha verimli bir yapı.
        </h1>

        <p
          className={animationClass}
          style={{ ...styles.description, animationDelay: '300ms' }}
        >
          Çalışan yan haklarınızı planlarken işletmenize
          uygun vergi ve SGK avantajlarını keşfedin.
        </p>

        <button
          type="button"
          className={animationClass}
          style={{ ...styles.button, animationDelay: '420ms' }}
          onClick={() => {
            document.getElementById('iletisim')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Detaylı Bilgi Al
        </button>
      </div>

      <div className={isActive ? 'hero-visual-enter' : ''} style={styles.visual}>
        <div className={isActive ? 'hero-float' : ''} style={styles.benefitCard}>
          <span style={styles.cardLabel}>FAVYO FLEX CARD</span>

          <div style={styles.symbol}>%</div>

          <h2 style={styles.cardTitle}>Vergi ve SGK</h2>
          <p style={styles.cardDescription}>
            Çalışan yan haklarında avantajlar
          </p>

          <div style={styles.bottomLine} />
        </div>

        <div
          className={isActive ? 'hero-note-enter' : ''}
          style={styles.infoCard}
        >
          <span style={styles.infoIcon}>✓</span>
          <span>Avantajları keşfedin</span>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '560px',
    padding: '64px 9%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '48px',
    boxSizing: 'border-box',
    backgroundColor: '#F4EFE5',
    color: '#10264A',
  },
  content: {
    flex: '1 1 52%',
    maxWidth: '650px',
  },
  eyebrow: {
    color: '#A98245',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '3px',
  },
  heading: {
    fontSize: 'clamp(32px, 4vw, 54px)',
    lineHeight: 1.15,
    margin: '22px 0',
    fontWeight: 700,
  },
  description: {
    maxWidth: '540px',
    fontSize: '18px',
    lineHeight: 1.8,
    color: '#586174',
  },
  button: {
    marginTop: '20px',
    padding: '15px 26px',
    border: '1px solid #10264A',
    borderRadius: '7px',
    backgroundColor: '#10264A',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  visual: {
    flex: '1 1 40%',
    minHeight: '340px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9DFCD',
    borderRadius: '28px',
  },
  benefitCard: {
    width: 'min(320px, 82%)',
    padding: '28px',
    boxSizing: 'border-box',
    border: '1px solid #D6AA68',
    borderRadius: '18px',
    backgroundColor: '#FFFCF6',
    boxShadow: '0 22px 45px rgba(16,38,74,0.1)',
  },
  cardLabel: {
    color: '#A98245',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
  },
  symbol: {
    marginTop: '18px',
    color: '#10264A',
    fontSize: '64px',
    lineHeight: 1.1,
    fontWeight: 700,
  },
  cardTitle: {
    margin: '12px 0 6px',
    fontSize: '23px',
    color: '#10264A',
  },
  cardDescription: {
    color: '#586174',
    fontSize: '13px',
    lineHeight: 1.6,
  },
  bottomLine: {
    width: '48px',
    height: '3px',
    marginTop: '22px',
    backgroundColor: '#D6AA68',
  },
  infoCard: {
    position: 'absolute',
    right: '-12px',
    bottom: '35px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 18px',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    color: '#10264A',
    boxShadow: '0 10px 30px rgba(16,38,74,0.1)',
    fontSize: '13px',
    fontWeight: 600,
  },
  infoIcon: {
    color: '#A98245',
    fontSize: '20px',
  },
};
