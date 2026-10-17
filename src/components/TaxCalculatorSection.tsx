import React, { useEffect, useRef, useState } from 'react';

export const TaxCalculatorSection: React.FC = () => {
  const [employeeCount, setEmployeeCount] = useState<number | ''>(100);
  const [dailyUploadAmount, setDailyUploadAmount] = useState<number | ''>(330);
  const [monthlyWorkdays, setMonthlyWorkdays] = useState<number | ''>(26);
  const [model, setModel] = useState<'giyim' | 'temsil'>('giyim');
  const [calculatedInputs, setCalculatedInputs] = useState({
    employeeCount: 100,
    dailyUploadAmount: 330,
    monthlyWorkdays: 26,
  });
  const [visibleCards, setVisibleCards] = useState(() => {
    const supportsScrollAnimation = typeof window !== 'undefined'
      && 'IntersectionObserver' in window
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return {
      form: !supportsScrollAnimation,
      summary: !supportsScrollAnimation,
      breakdown: !supportsScrollAnimation,
    };
  });
  const formCardRef = useRef<HTMLDivElement>(null);
  const summaryCardRef = useRef<HTMLDivElement>(null);
  const breakdownCardRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        if (card === formCardRef.current) {
          setVisibleCards((current) => ({ ...current, form: true }));
        } else if (card === summaryCardRef.current) {
          setVisibleCards((current) => ({ ...current, summary: true }));
        } else if (card === breakdownCardRef.current) {
          setVisibleCards((current) => ({ ...current, breakdown: true }));
        }
        observer.unobserve(card);
      });
    }, { threshold: 0.15 });

    [formCardRef.current, summaryCardRef.current, breakdownCardRef.current].forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Hesaplama Mantığı
  const totalEmployees = calculatedInputs.employeeCount;
  const dailyAmount = calculatedInputs.dailyUploadAmount;
  const workdays = calculatedInputs.monthlyWorkdays;
  const yearlyNetBudget = totalEmployees * dailyAmount * workdays * 12;

  // Vergi ve SGK Oranları (Simülasyon Değerleri)
  const incomeTaxRate = 0.27;
  const sgkEmployerRate = 0.2175; // ~%21.75
  const sgkEmployeeRate = 0.15;   // ~%15
  const stampTaxRate = 0.0275;    // ~%2.75

  const incomeTaxSavings = yearlyNetBudget * incomeTaxRate;
  const sgkEmployerSavings = yearlyNetBudget * sgkEmployerRate;
  const sgkEmployeeSavings = yearlyNetBudget * sgkEmployeeRate;
  const stampTaxSavings = yearlyNetBudget * stampTaxRate;

  const totalYearlySavings = incomeTaxSavings + sgkEmployerSavings + stampTaxSavings;
  const monthlySavings = totalYearlySavings / 12;
  const savingsPercentage = 34.0; // Sabit veya dinamik oran %34.0

  const traditionalTotalCost = yearlyNetBudget + incomeTaxSavings + (sgkEmployerSavings + sgkEmployeeSavings) + stampTaxSavings;
  const favyoFlexTotalCost = yearlyNetBudget;

  const formatTL = (val: number) =>
    new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(val);

  const handleCalculate = () => {
    setCalculatedInputs({
      employeeCount: Number(employeeCount) || 0,
      dailyUploadAmount: Number(dailyUploadAmount) || 0,
      monthlyWorkdays: Number(monthlyWorkdays) || 0,
    });
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Vergi ve yan hak tasarrufunuzu hesaplayın</h2>
      <p style={styles.subtitle}>
        Günlük yükleme, çalışan sayısı ve iş günü sayısını girerek tahmini tasarrufunuzu görün.
      </p>

      {/* Ana İçerik Izgarası */}
      <div style={styles.gridContainer}>
        {/* Hesaplama bilgileri */}
        <div
          ref={formCardRef}
          style={{
            ...styles.cardLeft,
            ...styles.animatedCard,
            ...(visibleCards.form ? styles.cardVisible : styles.cardFromLeft),
          }}
        >
          <div style={styles.cardHeader}>
            <div>
              <h3 style={styles.cardTitle}>Hesaplama bilgileri</h3>
              <p style={styles.cardSub}>Değerleri değiştirerek sonucu görün</p>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Yan hak modeli</label>
            <div style={styles.toggleGroup}>
              <button
                style={{ ...styles.toggleBtn, ...(model === 'giyim' ? styles.toggleActive : {}) }}
                onClick={() => setModel('giyim')}
              >
                Giyim
              </button>
              <button
                style={{ ...styles.toggleBtn, ...(model === 'temsil' ? styles.toggleActive : {}) }}
                onClick={() => setModel('temsil')}
              >
                Giyim + Yemek
              </button>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <div style={styles.labelRow}>
              <label htmlFor="daily-upload-amount" style={styles.label}>Günlük yükleme (₺)</label>
            </div>
            <input
              id="daily-upload-amount"
              type="number"
              min="0"
              step="any"
              value={dailyUploadAmount}
              onChange={(e) => setDailyUploadAmount(e.target.value === '' ? '' : Number(e.target.value))}
              style={styles.fieldInput}
            />
          </div>

          <div style={styles.inputGroup}>
            <div style={styles.labelRow}>
              <label htmlFor="employee-count" style={styles.label}>Çalışan sayısı</label>
            </div>
            <input
              id="employee-count"
              type="number"
              min="0"
              step="1"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value === '' ? '' : Number(e.target.value))}
              style={styles.fieldInput}
            />
          </div>

          <div style={styles.inputGroup}>
            <div style={styles.labelRow}>
              <label htmlFor="monthly-workdays" style={styles.label}>Aylık iş günü sayısı</label>
            </div>
            <input
              id="monthly-workdays"
              type="number"
              min="1"
              max="30"
              step="1"
              value={monthlyWorkdays}
              onChange={(e) => {
                const value = e.target.value;
                setMonthlyWorkdays(value === '' ? '' : Math.min(30, Math.max(1, Number(value))));
              }}
              style={styles.fieldInput}
            />
            <span style={styles.fieldHint}>1 ile 30 arasında iş günü girin.</span>
          </div>

          <button style={styles.primaryBtn} onClick={handleCalculate}>Teklif iste</button>
          <button style={styles.secondaryBtn}>
            Mevzuat özeti (PDF)
          </button>
        </div>

        {/* Sağ Panel: Hesaplama Sonuçları */}
        <div ref={resultsRef} style={styles.rightColumn} aria-live="polite">
          <div style={styles.resultsCard}>
          {/* Üst Özet Kartı */}
          <div
            ref={summaryCardRef}
            style={{
              ...styles.summaryBox,
              ...styles.animatedCard,
              ...(visibleCards.summary ? styles.cardVisible : styles.cardFromRight),
            }}
          >
            <div style={styles.savingsLeft}>
              <span style={styles.savingsLabel}>Yıllık tahmini tasarruf</span>
              <div style={styles.savingsAmount}>{formatTL(totalYearlySavings)}</div>
              <span style={styles.monthlySub}>Aylık: {formatTL(monthlySavings)}</span>
            </div>
            <div style={styles.advantageRight}>
              <span style={styles.advLabel}>Tahmini avantaj</span>
              <div style={styles.advPercent}>%{savingsPercentage.toFixed(1)}</div>
              <span style={styles.advTag}>Tasarruf</span>
            </div>
          </div>

          <div
            ref={breakdownCardRef}
            style={{
              ...styles.tableCard,
              ...styles.animatedCard,
              ...(visibleCards.breakdown ? styles.cardVisible : styles.cardFallsIn),
            }}
          >
            <div style={styles.tableHeader}>
              <span>Hesaplama özeti</span>
            </div>
            <ul style={styles.calculationList}>
              <li style={styles.calculationListItem}>
                <span>Günlük yükleme</span>
                <strong>{formatTL(calculatedInputs.dailyUploadAmount)}</strong>
              </li>
              <li style={styles.calculationListItem}>
                <span>Çalışan sayısı</span>
                <strong>{calculatedInputs.employeeCount} kişi</strong>
              </li>
              <li style={styles.calculationListItem}>
                <span>Aylık iş günü sayısı</span>
                <strong>{calculatedInputs.monthlyWorkdays} gün</strong>
              </li>
            </ul>
            <div style={styles.tableHeader}>
              <span>Yıllık maliyet karşılaştırması</span>
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.thLeft}>Kalem</th>
                  <th style={styles.thCenter}>Nakit ödeme</th>
                  <th style={styles.thRight}>FavyoFlex Card</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.tdLeft}>Yan hak bütçesi</td>
                  <td style={styles.tdCenter}>{formatTL(yearlyNetBudget)}</td>
                  <td style={styles.tdRight}>{formatTL(yearlyNetBudget)}</td>
                </tr>
                <tr>
                  <td style={styles.tdLeft}>Gelir vergisi</td>
                  <td style={styles.tdCenterRed}>+ {formatTL(incomeTaxSavings)}</td>
                  <td style={styles.tdRightGreen}>₺0 (muaf)</td>
                </tr>
                <tr>
                  <td style={styles.tdLeft}>SGK primleri</td>
                  <td style={styles.tdCenterRed}>+ {formatTL(sgkEmployerSavings + sgkEmployeeSavings)}</td>
                  <td style={styles.tdRightGreen}>₺0 (muaf)</td>
                </tr>
                <tr>
                  <td style={styles.tdLeft}>Damga vergisi</td>
                  <td style={styles.tdCenterRed}>+ {formatTL(stampTaxSavings)}</td>
                  <td style={styles.tdRightGreen}>₺0 (muaf)</td>
                </tr>
                <tr style={styles.totalRow}>
                  <td style={styles.tdLeftBold}>Toplam işveren maliyeti</td>
                  <td style={styles.tdCenterBold}>{formatTL(traditionalTotalCost)}</td>
                  <td style={styles.tdRightBold}>{formatTL(favyoFlexTotalCost)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Dipnot Bilgilendirme */}
          <div style={styles.infoFooter}>
            <span style={styles.infoIcon}>i</span>
            <p style={styles.infoText}>
              Bu sonuçlar tahminidir. Vergi ve SGK uygulamaları mevzuata ve şirketinizin durumuna göre değişebilir. Uygulamadan önce uzmanınıza danışın.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CSS-in-JS Stiller
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#070d18',
    color: '#F1F5F9',
    padding: '72px 20px',
    fontFamily: 'var(--sans)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 'clamp(26px, 3vw, 34px)',
    fontWeight: 700,
    color: '#F8FAFC',
    letterSpacing: '-0.03em',
    margin: '0 0 10px',
    textAlign: 'center',
  },
  subtitle: {
    color: '#AAB7C8',
    maxWidth: '560px',
    textAlign: 'center',
    fontSize: '15px',
    lineHeight: '1.6',
    margin: '0 0 32px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
    gap: '20px',
    maxWidth: '1160px',
    width: '100%',
  },
  cardLeft: {
    backgroundColor: '#151C24',
    border: '1px solid #29333E',
    borderRadius: '14px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
  },
  animatedCard: {
    opacity: 0,
    transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1)',
    willChange: 'opacity, transform',
  },
  cardFromLeft: {
    transform: 'translateX(-48px)',
  },
  cardFromRight: {
    transform: 'translateX(48px)',
  },
  cardFallsIn: {
    transform: 'translateY(-36px)',
  },
  cardVisible: {
    opacity: 1,
    transform: 'translate(0, 0)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#F4F6F8',
    margin: 0,
  },
  cardSub: {
    fontSize: '13px',
    color: '#A7B0BA',
    margin: '4px 0 0 0',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    color: '#D6DCE2',
    fontWeight: 600,
  },
  labelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    backgroundColor: '#10161D',
    padding: '4px',
    borderRadius: '9px',
    gap: '4px',
  },
  toggleBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#AEB8C2',
    padding: '10px 8px',
    fontSize: '13px',
    borderRadius: '7px',
    cursor: 'pointer',
  },
  toggleActive: {
    backgroundColor: '#293744',
    color: '#FFFFFF',
    fontWeight: 600,
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.24)',
  },
  fieldInput: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#10161D',
    border: '1px solid #35414D',
    borderRadius: '6px',
    color: '#F4F6F8',
    padding: '11px 12px',
    fontSize: '15px',
  },
  fieldHint: {
    color: '#A7B0BA',
    fontSize: '12px',
  },
  primaryBtn: {
    backgroundColor: '#C78731',
    color: '#FFFFFF',
    border: 'none',
    padding: '14px',
    borderRadius: '7px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '10px',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#D0D7DE',
    padding: '8px',
    borderRadius: '8px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  resultsCard: {
    backgroundColor: '#151C24',
    border: '1px solid #29333E',
    borderRadius: '14px',
    padding: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
  },
  summaryBox: {
    backgroundColor: '#1C2732',
    border: 'none',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  savingsLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  savingsLabel: {
    fontSize: '13px',
    color: '#C2CBD4',
  },
  savingsAmount: {
    fontSize: 'clamp(28px, 3vw, 36px)',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '4px 0',
  },
  monthlySub: {
    fontSize: '12px',
    color: '#A7B0BA',
  },
  advantageRight: {
    paddingLeft: '16px',
    borderLeft: '1px solid #3A4652',
    textAlign: 'center',
  },
  advLabel: {
    fontSize: '10px',
    color: '#C2CBD4',
  },
  advPercent: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#F2C879',
  },
  advTag: {
    fontSize: '10px',
    color: '#A7B0BA',
  },
  tableCard: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 0,
    padding: '0 2px',
    boxShadow: 'none',
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#F4F6F8',
  },
  calculationList: {
    listStyle: 'none',
    margin: '0 0 20px',
    padding: 0,
  },
  calculationListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    padding: '10px 0',
    borderBottom: '1px solid #303B46',
    color: '#C2CBD4',
    fontSize: '13px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '13px',
  },
  thLeft: { textAlign: 'left', color: '#A7B0BA', paddingBottom: '10px' },
  thCenter: { textAlign: 'center', color: '#A7B0BA', paddingBottom: '10px' },
  thRight: { textAlign: 'right', color: '#A7B0BA', paddingBottom: '10px' },
  tdLeft: { padding: '10px 0', borderTop: '1px solid #303B46', color: '#C2CBD4' },
  tdCenter: { textAlign: 'center', padding: '10px 0', borderTop: '1px solid #303B46', color: '#C2CBD4' },
  tdRight: { textAlign: 'right', padding: '10px 0', borderTop: '1px solid #303B46', color: '#F4F6F8' },
  tdCenterRed: { textAlign: 'center', padding: '10px 0', borderTop: '1px solid #303B46', color: '#F28B82' },
  tdRightGreen: { textAlign: 'right', padding: '10px 0', borderTop: '1px solid #303B46', color: '#72C99A' },
  totalRow: { fontWeight: 'bold' },
  tdLeftBold: { padding: '12px 0', borderTop: '1px solid #46525E', color: '#FFFFFF' },
  tdCenterBold: { textAlign: 'center', padding: '12px 0', borderTop: '1px solid #46525E', color: '#FFFFFF' },
  tdRightBold: { textAlign: 'right', padding: '12px 0', borderTop: '1px solid #46525E', color: '#FFFFFF' },
  infoFooter: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0',
    padding: '4px 2px',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  infoIcon: {
    backgroundColor: '#293744',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    color: '#D6DCE2',
    flexShrink: 0,
  },
  infoText: {
    fontSize: '11px',
    color: '#A7B0BA',
    margin: 0,
    lineHeight: '1.4',
  },
};