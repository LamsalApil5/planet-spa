import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { HelmetProvider } from "react-helmet-async";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import Gallery from "./pages/Gallery";

const handleWhatsApp = () => {
  const phoneNumber = "+9779845832239";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  window.open(whatsappURL);
};
const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="w-full">
          <Header />
          <main className="flex-grow">
            <div className="relative">
              {/* Container to keep both buttons at the bottom of the screen */}
              <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-end items-center px-4">
                <div className="flex items-center space-x-4 p-3 rounded-full bg-white">
                  {/* WhatsApp Button */}
                  <button
                    className="p-2 sm:p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700"
                    onClick={handleWhatsApp}
                    title="Contact via WhatsApp"
                  >
                    <FaWhatsapp className="w-6 h-6 sm:w-9 sm:h-9" />
                  </button>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-sm sm:text-lg md:text-xl">
                      Have any queries
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg">
                      +9779845832239
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/book" element={<Book />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </HelmetProvider>
  );
};

export default App;
