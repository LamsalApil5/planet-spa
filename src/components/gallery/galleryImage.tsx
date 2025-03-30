import image1 from "../../assets/Images/gallery/2025-01-15 (1).jpg";
import image2 from "../../assets/Images/gallery/2025-01-15 (2).jpg";
import image3 from "../../assets/Images/gallery/2025-01-15.jpg";

const images = [
  { id: 1, src: image2, alt: "Shirodhara Massage" },
  { id: 1, src: image1, alt: "Sauna Steam" },
  { id: 2, src: image3, alt: "guest team" },
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
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryImage;
