import Hero from "./components/hero/Hero";
import CollectionSection from "./components/collections/CollectionSection";
import ScentFinderButton from "./components/scent-finder/ScentFinderButton";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-[#04142c] text-white min-h-screen">
      {/* HERO */}
      <Hero />

      {/* COLLECTIONS */}
      <CollectionSection />

      {/* UNIQUE FEATURE */}
      <ScentFinderButton />

      {/* SCROLL UP */}
      <ScrollToTop />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
