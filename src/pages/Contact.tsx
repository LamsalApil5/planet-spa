import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/menu/HeroSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact | Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Reach out to Planet Spa Pokhara for inquiries, appointments, and wellness consultations. Call us or visit our spa for the best relaxation experience in Nepal."
        />
        <meta
          name="keywords"
          content="contact Planet Spa Pokhara, Pokhara spa contact, Nepal wellness inquiry, spa phone number Pokhara, visit Planet Spa, luxury spa contact, massage appointment inquiry, Ayurvedic spa contact Nepal, best spa in Pokhara contact, book spa consultation Nepal, holistic wellness support, Pokhara relaxation center contact, Nepal body massage center, spa services support, customer service Planet Spa"
        />
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://planetspapokhara.com/contact" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Planet Spa Pokhara | Get in Touch"
        />
        <meta
          property="og:description"
          content="Have questions or need assistance? Contact Planet Spa Pokhara for spa bookings, wellness consultations, and inquiries. We're here to help!"
        />
        <meta
          property="og:url"
          content="https://planetspapokhara.com/contact"
        />
        <meta
          property="og:image"
          content="https://planetspapokhara.com/logo.png"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Planet Spa Pokhara | Get in Touch"
        />
        <meta
          name="twitter:description"
          content="Need spa services or have inquiries? Contact Planet Spa Pokhara today for expert guidance, bookings, and relaxation services."
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
            url: "https://planetspapokhara.com/contact",
            image: "https://planetspapokhara.com/logo.svg",
            description:
              "Contact Planet Spa Pokhara for expert spa treatments, massages, and wellness therapies in a serene setting.",
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
      <ContactForm />
    </>
  );
};

export default Contact;
