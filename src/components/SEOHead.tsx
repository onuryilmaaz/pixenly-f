import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = "Anasayfa", 
  description = "Kocaeli'nin önde gelen web tasarım stüdyosu. Modern, yaratıcı ve mobil uyumlu web siteleri tasarlıyoruz.", 
  keywords = "web tasarım, kocaeli, web sitesi, ui/ux, logo tasarım, mobil uyumlu",
  image = "/og-image.jpg",
  url = "https://pixenly.com"
}: SEOHeadProps) => (
  <Helmet>
    <title>{title} | Pixenly - Kocaeli Web Tasarım</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    
    {/* Open Graph */}
    <meta property="og:title" content={`${title} | Pixenly`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="Pixenly" />
    <meta property="og:locale" content="tr_TR" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${title} | Pixenly`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    {/* Additional SEO */}
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Pixenly" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href={url} />
    
    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Pixenly",
        "description": "Kocaeli Web Tasarım Stüdyosu",
        "url": "https://pixenly.com",
        "logo": "https://pixenly.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kocaeli",
          "addressCountry": "TR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-555-555-55-55",
          "contactType": "customer service"
        }
      })}
    </script>
  </Helmet>
);

export default SEOHead;