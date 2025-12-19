import { scentFinder } from "../../data/scentFinder";

export default function ScentFinderModal({ open, onClose }) {
  if (!open) return null;

  const colors = {
    "Date Night": "from-pink-500 to-rose-600",
    "Party & Event": "from-purple-500 to-indigo-600",
    "Rainy & Cold": "from-sky-500 to-blue-700",
    "Special Occasion": "from-orange-500 to-red-600",
    Summer: "from-amber-400 to-orange-500",
    Versatile: "from-emerald-500 to-teal-600",
  };

  const icons = {
    "Date Night": "♡",
    "Party & Event": "♪",
    "Rainy & Cold": "☁",
    "Special Occasion": "🎁",
    Summer: "☀",
    Versatile: "✦",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 w-full max-w-4xl rounded-2xl
        bg-gradient-to-b from-[#0a1c36] to-[#04142c]
        p-10 shadow-2xl border border-white/10">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-yellow-400 text-xl hover:scale-110 transition"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-[#f5e6b8]">
            Find Your Perfect Scent
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Select an occasion to discover matching fragrances
          </p>
        </div>

        {/* OPTIONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scentFinder.map((item) => (
            <button
              key={item.event}
              className={`
                group h-28 rounded-xl
                bg-gradient-to-r ${colors[item.event]}
                flex flex-col items-center justify-center
                text-white font-medium
                shadow-lg transition
                hover:scale-105
              `}
            >
              <span className="text-3xl mb-2">
                {icons[item.event]}
              </span>
              <span className="text-sm tracking-wide">
                {item.event}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
