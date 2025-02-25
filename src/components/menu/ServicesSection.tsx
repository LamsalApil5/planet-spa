import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import shirdhara from "../../assets/Images/Services/Shirodhara.png";
import hotstone from "../../assets/Images/Services/hot_stone_massage_1024x1024.png";
import trekker from "../../assets/Images/Services/trekker-healer-massage-3.png";
import thaiMassage from "../../assets/Images/Services/thai massage.avif";
import deepMassage from "../../assets/Images/Services/deep-tissue-massage-on-back.png";
import ayurvedic from "../../assets/Images/Services/abhyanga-–ayurvedic-body-massage-1.png";
import aromaMassage from "../../assets/Images/Services/aromaMassage.png";
import swedishMassage from "../../assets/Images/Services/swedish.png";
import bodyscrub from "../../assets/Images/Services/bodyscrub.png";
import footReflexalogy from "../../assets/Images/Services/FootReflexology.png";
import headNeck from "../../assets/Images/Services/headNackAndShoulder-massage.png";
import spinalBack from "../../assets/Images/Services/SpineDocsMassagetherapyrelievesbackpain.png";
import FACIAL from "../../assets/Images/Services/faclal.png";
import WAXING from "../../assets/Images/Services/Berkhamsted-Beauty-Salon-How-to-Prepare-for-Your-First-Waxing-Appointment-in-a-While-Blog.png";
import THREADING from "../../assets/Images/Services/eyebrow-threading.png";
import MANICURE from "../../assets/Images/Services/Manicure-Pedicure.png";
import HENNA from "../../assets/Images/Services/HeenaArts.png";
import HAIRWORKS from "../../assets/Images/Services/woman-washing-head-hairsalon.png";

interface ServicePrice {
  duration: string;
  price: string;
}

interface Service {
  name: string;
  image: string;
  prices: ServicePrice[];
  description: string;
}

