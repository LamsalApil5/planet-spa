import service1 from "../../assets/Images/Blog/deep-tissue-massage-on-back.png";
import service2 from "../../assets/Images/Blog/how_to_give_foot_massage-1024x683-1.png";
import service3 from "../../assets/Images/Blog/trekker-healer-massage-3.png";
import service4 from "../../assets/Images/Blog/woman-washing-head-hairsalon.png";
import service5 from "../../assets/Images/Blog/Footpamper-1024x683.png";
import service6 from "../../assets/Images/Blog/hot_stone_massage_1024x1024.png";

const services = [
  {
    title: "Deep Tissue Massage",
    description:
      "Experience the healing power of a Deep Tissue Massage at Planet Spa. Our expert therapists target muscle tension and stress, promoting relaxation and improving circulation for a truly revitalizing experience.",
    image: service1,
  },
  {
    title: "Foot Massage",
    description:
      "Start your path to ultimate relaxation with a Foot Massage at Planet Spa. Our soothing techniques relieve tension, improve circulation, and leave your feet feeling refreshed and rejuvenated.",
    image: service2,
  },
  {
    title: "Trekkers Massage",
    description:
      "Recover from your trekking adventures with a Trekkers Massage at Planet Spa. Designed to relieve muscle soreness and fatigue, this massage helps you recover, relax, and feel revitalized.",
    image: service3,
  },
  {
    title: "Hair Wash",
    description:
      "Pamper yourself with a refreshing Hair Wash at Planet Spa. Our gentle yet effective treatment cleanses and nourishes your hair, leaving it soft, shiny, and rejuvenated.",
    image: service4,
  },
  {
    title: "Manicure/Pedicure",
    description:
      "Indulge in a luxurious Pedicure or Manicure at Planet Spa. Our expert care keeps your hands and feet looking polished, feeling refreshed, and perfectly pampered.",
    image: service5,
  },
  {
    title: "Hot Stone Massage",
    description:
      "Relax and unwind with a Hot Stone Massage at Planet Spa. Our expert therapists use heated stones to soothe muscle tension, improve circulation, and promote deep relaxation.",
    image: service6,
  },
  {
    title: "Relax and Refresh at Planet Spa",
    description:
      "Take a break from your busy life and relax at Planet Spa, Pokhara. Enjoy a soothing massage, a warm sauna, or a refreshing facial in a peaceful setting. Our skilled therapists will help you feel relaxed and refreshed. Book your session today and experience the best spa in Pokhara!",
    image: service6,
  },
];
const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group overflow-hidden">
              <div className="relative h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-300"
                />
              </div>
              <div className="mx-8 mt-4">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
