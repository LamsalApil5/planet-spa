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
        <title>Home | Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Discover the best luxury spa experience at Planet Spa Pokhara. Rejuvenate with our expert massages, beauty treatments, and holistic wellness therapies."
        />
        <meta
          name="keywords"
          content="spa in Nepal, Pokhara spas, pokharaspa, Nepal wellness, luxury spa Nepal, best spa in Pokhara, massage in Pokhara, Ayurvedic spa Nepal, Himalayan wellness, relaxation therapy Nepal, Pokhara body massage, Nepal massage center, wellness retreat Nepal, full body massage Pokhara, stress relief spa, holistic healing Nepal, Pokhara beauty treatments, luxury massage Nepal, deep tissue massage Pokhara, Nepalese spa, traditional therapy Nepal, herbal spa Pokhara, rejuvenation center Nepal, hot stone massage Nepal, wellness center Pokhara, organic spa Nepal, therapeutic massage Nepal, professional spa services Nepal, relaxation spa Pokhara"
        />
        
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://planetspapokhara.com/" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Home | Planet Spa Pokhara"
        />
        <meta
          property="og:description"
          content="Relax and rejuvenate at Planet Spa Pokhara with our premium spa treatments, massages, and beauty services in a tranquil setting."
        />
        <meta property="og:url" content="https://planetspapokhara.com/" />
        <meta
          property="og:image"
          content="https://planetspapokhara.com/logo.png"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Home | Planet Spa Pokhara"
        />
        <meta
          name="twitter:description"
          content="Enjoy luxury spa treatments, massages, and beauty therapies at Planet Spa Pokhara. Book your relaxation session today!"
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
            url: "https://planetspapokhara.com/",
            image: "https://planetspapokhara.com/logo.svg",
            description:
              "Planet Spa Pokhara offers luxury spa services including massages, wellness treatments, and beauty therapies in a serene environment.",
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
              telephone: "+9779845832239",
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
      <ServicePackages />
      <SaunaSteamCard />
      <MembershipPackages />
      <Testimonials />
      <Map />
    </>
  );
};

export default Home;
