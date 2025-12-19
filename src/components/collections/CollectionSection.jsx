import { perfumeCollections } from "../../data/perfumeCollections";
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
      className="bg-gradient-to-b from-black via-[#04142c] to-black px-6 py-32"
    >
      {categories.map(({ key, title }) => {
        const items = perfumeCollections[key];
        const isWomen = key === "women";
        const isPerfume = key === "perfume";

        return (
          <div
            key={key}
            id={key}
            className="mb-32 max-w-7xl mx-auto scroll-mt-32"
          >
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6b8] via-[#d6b46c] to-[#f5e6b8]">
                {title}
              </h2>
              <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#d6b46c] to-transparent" />
            </div>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* WOMENS — 2 ITEMS, COLUMNS 2–3 */}
              {isWomen &&
                items.map((perfume) => (
                  <div
                    key={perfume.id}
                    className="lg:col-span-1 lg:col-start-2 even:lg:col-start-3"
                  >
                    <PerfumeCard perfume={perfume} />
                  </div>
                ))}

              {/* PERFUME COLLECTIONS — ALL EXCEPT LAST 2 */}
              {isPerfume &&
                items.slice(0, -2).map((perfume) => (
                  <PerfumeCard key={perfume.id} perfume={perfume} />
                ))}

              {/* PERFUME COLLECTIONS — LAST 2 IN COLUMNS 2–3 */}
              {isPerfume &&
                items.slice(-2).map((perfume, index) => (
                  <div
                    key={perfume.id}
                    className={`lg:col-span-1 ${
                      index === 0 ? "lg:col-start-2" : "lg:col-start-3"
                    }`}
                  >
                    <PerfumeCard perfume={perfume} />
                  </div>
                ))}

              {/* NORMAL SECTIONS */}
              {!isWomen &&
                !isPerfume &&
                items.map((perfume) => (
                  <PerfumeCard key={perfume.id} perfume={perfume} />
                ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
