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
        <title>Home - Planet Spa</title>
        <meta
          name="description"
          content="Welcome to Planet Spa, your ultimate relaxation destination. Escape to paradise today!"
        />
        <meta
          name="keywords"
          content="spa, wellness, relaxation, massage, luxury spa"
        />
        <meta name="author" content="Planet Spa" />
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
