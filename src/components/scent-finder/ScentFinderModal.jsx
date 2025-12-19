import { useState } from "react";
import { perfumes } from "../../data/perfumes";

export default function ScentFinderModal({ open, onClose }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (!open) return null;

  const events = [
    { label: "Date Night", icon: "❤️", gradient: "from-pink-500 to-rose-600" },
    { label: "Party & Events", icon: "🎵", gradient: "from-purple-500 to-indigo-600" },
    { label: "Rainy & Cold", icon: "☁️", gradient: "from-sky-500 to-blue-600" },
    { label: "Special Occasion", icon: "🎁", gradient: "from-orange-500 to-red-600" },
    { label: "Summer", icon: "☀️", gradient: "from-amber-400 to-orange-500" },
    { label: "Versatile", icon: "✨", gradient: "from-emerald-500 to-teal-600" },
  ];

  const eventPerfumeMap = {
    "Date Night": ["Dior Sauvage", "YSL Y", "Chanel Coco", "Jazz Club"],
    "Party & Events": ["Paco Rabanne", "Versace Eros", "Jean Paul Gaultier Le Male"],
    "Rainy & Cold": ["Dior Homme", "By the Fireplace"],
    "Special Occasion": ["Bleu de Chanel", "YSL Libre"],
    Summer: ["Acqua di Gio", "Dolce", "Byredo"],
    Versatile: ["Prada Luna", "Montblanc Explorer", "CK One", "Narciso Rodriguez"],
  };

  const filteredPerfumes = selectedEvent
    ? perfumes.filter((p) =>
        eventPerfumeMap[selectedEvent]?.some((name) =>
          p.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    : [];

  const centerItems = filteredPerfumes.length <= 3;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 w-full max-w-5xl rounded-2xl bg-gradient-to-b from-[#0b1c33] to-[#06142a] p-10 shadow-2xl border border-white/10">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-yellow-400 text-xl hover:scale-110 transition"
        >
          ✕
        </button>

        {/* EVENTS */}
        {!selectedEvent && (
          <>
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-[#f5e6b8]">
                Find Your Perfect Scent
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Select an occasion to discover matching fragrances
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedEvent(item.label)}
                  className={`h-28 rounded-xl bg-gradient-to-r ${item.gradient}
                    flex flex-col items-center justify-center gap-2
                    text-white font-medium shadow-lg transition hover:scale-105`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm tracking-wide">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* PERFUMES */}
        {selectedEvent && (
          <>
            <div className="mb-8">
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-sm text-yellow-400 hover:underline"
              >
                ← Back to occasions
              </button>

              <h3 className="mt-4 font-serif text-2xl text-[#f5e6b8]">
                {selectedEvent}
              </h3>
              <p className="text-sm text-gray-400">
                {filteredPerfumes.length} best-suited fragrances
              </p>
            </div>

            {/* CENTER IF 2–3 ITEMS */}
            <div
              className={
                centerItems
                  ? "flex flex-wrap justify-center gap-6"
                  : "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              }
            >
              {filteredPerfumes.map((perfume) => (
                <div
                  key={perfume.id}
                  className="
                    group w-[220px] rounded-2xl bg-[#04142c] p-4
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.04]
                    hover:shadow-[0_0_28px_rgba(245,230,184,0.5)]
                    hover:ring-1 hover:ring-[#f5e6b8]/60
                  "
                >
                  <div className="h-40 w-full rounded-xl bg-black/40 flex items-center justify-center overflow-hidden">
                    <img
                      src={perfume.hoverImage}
                      alt={perfume.name}
                      className="
                        h-full object-contain
                        transition duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <h4 className="mt-4 text-sm font-serif text-[#f5e6b8] text-center">
                    {perfume.name}
                  </h4>

                  <p className="mt-1 text-xs text-gray-400 text-center line-clamp-2">
                    {perfume.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
