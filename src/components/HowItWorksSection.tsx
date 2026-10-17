import React from 'react';
import { howItWorksSteps } from '../data/mockData';

export const HowItWorksSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.headerContainer}>
        <span style={styles.badge}>KOLAY ENTEGRASYON</span>
        <h2 style={styles.title}>
          FavyoFlex Card <span style={styles.italicText}>nasıl çalışır?</span>
        </h2>
        <p style={styles.subtitle}>
          Uçtan uca zahmetsiz, 3 basit adımda kusursuz kurumsal entegrasyon.
        </p>
      </div>

      <div style={styles.grid}>
        {howItWorksSteps.map((step) => (
          <div key={step.id} style={styles.card}>
            <div
              style={{
                ...styles.imageContainer,
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                style={styles.image}
              />
            </div>

            <div style={styles.content}>
              <span style={styles.stepNumber}>{step.id}</span>
              <h3 style={styles.cardTitle}>{step.title}</h3>
              <p style={styles.cardDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#FAF9F6',
    textAlign: 'center',
    fontFamily: 'var(--sans)'
  },
  headerContainer: {
    marginBottom: '50px'
  },
  badge: {
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    color: '#B58D52',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1A2B3C',
    margin: '0 0 12px 0'
  },
  italicText: {
    fontStyle: 'italic',
    fontFamily: 'var(--sans)'
  },
  subtitle: {
    fontSize: '15px',
    color: '#666',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    border: '1px solid #EAEAEA',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
  },
  imageContainer: {
    backgroundColor: '#0F172A',
    borderRadius: '12px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: '20px'
  },
  cardPhotoContainer: {
    backgroundColor: '#FAF9F6',
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 'none',
    maxHeight: 'none',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  content: {
    padding: '0 8px 8px 8px'
  },
  stepNumber: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#B58D52',
    display: 'block',
    marginBottom: '6px'
  },
  cardTitle: {
    fontSize: '20px',
    color: '#1A2B3C',
    margin: '0 0 10px 0',
    fontFamily: 'var(--sans)'
  },
  cardDescription: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
    margin: 0
  }
};