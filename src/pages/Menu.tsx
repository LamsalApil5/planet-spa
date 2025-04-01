import HeroSection from "@/components/menu/HeroSection";
import ServicesSection from "@/components/menu/ServicesSection";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Menu | Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Explore the Planet Spa Pokhara menu featuring luxurious spa treatments, deep tissue massages, Ayurvedic therapies, and beauty services for ultimate relaxation."
        />
        <meta
          name="keywords"
          content="spa menu Pokhara, massage services Nepal, best spa treatments Pokhara, Ayurvedic spa menu Nepal, luxury massage menu, body massage options Pokhara, wellness therapies Nepal, Himalayan spa services, relaxation treatments Pokhara, beauty services Nepal, deep tissue massage menu, stress relief therapies, full body massage Nepal, rejuvenation spa menu, organic spa treatments Pokhara, hot stone massage options, premium spa services Nepal, best relaxation treatments Pokhara"
        />
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://planetspapokhara.com/menu" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        
        <meta
          property="og:title"
          content="Planet Spa Pokhara - Spa & Massage Menu"
        />
        <meta
          property="og:description"
          content="Browse the luxurious menu of Planet Spa Pokhara, offering a range of massages, wellness treatments, and beauty therapies for relaxation and rejuvenation."
        />
        <meta property="og:url" content="https://planetspapokhara.com/menu" />
        <meta
          property="og:image"
          content="https://planetspapokhara.com/logo.png"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Planet Spa Pokhara - Spa & Massage Menu"
        />
        <meta
          name="twitter:description"
          content="Discover the full range of spa treatments, massages, and beauty services at Planet Spa Pokhara. Choose your perfect relaxation experience!"
        />
        <meta
          name="twitter:image"
          content="https://planetspapokhara.com/logo.svg"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Planet Spa Pokhara",
            url: "https://planetspapokhara.com/menu",
            image: "https://planetspapokhara.com/logo.png",
            description:
              "Discover the Planet Spa Pokhara menu with premium spa services, massages, and beauty treatments for complete relaxation and well-being.",
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
      <ServicesSection />
    </>
  );
};

export default Menu;
