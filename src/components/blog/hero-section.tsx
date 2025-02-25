const HeroSection = () => {
  return (
    <div className="relative h-[400px] bg-[#8B5E4B] text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sauna/ Steam
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
            Planet Spa is the best place to heighten for young and elegant
            looks. Relax, detox and rejuvenate in our soothing and modern
            facilities. Feel refreshed and revitalized after every visit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
