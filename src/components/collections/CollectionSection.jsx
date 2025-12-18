import { perfumeCollections } from "../../data/perfumes";
import PerfumeCard from "./PerfumeCard";

export default function CollectionSection() {
  const categories = [
    { key: "perfume", title: "Perfume Collections", count: 18 },
    { key: "men", title: "Men's Collection", count: 11 },
    { key: "women", title: "Women's Collection", count: 2 },
    { key: "unisex", title: "Unisex Collection", count: 4 }
  ];

  return (
    <section className="px-6 py-24">
      {categories.map(({ key, title, count }) => (
        <div key={key} className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-serif text-[#d6cfaa]">
            {title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {perfumeCollections[key].map((p) => (
              <PerfumeCard key={p.id} perfume={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
