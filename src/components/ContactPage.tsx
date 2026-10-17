import type { FormEvent } from 'react';
import './contact-page.css';

const contactQuestions = [
  {
    question: 'FavyoFlex Card’ı kimler alabilir?',
    answer:
      'FavyoFlex Card, çalışanlarına giyim yan hakkı sunmak isteyen kurumlar ve kartın sunulduğu bireysel kullanıcılar tarafından kullanılabilir.',
  },
  {
    question: 'Ödeme almak için ek bir POS cihazı gerekiyor mu?',
    answer:
      'Hayır. Üye iş yerleri mevcut altyapıları veya FavyoFlex’in dijital çözümleriyle ödeme kabul edebilir; ilave bir POS cihazı gerekmez.',
  },
  {
    question: 'Kartıma nasıl bakiye yüklenir?',
    answer:
      'Kurumunuzun tanımladığı bakiyeyi uygulama üzerinden takip edebilirsiniz. Bireysel kullanımda uygulamanın sunduğu yöntemlerle ek bakiye yükleyebilirsiniz.',
  },
  {
    question: 'Koruyucu giyim de mi satıyorsunuz?',
    answer:
      'FavyoFlex Card; giyim, ayni yardım ve kurumsal koruyucu giyim kalemlerinde kullanılabilir. Kullanım kapsamı kurumunuzun tanımladığı haklara göre değişebilir.',
  },
];

export const ContactPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      `Kurum Adı: ${form.get('company')}`,
      `Ad Soyad: ${form.get('fullName')}`,
      `Telefon: ${form.get('phone')}`,
      `İkinci Telefon: ${form.get('alternatePhone') || 'Belirtilmedi'}`,
      `E-posta: ${form.get('email')}`,
      `Müşteri Tipi: ${form.get('customerType')}`,
      `Talep Tipi: ${form.get('requestType')}`,
      '',
      'Konu / Mesaj:',
      String(form.get('message')),
    ].join('\n');
    const subject = `FavyoFlex iletişim talebi - ${form.get('requestType')}`;
    window.location.href = `mailto:info@favyoflexcard.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <main className="contact-page">
      <div className="contact-page__glow contact-page__glow--one" />
      <div className="contact-page__glow contact-page__glow--two" />
      <div className="contact-page__inner">
        <header className="contact-page__header">
          <span className="contact-page__eyebrow">FAVYOFLEX CARD İLETİŞİM</span>
          <h1>İletişim <span>&</span> Teklif Formu</h1>
          <p>
            Sorularınız veya iş birliği teklifleriniz için formu doldurarak
            bize ulaşabilirsiniz.
          </p>
        </header>

        <section className="contact-page__form-card" aria-label="İletişim formu">
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <div className="contact-page__field-grid">
              <label className="contact-page__field">
                <span>Kurum Adı</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Şirket veya kurum adı"
                  autoComplete="organization"
                  required
                />
              </label>
              <label className="contact-page__field">
                <span>Ad Soyad</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Adınız ve soyadınız"
                  autoComplete="name"
                  required
                />
              </label>
            </div>

            <div className="contact-page__field-grid">
              <label className="contact-page__field">
                <span>Telefon Numarası</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="05xx xxx xx xx"
                  autoComplete="tel"
                  pattern="0?5[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{2}[ ]?[0-9]{2}"
                  title="05xx xxx xx xx formatında telefon numarası girin."
                  required
                />
                <small>05xx xxx xx xx formatında giriniz.</small>
              </label>
              <label className="contact-page__field">
                <span>İkinci Telefon <em>(Opsiyonel)</em></span>
                <input
                  type="tel"
                  name="alternatePhone"
                  placeholder="05xx xxx xx xx"
                  autoComplete="tel"
                  pattern="0?5[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{2}[ ]?[0-9]{2}"
                  title="05xx xxx xx xx formatında telefon numarası girin."
                />
                <small>05xx xxx xx xx formatında giriniz.</small>
              </label>
            </div>

            <label className="contact-page__field">
              <span>E-Posta Adresi</span>
              <input
                type="email"
                name="email"
                placeholder="ornek@kurum.com"
                autoComplete="email"
                required
              />
            </label>

            <div className="contact-page__field-grid">
              <label className="contact-page__field">
                <span>Müşteri Tipini Seçiniz</span>
                <select name="customerType" defaultValue="" required>
                  <option value="" disabled>Müşteri tipini seçiniz</option>
                  <option value="Kurumsal Şirket">Kurumsal Şirket</option>
                  <option value="KOBİ / İşletme">KOBİ / İşletme</option>
                  <option value="Bireysel Kullanıcı">Bireysel Kullanıcı</option>
                </select>
              </label>
              <label className="contact-page__field">
                <span>Talep Tipini Seçiniz</span>
                <select name="requestType" defaultValue="" required>
                  <option value="" disabled>Talep tipini seçiniz</option>
                  <option value="Teklif Talebi">Teklif Talebi</option>
                  <option value="Teknik Destek">Teknik Destek</option>
                  <option value="Genel Bilgi">Genel Bilgi</option>
                </select>
              </label>
            </div>

            <label className="contact-page__field">
              <span>Konu / Mesaj</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Talebinizi detaylı bir şekilde buraya yazabilirsiniz..."
                required
              />
            </label>

            <label className="contact-page__consent">
              <input type="checkbox" name="consent" required />
              <span>
                Tarafımca sunulan verilerin Favyo Kurumsal Hizmetler A.Ş.
                tarafından tanıtım, promosyon ve bilgilendirme amaçlarıyla
                kullanılmasına ve bu kapsamda tarafıma ticari elektronik ileti
                gönderilmesine muvafakat ediyorum.
              </span>
            </label>

            <button className="contact-page__submit" type="submit">
              Gönder <span aria-hidden="true">→</span>
            </button>
            <p className="contact-page__note">
              Gönder düğmesi e-posta uygulamanızı açar; talebinizi oradan
              gönderebilirsiniz.
            </p>
          </form>
        </section>

        <section className="contact-page__faq" aria-labelledby="contact-page-faq-title">
          <header className="contact-page__faq-header">
            <span className="contact-page__eyebrow">YARDIM</span>
            <h2 id="contact-page-faq-title">Sıkça Sorulan Sorular</h2>
            <p>Formu göndermeden önce merak ettiklerinize göz atın.</p>
          </header>

          <div className="contact-page__faq-list">
            {contactQuestions.map(({ question, answer }) => (
              <details className="contact-page__faq-item" key={question}>
                <summary>
                  <span>{question}</span>
                  <span className="contact-page__faq-toggle" aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
