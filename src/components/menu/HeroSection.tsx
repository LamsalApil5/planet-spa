const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  px-6 py-2 bg-[#c4a899]">
      {/* Left Side - Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
       <h1 className="text-8xl ">Planet Spa</h1>
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 flex justify-start items-start self-start px-8">
        <p className="mt-4 text-xl text-black">
          "Planet Spa offers exceptional massage services with skilled
          therapists, a serene ambiance, and a variety of techniques for
          relaxation and rejuvenation. With top-notch cleanliness and attentive
          customer service, it's a haven for anyone seeking a refreshing and
          revitalizing experience."
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
