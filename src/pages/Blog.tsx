import BestSpaSection from "@/components/blog/best-spa-section";
import BlogSection from "@/components/blog/BlogSection";
import HeroSection from "@/components/blog/hero-section";
import ServicesSection from "@/components/blog/services-section";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Blog | Planet Spa Pokhara</title>
        <meta
          name="description"
          content="Explore wellness tips, relaxation techniques, massage benefits, and spa insights on the Planet Spa Pokhara Blog. Stay informed about the latest in self-care and rejuvenation."
        />
        <meta
          name="keywords"
          content="spa blog Nepal, wellness tips Pokhara, massage benefits, Ayurvedic healing, relaxation techniques, beauty treatments guide, stress relief therapy, spa lifestyle, self-care routines, holistic healing, luxury spa insights, health and wellness news, Planet Spa articles, Pokhara spa treatments, skincare tips Nepal, natural healing practices, best spa therapies, meditation and mindfulness, spa industry trends, body massage benefits"
        />
        <meta name="author" content="Planet Spa Pokhara" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://planetspapokhara.com/blog" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Planet Spa Pokhara" />
        <meta
          property="og:description"
          content="Discover expert insights on spa treatments, wellness tips, and relaxation techniques from Planet Spa Pokhara. Elevate your self-care routine with our blog."
        />
        <meta property="og:url" content="https://planetspapokhara.com/blog" />
        <meta
          property="og:image"
          content="https://planetspapokhara.com/logo.png"
        />
        <meta property="og:site_name" content="Planet Spa Pokhara" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Planet Spa Pokhara Blog | Wellness & Relaxation Tips"
        />
        <meta
          name="twitter:description"
          content="Stay updated with wellness advice, spa trends, and relaxation methods from Planet Spa Pokhara. Read our latest blog posts now!"
        />
        <meta
          name="twitter:image"
          content="https://planetspapokhara.com/logo.svg"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Planet Spa Pokhara Blog",
            url: "https://planetspapokhara.com/blog",
            image: "https://planetspapokhara.com/logo.svg",
            description:
              "Read the latest wellness and relaxation insights from Planet Spa Pokhara. Explore massage techniques, Ayurvedic healing, and self-care practices.",
            publisher: {
              "@type": "Organization",
              name: "Planet Spa Pokhara",
              logo: {
                "@type": "ImageObject",
                url: "https://planetspapokhara.com/logo.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://planetspapokhara.com/blog",
            },
          })}
        </script>
      </Helmet>

      <HeroSection />
      <BestSpaSection />
      <ServicesSection />
      <BlogSection />
    </>
  );
};

export default Blog;
