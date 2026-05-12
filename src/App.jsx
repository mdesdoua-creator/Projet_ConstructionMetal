import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import Services from "./components/home/Services";
import AboutPreview from "./components/home/AboutPreview";
import ProjectsPreview from "./components/home/ProjectsPreview";
import Testimonials from "./components/home/Testimonials";
import ContactBanner from "./components/home/ContactBanner";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <Services />
        <ProjectsPreview />
        <Testimonials />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
