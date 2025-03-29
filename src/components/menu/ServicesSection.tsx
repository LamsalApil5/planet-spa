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
import SHIATSU from "../../assets/Images/Services/Shiatsu.png";

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
      "A hot stone massage may begin with a traditional Swedish massage technique to prepare your muscles then place the warm stones on key acupressure points.",
  },
  {
    name: "TREKKERS MASSAGE",
    image: trekker,
    prices: [
      { duration: "60 min", price: "Rs.5000/-" },
      { duration: "90min", price: "Rs.7000/-" },
      { duration: "120min", price: "Rs.8000/-" },
    ],
    description:
      "Mixture of different massages like Thai massage for stretching, Swedish massage for strokes and vibration and shiatsu for opening knots and releasing toxins.",
  },
  {
    name: "SHIATSU MASSAGE",
    image: SHIATSU,
    prices: [
      { duration: "60 min", price: "Rs.4000/-" },
      { duration: "90min", price: "Rs.6000/-" },
      { duration: "120min", price: "Rs.7500/-" },
    ],
    description:
      "Massage with Fingers, Thumb, Elbow, knuckle, Feet and Palms; Acupressure, Assisted, Stretching, Joint manipulation and mobilization.",
  },
  {
    name: "THAI MASSAGE",
    image: thaiMassage,
    prices: [
      { duration: "60 min", price: "Rs.5000/-" },
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
      { duration: "60 min", price: "Rs.4000/-" },
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
      { duration: "60 min", price: "Rs.3500/-" },
      { duration: "90min", price: "Rs.5200/-" },
      { duration: "120min", price: "Rs.6500/-" },
    ],
    description:
      "These service is designed to promote overall wellness and reduce stress, tension and muscles pain.",
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
      "Uses essential oils for relaxation, stress relief and enhancing overall well-being through scent and touch.",
  },
  {
    name: "SWEDISH MASSAGE",
    image: swedishMassage,
    prices: [
      { duration: "60 min", price: "Rs.3500/-" },
      { duration: "90min", price: "Rs.5200/-" },
      { duration: "120min", price: "Rs.6500/-" },
    ],
    description:
      "Massage technique that uses long strokes, kneading and circular movements to help relax and energize the body.",
  },
  {
    name: "BODY SCRUB",
    image: bodyscrub,
    prices: [
      { duration: "45 min", price: "Rs.3000/-" },
      { duration: "60min", price: "Rs.4000/-" },
    ],
    description:
      "Scrub will cleanse away old, dull & dead skin cells to reveal young healthy looking skin.",
  },
  {
    name: "FOOT REFLEXOLOGY",
    image: footReflexalogy,
    prices: [
      { duration: "30 min", price: "Rs.1800/-" },
      { duration: "45min", price: "Rs.2600/-" },
      { duration: "60min", price: "Rs.3500/-" },
    ],
    description:
      "Applies pressure to specific points on feet to promote relaxation, alleviate pain, and improve overall well-being.",
  },
  {
    name: "HEAD, NECK & SHOULDER",
    image: headNeck,
    prices: [
      { duration: "30 min", price: "Rs.1800/-" },
      { duration: "45min", price: "Rs.2600/-" },
      { duration: "60min", price: "Rs.3500/-" },
    ],
    description:
      "Targets tension in upper body, relieving stress and promoting relaxation through gentle manipulation.",
  },
  {
    name: "SPINAL BACK MASSAGE",
    image: spinalBack,
    prices: [
      { duration: "30 min", price: "Rs.1800/-" },
      { duration: "45min", price: "Rs.2600/-" },
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
      { duration: "Fruits Glow Facial ", price: "Rs.2000/-" },
      { duration: "Glorious Golden Facial", price: "Rs.2500/-" },
      { duration: "Dimond Glow Facial", price: "Rs.3000/-" },
    ],
    description: "",
  },
  {
    name: "WAXING",
    image: WAXING,
    prices: [
      { duration: "Armpit Waxing", price: "Rs.1000/-" },
      { duration: "Hand Waxing", price: "Rs.1800/-" },
      { duration: "Half Leg Waxing ", price: "Rs.2200/-" },
      { duration: "Full Leg Waxing ", price: "Rs.3000/-" },
      { duration: "Bikini Waxing ", price: "Rs.3000/-" },
      { duration: "Full Body Waxing ", price: "Rs.8500/-" },
    ],
    description: "",
  },
  {
    name: "THREADING",
    image: THREADING,
    prices: [
      { duration: "Eyebrow Threading", price: "Rs.300/-" },
      { duration: "Upper Lips Threading ", price: "Rs.200/-" },
      { duration: "Chin Threading", price: "Rs.200/-" },
      { duration: "Full Face Threading", price: "Rs.500/-" },
    ],
    description: "",
  },
  {
    name: "MANICURE/PEDICURE",
    image: MANICURE,
    prices: [
      { duration: "Manicure", price: "Rs.2200/-" },
      { duration: "Pedicure", price: "Rs.2500/-" },
      { duration: "Nail Polish", price: "Rs.500/-" },
    ],
    description: "",
  },
  {
    name: "HENNA ARTS",
    image: HENNA,
    prices: [
      { duration: "Mehandi Application On Hand", price: "Rs.2000/-" },
      { duration: "Mehandi Application On Feet", price: "Rs.3000/-" },
      { duration: "Mehandi Application On Hand  & Feet  ", price: "Rs.4500/-" },
    ],
    description: "",
  },
  {
    name: "HAIR WORKS",
    image: HAIRWORKS,
    prices: [
      { duration: "Hair Shampoo & Dry", price: "Rs.1500/-" },
      { duration: "Hair Treatment", price: "Rs.3000/-" },
      { duration: "Hair Oil Massage", price: "Rs.3000/-" },
    ],
    description: "",
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
