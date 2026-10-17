import React, { useState } from 'react';

export const UsagePointsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <section style={styles.section}>
      {/* Üst Başlık Ve Açıklama */}
      <div style={styles.headerRow}>
        <div style={styles.titleContainer}>
          <span style={styles.subTitle}>MAĞAZA VE KULLANIM AĞI</span>
          <h2 style={styles.mainTitle}>
            FavyoFlex Card <span style={styles.italicTitle}>nerelerde geçer?</span>
          </h2>
        </div>
        <p style={styles.headerDescription}>
          Giyim bakiyenizi kullanabileceğiniz anlaşmalı üye iş yerlerini keşfedin. 
          İhtiyaçlarınıza ve tercihlerinize en uygun alışveriş noktasını bulun.
        </p>
      </div>

      {/* Filtreleme Kartı */}
      <div style={styles.filterCard}>
        <div style={styles.filterGrid}>
          {/* Marka Arama */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Marka veya mağaza adı</label>
            <input
              type="text"
              placeholder="Aramak için yazın..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Şehir Seçimi */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Şehir</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              style={styles.select}
            >
              <option value="">Tüm şehirler</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
            </select>
          </div>

          {/* İlçe Seçimi */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>İlçe</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              style={styles.select}
            >
              <option value="">Tüm ilçeler</option>
              <option value="kadikoy">Kadıköy</option>
              <option value="besiktas">Beşiktaş</option>
              <option value="cankaya">Çankaya</option>
            </select>
          </div>

          {/* Kalem/Kategori Seçimi */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Kalem</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={styles.select}
            >
              <option value="">Tüm kalemler</option>
              <option value="giyim">Giyim</option>
              <option value="ayni-yardim">Ayni Yardım</option>
              <option value="koruyucu-giyim">Kurumsal Koruyucu Giyim</option>
            </select>
          </div>
        </div>

        {/* Filtre Alt Bilgisi */}
        <div style={styles.filterFooter}>
          <span style={styles.infoText}>
            Kart bugün giyim, ayni yardım ve kurumsal koruyucu giyim kalemlerinde geçerlidir.
          </span>
          <span style={styles.countText}>81 İl, 2.500+ Mağaza Noktası</span>
        </div>
      </div>

      {/* Alt Harita / Liste Alanı */}
      <div style={styles.mapCard}>
        <div style={styles.iconContainer}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4v18" />
            <path d="M19 21V11l-6-3" />
            <path d="M9 9h.01" />
            <path d="M9 12h.01" />
            <path d="M9 15h.01" />
            <path d="M9 18h.01" />
          </svg>
        </div>
        <h3 style={styles.mapTitle}>Üye iş yeri listesi ve dijital harita</h3>
        <p style={styles.mapDescription}>
          Anlaşmalı mağaza zincirleri ve butikler harita üzerinde konumunuza en yakın lokasyona göre listelenir.
        </p>

        <div style={styles.linksContainer}>
          <a href="#basvuru" style={styles.link}>
            Üye iş yeri başvurusu yapın &rarr;
          </a>
          <span style={styles.divider}>|</span>
          <a href="#sorun" style={styles.link}>
            Kartınızla ilgili sorunuz mu var? &darr;
          </a>
        </div>
      </div>
    </section>
  );
};

// CSS-in-JS Stillendirmeleri
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#0A1120', // Koyu lacivert/siyah arka plan
    color: '#FFFFFF',
    padding: '60px 80px',
    fontFamily: 'var(--sans)',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '40px',
    gap: '40px',
  },
  titleContainer: {
    flex: 1,
  },
  subTitle: {
    fontSize: '12px',
    letterSpacing: '1.5px',
    color: '#94A3B8',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  },
  mainTitle: {
    fontSize: '32px',
    fontWeight: 700,
    margin: 0,
  },
  italicTitle: {
    fontStyle: 'italic',
    fontWeight: 700,
    color: '#CBD5E1',
  },
  headerDescription: {
    flex: 1,
    color: '#94A3B8',
    fontSize: '15px',
    lineHeight: '1.6',
    margin: 0,
  },
  filterCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    color: '#CBD5E1',
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    padding: '12px 14px',
    color: '#FFF',
    fontSize: '14px',
    outline: 'none',
  },
  select: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    padding: '12px 14px',
    color: '#FFF',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
  },
  filterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '13px',
  },
  infoText: {
    color: '#64748B',
  },
  countText: {
    color: '#94A3B8',
    fontWeight: '600',
  },
  mapCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px dashed rgba(255, 255, 255, 0.12)',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '12px',
    borderRadius: '10px',
    display: 'inline-flex',
    marginBottom: '16px',
  },
  mapTitle: {
    fontSize: '20px',
    fontWeight: '500',
    margin: '0 0 8px 0',
  },
  mapDescription: {
    color: '#94A3B8',
    fontSize: '14px',
    maxWidth: '500px',
    margin: '0 0 20px 0',
    lineHeight: '1.5',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
  },
  link: {
    color: '#E2E8F0',
    textDecoration: 'none',
    fontWeight: '500',
  },
  divider: {
    color: '#475569',
  },
};