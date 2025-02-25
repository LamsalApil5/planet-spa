import HeroSection from "@/components/home/HeroSection";
import Map from "@/components/home/Map";
import MembershipPackages from "@/components/home/MembershipPackages";
import SaunaSteamCard from "@/components/home/SaunaSteamCard";
import ServicePackages from "@/components/home/ServiceSection";
import Testimonials from "@/components/home/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Home - Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Discover the best luxury spa experience at Planet Spa Pokhara. Rejuvenate with our expert massages, beauty treatments, and holistic wellness therapies."
        />
        <meta
          name="keywords"
          content="spa, wellness, relaxation, massage, luxury spa, Pokhara spa, body therapy, beauty treatments, stress relief, Ayurvedic massage, Himalayan spa"
        />
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://planetspapokhara.com/" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Planet Spa Pokhara - Luxury Wellness & Relaxation Center"
        />
        <meta
          property="og:description"
          content="Relax and rejuvenate at Planet Spa Pokhara with our premium spa treatments, massages, and beauty services in a tranquil setting."
        />
        <meta property="og:url" content="https://planetspapokhara.com/" />
        <meta
          property="og:image"
          content="https://planetspapokhara.com/assets/images/logo.png"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Planet Spa Pokhara - Luxury Wellness & Relaxation Center"
        />
        <meta
          name="twitter:description"
          content="Enjoy luxury spa treatments, massages, and beauty therapies at Planet Spa Pokhara. Book your relaxation session today!"
        />
        <meta
          name="twitter:image"
          content="https://planetspapokhara.com/assets/images/logo.png"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Planet Spa Pokhara",
            url: "https://planetspapokhara.com/",
            image: "https://planetspapokhara.com/assets/images/logo.png",
            description:
              "Planet Spa Pokhara offers luxury spa services including massages, wellness treatments, and beauty therapies in a serene environment.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Address",
              addressLocality: "Pokhara",
              addressRegion: "Gandaki",
              postalCode: "33700",
              addressCountry: "NP",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+977-XXXXXXXXXX",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/planetspapokhara",
              "https://www.instagram.com/planetspapokhara",
            ],
          })}
        </script>
      </Helmet>

      <HeroSection />
      <ServicePackages />
      <SaunaSteamCard />
      <MembershipPackages />
      <Testimonials />
      <Map />
    </>
  );
};

export default Home;
