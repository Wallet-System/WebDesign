import React from 'react';
import { servicesData } from '../data/mockData';

export const ServicesSection: React.FC = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.sectionTitle}>Hizmetlerimiz</h2>
      <div style={styles.grid}>
        {servicesData.map((service) => (
          <div key={service.id} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '60px 32px',
    backgroundColor: '#050505',
    color: '#ffffff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '28px',
    color: '#e5c178',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#121212',
    border: '1px solid #262626',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  icon: {
    fontSize: '32px',
  },
  cardTitle: {
    fontSize: '20px',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#a3a3a3',
    lineHeight: '1.5',
  },
};

export default ServicesSection;