<div align="center">

# 📚 Read Journey

**Kişiselleştirilmiş okuma deneyimi için modern web uygulaması**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[🌐 Canlı Demo](https://read-journey-iota.vercel.app) • [📖 Dokümantasyon](#-özellikler) • [🐛 Sorun Bildir](https://github.com/salptkin/ReadJourney/issues)

</div>

---

## 📑 İçindekiler

- [📖 Hakkında](#-hakkında)
- [✨ Özellikler](#-özellikler)
- [🛠️ Teknolojiler](#️-teknolojiler)
- [🚀 Kurulum](#-kurulum)
- [📁 Proje Yapısı](#-proje-yapısı)
- [💻 Kullanım](#-kullanım)
- [📸 Ekran Görüntüleri](#-ekran-görüntüleri)
- [🤝 Katkıda Bulunma](#-katkıda-bulunma)
- [👤 Yazar](#-yazar)
- [📄 Lisans](#-lisans)

---

## 📖 Hakkında

**Read Journey**, kitap severler için tasarlanmış modern ve kullanıcı dostu bir okuma takip uygulamasıdır. Kullanıcıların okuma alışkanlıklarını yönetmelerine, ilerlemelerini takip etmelerine ve kişisel kütüphanelerini oluşturmalarına olanak tanır.

### 🎯 Proje Amacı

- ✅ Okuma alışkanlıklarını takip etme
- ✅ Kişisel kütüphane oluşturma
- ✅ Okuma ilerlemesini görselleştirme
- ✅ Kitap keşfi ve önerileri
- ✅ Aktivite geçmişi takibi

---

## ✨ Özellikler

### 🔐 Kullanıcı Yönetimi

- 🧑‍💻 **Kayıt ve Giriş:** Güvenli kullanıcı kimlik doğrulama sistemi
- 👤 **Kişiselleştirilmiş Profil:** Her kullanıcı için özel hesap yönetimi

### 📚 Kitap Yönetimi

- 🔍 **Gelişmiş Arama:** Başlık ve yazara göre filtreleme
- 📖 **Kitap Keşfi:** Özenle seçilmiş önerilen kitaplar
- ➕ **Özel Kitap Ekleme:** Kendi kitaplarınızı ekleyerek kişisel koleksiyon oluşturma
- 📁 **Kütüphane Yönetimi:** Beğenilen kitapları kişisel kütüphaneye ekleme

### 📊 İlerleme Takibi

- 📈 **Okuma İlerlemesi:** Her kitap için okunan sayfa yüzdesini takip etme
- 🟢 **Görsel Gösterge:** Daire (circle) ilerleme göstergesi ile sezgisel görselleştirme
- 🕒 **Aktivite Günlüğü:** Tarihe göre sıralı okuma aktiviteleri (okunan sayfa sayısı ve harcanan süre)

### 🎨 Kullanıcı Deneyimi

- 📱 **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- ⚡ **Hızlı ve Performanslı:** Modern web teknolojileri ile optimize edilmiş
- 🎯 **Sezgisel Arayüz:** Kullanıcı dostu ve modern tasarım

---

## 🛠️ Teknolojiler

### Frontend Framework & Kütüphaneler

- **React 19.1.1** - Modern UI geliştirme
- **Vite 7.1.2** - Hızlı build tool ve dev server
- **React Router DOM 7.8.2** - Sayfa yönlendirme
- **Redux Toolkit 2.8.2** - State yönetimi
- **Redux Persist 6.0.0** - State kalıcılığı

### Form & Validasyon

- **Formik 2.4.6** - Form yönetimi
- **Yup 1.7.0** - Şema validasyonu

### UI & Styling

- **CSS Modules** - Bileşen bazlı stil yönetimi
- **React Circular Progressbar 2.2.0** - İlerleme göstergeleri
- **React Select 5.10.2** - Gelişmiş select bileşenleri
- **React Spinners 0.17.0** - Yükleme animasyonları
- **React Hot Toast 2.6.0** - Bildirim sistemi

### HTTP & API

- **Axios 1.11.0** - HTTP istekleri

### SEO & Meta

- **React Helmet Async 2.0.5** - SEO optimizasyonu

### Diğer

- **CLSX 2.1.1** - Koşullu class birleştirme
- **Prop Types 15.8.1** - Tip kontrolü

### Geliştirme Araçları

- **ESLint 9.33.0** - Kod kalitesi kontrolü
- **Terser 5.44.0** - Kod minifikasyonu

---

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri önerilir)
- npm veya yarn

### Adımlar

1. **Depoyu klonlayın**

   ```bash
   git clone https://github.com/salptkin/ReadJourney.git
   ```

2. **Proje dizinine gidin**

   ```bash
   cd ReadJourney
   ```

3. **Bağımlılıkları yükleyin**

   ```bash
   npm install
   ```

4. **Geliştirme sunucusunu başlatın**

   ```bash
   npm run dev
   ```

5. **Tarayıcınızda açın**
   ```
   http://localhost:5173
   ```
   (veya terminalde belirtilen adresi kullanın)

### Diğer Komutlar

```bash
# Production build oluştur
npm run build

# Build önizlemesi
npm run preview

# Lint kontrolü
npm run lint

# Cache temizleme
npm run clean
```

---

## 📁 Proje Yapısı

```
ReadJourney/
├── public/                 # Statik dosyalar
│   ├── images/            # Görseller
│   └── favicon/           # Favicon dosyaları
├── src/
│   ├── components/        # React bileşenleri
│   │   ├── AuthError/     # Hata bileşenleri
│   │   ├── BookAddForm/   # Kitap ekleme formu
│   │   ├── BookList/      # Kitap listesi
│   │   ├── Dashboard/     # Dashboard bileşeni
│   │   ├── Diary/         # Günlük aktiviteler
│   │   └── ...            # Diğer bileşenler
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── HomePage/      # Ana sayfa
│   │   ├── LibraryPage/   # Kütüphane sayfası
│   │   ├── LoginPage/     # Giriş sayfası
│   │   └── ...            # Diğer sayfalar
│   ├── store/             # Redux store
│   │   ├── auth/          # Auth state
│   │   ├── book/          # Book state
│   │   └── modal/         # Modal state
│   ├── services/          # API servisleri
│   ├── routes/            # Route yapılandırması
│   ├── utils/             # Yardımcı fonksiyonlar
│   ├── helpers/           # Helper fonksiyonlar
│   └── customhooks/       # Özel React hook'ları
├── package.json
├── vite.config.js
└── README.md
```

---

## 💻 Kullanım

### İlk Kullanım

1. **Hesap Oluşturma**

   - Ana sayfada "Kayıt Ol" butonuna tıklayın
   - Gerekli bilgileri doldurun
   - Hesabınızı oluşturun

2. **Kitap Keşfetme**

   - Ana sayfada önerilen kitapları inceleyin
   - Başlık veya yazara göre filtreleme yapın
   - Beğendiğiniz kitapları kütüphanenize ekleyin

3. **Okuma Takibi**
   - Kütüphanenizden bir kitap seçin
   - Okuma ilerlemenizi güncelleyin
   - Aktivite geçmişinizi görüntüleyin

### Özellikler

- **Kitap Ekleme:** Kendi kitaplarınızı ekleyerek kişisel koleksiyon oluşturun
- **İlerleme Takibi:** Her kitap için okuma yüzdesini görsel olarak takip edin
- **Aktivite Günlüğü:** Okuma aktivitelerinizi tarihe göre görüntüleyin

---

## 📸 Ekran Görüntüleri

> 📝 _Ekran görüntüleri yakında eklenecek_

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Bu depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Bir Pull Request oluşturun

### Katkı Kuralları

- Kod standartlarına uyun
- Yeni özellikler için test yazın
- Dokümantasyonu güncelleyin
- Açıklayıcı commit mesajları kullanın

---

## 👤 Yazar

<div align="center">

**Samet Alptekin Eroğlu**

[![GitHub](https://img.shields.io/badge/GitHub-salptkin-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/salptkin)

[🌐 Canlı Demo](https://read-journey-iota.vercel.app)

</div>

---

## 📄 Lisans

Bu proje açık kaynaklıdır ve MIT lisansı altında lisanslanmıştır.

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐**

Made with ❤️ by [salptkin](https://github.com/salptkin)

</div>
