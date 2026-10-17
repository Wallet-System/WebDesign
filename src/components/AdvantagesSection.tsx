import React from 'react';
import { Lottie } from 'lottie-react';
import easySetupIcon from '../assets/easy-setup-icon.json';
import solutionTailoredIcon from '../assets/solution-tailored-icon.json';

interface AdvantageItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const advantagesData: AdvantageItem[] = [
  {
    id: 1,
    icon: '⚡', // İsterseniz Lucide-react / FontAwesome ikonuyla değiştirebilirsiniz
    title: 'Daha Kolay Kurulum ve Kullanım',
    description: 'Kurumlar için tek tıkla toplu bakiye yükleme ve dakikalar içinde aktifleşen dijital altyapı. Operasyonel yük sıfırlanır.'
  },
  {
    id: 2,
    icon: '🎛️',
    title: 'İhtiyaca Uygun Çözüm',
    description: 'Farklı departmanlara, unvanlara veya dönemlere özel esnek harcama limitleri ve geçerlilik takvimleri belirleyin.'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Daha Hızlı Dijital Deneyim',
    description: 'Fiziki karta gerek kalmadan QR kodla temassız ödeme, anlık bildirimler ve harcama detaylarının mobil takibi.'
  },
  {
    id: 4,
    icon: '🛍️',
    title: 'Geniş Mağaza & Marka Ağı',
    description: "Sadece belirli birkaç mağazada değil; Türkiye'nin en popüler zincir giyim ve ayakkabı mağazalarında tam geçerlilik."
  }
];

export const AdvantagesSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Üst Rozet / Tag */}
        <span style={styles.badge}>FARK YARATAN ÇÖZÜMLER</span>
        
        {/* Ana Başlık */}
        <h2 style={styles.title}>
          Neden FavyoFlex Card?
        </h2>
        
        {/* Alt Açıklama */}
        <p style={styles.subtitle}>
          İnsan kaynakları ekiplerine zaman ve maliyet tasarrufu, çalışanlara ise istedikleri markadan alışveriş yapma özgürlüğü sunuyoruz.
        </p>

        {/* Kartlar Izgarası */}
        <div style={styles.grid}>
          {advantagesData.map((item) => {
            const icon = item.id === 1
              ? (
                <Lottie
                  src={easySetupIcon}
                  autoplay
                  loop
                  style={styles.easySetupAnimation}
                  aria-hidden="true"
                />
              )
              : item.id === 2
                ? (
                  <>
                    <Lottie
                      src={solutionTailoredIcon}
                      autoplay
                      loop
                      style={styles.animatedIcon}
                      aria-hidden="true"
                    />
                    <div style={styles.solutionLabels} aria-hidden="true">
                      <span style={{ ...styles.solutionLabel, left: '7%' }}>
                        Kolay
                        <br />
                        Kurulum
                      </span>
                      <span style={{ ...styles.solutionLabel, left: '42%' }}>
                        Esnek
                        <br />
                        Kullanım
                      </span>
                      <span style={{ ...styles.solutionLabel, left: '77%' }}>
                        Geniş
                        <br />
                        Marka Ağı
                      </span>
                      <span style={styles.solutionBrand}>
                        FavyoFlex
                        <br />
                        Card
                      </span>
                    </div>
                  </>
                )
                : item.id === 3
                  ? (
                    <Lottie
                      src="/qr-payment-animation.json"
                      autoplay
                      loop
                      style={styles.digitalExperienceAnimation}
                      aria-hidden="true"
                    />
                  )
                  : item.id === 4
                    ? (
                      <Lottie
                        src="/brand-network-logos.json"
                        autoplay
                        loop
                        style={styles.brandNetworkAnimation}
                        aria-hidden="true"
                      />
                    )
                    : <span style={styles.icon}>{item.icon}</span>;

            const iconContainerStyle = item.id === 1
              ? styles.easySetupIconContainer
              : item.id === 2
                ? styles.solutionIconContainer
                : item.id === 3
                  ? styles.digitalExperienceIconContainer
                  : item.id === 4
                    ? styles.brandNetworkIconContainer
                    : styles.iconContainer;

            return (
              <div key={item.id} style={styles.card}>
                <div style={styles.visualArea}>
                  <div style={iconContainerStyle}>{icon}</div>
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#FAF8F5', // Görseldeki hafif krem/bej arka plan
    padding: '80px 20px',
    textAlign: 'center',
    fontFamily: 'var(--sans)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  badge: {
    backgroundColor: '#F3ECE3',
    color: '#8C7355',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    padding: '6px 16px',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '16px'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: '12px'
  },
  subtitle: {
    fontSize: '15px',
    color: '#666666',
    maxWidth: '600px',
    margin: '0 auto 48px auto',
    lineHeight: '1.6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'left',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    border: '1px solid #F0EAE1',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  visualArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'clamp(190px, 20vw, 260px)',
    marginBottom: '16px'
  },
  iconContainer: {
    alignSelf: 'center',
    width: '64px',
    height: '64px',
    backgroundColor: '#F7F3ED',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0
  },
  icon: {
    fontSize: '28px'
  },
  easySetupIconContainer: {
    position: 'relative',
    alignSelf: 'center',
    width: 'clamp(96px, 50%, 160px)',
    aspectRatio: '1',
    marginBottom: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent'
  },
  easySetupAnimation: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  solutionIconContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '220px',
    aspectRatio: '284 / 215',
    containerType: 'inline-size',
    backgroundColor: 'transparent',
    borderRadius: '12px',
    marginBottom: 0,
    overflow: 'hidden'
  },
  digitalExperienceIconContainer: {
    position: 'relative',
    alignSelf: 'center',
    width: 'clamp(120px, 60%, 180px)',
    aspectRatio: '1',
    marginBottom: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent'
  },
  digitalExperienceAnimation: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  animatedIcon: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  solutionLabels: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none'
  },
  solutionLabel: {
    position: 'absolute',
    top: '0.5%',
    width: '17.8%',
    height: '22.8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '20%',
    backgroundColor: '#112032',
    color: '#FFFFFF',
    fontSize: '7px',
    fontWeight: 'bold',
    lineHeight: 1.05,
    textAlign: 'center'
  },
  solutionBrand: {
    position: 'absolute',
    top: '38%',
    left: '33%',
    width: '34%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24%',
    backgroundColor: '#112032',
    color: '#FFFFFF',
    fontSize: 'clamp(9px, 4.5cqi, 13px)',
    fontWeight: 'bold',
    lineHeight: 1.1,
    textAlign: 'center'
  },
  brandNetworkIconContainer: {
    position: 'relative',
    alignSelf: 'center',
    width: '100%',
    maxWidth: '280px',
    aspectRatio: '1366 / 540',
    marginBottom: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent'
  },
  brandNetworkAnimation: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  cardTitle: {
    alignSelf: 'stretch',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#632E31',
    margin: '18px 0 8px',
    lineHeight: '1.3',
    textAlign: 'left'
  },
  cardDescription: {
    width: '100%',
    fontSize: '14px',
    color: '#8B5D58',
    lineHeight: '1.7',
    margin: 0
  }
};