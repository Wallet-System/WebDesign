
import React from 'react';

type CorporateSlideProps = {
  isActive: boolean;
};

export const CorporateSlide: React.FC<CorporateSlideProps> = ({ isActive }) => {
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
          Şirketiniz için avantaj,
          <br />
          çalışanlarınız için daha fazla fayda.
        </h1>

        <p
          className={animationClass}
          style={{ ...styles.description, animationDelay: '300ms' }}
        >
          Şirketinizin maliyetlerini düşürür hem de
          çalışanlarınız için daha fazla fayda sağlar.
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
        <div className={isActive ? 'hero-float' : ''} style={styles.card}>
          <span style={styles.cardLabel}>FAVYO</span>
          <div style={styles.cardLine} />
          <span style={styles.cardTitle}>Flex Card</span>
          <span style={styles.cardDescription}>
            Kurumsal avantajlar
          </span>
          <div style={styles.cardDecoration} />
        </div>

        <div
          className={isActive ? 'hero-note-enter' : ''}
          style={styles.note}
        >
          <span style={styles.noteMark}>✓</span>
          <span>İşletmenize özel avantajlar</span>
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
    backgroundColor: '#F8F5EE',
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
    border: 'none',
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
    backgroundColor: '#F0E8D9',
    borderRadius: '28px',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    width: 'min(300px, 80%)',
    minHeight: '190px',
    padding: '28px',
    boxSizing: 'border-box',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, #10264A, #203F69)',
    color: '#FFFFFF',
    boxShadow: '0 22px 45px rgba(16,38,74,0.2)',
  },
  cardLabel: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '3px',
  },
  cardLine: {
    width: '42px',
    height: '3px',
    margin: '24px 0 16px',
    backgroundColor: '#D6AA68',
  },
  cardTitle: {
    display: 'block',
    fontSize: '24px',
    fontWeight: 700,
  },
  cardDescription: {
    display: 'block',
    marginTop: '8px',
    color: '#E7D8BC',
    fontSize: '13px',
  },
  cardDecoration: {
    position: 'absolute',
    width: '140px',
    height: '140px',
    right: '-65px',
    bottom: '-70px',
    border: '1px solid rgba(214,170,104,0.65)',
    borderRadius: '50%',
  },
  note: {
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
  noteMark: {
    color: '#A98245',
    fontSize: '20px',
  },
};
