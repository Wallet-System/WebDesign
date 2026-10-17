import './contact-faq-section.css';

const contactDetails = [
  {
    label: 'GENEL E-POSTA',
    value: 'info@favyoflexcard.com',
    href: 'mailto:info@favyoflexcard.com',
  },
  {
    label: 'KURUMSAL TEKLİF',
    value: 'kurumsal@favyoflexcard.com',
    href: 'mailto:kurumsal@favyoflexcard.com',
  },
  {
    label: 'ÜYE İŞ YERİ BAŞVURUSU',
    value: 'uyeisyeri@favyoflexcard.com',
    href: 'mailto:uyeisyeri@favyoflexcard.com',
  },
  {
    label: 'KART DESTEĞİ',
    value: 'destek@favyoflexcard.com',
    href: 'mailto:destek@favyoflexcard.com',
  },
];

const questions = [
  {
    question: 'FavyoFlex Card’ı kimler alabilir?',
    answer:
      'FavyoFlex Card, çalışanlarına giyim yan hakkı sunmak isteyen kurumlar ve kartın sunulduğu bireysel kullanıcılar tarafından kullanılabilir.',
  },
  {
    question: 'Ödeme almak için ek bir POS cihazı gerekiyor mu?',
    answer:
      'Hayır. Üye iş yerleri mevcut altyapıları üzerinden veya FavyoFlex’in sunduğu dijital çözümlerle ödeme kabul edebilir; ilave bir POS cihazı gerekmez.',
  },
  {
    question: 'Kartıma nasıl bakiye yüklenir?',
    answer:
      'Kurumunuzun tanımladığı giyim bakiyenizi uygulama üzerinden takip edebilirsiniz. Bireysel kullanımda, uygulamanın sunduğu yükleme yöntemleriyle ek bakiye yükleyebilirsiniz.',
  },
  {
    question: 'Koruyucu giyim de mi satıyorsunuz?',
    answer:
      'FavyoFlex Card; giyim, ayni yardım ve kurumsal koruyucu giyim kalemlerinde kullanılabilir. Kullanım kapsamı kurumunuzun tanımladığı haklara göre değişebilir.',
  },
];

export const ContactAndFaqSection = () => (
  <section className="contact-faq" aria-label="İletişim ve sıkça sorulan sorular">
    <div className="contact-faq__grid">
      <article className="contact-faq__panel contact-faq__contact">
        <h2 className="contact-faq__heading">
          Form doldurmak
          <br />
          <em>istemiyorsanız.</em>
        </h2>
        <p className="contact-faq__intro">
          Konunuza uygun adrese doğrudan yazabilirsiniz. Yukarıdaki
          başlıklardan hiçbiri size uymuyorsa ya da kısa bir sorunuz
          varsa genel e-posta adresini kullanın.
        </p>

        <div className="contact-faq__details">
          {contactDetails.map((detail) => (
            <div className="contact-faq__detail" key={detail.label}>
              <span className="contact-faq__label">{detail.label}</span>
              <a href={detail.href}>{detail.value}</a>
            </div>
          ))}
          <div className="contact-faq__detail">
            <span className="contact-faq__label">ÇALIŞMA SAATLERİ</span>
            <span>Hafta içi 09.00 – 18.00</span>
          </div>
          <div className="contact-faq__detail contact-faq__detail--company">
            <span className="contact-faq__label">MARKANIN SAHİBİ</span>
            <span className="contact-faq__company-name">
              Siltek Teknoloji Kurumsal Hizmetler San. Tic. A.Ş. <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </article>

      <article className="contact-faq__panel contact-faq__questions">
        <h2 className="contact-faq__heading">
          Yazmadan önce
          <br />
          <em>merak edilenler.</em>
        </h2>

        <div className="contact-faq__accordion">
          {questions.map(({ question, answer }, index) => (
            <details className="contact-faq__item" key={question}>
              <summary>
                <span className="contact-faq__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="contact-faq__question">{question}</span>
                <span className="contact-faq__toggle" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <a className="contact-faq__support" href="mailto:destek@favyoflexcard.com">
          <span>
            <strong>Sorunuz burada yok mu?</strong>
            <small>Destek formundan bize yazabilirsiniz.</small>
          </span>
          <span className="contact-faq__support-link">
            Destek formu <span aria-hidden="true">→</span>
          </span>
        </a>
      </article>
    </div>
  </section>
);
