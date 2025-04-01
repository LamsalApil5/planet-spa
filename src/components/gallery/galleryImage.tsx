const images = Object.entries(
  import.meta.glob("../../assets/Images/gallery/*.{jpg,jpeg,png}", { eager: true })
).map(([path, module], index) => ({
  id: index + 1,
  src: (module as { default: string }).default,
  alt: path.split("/").pop()?.split(".")[0].replace(/-/g, " ") || "",
}));

function GalleryImage() {
  return (
    <div className="p-4">
      <h2 className="text-center text-4xl md:text-6xl font-semibold mb-8">Gallery</h2>
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
