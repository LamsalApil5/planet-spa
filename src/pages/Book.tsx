import BookingForm from "@/components/book/booking-form";
import Map from "@/components/home/Map";
import HeroSection from "@/components/menu/HeroSection";
import { Helmet } from "react-helmet-async";

const Book = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Book an Appointment | Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Book your spa session at Planet Spa Pokhara. Choose from a range of luxury massages, wellness treatments, and beauty therapies for ultimate relaxation."
        />
        <meta
          name="keywords"
          content="book spa Pokhara, spa appointment Nepal, online spa booking, reserve massage Nepal, Pokhara wellness booking, luxury spa reservations, schedule massage Pokhara, Ayurvedic spa booking, book relaxation therapy, Nepal spa reservations, Pokhara body massage booking, hot stone massage appointment, stress relief booking Nepal, full body massage reservation, herbal spa session Pokhara, book beauty treatments Nepal, wellness retreat booking Pokhara, holistic healing appointment Nepal, organic spa therapy booking"
        />
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.planetspapokhara.com/book" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Book an Appointment - Planet Spa Pokhara"
        />
        <meta
          property="og:description"
          content="Easily book a spa session at Planet Spa Pokhara. Enjoy expert massages, relaxation therapies, and beauty treatments in a luxurious environment."
        />
        <meta property="og:url" content="https://www.planetspapokhara.com/book" />
        <meta
          property="og:image"
          content="https://www.planetspapokhara.com/logo.png"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book an Appointment - Planet Spa Pokhara"
        />
        <meta
          name="twitter:description"
          content="Reserve your spa experience at Planet Spa Pokhara. Choose from massages, wellness treatments, and beauty therapies for ultimate relaxation."
        />
        <meta
          name="twitter:image"
          content="https://www.planetspapokhara.com/logo.svg"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Planet Spa Pokhara",
            url: "https://www.planetspapokhara.com/book",
            image: "https://www.planetspapokhara.com/logo.svg",
            description:
              "Book an appointment at Planet Spa Pokhara for expert spa treatments, massages, and wellness therapies in a serene setting.",
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
      <BookingForm />
      <Map />
    </>
  );
};

export default Book;
