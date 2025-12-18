import { perfumeCollections } from "../../data/perfumes";
import PerfumeCard from "./PerfumeCard";

export default function CollectionSection() {
  const categories = [
    { key: "perfume", title: "Perfume Collections" },
    { key: "men", title: "Men's Collection" },
    { key: "women", title: "Women's Collection" },
    { key: "unisex", title: "Unisex Collection" },
  ];

  return (
    <section
      id="collections"
      className="relative bg-gradient-to-b from-black via-[#04142c] to-black px-6 py-32"
    >
      {categories.map(({ key, title }) => (
        <div key={key} className="mb-32 max-w-7xl mx-auto">
          
          {/* SECTION TITLE */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6b8] via-[#d6b46c] to-[#f5e6b8]">
              {title}
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#d6b46c] to-transparent" />
          </div>

          {/* GRID */}
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {perfumeCollections[key].map((perfume) => (
              <PerfumeCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
