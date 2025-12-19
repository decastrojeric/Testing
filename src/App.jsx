import { useState } from "react";
import Hero from "./components/hero/Hero";
import CollectionSection from "./components/collections/CollectionSection";
import ScentFinderButton from "./components/scent-finder/ScentFinderButton";
import ScentFinderModal from "./components/scent-finder/ScentFinderModal";
import OccasionModal from "./components/scent-finder/OccasionModal";
import PerfumeDetailModal from "./components/scent-finder/PerfumeDetailModal";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./components/layout/Footer";
import { perfumes } from "./data/perfumes";

export default function App() {
  const [openFinder, setOpenFinder] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const filteredPerfumes = selectedOccasion
    ? perfumes.filter((p) =>
        p.bestSuit.includes(selectedOccasion)
      )
    : [];

  return (
    <div className="bg-[#04142c] text-white min-h-screen">
      <Hero />
      <CollectionSection />

      <ScentFinderButton onClick={() => setOpenFinder(true)} />

      <ScentFinderModal
  open={openFinder}
  onClose={() => setOpenFinder(false)}
/>


      <OccasionModal
        occasion={selectedOccasion}
        perfumes={filteredPerfumes}
        onBack={() => setSelectedOccasion(null)}
        onSelectPerfume={setSelectedPerfume}
      />

      <PerfumeDetailModal
        perfume={selectedPerfume}
        occasion={selectedOccasion}
        onBack={() => setSelectedPerfume(null)}
      />

      <ScrollToTop />
      <Footer />
    </div>
  );
}