const services: Service[] = [
  {
    name: "SHIRODHARA TREATMENT",
    image: shirdhara,
    prices: [
      { duration: "60 min", price: "Rs.6000/-" },
      { duration: "90 min", price: "Rs.8000/-" },
      { duration: "120 min", price: "Rs.9000/-" },
    ],
    description:
      "Ancient Ayurvedic therapy that involves a gentle stream of warm herbal oil poured over the forehead for relaxation.",
  },
  {
    name: "HOT STONE MASSAGE",
    image: hotstone,
    prices: [
      { duration: "60 min", price: "Rs.5000/-" },
      { duration: "90min", price: "Rs.7000/-" },
      { duration: "120min", price: "Rs.8000/-" },
    ],
    description:
      "A full body massage using heat with a traditional basalt stones strategically placed over energy points.",
  },
  {
    name: "TREKKERS MASSAGE",
    image: trekker,
    prices: [
      { duration: "60 min", price: "Rs.5000/-" },
      { duration: "90min", price: "Rs.7000/-" },
      { duration: "120min", price: "Rs.7500/-" },
    ],
    description:
      "Mixture of different massages like Thai massage for stretching, Swedish massage for relaxation and deep tissue for muscle pain.",
  },
  {
    name: "THAI MASSAGE",
    image: thaiMassage,
    prices: [
      { duration: "45 min", price: "Rs.4000/-" },
      { duration: "90min", price: "Rs.7000/-" },
      { duration: "120min", price: "Rs.8000/-" },
    ],
    description:
      "Thai massage is a traditional therapy that combines stretching movements with pressure point massage for gentle manipulation of the body.",
  },
  {
    name: "DEEP TISSUE MASSAGE",
    image: deepMassage,
    prices: [
      { duration: "45 min", price: "Rs.4500/-" },
      { duration: "90min", price: "Rs.6000/-" },
      { duration: "120min", price: "Rs.7500/-" },
    ],
    description:
      "Intense pressure massage targeting deeper muscle layers to release chronic muscle tension and knots.",
  },
  {
    name: "AYURVEDIC MASSAGE",
    image: ayurvedic,
    prices: [
      { duration: "60 min", price: "Rs.5000/-" },
      { duration: "90min", price: "Rs.6500/-" },
      { duration: "120min", price: "Rs.8500/-" },
    ],
    description:
      "Traditional massage designed to promote overall wellness and balance using herbal oils, focused on marma points and muscle pain.",
  },
  {
    name: "AROMA MASSAGE",
    image: aromaMassage,
    prices: [
      { duration: "60 min", price: "Rs.4000/-" },
      { duration: "90min", price: "Rs.6000/-" },
      { duration: "120min", price: "Rs.7500/-" },
    ],
    description:
      "Therapeutic massage using essential oils, combining Swedish style long strokes with healing touch through scent and touch.",
  },
  {
    name: "SWEDISH MASSAGE",
    image: swedishMassage,
    prices: [
      { duration: "60 min", price: "Rs.5000/-" },
      { duration: "90min", price: "Rs.6500/-" },
      { duration: "120min", price: "Rs.8500/-" },
    ],
    description:
      "Classic massage technique that uses long strokes, kneading and circular movements to help relax and energize the body.",
  },
  {
    name: "BODY SCRUB",
    image: bodyscrub,
    prices: [
      { duration: "45 min", price: "Rs.3000/-" },
      { duration: "60min", price: "Rs.3500/-" },
    ],
    description:
      "Body spa treatment using natural scrub which helps to reveal young healthy looking skin.",
  },
  {
    name: "FOOT REFLEXOLOGY",
    image: footReflexalogy,
    prices: [
      { duration: "30 min", price: "Rs.1500/-" },
      { duration: "45min", price: "Rs.2500/-" },
      { duration: "60min", price: "Rs.3500/-" },
    ],
    description:
      "Applied pressure to specific points in feet that correspond to different body organs, relieving stress and improving blood circulation.",
  },
  {
    name: "HEAD, NECK & SHOULDER",
    image: headNeck,
    prices: [
      { duration: "30 min", price: "Rs.1800/-" },
      { duration: "45min", price: "Rs.2500/-" },
      { duration: "60min", price: "Rs.3500/-" },
    ],
    description:
      "Express treatment to target tense areas around head, neck and shoulders through gentle manipulation.",
  },
  {
    name: "SPINAL BACK MASSAGE",
    image: spinalBack,
    prices: [
      { duration: "25 min", price: "Rs.1800/-" },
      { duration: "45min", price: "Rs.2500/-" },
      { duration: "60min", price: "Rs.3500/-" },
    ],
    description:
      "Focuses on the spine and back muscle groups, relieving tension and promoting flexibility and durability.",
  },
  {
    name: "FACIAL",
    image: FACIAL,
    prices: [
      { duration: "Face Cleansing", price: "Rs.1000/-" },
      { duration: "Face Clean Up", price: "Rs.1500/-" },
      { duration: "Whitening Facial", price: "Rs.2000/-" },
      { duration: "Normal Gold Facial", price: "Rs.2500/-" },
    ],
    description:
      "Various facial treatments to cleanse, exfoliate and nourish the skin.",
  },
  {
    name: "WAXING",
    image: WAXING,
    prices: [
      { duration: "Full Arms", price: "Rs.800/-" },
      { duration: "Half Arms", price: "Rs.500/-" },
      { duration: "Full Legs", price: "Rs.1000/-" },
      { duration: "Half Legs", price: "Rs.600/-" },
    ],
    description: "Professional waxing services for smooth, hair-free skin.",
  },
  {
    name: "THREADING",
    image: THREADING,
    prices: [
      { duration: "Eyebrow Threading", price: "Rs.100/-" },
      { duration: "Upper Lips", price: "Rs.80/-" },
      { duration: "Chin Threading", price: "Rs.100/-" },
      { duration: "Full Face Threading", price: "Rs.300/-" },
    ],
    description: "Precise hair removal technique using cotton thread.",
  },
  {
    name: "MANICURE/PEDICURE",
    image: MANICURE,
    prices: [
      { duration: "Manicure", price: "Rs.1000/-" },
      { duration: "Pedicure", price: "Rs.1200/-" },
      { duration: "Nail Polish", price: "Rs.300/-" },
    ],
    description: "Professional nail care services for hands and feet.",
  },
  {
    name: "HENNA ARTS",
    image: HENNA,
    prices: [
      { duration: "Normal Application on Hand", price: "Rs.500/-" },
      { duration: "Normal Application on Feet", price: "Rs.500/-" },
      { duration: "Bridal Application on Hand", price: "Rs.2000/-" },
      { duration: "Special Application for Hand & Feet", price: "Rs.3000/-" },
    ],
    description: "Traditional henna application with intricate designs.",
  },
  {
    name: "HAIR WORKS",
    image: HAIRWORKS,
    prices: [
      { duration: "Hair Shampoo & Dry", price: "Rs.500/-" },
      { duration: "Hair Treatment", price: "Rs.2000/-" },
      { duration: "Hair Spa", price: "Rs.2500/-" },
    ],
    description:
      "Professional hair care services including treatments and styling.",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#f5e6e0] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#5d4037]">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm border-none shadow-none"
            >
              <CardHeader>
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg font-medium text-center mt-4 text-[#5d4037]">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.prices.map((price, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{price.duration}</span>
                      <span className="font-medium text-[#5d4037]">
                        {price.price}
                      </span>
                    </div>
                  ))}
                  <CardDescription className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
