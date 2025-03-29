import blog1 from "../../assets/Images/FULL BODY MASSAGE _edited.png";
import blog2 from "../../assets/Images/Blog/SpineDocsMassagetherapyrelievesbackpain.png";
import blog3 from "../../assets/Images/Blog/Blog3.jpg";
import blog4 from "../../assets/Images/Blog/Blog4.jpg";

const blogs = [
  {
    title: "Relax and Refresh at Planet Spa",
    description:
      "Take a break from your busy life and relax at Planet Spa, Pokhara. Enjoy a soothing massage, a warm sauna, or a refreshing facial in a peaceful setting. Our skilled therapists will help you feel relaxed and refreshed. Book your session today and experience the best spa in Pokhara!",
    image: blog1,
  },
  {
    title: "Feel Your Best with a Spa Treatment",
    description:
      "A spa visit is not just about luxury—it helps your body and mind feel better. At Planet Spa, we offer gentle massages, foot care, and facials to help you relax. Whether you need to recover from trekking or just want a break, our treatments leave you feeling fresh and renewed. Visit us today for a peaceful and relaxing experience!",
    image: blog2,
  },
  {
    title: "Couples Massage",
    description: `
      <p>Indulge in a serene escape with our exclusive couples massage at Planet Spa Pokhara, designed to rejuvenate both body and soul in perfect harmony.</p>
      <p><strong>Our Couples Massage Experience Includes:</strong></p>
      <ul>
        <li><strong>Aromatherapy Massage:</strong> Immerse yourselves in a 60-minute aromatherapy session, where our skilled therapists employ soothing essential oils to melt away tension and stress.</li>
        <li><strong>Access to Steam and Sauna Facilities:</strong> Enhance your relaxation journey with our steam and sauna room, designed to detoxify and revitalize your senses.</li>
        <li><strong>Refreshing Herbal Teas:</strong> Conclude your experience with a selection of organic herbal teas, perfect for prolonging the tranquility of your visit.</li>
      </ul>
      <p>At Planet Spa Pokhara, we are committed to providing an exceptional spa experience, ensuring that every moment spent with us is both memorable and restorative. Making it an ideal choice for anniversaries, special occasions, or simply as a delightful retreat from daily life.</p>
     <br/>
      <p><strong>Book Your Appointment Today:</strong> whatsapp (9845832239) or planetspapokhara@gmail.com</p>
      <br/>
      <p><strong>Note:</strong> For the most current information on our services and packages, please contact us directly or visit our website.</p>
    `,
    image: blog3,
  },
  {
    title: "Best Massage in Pokhara Lakeside – Experience Ultimate Relaxation at Planet Spa Pokhara",
    description: `
      <p>Nestled in the heart of Pokhara Lakeside, Planet Spa Pokhara offers the ultimate rejuvenation experience with the best massage services in town. Whether you're a traveler seeking relaxation after an adventurous trek or a local looking for a peaceful retreat, our expert therapists are here to melt away your stress and tension.</p>
      <p><strong>Why Choose Planet Spa Pokhara?</strong></p>
      <ul>
        <li><strong>Highly Skilled Therapists:</strong> Our trained professionals specialize in various massage techniques to ensure a deeply therapeutic experience.</li>
        <li><strong>Tranquil Ambience:</strong> Relax in a peaceful, luxurious setting designed to soothe your mind and body.</li>
        <li><strong>Premium Organic Oils & Ingredients:</strong> We use only the finest essential oils and herbal products to enhance your relaxation.</li>
        <li><strong>A Wide Range of Massage Services:</strong> From deep tissue massage to aromatherapy and hot stone therapy, we have the perfect treatment for you.</li>
      </ul>
      <p><strong>Our Signature Massages:</strong></p>
      <ul>
        <li><strong>Deep Tissue Massage:</strong> Perfect for relieving muscle tension and improving circulation.</li>
        <li><strong>Aromatherapy Massage:</strong> A soothing experience with essential oils for ultimate relaxation.</li>
        <li><strong>Hot Stone Massage:</strong> Warm stones help release stress and promote deep healing.</li>
        <li><strong>Thai Massage:</strong> A blend of stretching and acupressure for enhanced flexibility and energy flow.</li>
        <li><strong>Couples Massage:</strong> Share a blissful experience with your loved one in a serene setting.</li>
      </ul>
      <p><strong>Visit Us in Pokhara Lakeside:</strong></p>
      <p>Located conveniently in Pokhara Lakeside, Planet Spa Pokhara is your go-to destination for the best massage experience. Escape the hustle and bustle, indulge in self-care.</p>
      <p><strong>📍 Book your appointment today and experience the best massage in Pokhara!</strong></p>
      <p>For reservations, contact us or visit our website.</p>
    `,
    image: blog4,  // Add image for this new post
  },
];

const BlogSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-gray-100 p-6 rounded-b-xl shadow-lg"
            >
              <div className="relative h-80">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                {/* Render the description as raw HTML */}
                <div
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
