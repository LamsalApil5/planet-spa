const Map = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-12">
          Find Us Here
        </h2>
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.56773316338!2d82.841715!3d28.213442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d0e5f1bce87089%3A0xd9b8b2fa73b5b15f!2sPlanet%20Spa!5e0!3m2!1sen!2snp!4v1740408897380!5m2!1sen!2snp"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            title="Planet Spa Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
