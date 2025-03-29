import service1 from "../../assets/Images/FULL BODY MASSAGE _edited.png"
import service2 from "../../assets/Images/Shirodhara.png"
import service3 from "../../assets/Images/how_to_give_foot_massage-1024x683-1.png"

interface Package {
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

const packages: Package[] = [
  {
    title: "Half Day Package",
    duration: "(4 Hours)",
    price: "Rs. 10000/-",
    description: "Aroma Massage, Manicure, Pedicure, Facial, Steam/Sauna",
    image: service1,
  },
  {
    title: "Relaxation Package",
    duration: "(3 Hours)",
    price: "Rs. 9000/-",
    description: "Ayurvedic Or Swedish Massage, Shirodhara, Sauna/Steam",
    image: service2,
  },
  {
    title: "Health Package",
    duration: "(3 Hours)",
    price: "Rs. 8500/-",
    description: "Foot Massage, Head, Back & Shoulder, Full Body, Steam/Sauna",
    image: service3,
  },
];

const ServicePackages = () => {
  return (
    <section className="py-16 bg-[#F5F1EE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-12">
          We Offer Special Packages
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="overflow-hidden flex flex-col items-center text-center"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-4/5 h-90 object-cover rounded-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-2">{pkg.duration}</p>
                  <p className="text-[#8B4513] font-bold mb-2">{pkg.price}</p>
                  <p className="text-gray-700">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
