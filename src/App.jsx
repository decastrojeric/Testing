import { useState } from "react";
import Hero from "./components/hero/Hero";
import CollectionSection from "./components/collections/CollectionSection";
import ScentFinderButton from "./components/scent-finder/ScentFinderButton";
import ScentFinderModal from "./components/scent-finder/ScentFinderModal";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./components/layout/Footer";

export default function App() {
  const [openFinder, setOpenFinder] = useState(false);

  return (
    <div className="bg-[#04142c] text-white min-h-screen">
      <Hero />
      <CollectionSection />

      <ScentFinderButton onClick={() => setOpenFinder(true)} />
      <ScentFinderModal
        open={openFinder}
        onClose={() => setOpenFinder(false)}
      />

      <ScrollToTop />
      <Footer />
    </div>
  );
}
