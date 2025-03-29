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

const images = [
  { id: 1, src: shirdhara, alt: "Shirodhara Massage" },
  { id: 2, src: hotstone, alt: "Hot Stone Massage" },
  { id: 3, src: trekker, alt: "Trekker Healer Massage" },
  { id: 4, src: thaiMassage, alt: "Thai Massage" },
  { id: 5, src: deepMassage, alt: "Deep Tissue Massage" },
  { id: 6, src: ayurvedic, alt: "Ayurvedic Massage" },
  { id: 7, src: aromaMassage, alt: "Aroma Massage" },
  { id: 8, src: swedishMassage, alt: "Swedish Massage" },
  { id: 9, src: bodyscrub, alt: "Body Scrub" },
  { id: 10, src: footReflexalogy, alt: "Foot Reflexology" },
  { id: 11, src: headNeck, alt: "Head, Neck, and Shoulder Massage" },
  { id: 12, src: spinalBack, alt: "Spinal Back Massage" },
  { id: 13, src: FACIAL, alt: "Facial" },
  { id: 14, src: WAXING, alt: "Waxing" },
  { id: 15, src: THREADING, alt: "Threading" },
  { id: 16, src: MANICURE, alt: "Manicure and Pedicure" },
  { id: 17, src: HENNA, alt: "Henna Art" },
  { id: 18, src: HAIRWORKS, alt: "Hair Works" },
  { id: 19, src: SHIATSU, alt: "Shiatsu Massage" },
];

function GalleryImage() {
  return (
    <div className="p-4">
      <h2 className="text-center text-4xl md:text-6xl font-semibold mb-8">
        Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryImage;
