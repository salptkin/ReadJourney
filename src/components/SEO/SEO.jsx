import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Read Journey",
  description = "Read Journey ile kitaplarınızı keşfedin, kütüphanenizi oluşturun ve okuma ilerlemenizi takip edin. Önerilen kitapları inceleyin, başlık veya yazara göre filtreleyin ve kişisel okuma deneyiminizi geliştirin.",
  keywords = "kitap, okuma, kütüphane, kitap takibi, okuma ilerlemesi, kitap önerileri, kişisel kütüphane, okuma uygulaması",
  image = "https://read-journey-iota.vercel.app/images/authscreens/phone_desk@1x.png",
  url = "https://read-journey-iota.vercel.app",
  type = "website",
  structuredData = null,
}) => {
  const fullTitle = title.includes("Read Journey") ? title : `${title} | Read Journey`;
  const fullUrl = url || "https://read-journey-iota.vercel.app";

  return (
    <Helmet>
      {/* HTML Lang Attribute */}
      <html lang="tr" />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Samet Alptekin Eroğlu" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Read Journey" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Theme Color */}
      <meta name="theme-color" content="#262626" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

