import GalleryImage from "@/components/gallery/galleryImage";
import HeroSection from "@/components/menu/HeroSection";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Gallery | Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Explore the gallery of Planet Spa Pokhara and experience the luxury, tranquility, and top-notch wellness services that define our serene spa center."
        />
        <meta
          name="keywords"
          content="Planet Spa Pokhara gallery, Pokhara luxury spa photos, wellness center images, massage therapy gallery, Ayurvedic spa photos Nepal, best spa in Pokhara, spa treatment images, relaxation spa ambiance"
        />
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://planetspapokhara.com/gallery" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gallery | Planet Spa Pokhara" />
        <meta
          property="og:description"
          content="Take a virtual tour of Planet Spa Pokhara by browsing our gallery, featuring luxurious spa treatments, wellness facilities, and relaxing spaces."
        />
        <meta
          property="og:url"
          content="https://planetspapokhara.com/gallery"
        />
        <meta
          property="og:image"
          content="https://planetspapokhara.com/spa-gallery-cover.jpg"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Planet Spa Pokhara" />
        <meta
          name="twitter:description"
          content="Discover the ambiance and luxury of Planet Spa Pokhara through our exclusive gallery. See photos of our wellness center and relaxing spa services."
        />
        <meta
          name="twitter:image"
          content="https://planetspapokhara.com/spa-gallery-cover.jpg"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Planet Spa Pokhara",
            url: "https://planetspapokhara.com/gallery",
            image: "https://planetspapokhara.com/spa-gallery-cover.jpg",
            description:
              "Browse our gallery to explore the tranquil ambiance, luxurious spa treatments, and modern wellness facilities at Planet Spa Pokhara.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Pokhara-6, Lakeside",
              addressLocality: "Pokhara",
              addressRegion: "Gandaki",
              postalCode: "33700",
              addressCountry: "NP",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+977-98458323239",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/planetspa2024",
              "https://www.instagram.com/spaplanet93/",
            ],
          })}
        </script>
      </Helmet>

      <HeroSection />
      <GalleryImage />
    </>
  );
};

export default Gallery;
