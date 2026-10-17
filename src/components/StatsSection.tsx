import React, { useEffect, useRef, useState } from 'react';
import './stats-section.css';

type StatIconName = 'support' | 'person' | 'receipt';

const StatIcon: React.FC<{ name: StatIconName }> = ({ name }) => {
  const sharedProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 32 32',
    width: 36,
    height: 36,
    'aria-hidden': true as const,
  };

  if (name === 'support') {
    return (
      <svg {...sharedProps}>
        <path d="M5 17v-2a11 11 0 0 1 22 0v2" />
        <path d="M5 16h4v8H7a2 2 0 0 1-2-2v-6Zm22 0h-4v8h2a2 2 0 0 0 2-2v-6Z" />
        <path d="M23 24a4 4 0 0 1-4 4h-4" />
      </svg>
    );
  }

  if (name === 'person') {
    return (
      <svg {...sharedProps}>
        <circle cx="16" cy="10" r="6" />
        <path d="M5 28v-2a9 9 0 0 1 9-9h4a9 9 0 0 1 9 9v2H5Z" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M8 3h16v26l-4-3-4 3-4-3-4 3V3Z" />
      <path d="M12 10h8M12 15h8M12 20h8" />
    </svg>
  );
};

const stats: { value: number; suffix?: string; label: string; icon: StatIconName }[] = [
  { value: 100000, label: 'FavyoFlex Müşterisi', icon: 'support' },
  { value: 5000, label: 'Anlaşmalı Marka', icon: 'person' },
  { value: 10, suffix: ' milyon', label: 'Dijital İşlem', icon: 'receipt' },
];

const AnimatedStatValue: React.FC<{ value: number; suffix?: string }> = ({
  value,
  suffix = '',
}) => {
  const valueRef = useRef<HTMLElement>(null);
  const shouldAnimate =
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [count, setCount] = useState(() => (shouldAnimate ? 0 : value));

  useEffect(() => {
    const element = valueRef.current;
    if (!element || !shouldAnimate) return;

    let animationFrame = 0;
    const duration = 1800;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let startTime: number | undefined;
        const animate = (timestamp: number) => {
          startTime ??= timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easedProgress = 1 - (1 - progress) ** 4;
          setCount(Math.round(value * easedProgress));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [shouldAnimate, value]);

  const formattedCount = suffix
    ? String(count)
    : new Intl.NumberFormat('tr-TR').format(count);

  return (
    <strong className="stats-value" ref={valueRef} style={styles.value}>
      +{formattedCount}{suffix}
    </strong>
  );
};

export const StatsSection: React.FC = () => (
  <section style={styles.section} aria-label="FavyoFlex rakamlarla">
    <div style={styles.container}>
      {stats.map((stat) => (
        <div key={stat.label} style={styles.stat}>
          <div style={styles.icon}>
            <StatIcon name={stat.icon} />
          </div>
          <div style={styles.copy}>
            <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
            <span style={styles.label}>{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#070d18',
    color: '#F8FAFC',
    padding: '36px 20px',
  },
  container: {
    width: '100%',
    maxWidth: '1160px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
    gap: '24px 16px',
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    minWidth: 0,
  },
  icon: {
    width: 'clamp(48px, 4vw, 60px)',
    height: 'clamp(48px, 4vw, 60px)',
    flex: '0 0 clamp(48px, 4vw, 60px)',
    borderRadius: '50%',
    color: '#C78731',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  value: {
    fontSize: 'clamp(24px, 2.5vw, 36px)',
    fontWeight: 700,
    letterSpacing: '-0.04em',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
  },
  label: {
    color: '#B8C2D0',
    fontSize: '12px',
    fontWeight: 600,
    marginTop: '4px',
  },
};
